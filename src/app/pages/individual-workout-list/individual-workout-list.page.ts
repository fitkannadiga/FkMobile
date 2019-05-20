import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuscleGroupServiceService } from '../../api/muscle-group-service.service';
import { ModalController } from '@ionic/angular';
import { WorkoutInfoComponent } from '../../components/workout-info/workout-info.component';

@Component({
  selector: 'app-individual-workout-list',
  templateUrl: './individual-workout-list.page.html',
  styleUrls: ['./individual-workout-list.page.scss'],
})
export class IndividualWorkoutListPage implements OnInit {

  muscleGroup: any;
  exerciseList: any;
  finalExerciseList: any;
  muscleData: any;
  constructor(public activatedRoute: ActivatedRoute, public muscleService: MuscleGroupServiceService, public modal: ModalController) { }

  ngOnInit() {
    // get muscle if from the router configuration
    this.muscleGroup = this.activatedRoute.snapshot.paramMap.get('muscle');
    console.log("this.muscleGroup", this.muscleGroup);
    let muscleInfo = this.muscleService.getIndividualMuscleWorkout(this.muscleGroup);
    console.log("muscleInfo>>>", muscleInfo);
    this.muscleData = muscleInfo[0];
    let tempData = this.muscleData.workouts;
    this.finalExerciseList = tempData;
    this.exerciseList = tempData;
    console.log("this.muscleData from ajax", this.exerciseList);
  }

  getItems(ev: any){
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.exerciseList = this.finalExerciseList;
      this.exerciseList = this.finalExerciseList.filter((list) => {
        return (list.exercise_name.toLowerCase().indexOf(val.toLowerCase())  > -1);
      }); 
    } else {
      this.exerciseList = this.finalExerciseList;
    }
  }

  cancelSearch() {
    this.exerciseList = this.finalExerciseList;
  } 

  async showWorkoutModal(workoutstory){
    // save data and open modal to show story
    const modal = await this.modal.create({
      component: WorkoutInfoComponent,
      componentProps: { workout: workoutstory }
    });
    return await modal.present();
  }

}
