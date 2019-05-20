(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bmrcalculator-bmrcalculator-module"],{

/***/ "./src/app/pages/bmrcalculator/bmrcalculator.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/bmrcalculator/bmrcalculator.module.ts ***!
  \*************************************************************/
/*! exports provided: BMRcalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BMRcalculatorPageModule", function() { return BMRcalculatorPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bmrcalculator_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bmrcalculator.page */ "./src/app/pages/bmrcalculator/bmrcalculator.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _bmrcalculator_page__WEBPACK_IMPORTED_MODULE_5__["BMRcalculatorPage"]
    }
];
var BMRcalculatorPageModule = /** @class */ (function () {
    function BMRcalculatorPageModule() {
    }
    BMRcalculatorPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bmrcalculator_page__WEBPACK_IMPORTED_MODULE_5__["BMRcalculatorPage"]]
        })
    ], BMRcalculatorPageModule);
    return BMRcalculatorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bmrcalculator/bmrcalculator.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/bmrcalculator/bmrcalculator.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>BMR Calculator</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form #bmrForm=\"ngForm\" (ngSubmit)=\"calculateBMR()\">\n        <ion-item>\n            <ion-label color=\"dark\" position=\"floating\">Age<span class=\"danger\">*</span></ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"userInfo.age\" name=\"age\" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"dark\" position=\"floating\">Gender<span class=\"danger\">*</span></ion-label>\n            <ion-select [(ngModel)]=\"userInfo.gender\" name=\"gender\" required>\n                <ion-select-option value=\"female\">Female</ion-select-option>\n                <ion-select-option value=\"male\">Male</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"dark\" position=\"floating\">Weight[kg]<span class=\"danger\">*</span></ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"userInfo.weight\" name=\"weight\" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"dark\" position=\"floating\">Height[cms]<span class=\"danger\">*</span></ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"userInfo.height\" name=\"height\" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"dark\" position=\"floating\">Goal<span class=\"danger\">*</span></ion-label>\n            <ion-select [(ngModel)]=\"userInfo.goal\" name=\"goal\" required>\n                <ion-select-option value=\"fl\">Fat Loss</ion-select-option>\n                <ion-select-option value=\"mw\">Maintain Weight</ion-select-option>\n                <ion-select-option value=\"mb\">Muscle Building</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"dark\" position=\"floating\">Activity Level<span class=\"danger\">*</span></ion-label>\n            <ion-select [(ngModel)]=\"userInfo.activity\" name=\"activity\" required>\n                <ion-select-option value=\"1.0\">No exercise</ion-select-option>\n                <ion-select-option value=\"1.15\">1-3 days/week</ion-select-option>\n                <ion-select-option value=\"1.3\">3-5 days/week</ion-select-option>\n                <ion-select-option value=\"1.4\">6-7 days/week</ion-select-option>\n                <ion-select-option value=\"1.6\">Intense 6-7 days/week</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-button class=\"fk-marginTop-25\" id=\"update-profile-btn\" color=\"primary\" expand=\"full\" size=\"large\" type=\"submit\" [disabled]=\"!bmrForm.valid\">Calculate BMR</ion-button>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/bmrcalculator/bmrcalculator.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/bmrcalculator/bmrcalculator.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JtcmNhbGN1bGF0b3IvYm1yY2FsY3VsYXRvci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/bmrcalculator/bmrcalculator.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/bmrcalculator/bmrcalculator.page.ts ***!
  \***********************************************************/
/*! exports provided: BMRcalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BMRcalculatorPage", function() { return BMRcalculatorPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_nutrient_graph_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/nutrient-graph.service */ "./src/app/api/nutrient-graph.service.ts");
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






