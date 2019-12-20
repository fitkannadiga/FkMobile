(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-articles-articles-module"],{

/***/ "./src/app/pages/articles/articles.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/articles/articles.module.ts ***!
  \***************************************************/
/*! exports provided: ArticlesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesPageModule", function() { return ArticlesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _articles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles.page */ "./src/app/pages/articles/articles.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _articles_page__WEBPACK_IMPORTED_MODULE_5__["ArticlesPage"]
    }
];
var ArticlesPageModule = /** @class */ (function () {
    function ArticlesPageModule() {
    }
    ArticlesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_articles_page__WEBPACK_IMPORTED_MODULE_5__["ArticlesPage"]]
        })
    ], ArticlesPageModule);
    return ArticlesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/articles/articles.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/articles/articles.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Articles</ion-title>\n        <!-- <ion-button slot=\"end\" (click)=\"presentLangSelector()\" color=\"light\">{{presentLang}}</ion-button> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"!fakeData\" id=\"article-wrapper\">\n        <ion-card class=\"article-card\" *ngFor=\"let article of articleDataObject; let i = index;\" (click)=\"openArticle(article, i);\">\n            <ion-card-header>\n                <img class=\"article-img\" [src]=\"article.img_path\" onError=\"src = './assets/imgs/default.png'\"/>\n                <div class=\"flow\" style=\"height: 150px; overflow: hidden;\" >\n                    <svg viewBox=\"0 0 500 150\" preserveAspectRatio=\"none\" style=\"height: 100%; width: 100%;\">\n                        <path d=\"M-28.21,155.42 C205.41,102.13 408.01,202.78 500.00,3.47 L502.82,149.50 L-4.51,101.14 Z\" style=\"stroke: none; fill: #3B4EAC;\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"view-comment-wrapper\">\n                    <span class=\"stat-info\">\n                        <ion-icon color=\"primary\" ios=\"ios-eye\" md=\"md-eye\"></ion-icon>\n                        <span class=\"text\">{{article.view}}</span>\n                    </span>\n                    <span class=\"stat-info\">\n                        <ion-icon color=\"secondary\" ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\n                        <span class=\"text\">{{article.comment ? totalComments(article.comment) : 0 }}</span>\n                    </span>\n                </div>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-card-title>\n                    {{article.title}}\n                </ion-card-title>\n                <p class=\"short-desc\">\n                    {{article.short_description}}\n                </p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <div *ngIf=\"fakeData\">\n        <ion-card class=\"fake-data-wrapper\" *ngFor=\"let list of fakeList\">\n            <ion-card-header>\n                <div class=\"fake-img-wrapper animate-skeleton-background\"></div>\n            </ion-card-header>\n            <ion-card-content>\n                <p class=\"animate-skeleton-background\"></p>\n                <p class=\"animate-skeleton-background\"></p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/articles/articles.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/articles/articles.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-background-color, #fff); }\n  ion-content div#article-wrapper ion-card.article-card {\n    background-color: #FFF;\n    margin: 10px 0px 15px !important; }\n  ion-content div#article-wrapper ion-card.article-card ion-card-header {\n      padding: 0px !important; }\n  ion-content div#article-wrapper ion-card.article-card ion-card-header div {\n        bottom: -19px;\n        position: absolute;\n        width: 100%; }\n  ion-content div#article-wrapper ion-card.article-card ion-card-header div.view-comment-wrapper {\n        text-align: right;\n        font-size: 0.8rem;\n        position: absolute;\n        bottom: -40px; }\n  ion-content div#article-wrapper ion-card.article-card ion-card-header div.view-comment-wrapper span.stat-info {\n          display: inline-block;\n          padding: 0px 10px; }\n  ion-content div#article-wrapper ion-card.article-card ion-card-header div.view-comment-wrapper span.stat-info ion-icon, ion-content div#article-wrapper ion-card.article-card ion-card-header div.view-comment-wrapper span.stat-info span.text {\n            display: inline-block;\n            padding-right: 5px; }\n  ion-content div#article-wrapper ion-card.article-card ion-card-content {\n      padding: 45px 10px 10px;\n      word-break: break-word; }\n  ion-content div#article-wrapper ion-card.article-card ion-card-content ion-card-title {\n        font-size: 1rem;\n        font-weight: bold; }\n  ion-content div#article-wrapper ion-card.article-card ion-card-content p.short-desc {\n        font-size: 0.8rem; }\n  ion-card.fake-data-wrapper div.fake-img-wrapper {\n  height: 200px; }\n  ion-card.fake-data-wrapper ion-card-content p {\n  height: 25px;\n  margin: 10px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9hcnRpY2xlcy9hcnRpY2xlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBYSxFQUFBO0VBRGpCO0lBSVksc0JBQXNCO0lBQ3RCLGdDQUFnQyxFQUFBO0VBTDVDO01BT2dCLHVCQUF1QixFQUFBO0VBUHZDO1FBU29CLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsV0FBVyxFQUFBO0VBWC9CO1FBY29CLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGFBQWEsRUFBQTtFQWpCakM7VUFtQndCLHFCQUFxQjtVQUNyQixpQkFBaUIsRUFBQTtFQXBCekM7WUFzQjRCLHFCQUFxQjtZQUNyQixrQkFBa0IsRUFBQTtFQXZCOUM7TUE2QmdCLHVCQUF1QjtNQUN2QixzQkFBc0IsRUFBQTtFQTlCdEM7UUFnQ29CLGVBQWU7UUFDZixpQkFBaUIsRUFBQTtFQWpDckM7UUFvQ29CLGlCQUFpQixFQUFBO0VBcUNyQztFQUVRLGFBQWEsRUFBQTtFQUZyQjtFQU1ZLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGljbGVzL2FydGljbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcbiAgICBkaXYjYXJ0aWNsZS13cmFwcGVyIHtcbiAgICAgICAgaW9uLWNhcmQuYXJ0aWNsZS1jYXJkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTlweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2LnZpZXctY29tbWVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc3RhdC1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24sIHNwYW4udGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMTBweCAxMHB4O1xuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwLnNob3J0LWRlc2N7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIGlvbi1jYXJkIHtcbiAgICAgICAgLy8gICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICAvLyAgICAgbWFyZ2luOiAyMHB4IDE1cHg7XG4gICAgICAgIC8vICAgICBpb24tZ3JpZCB7XG4gICAgICAgIC8vICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlvbi1yb3cuY29udGVudC1yb3cge1xuICAgICAgICAvLyAgICAgICAgIGlvbi1jb2wuYXJ0aWNsZS1kZXNjIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlvbi1jb2wuYXJ0aWNsZS1pbWctd3JhcHBlciB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGltZy5hcnRpY2xlLWltZ3tcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpb24tcm93LmNvdW50IHtcbiAgICAgICAgLy8gICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgICAgLy8gICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweDtcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIC8vICAgICAgICAgaW9uLWNvbC52aWV3cyB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbmlvbi1jYXJkLmZha2UtZGF0YS13cmFwcGVyIHtcbiAgICBkaXYuZmFrZS1pbWctd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGRpdiNmYWtlLWFydGljbGUtd3JhcHBlciB7XG4vLyAgICAgaW9uLWNhcmQge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuLy8gICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuLy8gICAgICAgICBpb24tZ3JpZCB7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaW9uLXJvdy5jb3VudCB7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpb24tcm93LmNvbnRlbnQge1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4vLyAgICAgICAgICAgICBkaXYge1xuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBwIHtcbi8vICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/pages/articles/articles.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/articles/articles.page.ts ***!
  \*************************************************/
