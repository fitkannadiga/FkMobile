import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';

import { CommonService } from '../../api/common.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  video_id:any = '';
  mainVideoList: any;
  videoList: any;
  toggled: boolean;
  videoUrl: any;
  firebaseSource: any;
  firebasePoster: any;
  videosLoader: any;
  fakeData: boolean = true;
  fakelist: any = Array<number>(15);
  isRedirected: boolean = false;
  sub: any;
  redirectVideoLink: any

  constructor(public http:HttpClient, public commonService: CommonService, public loadingController: LoadingController, public toastr: ToastController, private activeRoute: ActivatedRoute, public router: Router) {
    this.toggled = false;
  }

  ngOnInit() {
    this.loadVideos();
  }

  ionViewWillEnter() {
    console.log("user entered the tab again");
    // before making call to the video list, check if it is from redirection
    this.sub = this.activeRoute.queryParams.subscribe(value => {
      console.log("redirected from home", value)
      if(value.length == 0){
        this.isRedirected = false;
        this.redirectVideoLink = "";
      } else {
        let videoLink = this.router.url.split('=');

        this.isRedirected = true;
        this.redirectVideoLink = "";
        this.redirectVideoLink = decodeURIComponent(videoLink[1]);
        this.changeRedirectedVideo(this.redirectVideoLink);
      }
    });
  }

  ionViewDidLeave(){
    // Stop video playing if the tab is changed
    this.videoplayer.nativeElement.pause();
  }

  loadVideos(){
    // this.presentLoading('Loading Videos..');

    this.commonService.getVideoList().then((data)=> {
      // console.log("video data", data);
      this.mainVideoList = data;
      this.videoList = data;
      if(this.isRedirected){
        this.video_id = '';
        this.firebaseSource = this.redirectVideoLink;
        this.firebasePoster = '';
      } else {
        this.video_id = this.videoList[0].video_id;
        this.firebaseSource = this.videoList[0].video_src;
        this.firebasePoster = this.videoList[0].video_thumbnail;
      }

      setTimeout(()=> {
        // this.dismissLoader();
        this.fakeData = false;
      },1000);
    }).catch(error => {
      this.presentToast(error.message);
      // this.dismissLoader();
    })
  }

  changeVideo(videoData){
    this.video_id = videoData.video_id;
    this.firebaseSource = videoData.video_src;
    this.firebasePoster = videoData.video_thumbnail;
    this.content.scrollToTop();
  }
  
  changeRedirectedVideo(src){
    console.log("changeRedirectedVideo called >>>");
    this.video_id = '';
    this.firebaseSource = src;
    this.firebasePoster = '';
    this.content.scrollToTop();
  }

  toggleSearch() {
      this.toggled = this.toggled ? false : true;
      this.videoList = this.mainVideoList;
  }

  getItems(ev: any){
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.videoList = this.mainVideoList;
      this.videoList = this.videoList.filter((video) => {
        var temp_title =  video.video_title;
        if(video.video_sd.toLowerCase().indexOf(val.toLowerCase())  > -1){
          // console.log("video added", video);
          return video;
        }
      });
    } else {
      this.videoList = this.mainVideoList;
    }
  }

  doRefresh(event) {
    this.fakeData = true;
    this.commonService.getVideoList().then((data)=> {
      this.mainVideoList = data;
      this.videoList = data;
      this.video_id = this.videoList[0].video_id;
      setTimeout(()=> {
        event.target.complete();
        this.fakeData = false;
      },2000);
    });
  }

  async presentLoading(msg) {
    this.videosLoader = await this.loadingController.create({
      message: msg
    });
    await this.videosLoader.present();
  }

  async dismissLoader(){
    await this.videosLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
