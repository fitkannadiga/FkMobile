(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-split-details-split-details-module"],{

/***/ "./src/app/pages/split-details/split-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/split-details/split-details.module.ts ***!
  \*************************************************************/
/*! exports provided: SplitDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitDetailsPageModule", function() { return SplitDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _split_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./split-details.page */ "./src/app/pages/split-details/split-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _split_details_page__WEBPACK_IMPORTED_MODULE_5__["SplitDetailsPage"]
    }
];
var SplitDetailsPageModule = /** @class */ (function () {
    function SplitDetailsPageModule() {
    }
    SplitDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_split_details_page__WEBPACK_IMPORTED_MODULE_5__["SplitDetailsPage"]]
        })
    ], SplitDetailsPageModule);
    return SplitDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/split-details/split-details.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/split-details/split-details.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Workout Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card id=\"workout-details-card\">\n        <div class=\"videowrapper embed-responsive embed-responsive-16by9\" *ngIf=\"workoutDetails.workout_video != ''\">\n            <video #videoPlayer id=\"yt_video_player\" autoplay width=\"100%\" class=\"embed-responsive-item\" autobuffer controls [poster]=\"firebasePoster\" playsinline [src]=\"firebaseSource\"></video>\n        </div>\n        <img *ngIf=\"workoutDetails.workout_video == ''\" [src]=\"workoutDetails.workout_img\" [alt]=\"workoutDetails.workout_title\" />\n        <ion-card-content>\n            <ion-card-title>\n                {{workoutDetails.workout_title}}\n            </ion-card-title>\n            <div [innerHTML]=\"workoutDetails.workout_desc\"></div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/split-details/split-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/split-details/split-details.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card#workout-details-card {\n  margin: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9zcGxpdC1kZXRhaWxzL3NwbGl0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcGxpdC1kZXRhaWxzL3NwbGl0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGlvbi1jYXJkI3dvcmtvdXQtZGV0YWlscy1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/split-details/split-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/split-details/split-details.page.ts ***!
  \***********************************************************/
/*! exports provided: SplitDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitDetailsPage", function() { return SplitDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_split_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/split-data-service.service */ "./src/app/api/split-data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplitDetailsPage = /** @class */ (function () {
    function SplitDetailsPage(splitServices) {
        this.splitServices = splitServices;
        this.workoutDetails = splitServices.getSplitData();
        this.firebasePoster = this.workoutDetails.workout_img;
        this.firebaseSource = this.workoutDetails.workout_video;
    }
    SplitDetailsPage.prototype.ngOnInit = function () {
    };
    SplitDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad WorkoutDetailPage');
    };
    SplitDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-split-details',
            template: __webpack_require__(/*! ./split-details.page.html */ "./src/app/pages/split-details/split-details.page.html"),
            styles: [__webpack_require__(/*! ./split-details.page.scss */ "./src/app/pages/split-details/split-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_split_data_service_service__WEBPACK_IMPORTED_MODULE_1__["SplitDataServiceService"]])
    ], SplitDetailsPage);
    return SplitDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-split-details-split-details-module.js.map