/*! exports provided: ArticlesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesPage", function() { return ArticlesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_article_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/article-details.service */ "./src/app/api/article-details.service.ts");
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







var ArticlesPage = /** @class */ (function () {
    function ArticlesPage(loadingController, events, alertCtrl, commonService, IAB, toastr, router, articleService, afDataBase) {
        var _this = this;
        this.loadingController = loadingController;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.IAB = IAB;
        this.toastr = toastr;
        this.router = router;
        this.articleService = articleService;
        this.afDataBase = afDataBase;
        this.presentLang = 'English';
        this.orderingCommentObj = [];
        this.share = false;
        this.fakeData = true;
        this.fakeList = Array(10);
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.loaderCounter = 0;
        this.getArticles();
        events.subscribe('getUpdatedArticle', function () {
            _this.loadArticles();
        });
    }
    ArticlesPage.prototype.ngOnInit = function () {
        // set language to default english
        this.langSelected = true;
    };
    ArticlesPage.prototype.getArticles = function () {
        var _this = this;
        this.commonService.getArticles('english').then(function (data) {
            _this.articleDataObject = data;
            _this.articleDataObject = _this.restructureComment(_this.articleDataObject);
            setTimeout(function () { return _this.fakeData = false; }, 1000);
        });
    };
    ArticlesPage.prototype.loadArticles = function () {
        var _this = this;
        var lang = (this.langSelected) ? 'english' : 'kannada';
        this.commonService.getArticles(lang).then(function (data) {
            _this.articleDataObject = data;
            _this.articleDataObject = _this.restructureComment(_this.articleDataObject);
        });
    };
    ArticlesPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.IAB.create(url, target, this.options);
    };
    ArticlesPage.prototype.restructureComment = function (dataObject) {
        var tempOb, tempCommentObj;
        for (var data_key in dataObject) {
            tempOb = dataObject[data_key];
            if (tempOb.hasOwnProperty('comment')) {
                var tempComment = JSON.parse(JSON.stringify(tempOb['comment']));
                tempOb['comment'] = [];
                if (Object.keys(tempComment).length > 0) {
                    for (var t_key in tempComment) {
                        tempComment[t_key]['id'] = t_key;
                        tempCommentObj = tempComment[t_key];
                        if (tempCommentObj.hasOwnProperty('childComment')) {
                            var tempChildComment = JSON.parse(JSON.stringify(tempCommentObj['childComment']));
                            tempCommentObj['childComment'] = [];
                            if (Object.keys(tempChildComment).length > 0) {
                                for (var tc_key in tempChildComment) {
                                    tempChildComment[tc_key]['id'] = tc_key;
                                    tempCommentObj['childComment'].push(tempChildComment[tc_key]);
                                }
                            }
                            else {
                                tempCommentObj['childComment'].push([]);
                            }
                        }
                        tempOb['comment'].push(tempComment[t_key]);
                    }
                }
                else {
                    tempOb['comment'].push([]);
                }
            }
        }
        return dataObject;
    };
    ArticlesPage.prototype.totalComments = function (commentObj) {
        var commentCount = 0;
        for (var c_key in commentObj) {
            commentCount++;
            if (commentObj[c_key].childComment) {
                var temp_child_comment = commentObj[c_key].childComment;
                for (var cc_key in temp_child_comment) {
                    commentCount++;
                }
            }
        }
        return commentCount;
    };
    ArticlesPage.prototype.presentLangSelector = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Select Language',
                            inputs: [
                                {
                                    type: 'radio',
                                    label: 'English',
                                    value: 'english',
                                    checked: this.langSelected
                                },
                                {
                                    type: 'radio',
                                    label: 'ಕನ್ನಡ',
                                    value: 'kannada',
                                    checked: !this.langSelected
                                }
                            ],
                            buttons: [
                                {
                                    text: "Cancel",
                                    handler: function (data) {
                                        // Do nothing
                                    }
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        if (data == "kannada") {
                                            _this.langSelected = false;
                                            _this.presentLang = "ಕನ್ನಡ";
                                        }
                                        else {
                                            _this.langSelected = true;
                                            _this.presentLang = "English";
                                        }
                                        _this.loadArticles();
                                        //this.loadKannadaArticles();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ArticlesPage.prototype.openArticle = function (articleObject, index) {
        // open modal and pass the object
        // Before opening make a call to increase the view count
        this.addView(index);
        this.articleService.setArticleDetails(articleObject, this.presentLang);
        this.router.navigateByUrl('/article-details');
        // this.loadArticles();
    };
    ArticlesPage.prototype.addView = function (index) {
        this.afDataBase.database.ref("/articles/english/" + index).child('view').transaction(function (view) {
            return view + 1;
        });
        this.afDataBase.database.ref("/articles/kannada/" + index).child('view').transaction(function (view) {
            return view + 1;
        });
    };
    ArticlesPage.prototype.presentLoading = function (msg) {
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
                        _a.articleLoader = _b.sent();
                        return [4 /*yield*/, this.articleLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlesPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.articleLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlesPage.prototype.presentToast = function (toastMsg) {
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
    ArticlesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.page.html */ "./src/app/pages/articles/articles.page.html"),
            styles: [__webpack_require__(/*! ./articles.page.scss */ "./src/app/pages/articles/articles.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _api_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _api_article_details_service__WEBPACK_IMPORTED_MODULE_5__["ArticleDetailsService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]])
    ], ArticlesPage);
    return ArticlesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-articles-articles-module.js.map