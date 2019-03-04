import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BMRcalculatorPage } from './bmrcalculator.page';

const routes: Routes = [
  {
    path: '',
    component: BMRcalculatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BMRcalculatorPage]
})
export class BMRcalculatorPageModule {}
