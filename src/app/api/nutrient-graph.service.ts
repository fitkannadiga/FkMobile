import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutrientGraphService {

  userInfo: any;
  BMR: any;
  intakeCalories: any;
  TEE: any;

  constructor() { }

  setGrapgData(param1, param2, param3, param4){
    this.userInfo = param1;
    this.BMR = param2;
    this.TEE = param3;
    this.intakeCalories = param4;
  }

  getGraphData(){
    var data = [this.userInfo, this.BMR, this.TEE, this.intakeCalories];
    return data;
  }
}
