import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationLoader: any;
  profile: any = {};

  constructor(public loadingController: LoadingController, public toastr: ToastController, public fire:AngularFireAuth, public afDataBase: AngularFireDatabase, public router: Router, public navCtrl: NavController) {}

  ngOnInit() {}

  signInUser() {

    // before registering the user, validate the email id
    let formValid = this.validateFormFields();
    if(formValid){
      this.presentLoading('Registering Data...');

      this.fire.auth.createUserWithEmailAndPassword(this.profile.email, this.profile.password)
      .then( (data) => {
        this.fire.authState.subscribe(auth => {
          // reference is use to push pr to update the data
          // removing the password storage to avoid security breech
          let userData = {
            'fullname': this.profile.fullname,
            'email': this.profile.email
          }
          this.afDataBase.database.ref(`profiles/${auth.uid}`).set(userData)
            .then(() => {
              window.localStorage.setItem("authID", auth.uid);
              window.localStorage.setItem("login-success", "success");
              this.dismissLoader();
              this.presentToast("We are happy to have you on board!");
              this.navCtrl.navigateRoot('/tabs');
              // this.router.navigateByUrl('/tabs');
            });
          });
      })
      .catch( error => {
        // console.log('got an error', error);
        this.dismissLoader();
        this.presentToast(error.message);
      });
    }
  }

  validateFormFields(){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(this.profile.email)){
      let password = this.profile.password.trim();
      if(password.length < 8){
        this.presentToast('Password should be minimum 8 characters');  
        return false;
      } else {
        return true;
      }
    } else {
      this.presentToast('Please enter a valid email');
      return false;
    }

  }

  async presentLoading(msg) {
    this.registrationLoader = await this.loadingController.create({
      message: msg
    });
    await this.registrationLoader.present();
  }

  async dismissLoader(){
    await this.registrationLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
