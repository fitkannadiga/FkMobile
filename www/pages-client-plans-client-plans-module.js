(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-plans-client-plans-module"],{

/***/ "./src/app/pages/client-plans/client-plans.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/client-plans/client-plans.module.ts ***!
  \***********************************************************/
/*! exports provided: ClientPlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPlansPageModule", function() { return ClientPlansPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _client_plans_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-plans.page */ "./src/app/pages/client-plans/client-plans.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _client_plans_page__WEBPACK_IMPORTED_MODULE_5__["ClientPlansPage"]
    }
];
var ClientPlansPageModule = /** @class */ (function () {
    function ClientPlansPageModule() {
    }
    ClientPlansPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_client_plans_page__WEBPACK_IMPORTED_MODULE_5__["ClientPlansPage"]]
        })
    ], ClientPlansPageModule);
    return ClientPlansPageModule;
}());



/***/ }),

/***/ "./src/app/pages/client-plans/client-plans.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/client-plans/client-plans.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>My Plans</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h2 text-center color=\"carbs\">Lifestyle Plans</h2>\n    <ion-card id=\"lifestyle-diet\" (click)=\"openPaymentOption();\">\n        <ion-card-header>\n            Diet Plan\n        </ion-card-header>\n        <ion-card-content>\n            Just &#8377; 1299/- <br/> Includes one time consultation & customized diet plan based on your lifestyle/Need.\n        </ion-card-content>\n    </ion-card>\n    <ion-card id=\"lifestyle-workout\">\n        <ion-card-header>\n            Workout Plan\n        </ion-card-header>\n        <ion-card-content>\n            Just &#8377; 799/- <br/> Customized workout plan which perfectly fits as per your busy schedule.\n        </ion-card-content>\n    </ion-card>\n    <ion-card id=\"lifestyle-daily-workout-video\">\n        <ion-card-header>\n            Daily Workout Video\n        </ion-card-header>\n        <ion-card-content>\n            Just &#8377; 2499/- <br/> Single customized video which demonstrates your workout to meet your goal.\n        </ion-card-content>\n    </ion-card>\n    <ion-card id=\"lifestyle-weekly-workout-video\">\n        <ion-card-header>\n            Weekly Workout Plan\n        </ion-card-header>\n        <ion-card-content>\n            Just &#8377; 2999/- <br/> Multiple video to demonstrates your weekly workout based on your split to meet your goal.\n        </ion-card-content>\n    </ion-card>\n    <h2 text-center color=\"carbs\">Transformation Plans (3 Months)</h2>\n    <ion-card id=\"transformation-fat-shredder\" (click)=\"openPaymentOption();\">\n        <ion-card-header>\n            Fat Shredder\n        </ion-card-header>\n        <ion-card-content>\n            Just &#8377; 8999/- <br/> Includes one time consultation, daily updates from coach & revision of diet plan as and when needed to loss fat faster.\n        </ion-card-content>\n    </ion-card>\n    <ion-card id=\"transformation-be-fit\">\n        <ion-card-header>\n            Be Fit\n        </ion-card-header>\n        <ion-card-content>\n            Just &#8377; 9990/- <br/> Completely customized diet and workout plan with multiple voice call consultation and daily updates.\n        </ion-card-content>\n    </ion-card>\n    <br/>\n    <p (click)=\"openPayment();\">In App Browser Payment</p>\n    <!-- <a href=\"https://www.instamojo.com/@fitkannadiga/lbd11a43293af4f85b604ba341b4d7ddb/\" rel=\"im-checkout\" data-behaviour=\"link\" data-style=\"flat\" data-text=\"Checkout\">Checkout</a> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/client-plans/client-plans.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/client-plans/client-plans.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lifestyle-diet {\n  --background: rgba(241, 231, 103, 1);\n  --background: -moz-linear-gradient(left, rgba(241, 231, 103, 1) 0%, rgba(246, 214, 91, 1) 29%, rgba(252, 188, 73, 1) 72%, rgba(254, 182, 69, 1) 82%);\n  --background: -webkit-gradient(left top, right top, color-stop(0%, rgba(241, 231, 103, 1)), color-stop(29%, rgba(246, 214, 91, 1)), color-stop(72%, rgba(252, 188, 73, 1)), color-stop(82%, rgba(254, 182, 69, 1)));\n  --background: -webkit-linear-gradient(left, rgba(241, 231, 103, 1) 0%, rgba(246, 214, 91, 1) 29%, rgba(252, 188, 73, 1) 72%, rgba(254, 182, 69, 1) 82%);\n  --background: -o-linear-gradient(left, rgba(241, 231, 103, 1) 0%, rgba(246, 214, 91, 1) 29%, rgba(252, 188, 73, 1) 72%, rgba(254, 182, 69, 1) 82%);\n  --background: -ms-linear-gradient(left, rgba(241, 231, 103, 1) 0%, rgba(246, 214, 91, 1) 29%, rgba(252, 188, 73, 1) 72%, rgba(254, 182, 69, 1) 82%);\n  --background: linear-gradient(to right, rgba(241, 231, 103, 1) 0%, rgba(246, 214, 91, 1) 29%, rgba(252, 188, 73, 1) 72%, rgba(254, 182, 69, 1) 82%); }\n  #lifestyle-diet ion-card-header {\n    color: #FFF;\n    font-weight: bold;\n    font-size: 1.5rem; }\n  #lifestyle-diet ion-card-content {\n    font-size: 0.8rem;\n    padding-top: 0px !important;\n    color: #000; }\n  #lifestyle-workout {\n  --background: rgba(64, 64, 64, 1);\n  --background: -moz-linear-gradient(left, rgba(64, 64, 64, 1) 10%, rgba(41, 41, 41, 1) 42%, rgba(28, 28, 28, 1) 61%, rgba(0, 0, 0, 1) 100%);\n  --background: -webkit-gradient(left top, right top, color-stop(10%, rgba(64, 64, 64, 1)), color-stop(42%, rgba(41, 41, 41, 1)), color-stop(61%, rgba(28, 28, 28, 1)), color-stop(100%, rgba(0, 0, 0, 1)));\n  --background: -webkit-linear-gradient(left, rgba(64, 64, 64, 1) 10%, rgba(41, 41, 41, 1) 42%, rgba(28, 28, 28, 1) 61%, rgba(0, 0, 0, 1) 100%);\n  --background: -o-linear-gradient(left, rgba(64, 64, 64, 1) 10%, rgba(41, 41, 41, 1) 42%, rgba(28, 28, 28, 1) 61%, rgba(0, 0, 0, 1) 100%);\n  --background: -ms-linear-gradient(left, rgba(64, 64, 64, 1) 10%, rgba(41, 41, 41, 1) 42%, rgba(28, 28, 28, 1) 61%, rgba(0, 0, 0, 1) 100%);\n  --background: linear-gradient(to right, rgba(64, 64, 64, 1) 10%, rgba(41, 41, 41, 1) 42%, rgba(28, 28, 28, 1) 61%, rgba(0, 0, 0, 1) 100%); }\n  #lifestyle-workout ion-card-header {\n    color: #FFF;\n    font-weight: bold;\n    font-size: 1.5rem; }\n  #lifestyle-workout ion-card-content {\n    font-size: 0.8rem;\n    color: #FFF;\n    padding-top: 0px !important; }\n  #lifestyle-daily-workout-video {\n  background: #d4e897;\n  background: -webkit-gradient(left top, right top, color-stop(0%, #d4e897), color-stop(100%, #69ba1e));\n  background: linear-gradient(to right, #d4e897 0%, #69ba1e 100%); }\n  #lifestyle-daily-workout-video ion-card-header {\n    color: #000;\n    font-weight: bold;\n    font-size: 1.5rem; }\n  #lifestyle-daily-workout-video ion-card-content {\n    font-size: 0.8rem;\n    color: #000;\n    padding-top: 0px !important; }\n  #lifestyle-weekly-workout-video {\n  background: #a097ed;\n  background: -webkit-gradient(left top, right top, color-stop(0%, #a097ed), color-stop(100%, #1b14cf));\n  background: linear-gradient(to right, #a097ed 0%, #1b14cf 100%); }\n  #lifestyle-weekly-workout-video ion-card-header {\n    color: #000;\n    font-weight: bold;\n    font-size: 1.5rem; }\n  #lifestyle-weekly-workout-video ion-card-content {\n    font-size: 0.8rem;\n    color: #000;\n    padding-top: 0px !important; }\n  #transformation-fat-shredder {\n  --background: rgba(32, 124, 229, 1);\n  --background: -moz-linear-gradient(left, rgba(32, 124, 229, 1) 0%, rgba(114, 176, 243, 1) 54%, rgba(184, 221, 255, 1) 100%);\n  --background: -webkit-gradient(left top, right top, color-stop(0%, rgba(32, 124, 229, 1)), color-stop(54%, rgba(114, 176, 243, 1)), color-stop(100%, rgba(184, 221, 255, 1)));\n  --background: -webkit-linear-gradient(left, rgba(32, 124, 229, 1) 0%, rgba(114, 176, 243, 1) 54%, rgba(184, 221, 255, 1) 100%);\n  --background: -o-linear-gradient(left, rgba(32, 124, 229, 1) 0%, rgba(114, 176, 243, 1) 54%, rgba(184, 221, 255, 1) 100%);\n  --background: -ms-linear-gradient(left, rgba(32, 124, 229, 1) 0%, rgba(114, 176, 243, 1) 54%, rgba(184, 221, 255, 1) 100%);\n  --background: linear-gradient(to right, rgba(32, 124, 229, 1) 0%, rgba(114, 176, 243, 1) 54%, rgba(184, 221, 255, 1) 100%); }\n  #transformation-fat-shredder ion-card-header {\n    color: #000;\n    font-weight: bold;\n    font-size: 1.5rem; }\n  #transformation-fat-shredder ion-card-content {\n    font-size: 0.8rem;\n    color: #000;\n    padding-top: 0px !important; }\n  #transformation-be-fit {\n  --background: rgba(250, 75, 115, 1);\n  --background: -moz-linear-gradient(left, rgba(250, 75, 115, 1) 0%, rgba(253, 25, 81, 1) 50%, rgba(255, 0, 64, 1) 75%, rgba(255, 0, 64, 1) 82%);\n  --background: -webkit-gradient(left top, right top, color-stop(0%, rgba(250, 75, 115, 1)), color-stop(50%, rgba(253, 25, 81, 1)), color-stop(75%, rgba(255, 0, 64, 1)), color-stop(82%, rgba(255, 0, 64, 1)));\n  --background: -webkit-linear-gradient(left, rgba(250, 75, 115, 1) 0%, rgba(253, 25, 81, 1) 50%, rgba(255, 0, 64, 1) 75%, rgba(255, 0, 64, 1) 82%);\n  --background: -o-linear-gradient(left, rgba(250, 75, 115, 1) 0%, rgba(253, 25, 81, 1) 50%, rgba(255, 0, 64, 1) 75%, rgba(255, 0, 64, 1) 82%);\n  --background: -ms-linear-gradient(left, rgba(250, 75, 115, 1) 0%, rgba(253, 25, 81, 1) 50%, rgba(255, 0, 64, 1) 75%, rgba(255, 0, 64, 1) 82%);\n  --background: linear-gradient(to right, rgba(250, 75, 115, 1) 0%, rgba(253, 25, 81, 1) 50%, rgba(255, 0, 64, 1) 75%, rgba(255, 0, 64, 1) 82%); }\n  #transformation-be-fit ion-card-header {\n    color: #FFF;\n    font-weight: bold;\n    font-size: 1.5rem; }\n  #transformation-be-fit ion-card-content {\n    font-size: 0.8rem;\n    color: #FFF;\n    padding-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9jbGllbnQtcGxhbnMvY2xpZW50LXBsYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFhO0VBQ2Isb0pBQWE7RUFDYixtTkFBYTtFQUNiLHVKQUFhO0VBQ2Isa0pBQWE7RUFDYixtSkFBYTtFQUNiLG1KQUFhLEVBQUE7RUFQakI7SUFVUSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBWnpCO0lBZVEsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7RUFJbkI7RUFDSSxpQ0FBYTtFQUNiLDBJQUFhO0VBQ2IseU1BQWE7RUFDYiw2SUFBYTtFQUNiLHdJQUFhO0VBQ2IseUlBQWE7RUFDYix5SUFBYSxFQUFBO0VBUGpCO0lBVVEsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQVp6QjtJQWVRLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMkJBQTJCLEVBQUE7RUFJbkM7RUFDSSxtQkFBa0M7RUFFbEMscUdBQWtJO0VBSWxJLCtEQUE0RixFQUFBO0VBUGhHO0lBVVEsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQVp6QjtJQWVRLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMkJBQTJCLEVBQUE7RUFJbkM7RUFDSSxtQkFBa0M7RUFFbEMscUdBQWlJO0VBSWpJLCtEQUEyRixFQUFBO0VBUC9GO0lBU1EsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQVh6QjtJQWNRLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMkJBQTJCLEVBQUE7RUFJbkM7RUFDSSxtQ0FBYTtFQUNiLDJIQUFhO0VBQ2IsNktBQWE7RUFDYiw4SEFBYTtFQUNiLHlIQUFhO0VBQ2IsMEhBQWE7RUFDYiwwSEFBYSxFQUFBO0VBUGpCO0lBU1EsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQVh6QjtJQWNRLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMkJBQTJCLEVBQUE7RUFJbkM7RUFDSSxtQ0FBYTtFQUNiLDhJQUFhO0VBQ2IsNk1BQWE7RUFDYixpSkFBYTtFQUNiLDRJQUFhO0VBQ2IsNklBQWE7RUFDYiw2SUFBYSxFQUFBO0VBUGpCO0lBU1EsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQVh6QjtJQWNRLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGllbnQtcGxhbnMvY2xpZW50LXBsYW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaWZlc3R5bGUtZGlldCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjMxLCAxMDMsIDEpO1xuICAgIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNDEsIDIzMSwgMTAzLCAxKSAwJSwgcmdiYSgyNDYsIDIxNCwgOTEsIDEpIDI5JSwgcmdiYSgyNTIsIDE4OCwgNzMsIDEpIDcyJSwgcmdiYSgyNTQsIDE4MiwgNjksIDEpIDgyJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjQxLCAyMzEsIDEwMywgMSkpLCBjb2xvci1zdG9wKDI5JSwgcmdiYSgyNDYsIDIxNCwgOTEsIDEpKSwgY29sb3Itc3RvcCg3MiUsIHJnYmEoMjUyLCAxODgsIDczLCAxKSksIGNvbG9yLXN0b3AoODIlLCByZ2JhKDI1NCwgMTgyLCA2OSwgMSkpKTtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjQxLCAyMzEsIDEwMywgMSkgMCUsIHJnYmEoMjQ2LCAyMTQsIDkxLCAxKSAyOSUsIHJnYmEoMjUyLCAxODgsIDczLCAxKSA3MiUsIHJnYmEoMjU0LCAxODIsIDY5LCAxKSA4MiUpO1xuICAgIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjQxLCAyMzEsIDEwMywgMSkgMCUsIHJnYmEoMjQ2LCAyMTQsIDkxLCAxKSAyOSUsIHJnYmEoMjUyLCAxODgsIDczLCAxKSA3MiUsIHJnYmEoMjU0LCAxODIsIDY5LCAxKSA4MiUpO1xuICAgIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI0MSwgMjMxLCAxMDMsIDEpIDAlLCByZ2JhKDI0NiwgMjE0LCA5MSwgMSkgMjklLCByZ2JhKDI1MiwgMTg4LCA3MywgMSkgNzIlLCByZ2JhKDI1NCwgMTgyLCA2OSwgMSkgODIlKTtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNDEsIDIzMSwgMTAzLCAxKSAwJSwgcmdiYSgyNDYsIDIxNCwgOTEsIDEpIDI5JSwgcmdiYSgyNTIsIDE4OCwgNzMsIDEpIDcyJSwgcmdiYSgyNTQsIDE4MiwgNjksIDEpIDgyJSk7XG4gICAgLy8gZmlsdGVyOiBwcm9naWQ6IERYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZjFlNzY3JywgZW5kQ29sb3JzdHI9JyNmZWI2NDUnLCBHcmFkaWVudFR5cGU9MSk7XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuI2xpZmVzdHlsZS13b3Jrb3V0IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoNjQsIDY0LCA2NCwgMSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDY0LCA2NCwgNjQsIDEpIDEwJSwgcmdiYSg0MSwgNDEsIDQxLCAxKSA0MiUsIHJnYmEoMjgsIDI4LCAyOCwgMSkgNjElLCByZ2JhKDAsIDAsIDAsIDEpIDEwMCUpO1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDEwJSwgcmdiYSg2NCwgNjQsIDY0LCAxKSksIGNvbG9yLXN0b3AoNDIlLCByZ2JhKDQxLCA0MSwgNDEsIDEpKSwgY29sb3Itc3RvcCg2MSUsIHJnYmEoMjgsIDI4LCAyOCwgMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMCwgMCwgMCwgMSkpKTtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNjQsIDY0LCA2NCwgMSkgMTAlLCByZ2JhKDQxLCA0MSwgNDEsIDEpIDQyJSwgcmdiYSgyOCwgMjgsIDI4LCAxKSA2MSUsIHJnYmEoMCwgMCwgMCwgMSkgMTAwJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg2NCwgNjQsIDY0LCAxKSAxMCUsIHJnYmEoNDEsIDQxLCA0MSwgMSkgNDIlLCByZ2JhKDI4LCAyOCwgMjgsIDEpIDYxJSwgcmdiYSgwLCAwLCAwLCAxKSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg2NCwgNjQsIDY0LCAxKSAxMCUsIHJnYmEoNDEsIDQxLCA0MSwgMSkgNDIlLCByZ2JhKDI4LCAyOCwgMjgsIDEpIDYxJSwgcmdiYSgwLCAwLCAwLCAxKSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg2NCwgNjQsIDY0LCAxKSAxMCUsIHJnYmEoNDEsIDQxLCA0MSwgMSkgNDIlLCByZ2JhKDI4LCAyOCwgMjgsIDEpIDYxJSwgcmdiYSgwLCAwLCAwLCAxKSAxMDAlKTtcbiAgICAvLyBmaWx0ZXI6IHByb2dpZDogRFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM0MDQwNDAnLCBlbmRDb2xvcnN0cj0nIzAwMDAwMCcsIEdyYWRpZW50VHlwZT0xKTtcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4jbGlmZXN0eWxlLWRhaWx5LXdvcmtvdXQtdmlkZW8ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAyMzIsIDE1MSwgMSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyMTIsIDIzMiwgMTUxLCAxKSAwJSwgcmdiYSgxMDUsIDE4NiwgMzAsIDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyMTIsIDIzMiwgMTUxLCAxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgxMDUsIDE4NiwgMzAsIDEpKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyMTIsIDIzMiwgMTUxLCAxKSAwJSwgcmdiYSgxMDUsIDE4NiwgMzAsIDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDIxMiwgMjMyLCAxNTEsIDEpIDAlLCByZ2JhKDEwNSwgMTg2LCAzMCwgMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDIxMiwgMjMyLCAxNTEsIDEpIDAlLCByZ2JhKDEwNSwgMTg2LCAzMCwgMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDIxMiwgMjMyLCAxNTEsIDEpIDAlLCByZ2JhKDEwNSwgMTg2LCAzMCwgMSkgMTAwJSk7XG4gICAgLy8gZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNkNGU4OTcnLCBlbmRDb2xvcnN0cj0nIzY5YmExZScsIEdyYWRpZW50VHlwZT0xICk7XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuI2xpZmVzdHlsZS13ZWVrbHktd29ya291dC12aWRlbyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNjAsIDE1MSwgMjM3LCAxKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE2MCwgMTUxLCAyMzcsIDEpIDAlLCByZ2JhKDI3LCAyMCwgMjA3LCAxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMTYwLCAxNTEsIDIzNywgMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjcsIDIwLCAyMDcsIDEpKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxNjAsIDE1MSwgMjM3LCAxKSAwJSwgcmdiYSgyNywgMjAsIDIwNywgMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMTYwLCAxNTEsIDIzNywgMSkgMCUsIHJnYmEoMjcsIDIwLCAyMDcsIDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxNjAsIDE1MSwgMjM3LCAxKSAwJSwgcmdiYSgyNywgMjAsIDIwNywgMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE2MCwgMTUxLCAyMzcsIDEpIDAlLCByZ2JhKDI3LCAyMCwgMjA3LCAxKSAxMDAlKTtcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4jdHJhbnNmb3JtYXRpb24tZmF0LXNocmVkZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMzIsIDEyNCwgMjI5LCAxKTtcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMzIsIDEyNCwgMjI5LCAxKSAwJSwgcmdiYSgxMTQsIDE3NiwgMjQzLCAxKSA1NCUsIHJnYmEoMTg0LCAyMjEsIDI1NSwgMSkgMTAwJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMzIsIDEyNCwgMjI5LCAxKSksIGNvbG9yLXN0b3AoNTQlLCByZ2JhKDExNCwgMTc2LCAyNDMsIDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDE4NCwgMjIxLCAyNTUsIDEpKSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDMyLCAxMjQsIDIyOSwgMSkgMCUsIHJnYmEoMTE0LCAxNzYsIDI0MywgMSkgNTQlLCByZ2JhKDE4NCwgMjIxLCAyNTUsIDEpIDEwMCUpO1xuICAgIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMzIsIDEyNCwgMjI5LCAxKSAwJSwgcmdiYSgxMTQsIDE3NiwgMjQzLCAxKSA1NCUsIHJnYmEoMTg0LCAyMjEsIDI1NSwgMSkgMTAwJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMzIsIDEyNCwgMjI5LCAxKSAwJSwgcmdiYSgxMTQsIDE3NiwgMjQzLCAxKSA1NCUsIHJnYmEoMTg0LCAyMjEsIDI1NSwgMSkgMTAwJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzIsIDEyNCwgMjI5LCAxKSAwJSwgcmdiYSgxMTQsIDE3NiwgMjQzLCAxKSA1NCUsIHJnYmEoMTg0LCAyMjEsIDI1NSwgMSkgMTAwJSk7XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuI3RyYW5zZm9ybWF0aW9uLWJlLWZpdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1MCwgNzUsIDExNSwgMSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1MCwgNzUsIDExNSwgMSkgMCUsIHJnYmEoMjUzLCAyNSwgODEsIDEpIDUwJSwgcmdiYSgyNTUsIDAsIDY0LCAxKSA3NSUsIHJnYmEoMjU1LCAwLCA2NCwgMSkgODIlKTtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTAsIDc1LCAxMTUsIDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMjUzLCAyNSwgODEsIDEpKSwgY29sb3Itc3RvcCg3NSUsIHJnYmEoMjU1LCAwLCA2NCwgMSkpLCBjb2xvci1zdG9wKDgyJSwgcmdiYSgyNTUsIDAsIDY0LCAxKSkpO1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTAsIDc1LCAxMTUsIDEpIDAlLCByZ2JhKDI1MywgMjUsIDgxLCAxKSA1MCUsIHJnYmEoMjU1LCAwLCA2NCwgMSkgNzUlLCByZ2JhKDI1NSwgMCwgNjQsIDEpIDgyJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTAsIDc1LCAxMTUsIDEpIDAlLCByZ2JhKDI1MywgMjUsIDgxLCAxKSA1MCUsIHJnYmEoMjU1LCAwLCA2NCwgMSkgNzUlLCByZ2JhKDI1NSwgMCwgNjQsIDEpIDgyJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjUwLCA3NSwgMTE1LCAxKSAwJSwgcmdiYSgyNTMsIDI1LCA4MSwgMSkgNTAlLCByZ2JhKDI1NSwgMCwgNjQsIDEpIDc1JSwgcmdiYSgyNTUsIDAsIDY0LCAxKSA4MiUpO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1MCwgNzUsIDExNSwgMSkgMCUsIHJnYmEoMjUzLCAyNSwgODEsIDEpIDUwJSwgcmdiYSgyNTUsIDAsIDY0LCAxKSA3NSUsIHJnYmEoMjU1LCAwLCA2NCwgMSkgODIlKTtcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/client-plans/client-plans.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/client-plans/client-plans.page.ts ***!
  \*********************************************************/
