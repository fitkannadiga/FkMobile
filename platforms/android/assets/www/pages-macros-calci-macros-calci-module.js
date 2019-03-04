(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-macros-calci-macros-calci-module"],{

/***/ "./src/app/pages/macros-calci/macros-calci.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/macros-calci/macros-calci.module.ts ***!
  \***********************************************************/
/*! exports provided: MacrosCalciPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacrosCalciPageModule", function() { return MacrosCalciPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _macros_calci_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./macros-calci.page */ "./src/app/pages/macros-calci/macros-calci.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _macros_calci_page__WEBPACK_IMPORTED_MODULE_5__["MacrosCalciPage"]
    }
];
var MacrosCalciPageModule = /** @class */ (function () {
    function MacrosCalciPageModule() {
    }
    MacrosCalciPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_macros_calci_page__WEBPACK_IMPORTED_MODULE_5__["MacrosCalciPage"]]
        })
    ], MacrosCalciPageModule);
    return MacrosCalciPageModule;
}());



/***/ }),

/***/ "./src/app/pages/macros-calci/macros-calci.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/macros-calci/macros-calci.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Macros Calculator</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label color=\"dark\" position=\"floating\">Your daily calorie intake</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"calories\" name=\"calories\" required (ionBlur)=\"showMacros()\"></ion-input>\n    </ion-item>\n    <p id=\"info-text\" (click)=\"showBmrCalci();\" text-left>Don't know your daily calorie intake?</p>\n    <ion-item>\n        <ion-label color=\"dark\" position=\"floating\">Diet Type</ion-label>\n        <ion-select [(ngModel)]=\"dietType\" name=\"type\" required (ionChange)=\"showMacros();\">\n            <ion-select-option value=\"keto\">Keto (05:35:60)</ion-select-option>\n            <ion-select-option value=\"lcd\">Low Carb (25:35:40)</ion-select-option>\n            <ion-select-option value=\"zone\">Zone Diet (40:30:30)</ion-select-option>\n            <ion-select-option value=\"moderate\">Moderate carb Diet (50:30:20)</ion-select-option>\n            <ion-select-option value=\"high\">High carb Diet (60:25:15)</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"macros-slider\">\n        <ion-label>Carbohydrate <span *ngIf=\"in_carbs > 0\">- {{in_carbs}}gms</span><span float-right *ngIf=\"carbs > 0\">{{carbs}}%</span></ion-label>\n        <ion-range id=\"carbs\" min=\"0\" max=\"100\" color=\"carbs\" [(ngModel)]=\"carbs\"></ion-range>\n        <ion-label>Protein <span *ngIf=\"in_proteins > 0\">- {{in_proteins}}gms</span><span float-right *ngIf=\"proteins > 0\">{{proteins}}%</span></ion-label>\n        <ion-range id=\"proteins\" min=\"0\" max=\"100\" color=\"proteins\" [(ngModel)]=\"proteins\"></ion-range>\n        <ion-label>Fat <span *ngIf=\"in_fats > 0\">- {{in_fats}}gms</span><span float-right *ngIf=\"fats > 0\">{{fats}}%</span></ion-label>\n        <ion-range id=\"fats\" min=\"0\" max=\"100\" color=\"fats\" [(ngModel)]=\"fats\"></ion-range>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/macros-calci/macros-calci.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/macros-calci/macros-calci.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content p#info-text {\n  color: #0000FF;\n  font-weight: bold;\n  font-size: 1.2rem; }\n\nion-content div.macros-slider {\n  margin-top: 50px; }\n\nion-content ion-item div.item-native {\n  padding-left: 0px !important; }\n\nion-content ion-range {\n  padding: 0px !important; }\n\nion-content ion-label {\n  margin-bottom: 0px !important; }\n\nion-content ion-range#carbs {\n  pointer-events: none !important;\n  --bar-background-active: #F19733 !important;\n  --knob-background: #F19733 !important; }\n\nion-content ion-range#carbs .range-bar-active,\n  ion-content ion-range#carbs .range-knob,\n  ion-content ion-range#carbs .range-disabled {\n    background: var(--ion-color-carbs) !important;\n    background-color: var(--ion-color-carbs) !important;\n    color: var(--ion-color-carbs-contrast) !important; }\n\nion-content ion-range#proteins {\n  pointer-events: none !important;\n  --bar-background-active: #E2573F !important;\n  --knob-background: #E2573F !important; }\n\nion-content ion-range#proteins .range-bar-active,\n  ion-content ion-range#proteins .range-knob,\n  ion-content ion-range#proteins .range-disabled {\n    background: var(--ion-color-proteins) !important;\n    background-color: var(--ion-color-proteins) !important;\n    color: var(--ion-color-proteins-contrast); }\n\nion-content ion-range#fats {\n  pointer-events: none !important;\n  --bar-background-active: #FDF731 !important;\n  --knob-background: #FDF731 !important; }\n\nion-content ion-range#fats .range-bar-active,\n  ion-content ion-range#fats .range-knob,\n  ion-content ion-range#fats .range-disabled {\n    background: var(--ion-color-fats) !important;\n    background-color: var(--ion-color-fats) !important;\n    color: var(--ion-color-fats-contrast); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9tYWNyb3MtY2FsY2kvbWFjcm9zLWNhbGNpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBSnpCO0VBT1EsZ0JBQWdCLEVBQUE7O0FBUHhCO0VBV1ksNEJBQTRCLEVBQUE7O0FBWHhDO0VBZVEsdUJBQXVCLEVBQUE7O0FBZi9CO0VBa0JRLDZCQUE2QixFQUFBOztBQWxCckM7RUFxQlEsK0JBQStCO0VBQy9CLDJDQUF3QjtFQUN4QixxQ0FBa0IsRUFBQTs7QUF2QjFCOzs7SUEyQlksNkNBQTZDO0lBQzdDLG1EQUFtRDtJQUNuRCxpREFBaUQsRUFBQTs7QUE3QjdEO0VBaUNRLCtCQUErQjtFQUMvQiwyQ0FBd0I7RUFDeEIscUNBQWtCLEVBQUE7O0FBbkMxQjs7O0lBdUNZLGdEQUFnRDtJQUNoRCxzREFBc0Q7SUFDdEQseUNBQXlDLEVBQUE7O0FBekNyRDtFQTZDUSwrQkFBK0I7RUFDL0IsMkNBQXdCO0VBQ3hCLHFDQUFrQixFQUFBOztBQS9DMUI7OztJQW1EWSw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFjcm9zLWNhbGNpL21hY3Jvcy1jYWxjaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgcCNpbmZvLXRleHQge1xuICAgICAgICBjb2xvcjogIzAwMDBGRjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICBkaXYubWFjcm9zLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgZGl2Lml0ZW0tbmF0aXZlIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tcmFuZ2UjY2FyYnMge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogI0YxOTczMyAhaW1wb3J0YW50O1xuICAgICAgICAtLWtub2ItYmFja2dyb3VuZDogI0YxOTczMyAhaW1wb3J0YW50O1xuICAgICAgICAucmFuZ2UtYmFyLWFjdGl2ZSxcbiAgICAgICAgLnJhbmdlLWtub2IsXG4gICAgICAgIC5yYW5nZS1kaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY2FyYnMpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY2FyYnMpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNhcmJzLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1yYW5nZSNwcm90ZWlucyB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjRTI1NzNGICFpbXBvcnRhbnQ7XG4gICAgICAgIC0ta25vYi1iYWNrZ3JvdW5kOiAjRTI1NzNGICFpbXBvcnRhbnQ7XG4gICAgICAgIC5yYW5nZS1iYXItYWN0aXZlLFxuICAgICAgICAucmFuZ2Uta25vYixcbiAgICAgICAgLnJhbmdlLWRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcm90ZWlucykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcm90ZWlucykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJvdGVpbnMtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1yYW5nZSNmYXRzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICNGREY3MzEgIWltcG9ydGFudDtcbiAgICAgICAgLS1rbm9iLWJhY2tncm91bmQ6ICNGREY3MzEgIWltcG9ydGFudDtcbiAgICAgICAgLnJhbmdlLWJhci1hY3RpdmUsXG4gICAgICAgIC5yYW5nZS1rbm9iLFxuICAgICAgICAucmFuZ2UtZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWZhdHMpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZmF0cykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZmF0cy1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/macros-calci/macros-calci.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/macros-calci/macros-calci.page.ts ***!
  \*********************************************************/
