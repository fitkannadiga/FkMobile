import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {

  TollList: any = [];
  constructor(public router: Router) { 
    this.TollList  = [
      {
        "title": "BMR Calculator",
        "imgPath": "./assets/icon/bmr-icon.png",
        "description": "Your BMR(Basal metabolic rate) is the number of calories required to keep your body functioning at rest, also known as your metabolism.",
        "action": "bmrcalculator"
      },
      {
        "title": "Fitness Timer",
        "imgPath": "./assets/icon/timer-icon.png",
        "description": "A typical Interval training timer will run through a series of exercises for a given number of Sets, Reps & Rest Period.",
        "action": "interval-timer"
      },
      {
        "title": "Macros Finder",
        "imgPath": "./assets/icon/macros-icon.png",
        "description": "Flexible Macro Calculator helps you to Calculate your optimal macronutrient ratios based on your dieting strategy.",
        "action": "macros-calci"
      }
    ]
  }

  ngOnInit() {
  }

  openPage(page){
    this.router.navigateByUrl(page);
  }

}
