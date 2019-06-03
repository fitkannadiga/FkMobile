(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hire-coach-hire-coach-module"],{

/***/ "./src/app/pages/hire-coach/hire-coach.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/hire-coach/hire-coach.module.ts ***!
  \*******************************************************/
/*! exports provided: HireCoachPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireCoachPageModule", function() { return HireCoachPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hire_coach_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hire-coach.page */ "./src/app/pages/hire-coach/hire-coach.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _hire_coach_page__WEBPACK_IMPORTED_MODULE_5__["HireCoachPage"]
    }
];
var HireCoachPageModule = /** @class */ (function () {
    function HireCoachPageModule() {
    }
    HireCoachPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_hire_coach_page__WEBPACK_IMPORTED_MODULE_5__["HireCoachPage"]]
        })
    ], HireCoachPageModule);
    return HireCoachPageModule;
}());



/***/ }),

/***/ "./src/app/pages/hire-coach/hire-coach.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/hire-coach/hire-coach.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Hire Coach</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <div id=\"transformation-slider\">\n        <ion-slides *ngIf=\"transformationArray\" autoplay=\"3000\" loop=\"true\" speed=\"1000\" autoplayDisableOnInteraction=\"false\">\n            <ion-slide *ngFor=\"let slide of transformationArray\">\n                <img [src]=\"slide\" />\n            </ion-slide>\n        </ion-slides>\n    </div> -->\n    <p>\n        We as wellness consultants, we not just focus on your weight-loss/weight-gain goals, Rather we focus on providing a better lifestyle solutions which will help you to lead a happy life by transforming you completely and also help to reach your fitness/lifestyle\n        goals.\n    </p>\n    <p>Below are few of our clients testimonials on how their experience was with us.</p>\n    <div id=\"testimonial-wrapper\">\n        <ion-slides *ngIf=\"testimonials\" pager=\"true\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of testimonials\" class=\"testimonial-card\">\n                <img class=\"testimonial-image\" [src]=\"item.img\" onError=\"src = './assets/imgs/default.png'\"/>\n                <ion-grid>\n                    <ion-row>\n                        <!-- <ion-col size=\"12\" class=\"img-wrapper\">\n                            <img class=\"testimonial-image\" [src]=\"item.img\" />\n                        </ion-col> -->\n                        <ion-col size=\"12\" class=\"name-wrapper\">\n                            <p>{{item.name}}</p>\n                        </ion-col>\n                        <ion-col size=\"12\" class=\"story-wrapper\">\n                            <div class=\"user-short-story\" [innerHTML]=\"item.short_desc\"></div>\n                            <span *ngIf=\"item.read_more\" class=\"read-more-text\" (click)=\"showStory(item);\">Read more...</span>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-toolbar color=\"primary\" (click)=\"openPlansPage();\">\n        <ion-title text-center>View Plans</ion-title>\n        <!-- <a ion-button full large href=\"mailto:fitkannadiga@gmail.com\">Hire Me</a> -->\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/hire-coach/hire-coach.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/hire-coach/hire-coach.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#testimonial-wrapper ion-slides {\n  margin-top: 20px; }\n\ndiv#testimonial-wrapper ion-slide {\n  text-align: center;\n  position: relative;\n  margin-top: 40px; }\n\ndiv#testimonial-wrapper ion-slide img.testimonial-image {\n    width: 90px;\n    height: 90px;\n    border-radius: 50px;\n    position: absolute;\n    z-index: 9999;\n    top: -40px;\n    border: 3px solid #3B4EAC; }\n\ndiv#testimonial-wrapper ion-slide ion-grid {\n    background-color: #dcdcdc;\n    padding-top: 45px;\n    border-radius: 30px;\n    z-index: 9000;\n    border-bottom: 30px solid #D43B3D;\n    margin-bottom: 40px; }\n\ndiv#testimonial-wrapper ion-slide ion-grid ion-col.name-wrapper p {\n      padding: 5px 0px !important;\n      margin: 0px !important;\n      font-weight: bold; }\n\ndiv#testimonial-wrapper ion-slide ion-grid div.user-short-story {\n      font-size: 0.8rem; }\n\ndiv#testimonial-wrapper ion-slide ion-grid img.testimonial-image {\n      width: 75px;\n      height: 75px;\n      border-radius: 40px; }\n\ndiv#testimonial-wrapper ion-slide ion-grid span.read-more-text {\n      color: #0000FF;\n      text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9oaXJlLWNvYWNoL2hpcmUtY29hY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCLEVBQUE7O0FBRnhCO0VBTVEsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFSeEI7SUFVWSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVix5QkFBeUIsRUFBQTs7QUFoQnJDO0lBbUJZLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBZ0M7SUFDaEMsbUJBQW1CLEVBQUE7O0FBeEIvQjtNQTJCb0IsMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QixpQkFBaUIsRUFBQTs7QUE3QnJDO01BaUNnQixpQkFBaUIsRUFBQTs7QUFqQ2pDO01Bb0NnQixXQUFXO01BQ1gsWUFBWTtNQUNaLG1CQUFtQixFQUFBOztBQXRDbkM7TUF5Q2dCLGNBQWM7TUFDZCwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpcmUtY29hY2gvaGlyZS1jb2FjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjdGVzdGltb25pYWwtd3JhcHBlciB7XG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGRpdi5zd2lwZXItcGFnaW5hdGlvbiB7fVxuICAgIH1cbiAgICBpb24tc2xpZGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgaW1nLnRlc3RpbW9uaWFsLWltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgICAgICB0b3A6IC00MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzNCNEVBQztcbiAgICAgICAgfVxuICAgICAgICBpb24tZ3JpZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgei1pbmRleDogOTAwMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDMwcHggc29saWQjRDQzQjNEO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGlvbi1jb2wubmFtZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYudXNlci1zaG9ydC1zdG9yeSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcudGVzdGltb25pYWwtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Bhbi5yZWFkLW1vcmUtdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwRkY7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hire-coach/hire-coach.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/hire-coach/hire-coach.page.ts ***!
  \*****************************************************/
