import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../api/common.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-macros-calci',
  templateUrl: './macros-calci.page.html',
  styleUrls: ['./macros-calci.page.scss'],
})
export class MacrosCalciPage implements OnInit {

  calories: any;
  dietType: any;
  // percentage usage variables
  carbs: number = 0;
  proteins: number = 0;
  fats: number = 0;

  // gram usage variables
  in_carbs: number = 0;
  in_proteins: number = 0;
  in_fats: number = 0;

  keto = [5, 35, 60];
  lcd = [25, 35, 40];
  zone = [40, 30, 30];
  moderate = [50, 30, 20];
  high = [60, 25, 15];

  constructor(public commonService: CommonService, public router: Router, public toastr: ToastController) {
  }

  ngOnInit() {
  }
  
  ionViewDidLoad() {
    // console.log('ionViewDidLoad MacroCalciPage');
  }

  showBmrCalci(){
    this.router.navigateByUrl('/bmrcalculator');
  }

  showMacros(){
    if(this.calories > 100){
      // console.log("change function called", this.dietType);
      var selectedType = this[this.dietType];
      this.carbs = selectedType[0];
      this.proteins = selectedType[1];
      this.fats = selectedType[2];

      this.in_carbs = Math.round(((this.calories*this.carbs)/4)/100);
      this.in_proteins = Math.round(((this.calories*this.proteins)/4)/100);
      this.in_fats = Math.round(((this.calories*this.fats)/9)/100);

    } else {
      this.presentToast('Please enter a valid calorie intake.');
    }

  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
