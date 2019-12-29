(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-diet-client-diet-module"],{

/***/ "./src/app/pages/client-diet/client-diet.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/client-diet/client-diet.module.ts ***!
  \*********************************************************/
/*! exports provided: ClientDietPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDietPageModule", function() { return ClientDietPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _client_diet_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-diet.page */ "./src/app/pages/client-diet/client-diet.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _client_diet_page__WEBPACK_IMPORTED_MODULE_5__["ClientDietPage"]
    }
];
var ClientDietPageModule = /** @class */ (function () {
    function ClientDietPageModule() {
    }
    ClientDietPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_client_diet_page__WEBPACK_IMPORTED_MODULE_5__["ClientDietPage"]]
        })
    ], ClientDietPageModule);
    return ClientDietPageModule;
}());



/***/ }),

/***/ "./src/app/pages/client-diet/client-diet.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/client-diet/client-diet.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Meal Plan</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h3 id=\"plan-header\">{{clientDietData.header}}</h3>\n    <div [innerHTML]=\"clientDietData.dietPlan\"></div>\n    <p *ngIf=\"clientDietData.notes != ''\" class=\"note-text\"><span color=\"danger\">Note:</span> {{clientDietData.notes}}</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/client-diet/client-diet.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/client-diet/client-diet.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3#plan-header {\n  text-align: center; }\n\np.note-text {\n  font-style: italic;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #dcdcdc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kZXYvMzRkNzYyYjMtNWFhYS00MDEwLThlNTctNmE5YzYwZmE2MGVkL2lvbmljL2ZyZWUvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9jbGllbnQtZGlldC9jbGllbnQtZGlldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50LWRpZXQvY2xpZW50LWRpZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMjcGxhbi1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucC5ub3RlLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/client-diet/client-diet.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/client-diet/client-diet.page.ts ***!
  \*******************************************************/
/*! exports provided: ClientDietPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDietPage", function() { return ClientDietPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_client_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/client-data.service */ "./src/app/api/client-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
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





var ClientDietPage = /** @class */ (function () {
    function ClientDietPage(clientService, loadingController, toastr, afDataBase) {
        this.clientService = clientService;
        this.loadingController = loadingController;
        this.toastr = toastr;
        this.afDataBase = afDataBase;
        this.clientDietData = clientService.getClientDiet();
        this.userID = window.localStorage.getItem('authID');
        if (this.clientDietData == null || this.clientDietData == undefined) {
            this.presentToast("Please contact adming. Looks like diet has been modified or removed.");
        }
    }
    ClientDietPage.prototype.ngOnInit = function () {
    };
    ClientDietPage.prototype.presentLoading = function (msg) {
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
                        _a.dietLoader = _b.sent();
                        return [4 /*yield*/, this.dietLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientDietPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dietLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientDietPage.prototype.presentToast = function (toastMsg) {
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
    ], ClientDietPage.prototype, "content", void 0);
    ClientDietPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-diet',
            template: __webpack_require__(/*! ./client-diet.page.html */ "./src/app/pages/client-diet/client-diet.page.html"),
            styles: [__webpack_require__(/*! ./client-diet.page.scss */ "./src/app/pages/client-diet/client-diet.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_client_data_service__WEBPACK_IMPORTED_MODULE_1__["ClientDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], ClientDietPage);
    return ClientDietPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-client-diet-client-diet-module.js.map