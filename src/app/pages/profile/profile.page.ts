import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../../api/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile : any = {};

  imgPath: any;
  filePath = 'images/' + window.localStorage.getItem("authID") + '/';
  uid: any;
  profileLoader: any;

  constructor(public toastr: ToastController, public loadingController: LoadingController, public afDataBase: AngularFireDatabase, public storage: AngularFireStorage, public events: Events,public router: Router, public globalComp: GlobalService) {
    // this.profile = {
    //   'uid':window.localStorage.getItem("authID"),
    //   'dob': '',
    //   'email': '',
    //   'fullname': '',
    //   'gender': '',
    //   'height':'',
    //   'weight':'',
    //   'client': '',
    //   'username': '',
    //   'description': '',
    //   'fbTermAcceptance': '',
    //   'disabled': ''
    // }
   }

  ngOnInit() {
    this.presentLoading('Loading data...');
    // Call function to load the data from database
   
    this.uid = window.localStorage.getItem("authID");
    this.imgPath = this.globalComp.getUserImage();
    this.profile = this.globalComp.getUserData();
    setTimeout(() => {
      this.dismissLoader();
    },1000);
  }

  ionViewDidLoad(){
  }

  triggerUpload(){
    document.getElementById('file-uploader').click();
  }

  uploadFile(event) {
    this.presentLoading('Uploading Image...');

    const file = event.target.files[0];
    const fileRef = this.storage.ref(this.filePath);
    this.storage.ref(this.filePath).put(file).then((data) => {
      if(data.state == "success"){
        this.imgPath = this.globalComp.getUserImage();
        // loading data explicitly after the image loaded as we are not setting root page as tab.
        // as we are setting the root page to TabsPage in the update profile function, it triggers the loadData function anyways 
        this.events.publish('loadData');
        this.presentToast('Profile image updated');
      } else {
        this.presentToast('Problem uploading image. Please try after sometime.');
      }
      this.dismissLoader();
    }).catch((err)=>{
      this.presentToast('There was a problem uploading image. Try after sometime');
    });
  }

  validateForm(form){
    if(form.valid){
      this.updateUserData();
    } else {
      this.presentToast('Please fill required fields');
    }
  }

  updateUserData() {
    this.presentLoading('Saving data...');
    // handle undefined values for new registered users
    let tempData = this.profile;

    for (let key in tempData) {
      if(tempData[key] == undefined){
        this.profile[key] = "";
      }
    }
    // console.log("user data posting", this.profile);

    this.afDataBase.database.ref(`profiles/`+this.uid).set(this.profile)
    .then(() => {
      this.presentToast('Profile Updated!');
      this.globalComp.updateUserData();
      this.dismissLoader();
      this.router.navigateByUrl('/tabs');
    }, function(error) {
      this.dismissLoader();
      this.presentToast('There was a problem updating profile. Try after sometime');
    });
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  async presentLoading(msg) {
    this.profileLoader = await this.loadingController.create({
      message: msg
    });
    await this.profileLoader.present();
  }

  async dismissLoader(){
    await this.profileLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }
}
