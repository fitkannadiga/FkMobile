import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { CommonService } from '../../api/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationLoader: any;
  profile: any = {};
  userNameUnique: boolean = false;
  userNameSpaces: boolean = false;
  userNamesList: any = [];

  constructor(public loadingController: LoadingController, public toastr: ToastController, public fire:AngularFireAuth, public afDataBase: AngularFireDatabase, public router: Router, public navCtrl: NavController, public menuCtrl: MenuController, public commonService: CommonService) {
  }

  ngOnInit() {
    this.removeData();
    this.getUserNames();
  }

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
            'email': this.profile.email,
            'username': this.profile.username,
            'gender': this.profile.gender
          }          
          this.afDataBase.database.ref(`profiles/${auth.uid}`).set(userData)
            .then(() => {
              window.localStorage.setItem("authID", auth.uid);
              window.localStorage.setItem("login-success", "success");
              this.dismissLoader();
              setTimeout(()=>this.presentToast("We are happy to have you on board!"), 2000);
              this.navCtrl.navigateRoot('/tabs');
              // this.router.navigateByUrl('/tabs');
            });
          });

          // also push the username to the userName array list for future access
          this.afDataBase.database.ref(`userNames`).push(this.profile.username);
      })
      .catch( error => {
        // console.log('got an error', error);
        this.dismissLoader();
        this.presentToast(error.message);
      });
    }
  }

  checkUserName(event){
    console.log("event on user name", event.target.value);
    let duplicate = false;
    let newUserName = event.target.value;
    this.userNamesList.forEach((name) => {
      if(name.toLowerCase() == event.target.value.toLowerCase()){
        duplicate = true;
      }
    });


    if(duplicate){
      this.presentToast('User Name already taken. Please try another name.');
      this.userNameUnique = false;
    } else {
      this.userNameUnique = true;
    }

    var regex = /^.+\s.+$/g ;
    if(regex.test(newUserName)){
      this.presentToast('No Spaces allowed in user name.');
      this.userNameSpaces = true;
    } else {
      this.userNameSpaces = false;
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
        // check if the userName is unique and min of 5 char
        if(this.userNameUnique){
          if(this.userNameSpaces){
            this.presentToast('Please remove space from user name');  
            return false;
          } else {
            return true;
          }
        } else {
          this.presentToast('Please select a proper user name');  
          return false;
        }
      }
    } else {
      this.presentToast('Please enter a valid email');
      return false;
    }

  }

  getUserNames(){
    let userArray = [];
    this.commonService.getUserNames().then((data)=> {
      // coverting collection of object to 1 dimension array for comparision
      for(var key in data){
        userArray.push(data[key])
      }
      this.userNamesList = JSON.parse(JSON.stringify(userArray));
      console.log("data user names", this.userNamesList);
    });
  }
  
  removeData(){
    setTimeout(() =>{
      this.menuCtrl.enable(false);
    },100);
    window.localStorage.removeItem("login-success");
    window.localStorage.removeItem("authID");
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
