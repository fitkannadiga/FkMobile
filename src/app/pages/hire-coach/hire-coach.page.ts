import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { CommonService } from '../../api/common.service';
import { Router } from '@angular/router';
import { UserStoryComponent } from '../../components/user-story/user-story.component';

@Component({
  selector: 'app-hire-coach',
  templateUrl: './hire-coach.page.html',
  styleUrls: ['./hire-coach.page.scss'],
})
export class HireCoachPage implements OnInit {

  transformationArray: any;
  testimonials: any;
  hireLoader: any;

  slideOpts = {
    autoplay: true,
    effect: 'flip',
    speeed: 400,
    loop: true,
    allowTouchMove: true
  };

  constructor(public loadingController: LoadingController, public toastr: ToastController, public commonService: CommonService, public modal: ModalController, public router: Router) {
    this.getTransformatioImages();
    this.getTestimonials();
  }

  ngOnInit() {
  }

  getTransformatioImages(){
    this.presentLoading('Loading Transformations..');

    this.commonService.getTransformatioImages().then((data)=> {
      this.transformationArray = data;
      setTimeout(()=> {
        this.dismissLoader();
      },1000);
    },
    function(error){
      // console.log("banner image error", error);
    });
  }

  getTestimonials(){
    this.commonService.getTestimonials().then((data)=> {
      this.testimonials = data;
    },
    function(error){
      // console.log("banner image error", error);
    });
  }

  async showStory(story){
    // save data and open modal to show story
    const modal = await this.modal.create({
      component: UserStoryComponent,
      componentProps: { value: story }
    });
    return await modal.present();
  }

  openPlansPage(){
    this.router.navigateByUrl('/client-plans');
  }

  async presentLoading(msg) {
    this.hireLoader = await this.loadingController.create({
      message: msg
    });
    await this.hireLoader.present();
  }

  async dismissLoader(){
    await this.hireLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }


}