var BMRcalculatorPage = /** @class */ (function () {
    function BMRcalculatorPage(toastr, loadingController, globalComp, commonService, router, nutrientService) {
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.globalComp = globalComp;
        this.commonService = commonService;
        this.router = router;
        this.nutrientService = nutrientService;
        this.userInfo = {};
        this.userData = {};
        this.userInfo = {
            'age': '',
            'gender': '',
            'height': '',
            'weight': '',
            'goal': '',
            'activity': ''
        };
        this.loadUserData();
    }
    BMRcalculatorPage.prototype.ngOnInit = function () {
    };
    BMRcalculatorPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad BmrCalculatorPage');
    };
    BMRcalculatorPage.prototype.loadUserData = function () {
        var _this = this;
        this.userData = this.globalComp.getUserData();
        //console.log('this.userData', this.userData);
        var dob1 = this.userData.dob.replace('-', '/');
        var dob2 = dob1.replace('-', '/');
        //console.log("dob2", dob2);
        this.userInfo.age = (this.userData.dob == undefined || this.userData.dob == "") ? "" : this.getAge(dob2);
        this.userInfo.gender = (this.userData.gender == undefined || this.userData.gender == "") ? "" : this.userData.gender;
        this.userInfo.weight = (this.userData.weight == undefined || this.userData.weight == "") ? "" : this.userData.weight;
        this.userInfo.height = (this.userData.height == undefined || this.userData.height == "") ? "" : this.userData.height;
        // create a tost to notify user to fill the profile details properly
        setTimeout(function () {
            _this.presentToast('For better experience, fill your basic details under profile section.');
        }, 2000);
    };
    BMRcalculatorPage.prototype.getAge = function (dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    BMRcalculatorPage.prototype.calculateCalorieIntake = function () {
        // console.log("Goal Selected", this.userInfo.goal);
        if (this.userInfo.goal == "fl") {
            this.IntakeCalories = Math.round(Math.round(this.BMR) - 200);
        }
        else if (this.userInfo.goal == "mb") {
            this.IntakeCalories = Math.round(Math.round(this.BMR) + 600);
        }
        else if (this.userInfo.goal == "mw") {
            this.IntakeCalories = Math.round(Math.round(this.BMR) + 50);
        }
        else {
            // nothing
        }
        // console.log("BMR calculated", this.BMR);
        // console.log("Intake calculated", this.IntakeCalories);
        // After calculating the calorie intake, load the next page to display graph
        // set data for the BMI graph
        this.nutrientService.setGrapgData(this.userInfo, this.BMR, this.IntakeCalories);
        this.router.navigateByUrl('/nutrient-graph');
    };
    BMRcalculatorPage.prototype.calculateBMR = function () {
        if (this.userInfo.gender == "male") {
            var metabolicRate = Math.round((10 * this.userInfo.weight) + (6.25 * this.userInfo.height) - (5 * this.userInfo.age) + 5);
            this.BMR = Math.round(metabolicRate * this.userInfo.activity);
        }
        else {
            var metabolicRate = Math.round((10 * this.userInfo.weight) + (6.25 * this.userInfo.height) - (5 * this.userInfo.age) - 161);
            this.BMR = Math.round(metabolicRate * this.userInfo.activity);
        }
        // console.log("BMR", this.BMR);
        this.calculateCalorieIntake();
    };
    BMRcalculatorPage.prototype.presentLoading = function (msg) {
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
                        _a.bmrLoader = _b.sent();
                        return [4 /*yield*/, this.bmrLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BMRcalculatorPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bmrLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BMRcalculatorPage.prototype.presentToast = function (toastMsg) {
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
    BMRcalculatorPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bmrcalculator',
            template: __webpack_require__(/*! ./bmrcalculator.page.html */ "./src/app/pages/bmrcalculator/bmrcalculator.page.html"),
            styles: [__webpack_require__(/*! ./bmrcalculator.page.scss */ "./src/app/pages/bmrcalculator/bmrcalculator.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _api_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _api_nutrient_graph_service__WEBPACK_IMPORTED_MODULE_5__["NutrientGraphService"]])
    ], BMRcalculatorPage);
    return BMRcalculatorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bmrcalculator-bmrcalculator-module.js.map