import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { RecipeDetailServiceService } from '../../api/recipe-detail-service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  recipeData: any;

  constructor(private route: ActivatedRoute,private router: Router, public recipeService: RecipeDetailServiceService) { 
    this.recipeData = this.recipeService.getRecipeData();
    // console.log("this.recipeData", this.recipeData);
  }

  ngOnInit() {
  }

}
