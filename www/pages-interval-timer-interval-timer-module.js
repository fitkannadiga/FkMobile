(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interval-timer-interval-timer-module"],{

/***/ "./src/app/pages/interval-timer/interval-timer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/interval-timer/interval-timer.module.ts ***!
  \***************************************************************/
/*! exports provided: IntervalTimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalTimerPageModule", function() { return IntervalTimerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interval_timer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interval-timer.page */ "./src/app/pages/interval-timer/interval-timer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _interval_timer_page__WEBPACK_IMPORTED_MODULE_5__["IntervalTimerPage"]
    }
];
var IntervalTimerPageModule = /** @class */ (function () {
    function IntervalTimerPageModule() {
    }
    IntervalTimerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_interval_timer_page__WEBPACK_IMPORTED_MODULE_5__["IntervalTimerPage"]]
        })
    ], IntervalTimerPageModule);
    return IntervalTimerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/interval-timer/interval-timer.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/interval-timer/interval-timer.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Interval Timer</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"timer-content-wrapper\" padding *ngIf=\"!changeDisplay\">\n    <div id=\"timer-wrapper\">\n        <div id=\"set-wrapper\">\n            <ion-row>\n                <ion-col>Sets</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5 (press)=\"removeSetsInterval()\" (pressup)=\"stopSetsInterval()\" (click)=\"remove('setCount')\" text-right>\n                    <ion-icon name=\"remove-circle\"></ion-icon>\n                </ion-col>\n                <ion-col col-2 text-center>{{setCount}}</ion-col>\n                <ion-col col-5 (press)=\"addSetsInterval()\" (pressup)=\"stopSetsInterval()\" (click)=\"add('setCount')\" text-left>\n                    <ion-icon name=\"add-circle\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div id=\"interval-wrapper\">\n            <ion-row>\n                <ion-col>Workout Interval (sec)</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5 (press)=\"removeWorkoutInterval()\" (pressup)=\"stopWorkoutInterval()\" (click)=\"remove('intervalCount')\" text-right>\n                    <ion-icon name=\"remove-circle\"></ion-icon>\n                </ion-col>\n                <ion-col col-2 text-center>{{intervalCount}}</ion-col>\n                <ion-col col-5 (press)=\"addWorkoutInterval()\" (pressup)=\"stopWorkoutInterval()\" (click)=\"add('intervalCount')\" text-left>\n                    <ion-icon name=\"add-circle\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div id=\"set-wrapper\">\n            <ion-row>\n                <ion-col>Rest Interval (sec)</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5 (press)=\"removeRestInterval()\" (pressup)=\"stopRestInterval()\" (click)=\"remove('restCount')\" text-right>\n                    <ion-icon name=\"remove-circle\"></ion-icon>\n                </ion-col>\n                <ion-col col-2 text-center>{{restCount}}</ion-col>\n                <ion-col col-5 (press)=\"addRestInterval()\" (pressup)=\"stopRestInterval()\" (click)=\"add('restCount')\" text-left>\n                    <ion-icon name=\"add-circle\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </div>\n        <ion-button id=\"start-btn\" color=\"primary\" size=\"medium\" shape=\"round\" (click)=\"initTimer();\">Start Workout</ion-button>\n    </div>\n</ion-content>\n<div id=\"timer-map\" *ngIf=\"changeDisplay\" [ngStyle]=\"{'background-color': bgColor}\">\n    <p id=\"blink-text\">{{timerText}}</p>\n    <div id=\"counter\">\n        <p>Sets Remaining<br/><strong id=\"set\">{{tempSet}}</strong></p>\n        <p>Exercise Interval Left<br/><strong id=\"interval\">{{tempInterval}}</strong> sec</p>\n        <p>Rest Time Left<br/><strong id=\"rest\">{{tempRest}} sec</strong></p>\n        <p text-center class=\"fk-paddingTop-1\" id=\"stop-play-icon\">\n            <ion-icon [name]=\"statusChange\" (click)=\"playPauseTimer();\"></ion-icon>\n            <ion-icon name=\"close-circle\" (click)=\"exitTimer();\"></ion-icon>\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/interval-timer/interval-timer.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/interval-timer/interval-timer.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  margin-top: 100px !important;\n  padding: 0px !important;\n  font-size: 1.5rem;\n  text-align: center; }\n  ion-content div#timer-wrapper {\n    margin-top: 25%; }\n  ion-content div#timer-wrapper div {\n      padding: 10px 0px; }\n  ion-content button#start-btn {\n    margin-top: 20px; }\n  div#timer-map {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 9999; }\n  div#timer-map p#blink-text {\n    -webkit-animation: blinkingText 2s infinite;\n            animation: blinkingText 2s infinite;\n    font-size: 3rem;\n    position: absolute;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    font-family: fantasy; }\n  div#timer-map #counter {\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    display: block;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 380px;\n    text-align: center;\n    font-size: 1.8rem; }\n  div#timer-map #counter p {\n      margin-top: 0px !important; }\n  div#timer-map #counter p#stop-play-icon {\n      font-size: 2rem;\n      padding: 15px;\n      background-color: #FFF;\n      border-radius: 10px;\n      margin: 0px 5px; }\n  div#timer-map #counter ion-row {\n      display: block; }\n  div#timer-map #counter #interval {\n      font-size: 4rem; }\n  div#timer-map #counter #set,\n    div#timer-map #counter #rest {\n      color: #184E98; }\n  @-webkit-keyframes blinkingText {\n  0% {\n    color: #000; }\n  25% {\n    color: #184E98; }\n  50% {\n    color: transparent; }\n  75% {\n    color: #184E98; }\n  100% {\n    color: #000; } }\n  @keyframes blinkingText {\n  0% {\n    color: #000; }\n  25% {\n    color: #184E98; }\n  50% {\n    color: transparent; }\n  75% {\n    color: #184E98; }\n  100% {\n    color: #000; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9pbnRlcnZhbC10aW1lci9pbnRlcnZhbC10aW1lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQUp0QjtJQU1RLGVBQWUsRUFBQTtFQU52QjtNQVFZLGlCQUFpQixFQUFBO0VBUjdCO0lBWVEsZ0JBQWdCLEVBQUE7RUFJeEI7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFFbEIsYUFBYSxFQUFBO0VBTmpCO0lBUVEsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG9CQUFvQixFQUFBO0VBZDVCO0lBaUJRLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixjQUFjO0lBQ2QsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQTNCekI7TUE2QlksMEJBQTBCLEVBQUE7RUE3QnRDO01BZ0NZLGVBQWU7TUFDZixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7RUFwQzNCO01BdUNZLGNBQWMsRUFBQTtFQXZDMUI7TUEwQ1ksZUFBZSxFQUFBO0VBMUMzQjs7TUE4Q1ksY0FBYyxFQUFBO0VBSzFCO0VBQ0k7SUFDSSxXQUFXLEVBQUE7RUFFZjtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGtCQUFrQixFQUFBO0VBRXRCO0lBQ0ksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksV0FBVyxFQUFBLEVBQUE7RUFkbkI7RUFDSTtJQUNJLFdBQVcsRUFBQTtFQUVmO0lBQ0ksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxXQUFXLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVydmFsLXRpbWVyL2ludGVydmFsLXRpbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXYjdGltZXItd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbiNzdGFydC1idG4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cblxuZGl2I3RpbWVyLW1hcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFEMTMzO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgcCNibGluay10ZXh0IHtcbiAgICAgICAgYW5pbWF0aW9uOiBibGlua2luZ1RleHQgMnMgaW5maW5pdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG4gICAgfVxuICAgICNjb3VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIHAjc3RvcC1wbGF5LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgI2ludGVydmFsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgfVxuICAgICAgICAjc2V0LFxuICAgICAgICAjcmVzdCB7XG4gICAgICAgICAgICBjb2xvcjogIzE4NEU5ODtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBibGlua2luZ1RleHQge1xuICAgIDAlIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIGNvbG9yOiAjMTg0RTk4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIGNvbG9yOiAjMTg0RTk4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/interval-timer/interval-timer.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/interval-timer/interval-timer.page.ts ***!
  \*************************************************************/
