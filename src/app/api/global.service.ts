import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  imgPath: any;
  userProfile: any;

  constructor(public commonService:CommonService, public storage: AngularFireStorage) {
    this.updateUserData();
  }

  updateUserData(){
    // console.log("updateUserData function called");
    return new Promise((resolve, reject) => {
      var authID : any = window.localStorage.getItem("authID");
      this.commonService.getprofile(authID).then((data) =>{
        this.userProfile = data;
        // console.log("user data in update service", this.userProfile);
        this.imgPath = 'https://firebasestorage.googleapis.com/v0/b/fit-kannadiga.appspot.com/o/images%2F'+authID+'?alt=media'+'&random='+Math.floor(Math.random()*230)+90;
        var observable_data: any = {};
        observable_data["userProfile"] = this.userProfile;
        observable_data["imgPath"] = this.imgPath;
        resolve(observable_data);
      })
      .catch(error => resolve(error))
    });
       
  }

  getUserImage(){
    return this.imgPath+'&random='+Math.floor(Math.random()*230)+90;
  }

  getUserName(){
    return this.userProfile.fullname;
  }

  getUserData(){
    return this.userProfile;
  }
}
