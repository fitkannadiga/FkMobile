(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nutrient-graph-nutrient-graph-module"],{

/***/ "./src/app/pages/nutrient-graph/nutrient-graph.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/nutrient-graph/nutrient-graph.module.ts ***!
  \***************************************************************/
/*! exports provided: NutrientGraphPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutrientGraphPageModule", function() { return NutrientGraphPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nutrient_graph_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nutrient-graph.page */ "./src/app/pages/nutrient-graph/nutrient-graph.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _nutrient_graph_page__WEBPACK_IMPORTED_MODULE_5__["NutrientGraphPage"]
    }
];
var NutrientGraphPageModule = /** @class */ (function () {
    function NutrientGraphPageModule() {
    }
    NutrientGraphPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_nutrient_graph_page__WEBPACK_IMPORTED_MODULE_5__["NutrientGraphPage"]]
        })
    ], NutrientGraphPageModule);
    return NutrientGraphPageModule;
}());



/***/ }),

/***/ "./src/app/pages/nutrient-graph/nutrient-graph.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/nutrient-graph/nutrient-graph.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Calorie Intake</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h3> Goal - {{goal}}</h3>\n    <p>Calculated Daily calorie intake based on selected <i>Activity Level</i> came upto - <strong>{{BMR}} Cal/day</strong></p>\n    <p>To reach your goal, you will have to consume - <strong>{{IntakeCalories}} Cal/day</strong></p>\n    <div id=\"chartdiv\" style=\"width: 100%; height: 300px; background-color: #FFFFFF;\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/nutrient-graph/nutrient-graph.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/nutrient-graph/nutrient-graph.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chartdiv div.amcharts-chart-div a {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9udXRyaWVudC1ncmFwaC9udXRyaWVudC1ncmFwaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL251dHJpZW50LWdyYXBoL251dHJpZW50LWdyYXBoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydGRpdiB7XG4gICAgZGl2LmFtY2hhcnRzLWNoYXJ0LWRpdiB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/nutrient-graph/nutrient-graph.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/nutrient-graph/nutrient-graph.page.ts ***!
  \*************************************************************/
/*! exports provided: NutrientGraphPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutrientGraphPage", function() { return NutrientGraphPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_nutrient_graph_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/nutrient-graph.service */ "./src/app/api/nutrient-graph.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NutrientGraphPage = /** @class */ (function () {
    function NutrientGraphPage(nutrientService) {
        this.nutrientService = nutrientService;
        this.userInfo = {};
        var userData = this.nutrientService.getGraphData();
        this.userInfo = userData[0];
        this.BMR = userData[1];
        this.IntakeCalories = userData[2];
        if (this.userInfo['goal'] == "fl") {
            this.goal = "Fat Loss";
            this.breakRation = "25.45.30";
        }
        else if (this.userInfo['goal'] == "mb") {
            this.goal = "Muscle Building";
            this.breakRation = "40.35.25";
        }
        else {
            this.goal = "Maintain Weight";
            this.breakRation = "50.30.20";
        }
        // console.log("this.userInfo", this.userInfo)
        // console.log("this.BMR", this.BMR)
        // console.log("this.IntakeCalories", this.IntakeCalories);
    }
    NutrientGraphPage.prototype.ngOnInit = function () {
        this.calculateCaloriesForGoal(this.IntakeCalories, this.breakRation);
    };
    NutrientGraphPage.prototype.calculateCaloriesForGoal = function (new_bmr, ratio) {
        var ratioArray = ratio.split(".");
        var carbs = Math.ceil(Math.round(((new_bmr * Math.round(ratioArray[0])) / 100) / 4));
        var proteins = Math.ceil(Math.round(((new_bmr * Math.round(ratioArray[1])) / 100) / 4));
        var fats = Math.ceil(Math.round(((new_bmr * Math.round(ratioArray[2])) / 100) / 9));
        // console.log("data passed to chart", carbs, proteins, fats);
        this.loadChart(carbs, proteins, fats);
        this.carbs = carbs;
        this.proteins = proteins;
        this.fats = fats;
    };
    NutrientGraphPage.prototype.loadChart = function (carbs, proteins, fats) {
        AmCharts.makeChart("chartdiv", {
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
        });
    };
    NutrientGraphPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nutrient-graph',
            template: __webpack_require__(/*! ./nutrient-graph.page.html */ "./src/app/pages/nutrient-graph/nutrient-graph.page.html"),
            styles: [__webpack_require__(/*! ./nutrient-graph.page.scss */ "./src/app/pages/nutrient-graph/nutrient-graph.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_nutrient_graph_service__WEBPACK_IMPORTED_MODULE_1__["NutrientGraphService"]])
    ], NutrientGraphPage);
    return NutrientGraphPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nutrient-graph-nutrient-graph-module.js.map