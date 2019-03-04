import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  redirect(socialMedia){
    if(socialMedia == "facebook"){
      this.iab.create("https://facebook.com/fitkannadiga", "_system");
      return false;
    } else if(socialMedia == "instagram"){
      this.iab.create("https://www.instagram.com/fitkannadiga/", "_system");
      return false;
    } else {
      this.iab.create("https://youtube.com/c/fitkannadiga", "_system");
      return false;
    }
  }

}
