import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

declare var Instamojo;
declare var cordova;

@Component({
  selector: 'app-client-plans',
  templateUrl: './client-plans.page.html',
  styleUrls: ['./client-plans.page.scss'],
})

export class ClientPlansPage implements OnInit {

  planLoader: any;

  constructor(public loadingController: LoadingController, public toastr: ToastController, public afDataBase: AngularFireDatabase, public IAB: InAppBrowser, public alertCtrl: AlertController) { 
  }

  ngOnInit() {
  }

  openPaymentOption(){
    // this.presentToast('At present we are not accepting online payments. Please drop a mail to fitkannadiga@gmail.com to hire coach.');
    // <a href="https://www.instamojo.com/@fitkannadiga/lbd11a43293af4f85b604ba341b4d7ddb/" rel="im-checkout" data-behaviour="remote" data-style="light" data-text="Checkout With Instamojo"></a>
    // <script src="https://js.instamojo.com/v1/button.js"></script>
    // Instamojo.open("https://www.instamojo.com/@fitkannadiga/lbd11a43293af4f85b604ba341b4d7ddb/");
    // Instamojo.configure({
    //   handlers: {
    //     onOpen: function() {
    //       alert("instamoko opened");
    //     },
    //     onClose: function() {
    //       alert("instamoko closed");
    //       document.getElementsByTagName('body')[0].style.height = '100%';
    //     },
    //     onSuccess: function(response) {
    //       alert("instamoko payment success");
    //     },
    //     onFailure: function(response) {
    //       alert("instamoko payment failure");
    //     }
    //   }
    // });

    this.showPrompt();
  }

  async showPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Sorry for the Inconvenience',
      message: "All the slots are booked for online coaching. Please drop a mail to fitkannadiga@gmail.com to check availability",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            // console.log('Saved clicked', data);
            let Link="mailto:fitkannadiga@gmail.com?subject=Enrollment%20for%20Online%20Caoching";
            window.open(Link, "_system");
            // window.open('mailto:fitkannadiga@gmail.com');
          }
        }
      ]
    });
    return await prompt.present();
  }

  openPayment(){
    let browser = cordova.InAppBrowser.open('https://www.instamojo.com/@fitkannadiga/lbd11a43293af4f85b604ba341b4d7ddb/','_blank','location=yes');
    browser.addEventListener("loadstop", (event: any) => {
      console.log("browser event on load stop>>", JSON.stringify(event));
      // if ((event.url).indexOf('?token=') !== -1) {
      //   let token = event.url.slice(event.url.indexOf('?token=') + '?token='.length);
      //   // here is your token, now you can close the InAppBrowser
      //   browser.close();
      // }
    });
    browser.addEventListener("exit", (event: any) => {
      console.log("browser event on EXIT>>", JSON.stringify(event));
      // if ((event.url).indexOf('?token=') !== -1) {
      //   let token = event.url.slice(event.url.indexOf('?token=') + '?token='.length);
      //   // here is your token, now you can close the InAppBrowser
      //   browser.close();
      // }
    });
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
