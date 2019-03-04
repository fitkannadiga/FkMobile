(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"],{

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/chat/chat.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Fitness Chat Support</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"isClient\">\n    <div id=\"comment-wrapper\">\n        <div *ngFor=\"let comment of commentData\" [ngClass]=\"comment.userID == userID ? 'userClass' : 'adminClass'\">\n            <p class=\"message\">\n                {{comment.message}}\n            </p>\n            <p class=\"time\">{{timeDifference(comment.time)}}</p>\n        </div>\n    </div>\n</ion-content>\n<ion-content *ngIf=\"!isClient\">\n    <div id=\"non-client-text\">\n        <ion-icon name=\"chatboxes\" color=\"success\"></ion-icon>\n        <p>Please contact admin for online coaching and chat support</p>\n    </div>\n</ion-content>\n<ion-footer *ngIf=\"isClient\">\n    <ion-toolbar>\n        <ion-row>\n            <ion-col id=\"text-area-wrapper\">\n                <!-- <ion-input placeholder=\"Type a message...\" id=\"diet-chat-message\" [(ngModel)]=\"userDietComment\"></ion-input> -->\n                <ion-textarea placeholder=\"Type a message...\" id=\"diet-chat-message\" [(ngModel)]=\"userDietComment\"></ion-textarea>\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-button color=\"primary\" icon-only (click)=\"addUserComment();\">\n                    <ion-icon name=\"send\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.adminClass {\n  width: 80%;\n  float: left; }\n  div.adminClass p.message {\n    background: #3880ff;\n    padding: 8px 15px;\n    border-radius: 15px;\n    margin-bottom: 0px; }\n  div.adminClass p.time {\n    padding: 0px;\n    margin: 0px;\n    text-align: left;\n    opacity: 0.8;\n    font-size: 0.7rem; }\n  div.userClass {\n  width: 80%;\n  float: right; }\n  div.userClass p.message {\n    background: #dcdcdc;\n    padding: 8px 15px;\n    border-radius: 15px;\n    margin-bottom: 0px; }\n  div.userClass p.time {\n    padding: 0px;\n    margin: 0px;\n    text-align: right;\n    opacity: 0.8;\n    font-size: 0.7rem; }\n  div#non-client-text {\n  position: absolute;\n  padding: 20px;\n  bottom: 0;\n  top: 0;\n  margin: auto;\n  left: 0;\n  right: 0;\n  height: 300px;\n  text-align: center;\n  font-weight: bold; }\n  div#non-client-text ion-icon {\n    font-size: 5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFdBQVcsRUFBQTtFQUZmO0lBSVEsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFQMUI7SUFVUSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFJekI7RUFDSSxVQUFVO0VBQ1YsWUFBWSxFQUFBO0VBRmhCO0lBSVEsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFQMUI7SUFVUSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFJekI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxNQUFNO0VBQ04sWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQVZyQjtJQVlRLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYWRtaW5DbGFzcyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwLm1lc3NhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICBwLnRpbWUge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbn1cblxuZGl2LnVzZXJDbGFzcyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcC5tZXNzYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2RjZGNkYztcbiAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgcC50aW1lIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxufVxuXG5kaXYjbm9uLWNsaWVudC10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_client_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/client-data.service */ "./src/app/api/client-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
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







var ChatPage = /** @class */ (function () {
    function ChatPage(clientService, loadingController, toastr, afDataBase, globlaComp, commonService) {
        var _this = this;
        this.clientService = clientService;
        this.loadingController = loadingController;
        this.toastr = toastr;
        this.afDataBase = afDataBase;
        this.globlaComp = globlaComp;
        this.commonService = commonService;
        this.userID = window.localStorage.getItem('authID');
        // the below user data should be a fresh call always to avoid conflicts
        this.userID = window.localStorage.getItem('authID');
        this.commonService.getprofile(this.userID).then(function (data) {
            _this.userData = data;
            // console.log("user data in custom diet", this.userData);
            _this.isClient = (_this.userData.client == true) ? true : false;
            if (_this.isClient) {
                _this.getComments();
            }
        });
    }
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage.prototype.getComments = function () {
        var _this = this;
        // subscribe to the client comment object
        this.subscription = this.afDataBase.list('/client/' + this.userID + '/chats/comment').valueChanges().subscribe(function (data) {
            _this.commentData = data;
            setTimeout(function () {
                _this.content.scrollToBottom();
            }, 1000);
        });
        this.clearNotification();
    };
    ChatPage.prototype.clearNotification = function () {
        this.afDataBase.database.ref("/client/" + this.userID + "/chats").child('adminMsgCount').transaction(function () {
            return 0;
        });
    };
    ChatPage.prototype.addAdminNotification = function () {
        this.afDataBase.database.ref("/client/" + this.userID + "/chats").child('userMsgCount').transaction(function (userMsgCount) {
            return userMsgCount + 1;
        });
    };
    ChatPage.prototype.addUserComment = function () {
        var _this = this;
        if (this.userDietComment.trim() != '') {
            // post the comment
            var timeNow = new Date();
            // console.log("present Date", timeNow);
            var newCommentObj = {
                "time": JSON.stringify(timeNow),
                "message": this.userDietComment,
                "userID": this.userID
            };
            this.afDataBase.database.ref("/client/" + this.userID).child('chats').child('comment').push(newCommentObj)
                .then(function (data) {
                // after adding comment, focus on the comment or move to bottom of the page
                _this.content.scrollToBottom();
                _this.addAdminNotification();
                _this.userDietComment = "";
            });
        }
    };
    ChatPage.prototype.timeDifference = function (postedDate) {
        this.today = new Date();
        this.postedDate = new Date(JSON.parse(postedDate));
        var diffMs = (this.today - this.postedDate);
        var diffDays = Math.floor(diffMs / 86400000); // days
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        if (diffDays > 0) {
            return diffDays + " days";
        }
        else if (diffHrs > 0) {
            return diffHrs + " hrs";
        }
        else if (diffMins > 0) {
            return diffMins + " min";
        }
        else {
            return "";
        }
    };
    ChatPage.prototype.presentLoading = function (msg) {
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
                        _a.chatLoader = _b.sent();
                        return [4 /*yield*/, this.chatLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.presentToast = function (toastMsg) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/pages/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_client_data_service__WEBPACK_IMPORTED_MODULE_1__["ClientDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _api_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module.js.map