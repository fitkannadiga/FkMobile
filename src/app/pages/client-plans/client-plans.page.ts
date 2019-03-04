import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-client-plans',
  templateUrl: './client-plans.page.html',
  styleUrls: ['./client-plans.page.scss'],
})
export class ClientPlansPage implements OnInit {

  planLoader: any;

  constructor(public loadingController: LoadingController, public toastr: ToastController, public afDataBase: AngularFireDatabase) { 
  }

  ngOnInit() {
  }

  openPaymentOption(){
    this.presentToast('At present we are not accepting online payments. Please contach us at fitkannadiga@gmail.com')
  }

  async presentLoading(msg) {
    this.planLoader = await this.loadingController.create({
      message: msg
    });
    await this.planLoader.present();
  }

  async dismissLoader(){
    await this.planLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
