"use strict";
(self["webpackChunkng_bolby"] = self["webpackChunkng_bolby"] || []).push([["main"],{

/***/ 5529:
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": function() { return /* binding */ Config; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);


var Config = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function Config() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Config);
});
Config.config = {
  theme: 'default',
  themeType: 'default' // default, dark, light
};

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/layout/layout.component */ 5987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: '',
  redirectTo: '/theme/view',
  pathMatch: 'full'
}, {
  path: 'theme',
  component: _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
  children: [{
    path: 'view',
    loadChildren: function loadChildren() {
      return __webpack_require__.e(/*! import() */ "src_app_view_view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./view/view.module */ 3070)).then(function (module) {
        return module.ViewModule;
      });
    }
  }]
}];
var AppRoutingModule = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader/loader.component */ 8868);





var AppComponent = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppComponent() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppComponent);
  this.title = 'Okk';
});
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-click-outside */ 3530);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/layout/layout.component */ 5987);
/* harmony import */ var _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loader/loader.module */ 40);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











var AppModule = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [],
  imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__.LoaderModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__.LayoutComponent],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__.LoaderModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  });
})();

/***/ }),

/***/ 8868:
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": function() { return /* binding */ LoaderComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-config */ 5529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


/* spinner */






var _c0 = function _c0(a0) {
  return {
    light: a0
  };
};
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div")(4, "div")(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "svg", 5)(14, "defs")(15, "filter", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "feGaussianBlur", 7)(17, "feColorMatrix", 8)(18, "feBlend", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r0.themeConfig.themeType === "light"));
  }
}
var LoaderComponent = /*#__PURE__*/function () {
  function LoaderComponent(router, document, activatedRoute) {
    var _this = this;
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoaderComponent);
    this.router = router;
    this.document = document;
    this.activatedRoute = activatedRoute;
    this.isSpinnerVisible = true;
    this.router.events.subscribe(function (event) {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
        _this.isSpinnerVisible = true;
      } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationError) {
        _this.isSpinnerVisible = false;
      }
    }, function () {
      _this.isSpinnerVisible = false;
    });
    this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__.Config.config;
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoaderComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.isSpinnerVisible = false;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  decls: 1,
  vars: 1,
  consts: [["id", "preloader", 3, "ngClass", 4, "ngIf"], ["id", "preloader", 3, "ngClass"], [1, "outer"], [1, "infinityChrome"], [1, "infinity"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 1, "goo-outer"], ["id", "goo"], ["in", "SourceGraphic", "stdDeviation", "6", "result", "blur"], ["in", "blur", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", "result", "goo"], ["in", "SourceGraphic", "in2", "goo"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 19, 3, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 40:
/*!****************************************************!*\
  !*** ./src/app/components/loader/loader.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderModule": function() { return /* binding */ LoaderModule; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component */ 8868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var LoaderModule = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoaderModule() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoaderModule);
});
LoaderModule.ɵfac = function LoaderModule_Factory(t) {
  return new (t || LoaderModule)();
};
LoaderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LoaderModule
});
LoaderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoaderModule, {
    declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent]
  });
})();

/***/ }),

/***/ 4293:
/*!***************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.directive.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyDirective": function() { return /* binding */ ScrollSpyDirective; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




var ScrollSpyDirective = /*#__PURE__*/function () {
  function ScrollSpyDirective(_el) {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollSpyDirective);
    this._el = _el;
    this.spiedTags = [];
    this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollSpyDirective, [{
    key: "onScroll",
    value: function onScroll(event) {
      var _this = this;
      var currentSection = '';
      var children = this._el.nativeElement.children;
      var scrollTop = event.target.scrollTop;
      var parentOffset = event.target.offsetTop;
      var _loop = function _loop() {
        var element = children[i];
        if (_this.spiedTags.some(function (spiedTag) {
          return spiedTag === element.tagName;
        })) {
          if (element.offsetTop - parentOffset <= scrollTop) {
            currentSection = element.id;
          }
        }
      };
      for (var i = 0; i < children.length; i++) {
        _loop();
      }
      if (currentSection && currentSection !== this.currentSection) {
        this.currentSection = currentSection;
        this.sectionChange.emit(this.currentSection);
      }
      if (currentSection === 'home' && document.querySelector('#return-to-top').hasAttribute('style')) {
        document.querySelector('#return-to-top').removeAttribute('style');
      } else if (!document.querySelector('#return-to-top').hasAttribute('style')) {
        document.querySelector('#return-to-top').style.display = 'block';
      }
    }
  }]);
}();
ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) {
  return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};
ScrollSpyDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ScrollSpyDirective,
  selectors: [["", "scrollSpy", ""]],
  hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      });
    }
  },
  inputs: {
    spiedTags: "spiedTags"
  },
  outputs: {
    sectionChange: "sectionChange"
  }
});

/***/ }),

/***/ 821:
/*!*************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyService": function() { return /* binding */ ScrollSpyService; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var ScrollSpyService = /*#__PURE__*/function () {
  function ScrollSpyService() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollSpyService);
    this.counter = 'home';
    this.count = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.counter);
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollSpyService, [{
    key: "nextCount",
    value: function nextCount(value) {
      this.count.next(value);
    }
  }]);
}();
ScrollSpyService.ɵfac = function ScrollSpyService_Factory(t) {
  return new (t || ScrollSpyService)();
};
ScrollSpyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ScrollSpyService,
  factory: ScrollSpyService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3040:
