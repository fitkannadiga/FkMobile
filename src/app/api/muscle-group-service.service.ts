import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuscleGroupServiceService {

  muscleGroupData: any;

  constructor() { }

  setMuscleGroupData(data){
    this.muscleGroupData = data;
  }

  getIndividualMuscleWorkout(muscle){
    // return this.splitData;
    return this.muscleGroupData.filter(function(el) {
      return el.muscle == muscle;
    });
  }
}