/*! exports provided: ClientPlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPlansPage", function() { return ClientPlansPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
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




var ClientPlansPage = /** @class */ (function () {
    function ClientPlansPage(loadingController, toastr, afDataBase, IAB) {
        this.loadingController = loadingController;
        this.toastr = toastr;
        this.afDataBase = afDataBase;
        this.IAB = IAB;
    }
    ClientPlansPage.prototype.ngOnInit = function () {
    };
    ClientPlansPage.prototype.openPaymentOption = function () {
        this.presentToast('At present we are not accepting online payments. Please contach us at fitkannadiga@gmail.com');
        // <a href="https://www.instamojo.com/@fitkannadiga/lbd11a43293af4f85b604ba341b4d7ddb/" rel="im-checkout" data-behaviour="remote" data-style="light" data-text="Checkout With Instamojo"></a>
        // <script src="https://js.instamojo.com/v1/button.js"></script>
        Instamojo.open("https://www.instamojo.com/@fitkannadiga/lbd11a43293af4f85b604ba341b4d7ddb/");
        Instamojo.configure({
            handlers: {
                onOpen: function () {
                    alert("instamoko opened");
                },
                onClose: function () {
                    alert("instamoko closed");
                    document.getElementsByTagName('body')[0].style.height = '100%';
                },
                onSuccess: function (response) {
                    alert("instamoko payment success");
                },
                onFailure: function (response) {
                    alert("instamoko payment failure");
                }
            }
        });
    };
    ClientPlansPage.prototype.openPayment = function () {
        var browser = cordova.InAppBrowser.open('https://www.instamojo.com/@fitkannadiga/lbd11a43293af4f85b604ba341b4d7ddb/', '_blank', 'location=yes');
        browser.addEventListener("loadstop", function (event) {
            console.log("browser event on load stop>>", JSON.stringify(event));
            // if ((event.url).indexOf('?token=') !== -1) {
            //   let token = event.url.slice(event.url.indexOf('?token=') + '?token='.length);
            //   // here is your token, now you can close the InAppBrowser
            //   browser.close();
            // }
        });
        browser.addEventListener("exit", function (event) {
            console.log("browser event on EXIT>>", JSON.stringify(event));
            // if ((event.url).indexOf('?token=') !== -1) {
            //   let token = event.url.slice(event.url.indexOf('?token=') + '?token='.length);
            //   // here is your token, now you can close the InAppBrowser
            //   browser.close();
            // }
        });
    };
    ClientPlansPage.prototype.presentLoading = function (msg) {
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
                        _a.planLoader = _b.sent();
                        return [4 /*yield*/, this.planLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientPlansPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.planLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientPlansPage.prototype.presentToast = function (toastMsg) {
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
    ClientPlansPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-plans',
            template: __webpack_require__(/*! ./client-plans.page.html */ "./src/app/pages/client-plans/client-plans.page.html"),
            styles: [__webpack_require__(/*! ./client-plans.page.scss */ "./src/app/pages/client-plans/client-plans.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
    ], ClientPlansPage);
    return ClientPlansPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-client-plans-client-plans-module.js.map