/*!**************************************************************!*\
  !*** ./src/app/components/sections/about/about.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);




var AboutComponent = /*#__PURE__*/function () {
  function AboutComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutComponent);
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 84,
  vars: 3,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-3"], [1, "text-center", "text-md-left"], ["src", "assets/images/avatar-1.svg", "alt", "leslie"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "col-md-9", "triangle-left-md", "triangle-top-sm"], [1, "rounded", "bg-white", "shadow-dark", "padding-30"], [1, "col-md-6"], [1, "mt-3"], ["href", "javascript:", 1, "btn", "btn-default"], [1, "skill-item"], [1, "skill-info", "clearfix"], [1, "float-left", "mb-3", "mt-0"], [1, "float-right"], ["type", "warning", 3, "value"], [1, "spacer-20"], ["type", "danger", 3, "value"], ["type", "primary", 3, "value"], [1, "spacer-70"], [1, "col-md-3", "col-sm-6"], [1, "fact-item"], [1, "icon", "icon-fire"], [1, "details"], [1, "mb-0", "mt-0", "number"], [1, "count"], [1, "mb-0"], [1, "icon", "icon-cup"], [1, "icon", "icon-people"], [1, "icon", "icon-badge"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "About Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 3)(12, "div", 10)(13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " I am Leslie Chihwai web developer from Zimbabwe. I have rich experience in web site design and building and customization, also I am good at WordPress, UI/UX Design , cloud computing, RPA and mobile app development. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Download CV");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "div", 13)(21, "div", 14)(22, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "85%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ngb-progressbar", 17)(27, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "UI/UX design");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "95%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "ngb-progressbar", 19)(35, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13)(37, "div", 14)(38, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "RPA & Cloud computing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "70%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "ngb-progressbar", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 3)(45, "div", 22)(46, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 25)(49, "h3", 26)(50, "em", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "198");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "UX Projects completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 22)(56, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 25)(59, "h3", 26)(60, "em", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Systems completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 22)(66, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 25)(69, "h3", 26)(70, "em", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Satisfied clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 22)(76, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 25)(79, "h3", 26)(80, "em", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "35+");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "UI Collaborations");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 70);
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbProgressbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 1896:
/*!************************************************************!*\
  !*** ./src/app/components/sections/blog/blog.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": function() { return /* binding */ BlogComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var BlogComponent = /*#__PURE__*/function () {
  function BlogComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogComponent);
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "scrollTo",
    value: function scrollTo(section) {
      var sectionHtml = document.querySelector('#' + section);
      if (sectionHtml !== null) {
        sectionHtml.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }]);
}();
BlogComponent.ɵfac = function BlogComponent_Factory(t) {
  return new (t || BlogComponent)();
};
BlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BlogComponent,
  selectors: [["app-blog"]],
  decls: 56,
  vars: 0,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row", "blog-wrapper"], [1, "col-md-4"], [1, "blog-item", "rounded", "bg-white", "shadow-dark", "wow", "fadeIn"], [1, "thumb"], ["href", "javascript:"], [1, "category"], ["href", "javascript:", 3, "click"], ["src", "assets/images/blog/1.svg", "alt", "blog-title"], [1, "details"], [1, "my-0", "title"], ["href", "https://www.linkedin.com/in/leslie-chihwai-284515170/details/certifications/"], [1, "list-inline", "meta", "mb-0", "mt-2"], [1, "list-inline-item"], ["src", "assets/images/blog/2.svg", "alt", "blog-title"], ["href", "https://www.credly.com/badges/32754b0f-1e7c-457e-a5ba-b07a34fc86ac/public_url"], ["src", "assets/images/blog/3.svg", "alt", "blog-title"], ["href", "https://www.credly.com/badges/a757c182-03f5-4f7f-92c4-25af96d8a89e/public_url"]],
  template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Latest Updates");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7)(9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Licenses and Certifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_Template_a_click_11_listener() {
        return ctx.scrollTo("home");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "h4", 12)(15, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Agile Project Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 14)(18, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "June 2024");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "LinkedIn");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 4)(23, "div", 5)(24, "div", 6)(25, "a", 7)(26, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Certification");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_Template_a_click_28_listener() {
        return ctx.scrollTo("home");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 11)(31, "h4", 12)(32, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Google UX Design Professional");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ul", 14)(35, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "July, 2024");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 4)(40, "div", 5)(41, "div", 6)(42, "a", 7)(43, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Badge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_Template_a_click_45_listener() {
        return ctx.scrollTo("home");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 11)(48, "h4", 12)(49, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "AWS Cloud Quest Practioner ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ul", 14)(52, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "July, 2024");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "AWS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 1225:
/*!******************************************************************!*\
  !*** ./src/app/components/sections/contact/contact.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": function() { return /* binding */ ContactComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var ContactComponent = /*#__PURE__*/function () {
  function ContactComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactComponent);
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 37,
  vars: 0,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-4"], [1, "contact-info"], [1, "wow", "fadeInUp"], ["href", "mailto:chihwaileslie@gmail.com"], [1, "col-md-8"], ["id", "contact-form", "method", "post", "action", "javascript:", 1, "contact-form", "mt-6"], [1, "messages"], [1, "column", "col-md-6"], [1, "form-group"], ["type", "text", "name", "InputName", "id", "InputName", "placeholder", "Your name", "required", "required", "data-error", "Name is required.", 1, "form-control"], [1, "help-block", "with-errors"], ["type", "email", "id", "InputEmail", "name", "InputEmail", "placeholder", "Email address", "required", "required", "data-error", "Email is required.", 1, "form-control"], [1, "column", "col-md-12"], ["type", "text", "id", "InputSubject", "name", "InputSubject", "placeholder", "Subject", "required", "required", "data-error", "Subject is required.", 1, "form-control"], ["name", "InputMessage", "id", "InputMessage", "rows", "5", "placeholder", "Message", "required", "required", "data-error", "Message is required.", 1, "form-control"], ["type", "submit", "name", "submit", "id", "submit", "value", "Submit", 1, "btn", "btn-default"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Get In Touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Let's talk about everything!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Don't like forms? Send me an ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ". \uD83D\uDC4B");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Call or WhatsApp me on +263785670693 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 3)(19, "div", 11)(20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 13)(22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11)(24, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 15)(26, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16)(28, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 17)(30, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 16)(32, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "textarea", 18)(34, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 3747:
/*!************************************************************************!*\
  !*** ./src/app/components/sections/experience/experience.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": function() { return /* binding */ ExperienceComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var ExperienceComponent = /*#__PURE__*/function () {
  function ExperienceComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExperienceComponent);
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExperienceComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
  return new (t || ExperienceComponent)();
};
ExperienceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ExperienceComponent,
  selectors: [["app-experience"]],
  decls: 66,
  vars: 0,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-6"], [1, "timeline", "edu", "rounded", "bg-white", "shadow-dark", "padding-30", "overflow-hidden"], [1, "timeline-container", "wow", "fadeInUp"], [1, "content"], [1, "time"], [1, "title"], ["data-wow-delay", "0.2s", 1, "timeline-container", "wow", "fadeInUp"], ["data-wow-delay", "0.4s", 1, "timeline-container", "wow", "fadeInUp"], [1, "line"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "timeline", "exp", "bg-white", "shadow-dark", "rounded", "padding-30", "overflow-hidden"]],
  template: function ExperienceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "2019-2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Bachelor's Degree");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "University of Zimbabwe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Bsc Hon Computer Science ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Degree class - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "div", 7)(21, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "2013 - 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "High School Diploma");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Harare High School ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Ordinary and Advanced level");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 11)(30, "div", 7)(31, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "2003-2013");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Elementary School");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Chirodzo School");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14)(41, "div", 6)(42, "div", 7)(43, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "2019 - Present");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Web and Mobile Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Professional web and mobile development.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 10)(50, "div", 7)(51, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "2020 - present");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Professional UX designing (Google certified - June 2024).");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 11)(58, "div", 7)(59, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "2023 - present");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Back-End Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Skill building in progress - slightly proffesional.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 130:
