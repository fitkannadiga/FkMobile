(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"],{

/***/ "./src/app/pages/faq/faq.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_5__["FaqPage"]
    }
];
var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_5__["FaqPage"]]
        })
    ], FaqPageModule);
    return FaqPageModule;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>FAQ</ion-title>\n        <!-- <ion-button slot=\"end\" (click)=\"presentLangSelector()\" color=\"light\">{{presentLang}}</ion-button> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list class=\"accordion-list\">\n        <div class=\"accordion-container\" *ngFor=\"let item of finalFaqObject; let i = index\">\n            <p class=\"question\" (click)=\"toggleSection(i, $event)\">\n                <span class=\"question-text\"><ion-icon [name]=\"(item.open) ? 'remove' : 'add'\"></ion-icon></span> \n                <span class=\"quesion\">{{item.question}}</span>\n            </p>\n            <p class=\"answer\" *ngIf=\"item.open\" no-lines>{{item.answer}}</p>\n        </div>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/faq/faq.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list.accordion-list {\n  font-size: 0.9rem;\n  padding-top: 0px !important; }\n  ion-list.accordion-list div.accordion-container {\n    padding-bottom: 4px; }\n  ion-list.accordion-list p.question {\n    background: #344597;\n    padding: 12px;\n    color: #FFF;\n    border-radius: 5px 5px 0px 0px;\n    margin-bottom: 0px; }\n  ion-list.accordion-list p.question span {\n      display: inline-block; }\n  ion-list.accordion-list p.question span.question-text {\n      width: 10%; }\n  ion-list.accordion-list p.question span.question {\n      width: 89%; }\n  ion-list.accordion-list p.answer {\n    background: #ededed;\n    padding: 12px;\n    margin-top: 0px;\n    border-radius: 0px 0px 5px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kZXYvMzRkNzYyYjMtNWFhYS00MDEwLThlNTctNmE5YzYwZmE2MGVkL2lvbmljL2ZyZWUvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9mYXEvZmFxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQiwyQkFBMkIsRUFBQTtFQUYvQjtJQUlRLG1CQUFtQixFQUFBO0VBSjNCO0lBUVEsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGtCQUFrQixFQUFBO0VBWjFCO01BY1kscUJBQXFCLEVBQUE7RUFkakM7TUFpQlksVUFBVSxFQUFBO0VBakJ0QjtNQW9CWSxVQUFVLEVBQUE7RUFwQnRCO0lBd0JRLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC5hY2NvcmRpb24tbGlzdCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIGRpdi5hY2NvcmRpb24tY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICB9XG4gICAgcC5xdWVzdGlvbiB7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICMzYzNlNDE7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzNDQ1OTc7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5xdWVzdGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5xdWVzdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogODklO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAuYW5zd2VyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/faq/faq.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _api_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/common.service */ "./src/app/api/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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





var FaqPage = /** @class */ (function () {
    function FaqPage(afDataBase, commonService, alertCtrl) {
        var _this = this;
        this.afDataBase = afDataBase;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.information = [];
        this.lang = true;
        this.presentLang = "English";
        this.langIdentifier = 'en';
        this.finalFaqObject = [];
        this.previousIndex = 0;
        this.commonService.getFaq().then(function (data) {
            // console.log("faq data: ", data);
            _this.information = data;
            _this.changeQuestions('en');
        });
    }
    FaqPage.prototype.ngOnInit = function () {
    };
    FaqPage.prototype.toggleSection = function (i, event) {
        // debugger;
        // IF - if opened, then close the dialouge
        // ELSE - Cloose all the rest and open the clicked item and scroll
        if (this.previousIndex == i) {
            this.finalFaqObject[i].open = !this.finalFaqObject[i].open;
        }
        else {
            // Close all the other opened accordion and then open the selected
            for (var i_key in this.finalFaqObject) {
                if (this.finalFaqObject[i_key].open) {
                    this.finalFaqObject[i_key].open = !this.finalFaqObject[i_key].open;
                }
            }
            this.finalFaqObject[i].open = !this.finalFaqObject[i].open;
            this.previousIndex = i;
            // scroll to the selected element based on which is opened
            this.content.scrollByPoint(event.x, event.y - 100, 1000);
        }
    };
    FaqPage.prototype.presentLangSelector = function () {
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
                                    checked: this.lang
                                },
                                {
                                    type: 'radio',
                                    label: 'ಕನ್ನಡ',
                                    value: 'kannada',
                                    checked: !this.lang
                                }
                            ],
                            buttons: [
                                {
                                    text: "Cancel",
                                    handler: function (data) {
                                        // Do nothing
                                        // console.log("cancel clicked");
                                    }
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        // console.log("lang data", data);
                                        if (data == "kannada") {
                                            _this.lang = false;
                                            _this.presentLang = "ಕನ್ನಡ";
                                        }
                                        else {
                                            _this.lang = true;
                                            _this.presentLang = "English";
                                        }
                                        _this.changeQuestions(_this.langIdentifier);
                                        // console.log("lang data", this.langIdentifier);
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
    FaqPage.prototype.changeQuestions = function (s_lang) {
        this.finalFaqObject = [];
        for (var l_key in this.information) {
            if (this.information[l_key].lang == s_lang) {
                this.finalFaqObject.push(this.information[l_key]);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], FaqPage.prototype, "content", void 0);
    FaqPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.page.html */ "./src/app/pages/faq/faq.page.html"),
            styles: [__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/faq/faq.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _api_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], FaqPage);
    return FaqPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-faq-faq-module.js.map