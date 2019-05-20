(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Profile Page</ion-title>\n    </ion-toolbar>\n    <div id=\"progress-bar-wrapper\" *ngIf=\"percentage | async as pct\">\n        <ion-progress-bar color=\"primary\" buffer=\"0.5\" class=\"progress is-info\" [value]=\"pct/100\"></ion-progress-bar>\n    </div>\n</ion-header>\n\n<ion-content padding>\n    <input id=\"file-uploader\" type=\"file\" (change)=\"uploadFile($event)\" name=\"Upload Image\" hidden accept=\"image/x-png,image/gif,image/jpeg\" />\n    <div id=\"image-upload-wrapper\">\n        <img id=\"user-img\" [src]=\"imgPath\" (click)=\"triggerUpload()\" onError=\"src = 'assets/default.png'\" />\n        <img id=\"edit-icon\" src=\"assets/icon/edit-image.png\" onError=\"src = 'https://firebasestorage.googleapis.com/v0/b/fit-kannadiga.appspot.com/o/testimonials%2Fdefault_men.png?alt=media&token=66f623fa-4fb2-4f4f-b717-74877ae85cb5'\" (click)=\"triggerUpload()\" />\n    </div>\n    <p id=\"user-name\">@{{profile.username}}</p>\n    <form id=\"user-profile-form\" #userProfileForm=\"ngForm\" (ngSubmit)=\"validateForm(userProfileForm)\" autocomplete=\"off\">\n        <ion-item>\n            <ion-label position=\"floating\">Full Name<span class=\"danger\">*</span></ion-label>\n            <ion-input type=\"text\" name=\"fullname\" required [(ngModel)]=\"profile.fullname\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Email<span class=\"danger\">*</span></ion-label>\n            <ion-input type=\"text\" name=\"email\" required [(ngModel)]=\"profile.email\" disabled=\"disabled\"></ion-input>\n        </ion-item>\n        <!--<ion-item>\n            <ion-label position=\"floating\">Age<span class=\"danger\">*</span></ion-label>\n            <ion-input type=\"number\" name=\"age\" required [(ngModel)]=\"profile.age\"></ion-input>\n        </ion-item>-->\n        <ion-item>\n            <ion-label position=\"floating\">Date Of Birth<span class=\"danger\">*</span></ion-label>\n            <ion-datetime display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" name=\"dob\" required [(ngModel)]=\"profile.dob\"></ion-datetime>\n            <!-- <ion-datetime displayFormat=\"MMM DD, YYYY\" name=\"dob\" required [(ngModel)]=\"profile.dob\"></ion-datetime> -->\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Gender<span class=\"danger\">*</span></ion-label>\n            <ion-select name=\"gender\" required [(ngModel)]=\"profile.gender\">\n                <ion-select-option value=\"female\">Female</ion-select-option>\n                <ion-select-option value=\"male\">Male</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Weight[kg]</ion-label>\n            <ion-input type=\"number\" name=\"weight\" [(ngModel)]=\"profile.weight\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Height[cms]</ion-label>\n            <ion-input type=\"number\" name=\"height\" [(ngModel)]=\"profile.height\"></ion-input>\n        </ion-item>\n        <ion-button class=\"fk-marginTop-25\" id=\"update-profile-btn\" color=\"secondary\" expand=\"full\" size=\"large\" type=\"submit\">Update Profile</ion-button>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  position: relative; }\n  ion-header div#progress-bar-wrapper {\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -3px;\n    z-index: 9999; }\n  ion-item {\n  padding-left: 0px !important; }\n  #image-upload-wrapper {\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin: auto; }\n  #image-upload-wrapper img#user-img {\n    opacity: 0.7;\n    width: 150px;\n    height: 150px;\n    border-radius: 75px;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto; }\n  #image-upload-wrapper img#edit-icon {\n    position: absolute;\n    width: 60%;\n    right: 0;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    margin: auto;\n    opacity: 0.6; }\n  p#user-name {\n  text-align: center;\n  color: #3B4EAC;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFHUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBSXJCO0VBQ0ksNEJBQTRCLEVBQUE7RUFHaEM7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0VBTGhCO0lBT1EsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFmcEI7SUFrQlEsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQ0osRUFBQTtFQUVKO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGl2I3Byb2dyZXNzLWJhci13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAtM3B4O1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNpbWFnZS11cGxvYWQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGltZyN1c2VyLWltZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgaW1nI2VkaXQtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG9wYWNpdHk6IDAuNlxuICAgIH1cbn1cbnAjdXNlci1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzQjRFQUM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
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










var ProfilePage = /** @class */ (function () {
    function ProfilePage(toastr, loadingController, afDataBase, storage, events, router, globalComp, crop, imagePicker, transfer) {
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.afDataBase = afDataBase;
        this.storage = storage;
        this.events = events;
        this.router = router;
        this.globalComp = globalComp;
        this.crop = crop;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.profile = {};
        this.filePath = 'profileImage/' + window.localStorage.getItem("authID") + '/';
        this.fileUrl = null;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading('Loading data...');
        // Call function to load the data from database
        this.uid = window.localStorage.getItem("authID");
        this.imgPath = this.globalComp.getUserImage();
        this.profile = this.globalComp.getUserData();
        setTimeout(function () {
            _this.dismissLoader();
        }, 1000);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.triggerUpload = function () {
        document.getElementById('file-uploader').click();
    };
    ProfilePage.prototype.uploadFile = function (event) {
        var _this = this;
        console.log("file length>>>>", event.target.files.length);
        if (event.target.files.length >= 1) {
            this.presentLoading('Uploading Image...');
            var file = event.target.files[0];
            var fileRef = this.storage.ref(this.filePath);
            this.storage.ref(this.filePath).put(file).then(function (data) {
                console.log("data from upload image", data);
                if (data.state == "success") {
                    // this.imgPath = this.globalComp.getUserImage();
                    _this.imgPath = 'https://firebasestorage.googleapis.com/v0/b/fit-kannadiga.appspot.com/o/profileImage%2F' + _this.uid + '?alt=media' + '&random=' + Math.floor(Math.random() * 230) + 90;
                    // loading data explicitly after the image loaded as we are not setting root page as tab.
                    // as we are setting the root page to TabsPage in the update profile function, it triggers the loadData function anyways 
                    _this.events.publish('loadData');
                    _this.presentToast('Profile image updated');
                }
                else {
                    _this.presentToast('Problem uploading image. Please try after sometime.');
                }
                _this.dismissLoader();
            }).catch(function (err) {
                _this.presentToast('There was a problem uploading image. Try after sometime');
            });
        }
    };
    ProfilePage.prototype.cropUpload = function () {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                _this.crop.crop(results[i], { quality: 100 })
                    .then(function (newImage) {
                    console.log('new image path is: ' + newImage);
                    var fileTransfer = _this.transfer.create();
                    var uploadOpts = {
                        fileKey: 'file',
                        fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
                    };
                    // fileTransfer.upload(newImage, this.filePath, uploadOpts).then((data) => {
                    //    console.log(data);
                    //    this.respData = JSON.parse(data.response);
                    //    console.log(this.respData);
                    //    this.fileUrl = this.respData.fileUrl;
                    //    this.presentToast(this.fileUrl);
                    //  }, (err) => {
                    //    console.log(err);
                    //  });
                    _this.storage.ref(_this.filePath).put(newImage).then(function (data) {
                        console.log("data from upload image", data);
                        if (data.state == "success") {
                            // this.imgPath = this.globalComp.getUserImage();
                            _this.imgPath = 'https://firebasestorage.googleapis.com/v0/b/fit-kannadiga.appspot.com/o/profileImage%2F' + _this.uid + '?alt=media' + '&random=' + Math.floor(Math.random() * 230) + 90;
                            // loading data explicitly after the image loaded as we are not setting root page as tab.
                            // as we are setting the root page to TabsPage in the update profile function, it triggers the loadData function anyways 
                            _this.events.publish('loadData');
                            _this.presentToast('Profile image updated');
                        }
                        else {
                            _this.presentToast('Problem uploading image. Please try after sometime.');
                        }
                        _this.dismissLoader();
                    }).catch(function (err) {
                        _this.presentToast('There was a problem uploading image. Try after sometime');
                    });
                }, function (error) {
                    _this.presentToast('Error cropping image >> ERROR BLOCK');
                    console.error('Error cropping image', error);
                });
            }
        }, function (err) {
            console.log(err);
            _this.presentToast('Error cropping image >> Image picker BLOCK');
        });
    };
    ProfilePage.prototype.validateForm = function (form) {
        if (form.valid) {
            this.updateUserData();
        }
        else {
            this.presentToast('Please fill required fields');
        }
    };
    ProfilePage.prototype.updateUserData = function () {
        var _this = this;
        this.presentLoading('Saving data...');
        // handle undefined values for new registered users
        var tempData = this.profile;
        for (var key in tempData) {
            if (tempData[key] == undefined) {
                this.profile[key] = "";
            }
        }
        // console.log("user data posting", this.profile);
        this.afDataBase.database.ref("profiles/" + this.uid).set(this.profile)
            .then(function () {
            _this.presentToast('Profile Updated!');
            _this.globalComp.getUserInformationFirebase();
            _this.dismissLoader();
            _this.router.navigateByUrl('/tabs');
        }, function (error) {
            this.dismissLoader();
            this.presentToast('There was a problem updating profile. Try after sometime');
        });
    };
    ProfilePage.prototype.getAge = function (dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    ProfilePage.prototype.presentLoading = function (msg) {
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
                        _a.profileLoader = _b.sent();
                        return [4 /*yield*/, this.profileLoader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.profileLoader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.presentToast = function (toastMsg) {
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
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__["Crop"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map