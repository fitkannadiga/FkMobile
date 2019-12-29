(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-individual-workout-list-individual-workout-list-module"],{

/***/ "./src/app/pages/individual-workout-list/individual-workout-list.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/individual-workout-list/individual-workout-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: IndividualWorkoutListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualWorkoutListPageModule", function() { return IndividualWorkoutListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _individual_workout_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./individual-workout-list.page */ "./src/app/pages/individual-workout-list/individual-workout-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _individual_workout_list_page__WEBPACK_IMPORTED_MODULE_5__["IndividualWorkoutListPage"]
    }
];
var IndividualWorkoutListPageModule = /** @class */ (function () {
    function IndividualWorkoutListPageModule() {
    }
    IndividualWorkoutListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_individual_workout_list_page__WEBPACK_IMPORTED_MODULE_5__["IndividualWorkoutListPage"]]
        })
    ], IndividualWorkoutListPageModule);
    return IndividualWorkoutListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/individual-workout-list/individual-workout-list.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/individual-workout-list/individual-workout-list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{muscleData.muscle}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <!-- <h3>{{muscleData.muscle}}</h3> -->\n        <img [src]=\"muscleData.img_path\" />\n        <div padding [innerHTML]=\"muscleData.description\"></div>\n    </div>\n    <div id=\"search-wrapper\">\n        <ion-searchbar (ionInput)=\"getItems($event)\" placeholder=\"search workout\" showCancelButton (ionCancel)=\"cancelSearch()\"></ion-searchbar>\n    </div>\n    <div id=\"muscles-list-wrapper\">\n        <ion-card class=\"muscle-card\" *ngFor=\"let exercise of exerciseList\" (click)=\"showWorkoutModal(exercise);\">\n            <ion-row>\n                <ion-col class=\"img-card\" size=\"3\">\n                    <img [src]=\"exercise.exercise_image\" onError=\"src = './assets/imgs/default.png'\"/>\n                </ion-col>\n                <ion-col class=\"title-card\">\n                    <p>{{exercise.exercise_name}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/individual-workout-list/individual-workout-list.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/individual-workout-list/individual-workout-list.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content div#search-wrapper {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  background-color: #FFF; }\n  ion-content div#search-wrapper ion-searchbar {\n    padding: 0px !important; }\n  ion-content ion-card p {\n  color: #000; }\n  ion-content div#muscles-list-wrapper ion-card.muscle-card ion-col.img-card {\n  padding: 0px;\n  align-items: center;\n  align-content: center;\n  display: flex;\n  background: #000; }\n  ion-content div#muscles-list-wrapper ion-card.muscle-card ion-col.img-card img {\n    height: 45px; }\n  ion-content div#muscles-list-wrapper ion-card.muscle-card ion-col.title-card {\n  display: flex;\n  align-items: center; }\n  ion-content div#muscles-list-wrapper ion-card.muscle-card ion-col.title-card p {\n    padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kZXYvMzRkNzYyYjMtNWFhYS00MDEwLThlNTctNmE5YzYwZmE2MGVkL2lvbmljL2ZyZWUvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9pbmRpdmlkdWFsLXdvcmtvdXQtbGlzdC9pbmRpdmlkdWFsLXdvcmtvdXQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQVA5QjtJQVNZLHVCQUF1QixFQUFBO0VBVG5DO0VBY1ksV0FBVyxFQUFBO0VBZHZCO0VBc0JnQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7RUExQmhDO0lBNEJvQixZQUFZLEVBQUE7RUE1QmhDO0VBZ0NnQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFqQ25DO0lBbUNvQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGl2aWR1YWwtd29ya291dC1saXN0L2luZGl2aWR1YWwtd29ya291dC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBkaXYjc2VhcmNoLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICBpb24tc2VhcmNoYmFye1xuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpdiNtdXNjbGVzLWxpc3Qtd3JhcHBlciB7XG4gICAgICAgIGlvbi1jYXJkLm11c2NsZS1jYXJkIHtcbiAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgaW9uLWNvbC5pbWctY2FyZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNvbC50aXRsZS1jYXJkIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/individual-workout-list/individual-workout-list.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/individual-workout-list/individual-workout-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: IndividualWorkoutListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualWorkoutListPage", function() { return IndividualWorkoutListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_muscle_group_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/muscle-group-service.service */ "./src/app/api/muscle-group-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_workout_info_workout_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/workout-info/workout-info.component */ "./src/app/components/workout-info/workout-info.component.ts");
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





var IndividualWorkoutListPage = /** @class */ (function () {
    function IndividualWorkoutListPage(activatedRoute, muscleService, modal) {
        this.activatedRoute = activatedRoute;
        this.muscleService = muscleService;
        this.modal = modal;
    }
    IndividualWorkoutListPage.prototype.ngOnInit = function () {
        // get muscle if from the router configuration
        this.muscleGroup = this.activatedRoute.snapshot.paramMap.get('muscle');
        console.log("this.muscleGroup", this.muscleGroup);
        var muscleInfo = this.muscleService.getIndividualMuscleWorkout(this.muscleGroup);
        console.log("muscleInfo>>>", muscleInfo);
        this.muscleData = muscleInfo[0];
        var tempData = this.muscleData.workouts;
        this.finalExerciseList = tempData;
        this.exerciseList = tempData;
        console.log("this.muscleData from ajax", this.exerciseList);
    };
    IndividualWorkoutListPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.exerciseList = this.finalExerciseList;
            this.exerciseList = this.finalExerciseList.filter(function (list) {
                return (list.exercise_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.exerciseList = this.finalExerciseList;
        }
    };
    IndividualWorkoutListPage.prototype.cancelSearch = function () {
        this.exerciseList = this.finalExerciseList;
    };
    IndividualWorkoutListPage.prototype.showWorkoutModal = function (workoutstory) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _components_workout_info_workout_info_component__WEBPACK_IMPORTED_MODULE_4__["WorkoutInfoComponent"],
                            componentProps: { workout: workoutstory }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IndividualWorkoutListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-workout-list',
            template: __webpack_require__(/*! ./individual-workout-list.page.html */ "./src/app/pages/individual-workout-list/individual-workout-list.page.html"),
            styles: [__webpack_require__(/*! ./individual-workout-list.page.scss */ "./src/app/pages/individual-workout-list/individual-workout-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_muscle_group_service_service__WEBPACK_IMPORTED_MODULE_2__["MuscleGroupServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], IndividualWorkoutListPage);
    return IndividualWorkoutListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-individual-workout-list-individual-workout-list-module.js.map