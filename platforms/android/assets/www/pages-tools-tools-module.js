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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Fitness Tools</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <ion-row>\n        <ion-col (click)=\"openPage('/bmrcalculator');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/ketogenic-diet-color/64/calories-burn-metabolism-energy-food-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n            <p>BMR Calculator</p>\n        </ion-col>\n        <ion-col (click)=\"openPage('/interval-timer');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Stopwatch-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n            <p>Fitness Timer</p>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col (click)=\"openPage('/macros-calci');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/business-icons-4/128/chart-6-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n            <p>Macros Finder</p>\n        </ion-col>\n        <ion-col (click)=\"openPage('WeightCalciPage');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Weigher-64.png\" />\n            <p>Weight Calculator</p>\n        </ion-col>\n    </ion-row> -->\n    <div class=\"tool-wrapper\" (click)=\"openPage('/bmrcalculator');\">\n        <div class=\"img-wrapper tool-sections\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/ketogenic-diet-color/64/calories-burn-metabolism-energy-food-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"bmr-calci\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">BMR Calculator</p>\n            <p class=\"description\">Know your Metabolic Rate based on your activity level</p>\n        </div>\n    </div>\n    <div class=\"tool-wrapper\" (click)=\"openPage('/interval-timer');\">\n        <div class=\"img-wrapper tool-sections\">\n                <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Stopwatch-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"fit-timer\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">Fitness Timer</p>\n            <p class=\"description\">Timer for all your Interval trainer sessions</p>\n        </div>\n    </div>\n    <div class=\"tool-wrapper\" (click)=\"openPage('/macros-calci');\">\n        <div class=\"img-wrapper tool-sections\">\n                <img src=\"https://cdn3.iconfinder.com/data/icons/business-icons-4/128/chart-6-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"macro-calci\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">Macros Finder</p>\n            <p class=\"description\">Breaks down your daily calories to Carbs, Protein & Fats for particular diet</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tools/tools.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content div.tool-wrapper {\n  position: relative;\n  padding: 5px 10px;\n  margin: 50px 0px; }\n  ion-content div.tool-wrapper div.tool-sections {\n    display: inline-block; }\n  ion-content div.tool-wrapper div.img-wrapper {\n    width: 30%;\n    text-align: center;\n    z-index: 5;\n    position: absolute;\n    left: -10px;\n    top: -40px; }\n  ion-content div.tool-wrapper div.img-wrapper img {\n      width: 80px; }\n  ion-content div.tool-wrapper div.headling-wrapper {\n    width: 100%;\n    padding: 0px 10px;\n    text-align: center;\n    border: 1px solid #dcdcdc;\n    border-radius: 10px;\n    z-index: 2;\n    position: relative; }\n  ion-content div.tool-wrapper div.headling-wrapper p.title {\n      font-size: 1.2rem;\n      font-weight: bold; }\n  ion-content div.tool-wrapper div.headling-wrapper p.description {\n      color: #FFF; }\n  ion-content div.tool-wrapper div#bmr-calci {\n    background: #f1e767;\n    background: -webkit-gradient(left top, right top, color-stop(0%, #f1e767), color-stop(100%, #fc465e));\n    background: linear-gradient(to right, #f1e767 0%, #fc465e 100%); }\n  ion-content div.tool-wrapper div#fit-timer {\n    background: #54ae93;\n    background: -webkit-gradient(left top, right top, color-stop(0%, #54ae93), color-stop(100%, #3a879b));\n    background: linear-gradient(to right, #54ae93 0%, #3a879b 100%); }\n  ion-content div.tool-wrapper div#macro-calci {\n    background: #409ecd;\n    background: -webkit-gradient(left top, right top, color-stop(0%, #409ecd), color-stop(100%, #4359c8));\n    background: linear-gradient(to right, #409ecd 0%, #4359c8 100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy90b29scy90b29scy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBRVEsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUp4QjtJQU1ZLHFCQUFxQixFQUFBO0VBTmpDO0lBYVksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFsQnRCO01BeUJnQixXQUFXLEVBQUE7RUF6QjNCO0lBNkJZLFdBQVc7SUFFWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VBcEM5QjtNQXNDZ0IsaUJBQWlCO01BQ2pCLGlCQUFpQixFQUFBO0VBdkNqQztNQTBDZ0IsV0FBVyxFQUFBO0VBMUMzQjtJQThDWSxtQkFBK0I7SUFFL0IscUdBQTJIO0lBSTNILCtEQUFxRixFQUFBO0VBcERqRztJQXVEWSxtQkFBOEI7SUFFOUIscUdBQTJIO0lBSTNILCtEQUFxRixFQUFBO0VBN0RqRztJQWdFWSxtQkFBOEI7SUFFOUIscUdBQTBIO0lBSTFILCtEQUFvRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdG9vbHMvdG9vbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQge1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBtYXJnaW4tdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgaW9uLXJvdyB7XG4vLyAgICAgICAgIGlvbi1jb2wge1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDVweDtcbi8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0RDREM7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuLy8gICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuLy8gICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggcmdiYSgyMzcsIDIzNywgMjM3LCAxKTtcbi8vICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XG4vLyAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggcmdiYSgyMzcsIDIzNywgMjM3LCAxKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuaW9uLWNvbnRlbnQge1xuICAgIGRpdi50b29sLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xuICAgICAgICBkaXYudG9vbC1zZWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmltZy13cmFwcGVyIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAvLyB6LWluZGV4OiA1O1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgICAgIHRvcDogLTQwcHg7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIC8vIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTdweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXYuaGVhZGxpbmctd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXYjYm1yLWNhbGNpe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDEsMjMxLDEwMywxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjQxLDIzMSwxMDMsMSkgMCUsIHJnYmEoMjUyLDcwLDk0LDEpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI0MSwyMzEsMTAzLDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI1Miw3MCw5NCwxKSkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNDEsMjMxLDEwMywxKSAwJSwgcmdiYSgyNTIsNzAsOTQsMSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNDEsMjMxLDEwMywxKSAwJSwgcmdiYSgyNTIsNzAsOTQsMSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjQxLDIzMSwxMDMsMSkgMCUsIHJnYmEoMjUyLDcwLDk0LDEpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI0MSwyMzEsMTAzLDEpIDAlLCByZ2JhKDI1Miw3MCw5NCwxKSAxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICBkaXYjZml0LXRpbWVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoODQsMTc0LDE0NywxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoODQsMTc0LDE0NywxKSAwJSwgcmdiYSg1OCwxMzUsMTU1LDEpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDg0LDE3NCwxNDcsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoNTgsMTM1LDE1NSwxKSkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg4NCwxNzQsMTQ3LDEpIDAlLCByZ2JhKDU4LDEzNSwxNTUsMSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg4NCwxNzQsMTQ3LDEpIDAlLCByZ2JhKDU4LDEzNSwxNTUsMSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoODQsMTc0LDE0NywxKSAwJSwgcmdiYSg1OCwxMzUsMTU1LDEpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDg0LDE3NCwxNDcsMSkgMCUsIHJnYmEoNTgsMTM1LDE1NSwxKSAxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICBkaXYjbWFjcm8tY2FsY2kge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2NCwxNTgsMjA1LDEpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg2NCwxNTgsMjA1LDEpIDAlLCByZ2JhKDY3LDg5LDIwMCwxKSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSg2NCwxNTgsMjA1LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDY3LDg5LDIwMCwxKSkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSg2NCwxNTgsMjA1LDEpIDAlLCByZ2JhKDY3LDg5LDIwMCwxKSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDY0LDE1OCwyMDUsMSkgMCUsIHJnYmEoNjcsODksMjAwLDEpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDY0LDE1OCwyMDUsMSkgMCUsIHJnYmEoNjcsODksMjAwLDEpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDY0LDE1OCwyMDUsMSkgMCUsIHJnYmEoNjcsODksMjAwLDEpIDEwMCUpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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