/*!******************************************************************!*\
  !*** ./src/app/components/sections/gallery/gallery.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": function() { return /* binding */ GalleryComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ 5015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function GalleryComponent_div_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleryComponent_div_1_img_1_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r4.open(i_r2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var image_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.getSantizeUrl(image_r1.thumb), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function GalleryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GalleryComponent_div_1_img_1_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r2 === 0);
  }
}
var GalleryComponent = /*#__PURE__*/function () {
  function GalleryComponent(lightbox, lightboxEvent, lighboxConfig, sanitizer) {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GalleryComponent);
    this.lightbox = lightbox;
    this.lightboxEvent = lightboxEvent;
    this.lighboxConfig = lighboxConfig;
    this.sanitizer = sanitizer;
    this.albums = this.albums ? this.albums : [];
    lighboxConfig.fadeDuration = 1;
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GalleryComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "getSantizeUrl",
    value: function getSantizeUrl(url) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }
  }, {
    key: "open",
    value: function open(index) {
      var _this = this;
      this.subscription = this.lightboxEvent.lightboxEvent$.subscribe(function (event) {
        return _this._onReceivedEvent(event);
      });
      this.lightbox.open(this.albums, index, {
        wrapAround: true,
        showImageNumberLabel: true
      });
    }
  }, {
    key: "_onReceivedEvent",
    value: function _onReceivedEvent(event) {
      if (event.id === ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.CLOSE) {
        this.subscription.unsubscribe();
      }
    }
  }]);
}();
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
  return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.Lightbox), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxEvent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer));
};
GalleryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GalleryComponent,
  selectors: [["app-gallery"]],
  inputs: {
    albums: "albums"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "column", "has-text-centered"], ["class", "img-row", 4, "ngFor", "ngForOf"], [1, "img-row"], ["class", "img-frame", 3, "src", "click", 4, "ngIf"], [1, "img-frame", 3, "src", "click"]],
  template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.albums);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 8879:
/*!************************************************************!*\
  !*** ./src/app/components/sections/home/home.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-animate */ 4887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);






function HomeComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "UI/UX designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
function HomeComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Front-End developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
function HomeComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Photographer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
function HomeComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "RPA developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
function HomeComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "AI/ML engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
function HomeComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "IoT engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
function HomeComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Web developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
function HomeComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cloud engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
function HomeComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Mobile developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}
var _c0 = function _c0(a0) {
  return {
    light: a0
  };
};
var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent() {
    var _this = this;
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);
    this.bounce = 1;
    setInterval(function () {
      _this.bounce = _this.bounce < 9 ? _this.bounce + 1 : 1;
    }, 3000);
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      setTimeout(function () {
        var Parallax = __webpack_require__(/*! parallax-js */ 4360);
        var scene = document.getElementById('scene');
        var parallaxInstance1 = new Parallax(scene, {
          relativeInput: false
        });
      }, 2000);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(section) {
      var sectionHtml = document.querySelector('#' + section);
      if (sectionHtml !== null) {
        sectionHtml.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }]);
}();
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  inputs: {
    themeType: "themeType"
  },
  decls: 69,
  vars: 12,
  consts: [[1, "container"], [1, "intro"], ["src", "assets/images/avatar-1.svg", "alt", "Leslie", 1, "mb-4"], [1, "mb-2", "mt-0"], [1, "text-rotating", "morphext"], [4, "ngIf"], [1, "social-icons", "light", "list-inline", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "https://www.instagram.com/lesliechihwai/"], [1, "fab", "fa-instagram"], ["href", "https://x.com/chihwai_leslie"], [1, "fab", "fa-twitter"], ["href", "https://www.behance.net/lesliechihwai"], [1, "fab", "fa-behance"], ["href", "https://dribbble.com/LeslieChihwai"], [1, "fab", "fa-dribbble"], ["href", "https://www.pinterest.com/lesliechihwai/"], [1, "fab", "fa-pinterest-p"], [1, "mt-4"], ["href", "javascript:", 1, "btn", "btn-default", 3, "click"], [1, "scroll-down", 3, "ngClass"], ["href", "javascript:", 1, "mouse-wrapper", 3, "click"], [1, "mouse"], [1, "wheel"], ["id", "scene", "data-relative-input", "true", 1, "parallax"], ["width", "27", "height", "29", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p1"], ["d", "M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z", "fill", "#FFD15C", "fill-rule", "evenodd"], ["width", "26", "height", "26", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p2"], ["d", "M13 3.3541L2.42705 24.5h21.1459L13 3.3541z", "stroke", "#FF4C60", "stroke-width", "3", "fill", "none", "fill-rule", "evenodd"], ["width", "30", "height", "25", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p3"], ["d", "M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z", "fill", "#44D7B6", "fill-rule", "evenodd"], ["width", "15", "height", "23", "data-depth", "0.6", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p4"], ["transform", "rotate(30 9.86603 10.13397)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#FFD15C", "fill-rule", "evenodd"], ["width", "15", "height", "23", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p5"], ["transform", "rotate(30 9.86603 10.13397)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "49", "height", "17", "data-depth", "0.5", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p6"], ["fill", "#FF4C60", "fill-rule", "evenodd"], ["d", "M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"], ["d", "M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"], ["width", "26", "height", "26", "data-depth", "0.4", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p7"], ["d", "M13 22.6459L2.42705 1.5h21.1459L13 22.6459z", "stroke", "#FFD15C", "stroke-width", "3", "fill", "none", "fill-rule", "evenodd"], ["width", "19", "height", "21", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p8"], ["transform", "rotate(-40 6.25252 10.12626)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "30", "height", "25", "data-depth", "0.3", "data-depth-y", "-1.30", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p9"], ["d", "M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "47", "height", "29", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p10"], ["fill", "#44D7B6", "fill-rule", "evenodd"], ["d", "M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"], ["d", "M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"], ["width", "33", "height", "20", "data-depth", "0.5", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p11"], ["d", "M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z", "fill", "#FFD15C", "fill-rule", "evenodd"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Leslie Chihwai");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "I'm a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_span_8_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomeComponent_span_9_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomeComponent_span_10_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomeComponent_span_11_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeComponent_span_12_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HomeComponent_span_13_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HomeComponent_span_14_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HomeComponent_span_15_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HomeComponent_span_16_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 6)(18, "li", 7)(19, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 7)(22, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 7)(25, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 7)(28, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 7)(31, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18)(34, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_34_listener() {
        return ctx.scrollTo("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Hire me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20)(37, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_37_listener() {
        return ctx.scrollTo("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Scroll Down");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "svg", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "path", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "svg", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "svg", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "path", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "svg", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "rect", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "rect", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "svg", 35)(54, "g", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "path", 37)(56, "path", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "svg", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "svg", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "rect", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "svg", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "path", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "svg", 45)(64, "g", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "path", 47)(66, "path", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "svg", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "path", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.themeType === "light"));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('bounce', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_5__.bounceIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: {
        timing: 3,
        delay: 0,
        a: '3000px',
        b: '-25px',
        c: '10px',
        d: '-5px'
      }
    }))])]
  }
});

