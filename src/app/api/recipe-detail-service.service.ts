import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecipeDetailServiceService {

  recipeDetailObj: any = {};

  constructor() { }

  setRecipeData(data){
    this.recipeDetailObj = data;
  }

  getRecipeData(){
    return this.recipeDetailObj;
  }
}
