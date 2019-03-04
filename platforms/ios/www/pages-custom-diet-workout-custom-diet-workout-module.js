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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Customized Plans</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div id=\"non-customer\" *ngIf=\"!customer\">\n        <p text-center id=\"alert-icon\">\n            <ion-icon ios=\"ios-alert\" md=\"md-alert\"></ion-icon>\n        </p>\n        <p>\n            Looks like you have not enrolled for online coaching. To get trained by us, please drop a mail to <a href=\"mailto:fitkannadiga@gmail.com\">fitkannadiga@gmail.com</a>\n        </p>\n        <p>**Terms & Conditions applied**</p>\n    </div>\n    <div *ngIf=\"customer\" id=\"customer\">\n        <ion-card (click)=\"openDetailsPage('diet')\">\n            <ion-row>\n                <ion-col size=\"3\">\n                    <img src=\"https://cdn2.iconfinder.com/data/icons/healthy-flat-style-1/64/clean-diet-food-fruit-vegetarian-128.png\" />\n                </ion-col>\n                <ion-col class=\"text\">\n                    Diet Plan\n                </ion-col>\n            </ion-row>\n        </ion-card>\n        <ion-card (click)=\"openDetailsPage('workout')\">\n            <ion-row>\n                <ion-col size=\"3\">\n                    <img src=\"https://cdn2.iconfinder.com/data/icons/healthy-flat-style-1/64/activity-running-sport-128.png\" />\n                </ion-col>\n                <ion-col class=\"text\">\n                    Workout Plan\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/custom-diet-workout/custom-diet-workout.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/custom-diet-workout/custom-diet-workout.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#non-customer {\n  text-align: center; }\n  div#non-customer p#alert-icon {\n    font-size: 4rem;\n    color: #d43b3d;\n    margin-bottom: 0px; }\n  div#customer ion-card ion-row ion-col.text {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: block;\n  padding-top: 30px;\n  color: #000; }\n  div#customer ion-card ion-row span#new-msg-count {\n  display: block;\n  font-size: 0.8rem;\n  padding: 7px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: #633ce0;\n  color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9jdXN0b20tZGlldC13b3Jrb3V0L2N1c3RvbS1kaWV0LXdvcmtvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFHUSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBSTFCO0VBSWdCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVyxFQUFBO0VBVDNCO0VBWWdCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLHlCQUF5QjtFQUN6QixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0b20tZGlldC13b3Jrb3V0L2N1c3RvbS1kaWV0LXdvcmtvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I25vbi1jdXN0b21lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHAjYWxlcnQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgY29sb3I6ICNkNDNiM2Q7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG59XG5cbmRpdiNjdXN0b21lciB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIGlvbi1jb2wudGV4dCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiNuZXctbXNnLWNvdW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjMzY2UwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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