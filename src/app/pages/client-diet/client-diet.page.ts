import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientDataService } from '../../api/client-data.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-client-diet',
  templateUrl: './client-diet.page.html',
  styleUrls: ['./client-diet.page.scss'],
})
export class ClientDietPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  clientDietData: any;
  dietLoader: any;
  userID: any;

  constructor(public clientService: ClientDataService, public loadingController: LoadingController, public toastr: ToastController, public afDataBase: AngularFireDatabase) {
    this.clientDietData = clientService.getClientDiet();
    this.userID = window.localStorage.getItem('authID');
    if(this.clientDietData == null || this.clientDietData == undefined){
      this.presentToast("Please contact adming. Looks like diet has been modified or removed.")
    }
  }

  ngOnInit() {
  }

  async presentLoading(msg) {
    this.dietLoader = await this.loadingController.create({
      message: msg
    });
    await this.dietLoader.present();
  }

  async dismissLoader(){
    await this.dietLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
