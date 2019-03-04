(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-article-details-article-details-module"],{

/***/ "./src/app/pages/article-details/article-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/article-details/article-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailsPageModule", function() { return ArticleDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _article_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-details.page */ "./src/app/pages/article-details/article-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _article_details_page__WEBPACK_IMPORTED_MODULE_5__["ArticleDetailsPage"]
    }
];
var ArticleDetailsPageModule = /** @class */ (function () {
    function ArticleDetailsPageModule() {
    }
    ArticleDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_article_details_page__WEBPACK_IMPORTED_MODULE_5__["ArticleDetailsPage"]]
        })
    ], ArticleDetailsPageModule);
    return ArticleDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/article-details/article-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/article-details/article-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Article Detail</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <img [src]=\"ArticleData.img_path\" />\n        <ion-card-content>\n            <ion-card-title>\n                {{ArticleData.title}}\n            </ion-card-title>\n            <div id=\"article-main-content\" [innerHTML]=\"ArticleData.main_desc\"></div>\n            <ion-grid id=\"article-stats-wrapper\">\n                <ion-row>\n                    <ion-col>\n                        <ion-icon color=\"primary\" ios=\"ios-eye\" md=\"md-eye\"></ion-icon> {{ArticleData.view + 1}} Views</ion-col>\n                    <ion-col>\n                        <ion-icon color=\"secondary\" ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\n                        {{articleCommentLen}} Comments\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-input [(ngModel)]=\"userComment\" type=\"text\" placeholder=\"please enter comment here...\"></ion-input>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <ion-button id=\"update-profile-btn\" color=\"dark\" size=\"small\" (click)=\"postComment(ArticleData.id);\">Sumbit</ion-button>\n                        <!-- <button ion-button color=\"dark\" (click)=\"postComment(ArticleData.id);\">Sumbit</button> -->\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <hr/>\n            <h3 class=\"card-bold\">Comments</h3>\n            <p *ngIf=\"articleCommentLen == 0\" id=\"first-comment-info\">Be the first to comment!</p>\n            <ion-grid *ngIf=\"articleCommentObject\" id=\"comments-wrapper\">\n                <ion-row [id]=\"comment.id\" *ngFor=\"let comment of articleCommentObject\">\n                    <ion-col size=\"2\">\n                        <div class=\"comment-img-wrapper\">\n                            <img class=\"user-img-icon\" [src]=\"comment.userImg\" onError=\"src = 'assets/default.png'\" />\n                        </div>\n                    </ion-col>\n                    <ion-col>\n                        <ion-row>\n                            <ion-col size=\"11\">\n                                <p class=\"card-bold\">{{comment.userName}}</p>\n                                <p class=\"user-comment\">{{comment.comment}}</p>\n                            </ion-col>\n                            <ion-col size=\"1\">\n                                <ion-icon color=\"primary\" item-right ios=\"ios-undo\" md=\"md-undo\" (click)=\"showPrompt(comment.id);\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row *ngFor=\"let cComment of comment.childComment\">\n                            <ion-col size=\"2\">\n                                <div class=\"child-comment-img-wrapper\">\n                                    <img class=\"user-img-icon\" [src]=\"cComment.userImg\" onError=\"src = 'assets/default.png'\" />\n                                </div>\n                            </ion-col>\n                            <ion-col>\n                                <p class=\"card-bold\">{{cComment.userName}}</p>\n                                <p class=\"user-comment\">{{cComment.comment}}</p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/article-details/article-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/article-details/article-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none !important; }\n  ion-card ion-card-content ion-card-title {\n    padding: 10px 0px; }\n  ion-card ion-card-content div#article-main-content div {\n    display: block;\n    padding: 10px 0px; }\n  ion-card ion-card-content div#article-main-content div .card-italic {\n      font-style: italic !important; }\n  ion-card ion-card-content div#article-main-content div .card-bold {\n      font-weight: bold !important; }\n  ion-card ion-grid#article-stats-wrapper ion-col {\n    text-align: center; }\n  ion-card ion-grid#comments-wrapper div.comment-img-wrapper,\n  ion-card ion-grid#comments-wrapper div.child-comment-img-wrapper {\n    width: 40px;\n    height: 40px; }\n  ion-card ion-grid#comments-wrapper div.comment-img-wrapper img.user-img-icon,\n    ion-card ion-grid#comments-wrapper div.child-comment-img-wrapper img.user-img-icon {\n      display: block;\n      width: 100%;\n      height: 100%;\n      border-radius: 25px; }\n  ion-card ion-grid#comments-wrapper p.card-bold {\n    font-weight: bold; }\n  ion-card ion-grid#comments-wrapper ion-col {\n    padding-top: 0px !important; }\n  ion-card h3.card-bold {\n    font-weight: bold;\n    text-decoration: underline;\n    padding-bottom: 20px;\n    font-size: 20px; }\n  ion-card p#first-comment-info {\n    padding: 10px;\n    background-color: #222428;\n    text-align: center;\n    color: #fff;\n    font-weight: bold;\n    opacity: 0.8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9hcnRpY2xlLWRldGFpbHMvYXJ0aWNsZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQixFQUFBO0VBRC9CO0lBSVksaUJBQWlCLEVBQUE7RUFKN0I7SUFRZ0IsY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBVGpDO01BV29CLDZCQUE2QixFQUFBO0VBWGpEO01BY29CLDRCQUE0QixFQUFBO0VBZGhEO0lBcUJZLGtCQUFrQixFQUFBO0VBckI5Qjs7SUEyQlksV0FBVztJQUNYLFlBQVksRUFBQTtFQTVCeEI7O01BOEJnQixjQUFjO01BQ2QsV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUIsRUFBQTtFQWpDbkM7SUFxQ1ksaUJBQWlCLEVBQUE7RUFyQzdCO0lBd0NZLDJCQUEyQixFQUFBO0VBeEN2QztJQTRDUSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixlQUFlLEVBQUE7RUEvQ3ZCO0lBa0RRLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXJ0aWNsZS1kZXRhaWxzL2FydGljbGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYjYXJ0aWNsZS1tYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAuY2FyZC1pdGFsaWMge1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNhcmQtYm9sZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1ncmlkI2FydGljbGUtc3RhdHMtd3JhcHBlciB7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1ncmlkI2NvbW1lbnRzLXdyYXBwZXIge1xuICAgICAgICBkaXYuY29tbWVudC1pbWctd3JhcHBlcixcbiAgICAgICAgZGl2LmNoaWxkLWNvbW1lbnQtaW1nLXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBpbWcudXNlci1pbWctaWNvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcC5jYXJkLWJvbGQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaDMuY2FyZC1ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBwI2ZpcnN0LWNvbW1lbnQtaW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI0Mjg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/article-details/article-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/article-details/article-details.page.ts ***!
  \***************************************************************/
