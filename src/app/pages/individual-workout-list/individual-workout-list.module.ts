import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndividualWorkoutListPage } from './individual-workout-list.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualWorkoutListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndividualWorkoutListPage]
})
export class IndividualWorkoutListPageModule {}
