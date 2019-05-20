import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { GlobalService } from '../../api/global.service';
import { CommonService } from '../../api/common.service';
import { Router } from '@angular/router';
import { NutrientGraphService } from '../../api/nutrient-graph.service';

@Component({
  selector: 'app-bmrcalculator',
  templateUrl: './bmrcalculator.page.html',
  styleUrls: ['./bmrcalculator.page.scss'],
})
export class BMRcalculatorPage implements OnInit {

  userInfo : any =  {};
  BMR: any;
  IntakeCalories: any;
  userData: any = {};
  bmrLoader: any;
  TEE: any;

  constructor(private toastr: ToastController, public loadingController: LoadingController,  private globalComp: GlobalService, public commonService:CommonService, public router: Router, public nutrientService: NutrientGraphService) {
    this.userInfo = {
      'age': '',
      'gender': '',
      'height': '',
      'weight': '',
      'goal':'',
      'activity': ''
    }
    this.loadUserData();
  }


  ngOnInit() {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BmrCalculatorPage');
  }

  loadUserData(){
    this.userData = this.globalComp.getUserData();
    //console.log('this.userData', this.userData);

    let dob1 = this.userData.dob.replace('-', '/');
    let dob2 = dob1.replace('-', '/');
    //console.log("dob2", dob2);
    this.userInfo.age = (this.userData.dob == undefined || this.userData.dob == "") ? "" : this.getAge(dob2);
    this.userInfo.gender = (this.userData.gender == undefined || this.userData.gender == "") ? "" : this.userData.gender;
    this.userInfo.weight = (this.userData.weight == undefined || this.userData.weight == "") ? "" : this.userData.weight;
    this.userInfo.height = (this.userData.height == undefined || this.userData.height == "") ? "" : this.userData.height;

    // create a tost to notify user to fill the profile details properly
    setTimeout( () => {
      this.presentToast('For better experience, fill your basic details under profile section.');
    }, 2000);
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  calculateCalorieIntake(){
    // console.log("Goal Selected", this.userInfo.goal);
    if(this.userInfo.goal == "fl"){
      this.IntakeCalories = Math.round(Math.round(this.TEE) - 200);
    } else if(this.userInfo.goal == "mb"){
      this.IntakeCalories = Math.round(Math.round(this.TEE) + 400);
    } else if(this.userInfo.goal == "mw"){
      this.IntakeCalories = Math.round(Math.round(this.TEE) + 50);
    } else {
      // nothing
    }

    // console.log("BMR calculated", this.BMR);
    // console.log("Intake calculated", this.IntakeCalories);

    // After calculating the calorie intake, load the next page to display graph
    // set data for the BMI graph
    this.nutrientService.setGrapgData(this.userInfo, this.BMR, this.TEE, this.IntakeCalories);
    this.router.navigateByUrl('/nutrient-graph');
  }

  calculateBMR(){
    if(this.userInfo.gender == "male"){
      let metabolicRate = Math.round((10*this.userInfo.weight)+(6.25*this.userInfo.height)-(5*this.userInfo.age)+5);
      this.BMR = metabolicRate;
      this.TEE = Math.round(metabolicRate*this.userInfo.activity);
    } else {
      let metabolicRate = Math.round((10*this.userInfo.weight)+(6.25*this.userInfo.height)-(5*this.userInfo.age)-161);
      this.BMR = metabolicRate;
      this.TEE = Math.round(metabolicRate*this.userInfo.activity);
    }
    // console.log("BMR", this.BMR);
    this.calculateCalorieIntake();
  }

  async presentLoading(msg) {
    this.bmrLoader = await this.loadingController.create({
      message: msg
    });
    await this.bmrLoader.present();
  }

  async dismissLoader(){
    await this.bmrLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
