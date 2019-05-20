import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { GlobalService } from '../../api/global.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  feedbackText: string = "";
  userData: any;
  feedbackLoader: any;
  feedbackValue: any;

  constructor(public toastr: ToastController, public loadingController: LoadingController, public afDataBase: AngularFireDatabase, public globalService: GlobalService, public navCtrl: NavController) {
    this.userData = this.globalService.getUserData();
    this.feedbackValue = "";
    // console.log("this.userData", this.userData);
  }

  ngOnInit() {
  }

  selectRating(event, value, id){
    let emoticons = document.querySelectorAll("img.emoticon");
    emoticons.forEach(element => {
      if(element.classList.contains('active')){
        element.classList.remove('active')
      }
    })
    this.feedbackValue = value;
    document.getElementById(id).classList.add('active');
  }

  sendFeedback(){
    if(this.feedbackValue != ""){
      // post feedback
      let feedbackObj = {
        "rating": this.feedbackValue,
        "feedbackText": this.feedbackText,
        "userName": this.userData.fullname,
        "email": this.userData.email,
        "uid": this.userData.uid,
        "date": new Date()
      }
      console.log("Feedback", feedbackObj);

      this.afDataBase.database.ref(`/feedbacks`).push(feedbackObj).then((data) => {
        // on success clear the text area
        this.feedbackText = "";
        this.presentToast('Thank you for your feedback');
        setTimeout(()=> this.navCtrl.navigateRoot('/tabs'), 1000);
      }, function(err){
        // console.log("err", err);
        this.commonService.toast('Servers unreachable. Could not send feedback!');
      });
    } else {
      this.presentToast('Please select your rating!');
    }
  }

  async presentLoading(msg) {
    this.feedbackLoader = await this.loadingController.create({
      message: msg
    });
    await this.feedbackLoader.present();
  }

  async dismissLoader(){
    await this.feedbackLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }
}
