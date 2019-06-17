import { Component, OnInit } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.page.html',
  styleUrls: ['./interval-timer.page.scss'],
})
export class IntervalTimerPage implements OnInit {

  // @ViewChild(Navbar) navBar: Navbar;

  timerText: any = "Ready";
  bgColor: any = '#FAD133';
  setCount: number = 0;
  intervalCount: number = 0;
  restCount: number = 0;
  changeDisplay: boolean = false;
  statusChange: any = 'pause';

  tempSet: number = 0;
  tempInterval: number = 0;
  tempRest: number = 0;
  SetTimer: any;
  RestTimer: any;

  setInterval: any;
  workoutInterval: any;
  restInterval: any;

  constructor(private tts: TextToSpeech, private insomnia: Insomnia, public platform: Platform, private router: Router) {
    // setTimeout(() => {
    //   this.subscribeBackButton();
    // }, 1000);
    // subscribe to back button as we need to stop the timer on user back
    this.platform.backButton.subscribe((data)=> {
      if(this.router.url.indexOf('interval-timer') > -1){
        // clear the timers and stop everything
        this.exitTimer();
        this.tempRest = 0;
        this.SetTimer = 0;
        this.RestTimer = 0;
        this.insomnia.allowSleepAgain();
      }
    });
  }


  ngOnInit() {
    // this.navBar.backButtonClick = (e:UIEvent)=>{
    //   console.log("BACK CLICKED");
    //   // todo something
    //   // clear the timers and stop everything
    //   this.stopTimeApp();
    //   this.tempRest = 0;
    //   this.SetTimer = 0;
    //   this.RestTimer = 0;
    //   this.navCtrl.pop();
    // }
  }

  ionViewDidLoad() {
  }

  subscribeBackButton(){
    // subscribe to back button as we need to stop the timer on user back
    this.platform.backButton.subscribe((data)=> {
      if(this.router.url.indexOf('interval-timer') > -1){
        // clear the timers and stop everything
        this.exitTimer();
        this.tempRest = 0;
        this.SetTimer = 0;
        this.RestTimer = 0;
        this.insomnia.allowSleepAgain();
      }
    });
  }

  initTimer(){
    // validate the timers for zeros in the sets/interval/rest
    if(this.setCount == 0){
      this.readMessage("Please select sets you want to perform!");
    } else if(this.intervalCount == 0){
      this.readMessage("oops, you forgot to select interval time!");
    } else {
      this.bgColor = '#FAD133';
      this.statusChange = 'pause';
      this.changeDisplay = true;
      this.insomnia.keepAwake();
      this.tempSet = this.setCount;
      this.tempInterval = this.intervalCount;
      this.tempRest = this.restCount;
      this.readMessage('Your workout begins in');
      this.beginWorkoutMsg();
    }
  }

  beginWorkoutMsg(){
    setTimeout(() => {
      this.readMessage(3);
      setTimeout(() => {
        this.readMessage(2);
        setTimeout(() => {
          this.readMessage(1);
          this.beep();
          setTimeout( () => {
            this.startTimerApp();
          }, 1000);
        }, 1500);
      }, 1500);
    }, 1500);
  }
  
