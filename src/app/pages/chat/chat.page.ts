import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientDataService } from '../../api/client-data.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

import { IonContent } from '@ionic/angular';
import { GlobalService } from '../../api/global.service';
import { CommonService } from '../../api/common.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  userID: any;
  commentData: any;
  subscription: any;
  chatLoader: any;
  userDietComment: any;
  today: any;
  postedDate: any;
  isClient: boolean;
  userData: any;

  constructor(public clientService: ClientDataService, public loadingController: LoadingController, public toastr: ToastController, public afDataBase: AngularFireDatabase, public globlaComp: GlobalService, public commonService: CommonService) { 
    this.userID = window.localStorage.getItem('authID');

    // the below user data should be a fresh call always to avoid conflicts
    this.userID = window.localStorage.getItem('authID');
    this.commonService.getprofile(this.userID).then((data) =>{
      this.userData = data;
      // console.log("user data in custom diet", this.userData);
      this.isClient = (this.userData.client == true) ? true : false;
      if(this.isClient) {
        this.getComments();
      }
    });
  }

  ngOnInit() {
  }

  getComments(){
    // subscribe to the client comment object
    this.subscription = this.afDataBase.list('/client/'+this.userID+'/chats/comment').valueChanges().subscribe((data) => {
      this.commentData = data;
      setTimeout(()=> {
        this.content.scrollToBottom();
      }, 1000); 
    });
    this.clearNotification();
  }

  clearNotification(){
    this.afDataBase.database.ref(`/client/`+this.userID+`/chats`).child('adminMsgCount').transaction(function() {
      return 0;
    });
  }

  addAdminNotification(){
    this.afDataBase.database.ref(`/client/`+this.userID+`/chats`).child('userMsgCount').transaction(function(userMsgCount) {
      return userMsgCount + 1;
    });
  }

  addUserComment(){
    if(this.userDietComment.trim() != ''){
      // post the comment
      let timeNow = new Date();
      // console.log("present Date", timeNow);
      let newCommentObj = {
        "time": JSON.stringify(timeNow),
        "message": this.userDietComment,
        "userID": this.userID
      }

        this.afDataBase.database.ref(`/client/`+this.userID).child('chats').child('comment').push(newCommentObj)
        .then((data) => {
          // after adding comment, focus on the comment or move to bottom of the page
          this.content.scrollToBottom();
          this.addAdminNotification();
          this.userDietComment = "";
        });
    }
  }

  timeDifference(postedDate){
    this.today = new Date();
    this.postedDate = new Date(JSON.parse(postedDate));
    var diffMs = (this.today - this.postedDate);
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    if(diffDays > 0){
      return diffDays +" days";
    } else if(diffHrs > 0){
      return diffHrs +" hrs";
    } else if(diffMins > 0){
      return diffMins +" min";
    } else {
      return ""
    }
  }

  async presentLoading(msg) {
    this.chatLoader = await this.loadingController.create({
      message: msg
    });
    await this.chatLoader.present();
  }

  async dismissLoader(){
    await this.chatLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