/***/ }),

/***/ 638:
/*!******************************************************************!*\
  !*** ./src/app/components/sections/pricing/pricing.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": function() { return /* binding */ PricingComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var PricingComponent = /*#__PURE__*/function () {
  function PricingComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PricingComponent);
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PricingComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
PricingComponent.ɵfac = function PricingComponent_Factory(t) {
  return new (t || PricingComponent)();
};
PricingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PricingComponent,
  selectors: [["app-pricing"]],
  decls: 56,
  vars: 0,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeIn"], [1, "spacer-60"], [1, "row"], [1, "col-md-4", "pr-md-0", "mt-md-4", "mt-0"], [1, "price-item", "bg-white", "rounded", "shadow-dark", "text-center"], ["src", "assets/images/price-1.svg", "alt", "Regular"], [1, "plan"], [1, "price"], ["href", "javascript:", 1, "btn", "btn-default"], [1, "col-md-4", "px-md-0", "my-4", "my-md-0"], [1, "price-item", "bg-white", "rounded", "shadow-dark", "text-center", "best"], ["src", "assets/images/price-2.svg", "alt", "Premium"], [1, "col-md-4", "pl-md-0", "mt-md-4", "mt-0"], [1, "badge"], ["src", "assets/images/price-3.svg", "alt", "Ultimate"]],
  template: function PricingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Pricing Plans");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Basic");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "UX Designs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "UI Design Prototype, UX research and Design, portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3", 8)(15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10)(23, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "UI Design Prototype, UX research and Design, portfolio, full front-end development api intergration ready");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h3", 8)(31, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "800");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 13)(39, "div", 5)(40, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Recommended");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Full-stack Sytems");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "UI Design Prototype, UX research and Design, portfolio, full front-end development, api intergrations, email support");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h3", 8)(49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 5538:
/*!********************************************************!*\
  !*** ./src/app/components/sections/sections.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionsModule": function() { return /* binding */ SectionsModule; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ 5015);
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-image-slider */ 6118);
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-responsive-carousel */ 6406);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 8879);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 3040);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ 925);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ 3747);
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./works/works.component */ 4902);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog.component */ 1896);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ 1225);
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pricing/pricing.component */ 638);
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testimonials/testimonials.component */ 4094);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gallery/gallery.component */ 130);
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui-modal/ui-modal.component */ 5418);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngu/carousel */ 8804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);




















var SectionsModule = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SectionsModule() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SectionsModule);
});
SectionsModule.ɵfac = function SectionsModule_Factory(t) {
  return new (t || SectionsModule)();
};
SectionsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: SectionsModule
});
SectionsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxModule, ng_image_slider__WEBPACK_IMPORTED_MODULE_16__.NgImageSliderModule, angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__.IvyCarouselModule, _ngu_carousel__WEBPACK_IMPORTED_MODULE_18__.NguCarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SectionsModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_5__.ServicesComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__.ExperienceComponent, _works_works_component__WEBPACK_IMPORTED_MODULE_7__.WorksComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__.PricingComponent, _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_11__.TestimonialsComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__.GalleryComponent, _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_13__.UiModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxModule, ng_image_slider__WEBPACK_IMPORTED_MODULE_16__.NgImageSliderModule, angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__.IvyCarouselModule, _ngu_carousel__WEBPACK_IMPORTED_MODULE_18__.NguCarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule],
    exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_5__.ServicesComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__.ExperienceComponent, _works_works_component__WEBPACK_IMPORTED_MODULE_7__.WorksComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__.PricingComponent, _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_11__.TestimonialsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule]
  });
})();

/***/ }),

