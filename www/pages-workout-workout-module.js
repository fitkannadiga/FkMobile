(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workout-workout-module"],{

/***/ "./src/app/pages/workout/workout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/workout/workout.module.ts ***!
  \*************************************************/
/*! exports provided: WorkoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPageModule", function() { return WorkoutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _workout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workout.page */ "./src/app/pages/workout/workout.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _workout_page__WEBPACK_IMPORTED_MODULE_5__["WorkoutPage"]
    }
];
var WorkoutPageModule = /** @class */ (function () {
    function WorkoutPageModule() {
    }
    WorkoutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_workout_page__WEBPACK_IMPORTED_MODULE_5__["WorkoutPage"]]
        })
    ], WorkoutPageModule);
    return WorkoutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/workout/workout.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/workout/workout.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Fitness Playground</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment [value]=\"selectedSegment\" color=\"medium\">\n        <ion-segment-button value=\"split\" (click)=\"segmentChanged('split');\">\n            <ion-label>Workouts</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"individual\" (click)=\"segmentChanged('individual');\">\n            <ion-label>Muscle Groups</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <ion-content *ngIf=\"selectedSegment == 'split'\" id=\"split-wrapper\">\n        <ion-searchbar (ionInput)=\"getItems($event)\" showCancelButton (ionCancel)=\"cancelSearch()\" [(ngModel)]=\"workoutSearchText\"></ion-searchbar>\n        <div id=\"workout-card-list\" *ngIf=\"!fakeWorkout\">\n            <ion-card *ngFor=\"let list of workoutsList\">\n                <ion-row (click)=\"displayWorkout(list);\">\n                    <ion-col>\n                        <img [src]=\"list.workout_img\" onError=\"src = './assets/imgs/default.png'\"/>\n                    </ion-col>\n                    <ion-col class=\"description\">\n                        <p class=\"card-title\">{{list.workout_title}}</p>\n                        <span class=\"card-subtitle\">{{list.workout_sd}}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <span class=\"tags\" *ngFor=\"let tag of list.workout_tags\" (click)=\"searchTags(tag);\">{{tag}}</span>\n                    <ion-icon *ngIf=\"list.premium\" id=\"premium-icon\" name=\"ribbon\"></ion-icon>\n                </ion-row>\n            </ion-card>\n        </div>\n        <div *ngIf=\"fakeWorkout\" id=\"fake-workout-wrapper\">\n            <ion-card *ngFor=\"let list of fakeWorkoutList\">\n                <ion-row class=\"workout-content\">\n                    <ion-col>\n                        <div class=\"animate-skeleton-background\"></div>\n                    </ion-col>\n                    <ion-col class=\"description\">\n                        <p class=\"animate-skeleton-background\"></p>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"workout-tags\">\n                    <span class=\"animate-skeleton-background\"></span>\n                    <span class=\"animate-skeleton-background\"></span>\n                </ion-row>\n            </ion-card>\n        </div>\n    </ion-content>\n    <ion-content *ngIf=\"selectedSegment == 'individual'\" padding id=\"individual-wrapper\">\n        <ion-row>\n            <ion-col (click)=\"openWorkouts('Bicep');\">\n                <img src=\"assets/icon/muscle_icon/bicep.png\" onError=\"src = './assets/imgs/default.png'\"/>\n                <p>Bicep</p>\n            </ion-col>\n            <ion-col (click)=\"openWorkouts('Back');\">\n                <img src=\"assets/icon/muscle_icon/back.png\" onError=\"src = './assets/imgs/default.png'\"/>\n                <p>Back</p>\n            </ion-col>\n            <ion-col (click)=\"openWorkouts('Legs');\">\n                <img src=\"assets/icon/muscle_icon/quads.png\" onError=\"src = './assets/imgs/default.png'\"/>\n                <p>Legs</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col (click)=\"openWorkouts('Abdominals');\">\n                <img src=\"assets/icon/muscle_icon/abs.png\" onError=\"src = './assets/imgs/default.png'\"/>\n                <p>Abs</p>\n            </ion-col>\n            <ion-col (click)=\"openWorkouts('Chest');\">\n                <img src=\"assets/icon/muscle_icon/chest.png\" onError=\"src = './assets/imgs/default.png'\"/>\n                <p>Chest</p>\n            </ion-col>\n            <ion-col (click)=\"openWorkouts('Tricep');\">\n                <img src=\"assets/icon/muscle_icon/tricep.png\" onError=\"src = './assets/imgs/default.png'\"/>\n                <p>Tricep</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col (click)=\"openWorkouts('Shoulder');\">\n                <img src=\"assets/icon/muscle_icon/shoulder.png\" onError=\"src = './assets/imgs/default.png'\"/>\n                <p>Shoulder</p>\n            </ion-col>\n            <ion-col (click)=\"openWorkouts('Calves');\">\n                <img src=\"assets/icon/muscle_icon/calves.png\" onError=\"src = './assets/imgs/default.png'\"/>\n                <p>Calves</p>\n            </ion-col>\n            <ion-col></ion-col>\n        </ion-row>\n    </ion-content>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/workout/workout.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/workout/workout.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment ion-segment-button {\n  height: 40px;\n  text-align: center;\n  font-size: 1rem;\n  background-color: #dcdcdc !important;\n  font-weight: bold; }\n\nion-segment ion-segment-button.segment-button-checked {\n  background-color: #3B4EAC !important;\n  color: #FFF !important; }\n\nion-content#split-wrapper div#workout-card-list {\n  padding-bottom: 60px; }\n\nion-content#split-wrapper span.tags {\n  padding: 4px 10px;\n  background-color: #A8B0DD;\n  margin: 5px;\n  font-weight: bold;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  text-align: center;\n  color: #fff; }\n\nion-content#split-wrapper p.card-title {\n  color: #000;\n  font-weight: bold;\n  margin: 0px 0px 5px; }\n\nion-content#split-wrapper ion-icon#premium-icon {\n  color: #e0b500;\n  position: absolute;\n  right: 0;\n  padding-right: 10px;\n  font-size: 2rem; }\n\nion-content#individual-wrapper ion-row ion-col {\n  text-align: center; }\n\nion-content#individual-wrapper ion-row ion-col img {\n    border-radius: 60px;\n    box-shadow: -2px 8px 6px #dcdcdc; }\n\nion-content#individual-wrapper ion-row ion-col p {\n    color: #000;\n    font-weight: bold;\n    font-size: 1.2rem;\n    margin: 6px 0px; }\n\ndiv#fake-workout-wrapper ion-card {\n  height: 120px; }\n\ndiv#fake-workout-wrapper ion-card ion-row.workout-content {\n    height: 70%; }\n\ndiv#fake-workout-wrapper ion-card ion-row.workout-content ion-col div {\n      height: 100%; }\n\ndiv#fake-workout-wrapper ion-card ion-row.workout-content ion-col p {\n      height: 25px;\n      margin: 0px !important; }\n\ndiv#fake-workout-wrapper ion-card ion-row.workout-tags {\n    height: 30%; }\n\ndiv#fake-workout-wrapper ion-card ion-row.workout-tags span {\n      height: 15px;\n      width: 60px;\n      display: inline-block;\n      margin: 5px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy93b3Jrb3V0L3dvcmtvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGlCQUFpQixFQUFBOztBQU56QjtFQVNRLG9DQUFvQztFQUNwQyxzQkFBc0IsRUFBQTs7QUFJOUI7RUFFUSxvQkFBb0IsRUFBQTs7QUFGNUI7RUFLUSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQVpuQjtFQWVRLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBakIzQjtFQW9CUSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUl2QjtFQUdZLGtCQUFrQixFQUFBOztBQUg5QjtJQUtnQixtQkFBbUI7SUFDbkIsZ0NBQWdDLEVBQUE7O0FBTmhEO0lBVWdCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFNL0I7RUFFUSxhQUFhLEVBQUE7O0FBRnJCO0lBSVksV0FBVyxFQUFBOztBQUp2QjtNQU9vQixZQUFZLEVBQUE7O0FBUGhDO01BVW9CLFlBQVk7TUFDWixzQkFBc0IsRUFBQTs7QUFYMUM7SUFnQlksV0FBVyxFQUFBOztBQWhCdkI7TUFrQmdCLFlBQVk7TUFDWixXQUFXO01BQ1gscUJBQXFCO01BQ3JCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd29ya291dC93b3Jrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjRFQUMgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50I3NwbGl0LXdyYXBwZXIge1xuICAgIGRpdiN3b3Jrb3V0LWNhcmQtbGlzdCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIH1cbiAgICBzcGFuLnRhZ3Mge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0E4QjBERDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgcC5jYXJkLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgIH1cbiAgICBpb24taWNvbiNwcmVtaXVtLWljb24ge1xuICAgICAgICBjb2xvcjogI2UwYjUwMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQjaW5kaXZpZHVhbC13cmFwcGVyIHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTJweCA4cHggNnB4ICNkY2RjZGM7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgIzNCNEVBQztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZGl2I2Zha2Utd29ya291dC13cmFwcGVyIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIGlvbi1yb3cud29ya291dC1jb250ZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tcm93LndvcmtvdXQtdGFncyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/workout/workout.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/workout/workout.page.ts ***!
  \***********************************************/
