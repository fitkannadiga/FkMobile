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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Fitness Tools</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row *ngFor=\"let tools of TollList\" (click)=\"openPage(tools.action);\">\n        <ion-col size=\"4\" class=\"img-wrapper\">\n            <img [src]=\"tools.imgPath\"/>\n        </ion-col>\n        <ion-col size=\"8\" class=\"description-wrapper\">\n            <h3>{{tools.title}}</h3>\n            <p>{{tools.description}}</p>\n        </ion-col>\n    </ion-row>\n    <!-- <div class=\"tool-wrapper\" (click)=\"openPage('/bmrcalculator');\">\n        <div class=\"img-wrapper tool-sections\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/ketogenic-diet-color/64/calories-burn-metabolism-energy-food-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"bmr-calci\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">BMR Calculator</p>\n            <p class=\"description\">Know your Metabolic Rate based on your activity level</p>\n        </div>\n    </div>\n    <div class=\"tool-wrapper\" (click)=\"openPage('/interval-timer');\">\n        <div class=\"img-wrapper tool-sections\">\n                <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Stopwatch-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"fit-timer\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">Fitness Timer</p>\n            <p class=\"description\">Timer for all your Interval trainer sessions</p>\n        </div>\n    </div>\n    <div class=\"tool-wrapper\" (click)=\"openPage('/macros-calci');\">\n        <div class=\"img-wrapper tool-sections\">\n                <img src=\"https://cdn3.iconfinder.com/data/icons/business-icons-4/128/chart-6-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"macro-calci\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">Macros Finder</p>\n            <p class=\"description\">Breaks down your daily calories to Carbs, Protein & Fats for particular diet</p>\n        </div>\n    </div> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tools/tools.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-row {\n  border-top: 1px solid #cac4c4;\n  padding: 25px 0px; }\n  ion-content ion-row ion-col.img-wrapper {\n    display: flex;\n    align-items: center; }\n  ion-content ion-row ion-col.description-wrapper p {\n    font-size: 0.8rem;\n    padding-left: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kZXYvMzRkNzYyYjMtNWFhYS00MDEwLThlNTctNmE5YzYwZmE2MGVkL2lvbmljL2ZyZWUvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy90b29scy90b29scy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFZUSw2QkFBNkI7RUFDN0IsaUJBQWlCLEVBQUE7RUFiekI7SUFHWSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUFKL0I7SUFRZ0IsaUJBQWlCO0lBQ2pCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdG9vbHMvdG9vbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBpb24tY29sLmltZy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1jb2wuZGVzY3JpcHRpb24td3JhcHBlciB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2FjNGM0O1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDBweDtcbiAgICB9XG59XG5cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgICBkaXYudG9vbC13cmFwcGVyIHtcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbi8vICAgICAgICAgbWFyZ2luOiA1MHB4IDBweDtcbi8vICAgICAgICAgZGl2LnRvb2wtc2VjdGlvbnMge1xuLy8gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGRpdi5pbWctd3JhcHBlciB7XG4vLyAgICAgICAgICAgICAvLyB3aWR0aDogMzAlO1xuLy8gICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICAgICAgLy8gei1pbmRleDogNTtcbi8vICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgICAgICB6LWluZGV4OiA1O1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4vLyAgICAgICAgICAgICB0b3A6IC00MHB4O1xuLy8gICAgICAgICAgICAgaW1nIHtcbi8vICAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuLy8gICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNGRkY7XG4vLyAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbi8vICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAxNXB4O1xuLy8gICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDU3cHg7XG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZGl2LmhlYWRsaW5nLXdyYXBwZXIge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTI1cHg7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgICAgICAgICAgei1pbmRleDogMjtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIHAudGl0bGUge1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcC5kZXNjcmlwdGlvbiB7XG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZGl2I2Jtci1jYWxjaXtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLDIzMSwxMDMsMSk7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI0MSwyMzEsMTAzLDEpIDAlLCByZ2JhKDI1Miw3MCw5NCwxKSAxMDAlKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNDEsMjMxLDEwMywxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTIsNzAsOTQsMSkpKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjQxLDIzMSwxMDMsMSkgMCUsIHJnYmEoMjUyLDcwLDk0LDEpIDEwMCUpO1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjQxLDIzMSwxMDMsMSkgMCUsIHJnYmEoMjUyLDcwLDk0LDEpIDEwMCUpO1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI0MSwyMzEsMTAzLDEpIDAlLCByZ2JhKDI1Miw3MCw5NCwxKSAxMDAlKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNDEsMjMxLDEwMywxKSAwJSwgcmdiYSgyNTIsNzAsOTQsMSkgMTAwJSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZGl2I2ZpdC10aW1lciB7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDg0LDE3NCwxNDcsMSk7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDg0LDE3NCwxNDcsMSkgMCUsIHJnYmEoNTgsMTM1LDE1NSwxKSAxMDAlKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSg4NCwxNzQsMTQ3LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDU4LDEzNSwxNTUsMSkpKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoODQsMTc0LDE0NywxKSAwJSwgcmdiYSg1OCwxMzUsMTU1LDEpIDEwMCUpO1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoODQsMTc0LDE0NywxKSAwJSwgcmdiYSg1OCwxMzUsMTU1LDEpIDEwMCUpO1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDg0LDE3NCwxNDcsMSkgMCUsIHJnYmEoNTgsMTM1LDE1NSwxKSAxMDAlKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg4NCwxNzQsMTQ3LDEpIDAlLCByZ2JhKDU4LDEzNSwxNTUsMSkgMTAwJSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZGl2I21hY3JvLWNhbGNpIHtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjQsMTU4LDIwNSwxKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNjQsMTU4LDIwNSwxKSAwJSwgcmdiYSg2Nyw4OSwyMDAsMSkgMTAwJSk7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoNjQsMTU4LDIwNSwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg2Nyw4OSwyMDAsMSkpKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNjQsMTU4LDIwNSwxKSAwJSwgcmdiYSg2Nyw4OSwyMDAsMSkgMTAwJSk7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg2NCwxNTgsMjA1LDEpIDAlLCByZ2JhKDY3LDg5LDIwMCwxKSAxMDAlKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg2NCwxNTgsMjA1LDEpIDAlLCByZ2JhKDY3LDg5LDIwMCwxKSAxMDAlKTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg2NCwxNTgsMjA1LDEpIDAlLCByZ2JhKDY3LDg5LDIwMCwxKSAxMDAlKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH0iXX0= */"

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
        this.TollList = [];
        this.TollList = [
            {
                "title": "BMR Calculator",
                "imgPath": "./assets/icon/bmr-icon.png",
                "description": "Your BMR(Basal metabolic rate) is the number of calories required to keep your body functioning at rest, also known as your metabolism.",
                "action": "bmrcalculator"
            },
            {
                "title": "Fitness Timer",
                "imgPath": "./assets/icon/timer-icon.png",
                "description": "A typical Interval training timer will run through a series of exercises for a given number of Sets, Reps & Rest Period.",
                "action": "interval-timer"
            },
            {
                "title": "Macros Finder",
                "imgPath": "./assets/icon/macros-icon.png",
                "description": "Flexible Macro Calculator helps you to Calculate your optimal macronutrient ratios based on your dieting strategy.",
                "action": "macros-calci"
            }
        ];
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