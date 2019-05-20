(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-recipe-create-recipe-module"],{

/***/ "./src/app/pages/create-recipe/create-recipe.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-recipe/create-recipe.module.ts ***!
  \*************************************************************/
/*! exports provided: CreateRecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipePageModule", function() { return CreateRecipePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_recipe_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-recipe.page */ "./src/app/pages/create-recipe/create-recipe.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _create_recipe_page__WEBPACK_IMPORTED_MODULE_5__["CreateRecipePage"]
    }
];
var CreateRecipePageModule = /** @class */ (function () {
    function CreateRecipePageModule() {
    }
    CreateRecipePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_recipe_page__WEBPACK_IMPORTED_MODULE_5__["CreateRecipePage"]]
        })
    ], CreateRecipePageModule);
    return CreateRecipePageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-recipe/create-recipe.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-recipe/create-recipe.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Post Recipe</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label position=\"floating\">Recipe Name</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"name\" name=\"recipe_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Short Description</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"short_desc\" name=\"recipe_sd\"></ion-input>\n    </ion-item>\n    <ckeditor [(ngModel)]=\"ckeditorContent\" (change)=\"onChange($event)\" (editorChange)=\"onEditorChange($event)\" (ready)=\"onReady($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" (contentDom)=\"onContentDom($event)\"\n        (fileUploadRequest)=\"onFileUploadRequest($event)\" (fileUploadResponse)=\"onFileUploadResponse($event)\" (paste)=\"onPaste($event)\" (drop)=\"onDrop($event)\" debounce=\"500\">\n    </ckeditor>\n\n    <ion-button size=\"large\" expand=\"full\" (click)=\"submitRecipe()\">Submit</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/create-recipe/create-recipe.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-recipe/create-recipe.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1yZWNpcGUvY3JlYXRlLXJlY2lwZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/create-recipe/create-recipe.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-recipe/create-recipe.page.ts ***!
  \***********************************************************/
/*! exports provided: CreateRecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipePage", function() { return CreateRecipePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateRecipePage = /** @class */ (function () {
    function CreateRecipePage(modal) {
        this.modal = modal;
        this.editorConfig = {};
        this.editorConfig = { removeButtons: 'Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Blockquote,CreateDiv,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiLtr,BidiRtl,Language,Anchor,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,Font,FontSize,BGColor,ShowBlocks,About', toolbarGroups: [{ name: 'basicstyles', groups: ['basicstyles'] }, { name: 'paragraph', groups: ['list'] }, { name: 'links' }, { name: 'styles' }, { name: 'colors' }]
        };
    }
    CreateRecipePage.prototype.ngOnInit = function () {
    };
    CreateRecipePage.prototype.submitRecipe = function () {
        // validate all fields and also text editor
    };
    CreateRecipePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-recipe',
            template: __webpack_require__(/*! ./create-recipe.page.html */ "./src/app/pages/create-recipe/create-recipe.page.html"),
            styles: [__webpack_require__(/*! ./create-recipe.page.scss */ "./src/app/pages/create-recipe/create-recipe.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], CreateRecipePage);
    return CreateRecipePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-recipe-create-recipe-module.js.map