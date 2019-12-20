import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController, MenuController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { GlobalService } from '../../api/global.service';
import { InternetStatusService } from '../../api/internet-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";
  loading: any;
  user: Observable<firebase.User>;

  constructor(public navCtrl:NavController, public loadingController: LoadingController, private fire:AngularFireAuth, public toastr: ToastController, public router: Router, public menuCtrl: MenuController, public platform: Platform, public afDataBase: AngularFireDatabase, public globalService: GlobalService, public internetStatus: InternetStatusService) { 
    this.user = this.fire.authState;
  }

  ngOnInit() {
  }

  login(){
    // check if internet connection is active
    let internetConnected = this.internetStatus.getNewtowrkStatus();
    if(internetConnected) {
      this.initLogin();
    } else {
      this.presentToast("Please check your internet connection!");
    }
  }

  initLogin(){
    // before registering the user, validate the email id
    let formValid = this.validateFormFields();
    if(formValid){
      this.presentLoading('Validating Credentials...');

      this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
      .then( (data) => {
        // this.menu.enable(true);
        window.localStorage.setItem("authID", data.user.uid);
        this.globalService.getUserInformationFirebase();
        window.localStorage.setItem("login-success", "success");
        this.dismissLoader();
        this.navCtrl.navigateRoot('/tabs');
        // this.router.navigateByUrl('/tabs');
        this.menuCtrl.enable(true);
      })
      .catch( error  => {
        this.dismissLoader();
        this.handleError(error.code);
      })
    }
  }

  validateFormFields(){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(this.email)){
      let password = this.password.trim();
      if(password == ""){
        this.presentToast('Please enter password');  
        return false;
      } else {
        return true;
      }
    } else {
      this.presentToast('Please enter a valid email');
      return false;
    }

  }

  handleError(code){
    // console.log("error code", code);
    switch (code) {
      case "auth/user-not-found":
          this.presentToast("No user found for these credentials");
          break;
      case "auth/wrong-password":
          this.presentToast("Please enter a valid password");
          break;
      case "auth/invalid-email":
          this.presentToast("Please enter a valid email");
          break;
      case "auth/user-disabled":
          this.presentToast("Your account is locked. Please contact admin for help");
          break;
      }
  }

  openRegistration(){
    this.router.navigateByUrl('/registration');
  }

  resetPassword(){
    var auth = firebase.auth();
    // before restting the password, make sure the email field is not empty
    if(this.email == "" || this.email == undefined){
      this.presentToast('Please enter email to reset!');
    } else {
      return auth.sendPasswordResetEmail(this.email)
      .then(() => {
        this.presentToast('Reset password link sent to registered mail address!');
      }).catch((error) => {
        this.presentToast(error.message);
      });
    }
  }

  async presentLoading(msg) {
    this.loading = await this.loadingController.create({
      message: msg
    });
    await this.loading.present();
  }

  async dismissLoader(){
    await this.loading.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
