import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class InternetStatusService {

  isConnected: boolean;
  
  constructor(private networkService: NetworkService) { 
    this.networkService
      .getNetworkStatus()
      .pipe()
      .subscribe((connected: boolean) => {
          this.isConnected = connected;
      });
  }

  getNewtowrkStatus(){
    return this.isConnected;
  }
}
