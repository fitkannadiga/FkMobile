import { Component, OnInit } from '@angular/core';
import { LoadingController, Events, AlertController, ToastController } from '@ionic/angular';
import { CommonService } from '../../api/common.service';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { ArticleDetailsService } from '../../api/article-details.service';
import { AngularFireDatabase } from '@angular/fire/database';

import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  presentLang: string = 'English';
  articleDataObject: any;
  orderingCommentObj: any = [];
  langSelected: boolean;
  articleLoader: any;
  loaderCounter: number;
  subscription;
  share: boolean = false;
  dataForShare: any;

  fakeData: boolean = true;
  fakeList: any = Array<number>(10);

  options : InAppBrowserOptions = {
      location : 'yes',//Or 'no' 
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls 
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only 
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only 
      toolbar : 'yes', //iOS only 
      enableViewportScale : 'no', //iOS only 
      allowInlineMediaPlayback : 'no',//iOS only 
      presentationstyle : 'pagesheet',//iOS only 
      fullscreen : 'yes',//Windows only    
  };

  constructor(public loadingController: LoadingController, public events: Events, private alertCtrl: AlertController, public commonService: CommonService, public IAB: InAppBrowser, public toastr: ToastController, public router: Router, public articleService: ArticleDetailsService, public afDataBase: AngularFireDatabase, public socialShare: SocialSharing, public file: File) {
    this.loaderCounter = 0;
    this.getArticles();


    events.subscribe('getUpdatedArticle', () => {
      this.loadArticles();
    });
  }

  ngOnInit() {
    // set language to default english
    this.langSelected = true;
  }

  getArticles(){
    this.commonService.getArticles('english').then(data => {
      this.articleDataObject = data;
      this.articleDataObject = this.restructureComment(this.articleDataObject);
      setTimeout(() => this.fakeData = false, 1000);
    });
  }

  loadArticles() {
    let lang = (this.langSelected) ? 'english' : 'kannada';
    this.commonService.getArticles(lang).then(data => {
      this.articleDataObject = data;
      this.articleDataObject = this.restructureComment(this.articleDataObject);
    });
  }

  public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.IAB.create(url,target,this.options);
  }

  restructureComment(dataObject){
    let tempOb, tempCommentObj;
    for(var data_key in dataObject){
      tempOb = dataObject[data_key];
      if (tempOb.hasOwnProperty('comment')) {
        let tempComment  = JSON.parse(JSON.stringify(tempOb['comment']));
        tempOb['comment'] = [];
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
            tempOb['comment'].push(tempComment[t_key]);
          }
          
        } else {
          tempOb['comment'].push([]);
        }
      }
    }
    return dataObject;
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

  async presentLangSelector(){
    const alert = await this.alertCtrl.create({
      header: 'Select Language',
      inputs : [
      {
          type:'radio',
          label:'English',
          value:'english',
          checked: this.langSelected
      },
      {
          type:'radio',
          label:'ಕನ್ನಡ',
          value:'kannada',
          checked: !this.langSelected
      }],
      buttons : [
      {
          text: "Cancel",
          handler: data => {
            // Do nothing
          }
      },
      {
          text: "Ok",
          handler: data => {
            if(data == "kannada"){
              this.langSelected = false;
              this.presentLang = "ಕನ್ನಡ";
            } else {
              this.langSelected = true;
              this.presentLang = "English";
            }
            this.loadArticles();
            //this.loadKannadaArticles();
          }
      }]});
      return await alert.present();
  }

  openArticle(articleObject, index){
    // open modal and pass the object
    // Before opening make a call to increase the view count
    this.addView(index);
    this.articleService.setArticleDetails(articleObject, this.presentLang);
    this.router.navigateByUrl('/article-details');
    // this.loadArticles();
  }

  addView(index){
    this.afDataBase.database.ref(`/articles/english/`+index).child('view').transaction(function(view) {
      return view + 1;
    });
    this.afDataBase.database.ref(`/articles/kannada/`+index).child('view').transaction(function(view) {
      return view + 1;
    })
  }

  openShareOptions(data, event){
    event.preventDefault();
    this.share = true;
    this.dataForShare = data;
  }

  async shareTwitter() {
    this.share = false;
    let url = 'https://www.facebook.com/fitkannadiga';
    // Either URL or Image
    this.socialShare.shareViaTwitter(null, null, url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  async shareWhatsApp() {
    // Text + Image or URL works
    this.share = false;
    let url = 'https://www.facebook.com/fitkannadiga';
    this.socialShare.shareViaWhatsApp(this.dataForShare.title, null, url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  async resolveLocalFile() {
    return this.file.copyFile(`${this.file.applicationDirectory}www/assets/imgs/`, 'logo.png', this.file.cacheDirectory, `${new Date().getTime()}.png`);
  }
 
  removeTempFile(name) {
    this.file.removeFile(this.file.cacheDirectory, name);
  }
 
  async shareEmail() {
    // let file = await this.resolveLocalFile().then((data)=> {
    //   console.log("data from file", data);
    // });
 
    // this.socialShare.shareViaEmail(this.dataForShare.title, 'Download Fit Kannadiga app for more!', ['fitkannadiga@gmail.com'], null, null, file.nativeURL).then(() => {
    //   this.removeTempFile(file.name);
    // }).catch((e) => {
    //   // Error!
    // });
  }
 
  async shareFacebook() {
    // Image or URL works
    this.socialShare.shareViaFacebook('Fit Kannadiga', './assets/imgs/logo.png', 'https://www.facebook.com/fitkanndiga').then(() => {
      console.log("fb shared successfully!!");
    }).catch((error) => {
      console.log("FB error", error);
    });
  }

  async shareInstagram() {
      this.socialShare.shareViaInstagram(null, './assets/imgs/logo.png').then(() => {
        // this.removeTempFile(data.name);
        console.log("insta shared");
      }).catch((error) => {
        console.log("INSTA error", error);
      });
  }

  // facebookShare(){
  //   this.share = false;
  //   let url = 'https://www.facebook.com/fitkannadiga';
  //   this.socialShare.shareViaFacebook(this.dataForShare.title, this.dataForShare.img_path, url).then((data)=> {
  //     console.log("facebook share successful!!!", data);
  //   }).catch(error => {
  //     console.log("facebook share failure!!!");
  //   });
  // }

  // whatsappShare(){
  //   this.share = false;
  //   let url = 'https://www.facebook.com/fitkannadiga';
  //   this.socialShare.shareViaWhatsApp(this.dataForShare.title, this.dataForShare.img_path, url).then((data)=> {
  //     console.log("whatsapp share successful!!!", data);
  //   }).catch(error => {
  //     console.log("whatsapp share failure!!!");
  //   });
  // }

  // instaShare(){
  //   this.share = false;
  //   let url = 'https://www.facebook.com/fitkannadiga';
  //   this.socialShare.shareViaWhatsApp(this.dataForShare.title, this.dataForShare.img_path, url).then((data)=> {
  //     console.log("whatsapp share successful!!!", data);
  //   }).catch(error => {
  //     console.log("whatsapp share failure!!!");
  //   });
  // }

  async presentLoading(msg) {
    this.articleLoader = await this.loadingController.create({
      message: msg
    });
    await this.articleLoader.present();
  }

  async dismissLoader(){
    await this.articleLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
