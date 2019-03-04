import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplitDataServiceService {

  splitData: any;

  constructor() { }

  setWorkoutSplit(data){
    this.splitData = data;
  }

  getSplitData(){
    return this.splitData;
  }

}
