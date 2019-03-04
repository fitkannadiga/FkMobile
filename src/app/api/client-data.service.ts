import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  dietPlan: any;
  workoutPlan: any;

  constructor() { }

  saveClientData(data){
    this.dietPlan = data.diet;
    this.workoutPlan = data.workout;
  }

  getClientDiet(){
    return this.dietPlan;
  }

  getClientWorkout(){
    return this.workoutPlan;
  }
}