/***/ 925:
/*!********************************************************************!*\
  !*** ./src/app/components/sections/services/services.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": function() { return /* binding */ ServicesComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var ServicesComponent = /*#__PURE__*/function () {
  function ServicesComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ServicesComponent);
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ServicesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "scrollTo",
    value: function scrollTo(section) {
      var sectionHtml = document.querySelector('#' + section);
      if (sectionHtml !== null) {
        sectionHtml.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }]);
}();
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
  return new (t || ServicesComponent)();
};
ServicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ServicesComponent,
  selectors: [["app-services"]],
  decls: 35,
  vars: 0,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-4"], [1, "service-box", "rounded", "data-background", "padding-30", "text-center", "text-light", "shadow-blue", "bg-blue"], ["src", "assets/images/service-1.svg", "alt", "UI/UX design"], [1, "mb-3", "mt-0"], [1, "mb-0"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "service-box", "rounded", "data-background", "padding-30", "text-center", "shadow-yellow", "bg-yellow"], ["src", "assets/images/service-2.svg", "alt", "UI/UX design"], [1, "mt-5", "text-center"], ["href", "https://www.linkedin.com/in/leslie-chihwai-284515170/", 3, "click"]],
  template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "UI/UX design");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "From research, UX and UI designing using the 5 stages of UX design, i will professionally help you improve your systems. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4)(14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Web/ Mobile Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "I develop professional Web and Mobile applications that meet your clients' and personal needs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4)(22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "RPA Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "If you are looking to improve tedious process automation i am glad to help with that as well.I develop robots to do just that.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12)(30, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Looking for a custom job? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServicesComponent_Template_a_click_32_listener() {
        return ctx.scrollTo("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Click here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " to contact me! \uD83D\uDC4B");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 4094:
/*!****************************************************************************!*\
  !*** ./src/app/components/sections/testimonials/testimonials.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsComponent": function() { return /* binding */ TestimonialsComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





function TestimonialsComponent_ngb_carousel_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Jerrald Jerry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Product Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 17)(8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " I enjoy working with Leslie's designs. He makes the process fun and interesting. Super! \uD83D\uDC4D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function TestimonialsComponent_ngb_carousel_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Coffee Shack");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Coffe shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 17)(8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Leslie Developed a very good system for us. The level of sales has been sky rpocketing since ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function TestimonialsComponent_ngb_carousel_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TestimonialsComponent_ngb_carousel_5_ng_template_1_Template, 10, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TestimonialsComponent_ngb_carousel_5_ng_template_2_Template, 10, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interval", 5000)("showNavigationArrows", false);
  }
}
var TestimonialsComponent = /*#__PURE__*/function () {
  function TestimonialsComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TestimonialsComponent);
    this.images = [944, 1011, 984].map(function (n) {
      return "https://picsum.photos/id/".concat(n, "/900/500");
    });
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TestimonialsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) {
  return new (t || TestimonialsComponent)();
};
TestimonialsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TestimonialsComponent,
  selectors: [["app-testimonials"]],
  inputs: {
    themeType: "themeType"
  },
  decls: 39,
  vars: 9,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "testimonials-wrapper"], [3, "interval", "showNavigationArrows", 4, "ngIf"], [1, "row", 2, "margin-top", "60px"], [1, "col-md-3", "col-6"], [1, "client-item"], [1, "inner"], ["alt", "client-name", 3, "src"], [3, "interval", "showNavigationArrows"], ["ngbSlide", ""], [1, "testimonial-item", "text-center", "mx-auto"], [1, "thumb", "mb-3", "mx-auto"], ["src", "assets/images/avatar-4.svg", "alt", "customer-name"], [1, "mt-3", "mb-0"], [1, "subtitle"], [1, "bg-white", "padding-30", "shadow-dark", "rounded", "triangle-top", "position-relative", "mt-4"], [1, "mb-0"], ["src", "assets/images/avatar-3.svg", "alt", "customer-name"]],
  template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Clients & Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TestimonialsComponent_ngb_carousel_5_Template, 3, 2, "ngb-carousel", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6)(16, "div", 7)(17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6)(20, "div", 7)(21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6)(24, "div", 7)(25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 6)(28, "div", 7)(29, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6)(32, "div", 7)(33, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 6)(36, "div", 7)(37, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.images);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeType === "dark" ? "assets/images/client-1-light.svg" : "assets/images/client-1.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeType === "dark" ? "assets/images/client-2-light.svg" : "assets/images/client-2.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeType === "dark" ? "assets/images/client-3-light.svg" : "assets/images/client-3.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeType === "dark" ? "assets/images/client-4-light.svg" : "assets/images/client-4.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeType === "dark" ? "assets/images/client-5-light.svg" : "assets/images/client-5.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeType === "dark" ? "assets/images/client-6-light.svg" : "assets/images/client-6.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeType === "dark" ? "assets/images/client-7-light.svg" : "assets/images/client-7.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeType === "dark" ? "assets/images/client-8-light.svg" : "assets/images/client-8.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbSlide],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 5418:
/*!********************************************************************!*\
  !*** ./src/app/components/sections/ui-modal/ui-modal.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModalComponent": function() { return /* binding */ UiModalComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function UiModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UiModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
var _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];
var _c1 = function _c1(a0) {
  return {
    in: a0
  };
};
var _c2 = function _c2(a0, a1) {
  return {
    display: a0,
    opacity: a1
  };
};
var _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];
var UiModalComponent = /*#__PURE__*/function () {
  function UiModalComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UiModalComponent);
    this.hideHeader = false;
    this.hideFooter = false;
    this.containerClick = true;
    this.visible = false;
    this.visibleAnimate = false;
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UiModalComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "show",
    value: function show() {
      var _this = this;
      this.visible = true;
      setTimeout(function () {
        return _this.visibleAnimate = true;
      }, 100);
      document.querySelector('body').classList.add('modal-open');
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;
      this.visibleAnimate = false;
      setTimeout(function () {
        return _this2.visible = false;
      }, 300);
      document.querySelector('body').classList.remove('modal-open');
    }
  }, {
    key: "onContainerClicked",
    value: function onContainerClicked(event) {
      if (event.target.classList.contains('modal') && this.containerClick === true) {
        this.hide();
      }
    }
  }]);
}();
UiModalComponent.ɵfac = function UiModalComponent_Factory(t) {
  return new (t || UiModalComponent)();
};
UiModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UiModalComponent,
  selectors: [["app-ui-modal"]],
  inputs: {
    dialogClass: "dialogClass",
    hideHeader: "hideHeader",
    hideFooter: "hideFooter",
    containerClick: "containerClick"
  },
  ngContentSelectors: _c3,
  decls: 7,
  vars: 10,
  consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], ["role", "document", 1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]],
  template: function UiModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UiModalComponent_Template_div_click_0_listener($event) {
        return ctx.onContainerClicked($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UiModalComponent_div_3_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UiModalComponent_div_6_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.dialogClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n}\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  transition: all 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUdBLGdDQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7QUFDTjtBQUdJO0VBSUUsMEJBQUE7QUFETjtBQUdJO0VBR0UsNkJBQUE7RUFJQSw2QkFBQTtBQUROO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRko7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoidWktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMge1xuICAmLm1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDUwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLypvdmVyZmxvdzogaGlkZGVuOyovXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgJi5mYWRlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG4gICAgJi5pbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAmLm1vZGFsLmZhZGUge1xuICAgICYuaW4gLm1vZGFsLWRpYWxvZyB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAgIH1cbiAgfVxuICAuYmFzaWMtY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gIH1cbiAgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTMxcHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG59XG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 4902:
/*!**************************************************************!*\
  !*** ./src/app/components/sections/works/works.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksComponent": function() { return /* binding */ WorksComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gallery/gallery.component */ 130);
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-modal/ui-modal.component */ 5418);
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-image-slider */ 6118);







function WorksComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorksComponent_div_26_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
      return _r7.open(0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 34)(3, "div", 35)(4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Art");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Project Managment Illustration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-gallery", 41, 42)(13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("albums", ctx_r0.singleGallery1);
  }
}
function WorksComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorksComponent_div_27_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
      return _r2.show();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 34)(3, "div", 35)(4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Creative");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "USSD and Mobile App Payments Walkthrough Screens");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 47)(12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function WorksComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48)(1, "a", 49)(2, "div", 34)(3, "div", 35)(4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Branding");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "ML Disease Prediction");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ng-image-slider", 51, 52)(13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("images", ctx_r3.videoObject);
  }
}
function WorksComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53)(1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorksComponent_div_41_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](43);
      return _r5.show();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 34)(3, "div", 35)(4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Creative");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Onboarding Motivation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 56)(12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function WorksComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "a", 57)(2, "div", 34)(3, "div", 35)(4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Systems");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Medical Web App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 59)(12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
var _c0 = function _c0(a0) {
  return {
    current: a0
  };
};
var WorksComponent = /*#__PURE__*/function () {
  function WorksComponent() {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WorksComponent);
    this.albums = [];
    this.videoObject = [{
      video: 'https://www.youtube.com/watch?v=QflygjPnuNk&t=5s',
      posterImage: 'assets/images/works/3.svg'
    }];
    this.workFilter = 'all';
    this.singleGallery1 = [{
      src: 'assets/images/works/1.svg',
      caption: 'Project Management Illustration',
      thumb: 'assets/images/works/1.svg'
    }];
    for (var i = 5; i >= 1; i--) {
      var album = {
        src: 'assets/images/works/' + i + '.svg',
        caption: 'Image ' + i + ' caption here',
        thumb: 'assets/images/works/' + i + '.svg'
      };
      this.albums.push(album);
    }
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WorksComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.workFilter = e.target.value;
    }
  }]);
}();
WorksComponent.ɵfac = function WorksComponent_Factory(t) {
  return new (t || WorksComponent)();
};
WorksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: WorksComponent,
  selectors: [["app-works"]],
  decls: 57,
  vars: 21,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "portfolio-filter", "list-inline", "wow", "fadeInUp"], [1, "list-inline-item", 3, "ngClass", "click"], [1, "pf-filter-wrapper"], [1, "portfolio-filter-mobile", 3, "change"], ["value", "all"], ["value", "creative"], ["value", "art"], ["value", "design"], ["value", "branding"], [1, "row", "portfolio-wrapper"], ["class", "col-md-4 col-sm-6 grid-item art", 4, "ngIf"], ["class", "col-md-4 col-sm-6 grid-item creative design", 4, "ngIf"], ["dialogClass", "modal-dialog-centered work-modal", 3, "hideHeader", "hideFooter"], ["exampleModalCenter", ""], [1, "app-modal-body"], ["id", "small-dialog", 1, "white-popup", "zoom-anim-dialog", "mfp-hide"], ["src", "assets/images/single-work.svg", "alt", "Title"], ["href", "https://www.figma.com/proto/x5XiaQfmvi1qsm94h04cSK/Zimpost-AgencyOS?node-id=1621-12109&t=Nh0Zl2WkChhgRQW7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1621%3A12109", 1, "btn", "btn-default"], ["class", "col-md-4 col-sm-6 grid-item branding", 4, "ngIf"], ["class", "col-md-4 col-sm-6 grid-item creative", 4, "ngIf"], ["dialogClass", "modal-dialog-centered work-modal audio-modal", 3, "hideHeader", "hideFooter"], ["audioModal", ""], ["id", "music-on", "frameborder", "0", "allowfullscreen", "", "src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/385068290&color=%23ff5500&\nauto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&\nshow_teaser=true&visual=true", 1, "mfp-iframe"], [1, "load-more", "text-center", "mt-4"], ["href", "https://www.behance.net/lesliechihwai", 1, "btn", "btn-default"], [1, "fas", "fa-spinner"], [1, "portfolio-pagination", "list-inline", "d-none"], [1, "list-inline-item"], ["href", "javascript:"], [1, "col-md-4", "col-sm-6", "grid-item", "art"], ["href", "javascript:", 1, "work-image", 3, "click"], [1, "portfolio-item", "rounded", "shadow-dark"], [1, "details"], [1, "term"], [1, "title"], [1, "more-button"], [1, "icon-magnifier-add"], [1, "thumb"], [3, "albums"], ["singleGallery", ""], [1, "mask"], [1, "col-md-4", "col-sm-6", "grid-item", "creative", "design"], ["href", "javascript:", "data-toggle", "modal", 1, "work-content", 3, "click"], [1, "icon-options"], ["src", "assets/images/works/2.svg", "alt", "Portfolio-title"], [1, "col-md-4", "col-sm-6", "grid-item", "branding"], ["href", "javascript:", 1, "work-video"], [1, "icon-camrecorder"], [3, "images"], ["nav", ""], [1, "col-md-4", "col-sm-6", "grid-item", "creative"], ["href", "javascript:", 1, "work-video", 3, "click"], [1, "icon-music-tone-alt"], ["src", "assets/images/works/4.svg", "alt", "Portfolio-title"], ["href", "https://yems.netlify.app/", "target", "_blank"], [1, "icon-link"], ["src", "assets/images/works/6.svg", "alt", "Portfolio-title"]],
  template: function WorksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Recent works");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 3)(5, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorksComponent_Template_li_click_5_listener() {
        return ctx.workFilter = "all";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Everything");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorksComponent_Template_li_click_7_listener() {
        return ctx.workFilter = "art";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Illustrations");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorksComponent_Template_li_click_9_listener() {
        return ctx.workFilter = "design";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Systems");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorksComponent_Template_li_click_11_listener() {
        return ctx.workFilter = "branding";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Machine Learning");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5)(14, "select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function WorksComponent_Template_select_change_14_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Everything");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Creative");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Art");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Branding");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, WorksComponent_div_26_Template, 14, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, WorksComponent_div_27_Template, 13, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "app-ui-modal", 15, 16)(30, "div", 17)(31, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "USSD and Mobile App Payments Walkthrough Screens");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " I developed this app for a fintech company. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "View Prototype");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, WorksComponent_div_40_Template, 14, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, WorksComponent_div_41_Template, 13, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "app-ui-modal", 23, 24)(44, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "iframe", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, WorksComponent_div_46_Template, 13, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 26)(48, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " View more");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ul", 29)(52, "li", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "li", 30)(55, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.workFilter === "all"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.workFilter === "art"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c0, ctx.workFilter === "design"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c0, ctx.workFilter === "branding"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "art");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "creative" || ctx.workFilter === "design");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hideHeader", true)("hideFooter", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "branding");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "creative");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hideHeader", true)("hideFooter", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "creative" || ctx.workFilter === "design");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent, _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__.UiModalComponent, ng_image_slider__WEBPACK_IMPORTED_MODULE_6__.NgImageSliderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 4065:
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scroll-spy/scroll-spy.directive */ 4293);
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/sections.module */ 5538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var SharedModule = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SharedModule() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SharedModule);
});
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__.ScrollSpyDirective],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _sections_sections_module__WEBPACK_IMPORTED_MODULE_3__.SectionsModule], _sections_sections_module__WEBPACK_IMPORTED_MODULE_3__.SectionsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__.ScrollSpyDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _sections_sections_module__WEBPACK_IMPORTED_MODULE_3__.SectionsModule],
    exports: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__.ScrollSpyDirective, _sections_sections_module__WEBPACK_IMPORTED_MODULE_3__.SectionsModule]
  });
})();

