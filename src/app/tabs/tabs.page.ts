import { Component } from '@angular/core';
import { MenuController, Events, ToastController } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  userData: any = {};

  constructor(public menuCtrl: MenuController, public events: Events, public globalComp: GlobalService, public router: Router, public toastr: ToastController){
    this.globalComp.getUserInformationFirebase().then( (data) => {
      // console.log("tabs data", data);
      this.userData = data;
      if(this.userData.userProfile.disabled == true){
        // redirect to login with all data removed
        // console.log("user disabled if block");
        this.menuCtrl.enable(false);
        window.localStorage.removeItem("login-success");
        window.localStorage.removeItem("authID");
        this.router.navigateByUrl('/login');
        this.presentToast("Your account is locked. Please contact admin for help");
      } else {
        console.log("user disabled else block");
        this.events.publish('loadData');
        this.menuCtrl.enable(true);
      }
    });
  }
  
  ngOnInit() {
    // this.menuCtrl.enable(true, 'myFitnessMenu');
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });  
  }
}
