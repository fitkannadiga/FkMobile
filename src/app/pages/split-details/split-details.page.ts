import { Component, OnInit } from '@angular/core';
import { SplitDataServiceService } from '../../api/split-data-service.service';

@Component({
  selector: 'app-split-details',
  templateUrl: './split-details.page.html',
  styleUrls: ['./split-details.page.scss'],
})
export class SplitDetailsPage implements OnInit {

  workoutDetails: any;
  video_id: any;
  firebaseSource: any;
  firebasePoster: any;

  constructor(public splitServices: SplitDataServiceService) {
    this.workoutDetails = splitServices.getSplitData();
    this.firebasePoster = this.workoutDetails.workout_img;
    this.firebaseSource = this.workoutDetails.workout_video;
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WorkoutDetailPage');
  }

}
