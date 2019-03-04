import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { CommonService } from '../../api/common.service';
import { SplitDataServiceService } from '../../api/split-data-service.service';
import { Router } from '@angular/router';
import { MuscleGroupServiceService } from '../../api/muscle-group-service.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {

  selectedSegment = "split";
  workoutsList: any;
  mainWorkoutList: any;
  workoutSearchText: any = '';
  workoutLoader: any;
  individualMuscleList: any;
  fakeWorkoutList: any = Array<number>(7);
  fakeWorkout: boolean = true;

  constructor(public loadingController: LoadingController, public commonService: CommonService, public toastr: ToastController, public splitService:SplitDataServiceService, public router: Router, public musclGroupService: MuscleGroupServiceService) {
    this.getWorkoutList();
    this.getMuscleGroupList();
  }

  ngOnInit() {
  }

  getWorkoutList(){
    // this.presentLoading('Loading Workouts..');

    this.commonService.getWorkouts().then((data)=> {
      this.mainWorkoutList = data;
      this.workoutsList = data;
      setTimeout(()=> {
        // this.dismissLoader();
        this.fakeWorkout = false;
      },1000);
    });
  }

  getMuscleGroupList(){
    this.commonService.getMuscleGroups().then((data)=> {
      this.individualMuscleList = data;
      this.musclGroupService.setMuscleGroupData(data);
    });
  }

  displayWorkout(workoutData){
    // console.log("displayWorkout", workoutData);
    this.splitService.setWorkoutSplit(workoutData);
    this.router.navigateByUrl('split-details');
  }

  searchTags(tagVal){
    this.workoutSearchText = tagVal;
    this.getTagSearch(tagVal);
  }

  cancelSearch() {
    this.workoutsList = this.mainWorkoutList;
  } 

  getTagSearch(val){
    this.workoutsList = [];
    this.mainWorkoutList.filter((workout) => {
      workout.workout_tags.forEach(element => {
        if(element.indexOf(val)  > -1){
          this.workoutsList.push(workout);
        }
      });
    });
  }

  getItems(ev: any){
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.workoutsList = this.mainWorkoutList;
      this.workoutsList = this.mainWorkoutList.filter((workout) => {
        var temp_title =  workout.workout_title;
        return (workout.workout_sd.toLowerCase().indexOf(val.toLowerCase())  > -1);
      });
    } else {
      this.workoutsList = this.mainWorkoutList;
    }
  }

  openWorkouts(data){
    this.router.navigateByUrl('/individual-workout-list/'+data);
  }

  // common functions
  segmentChanged(value){
    // console.log("selected",value);
    this.selectedSegment = value;
  }

  async presentLoading(msg) {
    this.workoutLoader = await this.loadingController.create({
      message: msg
    });
    await this.workoutLoader.present();
  }

  async dismissLoader(){
    await this.workoutLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
