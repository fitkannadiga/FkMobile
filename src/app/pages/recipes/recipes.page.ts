import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController, ModalController } from '@ionic/angular';
import { CommonService } from '../../api/common.service';
import { Router } from '@angular/router';
import { RecipeDetailServiceService } from '../../api/recipe-detail-service.service';
import { CreateRecipeComponent } from '../../components/create-recipe/create-recipe.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  foodList: any;
  recipesLoader: any;
  fakeList : any = Array<number>(5);
  fakeData: boolean  = true;
  
  constructor(public loadingController: LoadingController, public commonService: CommonService, public toastr: ToastController, public router: Router, public recipeService: RecipeDetailServiceService, public navController: NavController, public modal: ModalController) {
    this.loadFoodList();
  }

  ngOnInit() {
  }

  loadFoodList(){
    // this.presentLoading('Loading Recipes...');

    this.commonService.getRecipes().then((data)=> {
      // console.log("video data", data);
      this.foodList = data;
      setTimeout(()=> {
        // this.dismissLoader();
        this.fakeData = false;
      },1000);
    }).catch(error => {
      // this.dismissLoader();
      this.presentToast(error.message);
    })
  }

  openFullRecipe(item){
    this.recipeService.setRecipeData(item);
    // this.router.navigateByUrl('/recipe-details');
    this.navController.navigateForward('/recipe-details')
  }

  doRefresh(event) {
    this.fakeData = true;
    this.commonService.getRecipes().then((data)=> {
      this.foodList = data;
      setTimeout(()=> {
        event.target.complete();
        this.fakeData = false;
      },1000);
    });
  }

  // createRecipe(){
  //   // open create recipe page
  //   this.router.navigateByUrl('/create-recipe');
  // }

  async createRecipe(){
    // save data and open modal to show story
    const modal = await this.modal.create({
      component: CreateRecipeComponent,
      componentProps: { value: '' }
    });
    return await modal.present();
  }

  async presentLoading(msg) {
    this.recipesLoader = await this.loadingController.create({
      message: msg
    });
    await this.recipesLoader.present();
  }

  async dismissLoader(){
    await this.recipesLoader.dismiss();
  }

  async presentToast(toastMsg) {
    const toast = await this.toastr.create({
      message: toastMsg,
      duration: 3000
    });
    toast.present();
  }

}
