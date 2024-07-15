"use strict";
(self["webpackChunkng_bolby"] = self["webpackChunkng_bolby"] || []).push([["src_app_view_view_module_ts"],{

/***/ 1597:
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewRoutingModule": function() { return /* binding */ ViewRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.component */ 517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: '',
  component: _view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent
}];
var ViewRoutingModule = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ViewRoutingModule() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ViewRoutingModule);
});
ViewRoutingModule.ɵfac = function ViewRoutingModule_Factory(t) {
  return new (t || ViewRoutingModule)();
};
ViewRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ViewRoutingModule
});
ViewRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ViewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 517:
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": function() { return /* binding */ ViewComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-config */ 5529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scroll-spy/scroll-spy.service */ 821);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/scroll-spy/scroll-spy.directive */ 4293);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/home/home.component */ 8879);
/* harmony import */ var _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/about/about.component */ 3040);
/* harmony import */ var _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/services/services.component */ 925);
/* harmony import */ var _components_sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/experience/experience.component */ 3747);
/* harmony import */ var _components_sections_works_works_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/works/works.component */ 4902);
/* harmony import */ var _components_sections_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/pricing/pricing.component */ 638);
/* harmony import */ var _components_sections_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sections/testimonials/testimonials.component */ 4094);
/* harmony import */ var _components_sections_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/blog/blog.component */ 1896);
/* harmony import */ var _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sections/contact/contact.component */ 1225);

















var _c0 = function _c0() {
  return ["SECTION"];
};
var _c1 = function _c1(a0) {
  return {
    light: a0
  };
};
var ViewComponent = /*#__PURE__*/function () {
  function ViewComponent(scrollSpy, activatedRoute) {
    (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ViewComponent);
    this.scrollSpy = scrollSpy;
    this.activatedRoute = activatedRoute;
    this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__.Config.config;
  }
  return (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "onSectionChange",
    value: function onSectionChange(sectionId) {
      this.currentSection = sectionId;
      this.scrollSpy.nextCount(sectionId);
    }
  }]);
}();
ViewComponent.ɵfac = function ViewComponent_Factory(t) {
  return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_3__.ScrollSpyService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute));
};
ViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: ViewComponent,
  selectors: [["app-view"]],
  decls: 20,
  vars: 7,
  consts: [["id", "parentDiv", "scrollSpy", "", 1, "main-content", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "home", "d-flex", "align-items-center", 3, "ngClass"], [1, "w-100", 3, "themeType"], ["id", "about"], ["id", "services"], ["id", "experience"], ["id", "works"], ["id", "pricing"], ["id", "testimonials"], [3, "themeType"], ["id", "blog"], ["id", "contact"], [1, "spacer-96"]],
  template: function ViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sectionChange", function ViewComponent_Template_div_sectionChange_0_listener($event) {
        return ctx.onSectionChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-home", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "app-about");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "app-services");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "app-experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "app-works");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "app-pricing");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "app-testimonials", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "app-blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "app-contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](5, _c1, ctx.themeConfig.themeType === "light"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("themeType", ctx.themeConfig.themeType);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("themeType", ctx.themeConfig.themeType);
    }
  },
  directives: [_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_4__.ScrollSpyDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent, _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_7__.ServicesComponent, _components_sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__.ExperienceComponent, _components_sections_works_works_component__WEBPACK_IMPORTED_MODULE_9__.WorksComponent, _components_sections_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__.PricingComponent, _components_sections_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_11__.TestimonialsComponent, _components_sections_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__.BlogComponent, _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__.ContactComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 3070:
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModule": function() { return /* binding */ ViewModule; }
/* harmony export */ });
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-routing.module */ 1597);
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.component */ 517);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







var ViewModule = /*#__PURE__*/(0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ViewModule() {
  (0,C_Users_lesliec_Documents_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ViewModule);
});
ViewModule.ɵfac = function ViewModule_Factory(t) {
  return new (t || ViewModule)();
};
ViewModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ViewModule
});
ViewModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _view_routing_module__WEBPACK_IMPORTED_MODULE_2__.ViewRoutingModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ViewModule, {
    declarations: [_view_component__WEBPACK_IMPORTED_MODULE_3__.ViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _view_routing_module__WEBPACK_IMPORTED_MODULE_2__.ViewRoutingModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_view_view_module_ts.js.map