/*! exports provided: IntervalTimerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalTimerPage", function() { return IntervalTimerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ "./node_modules/@ionic-native/insomnia/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntervalTimerPage = /** @class */ (function () {
    function IntervalTimerPage(tts, insomnia) {
        this.tts = tts;
        this.insomnia = insomnia;
        // @ViewChild(Navbar) navBar: Navbar;
        this.timerText = "Ready";
        this.bgColor = '#FAD133';
        this.setCount = 0;
        this.intervalCount = 0;
        this.restCount = 0;
        this.changeDisplay = true;
        this.statusChange = 'pause';
        this.tempSet = 0;
        this.tempInterval = 0;
        this.tempRest = 0;
    }
    IntervalTimerPage.prototype.ngOnInit = function () {
        // this.navBar.backButtonClick = (e:UIEvent)=>{
        //   console.log("BACK CLICKED");
        //   // todo something
        //   // clear the timers and stop everything
        //   this.stopTimeApp();
        //   this.tempRest = 0;
        //   this.SetTimer = 0;
        //   this.RestTimer = 0;
        //   this.navCtrl.pop();
        // }
    };
    IntervalTimerPage.prototype.ionViewDidLoad = function () {
    };
    IntervalTimerPage.prototype.initTimer = function () {
        // validate the timers for zeros in the sets/interval/rest
        if (this.setCount == 0) {
            this.readMessage("Please select sets you want to perform!");
        }
        else if (this.intervalCount == 0) {
            this.readMessage("oops, you forgot to select interval time!");
        }
        else {
            this.bgColor = '#FAD133';
            this.statusChange = 'pause';
            this.changeDisplay = true;
            this.insomnia.keepAwake();
            this.tempSet = this.setCount;
            this.tempInterval = this.intervalCount;
            this.tempRest = this.restCount;
            this.readMessage('Your workout begins in');
            this.beginWorkoutMsg();
        }
    };
    IntervalTimerPage.prototype.beginWorkoutMsg = function () {
        var _this = this;
        setTimeout(function () {
            _this.readMessage(3);
            setTimeout(function () {
                _this.readMessage(2);
                setTimeout(function () {
                    _this.readMessage(1);
                    _this.beep();
                    setTimeout(function () {
                        _this.startTimerApp();
                    }, 1000);
                }, 1500);
            }, 1500);
        }, 1500);
    };
    IntervalTimerPage.prototype.readMessage = function (message) {
        // var msg = new SpeechSynthesisUtterance(message);
        // var voices = window.speechSynthesis.getVoices();
        // msg.voice = voices[1];
        // // msg.voiceURI = "native";
        // msg.volume = 1;
        // msg.rate = 1;
        // msg.pitch = 0.8;
        // msg.text = message;
        // msg.lang = 'en-US';
        // speechSynthesis.speak(msg);
        this.tts.speak({
            text: message,
            rate: 1,
            locale: 'en-US'
        }).then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    IntervalTimerPage.prototype.remove = function (itemName) {
        if (itemName == 'setCount') {
            (itemName == 'setCount' && this.setCount == 0) ? (this.setCount = 0) : (this.setCount--);
        }
        if (itemName == 'intervalCount') {
            (itemName == 'intervalCount' && this.intervalCount == 0) ? (this.intervalCount = 0) : (this.intervalCount--);
        }
        if (itemName == 'restCount') {
            (itemName == 'restCount' && this.restCount == 0) ? (this.restCount = 0) : (this.restCount--);
        }
    };
    IntervalTimerPage.prototype.add = function (itemName) {
        if (itemName == 'setCount') {
            (itemName == 'setCount' && this.setCount == 30) ? (this.setCount = 30) : (this.setCount++);
        }
        if (itemName == 'intervalCount') {
            (itemName == 'intervalCount' && this.intervalCount == 120) ? (this.intervalCount = 120) : (this.intervalCount++);
        }
        if (itemName == 'restCount') {
            (itemName == 'restCount' && this.restCount == 90) ? (this.restCount = 90) : (this.restCount++);
        }
    };
    // Press and hold action for sets
    IntervalTimerPage.prototype.removeSetsInterval = function () {
        var self = this;
        this.setInterval = setInterval(function () {
            if (self.setCount > 0) {
                self.setCount = self.setCount - 1;
            }
        }, 50);
    };
    IntervalTimerPage.prototype.addSetsInterval = function () {
        var self = this;
        this.setInterval = setInterval(function () {
            self.setCount = self.setCount + 1;
        }, 50);
    };
    IntervalTimerPage.prototype.stopSetsInterval = function () {
        clearInterval(this.setInterval);
    };
    // Press and hold action for workout
    IntervalTimerPage.prototype.removeWorkoutInterval = function () {
        var self = this;
        this.workoutInterval = setInterval(function () {
            if (self.intervalCount > 0) {
                self.intervalCount = self.intervalCount - 1;
            }
        }, 50);
    };
    IntervalTimerPage.prototype.addWorkoutInterval = function () {
        var self = this;
        this.workoutInterval = setInterval(function () {
            if (self.intervalCount < 120) {
                self.intervalCount = self.intervalCount + 1;
            }
        }, 50);
    };
    IntervalTimerPage.prototype.stopWorkoutInterval = function () {
        clearInterval(this.workoutInterval);
    };
    // Press and hold action for rest
    IntervalTimerPage.prototype.removeRestInterval = function () {
        var self = this;
        this.restInterval = setInterval(function () {
            if (self.restCount > 0) {
                self.restCount = self.restCount - 1;
            }
        }, 50);
    };
    IntervalTimerPage.prototype.addRestInterval = function () {
        var self = this;
        this.restInterval = setInterval(function () {
            if (self.restCount < 90) {
                self.restCount = self.restCount + 1;
            }
        }, 50);
    };
    IntervalTimerPage.prototype.stopRestInterval = function () {
        clearInterval(this.restInterval);
    };
    IntervalTimerPage.prototype.exitTimer = function () {
        this.tts.stop();
        this.stopTimeApp();
        this.changeDisplay = false;
        this.insomnia.allowSleepAgain();
    };
    IntervalTimerPage.prototype.playPauseTimer = function () {
        if (this.statusChange == 'pause') {
            this.statusChange = 'play';
            this.stopTimeApp();
        }
        else {
            this.statusChange = 'pause';
            this.startTimerApp();
        }
    };
    IntervalTimerPage.prototype.stopTimeApp = function () {
        clearInterval(this.SetTimer);
        clearInterval(this.RestTimer);
    };
    IntervalTimerPage.prototype.startTimerApp = function () {
        var _this = this;
        if (this.tempSet > 0) {
            if (this.tempInterval > 0) {
                this.readMessage("Start");
                this.timerText = 'Work!';
                this.bgColor = '#56A830';
                this.SetTimer = setInterval(function () {
                    _this.tempInterval--;
                    if (_this.tempInterval == 0) {
                        clearInterval(_this.SetTimer);
                        _this.initRest();
                    }
                    else {
                        if (_this.tempInterval == 3 || _this.tempInterval == 2 || _this.tempInterval == 1) {
                            _this.beep();
                        }
                    }
                }, 1000);
            }
            else {
                clearInterval(this.SetTimer);
                this.initRest();
            }
        }
        else {
            this.readMessage("Workout Complete");
            this.timerText = "Complete!";
            //this.exitTimer();
        }
    };
    IntervalTimerPage.prototype.initRest = function () {
        var _this = this;
        if (this.tempRest > 0) {
            this.readMessage("Rest");
            this.bgColor = '#e2573f';
            this.timerText = 'Rest!';
            this.RestTimer = setInterval(function () {
                _this.tempRest--;
                if (_this.tempRest == 0) {
                    clearInterval(_this.RestTimer);
                    _this.tempSet--;
                    _this.tempInterval = _this.intervalCount;
                    _this.tempRest = _this.restCount;
                    _this.startTimerApp();
                }
                else {
                    if (_this.tempRest == 3 || _this.tempRest == 2 || _this.tempRest == 1) {
                        _this.beep();
                    }
                }
            }, 1000);
        }
        else {
            clearInterval(this.RestTimer);
            this.tempSet--;
            this.tempInterval = this.intervalCount;
            this.tempRest = this.restCount;
            this.startTimerApp();
        }
    };
    IntervalTimerPage.prototype.beep = function () {
        // var snd = new Audio('http://www.soundjay.com/button/beep-07.wav');
        // snd.volume = 1;
        // snd.play();
        var audio = document.createElement('audio');
        audio.style.display = "none";
        audio.src = 'http://www.soundjay.com/button/beep-07.wav';
        audio.autoplay = true;
        audio.onended = function () {
            audio.remove(); //Remove when played.
        };
        document.body.appendChild(audio);
    };
    IntervalTimerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interval-timer',
            template: __webpack_require__(/*! ./interval-timer.page.html */ "./src/app/pages/interval-timer/interval-timer.page.html"),
            styles: [__webpack_require__(/*! ./interval-timer.page.scss */ "./src/app/pages/interval-timer/interval-timer.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_1__["TextToSpeech"], _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_2__["Insomnia"]])
    ], IntervalTimerPage);
    return IntervalTimerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-interval-timer-interval-timer-module.js.map