import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.scss']
})
export class UserStoryComponent implements OnInit {

  @Input() value: number;

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modal.dismiss();
  }

}
