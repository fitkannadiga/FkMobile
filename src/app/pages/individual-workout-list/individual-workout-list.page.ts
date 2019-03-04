import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuscleGroupServiceService } from '../../api/muscle-group-service.service';

@Component({
  selector: 'app-individual-workout-list',
  templateUrl: './individual-workout-list.page.html',
  styleUrls: ['./individual-workout-list.page.scss'],
})
export class IndividualWorkoutListPage implements OnInit {

  muscleGroup: any;
  muscleData: any;
  constructor(public activatedRoute: ActivatedRoute, public muscleService: MuscleGroupServiceService) { }

  ngOnInit() {
    this.muscleGroup = this.activatedRoute.snapshot.paramMap.get('muscle');
    console.log("this.muscleGroup", this.muscleGroup);
    let muscleInfo = this.muscleService.getIndividualMuscleWorkout(this.muscleGroup);
    this.muscleData = muscleInfo[0];
    console.log("this.muscleData from ajax", this.muscleData);
    // call the list data based on the search
  }

}
