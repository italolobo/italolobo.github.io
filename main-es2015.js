(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _show_initial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-initial.service */ "./src/app/show-initial.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial/initial.component */ "./src/app/initial/initial.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");







function AppComponent_app_initial_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-initial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_principal_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    // show: boolean = true;s
    constructor(showService) {
        this.showService = showService;
        this.title = "forca-game";
    }
    // ngOnInit() {
    //   this.show = this.showService.getShow();
    //   console.log("showValue:", this.show);
    // }
    showInicialGet() {
        return this.showService.getShow();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_initial_service__WEBPACK_IMPORTED_MODULE_1__["ShowInitialService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_initial_0_Template, 2, 0, "app-initial", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_principal_1_Template, 2, 0, "app-principal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInicialGet());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showInicialGet());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"]
            }]
    }], function () { return [{ type: _show_initial_service__WEBPACK_IMPORTED_MODULE_1__["ShowInitialService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial/initial.component */ "./src/app/initial/initial.component.ts");
/* harmony import */ var _show_initial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-initial.service */ "./src/app/show-initial.service.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_show_initial_service__WEBPACK_IMPORTED_MODULE_5__["ShowInitialService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
                providers: [_show_initial_service__WEBPACK_IMPORTED_MODULE_5__["ShowInitialService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/initial/initial.component.ts":
/*!**********************************************!*\
  !*** ./src/app/initial/initial.component.ts ***!
  \**********************************************/
/*! exports provided: InitialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialComponent", function() { return InitialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _show_initial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../show-initial.service */ "./src/app/show-initial.service.ts");




class InitialComponent {
    constructor(showService) {
        this.showService = showService;
    }
    salveNaumber(value) {
        this.showService.setNumber(value);
        this.inputValue = value;
    }
    clickOk(input) {
        this.showService.setNumber(input);
        this.inputValue = input;
        console.log("valorInput: ", input);
        let strInput = Object(querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"])(input);
        if (input <= 0 ||
            input > 10 ||
            input == "undefined" ||
            input == "null" ||
            input == "") {
            alert("Número deve ser maior que ZERO e menor que 10!");
        }
        else {
            this.showService.setShow();
            console.log(this.showService.getShow());
        }
        console.log("valorInput2: ", this.inputValue);
    }
    ngOnInit() {
        // fetch(
        //   "https://raw.githubusercontent.com/felipejn/jogodaforca/master/palavras.txt"
        // )
        //   .then(res => {
        //     // console.log(res.clone().text());
        //     return res.clone().text();
        //   })
        //   .then(data => {
        //     let arrWords = data.split("\n");
        //     console.log(arrWords);
        //     this.wordsFetch = arrWords;
        //   });
    }
}
InitialComponent.ɵfac = function InitialComponent_Factory(t) { return new (t || InitialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_initial_service__WEBPACK_IMPORTED_MODULE_2__["ShowInitialService"])); };
InitialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitialComponent, selectors: [["app-initial"]], decls: 9, vars: 0, consts: [[1, "d-block", "p-2", "bg-dark", "text-white"], [1, "input-group", "mb-3"], ["id", "letterNumber", "type", "number", "placeholder", "Quantas letras tem sua palavra?", "aria-label", "Quantas letras?", "aria-describedby", "button-addon2", 1, "form-control", "d-flex", "mt-3"], ["inputValue", ""], [1, "input-group-append"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary", "d-flex", "mt-3", 3, "click"]], template: function InitialComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FORCA APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitialComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.clickOk(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " OK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaXRpYWwvaW5pdGlhbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-initial",
                templateUrl: "./initial.component.html",
                styleUrls: ["./initial.component.css"]
            }]
    }], function () { return [{ type: _show_initial_service__WEBPACK_IMPORTED_MODULE_2__["ShowInitialService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/principal/principal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/principal/principal.component.ts ***!
  \**************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _show_initial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../show-initial.service */ "./src/app/show-initial.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PrincipalComponent_div_1__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrincipalComponent_div_1_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_1_input_14_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r14 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.insertGapLetter(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.isGapInput(_r15));
} }
function PrincipalComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_1_div_15_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.yes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_1_div_15_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.not(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "N\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sua palavra tem a letra ", ctx_r9.popLetter.toUpperCase(), "? ");
} }
function PrincipalComponent_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Selecione as posi\u00E7\u00F5es acima e confirme! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_1_div_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrincipalComponent_div_1_h5_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r23, " - ");
} }
function PrincipalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FORCA APP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Vidas: . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PrincipalComponent_div_1__svg_svg_8_Template, 2, 0, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "A palavra \u00E9? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PrincipalComponent_div_1_input_14_Template, 2, 3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PrincipalComponent_div_1_div_15_Template, 7, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PrincipalComponent_div_1_div_16_Template, 5, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Letras usadas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PrincipalComponent_div_1_h5_20_Template, 2, 1, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.hearts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.inputLetters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.quest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.quest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.usedLetters);
} }
function PrincipalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FORCA APP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A palavra que voc\u00EA escolheu foi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tente mais uma vez, talvez na pr\u00F3xima consiga ganhar! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.again(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.wordWin, "!");
} }
function PrincipalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FORCA APP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Parab\u00E9ns!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " N\u00E3o consegui acertar sua palavra. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Talvez na pr\u00F3xima eu consiga! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.again(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PrincipalComponent {
    constructor(showService) {
        this.showService = showService;
        this.hearts = [];
        this.lifes = 10;
        this.inputLetters = [];
        this.words = [];
        this.wordsPossible = [];
        this.popLetter = "";
        this.quest = true;
        this.usedLetters = [];
        this.over = "game";
        this.wordWin = "";
        this.inputValue = showService.getNumber();
        this.words = showService.getWordsFetch();
    }
    ngOnInit() {
        this.timesHeart(this.lifes);
        //
        this.wordLenght(this.inputValue);
        this.findPopLetter();
    }
    timesHeart(lifes) {
        for (let index = 0; index < lifes; index++) {
            this.hearts.push(index);
        }
        console.log("qnt arr h:", this.hearts);
    }
    wordLenght(inputValue) {
        for (let index = 0; index < inputValue; index++) {
            this.inputLetters.push("_");
        }
        this.findWordsPerQuant(this.words);
        console.log("qnt arr word lenght:", this.inputLetters);
    }
    findWordsPerQuant(arr) {
        for (const word of arr) {
            if (word.length == this.inputValue) {
                this.wordsPossible.push(word);
            }
        }
        console.log("arr wordsPos", this.wordsPossible);
    }
    findPopLetter() {
        let obj = [];
        let arrAlf = "";
        let arrNew = "";
        let bigLetter = "";
        let arra = {};
        for (const i of this.wordsPossible) {
            for (let j = 0; j < i.length; j++) {
                arrAlf += i.substring(j, j + 1);
            }
        }
        function letterFrequency(s) {
            for (let chave in s) {
                let char = s[chave].toLowerCase();
                if (arra[char] !== undefined)
                    arra[char]++;
                else
                    arra[char] = 1;
                obj.push({ letter: s[chave], times: arra[char] });
            }
            function Biggest() {
                let big = 0;
                for (const i of obj) {
                    if (i.times > big) {
                        big = i.times;
                        bigLetter = i.letter;
                    }
                }
                console.log("maior:", obj);
                console.log("pop:", bigLetter);
                console.log("arrrr:", arrAlf);
            }
            Biggest();
            // console.log("big:", bigLetter);
        }
        letterFrequency(arrAlf);
        this.popLetter = bigLetter;
        console.log("pop:", this.popLetter);
    }
    //-----------------
    findNewPopLetter() {
        let obj = [];
        let arrAlf = "";
        let arrNew = "";
        let bigLetter = "";
        let arra = {};
        for (const i of this.wordsPossible) {
            let isTrue = true;
            // console.log("letrasUsadas  :", this.usedLetters);
            for (let j = 0; j < i.length; j++) {
                for (const y of this.usedLetters) {
                    if (i[j] == y) {
                        isTrue = false;
                    }
                }
                if (isTrue) {
                    arrAlf += i[j];
                }
                isTrue = true;
            }
        }
        function letterFrequency(s) {
            for (let chave in s) {
                let char = s[chave].toLowerCase();
                if (arra[char] !== undefined)
                    arra[char]++;
                else
                    arra[char] = 1;
                obj.push({ letter: s[chave], times: arra[char] });
            }
            function Biggest() {
                let big = 0;
                for (const i of obj) {
                    if (i.times > big) {
                        big = i.times;
                        bigLetter = i.letter;
                    }
                }
                console.log("pop:", bigLetter);
                console.log("arrrr:", arrAlf);
                console.log("maior:", obj);
            }
            Biggest();
            // console.log("big:", bigLetter);
        }
        letterFrequency(arrAlf);
        this.popLetter = bigLetter;
        console.log("pop:", this.popLetter);
    }
    isGapInput(input) {
        console.log("inp:", input.value);
        if (input.value != "_" || this.quest)
            return true;
        else
            return false;
    }
    yes() {
        this.quest = !this.quest;
        this.usedLetters.push(this.popLetter);
        console.log("inLet:", this.inputLetters);
    }
    insertGapLetter(index) {
        this.inputLetters[index] = this.popLetter.toLocaleUpperCase();
        console.log("inLet after:", this.inputLetters);
        this.verifyPosLetter(index);
    }
    confirm() {
        this.quest = !this.quest;
        this.findNewPopLetter();
        this.isWin();
    }
    verifyPosLetter(index) {
        let arr = [];
        for (const i of this.wordsPossible) {
            if (i.substring(index, index + 1) == this.popLetter) {
                arr.push(i);
            }
        }
        this.wordsPossible = arr;
        console.log("arrPoss: ", this.wordsPossible);
    }
    not() {
        this.usedLetters.push(this.popLetter);
        this.hearts.shift();
        this.removeWord(this.popLetter);
        this.findNewPopLetter();
        this.isOver();
    }
    removeWord(letter) {
        let arr = [];
        let isEqual = true;
        for (const i of this.wordsPossible) {
            for (let j = 0; j < i.length; j++) {
                if (i.substring(j, j + 1) == letter) {
                    isEqual = false;
                }
            }
            if (isEqual == true) {
                arr.push(i);
            }
        }
        console.log("arr: ", arr);
    }
    isOver() {
        if (this.hearts.length <= 0) {
            this.over = "over";
        }
    }
    isWin() {
        let isDash = false;
        let wordWinTemp = "";
        console.log("input word:", this.inputLetters);
        for (const i of this.inputLetters) {
            if (i == "_") {
                isDash = true;
            }
            wordWinTemp += i;
            console.log("input wordWin", this.wordWin);
        }
        this.wordWin = wordWinTemp.toUpperCase();
        if (!isDash) {
            this.over = "win";
        }
    }
    again() {
        window.location.reload();
    }
}
PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) { return new (t || PrincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_initial_service__WEBPACK_IMPORTED_MODULE_1__["ShowInitialService"])); };
PrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrincipalComponent, selectors: [["app-principal"]], inputs: { inputValue: "inputValue" }, decls: 4, vars: 4, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "d-block", "p-2", "bg-dark", "text-white"], [1, "container", "row", "justify-content-start"], ["id", "life"], ["class", "bi bi-heart-fill", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngFor", "ngForOf"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["readonly", "", "type", "text", "aria-label", "1 name", "class", "form-control text-center", 3, "disabled", "id", "value", "click", 4, "ngFor", "ngForOf"], ["class", "d-inline d-block", 4, "ngIf"], [1, "d-flex", "mt-4"], ["id", "oldletter", 1, "jumbotron", "d-flex", "mt-2", "justify-content-start", "align-items-start"], ["class", "text-uppercase font-weight-bold ", 4, "ngFor", "ngForOf"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-heart-fill"], ["fill-rule", "evenodd", "d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z", "clip-rule", "evenodd"], ["readonly", "", "type", "text", "aria-label", "1 name", 1, "form-control", "text-center", 3, "disabled", "id", "value", "click"], ["gapInput", ""], [1, "d-inline", "d-block"], [1, "d-flex", "mt-3", "mx-auto"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "text-uppercase", "font-weight-bold"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", "mt-2"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mt-2"], [1, "alert-heading"], [1, "mb-0"]], template: function PrincipalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrincipalComponent_div_1_Template, 21, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrincipalComponent_div_2_Template, 13, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PrincipalComponent_div_3_Template, 15, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.over);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "over");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrincipalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-principal",
                templateUrl: "./principal.component.html",
                styleUrls: ["./principal.component.css"]
            }]
    }], function () { return [{ type: _show_initial_service__WEBPACK_IMPORTED_MODULE_1__["ShowInitialService"] }]; }, { inputValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/show-initial.service.ts":
/*!*****************************************!*\
  !*** ./src/app/show-initial.service.ts ***!
  \*****************************************/
/*! exports provided: ShowInitialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInitialService", function() { return ShowInitialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShowInitialService {
    constructor() {
        this.show = true;
        this.wordsFetch = [];
        fetch("https://raw.githubusercontent.com/felipejn/jogodaforca/master/palavras.txt")
            .then(res => {
            // console.log(res.clone().text());
            return res.clone().text();
        })
            .then(data => {
            let arrWords = data.split("\n");
            console.log(arrWords);
            this.wordsFetch = arrWords;
        });
    }
    getWordsFetch() {
        return this.wordsFetch;
    }
    getNumber() {
        return this.numbers;
    }
    setNumber(num) {
        this.numbers = num;
    }
    getShow() {
        return this.show;
    }
    setShow() {
        this.show = !this.show;
    }
}
ShowInitialService.ɵfac = function ShowInitialService_Factory(t) { return new (t || ShowInitialService)(); };
ShowInitialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowInitialService, factory: ShowInitialService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowInitialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\forcaGame\forca-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map