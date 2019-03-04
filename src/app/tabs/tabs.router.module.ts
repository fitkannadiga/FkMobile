import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomePage } from '../pages/home/home.page';
import { RecipesPage } from '../pages/recipes/recipes.page';
import { VideosPage } from '../pages/videos/videos.page';
import { FitBookPage } from '../pages/fit-book/fit-book.page';

// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: '',
//         redirectTo: '/tabs/(home:home)',
//         pathMatch: 'full',
//       },
//       {
//           path: 'home',
//           outlet: 'home',
//           component: HomePage
//       },
//       {
//           path: 'recipe',
//           outlet: 'ricep',
//           component: RecipesPage
//       },
//       {
//           path: 'video',
//           outlet: 'video',
//           component: VideosPage
//       },
//       {
//         path: 'social',
//         outlet: 'social',
//         component: FitBookPage
//     } 
//   ]
//   },
//   {
//     path: 'tabs',
//     redirectTo: '/tabs/(home:home)',
//     pathMatch: 'full'
//   }
// ];

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../pages/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'recipes',
        children: [
          {
            path: '',
            loadChildren: '../pages/recipes/recipes.module#RecipesPageModule'
          }
        ]
      },
      {
        path: 'videos',
        children: [
          {
            path: '',
            loadChildren: '../pages/videos/videos.module#VideosPageModule'
          }
        ]
      },
      {
        path: 'fitbook',
        children: [
          {
            path: '',
            loadChildren: '../pages/fit-book/fit-book.module#FitBookPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
