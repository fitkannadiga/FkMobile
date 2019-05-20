import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { TabsPage } from './tabs/tabs.page';
import { RegistrationPage } from './pages/registration/registration.page';
import { HomePage } from './pages/home/home.page';
import { RecipesPage } from './pages/recipes/recipes.page';
import { VideosPage } from './pages/videos/videos.page';
import { FitBookPage } from './pages/fit-book/fit-book.page';


const routes: Routes = [
  // { path: '', redirectTo: '/login',pathMatch: 'full'},
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', component: LoginPage },
  // { path: 'registration', component: RegistrationPage },
  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
  { path: 'home', component: HomePage },
  { path: 'recipes', component: RecipesPage },
  { path: 'videos', component: VideosPage },
  { path: 'fit-book', component: FitBookPage },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'recipe-details', loadChildren: './pages/recipe-details/recipe-details.module#RecipeDetailsPageModule' },
  { path: 'articles', loadChildren: './pages/articles/articles.module#ArticlesPageModule' },
  { path: 'article-details', loadChildren: './pages/article-details/article-details.module#ArticleDetailsPageModule' },
  { path: 'workout', loadChildren: './pages/workout/workout.module#WorkoutPageModule' },
  { path: 'split-details', loadChildren: './pages/split-details/split-details.module#SplitDetailsPageModule' },
  { path: 'individual-workout-list/:muscle', loadChildren: './pages/individual-workout-list/individual-workout-list.module#IndividualWorkoutListPageModule' },
  { path: 'tools', loadChildren: './pages/tools/tools.module#ToolsPageModule' },
  { path: 'bmrcalculator', loadChildren: './pages/bmrcalculator/bmrcalculator.module#BMRcalculatorPageModule' },
  { path: 'interval-timer', loadChildren: './pages/interval-timer/interval-timer.module#IntervalTimerPageModule' },
  { path: 'macros-calci', loadChildren: './pages/macros-calci/macros-calci.module#MacrosCalciPageModule' },
  { path: 'nutrient-graph', loadChildren: './pages/nutrient-graph/nutrient-graph.module#NutrientGraphPageModule' },
  { path: 'hire-coach', loadChildren: './pages/hire-coach/hire-coach.module#HireCoachPageModule' },
  { path: 'client-plans', loadChildren: './pages/client-plans/client-plans.module#ClientPlansPageModule' },
  { path: 'custom-diet-workout', loadChildren: './pages/custom-diet-workout/custom-diet-workout.module#CustomDietWorkoutPageModule' },
  { path: 'client-diet', loadChildren: './pages/client-diet/client-diet.module#ClientDietPageModule' },
  { path: 'client-workout', loadChildren: './pages/client-workout/client-workout.module#ClientWorkoutPageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'create-recipe', loadChildren: './pages/create-recipe/create-recipe.module#CreateRecipePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
