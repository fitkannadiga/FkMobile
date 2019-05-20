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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Wellness Chat</ion-title>\n    </ion-toolbar>\n    <div id=\"progress-bar-wrapper\" *ngIf=\"percentage | async as pct\">\n        <ion-progress-bar color=\"green\" type=\"indeterminate\" buffer=\"0.2\" class=\"progress is-info\" [value]=\"pct/100\"></ion-progress-bar>\n    </div>\n</ion-header>\n\n<ion-content id=\"chat-app\" padding *ngIf=\"isClient\">\n    <div id=\"comment-wrapper\" *ngIf=\"!fakeChat\">\n        <div *ngFor=\"let comment of commentData\" [ngClass]=\"comment.userID == userID ? 'userClass' : 'adminClass'\">\n            <!-- <p class=\"msg-date\">{{getDateToDisplay(comment.time)}}</p> -->\n            <p class=\"msg-date\">{{comment.day}}</p>\n            <div class=\"chat-content-wrapper\">\n                <div class=\"message\" [innerHTML]=\"comment.message\" (click)=\"openImg(comment);\"></div>\n                <p class=\"time\">{{comment.time}}</p>\n                <!-- <p class=\"time\">{{timeDifference(comment.time)}}</p> -->\n            </div>\n        </div>\n    </div>\n    <div id=\"fake-chat\" *ngIf=\"fakeChat\">\n        <p class=\"left\"></p>\n        <p class=\"right\"></p>\n        <p class=\"left\"></p>\n        <p class=\"right\"></p>\n        <p class=\"right\"></p>\n        <p class=\"left\"></p>\n        <p class=\"left\"></p>\n        <p class=\"right\"></p>\n    </div>\n</ion-content>\n<ion-content *ngIf=\"!isClient\">\n    <div id=\"non-client-text\">\n        <ion-icon name=\"chatboxes\" color=\"success\"></ion-icon>\n        <p>Please contact admin for online coaching and chat support</p>\n    </div>\n</ion-content>\n<ion-footer *ngIf=\"isClient\">\n    <ion-toolbar>\n        <ion-row>\n            <ion-col id=\"text-area-wrapper\">\n                <!-- <ion-input placeholder=\"Type a message...\" id=\"diet-chat-message\" [(ngModel)]=\"userDietComment\"></ion-input> -->\n                <ion-textarea #myInput id=\"input-field\" (ionFocus)=\"scroll()\" rows=\"2\" (keyup)=\"showImageIcon()\" (ionBlur)=\"showImageIcon()\" placeholder=\"Type a message...\" id=\"diet-chat-message\" [(ngModel)]=\"userDietComment\"></ion-textarea>\n                <input id=\"file-uploader\" type=\"file\" (change)=\"uploadFile($event)\" name=\"Upload Image\" hidden accept=\"image/x-png,image/gif,image/jpeg\"/>\n                <div id=\"image-icon\" *ngIf=\"addImage\">\n                    <!-- <ion-icon name=\"camera\" (click)=\"openCamera();\"></ion-icon> -->\n                    <ion-icon name=\"attach\" (click)=\"openGallery();\"></ion-icon>\n                </div>\n            </ion-col>\n            <ion-col size=\"2\">\n                <!-- <ion-button color=\"primary\" shape=\"round\" icon-only (click)=\"addUserComment();\">\n                    <ion-icon name=\"send\"></ion-icon>\n                </ion-button> -->\n                <span id=\"send\" (click)=\"addUserComment();\">\n                    <ion-icon name=\"send\"></ion-icon>\n                </span>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>\n<div id=\"image-display-wrapper\" *ngIf=\"showImage\">\n    <!-- <p id=\"close\" (click)=\"closeImg()\">\n        <ion-icon name=\"close-circle\" color=\"primary\"></ion-icon>\n    </p> -->\n    <div id=\"data-wrapper\">\n        <ion-icon name=\"close-circle\" (click)=\"closeImg()\" color=\"primary\"></ion-icon>\n        <img id=\"user-img\" [src]=\"imgSrc\"/>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#comment-wrapper {\n  font-size: 0.9rem;\n  background-color: #ededed; }\n  div#comment-wrapper div.adminClass {\n    width: 100%;\n    float: left;\n    padding-bottom: 10px; }\n  div#comment-wrapper div.adminClass div.chat-content-wrapper {\n      min-width: 40%;\n      max-width: 70%;\n      float: left;\n      position: relative; }\n  div#comment-wrapper div.adminClass div.message {\n      background: #3B4EAC;\n      padding: 8px 15px;\n      border-radius: 0px 5px 5px;\n      margin-bottom: 0px;\n      color: #FFF;\n      box-shadow: 3px 6px 19px -2px rgba(0, 0, 0, 0.75); }\n  div#comment-wrapper div.adminClass div.message p {\n        margin: 0px !important; }\n  div#comment-wrapper div.adminClass div.message p a {\n          color: #3bac99 !important;\n          font-weight: bold; }\n  div#comment-wrapper div.adminClass div.message:after {\n      border-width: 0px 10px 10px 0;\n      border-color: transparent #3B4EAC transparent transparent;\n      top: 0;\n      left: -10px; }\n  div#comment-wrapper div.adminClass p.time {\n      padding: 3px 0px;\n      margin: 0px;\n      text-align: left;\n      opacity: 0.8;\n      font-size: 0.7rem; }\n  div#comment-wrapper div.userClass {\n    width: 100%;\n    float: right;\n    padding-bottom: 10px; }\n  div#comment-wrapper div.userClass div.chat-content-wrapper {\n      min-width: 40%;\n      max-width: 70%;\n      float: right;\n      position: relative; }\n  div#comment-wrapper div.userClass div.message {\n      background: #ededed;\n      padding: 8px 15px;\n      border-radius: 5px 0px 5px 5px;\n      margin-bottom: 0px;\n      color: #000;\n      box-shadow: 3px 6px 19px -2px rgba(0, 0, 0, 0.75); }\n  div#comment-wrapper div.userClass div.message p {\n        margin: 0px !important; }\n  div#comment-wrapper div.userClass div.message p a {\n          color: #7044ff !important;\n          font-weight: bold; }\n  div#comment-wrapper div.userClass div.message:after {\n      border-width: 0px 0 10px 10px;\n      border-color: transparent transparent transparent #ededed;\n      top: 0;\n      right: -10px; }\n  div#comment-wrapper div.userClass p.time {\n      padding: 3px 0px;\n      margin: 0px;\n      text-align: right;\n      opacity: 0.8;\n      font-size: 0.7rem; }\n  div#comment-wrapper div.message:after {\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    border-style: solid; }\n  div#comment-wrapper p.msg-date {\n    margin: 20px auto !important;\n    font-size: 0.7rem;\n    background-color: #90b8ff;\n    color: #000;\n    padding: 5px 6px 2px;\n    border-radius: 10px;\n    width: 40% !important;\n    text-align: center; }\n  div#comment-wrapper p.msg-date:empty {\n    display: none; }\n  div#fake-chat p {\n  display: block;\n  width: 70%;\n  height: 33px;\n  position: relative;\n  box-shadow: -9px 25px 44px -8px rgba(0, 0, 0, 0.75); }\n  div#fake-chat p.left {\n  float: left;\n  background: #3B4EAC;\n  border-radius: 0px 5px 5px; }\n  div#fake-chat p.left:after {\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #3B4EAC transparent transparent;\n  top: 0;\n  left: -10px; }\n  div#fake-chat p.right {\n  float: right;\n  background: #ededed;\n  border-radius: 5px 0px 5px 5px; }\n  div#fake-chat p.right:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #ededed;\n  top: 0;\n  right: -10px; }\n  div#fake-chat p:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid; }\n  div#non-client-text {\n  position: absolute;\n  padding: 20px;\n  bottom: 0;\n  top: 0;\n  margin: auto;\n  left: 0;\n  right: 0;\n  height: 300px;\n  text-align: center;\n  font-weight: bold; }\n  div#non-client-text ion-icon {\n    font-size: 5rem; }\n  ion-footer ion-col#text-area-wrapper {\n  position: relative; }\n  ion-footer ion-col#text-area-wrapper ion-textarea {\n    border: 1px solid #dcdcdc;\n    border-radius: 30px;\n    padding: 0px 20px 5px;\n    position: relative;\n    z-index: 999;\n    color: #000;\n    font-weight: bold; }\n  ion-footer ion-col#text-area-wrapper ion-textarea textarea {\n      padding: 0px !important;\n      font-size: 0.8rem;\n      margin-top: 10px;\n      margin-left: 0px; }\n  ion-footer ion-col#text-area-wrapper div#image-icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 14px;\n    font-size: 1.5rem;\n    z-index: 9999; }\n  ion-footer ion-col#text-area-wrapper div#image-icon ion-icon {\n      color: #414347;\n      padding: 0px 3px; }\n  ion-footer span#send {\n  background: #3B4EAC;\n  width: 40px;\n  height: 40px;\n  border-radius: 25px;\n  display: block;\n  text-align: center;\n  position: relative; }\n  ion-footer span#send ion-icon {\n    position: absolute;\n    left: 2px;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 25px;\n    height: 25px;\n    color: #fff;\n    margin: auto; }\n  ion-content#chat-app {\n  position: relative;\n  --background: #ccc url('bg8.png') repeat center center / cover; }\n  ion-header {\n  position: relative; }\n  ion-header div#progress-bar-wrapper {\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -3px;\n    z-index: 9999; }\n  div#image-display-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 1;\n  z-index: 9999; }\n  div#image-display-wrapper div#data-wrapper {\n    position: relative;\n    width: 100%;\n    height: 100%; }\n  div#image-display-wrapper div#data-wrapper ion-icon {\n      position: absolute;\n      font-size: 2rem;\n      right: 0;\n      top: 3vh;\n      padding-right: 10px;\n      z-index: 10000;\n      background-color: #FFF; }\n  div#image-display-wrapper div#data-wrapper img {\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBO0VBRjdCO0lBSVEsV0FBVztJQUNYLFdBQVc7SUFDWCxvQkFBb0IsRUFBQTtFQU41QjtNQVFZLGNBQWM7TUFDZCxjQUFjO01BQ2QsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBWDlCO01BY1ksbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQiwwQkFBMEI7TUFDMUIsa0JBQWtCO01BQ2xCLFdBQVc7TUFHWCxpREFBOEMsRUFBQTtFQXJCMUQ7UUF1QmdCLHNCQUFzQixFQUFBO0VBdkJ0QztVQXlCb0IseUJBQXlCO1VBQ3pCLGlCQUFpQixFQUFBO0VBMUJyQztNQStCWSw2QkFBNkI7TUFDN0IseURBQXlEO01BQ3pELE1BQU07TUFDTixXQUFXLEVBQUE7RUFsQ3ZCO01BcUNZLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixpQkFBaUIsRUFBQTtFQXpDN0I7SUE2Q1EsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0IsRUFBQTtFQS9DNUI7TUFpRFksY0FBYztNQUNkLGNBQWM7TUFDZCxZQUFZO01BQ1osa0JBQWtCLEVBQUE7RUFwRDlCO01BdURZLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsOEJBQThCO01BQzlCLGtCQUFrQjtNQUNsQixXQUFXO01BR1gsaURBQThDLEVBQUE7RUE5RDFEO1FBZ0VnQixzQkFBc0IsRUFBQTtFQWhFdEM7VUFrRW9CLHlCQUF5QjtVQUN6QixpQkFBaUIsRUFBQTtFQW5FckM7TUF3RVksNkJBQTZCO01BQzdCLHlEQUF5RDtNQUN6RCxNQUFNO01BQ04sWUFBWSxFQUFBO0VBM0V4QjtNQThFWSxnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osaUJBQWlCLEVBQUE7RUFsRjdCO0lBc0ZRLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUIsRUFBQTtFQTFGM0I7SUE2RlEsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFFekIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VBckcxQjtJQXdHUSxhQUFhLEVBQUE7RUFJckI7RUFFUSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFHbEIsbURBQWdELEVBQUE7RUFSeEQ7RUFXUSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBO0VBYmxDO0VBZ0JRLDZCQUE2QjtFQUM3Qix5REFBeUQ7RUFDekQsTUFBTTtFQUNOLFdBQVcsRUFBQTtFQW5CbkI7RUFzQlEsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQXhCdEM7RUEyQlEsNkJBQTZCO0VBQzdCLHlEQUF5RDtFQUN6RCxNQUFNO0VBQ04sWUFBWSxFQUFBO0VBOUJwQjtFQWlDUSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CLEVBQUE7RUFJM0I7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxNQUFNO0VBQ04sWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQVZyQjtJQVlRLGVBQWUsRUFBQTtFQUl2QjtFQUVRLGtCQUFrQixFQUFBO0VBRjFCO0lBSVkseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFWN0I7TUFZZ0IsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUE7RUFmaEM7SUFtQlksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhLEVBQUE7RUF4QnpCO01BMEJnQixjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7RUEzQmhDO0VBZ0NRLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0VBdEMxQjtJQXdDWSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVksRUFBQTtFQUt4QjtFQUNJLGtCQUFrQjtFQUNsQiw4REFBYSxFQUFBO0VBR2pCO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFHUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBSXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBRVosc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixhQUFhLEVBQUE7RUFQakI7SUFnQlEsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFsQnBCO01Bb0JZLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsUUFBUTtNQUNSLFFBQVE7TUFDUixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLHNCQUFzQixFQUFBO0VBMUJsQztNQTZCWSxrQkFBa0I7TUFDbEIsT0FBTztNQUNQLFFBQVE7TUFDUixNQUFNO01BQ04sU0FBUztNQUNULFlBQVk7TUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I2NvbW1lbnQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgICBkaXYuYWRtaW5DbGFzcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGRpdi5jaGF0LWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2Lm1lc3NhZ2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNCNEVBQztcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDZweCAxOXB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDZweCAxOXB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCA2cHggMTlweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNiYWM5OSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2Lm1lc3NhZ2U6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMzQjRFQUMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgfVxuICAgICAgICBwLnRpbWUge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpdi51c2VyQ2xhc3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgZGl2LmNoYXQtY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2Lm1lc3NhZ2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCA1cHggNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA2cHggMTlweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDNweCA2cHggMTlweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggNnB4IDE5cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDQ0ZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpdi5tZXNzYWdlOmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDAgMTBweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZWRlZGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAudGltZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpdi5tZXNzYWdlOmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgICBwLm1zZy1kYXRlIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGI4ZmY7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMzYmFjOTk7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggNnB4IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIHAubXNnLWRhdGU6ZW1wdHkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuZGl2I2Zha2UtY2hhdCB7XG4gICAgcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtOXB4IDI1cHggNDRweCAtOHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogLTlweCAyNXB4IDQ0cHggLThweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICBib3gtc2hhZG93OiAtOXB4IDI1cHggNDRweCAtOHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgfVxuICAgIHAubGVmdCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM0I0RUFDO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweDtcbiAgICB9XG4gICAgcC5sZWZ0OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzNCNEVBQyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICB9XG4gICAgcC5yaWdodCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCA1cHggNXB4O1xuICAgIH1cbiAgICBwLnJpZ2h0OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2VkZWRlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgfVxuICAgIHA6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgfVxufVxuXG5kaXYjbm9uLWNsaWVudC10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgaW9uLWNvbCN0ZXh0LWFyZWEtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHggNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2I2ltYWdlLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0MzQ3O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3BhbiNzZW5kIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzNCNEVBQztcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH0gXG4gICAgfVxufVxuXG5pb24tY29udGVudCNjaGF0LWFwcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC0tYmFja2dyb3VuZDogI2NjYyB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmc4LnBuZycpIHJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbmlvbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXYjcHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IC0zcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgfVxufVxuXG5kaXYjaW1hZ2UtZGlzcGxheS13cmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy8gcCB7XG4gICAgLy8gICAgIGlvbi1pY29uIHtcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAvLyAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAvLyAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgZGl2I2RhdGEtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDN2aDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

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
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ChatPage(clientService, loadingController, toastr, afDataBase, globlaComp, commonService, camera, storage, crop, platform, router) {
        var _this = this;
        this.clientService = clientService;
        this.loadingController = loadingController;
        this.toastr = toastr;
        this.afDataBase = afDataBase;
        this.globlaComp = globlaComp;
        this.commonService = commonService;
        this.camera = camera;
        this.storage = storage;
        this.crop = crop;
        this.platform = platform;
        this.router = router;
        this.commentData = [];
        this.previousDate = "";
        this.fakeChat = true;
        this.addImage = true;
        this.showImage = false;
        this.imgSrc = '';
        // For comment time and date
        this.presentDate = '';
        this.presentMonth = '';
        this.presentYear = '';
        // below variables used to make the chat faster
        this.presentChatBubbleCount = 0;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.userID = window.localStorage.getItem('authID');
        this.presentDate = new Date().getDate();
        var month = new Date().getMonth();
        this.presentMonth = this.getMonth(month);
        this.presentYear = new Date().getFullYear();
        console.log("today>>", this.presentDate + "-" + this.presentMonth + "-" + this.presentYear);
        // the below user data should be a fresh call always to avoid conflicts
        this.userID = window.localStorage.getItem('authID');
        this.commonService.getprofile(this.userID).then(function (data) {
            _this.userData = data;
            // console.log("user data in custom diet", this.userData);
            _this.isClient = (_this.userData.client == true) ? true : false;
            if (_this.isClient) {
                _this.getComments();
                // this.loadSavedComments();
            }
        });
        //  register back button to hide the overlay images if shown
        this.platform.backButton.subscribe(function (data) {
            if (_this.router.url.indexOf('chat') > -1) {
                if (_this.showImage) {
                    _this.showImage = false;
                }
            }
        });
    }
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage.prototype.getMonth = function (month) {
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[month];
    };
    ChatPage.prototype.getComments = function () {
        var _this = this;
        // subscribe to the client comment object
        this.subscription = this.afDataBase.list('/client/' + this.userID + '/chats/comment').valueChanges().subscribe(function (data) {
            // this.commonService.getComments('/client/'+this.userID+'/chats/comment').then(data => {
            console.log("comments", data);
            // this.commentData = data;
            if (_this.presentChatBubbleCount == 0) {
                _this.setComments(data);
                _this.presentChatBubbleCount = data.length;
            }
            else {
                // push the data to the chat if the user is already present on chat page
                _this.addCommentsToObj(data);
            }
            _this.fakeChat = false;
            setTimeout(function () {
                _this.content.scrollToBottom(0);
            }, 1000);
        }, function (err) {
            this.fakeChat = false;
            this.presentToast('No Chat to display');
        });
        this.clearNotification();
    };
    ChatPage.prototype.addCommentsToObj = function (data) {
        var _this = this;
        var tempChatCount = this.presentChatBubbleCount;
        console.log("tempChatCount OLD>>>", tempChatCount);
        // take only extra caht objects
        var newChatBubbleLen = data.length;
        console.log("newChatBubbleLen OLD>>>", newChatBubbleLen);
        var newChat = data.slice(tempChatCount, newChatBubbleLen);
        // set the new chat length to the data length
        this.presentChatBubbleCount = data.length;
        console.log("new chatssss", newChat);
        newChat.forEach(function (chat) {
            _this.commentData.push({
                'userID': chat.userID,
                'message': chat.message,
                'day': _this.getDateToDisplay(chat.time),
                'time': _this.timeDifference(chat.time)
            });
        });
    };
    ChatPage.prototype.setComments = function (data) {
        var _this = this;
        this.commentData = data.map(function (comment) {
            return {
                'userID': comment.userID,
                'message': comment.message,
                'day': _this.getDateToDisplay(comment.time),
                'time': _this.timeDifference(comment.time)
            };
        });
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
    ChatPage.prototype.goBottom = function () {
        this.content.scrollToBottom(0);
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () { return _this.content.scrollToBottom(0); }, 1000);
    };
    ChatPage.prototype.scroll = function () {
        this.addImage = (this.userDietComment.trim().length > 0) ? false : true;
        this.content.scrollToBottom(0);
    };
    ChatPage.prototype.showImageIcon = function () {
        console.log("blur called");
        this.addImage = (this.userDietComment.trim().length > 0) ? false : true;
    };
    // openCamera(){
    //   this.camera.getPicture(this.options).then((imageData) => {
    //     // imageData is either a base64 encoded string or a file URI
    //     // If it's base64 (DATA_URL):
    //     let base64Image = 'data:image/jpeg;base64,' + imageData;
    //     console.log("image data from upload>>>>", imageData);
    //    }, (err) => {
    //     // Handle error
    //    });
    // }
    ChatPage.prototype.openGallery = function () {
        document.getElementById('file-uploader').click();
    };
    // function to upload image from gallery which can be extended to all files
    ChatPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        console.log("file data >>>>", file);
        // const fileRef = this.storage.ref(this.filePath);
        // The storage path
        var path = "chatImages/" + this.userID + "/" + file.name;
        // Totally optional metadata
        var customMetadata = { app: 'Fit Kannadiga' };
        // The main task
        this.task = this.storage.upload(path, file, { customMetadata: customMetadata });
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.task.percentageChanges().subscribe(function (data) {
            console.log("percentage data image upload>>", data);
            if (data == 100) {
                // Push the chat message so that user can see the progress also with image upload
                setTimeout(function () {
                    _this.adduserImage(file.name);
                    _this.percentage = null;
                }, 1000);
            }
        });
    };
    ChatPage.prototype.loadImageAgain = function (event) {
        var _this = this;
        console.log("loadImageAgain event", event);
        setTimeout(function () { return _this.reloadImg(event); }, 1000);
    };
    ChatPage.prototype.reloadImg = function (event) {
        var source = event.src;
        event.src = source;
        console.log("source changed to", event.src);
    };
    ChatPage.prototype.adduserImage = function (fileName) {
        var _this = this;
        // post the comment with image tag
        var comment = '<img onerror="loadImageAgain($event);" class="user-img" src="https://firebasestorage.googleapis.com/v0/b/fit-kannadiga.appspot.com/o/chatImages%2F' + this.userID + '%2F' + fileName + '?alt=media"/>';
        var timeNow = new Date();
        // console.log("present Date", timeNow);
        var newCommentObj = {
            "time": JSON.stringify(timeNow),
            "message": comment,
            "userID": this.userID
        };
        this.afDataBase.database.ref("/client/" + this.userID).child('chats').child('comment').push(newCommentObj)
            .then(function (data) {
            // after adding comment, focus on the comment or move to bottom of the page
            setTimeout(function () { return _this.content.scrollToBottom(0); }, 1000);
            _this.addAdminNotification();
            _this.userDietComment = "";
        });
    };
    ChatPage.prototype.addUserComment = function () {
        var _this = this;
        if (this.userDietComment.trim() != '') {
            // post the comment
            var comment = '<p>' + this.userDietComment + '</p>';
            var timeNow = new Date();
            // console.log("present Date", timeNow);
            var newCommentObj = {
                "time": JSON.stringify(timeNow),
                "message": this.urlify(comment),
                "userID": this.userID
            };
            this.afDataBase.database.ref("/client/" + this.userID).child('chats').child('comment').push(newCommentObj)
                .then(function (data) {
                // after adding comment, focus on the comment or move to bottom of the page
                setTimeout(function () { return _this.content.scrollToBottom(0); }, 200);
                _this.addAdminNotification();
                _this.userDietComment = "";
            });
        }
    };
    ChatPage.prototype.urlify = function (text) {
        var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
        return text.replace(urlRegex, function (url) {
            return '<a target="_blank" href="' + url + '">' + url + '</a>';
        });
    };
    ChatPage.prototype.timeDifference = function (postedDate) {
        // debugger;
        // this.today = new Date();
        // this.postedDate = new Date(JSON.parse(postedDate));
        // var diffMs = (this.today - this.postedDate);
        // var diffDays = Math.floor(diffMs / 86400000); // days
        // var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        // var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        // if(diffDays > 0){
        //   return diffDays +" days";
        // } else if(diffHrs > 0){
        //   return diffHrs +" hrs";
        // } else if(diffMins > 0){
        //   return diffMins +" min";
        // } else {
        //   return ""
        // }
        var day = new Date(JSON.parse(postedDate)).getDate();
        var month = this.getMonth(new Date(JSON.parse(postedDate)).getMonth());
        var year = new Date(JSON.parse(postedDate)).getFullYear();
        var time = this.getTime(postedDate);
        var setDate = (this.previousDate == (day + " " + month)) ? false : true;
        console.log("previousDate>>>", this.previousDate);
        console.log("present dae>>>", day + " " + month);
        this.previousDate = day + " " + month;
        // if date is same, then return only once
        if (setDate) {
            if (year == this.presentYear) {
                if (month == this.presentMonth) {
                    if (day == this.presentDate) {
                        return time;
                    }
                    else {
                        return day + " " + month + " " + time;
                    }
                }
                else {
                    return day + " " + month + " " + time;
                }
            }
            else {
                return day + " " + month + " " + year;
            }
        }
        else {
            return time;
        }
    };
    ChatPage.prototype.getDateToDisplay = function (postedDate) {
        var day = new Date(JSON.parse(postedDate)).getDate();
        var month = this.getMonth(new Date(JSON.parse(postedDate)).getMonth());
        var year = new Date(JSON.parse(postedDate)).getFullYear();
        var time = this.getTime(postedDate);
        var setDate = (this.previousDate == (day + " " + month)) ? false : true;
        console.log("previousDate>>>", this.previousDate);
        console.log("present dae>>>", day + " " + month);
        this.previousDate = day + " " + month;
        // if date is same, then return only once
        if (setDate) {
            return day + " " + month + " " + year;
        }
    };
    ChatPage.prototype.getTime = function (data) {
        var hours = new Date(JSON.parse(data)).getHours();
        var mins = new Date(JSON.parse(data)).getMinutes();
        if (hours > 12) {
            return (hours - 12) + ":" + ((mins < 10) ? '0' + mins : mins) + " PM";
        }
        else if (hours == 12) {
            return hours + ":" + ((mins < 10) ? '0' + mins : mins) + " PM";
        }
        else {
            return hours + ":" + ((mins < 10) ? '0' + mins : mins) + " AM";
        }
    };
    ChatPage.prototype.openImg = function (commentData) {
        console.log('comment Data', commentData);
        var msg = commentData.message;
        var htmlObject = document.createElement('div');
        htmlObject.innerHTML = msg;
        if (htmlObject.firstElementChild.tagName == 'IMG') {
            // open the image in the popup
            this.imgSrc = htmlObject.firstElementChild.getAttribute('src');
            console.log("imgSrc direct", this.imgSrc);
            console.log("imgSrc value", this.imgSrc['value']);
            this.showImage = true;
        }
        else {
            this.imgSrc = "";
            this.showImage = false;
        }
    };
    ChatPage.prototype.closeImg = function () {
        this.showImage = false;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myInput'),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "myInput", void 0);
    ChatPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/pages/chat/chat.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_client_data_service__WEBPACK_IMPORTED_MODULE_1__["ClientDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _api_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__["Crop"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module.js.map