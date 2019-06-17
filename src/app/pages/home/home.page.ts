import { Component, OnInit , ViewChild} from '@angular/core';
import { MenuController, LoadingController, ToastController  } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {CommonService} from './../../api/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  homeLoader: any;
  slideData: any;
  fakeslider: boolean = true;
  fakeWorkout: boolean = true;
  fakeHomeCard: boolean = true;
  fakeSlideData: any = Array<number>(3);
  homeWorkoutList: any = [];
  shortCard: any = [];
  
  slideOpts = {
    autoplay: false,
    effect: 'flip',
    speeed: 300,
    loop: true,
    allowTouchMove: true
  };
  
  constructor(public menuCtrl: MenuController, public loadingController: LoadingController, public toastr: ToastController, public commonService: CommonService, public router: Router, private iab: InAppBrowser) {
    this.getBannerImages();
    this.getHomeWorkout();
    this.getShortCard();
   }

  ngOnInit() {
    // this.menuCtrl.enable(true);
  }

  getBannerImages(){
    // this.presentLoading('Loading Content...');

    this.commonService.getBannerImages().then((data)=> {
      console.log("img data", data);
      this.slideData = data;
      setTimeout(()=> {
        // this.dismissLoader();
        this.fakeslider = false;
      },1000);
    },
    function(error){
      console.log("banner image error", error);
    });
  }

  getHomeWorkout(){
    this.commonService.getHomeWorkoutList().then(data => {
      this.homeWorkoutList = data;
      setTimeout(() => {
        this.fakeWorkout = false;
      }, 1000);
    }, function(err){
      console.log("home workout error", err);
    });
  }

  getShortCard(){
    this.commonService.getHomeShortCard().then(data => {
      this.shortCard = data;
      setTimeout(() => {
        this.fakeHomeCard = false;
      }, 1000);
    }, function(err){
      console.log("home workout error", err);
    });
  }

  getArray(index){
    return Array<number>(index);
  }

  openWorkoutPage(){
    this.router.navigateByUrl('/workout');
  }

  showHireCoach(){
    this.router.navigateByUrl(this.shortCard.redirect);
  }

  openSlideInfo(slideData){
    // based on the redirectType make actions
    let videoLink = '';
    if(slideData.redirectType == "video"){
      console.log("slideData.video_src", slideData.video_src);
      videoLink = slideData.video_src;
      // redirect to video tab and set source
      this.router.navigate([slideData.redirectLink], { queryParams: { link: videoLink } });
    } else if(slideData.redirectType == "iab") {
      // open link in IAB (for insta/facebook/promotions/charity)
      this.iab.create(slideData.redirectLink, "_system");
    } else {
      // do nothing
    }
  }

  async presentLoading(msg) {
    this.homeLoader = await this.loadingController.create({
      message: msg
    });
    await this.homeLoader.present();
  }

  async dismissLoader(){
    await this.homeLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
