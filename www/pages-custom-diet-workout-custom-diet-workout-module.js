(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-custom-diet-workout-custom-diet-workout-module"],{

/***/ "./src/app/pages/custom-diet-workout/custom-diet-workout.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/custom-diet-workout/custom-diet-workout.module.ts ***!
  \*************************************************************************/
/*! exports provided: CustomDietWorkoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDietWorkoutPageModule", function() { return CustomDietWorkoutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _custom_diet_workout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-diet-workout.page */ "./src/app/pages/custom-diet-workout/custom-diet-workout.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _custom_diet_workout_page__WEBPACK_IMPORTED_MODULE_5__["CustomDietWorkoutPage"]
    }
];
var CustomDietWorkoutPageModule = /** @class */ (function () {
    function CustomDietWorkoutPageModule() {
    }
    CustomDietWorkoutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_custom_diet_workout_page__WEBPACK_IMPORTED_MODULE_5__["CustomDietWorkoutPage"]]
        })
    ], CustomDietWorkoutPageModule);
    return CustomDietWorkoutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/custom-diet-workout/custom-diet-workout.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/custom-diet-workout/custom-diet-workout.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Your Plans</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div id=\"non-customer\" *ngIf=\"!customer\">\n        <p text-center id=\"alert-icon\">\n            <ion-icon ios=\"ios-alert\" md=\"md-alert\"></ion-icon>\n        </p>\n        <p>\n            Looks like you have not enrolled for online coaching. To get trained by us, please drop a mail to <a href=\"mailto:fitkannadiga@gmail.com\">fitkannadiga@gmail.com</a>\n        </p>\n        <p>**Terms & Conditions applied**</p>\n    </div>\n    <div *ngIf=\"customer\" id=\"customer\">\n        <div class=\"wrapper\" (click)=\"openDetailsPage('diet')\">\n                <img id=\"diet\" src=\"./assets/icon/diet.png\"/>\n            <ion-card class=\"diet\">\n                <ion-card-content>\n                    <ion-card-title>\n                        Diet Plan\n                    </ion-card-title>\n                    <p>\n                        Your customized diet plan to reach your goal which will be revised based on your progress and updates.\n                    </p>\n                </ion-card-content>\n            </ion-card>\n        </div>\n        <div class=\"wrapper\" (click)=\"openDetailsPage('workout')\">\n            <img id=\"workout\" src=\"./assets/icon/workout.jpg\"/>\n            <ion-card class=\"workout\">\n                <ion-card-content>\n                    <ion-card-title>\n                        Workout Plan\n                    </ion-card-title>\n                    <p>\n                        Your customized workout plan to help you reach the fitness goal you opted duering the membership.\n                    </p>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/custom-diet-workout/custom-diet-workout.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/custom-diet-workout/custom-diet-workout.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#non-customer {\n  text-align: center;\n  padding: 20px; }\n  div#non-customer p#alert-icon {\n    font-size: 6rem;\n    color: #d43b3d;\n    margin-bottom: 0px;\n    opacity: 0.9; }\n  div#customer {\n  margin: 100px 5px !important; }\n  div#customer div.wrapper {\n    text-align: center;\n    position: relative; }\n  div#customer div.wrapper img {\n      width: 100px;\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: auto;\n      top: -60px;\n      padding: 10px;\n      z-index: 999; }\n  div#customer div.wrapper img.diet {\n      padding: 8px !important; }\n  div#customer div.wrapper ion-card ion-card-content p {\n      color: #fff; }\n  div#customer div.wrapper ion-card.diet {\n      margin: 0px 10px;\n      padding: 20px;\n      text-align: center;\n      margin-top: 60px;\n      background: #295c00;\n      background: -webkit-gradient(left top, right top, color-stop(0%, #295c00), color-stop(100%, rgba(4, 180, 86, 0.86)));\n      background: linear-gradient(to right, #295c00 0%, rgba(4, 180, 86, 0.86) 100%); }\n  div#customer div.wrapper ion-card.workout {\n      margin: 0px 10px;\n      padding: 20px;\n      text-align: center;\n      margin-top: 60px;\n      background: #cfc6eb;\n      background: -webkit-gradient(left top, right top, color-stop(0%, #cfc6eb), color-stop(0%, #5244c1), color-stop(100%, rgba(57, 143, 219, 0.85)));\n      background: linear-gradient(to right, #cfc6eb 0%, #5244c1 0%, rgba(57, 143, 219, 0.85) 100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9jdXN0b20tZGlldC13b3Jrb3V0L2N1c3RvbS1kaWV0LXdvcmtvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtFQUZqQjtJQUlRLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQUlwQjtFQUNJLDRCQUE0QixFQUFBO0VBRGhDO0lBR1Esa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBSjFCO01BTVksWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsUUFBUTtNQUNSLFlBQVk7TUFDWixVQUFVO01BQ1YsYUFBYTtNQUNiLFlBQVksRUFBQTtFQWJ4QjtNQWdCWSx1QkFBdUIsRUFBQTtFQWhCbkM7TUFxQm9CLFdBQVcsRUFBQTtFQXJCL0I7TUEwQlksZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLG1CQUEyQjtNQUUzQixvSEFBeUg7TUFJekgsOEVBQW1GLEVBQUE7RUFwQy9GO01BdUNZLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixtQkFBK0I7TUFFL0IsK0lBQWtLO01BSWxLLDRGQUErRyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdG9tLWRpZXQtd29ya291dC9jdXN0b20tZGlldC13b3Jrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNub24tY3VzdG9tZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHAjYWxlcnQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgY29sb3I6ICNkNDNiM2Q7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cbn1cblxuZGl2I2N1c3RvbWVyIHtcbiAgICBtYXJnaW46IDEwMHB4IDVweCAhaW1wb3J0YW50O1xuICAgIGRpdi53cmFwcGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0b3A6IC02MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgfVxuICAgICAgICBpbWcuZGlldCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1jYXJkLmRpZXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0MSw5MiwwLDEpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg0MSw5MiwwLDEpIDAlLCByZ2JhKDQsMTgwLDg2LDAuODYpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDQxLDkyLDAsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoNCwxODAsODYsMC44NikpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNDEsOTIsMCwxKSAwJSwgcmdiYSg0LDE4MCw4NiwwLjg2KSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDQxLDkyLDAsMSkgMCUsIHJnYmEoNCwxODAsODYsMC44NikgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNDEsOTIsMCwxKSAwJSwgcmdiYSg0LDE4MCw4NiwwLjg2KSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg0MSw5MiwwLDEpIDAlLCByZ2JhKDQsMTgwLDg2LDAuODYpIDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1jYXJkLndvcmtvdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDcsMTk4LDIzNSwxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjA3LDE5OCwyMzUsMSkgMCUsIHJnYmEoODIsNjgsMTkzLDEpIDAlLCByZ2JhKDU3LDE0MywyMTksMC44NSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjA3LDE5OCwyMzUsMSkpLCBjb2xvci1zdG9wKDAlLCByZ2JhKDgyLDY4LDE5MywxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg1NywxNDMsMjE5LDAuODUpKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDIwNywxOTgsMjM1LDEpIDAlLCByZ2JhKDgyLDY4LDE5MywxKSAwJSwgcmdiYSg1NywxNDMsMjE5LDAuODUpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjA3LDE5OCwyMzUsMSkgMCUsIHJnYmEoODIsNjgsMTkzLDEpIDAlLCByZ2JhKDU3LDE0MywyMTksMC44NSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjA3LDE5OCwyMzUsMSkgMCUsIHJnYmEoODIsNjgsMTkzLDEpIDAlLCByZ2JhKDU3LDE0MywyMTksMC44NSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjA3LDE5OCwyMzUsMSkgMCUsIHJnYmEoODIsNjgsMTkzLDEpIDAlLCByZ2JhKDU3LDE0MywyMTksMC44NSkgMTAwJSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/custom-diet-workout/custom-diet-workout.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/custom-diet-workout/custom-diet-workout.page.ts ***!
  \***********************************************************************/
