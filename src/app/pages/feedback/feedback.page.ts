import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
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

  constructor(public toastr: ToastController, public loadingController: LoadingController, public afDataBase: AngularFireDatabase, public globalService: GlobalService) {
    this.userData = this.globalService.getUserData();
    // console.log("this.userData", this.userData);
  }

  ngOnInit() {
  }

  sendFeedback(){
    if(this.feedbackText.trim() != ""){
      // post feedback
      let feedbackObj = {
        "feedbackText": this.feedbackText,
        "userName": this.userData.fullname,
        "email": this.userData.email,
        "uid": this.userData.uid,
      }
      // console.log("Feedback", feedbackObj);

      this.afDataBase.database.ref(`/feedbacks`).push(feedbackObj).then((data) => {
        // on success clear the text area
        this.feedbackText = "";
        this.presentToast('Thank you for your feedback');
      }, function(err){
        // console.log("err", err);
        this.commonService.toast('Servers unreachable. Could not send feedback!');
      });
    } else {
      this.presentToast('Type something!');
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