/*! exports provided: HireCoachPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireCoachPage", function() { return HireCoachPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_story_user_story_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user-story/user-story.component */ "./src/app/components/user-story/user-story.component.ts");
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





var HireCoachPage = /** @class */ (function () {
    function HireCoachPage(loadingController, toastr, commonService, modal, router) {
        this.loadingController = loadingController;
        this.toastr = toastr;
        this.commonService = commonService;
        this.modal = modal;
        this.router = router;
        this.slideOpts = {
            autoplay: true,
            effect: 'flip',
            speeed: 400,
            loop: true,
            allowTouchMove: true
        };
        this.getTransformatioImages();
        this.getTestimonials();
    }
    HireCoachPage.prototype.ngOnInit = function () {
    };
    HireCoachPage.prototype.getTransformatioImages = function () {
        var _this = this;
        this.presentLoading('Loading Transformations..');
        this.commonService.getTransformatioImages().then(function (data) {
            _this.transformationArray = data;
            setTimeout(function () {
                _this.dismissLoader();
            }, 1000);
        }, function (error) {
            // console.log("banner image error", error);
        });
    };
    HireCoachPage.prototype.getTestimonials = function () {
        var _this = this;
        this.commonService.getTestimonials().then(function (data) {
            _this.testimonials = data;
        }, function (error) {
            // console.log("banner image error", error);
        });
    };
    HireCoachPage.prototype.showStory = function (story) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _components_user_story_user_story_component__WEBPACK_IMPORTED_MODULE_4__["UserStoryComponent"],
                            componentProps: { value: story }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HireCoachPage.prototype.openPlansPage = function () {
        this.router.navigateByUrl('/client-plans');
    };
    HireCoachPage.prototype.presentLoading = function (msg) {
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
                        _a.hireLoader = _b.sent();
                        return [4 /*yield*/, this.hireLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HireCoachPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hireLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HireCoachPage.prototype.presentToast = function (toastMsg) {
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
    HireCoachPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hire-coach',
            template: __webpack_require__(/*! ./hire-coach.page.html */ "./src/app/pages/hire-coach/hire-coach.page.html"),
            styles: [__webpack_require__(/*! ./hire-coach.page.scss */ "./src/app/pages/hire-coach/hire-coach.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _api_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HireCoachPage);
    return HireCoachPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-hire-coach-hire-coach-module.js.map