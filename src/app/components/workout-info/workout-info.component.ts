import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-workout-info',
  templateUrl: './workout-info.component.html',
  styleUrls: ['./workout-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkoutInfoComponent implements OnInit {

  @Input() workout: any;

  constructor(public modal: ModalController, public screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    this.addFullscreenEvent();
  }

  addFullscreenEvent(){
    var self = this;
    setTimeout(() => {
      document.getElementById("yt_video_player").addEventListener('webkitfullscreenchange', onFullScreen);
      function onFullScreen(event) {
        console.log("event on full screen>>", event);
        // console.log("document.webkitFullscreenEnabled", document.webkitIsFullScreen);
        
        
        var isFullscreenNow = event.target.webkitDisplayingFullscreen;
        console.log("isFullscreenNow data>>", isFullscreenNow);
        if(isFullscreenNow){
          self.screenOrientation.lock(self.screenOrientation.ORIENTATIONS.LANDSCAPE);
        } else {
          self.screenOrientation.lock(self.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        // alert('Fullscreen ' + isFullscreenNow);
      }
    }, 1000);
  }

  closeModal(){
    this.modal.dismiss();
  }

}
