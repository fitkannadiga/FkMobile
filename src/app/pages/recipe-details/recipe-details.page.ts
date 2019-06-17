import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Platform } from '@ionic/angular';

import { switchMap } from 'rxjs/operators';
import { RecipeDetailServiceService } from '../../api/recipe-detail-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailsPage implements OnInit {

  recipeData: any;

  constructor(public platform: Platform, public nav: NavController, private route: ActivatedRoute,private router: Router, public recipeService: RecipeDetailServiceService) { 
    this.recipeData = this.recipeService.getRecipeData();
    // console.log("this.recipeData", this.recipeData);

    this.platform.backButton.subscribe((data)=> {
      if(this.router.url.indexOf('recipe-details') > -1){
        // set the nav back to recipe page as it redirects to home page
        this.nav.navigateRoot('/tabs/recipes');
      }
    });
  }

  ngOnInit() {
  }

  checkBack(event){
    // set the nav back to recipe page as it redirects to home page
    this.nav.navigateRoot('/tabs/recipes');
  }

}
