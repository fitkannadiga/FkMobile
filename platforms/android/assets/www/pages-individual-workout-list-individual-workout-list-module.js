(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-individual-workout-list-individual-workout-list-module"],{

/***/ "./src/app/pages/individual-workout-list/individual-workout-list.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/individual-workout-list/individual-workout-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: IndividualWorkoutListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualWorkoutListPageModule", function() { return IndividualWorkoutListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _individual_workout_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./individual-workout-list.page */ "./src/app/pages/individual-workout-list/individual-workout-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _individual_workout_list_page__WEBPACK_IMPORTED_MODULE_5__["IndividualWorkoutListPage"]
    }
];
var IndividualWorkoutListPageModule = /** @class */ (function () {
    function IndividualWorkoutListPageModule() {
    }
    IndividualWorkoutListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_individual_workout_list_page__WEBPACK_IMPORTED_MODULE_5__["IndividualWorkoutListPage"]]
        })
    ], IndividualWorkoutListPageModule);
    return IndividualWorkoutListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/individual-workout-list/individual-workout-list.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/individual-workout-list/individual-workout-list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Workout List</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>{{muscleData.muscle}}</h3>\n    <img [src]=\"muscleData.img_path\" />\n    <div [innerHTML]=\"muscleData.description\"></div>\n    <ion-card *ngFor=\"let exercise of muscleData.workouts\">\n        <ion-row>\n            <ion-col size=\"3\">\n                <img [src]=\"exercise.exercise_image\" />\n            </ion-col>\n            <ion-col>\n                <p>{{exercise.exercise_name}}</p>\n                <p>{{exercise.exercise_info}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/individual-workout-list/individual-workout-list.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/individual-workout-list/individual-workout-list.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGl2aWR1YWwtd29ya291dC1saXN0L2luZGl2aWR1YWwtd29ya291dC1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/individual-workout-list/individual-workout-list.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/individual-workout-list/individual-workout-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: IndividualWorkoutListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualWorkoutListPage", function() { return IndividualWorkoutListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_muscle_group_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/muscle-group-service.service */ "./src/app/api/muscle-group-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndividualWorkoutListPage = /** @class */ (function () {
    function IndividualWorkoutListPage(activatedRoute, muscleService) {
        this.activatedRoute = activatedRoute;
        this.muscleService = muscleService;
    }
    IndividualWorkoutListPage.prototype.ngOnInit = function () {
        this.muscleGroup = this.activatedRoute.snapshot.paramMap.get('muscle');
        console.log("this.muscleGroup", this.muscleGroup);
        var muscleInfo = this.muscleService.getIndividualMuscleWorkout(this.muscleGroup);
        this.muscleData = muscleInfo[0];
        console.log("this.muscleData from ajax", this.muscleData);
        // call the list data based on the search
    };
    IndividualWorkoutListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-workout-list',
            template: __webpack_require__(/*! ./individual-workout-list.page.html */ "./src/app/pages/individual-workout-list/individual-workout-list.page.html"),
            styles: [__webpack_require__(/*! ./individual-workout-list.page.scss */ "./src/app/pages/individual-workout-list/individual-workout-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_muscle_group_service_service__WEBPACK_IMPORTED_MODULE_2__["MuscleGroupServiceService"]])
    ], IndividualWorkoutListPage);
    return IndividualWorkoutListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-individual-workout-list-individual-workout-list-module.js.map