/*! exports provided: WorkoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPage", function() { return WorkoutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
/* harmony import */ var _api_split_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/split-data-service.service */ "./src/app/api/split-data-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_muscle_group_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/muscle-group-service.service */ "./src/app/api/muscle-group-service.service.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/global.service */ "./src/app/api/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var WorkoutPage = /** @class */ (function () {
    function WorkoutPage(loadingController, commonService, toastr, splitService, router, musclGroupService, globalService, alertCtrl) {
        this.loadingController = loadingController;
        this.commonService = commonService;
        this.toastr = toastr;
        this.splitService = splitService;
        this.router = router;
        this.musclGroupService = musclGroupService;
        this.globalService = globalService;
        this.alertCtrl = alertCtrl;
        this.selectedSegment = "split";
        this.workoutSearchText = '';
        this.fakeWorkoutList = Array(7);
        this.fakeWorkout = true;
        this.getWorkoutList();
        this.getMuscleGroupList();
    }
    WorkoutPage.prototype.ngOnInit = function () {
    };
    WorkoutPage.prototype.getWorkoutList = function () {
        // this.presentLoading('Loading Workouts..');
        var _this = this;
        this.commonService.getWorkouts().then(function (data) {
            _this.mainWorkoutList = data;
            _this.workoutsList = data;
            setTimeout(function () {
                // this.dismissLoader();
                _this.fakeWorkout = false;
            }, 1000);
        });
    };
    WorkoutPage.prototype.getMuscleGroupList = function () {
        var _this = this;
        this.commonService.getMuscleGroups().then(function (data) {
            _this.individualMuscleList = data;
            _this.musclGroupService.setMuscleGroupData(data);
        });
    };
    WorkoutPage.prototype.displayWorkout = function (workoutData) {
        var _this = this;
        // before we push the data, check for premium users or client data
        if (workoutData.premium) {
            this.globalService.getUserInformationFirebase().then(function (data) {
                if (data['userProfile'].client == true) {
                    _this.splitService.setWorkoutSplit(workoutData);
                    _this.router.navigateByUrl('split-details');
                }
                else {
                    _this.showPrompt('This workout is only for premium members & clients. Please register with us to have unlimited access to simillar kind of workouts and much more!');
                }
            });
        }
        else {
            this.splitService.setWorkoutSplit(workoutData);
            this.router.navigateByUrl('split-details');
        }
    };
    WorkoutPage.prototype.searchTags = function (tagVal) {
        this.workoutSearchText = tagVal;
        this.getTagSearch(tagVal);
    };
    WorkoutPage.prototype.cancelSearch = function () {
        this.workoutsList = this.mainWorkoutList;
    };
    WorkoutPage.prototype.getTagSearch = function (val) {
        var _this = this;
        this.workoutsList = [];
        this.mainWorkoutList.filter(function (workout) {
            workout.workout_tags.forEach(function (element) {
                if (element.indexOf(val) > -1) {
                    _this.workoutsList.push(workout);
                }
            });
        });
    };
    WorkoutPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.workoutsList = this.mainWorkoutList;
            this.workoutsList = this.mainWorkoutList.filter(function (workout) {
                var temp_title = workout.workout_title;
                return (workout.workout_sd.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.workoutsList = this.mainWorkoutList;
        }
    };
    WorkoutPage.prototype.openWorkouts = function (data) {
        this.router.navigateByUrl('/individual-workout-list/' + data);
    };
    // common functions
    WorkoutPage.prototype.segmentChanged = function (value) {
        // console.log("selected",value);
        this.selectedSegment = value;
    };
    WorkoutPage.prototype.presentLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: msg
                            })];
                    case 1:
                        _a.workoutLoader = _b.sent();
                        return [4 /*yield*/, this.workoutLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workoutLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutPage.prototype.presentToast = function (toastMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastr.create({
                            message: toastMsg,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutPage.prototype.showPrompt = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var prompt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Note',
                            message: message,
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        // console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        prompt = _a.sent();
                        return [4 /*yield*/, prompt.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WorkoutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workout',
            template: __webpack_require__(/*! ./workout.page.html */ "./src/app/pages/workout/workout.page.html"),
            styles: [__webpack_require__(/*! ./workout.page.scss */ "./src/app/pages/workout/workout.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _api_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _api_split_data_service_service__WEBPACK_IMPORTED_MODULE_3__["SplitDataServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _api_muscle_group_service_service__WEBPACK_IMPORTED_MODULE_5__["MuscleGroupServiceService"], _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], WorkoutPage);
    return WorkoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-workout-workout-module.js.map