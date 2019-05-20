(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feedback-feedback-module"],{

/***/ "./src/app/pages/feedback/feedback.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.module.ts ***!
  \***************************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback.page */ "./src/app/pages/feedback/feedback.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_5__["FeedbackPage"]
    }
];
var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_5__["FeedbackPage"]]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());



/***/ }),

/***/ "./src/app/pages/feedback/feedback.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Feedback</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content padding>\n    <img src=\"./assets/imgs/comment.png\" id=\"comment-icon\" />\n    <p id=\"feedback-info\">We are constantly trying to improve our services and would like to hear your feedback.</p>\n    <ion-item class=\"fk-marginTop-1\">\n        <ion-textarea rows=\"6\" height=\"200px;\" [(ngModel)]=\"feedbackText\" placeholder=\"Your Feedback is valuable.......\"></ion-textarea>\n    </ion-item>\n    <ion-button expand=\"full\" size=\"large\" color=\"primary\" (click)=\"sendFeedback()\" class=\"fk-marginTop-25\">Submit</ion-button>\n</ion-content> -->\n<ion-content padding>\n    <p>How Happy are you with the services provided by Fit Kannadiga?</p>\n    <div>\n        <img src=\"./assets/icon/emoticons/sad.svg\" id=\"sad\" class=\"emoticon\" (click)=\"selectRating($event, '-1', 'sad')\">\n        <img src=\"./assets/icon/emoticons/neutral.svg\" id=\"neutral\" class=\"emoticon\" (click)=\"selectRating($event, '0', 'neutral')\">\n        <img src=\"./assets/icon/emoticons/happy.svg\" id=\"happy\" class=\"emoticon\" (click)=\"selectRating($event, '1', 'happy')\">\n        <img src=\"./assets/icon/emoticons/satisfied.svg\" id=\"satisfied\" class=\"emoticon\" (click)=\"selectRating($event, '2', 'satisfied')\">\n        <img src=\"./assets/icon/emoticons/love.svg\" id=\"love\" class=\"emoticon\" (click)=\"selectRating($event, '3', 'love')\">\n    </div>\n    <ion-item class=\"fk-marginTop-50\" lines=\"none\">\n        <ion-textarea rows=\"6\" height=\"200px;\" [(ngModel)]=\"feedbackText\" placeholder=\"Your Feedback is valuable\"></ion-textarea>\n    </ion-item>\n    <ion-button color=\"primary\" (click)=\"sendFeedback()\" class=\"fk-marginTop-50\">Submit</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/feedback/feedback.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  text-align: center; }\n  ion-content img.emoticon {\n    display: inline-block;\n    width: 15%;\n    margin: 7px;\n    opacity: 0.7; }\n  ion-content img.active {\n    border-radius: 50px;\n    opacity: 1;\n    background: linear-gradient(to right, orange, red);\n    padding: 2px; }\n  ion-content ion-item {\n    border: 1px solid #dcdcdc;\n    border-radius: 2px; }\n  div.item-native {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFVSSxrQkFBa0IsRUFBQTtFQVZ0QjtJQVlRLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVksRUFBQTtFQWZwQjtJQW1CUSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtEQUFrRDtJQUNsRCxZQUFZLEVBQUE7RUF0QnBCO0lBeUJRLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTtFQUkxQjtFQUNJLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZGJhY2svZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBpbWcjY29tbWVudC1pY29uIHtcbiAgICAvLyAgICAgd2lkdGg6IDMwJTtcbiAgICAvLyB9XG4gICAgLy8gcCNmZWVkYmFjay1pbmZvIHtcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gICAgIHdpZHRoOiA3NSU7XG4gICAgLy8gICAgIG1hcmdpbjogYXV0bztcbiAgICAvLyB9XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGltZy5lbW90aWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgbWFyZ2luOiA3cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gICAgaW1nLmFjdGl2ZSB7XG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICM1Q0I1NUI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlLCByZWQpO1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbn1cblxuZGl2Lml0ZW0tbmF0aXZlIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/feedback/feedback.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.ts ***!
  \*************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/global.service */ "./src/app/api/global.service.ts");
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




var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(toastr, loadingController, afDataBase, globalService, navCtrl) {
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.afDataBase = afDataBase;
        this.globalService = globalService;
        this.navCtrl = navCtrl;
        this.feedbackText = "";
        this.userData = this.globalService.getUserData();
        this.feedbackValue = "";
        // console.log("this.userData", this.userData);
    }
    FeedbackPage.prototype.ngOnInit = function () {
    };
    FeedbackPage.prototype.selectRating = function (event, value, id) {
        var emoticons = document.querySelectorAll("img.emoticon");
        emoticons.forEach(function (element) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
        this.feedbackValue = value;
        document.getElementById(id).classList.add('active');
    };
    FeedbackPage.prototype.sendFeedback = function () {
        var _this = this;
        if (this.feedbackValue != "") {
            // post feedback
            var feedbackObj = {
                "rating": this.feedbackValue,
                "feedbackText": this.feedbackText,
                "userName": this.userData.fullname,
                "email": this.userData.email,
                "uid": this.userData.uid,
                "date": new Date()
            };
            console.log("Feedback", feedbackObj);
            this.afDataBase.database.ref("/feedbacks").push(feedbackObj).then(function (data) {
                // on success clear the text area
                _this.feedbackText = "";
                _this.presentToast('Thank you for your feedback');
                setTimeout(function () { return _this.navCtrl.navigateRoot('/tabs'); }, 1000);
            }, function (err) {
                // console.log("err", err);
                this.commonService.toast('Servers unreachable. Could not send feedback!');
            });
        }
        else {
            this.presentToast('Please select your rating!');
        }
    };
    FeedbackPage.prototype.presentLoading = function (msg) {
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
                        _a.feedbackLoader = _b.sent();
                        return [4 /*yield*/, this.feedbackLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedbackPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.feedbackLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedbackPage.prototype.presentToast = function (toastMsg) {
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
    FeedbackPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.page.html */ "./src/app/pages/feedback/feedback.page.html"),
            styles: [__webpack_require__(/*! ./feedback.page.scss */ "./src/app/pages/feedback/feedback.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], FeedbackPage);
    return FeedbackPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-feedback-feedback-module.js.map