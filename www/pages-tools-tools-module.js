(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tools-tools-module"],{

/***/ "./src/app/pages/tools/tools.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.module.ts ***!
  \*********************************************/
/*! exports provided: ToolsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsPageModule", function() { return ToolsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tools_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools.page */ "./src/app/pages/tools/tools.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tools_page__WEBPACK_IMPORTED_MODULE_5__["ToolsPage"]
    }
];
var ToolsPageModule = /** @class */ (function () {
    function ToolsPageModule() {
    }
    ToolsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tools_page__WEBPACK_IMPORTED_MODULE_5__["ToolsPage"]]
        })
    ], ToolsPageModule);
    return ToolsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tools/tools.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Fitness Tools</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-row>\n        <ion-col (click)=\"openPage('/bmrcalculator');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/ketogenic-diet-color/64/calories-burn-metabolism-energy-food-64.png\" />\n            <p>BMR Calculator</p>\n        </ion-col>\n        <ion-col (click)=\"openPage('/interval-timer');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Stopwatch-64.png\" />\n            <p>Fitness Timer</p>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col (click)=\"openPage('/macros-calci');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/business-icons-4/128/chart-6-64.png\" />\n            <p>Macros Finder</p>\n        </ion-col>\n        <!-- <ion-col (click)=\"openPage('WeightCalciPage');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Weigher-64.png\" />\n            <p>Weight Calculator</p>\n        </ion-col> -->\n    </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tools/tools.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  text-align: center;\n  margin-top: 60px !important; }\n  ion-content ion-row ion-col {\n    margin: 20px 5px;\n    border: 1px solid #DCDCDC;\n    border-radius: 15px;\n    padding: 10px;\n    font-weight: bold;\n    font-size: 1rem;\n    box-shadow: 5px 5px 3px 0px #ededed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy90b29scy90b29scy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7RUFGL0I7SUFLWSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFHZixtQ0FBa0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rvb2xzL3Rvb2xzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNjBweCAhaW1wb3J0YW50O1xuICAgIGlvbi1yb3cge1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRENEQ0RDO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCByZ2JhKDIzNywgMjM3LCAyMzcsIDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tools/tools.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tools/tools.page.ts ***!
  \*******************************************/
/*! exports provided: ToolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsPage", function() { return ToolsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolsPage = /** @class */ (function () {
    function ToolsPage(router) {
        this.router = router;
    }
    ToolsPage.prototype.ngOnInit = function () {
    };
    ToolsPage.prototype.openPage = function (page) {
        this.router.navigateByUrl(page);
    };
    ToolsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.page.html */ "./src/app/pages/tools/tools.page.html"),
            styles: [__webpack_require__(/*! ./tools.page.scss */ "./src/app/pages/tools/tools.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ToolsPage);
    return ToolsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tools-tools-module.js.map