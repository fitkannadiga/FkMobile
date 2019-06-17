import { Component } from '@angular/core';

import { Platform, MenuController, Events, LoadingController, ToastController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router, RouterEvent, NavigationEnd, Event } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { GlobalService } from './api/global.service';

import { Network } from '@ionic-native/network/ngx';
import { FcmService } from './api/fcm.service';
import { TabsPage } from './tabs/tabs.page';
import { LoginPage } from './pages/login/login.page';
import { CommonService } from './api/common.service';

import { NetworkService } from './api/network.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  mainLoader: any;
  rootPage:any;
  userProfile: any;
  imgPath: any;
  count = 0;
  newMsgCount: any;
  userLogin: boolean = false;
  // chat support
  userCommentLength: number = 0;
  subscription;
  userID: any;
  isConnected: any;


  constructor(public platform: Platform, public db: AngularFirestore,private splashScreen: SplashScreen,private statusBar: StatusBar,public menuCtrl: MenuController,private router: Router, public afDataBase: AngularFireDatabase, public events: Events, public globalComp: GlobalService, public loadingController: LoadingController, public toastr: ToastController, public network: Network, private fcm: FcmService, public navCtrl: NavController, public commonService: CommonService, public networkService: NetworkService, private screenOrientation: ScreenOrientation, private backgroundMode: BackgroundMode) {
    // this.splashScreen.show();
    if(window.localStorage.getItem("login-success") == "success"){
      this.rootPage = TabsPage;
      this.userLogin = true;
    } else {
      this.rootPage = LoginPage;
      this.userLogin = false;
    }
    this.initializeApp();
    // Below line enables the background mode on which consumes more battery power.
    // hence turning this off
    // this.backgroundMode.enable();
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd && event.url === '/login') {
        this.menuCtrl.enable(false);
      } else {
        this.menuCtrl.enable(true);
      }
    });

    this.events.subscribe('loadData', () => {
      this.getUserInformation();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.styleLightContent();
      if(this.userLogin){
        this.userID = window.localStorage.getItem('authID');
        this.navCtrl.navigateRoot('/tabs');
        this.subscribeToMsgCount();
        this.getUserInformation();
        this.menuCtrl.enable(true);
        this.splashScreen.hide();

        setTimeout(()=> {
          this.notificationSetup();
        }, 2000);
      } else {
        this.navCtrl.navigateRoot('/login');
        setTimeout(() =>{
          this.splashScreen.hide();
        },1000);
        setTimeout(() =>{
          this.menuCtrl.enable(false);
        },500);
        window.localStorage.removeItem("authID");
        window.localStorage.removeItem("login-success");
      }

      this.networkSubscriber();
      this.subscribeBackButton();
      this.lockOrientation();
    });
  }

  networkSubscriber(): void {
    this.networkService
        .getNetworkStatus()
        .pipe()
        .subscribe((connected: boolean) => {
            this.isConnected = connected;
            console.log('[Home] isConnected', this.isConnected);
            this.handleNotConnected(connected);
        });
  }

  handleNotConnected(status){
    console.log("internte status >>>",status);
    if(!status){
      this.presentToast("Please check your internet connection!");
    }
  }

  

  subscribeBackButton(){
    // Showing message while user exit app
    this.platform.backButton.subscribe((data)=> {
      if(this.router.url.indexOf('tabs') > -1){
        if (this.count == 0) {
          this.count++;
          this.presentToast('Press back again to exit!');
          setTimeout(() => { this.count = 0 }, 3000)
        } else {
          navigator['app'].exitApp();
        }
      } else if(this.router.url.indexOf('login') > -1){
        this.menuCtrl.enable(false);
        navigator['app'].exitApp();
      }
    });
  }

  lockOrientation(){
    // get current
    // console.log(this.screenOrientation.type);

    // set to portaait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    // // allow user rotate
    // this.screenOrientation.unlock();

    // // detect orientation changes
    // this.screenOrientation.onChange().subscribe(() => {
    //   console.log("Orientation Changed");
    // });
  }

  private notificationSetup() {
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe((msg) => {
      console.log("message from the push notification >> data >> ", msg);
      if (this.platform.is('ios')) {
      this.presentToast(msg.aps.alert);
      } else {
      this.presentToast(msg.body);
      }
      
      if(msg.target == 'recipes'){
        this.router.navigateByUrl('/recipes');
      } else if(msg.target == 'workout'){
        this.router.navigateByUrl('/workout');
      }
    });
  }

  /* Below function triggers message when user is not 
  on chat page and also updates the message count to
  notify the user fromadmin messages
  */
  subscribeToMsgCount(){
    this.subscription = this.afDataBase.object('/client/'+this.userID+'/chats/adminMsgCount').valueChanges().subscribe((data) => {
      console.log("chat for", this.userID);
      // everytime the application subscribes to admin message counts, check if user is in chat page else trigger a notification
      console.log("msg count", data);
      this.newMsgCount = data;
      if(this.newMsgCount > 0 && this.router.url.indexOf('chat') == -1){
        // trigger push notification message for only client messages
        this.commonService.sendPushNotification();
      }
    });
  }
  
  getUserInformation(){
    console.log("getUserInformation fn");
    this.imgPath = this.globalComp.getUserImage();
    console.log("this.imgPath", this.imgPath);
    this.userProfile = this.globalComp.getUserData();
    console.log("this.userProfile", this.userProfile);
  }

  openPage(pageName) {
    this.closeMenu();
    this.router.navigateByUrl(pageName);
  }

  closeMenu() {
    this.menuCtrl.enable(false);
  }

  logout(){
    window.localStorage.removeItem("login-success");
    window.localStorage.removeItem("authID");
    this.router.navigate(['login']);
    setTimeout(() =>{
      this.menuCtrl.enable(false);
    },500);
  }

  async presentLoading(msg) {
    this.mainLoader = await this.loadingController.create({
      message: msg
    });
    await this.mainLoader.present();
  }

  async dismissLoader(){
    await this.mainLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }
}