/*! exports provided: ArticleDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailsPage", function() { return ArticleDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_article_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/article-details.service */ "./src/app/api/article-details.service.ts");
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






var ArticleDetailsPage = /** @class */ (function () {
    function ArticleDetailsPage(events, toastr, loadingController, afDataBase, commonService, globalComp, alertCtrl, articleService) {
        this.events = events;
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.afDataBase = afDataBase;
        this.commonService = commonService;
        this.globalComp = globalComp;
        this.alertCtrl = alertCtrl;
        this.articleService = articleService;
        this.articleCommentObject = [];
        this.userComment = "";
        this.liked = false;
        this.newCommentObj = {};
        this.orderingCommentObj = [];
        this.articleCommentLen = 0;
        var articleObj = this.articleService.getArticleData();
        this.ArticleData = articleObj.data;
        this.articleLang = articleObj.lang;
        // call function to boost the view count
        this.articleCommentObject = this.ArticleData.comment;
        if (this.articleCommentObject != undefined || this.articleCommentObject != null) {
            this.articleCommentLen = this.getArticleCommentLen(this.articleCommentObject);
        }
        else {
            this.articleCommentLen = 0;
        }
    }
    ArticleDetailsPage.prototype.ngOnInit = function () {
    };
    ArticleDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ArticleDetailsPage');
    };
    ArticleDetailsPage.prototype.getArticleCommentLen = function (commentObj) {
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
    ArticleDetailsPage.prototype.postComment = function (articleIndex) {
        var _this = this;
        if (this.userComment == "" || this.userComment == undefined) {
            this.presentToast("Please type something...");
        }
        else {
            this.newCommentObj = {
                "comment": this.userComment,
                "userImg": this.globalComp.getUserImage(),
                "userName": this.globalComp.getUserName()
            };
            this.presentLoading('Posting comment...');
            this.afDataBase.database.ref("/articles/english").child(articleIndex).child('comment').push(this.newCommentObj)
                .then(function (data) {
                _this.afDataBase.database.ref("/articles/kannada").child(articleIndex).child('comment').push(_this.newCommentObj);
                _this.presentToast("Comment added");
                _this.articleCommentLen = _this.articleCommentLen + 1;
                _this.events.publish('getUpdatedArticle');
                _this.dismissLoader();
                _this.userComment = "";
                // Update the local comment object and call the load comment section in background
                //this.articleCommentObject.push(this.newCommentObj);
                _this.getNewComments().then(function (data) {
                    var newCommentsData = data;
                    _this.sortCommentObject(newCommentsData);
                });
            });
        }
    };
    ArticleDetailsPage.prototype.sortCommentObject = function (commentData) {
        var tempCommentObj;
        var tempComment = JSON.parse(JSON.stringify(commentData));
        commentData = [];
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
                commentData.push(tempComment[t_key]);
            }
        }
        else {
            commentData.push([]);
        }
        this.articleCommentObject = commentData;
    };
    ArticleDetailsPage.prototype.getNewComments = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afDataBase.database.ref("/articles/english").child(_this.ArticleData.id).child('comment').once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ArticleDetailsPage.prototype.totalComments = function (commentObj) {
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
    ArticleDetailsPage.prototype.addView = function () {
        var newView = parseInt(this.ArticleData.view) + 1;
        this.afDataBase.database.ref("/articles/english").child(this.ArticleData.id).child('view').transaction(function (view) {
            return view + 1;
        });
        this.afDataBase.database.ref("/articles/kannada").child(this.ArticleData.id).child('view').transaction(function (view) {
            return view + 1;
        });
    };
    ArticleDetailsPage.prototype.showPrompt = function (commentID) {
        return __awaiter(this, void 0, void 0, function () {
            var prompt;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Add your reply',
                            message: "",
                            inputs: [
                                {
                                    name: 'comment',
                                    placeholder: 'Comment'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        // console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Reply',
                                    handler: function (data) {
                                        // console.log('Saved clicked', data);
                                        if (data.comment != "") {
                                            _this.addChildComment(commentID, data.comment);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        prompt = _a.sent();
                        return [4 /*yield*/, prompt.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ArticleDetailsPage.prototype.addChildComment = function (id, comment) {
        var _this = this;
        var childComment = {
            "comment": comment,
            "userImg": this.globalComp.getUserImage(),
            "userName": this.globalComp.getUserName()
        };
        this.afDataBase.database.ref("/articles/english/" + this.ArticleData.id + "/comment").child(id).child('childComment').push(childComment)
            .then(function (data) {
            _this.afDataBase.database.ref("/articles/kannada/" + _this.ArticleData.id + "/comment").child(id).child('childComment').push(childComment).then(function (data) {
                _this.presentToast("Comment added");
                _this.articleCommentLen = _this.articleCommentLen + 1;
                for (var comment_key in _this.articleCommentObject) {
                    if (_this.articleCommentObject[comment_key].id == id) {
                        // below is the check to make sure we push to child comment object by creating it as an empty object in initiall push
                        if (_this.articleCommentObject[comment_key]['childComment'] == undefined) {
                            _this.articleCommentObject[comment_key]['childComment'] = [];
                            _this.articleCommentObject[comment_key]['childComment'].push(childComment);
                        }
                        else {
                            _this.articleCommentObject[comment_key]['childComment'].push(childComment);
                        }
                    }
                }
                _this.events.publish('getUpdatedArticle');
            });
        });
    };
    ArticleDetailsPage.prototype.presentLoading = function (msg) {
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
                        _a.articleDetailsLoader = _b.sent();
                        return [4 /*yield*/, this.articleDetailsLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleDetailsPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.articleDetailsLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleDetailsPage.prototype.presentToast = function (toastMsg) {
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
    ArticleDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-details',
            template: __webpack_require__(/*! ./article-details.page.html */ "./src/app/pages/article-details/article-details.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./article-details.page.scss */ "./src/app/pages/article-details/article-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _api_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _api_article_details_service__WEBPACK_IMPORTED_MODULE_5__["ArticleDetailsService"]])
    ], ArticleDetailsPage);
    return ArticleDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-article-details-article-details-module.js.map