(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recipe-details-recipe-details-module"],{

/***/ "./src/app/pages/recipe-details/recipe-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/recipe-details/recipe-details.module.ts ***!
  \***************************************************************/
/*! exports provided: RecipeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsPageModule", function() { return RecipeDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipe_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-details.page */ "./src/app/pages/recipe-details/recipe-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _recipe_details_page__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsPage"]
    }
];
var RecipeDetailsPageModule = /** @class */ (function () {
    function RecipeDetailsPageModule() {
    }
    RecipeDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipe_details_page__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsPage"]]
        })
    ], RecipeDetailsPageModule);
    return RecipeDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recipe-details/recipe-details.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/recipe-details/recipe-details.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" (click)=\"checkBack($event);\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Recipe Detail</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <img *ngIf=\"recipeData.recipe_img\" [src]=\"recipeData.recipe_img\" onError=\"src = './assets/imgs/default.png'\"/>\n        <ion-card-content>\n            <ion-card-title>\n                {{recipeData.recipe_title}}\n            </ion-card-title>\n            <div [innerHTML]=\"recipeData.recipe_desc\"></div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/recipe-details/recipe-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/recipe-details/recipe-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  color: #000; }\n  ion-content ion-card ion-card-content {\n    color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdoYXZlbmRyYXYvcHJvamVjdHMvRmtNb2JpbGUvc3JjL2FwcC9wYWdlcy9yZWNpcGUtZGV0YWlscy9yZWNpcGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7RUFEZjtJQUlZLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2lwZS1kZXRhaWxzL3JlY2lwZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/recipe-details/recipe-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/recipe-details/recipe-details.page.ts ***!
  \*************************************************************/
/*! exports provided: RecipeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsPage", function() { return RecipeDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_recipe_detail_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/recipe-detail-service.service */ "./src/app/api/recipe-detail-service.service.ts");
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




var RecipeDetailsPage = /** @class */ (function () {
    function RecipeDetailsPage(nav, route, router, recipeService) {
        this.nav = nav;
        this.route = route;
        this.router = router;
        this.recipeService = recipeService;
        this.recipeData = this.recipeService.getRecipeData();
        // console.log("this.recipeData", this.recipeData);
    }
    RecipeDetailsPage.prototype.ngOnInit = function () {
    };
    RecipeDetailsPage.prototype.checkBack = function (event) {
        // set the nav back to recipe page as it redirects to home page
        this.nav.navigateRoot('/tabs/recipes');
    };
    RecipeDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-details',
            template: __webpack_require__(/*! ./recipe-details.page.html */ "./src/app/pages/recipe-details/recipe-details.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./recipe-details.page.scss */ "./src/app/pages/recipe-details/recipe-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_recipe_detail_service_service__WEBPACK_IMPORTED_MODULE_2__["RecipeDetailServiceService"]])
    ], RecipeDetailsPage);
    return RecipeDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recipe-details-recipe-details-module.js.map