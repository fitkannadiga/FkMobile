(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>About Us</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <p>Hey!</p>\n    <p>I am Raghavendra, I am just a passionate person who loves to try new and exciting things in life. So, In the process of doing this I fell in love with sports and fitness. I used to play Basketball during my University and had to stop it due to some major injuries and I also put on lot of weight once I stopped all my activities for my rehab. But somehow through one of my friend I got some tips to stay healthy without spending much time and I implemented it and was working out pretty decent for me with just a 6Kg dumbell at home. I lost a couple of kilo also and started to look better.</p>\n    <p>One of my Rommmate who used to watch me work harder and also who used to support very much insisted me to take up fitness and nutrition courses and here I am putting out content and trying to put little efforts to help people.</p>\n    <p>Every thing about human anatomy and how our body works amazes me to explore more and more. I have learnt few by reading books, articles, scholars and also by experimenting on myself. So, join me in the journey of learning fitness and also to help other to reach their fitness goals.</p>\n    <p>You can always drop by and say \"Hi!\" in any of the social medial links mentioned below.</p>\n    <p>Stay Fit. Cheers!</p>\n    <p id=\"social-icons\">\n        <ion-icon id=\"facebook\" class=\"background-color-fb\" ios=\"logo-facebook\" md=\"logo-facebook\" (click)=\"redirect('facebook');\"></ion-icon>\n        <ion-icon id=\"instagram\" class=\"background-color-insta\" ios=\"logo-instagram\" md=\"logo-instagram\" (click)=\"redirect('instagram');\"></ion-icon>\n        <ion-icon id=\"youtube\" class=\"background-color-youtube\" ios=\"logo-youtube\" md=\"logo-youtube\" (click)=\"redirect('youtube');\"></ion-icon>\n    </p>\n    <!-- <ion-button expand=\"full\" size=\"large\" class=\"background-color-fb\" (click)=\"redirect('facebook');\">\n        <ion-icon ios=\"logo-facebook\" md=\"logo-facebook\"></ion-icon>&nbsp;&nbsp;Facebook</ion-button><br/>\n    <ion-button expand=\"full\" size=\"large\" class=\"background-color-insta\" (click)=\"redirect('instagram');\">\n        <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon>&nbsp;&nbsp;Instagram</ion-button><br/>\n    <ion-button expand=\"full\" size=\"large\" class=\"background-color-youtube\" (click)=\"redirect('youtube');\">\n        <ion-icon ios=\"logo-youtube\" md=\"logo-youtube\"></ion-icon>&nbsp;&nbsp;Youtube</ion-button> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-color-fb {\n  --background-color: #3B5998 !important; }\n\n.background-color-insta {\n  --background: linear-gradient(to bottom right, #515BD4 0%, #8134AF 25%, #DD2A7B 50%, #FEDA77 75%, #F58529 100%); }\n\n.background-color-youtube {\n  --background: linear-gradient(to bottom right, rgb(238, 49, 49) 0%, #FF0000 100%); }\n\np#social-icons {\n  font-size: 2rem;\n  text-align: center; }\n\np#social-icons ion-icon {\n    padding: 10px;\n    border-radius: 30px;\n    margin: 0px 15px; }\n\np#social-icons #facebook,\n  p#social-icons #instagram,\n  p#social-icons #youtube {\n    color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kZXYvMzRkNzYyYjMtNWFhYS00MDEwLThlNTctNmE5YzYwZmE2MGVkL2lvbmljL2ZyZWUvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBbUIsRUFBQTs7QUFHdkI7RUFFSSwrR0FBYSxFQUFBOztBQUdqQjtFQUNJLGlGQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUZ0QjtJQUlRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7O0FBTnhCOzs7SUFXUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1jb2xvci1mYiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjM0I1OTk4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9yLWluc3RhIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMzQjU5OTggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM1MTVCRDQgMCUsICM4MTM0QUYgMjUlLCAjREQyQTdCIDUwJSwgI0ZFREE3NyA3NSUsICNGNTg1MjkgMTAwJSk7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9yLXlvdXR1YmUge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDIzOCwgNDksIDQ5KSAwJSwgI0ZGMDAwMCAxMDAlKTtcbn1cblxucCNzb2NpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xuICAgIH1cbiAgICAjZmFjZWJvb2ssXG4gICAgI2luc3RhZ3JhbSxcbiAgICAjeW91dHViZSB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(iab) {
        this.iab = iab;
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.redirect = function (socialMedia) {
        if (socialMedia == "facebook") {
            this.iab.create("https://facebook.com/fitkannadiga", "_system");
            return false;
        }
        else if (socialMedia == "instagram") {
            this.iab.create("https://www.instagram.com/fitkannadiga/", "_system");
            return false;
        }
        else {
            this.iab.create("https://youtube.com/c/fitkannadiga", "_system");
            return false;
        }
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__["InAppBrowser"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map