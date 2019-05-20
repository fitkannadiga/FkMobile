import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-workout-info',
  templateUrl: './workout-info.component.html',
  styleUrls: ['./workout-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkoutInfoComponent implements OnInit {

  @Input() workout: any;

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modal.dismiss();
  }

}