/*! exports provided: MacrosCalciPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacrosCalciPage", function() { return MacrosCalciPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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




var MacrosCalciPage = /** @class */ (function () {
    function MacrosCalciPage(commonService, router, toastr) {
        this.commonService = commonService;
        this.router = router;
        this.toastr = toastr;
        // percentage usage variables
        this.carbs = 0;
        this.proteins = 0;
        this.fats = 0;
        // gram usage variables
        this.in_carbs = 0;
        this.in_proteins = 0;
        this.in_fats = 0;
        this.keto = [5, 35, 60];
        this.lcd = [25, 35, 40];
        this.zone = [40, 30, 30];
        this.moderate = [50, 30, 20];
        this.high = [60, 25, 15];
    }
    MacrosCalciPage.prototype.ngOnInit = function () {
    };
    MacrosCalciPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MacroCalciPage');
    };
    MacrosCalciPage.prototype.showBmrCalci = function () {
        this.router.navigateByUrl('/bmrcalculator');
    };
    MacrosCalciPage.prototype.showMacros = function () {
        if (this.calories > 100) {
            // console.log("change function called", this.dietType);
            var selectedType = this[this.dietType];
            this.carbs = selectedType[0];
            this.proteins = selectedType[1];
            this.fats = selectedType[2];
            this.in_carbs = Math.round(((this.calories * this.carbs) / 4) / 100);
            this.in_proteins = Math.round(((this.calories * this.proteins) / 4) / 100);
            this.in_fats = Math.round(((this.calories * this.fats) / 9) / 100);
        }
        else {
            this.presentToast('Please enter a valid calorie intake.');
        }
    };
    MacrosCalciPage.prototype.presentToast = function (toastMsg) {
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
    MacrosCalciPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-macros-calci',
            template: __webpack_require__(/*! ./macros-calci.page.html */ "./src/app/pages/macros-calci/macros-calci.page.html"),
            styles: [__webpack_require__(/*! ./macros-calci.page.scss */ "./src/app/pages/macros-calci/macros-calci.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], MacrosCalciPage);
    return MacrosCalciPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-macros-calci-macros-calci-module.js.map