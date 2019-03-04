import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../api/global.service';
import { CommonService } from '../../api/common.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ClientDataService } from '../../api/client-data.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-custom-diet-workout',
  templateUrl: './custom-diet-workout.page.html',
  styleUrls: ['./custom-diet-workout.page.scss'],
})
export class CustomDietWorkoutPage implements OnInit {

  customer: boolean = false;
  userData: any;
  dietInfo: any;
  workoutInfo: any;
  userID: any;
  customDWloader: any;

  constructor(public globlaComp: GlobalService, public commonService: CommonService, public loadingController: LoadingController, public toastr: ToastController, public clientService: ClientDataService, public router: Router, public afDataBase: AngularFireDatabase) {
    // the below user data should be a fresh call always to avoid conflicts
    this.userID = window.localStorage.getItem('authID');
    this.commonService.getprofile(this.userID).then((data) =>{
      this.userData = data;
      console.log("user data in custom diet", this.userData);
      this.customer = (this.userData.client == true) ? true : false;
      if(this.customer) {
        this.validateClientStatus();
      }
    });
  }

  ngOnInit() {
  }

  validateClientStatus(){
    this.commonService.getClientsData(this.userID).then((data) => {
      // save the data
      this.clientService.saveClientData(data);
    }).catch((error) => {
      this.presentToast(error.message);
    })
  }

  openDetailsPage(page){
    let routePage = (page == 'diet') ? 'client-diet' : 'client-workout';
    this.router.navigateByUrl('/'+routePage);
  }

  async presentLoading(msg) {
    this.customDWloader = await this.loadingController.create({
      message: msg
    });
    await this.customDWloader.present();
  }

  async dismissLoader(){
    await this.customDWloader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
