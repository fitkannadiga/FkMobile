import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Events, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { CommonService } from '../../api/common.service';
import { GlobalService } from '../../api/global.service';
import { ArticleDetailsService } from '../../api/article-details.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailsPage implements OnInit {

  ArticleData: any;
  articleCommentObject: any = [];
  userComment: any = "";
  liked: boolean = false;
  newCommentObj: any = {};
  orderingCommentObj: any = [];
  articleLang: string;
  articleDetailsLoader: any;
  articleCommentLen: number = 0;

  constructor(public events: Events, public toastr: ToastController, public loadingController: LoadingController, public afDataBase: AngularFireDatabase, public commonService: CommonService, public globalComp: GlobalService, public alertCtrl: AlertController, public articleService: ArticleDetailsService) {
    let articleObj = this.articleService.getArticleData();
    this.ArticleData = articleObj.data;
    this.articleLang = articleObj.lang;
    // call function to boost the view count
    this.articleCommentObject = this.ArticleData.comment;
    if(this.articleCommentObject != undefined || this.articleCommentObject != null){
      this.articleCommentLen = this.getArticleCommentLen(this.articleCommentObject);
    } else {
      this.articleCommentLen = 0;
    }
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArticleDetailsPage');
  }

  getArticleCommentLen(commentObj){
    var commentCount = 0;
    for(var c_key in commentObj){
      commentCount++; 
      if(commentObj[c_key].childComment){
        var temp_child_comment = commentObj[c_key].childComment;
        for(var cc_key in temp_child_comment){
          commentCount++; 
        }
      }
    }
    return commentCount;
  }

  postComment(articleIndex){
    if(this.userComment == "" || this.userComment == undefined){
      this.presentToast("Please type something...");
    } else {
      this.newCommentObj = {
        "comment": this.userComment,
        "userImg": this.globalComp.getUserImage(),
        "userName": this.globalComp.getUserName()
      }

      this.presentLoading('Posting comment...');
        this.afDataBase.database.ref(`/articles/english`).child(articleIndex).child('comment').push(this.newCommentObj)
        .then((data) => {
          this.afDataBase.database.ref(`/articles/kannada`).child(articleIndex).child('comment').push(this.newCommentObj);
          this.presentToast("Comment added");
          this.articleCommentLen = this.articleCommentLen + 1;
          this.events.publish('getUpdatedArticle');
          this.dismissLoader();
          this.userComment = "";

          // Update the local comment object and call the load comment section in background
          //this.articleCommentObject.push(this.newCommentObj);
          this.getNewComments().then((data) => {
            let newCommentsData = data;
            this.sortCommentObject(newCommentsData);
          });
        });
    }
  }

  sortCommentObject(commentData){
    let tempCommentObj;
      let tempComment  = JSON.parse(JSON.stringify(commentData));
      commentData = [];
      if(Object.keys(tempComment).length > 0){
        for(var t_key in tempComment){
          tempComment[t_key]['id'] = t_key;
          
          tempCommentObj = tempComment[t_key];
          if (tempCommentObj.hasOwnProperty('childComment')) {
            let tempChildComment  = JSON.parse(JSON.stringify(tempCommentObj['childComment']));
            tempCommentObj['childComment'] = [];
            if(Object.keys(tempChildComment).length > 0){
              for(var tc_key in tempChildComment){
                tempChildComment[tc_key]['id'] = tc_key;
                tempCommentObj['childComment'].push(tempChildComment[tc_key]);
              }
            } else {
              tempCommentObj['childComment'].push([]);
            }
          }
          commentData.push(tempComment[t_key]);
        }
        
      } else {
        commentData.push([]);
      }
      this.articleCommentObject = commentData;
  }

  getNewComments(){
    var promise = new Promise((resolve, reject) => {
        this.afDataBase.database.ref(`/articles/english`).child(this.ArticleData.id).child('comment').once('value', (snapshot) => {
            resolve(snapshot.val());
        }).catch((err) => {
            reject(err);
        })
    })
    return promise;
  }

  totalComments(commentObj){
    var commentCount = 0;
    for(var c_key in commentObj){
      commentCount++; 
      if(commentObj[c_key].childComment){
        var temp_child_comment = commentObj[c_key].childComment;
        for(var cc_key in temp_child_comment){
          commentCount++; 
        }
      }
    }
    return commentCount;
  }

  addView(){
    let newView = parseInt(this.ArticleData.view)+1;
    this.afDataBase.database.ref(`/articles/english`).child(this.ArticleData.id).child('view').transaction(function(view) {
      return view + 1;
    });
    this.afDataBase.database.ref(`/articles/kannada`).child(this.ArticleData.id).child('view').transaction(function(view) {
      return view + 1;
    });
  }

  async showPrompt(commentID) {
    const prompt = await this.alertCtrl.create({
      header: 'Add your reply',
      message: "",
      inputs: [
        {
          name: 'comment',
          placeholder: 'Comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Reply',
          handler: data => {
            // console.log('Saved clicked', data);
            if(data.comment != ""){
              this.addChildComment(commentID, data.comment);
            }
          }
        }
      ]
    });
    return await prompt.present();
  }

  addChildComment(id, comment){
    let childComment = {
        "comment": comment,
        "userImg": this.globalComp.getUserImage(),
        "userName": this.globalComp.getUserName()
      }
      this.afDataBase.database.ref(`/articles/english/`+this.ArticleData.id+`/comment`).child(id).child('childComment').push(childComment)
        .then((data) => {
          this.afDataBase.database.ref(`/articles/kannada/`+this.ArticleData.id+`/comment`).child(id).child('childComment').push(childComment).then((data) => {
            this.presentToast("Comment added");
            this.articleCommentLen = this.articleCommentLen + 1;
            for(var comment_key in  this.articleCommentObject){
              if(this.articleCommentObject[comment_key].id == id){
                // below is the check to make sure we push to child comment object by creating it as an empty object in initiall push
                if(this.articleCommentObject[comment_key]['childComment'] == undefined){
                  this.articleCommentObject[comment_key]['childComment'] = [];
                  this.articleCommentObject[comment_key]['childComment'].push(childComment);
                } else {
                  this.articleCommentObject[comment_key]['childComment'].push(childComment);
                }
                
              }
            }
            this.events.publish('getUpdatedArticle');
          });
        });
  }

  async presentLoading(msg) {
    this.articleDetailsLoader = await this.loadingController.create({
      message: msg
    });
    await this.articleDetailsLoader.present();
  }

  async dismissLoader(){
    await this.articleDetailsLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
