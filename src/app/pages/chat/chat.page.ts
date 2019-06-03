import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClientDataService } from '../../api/client-data.service';
import { LoadingController, ToastController, Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

import { IonContent } from '@ionic/angular';
import { GlobalService } from '../../api/global.service';
import { CommonService } from '../../api/common.service';
import { ViewEncapsulation } from '@angular/core';
import { element } from '@angular/core/src/render3';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { Crop } from '@ionic-native/crop/ngx';
import { Input } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  @ViewChild('myInput') myInput;

  userID: any;
  commentData: any = [];
  subscription: any;
  chatLoader: any;
  userDietComment: any;
  today: any;
  postedDate: any;
  isClient: boolean;
  userData: any;
  previousDate: any = "";
  fakeChat: boolean = true;
  addImage: boolean = true;
  showImage: boolean = false;
  imgSrc: any = '';

  // For comment time and date
  presentDate: any = '';
  presentMonth: any = '';
  presentYear: any = '';

  // below variables used to make the chat faster
  presentChatBubbleCount: number = 0;


  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public clientService: ClientDataService, public loadingController: LoadingController, public toastr: ToastController, public afDataBase: AngularFireDatabase, public globlaComp: GlobalService, public commonService: CommonService, private camera: Camera, public storage: AngularFireStorage, public crop: Crop, private platform: Platform, private router: Router) { 
    this.userID = window.localStorage.getItem('authID');

    this.presentDate = new Date().getDate();
    let month = new Date().getMonth();
    this.presentMonth = this.getMonth(month);
    this.presentYear = new Date().getFullYear();

    console.log("today>>", this.presentDate +"-"+ this.presentMonth +"-"+ this.presentYear);
    

    // the below user data should be a fresh call always to avoid conflicts
    this.userID = window.localStorage.getItem('authID');
    this.commonService.getprofile(this.userID).then((data) =>{
      this.userData = data;
      // console.log("user data in custom diet", this.userData);
      this.isClient = (this.userData.client == true) ? true : false;
      if(this.isClient) {
        this.getComments();
        // this.loadSavedComments();
      }
    });

    //  register back button to hide the overlay images if shown
    this.platform.backButton.subscribe((data)=> { 
      if(this.router.url.indexOf('chat') > -1){
        if(this.showImage){
          this.showImage = false;
        }
      }
    });
  }

  ngOnInit() {
  }

  getMonth(month){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[month];
  }

  getComments(){
    // subscribe to the client comment object
    this.subscription = this.afDataBase.list('/client/'+this.userID+'/chats/comment').valueChanges().subscribe((data) => {
    // this.commonService.getComments('/client/'+this.userID+'/chats/comment').then(data => {
      console.log("comments", data);
      // this.commentData = data;
      if(this.presentChatBubbleCount == 0){
        this.setComments(data);
        this.presentChatBubbleCount = data.length;
      } else {
        // push the data to the chat if the user is already present on chat page
        this.addCommentsToObj(data);
      }
      this.fakeChat = false;
      
      setTimeout(()=> {
        this.content.scrollToBottom(0);
      }, 1000); 
    }, function(err){
      this.fakeChat = false;
      this.presentToast('No Chat to display');
    });
    this.clearNotification();
  }

  addCommentsToObj(data){
    let tempChatCount = this.presentChatBubbleCount;
    console.log("tempChatCount OLD>>>", tempChatCount);
    
    // take only extra caht objects
    let newChatBubbleLen = data.length;
    console.log("newChatBubbleLen OLD>>>", newChatBubbleLen);

    let newChat = data.slice(tempChatCount, newChatBubbleLen);
    // set the new chat length to the data length
    this.presentChatBubbleCount = data.length;

    console.log("new chatssss", newChat);
    newChat.forEach((chat) => {
      this.commentData.push({
          'userID': chat.userID,
          'message' : chat.message,
          'day' : this.getDateToDisplay(chat.time),
          'time' : this.timeDifference(chat.time)
        })
    });
    
  }

  setComments(data){
    this.commentData = data.map(comment => {
      return {
        'userID': comment.userID,
        'message' : comment.message,
        'day' : this.getDateToDisplay(comment.time),
        'time' : this.timeDifference(comment.time)
      }
    })
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

  goBottom(){
    this.content.scrollToBottom(0);
  }

  scrollToBottom(){
    setTimeout(()=>this.content.scrollToBottom(0), 1000);
  }

  scroll(){
    this.addImage = (this.userDietComment.trim().length > 0) ? false : true;
    this.content.scrollToBottom(0);
  }

  showImageIcon(){
    console.log("blur called");
      this.addImage = (this.userDietComment.trim().length > 0) ? false : true;
  }

  async openCamera(){

    const result = await this.camera.getPicture(this.options);
    const filePath =  `chatImages/${this.userID}/${result.name}`;
    const image = `data:image/jpeg;base64,${result}`;

    console.log("image from camera>>", result);
    console.log("image path from camera>>", filePath);
    const imageBlob = this.b64toBlob(image, 'image/jpeg', 512);
    // const imageBlob = result.blob();
    const pictures = this.storage.ref(filePath);
    pictures.put(imageBlob).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
    
    // this.camera.getPicture(this.options).then((imageData) => {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64 (DATA_URL):
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    //   console.log("image data from upload>>>>", imageData);
    //  }, (err) => {
    //   // Handle error
    //  });
  }

  //https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
  b64toBlob(b64Data: string, contentType: string, sliceSize: number) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  openGallery(){
    document.getElementById('file-uploader').click();
  }

  // function to upload image from gallery which can be extended to all files
  uploadFile(event) {
    const file = event.target.files[0];
    console.log("file data >>>>", file);
    // const fileRef = this.storage.ref(this.filePath);
    // The storage path
    const path = `chatImages/${this.userID}/${file.name}`;
    // Totally optional metadata
    const customMetadata = { app: 'Fit Kannadiga' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })
    
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.task.percentageChanges().subscribe(data => {
      console.log("percentage data image upload>>", data);
      if(data == 100){
        // Push the chat message so that user can see the progress also with image upload
        setTimeout(()=> {
          this.adduserImage(file.name);
          this.percentage = null;
        }, 1000);
      }
    });
  }

  loadImageAgain(event){
    console.log("loadImageAgain event", event);
    
    setTimeout(() => this.reloadImg(event), 1000);
  }

  reloadImg(event){
    var source = event.src;
    event.src = source;
    console.log("source changed to", event.src);
  }

  adduserImage(fileName){
    // post the comment with image tag
    let comment = '<img onerror="loadImageAgain($event);" class="user-img" src="https://firebasestorage.googleapis.com/v0/b/fit-kannadiga.appspot.com/o/chatImages%2F'+this.userID+'%2F'+fileName+'?alt=media"/>'
    let timeNow = new Date();
    // console.log("present Date", timeNow);
    let newCommentObj = {
      "time": JSON.stringify(timeNow),
      "message": comment,
      "userID": this.userID
    }

    this.afDataBase.database.ref(`/client/`+this.userID).child('chats').child('comment').push(newCommentObj)
    .then((data) => {
      // after adding comment, focus on the comment or move to bottom of the page
      setTimeout(()=>this.content.scrollToBottom(0), 1000);
      this.addAdminNotification();
      this.userDietComment = "";
    });
  }

  addUserComment(){
    if(this.userDietComment.trim() != ''){
      // post the comment
      let comment = '<p>'+this.userDietComment+'</p>'
      let timeNow = new Date();
      // console.log("present Date", timeNow);
      let newCommentObj = {
        "time": JSON.stringify(timeNow),
        "message": this.urlify(comment),
        "userID": this.userID
      }

        this.afDataBase.database.ref(`/client/`+this.userID).child('chats').child('comment').push(newCommentObj)
        .then((data) => {
          // after adding comment, focus on the comment or move to bottom of the page
          setTimeout(()=>this.content.scrollToBottom(0), 200);
          this.addAdminNotification();
          this.userDietComment = "";
        });
    }
  }

  urlify(text) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a target="_blank" href="' + url + '">' + url + '</a>';
    })
  }

  timeDifference(postedDate){
    // debugger;
    // this.today = new Date();
    // this.postedDate = new Date(JSON.parse(postedDate));
    // var diffMs = (this.today - this.postedDate);
    // var diffDays = Math.floor(diffMs / 86400000); // days
    // var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    // var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    // if(diffDays > 0){
    //   return diffDays +" days";
    // } else if(diffHrs > 0){
    //   return diffHrs +" hrs";
    // } else if(diffMins > 0){
    //   return diffMins +" min";
    // } else {
    //   return ""
    // }

    let day = new Date(JSON.parse(postedDate)).getDate();
    let month = this.getMonth(new Date(JSON.parse(postedDate)).getMonth());
    let year = new Date(JSON.parse(postedDate)).getFullYear();
    let time = this.getTime(postedDate);

    let setDate = (this.previousDate == (day+" "+month)) ? false : true;
    console.log("previousDate>>>", this.previousDate);
    console.log("present dae>>>",day+" "+month);
    
    this.previousDate = day+" "+month; 

    // if date is same, then return only once
    if(setDate){
      if(year == this.presentYear){
        if(month == this.presentMonth){
          if(day == this.presentDate){
            return time;
          } else {
            return day +" "+month +" " +time;
          }
        } else {
          return day +" "+month +" " +time;
        }
      } else {
        return day +" "+month +" "+year;
      }
    } else {
      return time;
    }
  }

  getDateToDisplay(postedDate){
    let day = new Date(JSON.parse(postedDate)).getDate();
    let month = this.getMonth(new Date(JSON.parse(postedDate)).getMonth());
    let year = new Date(JSON.parse(postedDate)).getFullYear();
    let time = this.getTime(postedDate);

    let setDate = (this.previousDate == (day+" "+month)) ? false : true;
    console.log("previousDate>>>", this.previousDate);
    console.log("present dae>>>",day+" "+month);
    
    this.previousDate = day+" "+month; 

    // if date is same, then return only once
    if(setDate){
      return day +" "+month +" "+year;
    }
  }

  getTime(data){
    let hours = new Date(JSON.parse(data)).getHours();
    let mins = new Date(JSON.parse(data)).getMinutes();
    if(hours > 12){
      return (hours-12)+":"+((mins < 10) ? '0'+mins : mins)+" PM"
    } else if(hours == 12) {
      return hours+":"+((mins < 10) ? '0'+mins : mins)+" PM"
    } else {
      return hours+":"+((mins < 10) ? '0'+mins : mins)+" AM"
    }
  }

  openImg(commentData){
    console.log('comment Data', commentData);
    var msg = commentData.message;
    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = msg;
    if(htmlObject.firstElementChild.tagName == 'IMG'){
      // open the image in the popup
      this.imgSrc = htmlObject.firstElementChild.getAttribute('src');
      console.log("imgSrc direct", this.imgSrc);
      console.log("imgSrc value", this.imgSrc['value']);
      this.showImage = true;
    } else {
      this.imgSrc = "";
      this.showImage = false;
    }
  }

  closeImg(){
    this.showImage = false;
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
