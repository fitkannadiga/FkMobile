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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Fitness Tools</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <ion-row>\n        <ion-col (click)=\"openPage('/bmrcalculator');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/ketogenic-diet-color/64/calories-burn-metabolism-energy-food-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n            <p>BMR Calculator</p>\n        </ion-col>\n        <ion-col (click)=\"openPage('/interval-timer');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Stopwatch-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n            <p>Fitness Timer</p>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col (click)=\"openPage('/macros-calci');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/business-icons-4/128/chart-6-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n            <p>Macros Finder</p>\n        </ion-col>\n        <ion-col (click)=\"openPage('WeightCalciPage');\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Weigher-64.png\" />\n            <p>Weight Calculator</p>\n        </ion-col>\n    </ion-row> -->\n    <div class=\"tool-wrapper\" (click)=\"openPage('/bmrcalculator');\">\n        <div class=\"img-wrapper tool-sections\">\n            <img src=\"https://cdn3.iconfinder.com/data/icons/ketogenic-diet-color/64/calories-burn-metabolism-energy-food-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"bmr-calci\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">BMR Calculator</p>\n        </div>\n    </div>\n    <div class=\"tool-wrapper\" (click)=\"openPage('/interval-timer');\">\n        <div class=\"img-wrapper tool-sections\">\n                <img src=\"https://cdn3.iconfinder.com/data/icons/fitness-general/512/Stopwatch-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"fit-timer\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">Fitness Timer</p>\n        </div>\n    </div>\n    <div class=\"tool-wrapper\" (click)=\"openPage('/macros-calci');\">\n        <div class=\"img-wrapper tool-sections\">\n                <img src=\"https://cdn3.iconfinder.com/data/icons/business-icons-4/128/chart-6-64.png\" onError=\"src = './assets/imgs/default.png'\"/>\n        </div>\n        <div id=\"macro-calci\" class=\"headling-wrapper tool-sections\">\n            <p class=\"title\">Macros Finder</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tools/tools.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content div.tool-wrapper {\n  position: relative;\n  padding: 15px 20px; }\n  ion-content div.tool-wrapper div.tool-sections {\n    display: inline-block; }\n  ion-content div.tool-wrapper div.img-wrapper {\n    width: 30%;\n    text-align: center;\n    z-index: 5;\n    position: relative; }\n  ion-content div.tool-wrapper div.img-wrapper img {\n      vertical-align: middle;\n      background: #FFF;\n      border: 1px solid #000000;\n      padding: 15px;\n      border-radius: 57px; }\n  ion-content div.tool-wrapper div.headling-wrapper {\n    width: 70%;\n    margin-left: -25px;\n    padding: 3px 25px;\n    text-align: center;\n    border: 1px solid #dcdcdc;\n    border-radius: 10px;\n    z-index: 2;\n    position: relative; }\n  ion-content div.tool-wrapper div#bmr-calci {\n    background: #e3d10d;\n    background: -webkit-gradient(left top, right top, color-stop(0%, #e3d10d), color-stop(8%, rgba(227, 209, 13, 0.99)), color-stop(100%, rgba(254, 182, 69, 0.92)));\n    background: linear-gradient(to right, #e3d10d 0%, rgba(227, 209, 13, 0.99) 8%, rgba(254, 182, 69, 0.92) 100%); }\n  ion-content div.tool-wrapper div#fit-timer {\n    background: #248df0;\n    background: -webkit-gradient(left top, right top, color-stop(0%, #248df0), color-stop(85%, rgba(27, 121, 228, 0.96)), color-stop(100%, rgba(27, 121, 228, 0.95)));\n    background: linear-gradient(to right, #248df0 0%, rgba(27, 121, 228, 0.96) 85%, rgba(27, 121, 228, 0.95) 100%); }\n  ion-content div.tool-wrapper div#macro-calci {\n    background: #43aa31;\n    background: -webkit-gradient(left top, right top, color-stop(0%, #43aa31), color-stop(20%, rgba(67, 170, 49, 0.97)), color-stop(100%, rgba(15, 102, 0, 0.86)));\n    background: linear-gradient(to right, #43aa31 0%, rgba(67, 170, 49, 0.97) 20%, rgba(15, 102, 0, 0.86) 100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy90b29scy90b29scy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBRVEsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0VBSDFCO0lBS1kscUJBQXFCLEVBQUE7RUFMakM7SUFRWSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0IsRUFBQTtFQVg5QjtNQWFnQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixhQUFhO01BQ2IsbUJBQW1CLEVBQUE7RUFqQm5DO0lBcUJZLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0IsRUFBQTtFQTVCOUI7SUErQlksbUJBQThCO0lBRTlCLGdLQUFxSztJQUlySyw2R0FBa0gsRUFBQTtFQXJDOUg7SUF3Q1ksbUJBQThCO0lBRTlCLGlLQUFzSztJQUl0Syw4R0FBbUgsRUFBQTtFQTlDL0g7SUFpRFksbUJBQTZCO0lBRTdCLDhKQUFrSztJQUlsSywyR0FBK0csRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rvb2xzL3Rvb2xzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgbWFyZ2luLXRvcDogNjBweCAhaW1wb3J0YW50O1xuLy8gICAgIGlvbi1yb3cge1xuLy8gICAgICAgICBpb24tY29sIHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMjBweCA1cHg7XG4vLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRENEQ0RDO1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbi8vICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XG4vLyAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCByZ2JhKDIzNywgMjM3LCAyMzcsIDEpO1xuLy8gICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbmlvbi1jb250ZW50IHtcbiAgICBkaXYudG9vbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgIGRpdi50b29sLXNlY3Rpb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBkaXYuaW1nLXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXYuaGVhZGxpbmctd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2I2Jtci1jYWxjaXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjI3LDIwOSwxMywxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjI3LDIwOSwxMywxKSAwJSwgcmdiYSgyMjcsMjA5LDEzLDAuOTkpIDglLCByZ2JhKDI1NCwxODIsNjksMC45MikgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjI3LDIwOSwxMywxKSksIGNvbG9yLXN0b3AoOCUsIHJnYmEoMjI3LDIwOSwxMywwLjk5KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTQsMTgyLDY5LDAuOTIpKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDIyNywyMDksMTMsMSkgMCUsIHJnYmEoMjI3LDIwOSwxMywwLjk5KSA4JSwgcmdiYSgyNTQsMTgyLDY5LDAuOTIpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjI3LDIwOSwxMywxKSAwJSwgcmdiYSgyMjcsMjA5LDEzLDAuOTkpIDglLCByZ2JhKDI1NCwxODIsNjksMC45MikgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjI3LDIwOSwxMywxKSAwJSwgcmdiYSgyMjcsMjA5LDEzLDAuOTkpIDglLCByZ2JhKDI1NCwxODIsNjksMC45MikgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjI3LDIwOSwxMywxKSAwJSwgcmdiYSgyMjcsMjA5LDEzLDAuOTkpIDglLCByZ2JhKDI1NCwxODIsNjksMC45MikgMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgZGl2I2ZpdC10aW1lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM2LDE0MSwyNDAsMSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDM2LDE0MSwyNDAsMSkgMCUsIHJnYmEoMjcsMTIxLDIyOCwwLjk2KSA4NSUsIHJnYmEoMjcsMTIxLDIyOCwwLjk1KSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgzNiwxNDEsMjQwLDEpKSwgY29sb3Itc3RvcCg4NSUsIHJnYmEoMjcsMTIxLDIyOCwwLjk2KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNywxMjEsMjI4LDAuOTUpKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDM2LDE0MSwyNDAsMSkgMCUsIHJnYmEoMjcsMTIxLDIyOCwwLjk2KSA4NSUsIHJnYmEoMjcsMTIxLDIyOCwwLjk1KSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDM2LDE0MSwyNDAsMSkgMCUsIHJnYmEoMjcsMTIxLDIyOCwwLjk2KSA4NSUsIHJnYmEoMjcsMTIxLDIyOCwwLjk1KSAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgzNiwxNDEsMjQwLDEpIDAlLCByZ2JhKDI3LDEyMSwyMjgsMC45NikgODUlLCByZ2JhKDI3LDEyMSwyMjgsMC45NSkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzYsMTQxLDI0MCwxKSAwJSwgcmdiYSgyNywxMjEsMjI4LDAuOTYpIDg1JSwgcmdiYSgyNywxMjEsMjI4LDAuOTUpIDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgIGRpdiNtYWNyby1jYWxjaSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY3LDE3MCw0OSwxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNjcsMTcwLDQ5LDEpIDAlLCByZ2JhKDY3LDE3MCw0OSwwLjk3KSAyMCUsIHJnYmEoMTUsMTAyLDAsMC44NikgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoNjcsMTcwLDQ5LDEpKSwgY29sb3Itc3RvcCgyMCUsIHJnYmEoNjcsMTcwLDQ5LDAuOTcpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDE1LDEwMiwwLDAuODYpKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDY3LDE3MCw0OSwxKSAwJSwgcmdiYSg2NywxNzAsNDksMC45NykgMjAlLCByZ2JhKDE1LDEwMiwwLDAuODYpIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNjcsMTcwLDQ5LDEpIDAlLCByZ2JhKDY3LDE3MCw0OSwwLjk3KSAyMCUsIHJnYmEoMTUsMTAyLDAsMC44NikgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNjcsMTcwLDQ5LDEpIDAlLCByZ2JhKDY3LDE3MCw0OSwwLjk3KSAyMCUsIHJnYmEoMTUsMTAyLDAsMC44NikgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNjcsMTcwLDQ5LDEpIDAlLCByZ2JhKDY3LDE3MCw0OSwwLjk3KSAyMCUsIHJnYmEoMTUsMTAyLDAsMC44NikgMTAwJSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

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