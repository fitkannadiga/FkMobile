import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../../api/client-data.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-client-workout',
  templateUrl: './client-workout.page.html',
  styleUrls: ['./client-workout.page.scss'],
})
export class ClientWorkoutPage implements OnInit {

  clientWorkoutData: any;
  userID: any;
  workoutLoader: any;

  constructor(public clientService: ClientDataService, public loadingController: LoadingController, public toastr: ToastController) { 
    this.clientWorkoutData = clientService.getClientWorkout();
    this.userID = window.localStorage.getItem('authID');
    if(this.clientWorkoutData == null || this.clientWorkoutData == undefined){
      this.presentToast("Please contact adming. Looks like workout has been modified or removed.")
    }
  }

  ngOnInit() {
  }

  async presentLoading(msg) {
    this.workoutLoader = await this.loadingController.create({
      message: msg
    });
    await this.workoutLoader.present();
  }

  async dismissLoader(){
    await this.workoutLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
