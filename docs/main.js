(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" style=\"display: flex; flex-direction: column; overflow: hidden; height: 100%\">\n  <mat-toolbar color=\"primary\" style=\"background: #0063a0; color: white\">Ng Trello</mat-toolbar>\n\n  <div style=\"display: flex; background: rgb(4, 121, 191); flex-grow: 1\">\n    <div class=\"example-container\">\n\n      <div class=\"trello-list\">\n\n        <div class=\"title-box\">\n          <span class=\"title\">Pendente</span>\n          <button mat-icon-button (click)=\"test()\" style=\"background: transparent\">\n            <mat-icon>more_horiz</mat-icon>\n          </button>\n        </div>\n\n        <div\n          id=\"all\"\n          cdkDropList\n          [cdkDropListData]=\"all\"\n          [cdkDropListConnectedTo]=\"['all', 'even', 'and']\"\n          class=\"example-list\"\n          (cdkDropListDropped)=\"drop($event)\">\n          <div *ngFor=\"let number of all\"\n               class=\"example-box\"\n               [class.editing]=\"number.editing\"\n               cdkDrag\n               [cdkDragData]=\"number\">\n\n            <div style=\"display: flex; align-items: stretch\" class=\"box\" *ngIf=\"!number.editing\">\n              <div style=\"flex-grow: 1; width: 100%\">{{number.desc}}</div>\n              <mat-icon class=\"editBtn\" style=\"font-size: 13px;\n            height: 13px;color: #5c6371; margin: 0; padding: 0\n          \" (click)=\"enterEditMode(number, 'A')\">edit\n              </mat-icon>\n            </div>\n\n\n            <input name=\"edt\"\n                   [id]=\"'edt-A-'+number.id\"\n                   style=\"width: 100%;\n                 font-size: 13px; border: none;outline: none; background: transparent\" *ngIf=\"number.editing\"\n                   (keydown.enter)=\"number.editing = false; checkIfIsValid(number, 'A')\"\n                   (blur)=\"number.editing = false; checkIfIsValid(number, 'A')\"\n                   [(ngModel)]=\"number.desc\" placeholder=\"Informe uma descrição\">\n\n\n          </div>\n        </div>\n\n\n        <button mat-flat-button\n                (click)=\"addTarefa('A')\"\n                style=\"width: 100%; background: transparent; text-align: left; font-size: 12px; color: #5c6371\"\n                mat-ripple>\n          <mat-icon>add</mat-icon>\n          <span style=\"padding-top: 3px\">Adicionar Tarefa</span>\n        </button>\n      </div>\n\n\n    </div>\n\n\n\n    <div class=\"example-container\">\n      <div class=\"trello-list\">\n\n        <div class=\"title-box\">\n          <span class=\"title\">Em Andamento</span>\n          <button mat-icon-button (click)=\"test()\" style=\"background: transparent\">\n            <mat-icon>more_horiz</mat-icon>\n          </button>\n        </div>\n\n        <div\n          id=\"and\"\n          cdkDropList\n          [cdkDropListData]=\"andamento\"\n          [cdkDropListConnectedTo]=\"['all', 'even', 'and']\"\n          class=\"example-list\"\n          (cdkDropListDropped)=\"drop($event)\">\n          <div *ngFor=\"let number of andamento\"\n               class=\"example-box\"\n               [class.editing]=\"number.editing\"\n               cdkDrag\n               [cdkDragData]=\"number\">\n\n            <div style=\"display: flex; align-items: stretch\" class=\"box\" *ngIf=\"!number.editing\">\n              <div style=\"flex-grow: 1; width: 100%\">{{number.desc}}</div>\n              <mat-icon class=\"editBtn\" style=\"font-size: 13px;\n            height: 13px;color: #5c6371; margin: 0; padding: 0\n          \" (click)=\"enterEditMode(number, 'M')\">edit\n              </mat-icon>\n            </div>\n\n\n            <input name=\"edt\"\n                   [id]=\"'edt-M-'+number.id\"\n                   style=\"width: 100%;\n                 font-size: 13px; border: none;outline: none; background: transparent\" *ngIf=\"number.editing\"\n                   (keydown.enter)=\"number.editing = false; checkIfIsValid(number, 'M')\"\n                   (blur)=\"number.editing = false; checkIfIsValid(number, 'M')\"\n                   [(ngModel)]=\"number.desc\" placeholder=\"Informe uma descrição\">\n\n\n          </div>\n        </div>\n\n\n        <button mat-flat-button\n                (click)=\"addTarefa('M')\"\n                style=\"width: 100%; background: transparent; text-align: left; font-size: 12px; color: #5c6371\"\n                mat-ripple>\n          <mat-icon>add</mat-icon>\n          <span style=\"padding-top: 3px\">Adicionar Tarefa</span>\n        </button>\n      </div>\n    </div>\n\n\n    <div class=\"example-container\">\n      <div class=\"trello-list\">\n\n        <div class=\"title-box\">\n          <span class=\"title\">Realizado</span>\n          <button mat-icon-button (click)=\"test()\" style=\"background: transparent\">\n            <mat-icon>more_horiz</mat-icon>\n          </button>\n        </div>\n\n        <div\n          id=\"even\"\n          cdkDropList\n          [cdkDropListData]=\"even\"\n          [cdkDropListConnectedTo]=\"['all', 'even', 'and']\"\n          class=\"example-list\"\n          (cdkDropListDropped)=\"drop($event)\">\n          <div *ngFor=\"let number of even\"\n               class=\"example-box\"\n               [class.editing]=\"number.editing\"\n               cdkDrag\n               [cdkDragData]=\"number\">\n\n            <div style=\"display: flex; align-items: stretch\" class=\"box\" *ngIf=\"!number.editing\">\n              <div style=\"flex-grow: 1; width: 100%\">{{number.desc}}</div>\n              <mat-icon class=\"editBtn\" style=\"font-size: 13px;\n            height: 13px;color: #5c6371; margin: 0; padding: 0\n          \" (click)=\"enterEditMode(number, 'R')\">edit\n              </mat-icon>\n            </div>\n\n\n            <input name=\"edt\"\n                   [id]=\"'edt-R-'+number.id\"\n                   style=\"width: 100%;\n                 font-size: 13px; border: none;outline: none; background: transparent\" *ngIf=\"number.editing\"\n                   (keydown.enter)=\"number.editing = false; checkIfIsValid(number, 'R')\"\n                   (blur)=\"number.editing = false; checkIfIsValid(number, 'R')\"\n                   [(ngModel)]=\"number.desc\" placeholder=\"Informe uma descrição\">\n\n\n          </div>\n        </div>\n\n\n        <button mat-flat-button\n                (click)=\"addTarefa('R')\"\n                style=\"width: 100%; background: transparent; text-align: left; font-size: 12px; color: #5c6371\"\n                mat-ripple>\n          <mat-icon>add</mat-icon>\n          <span style=\"padding-top: 3px\">Adicionar Tarefa</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 272px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  padding: 20px; }\n\n.example-list {\n  padding: 0 10px;\n  min-height: 60px;\n  overflow: hidden;\n  display: block; }\n\n.example-box {\n  padding: 10px 5px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  border-radius: 3px;\n  margin: 5px 0;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 12px; }\n\n.example-box.editing {\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    background: #fefff9;\n    min-height: 60px; }\n\n.example-box .box {\n    width: 100%; }\n\n.example-box .box .editBtn {\n      cursor: pointer;\n      display: none; }\n\n.example-box:hover .box .editBtn {\n    display: block; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.trello-list {\n  background-color: #dfe1e6;\n  border-radius: 3px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column; }\n\n.trello-list .title-box {\n    display: flex;\n    padding: 0 5px;\n    padding-left: 20px;\n    align-items: center; }\n\n.trello-list .title-box .title {\n      flex-grow: 1;\n      color: #172b4d;\n      font-weight: 600;\n      font-size: 14px; }\n\n.trello-list .title-box .mat-icon {\n      font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, Tarefa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tarefa", function() { return Tarefa; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngtrello';
        this.all = [];
        this.even = [];
        this.andamento = [];
    }
    AppComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    /** Predicate function that only allows even numbers to be dropped into a list. */
    AppComponent.prototype.evenPredicate = function (item) {
        return item.data % 2 === 0;
    };
    /** Predicate function that doesn't allow items to be dropped into a list. */
    AppComponent.prototype.noReturnPredicate = function () {
        return false;
    };
    AppComponent.prototype.test = function () {
    };
    AppComponent.prototype.addTarefa = function (list) {
        var sourceList = [];
        if (list === 'A') {
            sourceList = this.all;
        }
        else if (list === 'R') {
            sourceList = this.even;
        }
        else {
            sourceList = this.andamento;
        }
        var novaTarefa = {
            id: sourceList.length + 1,
            desc: '',
            editing: true
        };
        if (list === 'A') {
            this.all.push(novaTarefa);
        }
        else if (list === 'R') {
            this.even.push(novaTarefa);
        }
        else {
            this.andamento.push(novaTarefa);
        }
        setTimeout(function () {
            document.querySelector('#edt-' + list + '-' + novaTarefa.id).focus();
        });
    };
    AppComponent.prototype.checkIfIsValid = function (number, list) {
        if (!number.desc || number.desc.trim().length === 0) {
            if (list === 'A') {
                this.all = this.all.filter(function (t) { return t.id !== number.id; });
            }
            else if (list === 'R') {
                this.even = this.even.filter(function (t) { return t.id !== number.id; });
            }
            else {
                this.andamento = this.andamento.filter(function (t) { return t.id !== number.id; });
            }
        }
    };
    AppComponent.prototype.enterEditMode = function (number, list) {
        number.editing = true;
        setTimeout(function () {
            document.querySelector('#edt-' + list + '-' + number.id).focus();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

var Tarefa = /** @class */ (function () {
    function Tarefa() {
    }
    return Tarefa;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrauss/Documents/Projects/web/ngtrello/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map