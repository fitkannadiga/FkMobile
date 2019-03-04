import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MacrosCalciPage } from './macros-calci.page';

const routes: Routes = [
  {
    path: '',
    component: MacrosCalciPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MacrosCalciPage]
})
export class MacrosCalciPageModule {}
