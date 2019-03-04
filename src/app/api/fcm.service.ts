import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private firebase: Firebase,
    private afs: AngularFirestore,
    private platform: Platform,
    public commonService: CommonService) {}

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
     await this.firebase.grantPermission();
    }

    this.commonService.setToken(token);
    this.saveToken(token);
  }

  private saveToken(token) {
    if (!token) return;

    const devicesRef = this.afs.collection('devices');

    const data = {
      token,
      userId: window.localStorage.getItem('authID'),
      userName: 'user'
    };

    return devicesRef.doc(token).set(data);
  }

  onNotifications() {
    return this.firebase.onNotificationOpen();
  }
}
