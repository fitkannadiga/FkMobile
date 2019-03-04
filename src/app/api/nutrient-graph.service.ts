import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutrientGraphService {

  userInfo: any;
  BMR: any;
  intakeCalories: any;

  constructor() { }

  setGrapgData(param1, param2, param3){
    this.userInfo = param1;
    this.BMR = param2;
    this.intakeCalories = param3;
  }

  getGraphData(){
    var data = [this.userInfo, this.BMR, this.intakeCalories];
    return data;
  }
}
