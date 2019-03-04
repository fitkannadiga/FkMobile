import { Component, OnInit } from '@angular/core';
import { NutrientGraphService } from '../../api/nutrient-graph.service';

declare var AmCharts: any;

@Component({
  selector: 'app-nutrient-graph',
  templateUrl: './nutrient-graph.page.html',
  styleUrls: ['./nutrient-graph.page.scss'],
})
export class NutrientGraphPage implements OnInit {

  userInfo = {};
  BMR: any;
  IntakeCalories: any;
  goal: string;
  breakRation: string;
  carbs: any;
  proteins: any;
  fats: any;
  

  constructor(public nutrientService: NutrientGraphService) {
    let userData = this.nutrientService.getGraphData();
    this.userInfo = userData[0];
    this.BMR = userData[1];
    this.IntakeCalories = userData[2];
    
    if(this.userInfo['goal'] == "fl"){
      this.goal = "Fat Loss";
      this.breakRation = "25.45.30";
    } else if(this.userInfo['goal'] == "mb"){
      this.goal = "Muscle Building";
      this.breakRation = "40.35.25";
    } else {
      this.goal = "Maintain Weight";
      this.breakRation = "50.30.20";
    }
    

    // console.log("this.userInfo", this.userInfo)
    // console.log("this.BMR", this.BMR)
    // console.log("this.IntakeCalories", this.IntakeCalories);

  }

  ngOnInit() {
    this.calculateCaloriesForGoal(this.IntakeCalories, this.breakRation);
  }


  calculateCaloriesForGoal(new_bmr, ratio){
    var ratioArray = ratio.split(".");
    var carbs = Math.ceil(Math.round(((new_bmr*Math.round(ratioArray[0]))/100)/4));
		var proteins = Math.ceil(Math.round(((new_bmr*Math.round(ratioArray[1]))/100)/4));
		var fats = Math.ceil(Math.round(((new_bmr*Math.round(ratioArray[2]))/100)/9));

    // console.log("data passed to chart", carbs, proteins, fats);
    this.loadChart(carbs, proteins, fats);
    this.carbs = carbs;
    this.proteins = proteins;
    this.fats = fats;
  }

  loadChart(carbs, proteins, fats){
    AmCharts.makeChart("chartdiv",
				{
          "type": "pie",
          "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]] gms</b> ([[percents]]%)</span>",
          "pullOutRadius": "0%",
          "innerRadius": "12",
          "labelText": "[[title]]: [[percents]] gms",
          "labelsEnabled": false,
          "titleField": "category",
          "valueField": "column-1",
          "theme": "light",
          "allLabels": [],
          "balloon": {},
          "colors": [
            "#286383",
            "#3A3A3A",
            "#47ADE0"
          ],
          "legend": {
            "enabled": true,
            "align": "center",
            "markerType": "circle"
          },
          "titles": [],
          "dataProvider": [
            {
              "category": "Carbohydrates [in gms]",
              "column-1": carbs
            },
            {
              "category": "Proteins [in gms]",
              "column-1": proteins
            },
            {
              "category": "Fats [in gms]",
              "column-1": fats
            }
          ]
        }
			);
  }

  // showSampleDiet(){
  //   this.navCtrl.push(DietPlanPage, {
  //     'bmr': this.BMR,
  //     'intake': this.IntakeCalories,
  //     'carbs': this.carbs,
  //     'proteins': this.proteins,
  //     'fats': this.fats,
  //     'goal': this.goal
  //   });
  // }

}