/***/ }),

/***/ 5987:
/*!**************************************************!*\
  !*** ./src/app/theme/layout/layout.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": function() { return /* binding */ LayoutComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-config */ 5529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/scroll-spy/scroll-spy.service */ 821);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ 3530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);











function LayoutComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickOutside", function LayoutComponent_header_0_Template_header_clickOutside_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r3.openClass = "";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7)(2, "div", 8)(3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r5.openClass = ctx_r5.openClass === "open" ? "" : "open";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 10)(6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r0.openClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.mobileHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.themeConfig.themeType === "light" ? "assets/images/logo-dark.svg" : "assets/images/logo.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function LayoutComponent_header_1_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 30);
  }
}
function LayoutComponent_header_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_1_i_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 31);
  }
}
function LayoutComponent_header_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_1_i_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 32);
  }
}
function LayoutComponent_header_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_1_i_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 33);
  }
}
function LayoutComponent_header_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_1_i_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 34);
  }
}
function LayoutComponent_header_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_1_i_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 35);
  }
}
function LayoutComponent_header_1_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_1_i_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 36);
  }
}
function LayoutComponent_header_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
var _c0 = function _c0(a0) {
  return {
    active: a0
  };
};
function LayoutComponent_header_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function LayoutComponent_header_1_Template_header_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r20.onResize($event);
    }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7)(2, "nav", 14)(3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r22.collapsedCardToggle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 18)(8, "ul", 19)(9, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_li_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r23.scrollTo("home");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, LayoutComponent_header_1_i_11_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, LayoutComponent_header_1_span_12_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_li_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r24.scrollTo("about");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, LayoutComponent_header_1_i_15_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LayoutComponent_header_1_span_16_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_li_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r25.scrollTo("services");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, LayoutComponent_header_1_i_19_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, LayoutComponent_header_1_span_20_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_li_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r26.scrollTo("experience");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, LayoutComponent_header_1_i_23_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LayoutComponent_header_1_span_24_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_li_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r27.scrollTo("works");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, LayoutComponent_header_1_i_27_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, LayoutComponent_header_1_span_28_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_li_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r28.scrollTo("blog");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, LayoutComponent_header_1_i_31_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, LayoutComponent_header_1_span_32_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_li_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r29.scrollTo("contact");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, LayoutComponent_header_1_i_35_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, LayoutComponent_header_1_span_36_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.desktopHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.horizontalNavClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.desktopLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@collapsedCard", ctx_r1.collapsedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c0, ctx_r1.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c0, ctx_r1.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](36, _c0, ctx_r1.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](38, _c0, ctx_r1.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](40, _c0, ctx_r1.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](42, _c0, ctx_r1.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](44, _c0, ctx_r1.currentSection === "experience"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](46, _c0, ctx_r1.currentSection === "experience"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](48, _c0, ctx_r1.currentSection === "works"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](50, _c0, ctx_r1.currentSection === "works"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](52, _c0, ctx_r1.currentSection === "blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](54, _c0, ctx_r1.currentSection === "blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](56, _c0, ctx_r1.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](58, _c0, ctx_r1.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
  }
}
function LayoutComponent_header_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Testimonials");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_header_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 3)(1, "div", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nav")(5, "ul", 37)(6, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r39.scrollTo("home");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LayoutComponent_header_2_span_9_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r41.scrollTo("about");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LayoutComponent_header_2_span_13_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r42.scrollTo("services");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LayoutComponent_header_2_span_17_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r43.scrollTo("experience");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, LayoutComponent_header_2_span_21_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r44.scrollTo("works");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, LayoutComponent_header_2_span_25_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r45.scrollTo("pricing");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, LayoutComponent_header_2_span_29_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r46.scrollTo("testimonials");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, LayoutComponent_header_2_span_33_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r47.scrollTo("blog");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, LayoutComponent_header_2_span_37_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r48.scrollTo("contact");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, LayoutComponent_header_2_span_41_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 41)(43, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "\xA9 2024 Leslie Chihwai");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("d-flex align-items-start flex-column ", ctx_r2.openClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.desktopHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.desktopLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c0, ctx_r2.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c0, ctx_r2.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](36, _c0, ctx_r2.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](38, _c0, ctx_r2.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](40, _c0, ctx_r2.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](42, _c0, ctx_r2.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](44, _c0, ctx_r2.currentSection === "experience"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](46, _c0, ctx_r2.currentSection === "experience"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](48, _c0, ctx_r2.currentSection === "works"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](50, _c0, ctx_r2.currentSection === "works"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](52, _c0, ctx_r2.currentSection === "pricing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](54, _c0, ctx_r2.currentSection === "pricing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](56, _c0, ctx_r2.currentSection === "testimonials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](58, _c0, ctx_r2.currentSection === "testimonials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](60, _c0, ctx_r2.currentSection === "blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](62, _c0, ctx_r2.currentSection === "blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](64, _c0, ctx_r2.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](66, _c0, ctx_r2.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
  }
}
var LayoutComponent = /*#__PURE__*/function () {
  function LayoutComponent(scrollSpy, location) {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LayoutComponent);
    this.scrollSpy = scrollSpy;
    this.location = location;
    this.openClass = '';
    this.contentClass = 'content';
    this.mobileHeaderClass = 'mobile-header-1';
    this.desktopHeaderClass = 'desktop-header-1';
    this.horizontalNavClass = 'navbar-dark';
    this.desktopLogo = 'assets/images/logo.svg';
    this.collapsedCard = 'collapsed';
    this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__.Config.config;
    this.windowWidth = window.innerWidth;
    var currentURL = this.location.path();
    var baseHref = this.location['_baseHref'];
    if (baseHref) {
      currentURL = baseHref + this.location.path();
    }
    switch (currentURL) {
      case baseHref + '/theme/view/vertical/default':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'default';
        break;
      case baseHref + '/theme/view/vertical/dark':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'dark';
        break;
      case baseHref + '/theme/view/vertical/light':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'light';
        break;
      case baseHref + '/theme/view/collapsed/default':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'default';
        break;
      case baseHref + '/theme/view/collapsed/dark':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'dark';
        break;
      case baseHref + '/theme/view/collapsed/light':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'light';
        break;
      case baseHref + '/theme/view/horizontal/default':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'default';
        break;
      case baseHref + '/theme/view/horizontal/dark':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'dark';
        break;
      case baseHref + '/theme/view/horizontal/light':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'light';
        break;
      default:
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'default';
        break;
    }
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.scrollSpy.count.subscribe(function (c) {
        _this.currentSection = c;
      });
      document.querySelector('body').classList.add(this.themeConfig.themeType);
      switch (this.themeConfig.theme) {
        case 'vertical':
          this.mobileHeaderClass = 'mobile-header-1';
          this.desktopHeaderClass = 'desktop-header-1';
          switch (this.themeConfig.themeType) {
            case 'light':
              this.desktopLogo = 'assets/images/logo-dark.svg';
              break;
            default:
              this.desktopLogo = 'assets/images/logo.svg';
          }
          break;
        case 'collapsed':
          this.mobileHeaderClass = 'mobile-header-2';
          this.desktopHeaderClass = 'desktop-header-2';
          this.contentClass = 'content-2';
          switch (this.themeConfig.themeType) {
            case 'light':
              this.desktopLogo = 'assets/images/logo-b-dark.svg';
              break;
            default:
              this.desktopLogo = 'assets/images/logo-b-light.svg';
          }
          break;
        case 'horizontal':
          this.desktopHeaderClass = 'desktop-header-3 fixed-top';
          this.contentClass = 'content-3';
          switch (this.themeConfig.themeType) {
            case 'light':
              this.horizontalNavClass = 'navbar-light';
              this.desktopLogo = 'assets/images/logo-dark.svg';
              break;
            default:
              this.desktopLogo = 'assets/images/logo.svg';
          }
          break;
      }
      this.mobileHeaderClass = this.mobileHeaderClass + ' ' + this.themeConfig.themeType;
      this.desktopHeaderClass = this.desktopHeaderClass + ' ' + this.themeConfig.themeType;
      if (this.windowWidth > 991) {
        this.collapsedCard = 'false';
      }
    }
  }, {
    key: "onResize",
    value: function onResize(e) {
      if (this.windowWidth > 991) {
        this.collapsedCard = 'false';
      } else {
        this.collapsedCard = 'collapsed';
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(section) {
      this.currentSection = section;
      var sectionHtml = document.querySelector('#' + section);
      if (sectionHtml !== null) {
        sectionHtml.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }, {
    key: "collapsedCardToggle",
    value: function collapsedCardToggle() {
      this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
    }
  }]);
}();
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_3__.ScrollSpyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location));
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownConfig])],
  decls: 7,
  vars: 7,
  consts: [[3, "class", "ngClass", "clickOutside", 4, "ngIf"], [3, "ngClass", "resize", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["href", "javascript:", "id", "return-to-top", 3, "click"], [1, "fas", "fa-arrow-up"], [3, "ngClass", "clickOutside"], [1, "container"], [1, "menu-icon", "d-inline-flex", "mr-4"], [3, "click"], [1, "site-logo"], ["routerLink", "/"], ["alt", "Bolby", 3, "src"], [3, "ngClass", "resize"], [1, "navbar", "navbar-expand-lg", 3, "ngClass"], ["routerLink", "/", 1, "navbar-brand"], ["aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarNavDropdown", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto", "scrollspy"], [1, "nav-item", 3, "ngClass", "click"], ["href", "javascript:", 1, "nav-link", 3, "ngClass"], ["class", "icon-home", 4, "ngIf"], [4, "ngIf"], ["class", "icon-user-following", 4, "ngIf"], ["class", "icon-briefcase", 4, "ngIf"], ["class", "icon-graduation", 4, "ngIf"], ["class", "icon-layers", 4, "ngIf"], ["class", "icon-note", 4, "ngIf"], ["class", "icon-bubbles", 4, "ngIf"], [1, "icon-home"], [1, "icon-user-following"], [1, "icon-briefcase"], [1, "icon-graduation"], [1, "icon-layers"], [1, "icon-note"], [1, "icon-bubbles"], [1, "vertical-menu", "scrollspy"], [3, "ngClass", "click"], [1, "icon-credit-card"], [1, "icon-user-follow"], [1, "footer"], [1, "copyright"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LayoutComponent_header_0_Template, 8, 5, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LayoutComponent_header_1_Template, 37, 60, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LayoutComponent_header_2_Template, 45, 68, "header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_5_listener() {
        return ctx.scrollTo("home");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme !== "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme === "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme !== "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.openClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.contentClass);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_4__.ClickOutsideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('collapsedCard', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
      overflow: 'hidden',
      height: '0px'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
      overflow: 'hidden',
      height: _angular_animations__WEBPACK_IMPORTED_MODULE_9__.AUTO_STYLE
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('collapsed <=> expanded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('400ms ease-in-out')])])]
  }
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.error(err);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map