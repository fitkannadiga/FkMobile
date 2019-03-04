import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import {HomePageModule} from '../pages/home/home.module';
import {RecipesPageModule} from '../pages/recipes/recipes.module';
import {FitBookPageModule} from '../pages/fit-book/fit-book.module';
import {VideosPageModule} from '../pages/videos/videos.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    RecipesPageModule,
    FitBookPageModule,
    VideosPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
