import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomDietWorkoutPage } from './custom-diet-workout.page';

const routes: Routes = [
  {
    path: '',
    component: CustomDietWorkoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomDietWorkoutPage]
})
export class CustomDietWorkoutPageModule {}
