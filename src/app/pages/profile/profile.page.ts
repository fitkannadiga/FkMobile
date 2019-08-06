import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../../api/global.service';
import { Crop } from '@ionic-native/crop/ngx';
import { Observable } from 'rxjs';
import { Camera } from '@ionic-native/camera/ngx';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile : any = {};
  public myPhotosRef: any;
  public myPhoto: any;

  imgPath: any;
  // filePath = 'profileImage' + window.localStorage.getItem("authID") + '/';
  filePath = 'profileImage';
  uid: any;
  profileLoader: any;

  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  fileUrl: any = null;
  respData: any;

  constructor(public toastr: ToastController, public loadingController: LoadingController, public afDataBase: AngularFireDatabase, public storage: AngularFireStorage, public events: Events,public router: Router, public globalComp: GlobalService, public crop: Crop, private imagePicker: ImagePicker,private transfer: FileTransfer, public camera: Camera) {
    this.myPhotosRef = this.storage.ref(this.filePath);
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

  selectPhoto(): void {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 50,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhotoToFirebase();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
      this.presentToast(JSON.stringify(error));
    });
  }

  uploadPhotoToFirebase(){
    this.myPhotosRef.child(window.localStorage.getItem("authID"))
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        // this.imgPath = savedPicture.downloadURL;
        this.imgPath = 'https://firebasestorage.googleapis.com/v0/b/fit-kannadiga.appspot.com/o/profileImage%2F'+this.uid+'?alt=media'+'&random='+Math.floor(Math.random()*230)+90;;
        this.events.publish('loadData');
        this.dismissLoader();
        this.presentToast('Profile image updated');
    }).catch((err)=>{
        this.dismissLoader();
        this.presentToast('There was a problem uploading image. Try after sometime');
    });
  }

  triggerUpload(){
    document.getElementById('file-uploader').click();
  }



  uploadFile(event) {
    console.log("file length>>>>", event.target.files.length);
    if(event.target.files.length >= 1) {
      const file = event.target.files[0];
      const fileRef = this.storage.ref(this.filePath);

      if(file.size <= 3000000){
        this.presentLoading('Uploading Image...');
        this.storage.ref(this.filePath).put(file).then((data) => {
          console.log("data from upload image", data);
          if(data.state == "success"){
            // this.imgPath = this.globalComp.getUserImage();
            this.imgPath = 'https://firebasestorage.googleapis.com/v0/b/fit-kannadiga.appspot.com/o/profileImage%2F'+this.uid+'?alt=media'+'&random='+Math.floor(Math.random()*230)+90;
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
      } else {
        this.presentToast('Please select a lower resolution image with size less than 3MB.');
      }
      
    }
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
      this.globalComp.getUserInformationFirebase();
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