  readMessage(message){
    // var msg = new SpeechSynthesisUtterance(message);
    // var voices = window.speechSynthesis.getVoices();
    // msg.voice = voices[1];
    // // msg.voiceURI = "native";
    // msg.volume = 1;
    // msg.rate = 1;
    // msg.pitch = 0.8;
    // msg.text = message;
    // msg.lang = 'en-US';
    // speechSynthesis.speak(msg);

    this.tts.speak({
      text: message,
      rate: 1,
      locale: 'en-US'
    }).then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  remove(itemName){
    if(itemName == 'setCount'){(itemName == 'setCount' && this.setCount == 0) ? (this.setCount = 0) : (this.setCount --);}
    if(itemName == 'intervalCount'){(itemName == 'intervalCount' && this.intervalCount == 0) ? (this.intervalCount = 0) : (this.intervalCount --);}
    if(itemName == 'restCount'){(itemName == 'restCount' && this.restCount == 0) ? (this.restCount = 0) : (this.restCount --);}
  }

  add(itemName){
    if(itemName == 'setCount'){(itemName == 'setCount' && this.setCount == 30) ? (this.setCount = 30) : (this.setCount ++);}
    if(itemName == 'intervalCount'){(itemName == 'intervalCount' && this.intervalCount == 120) ? (this.intervalCount = 120) : (this.intervalCount ++);}
    if(itemName == 'restCount'){(itemName == 'restCount' && this.restCount == 90) ? (this.restCount = 90) : (this.restCount ++);}
  }

  // Press and hold action for sets
  removeSetsInterval() {
    var self = this;
    this.setInterval = setInterval(function () {
      if(self.setCount > 0){
        self.setCount = self.setCount -1;
      }
    }, 50);
  }

  addSetsInterval() {
    var self = this;
    this.setInterval = setInterval(function () {
        self.setCount = self.setCount + 1;
    }, 50);
  }

  stopSetsInterval() {
      clearInterval(this.setInterval);
  }

  // Press and hold action for workout
  removeWorkoutInterval() {
    var self = this;
    this.workoutInterval = setInterval(function () {
      if(self.intervalCount > 0){
        self.intervalCount = self.intervalCount -1;
      }
    }, 50);
  }

  addWorkoutInterval() {
    var self = this;
    this.workoutInterval = setInterval(function () {
      if(self.intervalCount < 120){
        self.intervalCount = self.intervalCount + 1;
      }
    }, 50);
  }

  stopWorkoutInterval() {
      clearInterval(this.workoutInterval);
  }

  // Press and hold action for rest
  removeRestInterval() {
    var self = this;
    this.restInterval = setInterval(function () {
      if(self.restCount > 0){
        self.restCount = self.restCount -1;
      }
    }, 50);
  }

  addRestInterval() {
    var self = this;
    this.restInterval = setInterval(function () {
      if(self.restCount < 90){
        self.restCount = self.restCount + 1;
      }
    }, 50);
  }

  stopRestInterval() {
      clearInterval(this.restInterval);
  }

  exitTimer(){
    this.tts.stop();
    this.stopTimeApp();
    this.changeDisplay = false;
    this.insomnia.allowSleepAgain();
  }

  playPauseTimer(){
    if(this.statusChange == 'pause'){
      this.statusChange = 'play';
      this.stopTimeApp();
    } else {
      this.statusChange = 'pause';
      this.startTimerApp();
    }
  }

  stopTimeApp(){
    clearInterval(this.SetTimer);
    clearInterval(this.RestTimer);
  }

  startTimerApp(){
    if(this.tempSet > 0){
      if(this.tempInterval > 0){
        this.readMessage("Start");
        this.timerText = 'Work!'
        this.bgColor = '#56A830';
        this.SetTimer = setInterval(() => {
          this.tempInterval--;
          if(this.tempInterval == 0){
            clearInterval(this.SetTimer);
            this.initRest();
          } else {
            if(this.tempInterval == 3 || this.tempInterval == 2 || this.tempInterval == 1){
              this.beep();
            }
          }
        }, 1000);
      } else {
        clearInterval(this.SetTimer);
        this.initRest();
      }
    } else {
      this.readMessage("Workout Complete");
      this.timerText = "Complete!"
      //this.exitTimer();
    }
  }

  initRest(){
    if(this.tempRest > 0){
      this.readMessage("Rest");
      this.bgColor = '#e2573f';
      this.timerText = 'Rest!'
      this.RestTimer = setInterval(() => {
        this.tempRest--;
        if(this.tempRest == 0){
          clearInterval(this.RestTimer);
          this.tempSet--;
          this.tempInterval = this.intervalCount;
          this.tempRest = this.restCount;
          this.startTimerApp();
        } else {
          if(this.tempRest == 3 || this.tempRest == 2 || this.tempRest == 1){
            this.beep();
          }
        }
      }, 1000);
    } else {
      clearInterval(this.RestTimer);
      this.tempSet--;
      this.tempInterval = this.intervalCount;
      this.tempRest = this.restCount;
      this.startTimerApp();
    }
  }

  beep() {
    // var snd = new Audio('http://www.soundjay.com/button/beep-07.wav');
    // snd.volume = 1;
    // snd.play();

    var audio = document.createElement('audio');
    audio.style.display = "none";
    audio.src = 'http://www.soundjay.com/button/beep-07.wav';
    audio.autoplay = true;
    audio.onended = function(){
      audio.remove() //Remove when played.
    };
    document.body.appendChild(audio);
  }

}