/*! exports provided: CustomDietWorkoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDietWorkoutPage", function() { return CustomDietWorkoutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_client_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/client-data.service */ "./src/app/api/client-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
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







var CustomDietWorkoutPage = /** @class */ (function () {
    function CustomDietWorkoutPage(globlaComp, commonService, loadingController, toastr, clientService, router, afDataBase) {
        var _this = this;
        this.globlaComp = globlaComp;
        this.commonService = commonService;
        this.loadingController = loadingController;
        this.toastr = toastr;
        this.clientService = clientService;
        this.router = router;
        this.afDataBase = afDataBase;
        this.customer = false;
        // the below user data should be a fresh call always to avoid conflicts
        this.userID = window.localStorage.getItem('authID');
        this.commonService.getprofile(this.userID).then(function (data) {
            _this.userData = data;
            console.log("user data in custom diet", _this.userData);
            _this.customer = (_this.userData.client == true) ? true : false;
            if (_this.customer) {
                _this.validateClientStatus();
            }
        });
    }
    CustomDietWorkoutPage.prototype.ngOnInit = function () {
    };
    CustomDietWorkoutPage.prototype.validateClientStatus = function () {
        var _this = this;
        this.commonService.getClientsData(this.userID).then(function (data) {
            // save the data
            _this.clientService.saveClientData(data);
        }).catch(function (error) {
            _this.presentToast(error.message);
        });
    };
    CustomDietWorkoutPage.prototype.openDetailsPage = function (page) {
        var routePage = (page == 'diet') ? 'client-diet' : 'client-workout';
        this.router.navigateByUrl('/' + routePage);
    };
    CustomDietWorkoutPage.prototype.presentLoading = function (msg) {
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
                        _a.customDWloader = _b.sent();
                        return [4 /*yield*/, this.customDWloader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomDietWorkoutPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customDWloader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomDietWorkoutPage.prototype.presentToast = function (toastMsg) {
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
    CustomDietWorkoutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-diet-workout',
            template: __webpack_require__(/*! ./custom-diet-workout.page.html */ "./src/app/pages/custom-diet-workout/custom-diet-workout.page.html"),
            styles: [__webpack_require__(/*! ./custom-diet-workout.page.scss */ "./src/app/pages/custom-diet-workout/custom-diet-workout.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _api_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _api_client_data_service__WEBPACK_IMPORTED_MODULE_4__["ClientDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]])
    ], CustomDietWorkoutPage);
    return CustomDietWorkoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-custom-diet-workout-custom-diet-workout-module.js.map