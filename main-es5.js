function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _show_initial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./show-initial.service */
    "./src/app/show-initial.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./initial/initial.component */
    "./src/app/initial/initial.component.ts");
    /* harmony import */


    var _principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./principal/principal.component */
    "./src/app/principal/principal.component.ts");

    function AppComponent_app_initial_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-initial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_app_principal_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-principal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      // show: boolean = true;s
      function AppComponent(showService) {
        _classCallCheck(this, AppComponent);

        this.showService = showService;
        this.title = "forca-game";
      } // ngOnInit() {
      //   this.show = this.showService.getShow();
      //   console.log("showValue:", this.show);
      // }


      _createClass(AppComponent, [{
        key: "showInicialGet",
        value: function showInicialGet() {
          return this.showService.getShow();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_initial_service__WEBPACK_IMPORTED_MODULE_1__["ShowInitialService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_initial_0_Template, 2, 0, "app-initial", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_principal_1_Template, 2, 0, "app-principal", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInicialGet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showInicialGet());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        }]
      }], function () {
        return [{
          type: _show_initial_service__WEBPACK_IMPORTED_MODULE_1__["ShowInitialService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./initial/initial.component */
    "./src/app/initial/initial.component.ts");
    /* harmony import */


    var _show_initial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./show-initial.service */
    "./src/app/show-initial.service.ts");
    /* harmony import */


    var _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./principal/principal.component */
    "./src/app/principal/principal.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_show_initial_service__WEBPACK_IMPORTED_MODULE_5__["ShowInitialService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [_show_initial_service__WEBPACK_IMPORTED_MODULE_5__["ShowInitialService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/initial/initial.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/initial/initial.component.ts ***!
    \**********************************************/

  /*! exports provided: InitialComponent */

  /***/
  function srcAppInitialInitialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitialComponent", function () {
      return InitialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! querystring */
    "./node_modules/querystring/index.js");
    /* harmony import */


    var querystring__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _show_initial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../show-initial.service */
    "./src/app/show-initial.service.ts");

    var InitialComponent =
    /*#__PURE__*/
    function () {
      function InitialComponent(showService) {
        _classCallCheck(this, InitialComponent);

        this.showService = showService;
      }

      _createClass(InitialComponent, [{
        key: "salveNaumber",
        value: function salveNaumber(value) {
          this.showService.setNumber(value);
          this.inputValue = value;
        }
      }, {
        key: "clickOk",
        value: function clickOk(input) {
          this.showService.setNumber(input);
          this.inputValue = input;
          console.log("valorInput: ", input);
          var strInput = Object(querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"])(input);

          if (input <= 0 || input > 8 || input == "undefined" || input == "null" || input == "") {
            alert("Número deve ser maior que ZERO e menor que 8!");
          } else {
            this.showService.setShow();
            console.log(this.showService.getShow());
          }

          console.log("valorInput2: ", this.inputValue);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// fetch(
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
      }]);

      return InitialComponent;
    }();

    InitialComponent.ɵfac = function InitialComponent_Factory(t) {
      return new (t || InitialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_initial_service__WEBPACK_IMPORTED_MODULE_2__["ShowInitialService"]));
    };

    InitialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InitialComponent,
      selectors: [["app-initial"]],
      decls: 10,
      vars: 0,
      consts: [[1, "d-block", "p-2", "bg-dark", "text-white"], [1, "d-flex", "flex-wrap"], [1, "input-group", "mt-5"], ["id", "letterNumber", "type", "number", "placeholder", "Quantas letras tem sua palavra?", "aria-label", "Quantas letras?", "aria-describedby", "button-addon2", 1, "form-control", "d-flex", "mt-5"], ["inputValue", ""], [1, "input-group-append", "fixed-bottom", "d-flex", "flex-row", "mb-2"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary", "flex-fill", "p-2", 3, "click"]],
      template: function InitialComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FORCA APP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitialComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.clickOk(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " OK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaXRpYWwvaW5pdGlhbC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-initial",
          templateUrl: "./initial.component.html",
          styleUrls: ["./initial.component.css"]
        }]
      }], function () {
        return [{
          type: _show_initial_service__WEBPACK_IMPORTED_MODULE_2__["ShowInitialService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/principal/principal.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/principal/principal.component.ts ***!
    \**************************************************/

  /*! exports provided: PrincipalComponent */

  /***/
  function srcAppPrincipalPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function () {
      return PrincipalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _show_initial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../show-initial.service */
    "./src/app/show-initial.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PrincipalComponent_div_1__svg_svg_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrincipalComponent_div_1_h5_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15, " - ");
      }
    }

    function PrincipalComponent_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sua palavra tem a letra ", ctx_r9.popLetter.toUpperCase(), "?");
      }
    }

    function PrincipalComponent_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Selecione as posi\xE7\xF5es abaixo e confirme! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrincipalComponent_div_1_input_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_1_input_18_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var i_r17 = ctx.index;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.insertGapLetter(i_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r16 = ctx.$implicit;
        var i_r17 = ctx.index;

        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r11.isGapInput(_r18));
      }
    }

    function PrincipalComponent_div_1_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_1_div_19_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.yes();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sim ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_1_div_19_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.not();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " N\xE3o ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrincipalComponent_div_1_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_1_div_20_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.confirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Confirmar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrincipalComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FORCA APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PrincipalComponent_div_1__svg_svg_6_Template, 2, 0, "svg", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Letras usadas:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PrincipalComponent_div_1_h5_10_Template, 2, 1, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PrincipalComponent_div_1_div_11_Template, 4, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PrincipalComponent_div_1_div_12_Template, 3, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A palavra \xE9? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PrincipalComponent_div_1_input_18_Template, 2, 3, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PrincipalComponent_div_1_div_19_Template, 5, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PrincipalComponent_div_1_div_20_Template, 3, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.hearts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.usedLetters);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.quest);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.quest);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.inputLetters);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.quest);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.quest);
      }
    }

    function PrincipalComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FORCA APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A palavra que voc\xEA escolheu foi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tente mais uma vez, talvez na pr\xF3xima consiga ganhar! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_2_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.again();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.wordWin, "!");
      }
    }

    function PrincipalComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FORCA APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Parab\xE9ns!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " N\xE3o consegui acertar sua palavra. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Talvez na pr\xF3xima eu consiga! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrincipalComponent_div_3_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.again();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PrincipalComponent =
    /*#__PURE__*/
    function () {
      function PrincipalComponent(showService) {
        _classCallCheck(this, PrincipalComponent);

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

      _createClass(PrincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.timesHeart(this.lifes); //

          this.wordLenght(this.inputValue);
          this.findPopLetter();
        }
      }, {
        key: "timesHeart",
        value: function timesHeart(lifes) {
          for (var index = 0; index < lifes; index++) {
            this.hearts.push(index);
          }

          console.log("qnt arr h:", this.hearts);
        }
      }, {
        key: "wordLenght",
        value: function wordLenght(inputValue) {
          for (var index = 0; index < inputValue; index++) {
            this.inputLetters.push("_");
          }

          this.findWordsPerQuant(this.words);
          console.log("qnt arr word lenght:", this.inputLetters);
        }
      }, {
        key: "findWordsPerQuant",
        value: function findWordsPerQuant(arr) {
          var _iterator = _createForOfIteratorHelper(arr),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var word = _step.value;

              if (word.length == this.inputValue) {
                this.wordsPossible.push(word);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          console.log("arr wordsPos", this.wordsPossible);
        }
      }, {
        key: "findPopLetter",
        value: function findPopLetter() {
          var obj = [];
          var arrAlf = "";
          var arrNew = "";
          var bigLetter = "";
          var arra = {};

          var _iterator2 = _createForOfIteratorHelper(this.wordsPossible),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var i = _step2.value;

              for (var j = 0; j < i.length; j++) {
                arrAlf += i.substring(j, j + 1);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          function letterFrequency(s) {
            for (var chave in s) {
              var _char = s[chave].toLowerCase();

              if (arra[_char] !== undefined) arra[_char]++;else arra[_char] = 1;
              obj.push({
                letter: s[chave],
                times: arra[_char]
              });
            }

            function Biggest() {
              var big = 0;

              for (var _i = 0, _obj = obj; _i < _obj.length; _i++) {
                var i = _obj[_i];

                if (i.times > big) {
                  big = i.times;
                  bigLetter = i.letter;
                }
              }

              console.log("maior:", obj);
              console.log("pop:", bigLetter);
              console.log("arrrr:", arrAlf);
            }

            Biggest(); // console.log("big:", bigLetter);
          }

          letterFrequency(arrAlf);
          this.popLetter = bigLetter;
          console.log("pop:", this.popLetter);
        } //-----------------

      }, {
        key: "findNewPopLetter",
        value: function findNewPopLetter() {
          var obj = [];
          var arrAlf = "";
          var arrNew = "";
          var bigLetter = "";
          var arra = {};

          var _iterator3 = _createForOfIteratorHelper(this.wordsPossible),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var i = _step3.value;
              var isTrue = true; // console.log("letrasUsadas  :", this.usedLetters);

              for (var j = 0; j < i.length; j++) {
                var _iterator4 = _createForOfIteratorHelper(this.usedLetters),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var y = _step4.value;

                    if (i[j] == y) {
                      isTrue = false;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                if (isTrue) {
                  arrAlf += i[j];
                }

                isTrue = true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          function letterFrequency(s) {
            for (var chave in s) {
              var _char2 = s[chave].toLowerCase();

              if (arra[_char2] !== undefined) arra[_char2]++;else arra[_char2] = 1;
              obj.push({
                letter: s[chave],
                times: arra[_char2]
              });
            }

            function Biggest() {
              var big = 0;

              for (var _i2 = 0, _obj2 = obj; _i2 < _obj2.length; _i2++) {
                var i = _obj2[_i2];

                if (i.times > big) {
                  big = i.times;
                  bigLetter = i.letter;
                }
              }

              console.log("pop:", bigLetter);
              console.log("arrrr:", arrAlf);
              console.log("maior:", obj);
            }

            Biggest(); // console.log("big:", bigLetter);
          }

          letterFrequency(arrAlf);
          this.popLetter = bigLetter;
          console.log("pop:", this.popLetter);
        }
      }, {
        key: "isGapInput",
        value: function isGapInput(input) {
          console.log("inp:", input.value);
          if (input.value != "_" || this.quest) return true;else return false;
        }
      }, {
        key: "yes",
        value: function yes() {
          this.quest = !this.quest;
          this.usedLetters.push(this.popLetter);
          console.log("inLet:", this.inputLetters);
        }
      }, {
        key: "insertGapLetter",
        value: function insertGapLetter(index) {
          this.inputLetters[index] = this.popLetter.toLocaleUpperCase();
          console.log("inLet after:", this.inputLetters);
          this.verifyPosLetter(index);
        }
      }, {
        key: "confirm",
        value: function confirm() {
          this.quest = !this.quest;
          this.findNewPopLetter();
          this.isWin();
        }
      }, {
        key: "verifyPosLetter",
        value: function verifyPosLetter(index) {
          var arr = [];

          var _iterator5 = _createForOfIteratorHelper(this.wordsPossible),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var i = _step5.value;

              if (i.substring(index, index + 1) == this.popLetter) {
                arr.push(i);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          this.wordsPossible = arr;
          console.log("arrPoss: ", this.wordsPossible);
        }
      }, {
        key: "not",
        value: function not() {
          this.usedLetters.push(this.popLetter);
          this.hearts.shift();
          this.wordsPossible = this.removeWord(this.popLetter);
          console.log(this.wordsPossible);
          this.findNewPopLetter();
          this.isOver();
        }
      }, {
        key: "removeWord",
        value: function removeWord(letter) {
          var arr = [];
          var isEqual = true;

          var _iterator6 = _createForOfIteratorHelper(this.wordsPossible),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var i = _step6.value;

              for (var j = 0; j < i.length; j++) {
                if (i.substring(j, j + 1) == letter) {
                  isEqual = false;
                }
              }

              if (isEqual == true) {
                arr.push(i);
              }

              isEqual = true;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return arr;
          console.log("arr: ", arr);
        }
      }, {
        key: "isOver",
        value: function isOver() {
          if (this.hearts.length <= 0) {
            this.over = "over";
          }
        }
      }, {
        key: "isWin",
        value: function isWin() {
          var isDash = false;
          var wordWinTemp = "";
          console.log("input word:", this.inputLetters);

          var _iterator7 = _createForOfIteratorHelper(this.inputLetters),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var i = _step7.value;

              if (i == "_") {
                isDash = true;
              }

              wordWinTemp += i;
              console.log("input wordWin", this.wordWin);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          this.wordWin = wordWinTemp.toUpperCase();

          if (!isDash) {
            this.over = "win";
          }
        }
      }, {
        key: "again",
        value: function again() {
          window.location.reload();
        }
      }]);

      return PrincipalComponent;
    }();

    PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) {
      return new (t || PrincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_initial_service__WEBPACK_IMPORTED_MODULE_1__["ShowInitialService"]));
    };

    PrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrincipalComponent,
      selectors: [["app-principal"]],
      inputs: {
        inputValue: "inputValue"
      },
      decls: 4,
      vars: 4,
      consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "d-block", "p-2", "bg-dark", "text-white"], [1, "container", "row", "d-flex", "justify-content-end", "mt-2"], ["id", "life"], ["class", "bi bi-heart-fill", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["id", "oldletter", 1, "jumbotron", "d-flex", "mt-2", "justify-content-start", "align-items-start", 2, "height", "100px"], ["class", "text-uppercase font-weight-bold ", 4, "ngFor", "ngForOf"], ["class", "d-flex mt-4 justify-content-between align-self-center align-content-center", 4, "ngIf"], [1, "fixed-bottom", "mb-5"], [1, "input-group", "mb-5"], [1, "input-group-prepend", "mb-5"], [1, "input-group-text"], ["readonly", "", "type", "text", "aria-label", "1 name", "class", "form-control text-center", 3, "disabled", "id", "value", "click", 4, "ngFor", "ngForOf"], ["class", "fixed-bottom d-flex flex-row mb-2", 4, "ngIf"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-heart-fill"], ["fill-rule", "evenodd", "d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z", "clip-rule", "evenodd"], [1, "text-uppercase", "font-weight-bold"], [1, "d-flex", "mt-4", "justify-content-between", "align-self-center", "align-content-center"], [1, "d-flex", "mt-4"], ["readonly", "", "type", "text", "aria-label", "1 name", 1, "form-control", "text-center", 3, "disabled", "id", "value", "click"], ["gapInput", ""], [1, "fixed-bottom", "d-flex", "flex-row", "mb-2"], ["type", "button", 1, "btn", "btn-success", "flex-fill", "p-2", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "flex-fill", "p-2", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", "mt-2"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mt-2"], [1, "alert-heading"], [1, "mb-0"]],
      template: function PrincipalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrincipalComponent_div_1_Template, 21, 7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrincipalComponent_div_2_Template, 13, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PrincipalComponent_div_3_Template, 15, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.over);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "win");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "over");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrincipalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-principal",
          templateUrl: "./principal.component.html",
          styleUrls: ["./principal.component.css"]
        }]
      }], function () {
        return [{
          type: _show_initial_service__WEBPACK_IMPORTED_MODULE_1__["ShowInitialService"]
        }];
      }, {
        inputValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/show-initial.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/show-initial.service.ts ***!
    \*****************************************/

  /*! exports provided: ShowInitialService */

  /***/
  function srcAppShowInitialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowInitialService", function () {
      return ShowInitialService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShowInitialService =
    /*#__PURE__*/
    function () {
      function ShowInitialService() {
        var _this = this;

        _classCallCheck(this, ShowInitialService);

        this.show = true;
        this.wordsFetch = [];
        fetch("https://raw.githubusercontent.com/felipejn/jogodaforca/master/palavras.txt").then(function (res) {
          // console.log(res.clone().text());
          return res.clone().text();
        }).then(function (data) {
          var arrWords = data.split("\n");
          console.log(arrWords);
          _this.wordsFetch = arrWords;
        });
      }

      _createClass(ShowInitialService, [{
        key: "getWordsFetch",
        value: function getWordsFetch() {
          return this.wordsFetch;
        }
      }, {
        key: "getNumber",
        value: function getNumber() {
          return this.numbers;
        }
      }, {
        key: "setNumber",
        value: function setNumber(num) {
          this.numbers = num;
        }
      }, {
        key: "getShow",
        value: function getShow() {
          return this.show;
        }
      }, {
        key: "setShow",
        value: function setShow() {
          this.show = !this.show;
        }
      }]);

      return ShowInitialService;
    }();

    ShowInitialService.ɵfac = function ShowInitialService_Factory(t) {
      return new (t || ShowInitialService)();
    };

    ShowInitialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShowInitialService,
      factory: ShowInitialService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowInitialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\workspace\forcaGame\forca-game\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map