(self["webpackChunkBMLO_System"] = self["webpackChunkBMLO_System"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 13173);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ 50424);
/* harmony import */ var _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/summary/summary.component */ 414);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 55530);
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ 54599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);








const routes = [{
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
  path: 'login'
}, {
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  path: 'home'
}, {
  component: _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__.SummaryComponent,
  path: 'home/summary/:id'
}, {
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
  path: ''
}, {
  component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__.SignUpComponent,
  path: 'signup'
}, {
  component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent,
  path: '**',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class AppComponent {
  constructor() {
    this.title = 'BMLO_System';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _services_loader_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loader/loader */ 16163);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared_modules/shared.module */ 18006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_services_loader_loader__WEBPACK_IMPORTED_MODULE_2__.loader, primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 13278:
/*!***************************************************************!*\
  !*** ./src/app/components/home-table/home-table.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeTableComponent: () => (/* binding */ HomeTableComponent)
/* harmony export */ });
/* harmony import */ var src_app_messages_home_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/messages/home/header */ 16795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 56192);







function HomeTableComponent_ng_template_2_th_1_p_sortIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-sortIcon", 8);
  }
  if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("field", ctx_r7.dataKey[i_r6]);
  }
}
function HomeTableComponent_ng_template_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeTableComponent_ng_template_2_th_1_p_sortIcon_2_Template, 1, 1, "p-sortIcon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const head_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pSortableColumn", ctx_r4.dataKey[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", head_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", head_r5);
  }
}
function HomeTableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeTableComponent_ng_template_2_th_1_Template, 3, 3, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const headerData_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", headerData_r3);
  }
}
const _c0 = function (a0) {
  return {
    "color": a0
  };
};
function HomeTableComponent_ng_template_3_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const pipeLineData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r13.getStatusColorClass(pipeLineData_r9["loan_status"])));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pipeLineData_r9[key_r12], "");
  }
}
function HomeTableComponent_ng_template_3_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const pipeLineData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pipeLineData_r9[key_r12], "");
  }
}
function HomeTableComponent_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeTableComponent_ng_template_3_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const pipeLineData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.showFullDetails(pipeLineData_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeTableComponent_ng_template_3_td_1_span_1_Template, 2, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeTableComponent_ng_template_3_td_1_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", key_r12 == "loan_status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(key_r12 == "loan_status"));
  }
}
function HomeTableComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeTableComponent_ng_template_3_td_1_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pipeLineData_r9 = ctx.$implicit;
    const expanded_r10 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.dataKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pRowToggler", pipeLineData_r9)("icon", expanded_r10 ? "pi pi-chevron-down" : "pi pi-chevron-left");
  }
}
function HomeTableComponent_ng_template_4_ng_template_4_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const head_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", head_r27, " ");
  }
}
function HomeTableComponent_ng_template_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeTableComponent_ng_template_4_ng_template_4_th_1_Template, 2, 1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.hide_keys);
  }
}
function HomeTableComponent_ng_template_4_ng_template_5_tr_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeTableComponent_ng_template_4_ng_template_5_tr_0_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const expandedHomeData_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.showFullDetails(expandedHomeData_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r31 = ctx.$implicit;
    const expandedHomeData_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", expandedHomeData_r28[key_r31], " ");
  }
}
function HomeTableComponent_ng_template_4_ng_template_5_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeTableComponent_ng_template_4_ng_template_5_tr_0_td_1_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r29.hide_keys);
  }
}
function HomeTableComponent_ng_template_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeTableComponent_ng_template_4_ng_template_5_tr_0_Template, 2, 1, "tr", 13);
  }
  if (rf & 2) {
    const expandedHomeData_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", expandedHomeData_r28);
  }
}
function HomeTableComponent_ng_template_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No Details..");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c1 = function (a0) {
  return [a0];
};
function HomeTableComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 15)(2, "div", 16)(3, "p-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeTableComponent_ng_template_4_ng_template_4_Template, 2, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeTableComponent_ng_template_4_ng_template_5_Template, 1, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeTableComponent_ng_template_4_ng_template_6_Template, 3, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const expandedHomeData_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, expandedHomeData_r22));
  }
}
const _c2 = function () {
  return {
    "min-width": "50rem"
  };
};
class HomeTableComponent {
  constructor(router) {
    this.router = router;
    this.pipeLineData = [];
    this.userAccess = '';
    this.headers = src_app_messages_home_header__WEBPACK_IMPORTED_MODULE_0__.header;
    this.dataKey = src_app_messages_home_header__WEBPACK_IMPORTED_MODULE_0__.keys;
    this.hide_headers = src_app_messages_home_header__WEBPACK_IMPORTED_MODULE_0__.hide_header;
    this.hide_keys = src_app_messages_home_header__WEBPACK_IMPORTED_MODULE_0__.hide_keys;
  }
  ngOnInit() {}
  showFullDetails(homeData) {
    sessionStorage?.setItem('loan_id', homeData.id);
    this.router.navigate([`home/summary/${homeData.id}`]);
  }
  getStatusColorClass(status) {
    if (status === 'Approved') {
      return 'green';
    } else if (status === 'Denied') {
      return '#f00c0c';
    } else if (status === 'Pending') {
      return 'rgb(108, 180, 209)';
    } else {
      return '';
    }
  }
  static #_ = this.ɵfac = function HomeTableComponent_Factory(t) {
    return new (t || HomeTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeTableComponent,
    selectors: [["app-home-table"]],
    inputs: {
      pipeLineData: "pipeLineData",
      userAccess: "userAccess"
    },
    decls: 5,
    vars: 4,
    consts: [[1, "card"], ["dataKey", "id", 3, "columns", "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field", 4, "ngIf"], [3, "field"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "pButton", "", "pRipple", "", "dataKey", "id", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pRowToggler", "icon"], [3, "click"], [3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [3, "ngStyle"], ["colspan", "7"], [1, "p-3"], [3, "value"], ["pTemplate", "emptymessage"], [4, "ngFor", "ngForOf"]],
    template: function HomeTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeTableComponent_ng_template_2_Template, 2, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeTableComponent_ng_template_3_Template, 4, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeTableComponent_ng_template_4_Template, 7, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx.headers)("value", ctx.pipeLineData)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon],
    styles: ["[_nghost-%COMP%]     .card {\n  font-size: 14px;\n  width: 90%;\n  border-radius: 15px;\n  overflow: hidden;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(200px);\n  margin: 30px auto;\n}\n[_nghost-%COMP%]     .card .p-sortable-column .p-sortable-column-icon {\n  color: white;\n}\n\n[_nghost-%COMP%]     td {\n  cursor: pointer;\n  text-align: center;\n  color: white;\n}\n[_nghost-%COMP%]     td span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]     tr, th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: white;\n  background-color: transparent;\n  border-bottom: 2px solid #9a9494;\n}\n\n[_nghost-%COMP%]     tr:hover {\n  background-color: #514b4b;\n}\n\n[_nghost-%COMP%]     .p-button.p-button-text {\n  color: white;\n  border-color: gray;\n}\n\n[_nghost-%COMP%]     .p-button.p-button-text:hover {\n  background-color: #ffffff;\n  border: transparent;\n  color: #948e8e;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lLXRhYmxlL2hvbWUtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxRkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ007RUFDRSxZQUFBO0FBQ1I7O0FBS0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRko7QUFHSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUROOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFKSjs7QUFRRTtFQUNFLHlCQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTEoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNhcmQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjAwcHgpO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAucC1zb3J0YWJsZS1jb2x1bW4ge1xyXG4gICAgICAucC1zb3J0YWJsZS1jb2x1bW4taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgdGQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgc3BhbntcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCB0cix0aHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOWE5NDk0O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE0YjRiO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmF5O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzk0OGU4ZTtcclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 39185:
/*!*************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginpageComponent: () => (/* binding */ LoginpageComponent)
/* harmony export */ });
/* harmony import */ var src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/messages/login_assets/message */ 16471);
/* harmony import */ var src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/urls/api/api */ 53350);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var src_app_services_popUp_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/popUp/toast-service.service */ 62706);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 94553);











class LoginpageComponent {
  constructor(route, http, toastService) {
    this.route = route;
    this.http = http;
    this.toastService = toastService;
    this.user = [];
    this.useraccess = [];
  }
  ngOnInit() {
    this.assignHeader();
    this.getUserAccessDetails();
  }
  assignHeader() {
    localStorage.removeItem('useraccess');
    localStorage.removeItem('username');
    localStorage.removeItem('status');
    sessionStorage.removeItem('loan_id');
    this.user = src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_0__.user;
  }
  getUserAccessDetails() {
    this.http.get(src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_1__.data.userPass).subscribe({
      next: response => {
        this.useraccess = response;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  login() {
    const userData = this.useraccess.find(u => u.username === this.username && u.password === this.password && u.selectedOfficer === this.selectedOfficer.name);
    if (userData) {
      localStorage?.setItem('username', this.username);
      localStorage?.setItem('useraccess', this.selectedOfficer.name);
      this.route.navigate(['home']);
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_0__.message?.LoginFailed, src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_0__.message?.Error, 'error');
    }
  }
  static #_ = this.ɵfac = function LoginpageComponent_Factory(t) {
    return new (t || LoginpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_popUp_toast_service_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LoginpageComponent,
    selectors: [["app-loginpage"]],
    decls: 13,
    vars: 4,
    consts: [[1, "head"], [1, "form", "align-items-center", "flex", "flex-column"], ["styleClass", "p-dropdown", "optionLabel", "name", "placeholder", "Select a Position", 3, "options", "ngModel", "ngModelChange"], [1, "p-input-icon-left"], [1, "pi", "pi-user"], ["type", "text", "placeholder", "User Name", "pInputText", "", "id", "", 3, "ngModel", "ngModelChange"], [1, "pi", "pi-verified"], ["type", "password", "placeholder", "Password", "pInputText", "", "name", "", "id", "", 3, "ngModel", "ngModelChange"], ["pButton", "", "label", "Login", 3, "click", "keyUp.enter"]],
    template: function LoginpageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "span")(5, "p-dropdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginpageComponent_Template_p_dropdown_ngModelChange_5_listener($event) {
          return ctx.selectedOfficer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginpageComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginpageComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginpageComponent_Template_button_click_12_listener() {
          return ctx.login();
        })("keyUp.enter", function LoginpageComponent_Template_button_keyUp_enter_12_listener() {
          return ctx.login();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.user)("ngModel", ctx.selectedOfficer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.password);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown],
    styles: [".head[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin: 0 auto;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: white;\n  font-weight: bold;\n  color: white;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: white;\n}\n.form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  margin-top: 30px;\n}\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 30px 0 -10px 0;\n  border-color: white;\n  background-color: transparent;\n}\n.form[_ngcontent-%COMP%]  .p-dropdown {\n  width: 240px;\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.form[_ngcontent-%COMP%]  .p-dropdown .p-placeholder {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbnBhZ2UvbG9naW5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUF0Q0o7O0FBeUNBO0VBQ0ksaUJBQUE7QUF0Q0o7QUF3Q0k7RUFDSSxZQUFBO0FBdENSO0FBeUNJO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXZDUjtBQXlDUTtFQUNJLFlBQUE7QUF2Q1o7QUEyQ0k7O0VBRUksbUJBQUE7RUFDQSxnQkFBQTtBQXpDUjtBQTRDSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQTFDUjtBQTZDSTtFQUNRLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQTNDWjtBQTZDWTtFQUNJLFlBQUE7QUEzQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmZvcm17XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuLy8gICAgIGl7XHJcbi8vICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgaW5wdXR7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICB9XHJcbi8vICAgICBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbi8vICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5mb3JtIHNwYW4sYnV0dG9ue1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbntcclxuLy8gICAgIG1hcmdpbjozMHB4IDAgLTEwcHggMDtcclxuLy8gICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gfVxyXG5cclxuLy8gOjpuZy1kZWVwIC5wLWRyb3Bkb3duIHtcclxuLy8gICAgIHdpZHRoOiAyNDBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgIFxyXG4vLyAgICAgY29sb3I6IHdoaXRlOyBcclxuLy8gfVxyXG5cclxuLy8gOjpuZy1kZWVwIC5wLWRyb3Bkb3duIC5wLXBsYWNlaG9sZGVyIHtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTsgXHJcbi8vIH1cclxuXHJcblxyXG4uaGVhZFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYW4sXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwIC0xMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAmOjpuZy1kZWVwIC5wLWRyb3Bkb3due1xyXG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAucC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 54593:
/*!*******************************************************************!*\
  !*** ./src/app/components/sign-up-page/sign-up-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpPageComponent: () => (/* binding */ SignUpPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/messages/login_assets/message */ 16471);
/* harmony import */ var src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/urls/api/api */ 53350);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 94553);










class SignUpPageComponent {
  constructor(route, http) {
    this.route = route;
    this.http = http;
    this.user = [];
    this.useraccess = [];
  }
  ngOnInit() {
    this.assignHeader();
    this.getUserAccessDetails();
  }
  assignHeader() {
    localStorage.removeItem('useraccess');
    localStorage.removeItem('username');
    localStorage.removeItem('status');
    sessionStorage.removeItem('loan_id');
    this.user = src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_0__.user;
  }
  getUserAccessDetails() {
    this.http.get(src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_1__.data.userPass).subscribe({
      next: response => {
        this.useraccess = response;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  signUp() {
    const singUpData = {
      username: this.username,
      password: this.password,
      selectedOfficer: this.selectedOfficer.name,
      key: this.key
    };
    this.http.post(`${src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_1__.data.userPass}`, singUpData).subscribe({
      next: response => {
        console.log(response);
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_0__.message?.signUpSuccess, src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_0__.message?.pleaseLogin, 'success');
        this.route.navigate(['login']);
      },
      error: error => {
        console.log(error);
      }
    });
  }
  static #_ = this.ɵfac = function SignUpPageComponent_Factory(t) {
    return new (t || SignUpPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SignUpPageComponent,
    selectors: [["app-sign-up-page"]],
    decls: 16,
    vars: 5,
    consts: [[1, "head"], [1, "form", "align-items-center", "flex", "flex-column"], ["styleClass", "p-dropdown", "optionLabel", "name", "placeholder", "Select a Position", 3, "options", "ngModel", "ngModelChange"], [1, "p-input-icon-left"], [1, "pi", "pi-user"], ["type", "text", "placeholder", "User Name", "pInputText", "", "id", "", 3, "ngModel", "ngModelChange"], [1, "pi", "pi-verified"], ["type", "password", "placeholder", "Password", "pInputText", "", "name", "", "id", "", 3, "ngModel", "ngModelChange"], [1, "pi", "pi-key"], ["type", "password", "placeholder", "Key", "pInputText", "", "name", "", "id", "", 3, "ngModel", "ngModelChange"], ["pButton", "", "label", "SignUp", 3, "click", "keyUp.enter"]],
    template: function SignUpPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "span")(5, "p-dropdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPageComponent_Template_p_dropdown_ngModelChange_5_listener($event) {
          return ctx.selectedOfficer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPageComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPageComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPageComponent_Template_input_ngModelChange_14_listener($event) {
          return ctx.key = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignUpPageComponent_Template_button_click_15_listener() {
          return ctx.signUp();
        })("keyUp.enter", function SignUpPageComponent_Template_button_keyUp_enter_15_listener() {
          return ctx.signUp();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.user)("ngModel", ctx.selectedOfficer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.key);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown],
    styles: [".head[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin: 0 auto;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: white;\n  font-weight: bold;\n  color: white;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: white;\n}\n.form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  margin-top: 30px;\n}\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 30px 0 -10px 0;\n  border-color: white;\n  background-color: transparent;\n}\n.form[_ngcontent-%COMP%]  .p-dropdown {\n  width: 240px;\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.form[_ngcontent-%COMP%]  .p-dropdown .p-placeholder {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwLXBhZ2Uvc2lnbi11cC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBR0k7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRFI7QUFHUTtFQUNJLFlBQUE7QUFEWjtBQUtJOztFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQU1JO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSlI7QUFPSTtFQUNRLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUxaO0FBT1k7RUFDSSxZQUFBO0FBTGhCIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGFuLFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMCAtMTBweCAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6bmctZGVlcCAucC1kcm9wZG93bntcclxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgLnAtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28876:
/*!*************************************************************************!*\
  !*** ./src/app/components/summary-details/summary-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryDetailsComponent: () => (/* binding */ SummaryDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/urls/api/api */ 53350);
/* harmony import */ var src_app_messages_summary_summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/messages/summary/summary */ 17729);
/* harmony import */ var src_app_messages_user_record_user_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/messages/user_record/user_record */ 763);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var src_app_services_httpMethods_api_methods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/httpMethods/api-methods.service */ 89977);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ 94722);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 30652);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/overlaypanel */ 17830);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 68313);

















function SummaryDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.statusApproved());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_div_3_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r1.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_div_3_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r2.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SummaryDetailsComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 24)(2, "div", 25)(3, "span")(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const key_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r3.headerKeys[i_r9], ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.getAndShowFullDetails[key_r8], "");
  }
}
class SummaryDetailsComponent {
  constructor(router, activateRoute, http, apiService, messageService) {
    this.router = router;
    this.activateRoute = activateRoute;
    this.http = http;
    this.apiService = apiService;
    this.messageService = messageService;
    this.getAndShowFullDetails = [];
    this.userAccess = '';
    this.headerKeys = src_app_messages_summary_summary__WEBPACK_IMPORTED_MODULE_1__.HeaderKey;
    this.keys = src_app_messages_summary_summary__WEBPACK_IMPORTED_MODULE_1__.key;
    this.id = 0;
    this.DataUpdate = {
      loan_status: '',
      status_reason: 'None'
    };
  }
  ngOnInit() {
    this.getId();
  }
  getId() {
    this.activateRoute.params.subscribe(response => {
      this.id = response.id;
    });
  }
  navigationToHome(status) {
    localStorage?.setItem('status', status);
    this.router.navigate(['home']);
  }
  statusApproved() {
    this.DataUpdate.loan_status = 'Approved';
    this.DataUpdate.status_reason = '-';
    this.checkStatus(this.DataUpdate);
  }
  statusDenied() {
    this.DataUpdate.loan_status = 'Denied';
    this.DataUpdate.status_reason = this.reasonValue;
    this.checkStatus(this.DataUpdate);
  }
  statusPending() {
    this.DataUpdate.loan_status = 'Pending';
    this.DataUpdate.status_reason = this.reasonValue;
    this.checkStatus(this.DataUpdate);
  }
  checkStatus(DataUpdate) {
    if (DataUpdate.loan_status == 'Approved') {
      this.postStatus(DataUpdate);
      this.navigationToHome(DataUpdate.loan_status);
    } else if (DataUpdate.loan_status == 'Denied') {
      this.postStatus(DataUpdate);
      // Swal.fire(popUp.statusSuccess,popUp.subStatus,'success')
      this.navigationToHome(DataUpdate.loan_status);
    } else if (DataUpdate.loan_status == 'Pending') {
      this.postStatus(DataUpdate);
      this.navigationToHome(DataUpdate.loan_status);
    }
  }
  postStatus(DataUpdate) {
    this.id = sessionStorage?.getItem('loan_id');
    this.http.put(`${src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_0__.data.api}/${this.id}`, DataUpdate)?.subscribe({
      next: response => {
        console.log(response);
        sessionStorage?.removeItem('loan_id');
        return true;
      },
      error: error => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire(error.name, error.name, 'error');
        return false;
      }
    });
  }
  exportPdf(id) {
    console.log(id);
    __webpack_require__.e(/*! import() */ "default-node_modules_jspdf_dist_jspdf_es_min_js").then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ 10797)).then(jsPDF => {
      Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! jspdf-autotable */ 59880, 23)).then(autoTable => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        const exportColumns = src_app_messages_user_record_user_record__WEBPACK_IMPORTED_MODULE_2__.table_columns;
        if (Object.keys(src_app_messages_user_record_user_record__WEBPACK_IMPORTED_MODULE_2__.hardcodedDetails).includes(id.toString())) {
          const data = src_app_messages_user_record_user_record__WEBPACK_IMPORTED_MODULE_2__.hardcodedDetails[id];
          const tableData = [];
          tableData.push([data.panNumber, data.markSheetDetails, data.assets]);
          const styles = {
            theme: 'grid',
            styles: {
              cellPadding: 5,
              fontSize: 10,
              fontStyle: 'normal',
              overflow: 'linebreak'
            },
            columnStyles: {
              0: {
                cellWidth: autoTable
              },
              1: {
                cellWidth: autoTable
              },
              2: {
                cellWidth: 'auto'
              }
            }
          };
          doc.autoTable(exportColumns, tableData, styles);
          doc.save(`Attachments_${id}.pdf`);
        } else {
          console.error('No matching hardcoded data found for the provided ID.');
        }
      });
    });
  }
  static #_ = this.ɵfac = function SummaryDetailsComponent_Factory(t) {
    return new (t || SummaryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_httpMethods_api_methods_service__WEBPACK_IMPORTED_MODULE_4__.ApiMethodsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SummaryDetailsComponent,
    selectors: [["app-summary-details"]],
    inputs: {
      getAndShowFullDetails: "getAndShowFullDetails",
      userAccess: "userAccess"
    },
    decls: 29,
    vars: 5,
    consts: [[1, "backHome"], ["type", "button", "pButton", "", "pRipple", "", "pTooltip", "back to Home", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "icon", "click"], ["class", "con", 4, "ngIf"], [1, "custom-panel"], ["pe", ""], ["rows", "5", "cols", "30", "pInputTextarea", "", "placeholder", "Write Your Reason", 3, "ngModel", "ngModelChange"], ["id", "reason", "type", "button", "pRipple", "", "pButton", "", "label", "submit", 3, "click"], ["op", ""], ["id", "reason", "type", "button", "pRipple", "", "pButton", "", "label", "Submit", 3, "click"], [1, "card"], [1, "details"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "attachments"], ["header", "Loan Documents"], [1, "card-content"], ["pTooltip", "Download Pan Card", "tooltipPosition", "bottom", 1, "pdf-link", 3, "click"], [1, "pi", "pi-file-pdf"], ["pTooltip", "Download TC", "tooltipPosition", "bottom", 1, "pdf-link", 3, "click"], ["pTooltip", "Download Assets", "tooltipPosition", "bottom", 1, "pdf-link", 3, "click"], [1, "con"], ["pButton", "", "label", "Approve", 1, "pi", "pi-check-circle", 3, "click"], ["pButton", "", "label", "Pending", 1, "pi", "pi-refresh", 3, "click"], ["pButton", "", "label", "Deny", 1, "pi", "pi-times-circle", 3, "click"], [1, "col-3"], [1, "item"]],
    template: function SummaryDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_Template_button_click_2_listener() {
          return ctx.navigationToHome("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SummaryDetailsComponent_div_3_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p-overlayPanel", 3, 4)(6, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SummaryDetailsComponent_Template_textarea_ngModelChange_6_listener($event) {
          return ctx.reasonValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_Template_button_click_7_listener() {
          return ctx.statusPending();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p-overlayPanel", 3, 7)(10, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SummaryDetailsComponent_Template_textarea_ngModelChange_10_listener($event) {
          return ctx.reasonValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_Template_button_click_11_listener() {
          return ctx.statusDenied();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "p-card")(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SummaryDetailsComponent_ng_container_16_Template, 7, 2, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "p-card", 14)(19, "div", 15)(20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_Template_a_click_20_listener() {
          return ctx.exportPdf(ctx.id);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Pan Card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_Template_a_click_23_listener() {
          return ctx.exportPdf(ctx.id);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Transfer Certificate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SummaryDetailsComponent_Template_a_click_26_listener() {
          return ctx.exportPdf(ctx.id);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Assets Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "pi pi-arrow-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userAccess == "Bank Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.reasonValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.reasonValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.keys);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_card__WEBPACK_IMPORTED_MODULE_12__.Card, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextarea, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__.OverlayPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast],
    styles: [".backHome[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.backHome[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n.backHome[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%] {\n  margin-right: auto;\n  display: flex;\n  gap: 20px;\n}\n\n  .p-button {\n  cursor: pointer;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(200px);\n  border-color: gray;\n  margin-right: auto;\n  margin-top: 20px;\n}\n\n  .p-card {\n  width: 80%;\n  margin: 5px auto;\n  background-color: white;\n}\n\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  color: black;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding: 5px;\n  box-sizing: border-box;\n}\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border: 1px solid #9b9898;\n  border-radius: 8px;\n  padding: 10px;\n  background-color: #f8f7f7;\n}\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.attachments[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.attachments[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .pdf-link[_ngcontent-%COMP%] {\n  width: calc(33.33% - 10px);\n  display: block;\n  padding: 10px;\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: #0366d6;\n}\n.attachments[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .pdf-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.attachments[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .pdf-link[_ngcontent-%COMP%]   i.pi[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.attachments[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#reason[_ngcontent-%COMP%] {\n  position: relative;\n  left: 10px;\n  background-color: gray;\n  margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdW1tYXJ5LWRldGFpbHMvc3VtbWFyeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBREY7QUFFRTtFQUNFLFlBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUtBO0VBQ0UsZUFBQTtFQUNBLHFGQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFPRTtFQUNFLGFBQUE7QUFKSjtBQU1NO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFKUjtBQU1RO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUpWO0FBTVU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSlo7QUFNWTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUpkO0FBS2M7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBSGhCOztBQWNFO0VBQ0Usa0JBQUE7QUFYSjtBQVlJO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBVk47QUFhSTtFQUNFLDBCQUFBO0FBWE47QUFjSTtFQUNFLGlCQUFBO0FBWk47QUFlSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBYk47O0FBbUJBO0VBQ0Usa0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWhCRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmJhY2tIb21le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG4gIH1cclxuICAuY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLWJ1dHRvbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjAwcHgpOyAgIFxyXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAucC1jYXJke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIC5kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwLWNhcmQge1xyXG4gICAgICAucm93IHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICAuY29sLTMge1xyXG4gICAgICAgICAgd2lkdGg6IDI1JTsgXHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuXHJcbiAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Yjk4OTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjdmNztcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYXR0YWNobWVudHN7XHJcbiAgcC1jYXJke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnBkZi1saW5rIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMTBweCk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMDM2NmQ2OyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBkZi1saW5rOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZGYtbGluayBpLnBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwOyBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG50ZXh0YXJlYXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNyZWFzb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBtYXJnaW46NTBweCBhdXRvO1xyXG4gIFxyXG59XHJcblxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 16795:
/*!*****************************************!*\
  !*** ./src/app/messages/home/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   hide_header: () => (/* binding */ hide_header),
/* harmony export */   hide_keys: () => (/* binding */ hide_keys),
/* harmony export */   keys: () => (/* binding */ keys)
/* harmony export */ });
const header = ['Loan Number', 'Borrower Name', 'Co-Borrower Name', 'Loan Date', 'Loan Amount', 'Loan Status', 'Status Reason ', ''];
const keys = ['loan_number', 'borrower_name', 'coborrower_name', 'loan_date', 'loan_amount', 'loan_status', 'status_reason'];
const hide_header = ['Loan Type', 'Address', 'Cibil Score', 'Contact No'];
const hide_keys = ['loan_type', 'address', 'cibil_score', 'contact_no'];

/***/ }),

/***/ 16471:
/*!**************************************************!*\
  !*** ./src/app/messages/login_assets/message.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   message: () => (/* binding */ message),
/* harmony export */   user: () => (/* binding */ user)
/* harmony export */ });
const user = [{
  name: 'Loan Officer'
}, {
  name: 'Bank Manager'
}];
const message = {
  signUpSuccess: 'SignUp Successful',
  pleaseLogin: 'Login with Your Details',
  loginSuccess: "Login Successful",
  welcome: 'Welcome',
  LoginFailed: 'Login Failed',
  Error: 'Please Enter Valid Data',
  logoutSuccess: "Logout Successful",
  ThankYou: 'Thank You!!',
  login: 'Login',
  logout: 'Logout'
};

/***/ }),

/***/ 17729:
/*!*********************************************!*\
  !*** ./src/app/messages/summary/summary.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderKey: () => (/* binding */ HeaderKey),
/* harmony export */   key: () => (/* binding */ key),
/* harmony export */   popUp: () => (/* binding */ popUp)
/* harmony export */ });
const key = ['loan_number', 'borrower_name', 'coborrower_name', 'loan_date', 'loan_amount', 'loan_type', 'address', 'cibil_score', 'contact_no', 'dob', 'income', 'interest', 'job', 'assets', 'coborrower_contact', 'coborrower_relation'];
const HeaderKey = ['Loan Number', 'Borrower Name', 'Coborrower Name', 'Loan Date', 'Loan Amount', 'Loan Type', 'Address', 'Cibil Score', 'Contact No', 'DOB', 'Income', 'Interest', 'Job', 'Assets', 'Coborrower Contact', 'Coborrower Relation', 'ID'];
const popUp = {
  statusSuccess: 'Status Updated',
  subStatus: 'Success'
};

/***/ }),

/***/ 763:
/*!*****************************************************!*\
  !*** ./src/app/messages/user_record/user_record.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hardcodedDetails: () => (/* binding */ hardcodedDetails),
/* harmony export */   table_columns: () => (/* binding */ table_columns)
/* harmony export */ });
const table_columns = ['PAN Number', 'Mark Sheet Details', 'Assets'];
const hardcodedDetails = {
  1: {
    panNumber: 'ABCD1234',
    markSheetDetails: 'Mark Sheet Details 1',
    assets: 'Assets Details 1'
  },
  2: {
    panNumber: 'EFGH5678',
    markSheetDetails: 'Mark Sheet Details 2',
    assets: 'Assets Details 2'
  },
  3: {
    panNumber: 'IJKL9012',
    markSheetDetails: 'Mark Sheet Details 3',
    assets: 'Assets Details 3'
  },
  4: {
    panNumber: 'MNOP3456',
    markSheetDetails: 'Mark Sheet Details 4',
    assets: 'Assets Details 4'
  },
  5: {
    panNumber: 'QRST7890',
    markSheetDetails: 'Mark Sheet Details 5',
    assets: 'Assets Details 5'
  }
};

/***/ }),

/***/ 50424:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/messages/login_assets/message */ 16471);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_loader_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader/loader */ 16163);
/* harmony import */ var src_app_services_httpMethods_api_methods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/httpMethods/api-methods.service */ 89977);
/* harmony import */ var src_app_services_popUp_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/popUp/toast-service.service */ 62706);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 72602);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ 39177);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var src_app_components_home_table_home_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/home-table/home-table.component */ 13278);














function HomeComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 8);
  }
}
function HomeComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_ng_template_8_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.userName);
  }
}
class HomeComponent {
  constructor(activateRoute, router, load, apiService, toastService) {
    this.activateRoute = activateRoute;
    this.router = router;
    this.load = load;
    this.apiService = apiService;
    this.toastService = toastService;
    this.pipeLineData = [];
  }
  ngOnInit() {
    this.getManagerResponse();
    this.getAndSetDataFromApi();
  }
  getManagerResponse() {
    sessionStorage?.removeItem('loan_id');
    this.userName = localStorage?.getItem('username');
    this.userAccess = localStorage?.getItem('useraccess');
    if (localStorage.getItem('status')) {
      this.statusToast = localStorage?.getItem('status');
      this.showToast(this.statusToast);
      localStorage?.removeItem('status');
    }
  }
  showToast(status) {
    if (status == 'Approved') {
      this.toastService?.acceptToast();
    } else if (status == 'Denied') {
      this.toastService?.deniedToast();
    }
  }
  getAndSetDataFromApi() {
    if (localStorage.getItem('username')) {
      this.load?.showloader();
      this.apiService?.getHomeData()?.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        return response?.map(i => {
          i.loan_amount = `$${i.loan_amount}`;
          i.loan_date = moment__WEBPACK_IMPORTED_MODULE_0__(i.loan_date)?.format('DD-MM-YYYY');
          return i;
        });
      })).subscribe({
        next: response => {
          this.load?.hideloader();
          this.pipeLineData = response;
        },
        error: error => {
          this.load?.hideloader();
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(error?.name, error, 'error');
          this.router.navigate(['']);
        }
      });
    } else {
      this.router.navigate(['**']);
    }
  }
  logout() {
    localStorage.removeItem('username');
    sessionStorage.removeItem('useraccess');
    this.router.navigate(['login']);
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_1__.message?.ThankYou, src_app_messages_login_assets_message__WEBPACK_IMPORTED_MODULE_1__.message?.logoutSuccess, 'success');
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loader_loader__WEBPACK_IMPORTED_MODULE_3__.loader), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_httpMethods_api_methods_service__WEBPACK_IMPORTED_MODULE_4__.ApiMethodsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_popUp_toast_service_service__WEBPACK_IMPORTED_MODULE_5__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 10,
    vars: 3,
    consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "white", "type", "ball-spin", 3, "fullScreen"], [2, "color", "white"], [1, "navbar"], ["styleClass", "glass-toolbar"], ["pTemplate", "start"], ["pTemplate", "center"], ["pTemplate", "end"], [3, "pipeLineData", "userAccess"], ["src", "/assets/images/final.jpg", "alt", "logo"], [1, "flex", "flex-wrap", "align-items-center", "gap-3"], [1, "flex", "align-items-center", "gap-2", "user-access"], [1, "pi", "pi-user"], ["id", "log", 3, "click"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "p-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, HomeComponent_ng_template_6_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HomeComponent_ng_template_7_Template, 3, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, HomeComponent_ng_template_8_Template, 6, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-home-table", 7);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pipeLineData", ctx.pipeLineData)("userAccess", ctx.userAccess);
      }
    },
    dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__.Toolbar, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, src_app_components_home_table_home_table_component__WEBPACK_IMPORTED_MODULE_6__.HomeTableComponent],
    styles: ["img[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 30px;\n  width: 60px;\n  height: 60px;\n}\n\n  .p-toolbar {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 1rem;\n  border: transparent;\n  margin: 20px auto;\n  color: white;\n  background: transparent;\n}\n  .p-toolbar span {\n  cursor: pointer;\n}\n  .p-toolbar #log {\n  padding: 10px;\n  margin-left: 30px;\n}\n  .p-toolbar #log:hover {\n  background-color: #514b4b;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucC10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgI2xvZ3tcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgfSAgICBcclxuICAgICNsb2c6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxNGI0YjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 13173:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/loginpage/loginpage.component */ 39185);


class LoginComponent {
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 1,
    vars: 0,
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loginpage");
      }
    },
    dependencies: [src_app_components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_0__.LoginpageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 55530:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class NotFoundComponent {
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 7,
    vars: 0,
    consts: [[1, "error-container"], ["href", "/"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Oops! Page not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f4f4f4;\n}\n\n.error-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.error-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6em;\n  margin-bottom: 20px;\n}\n.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 20px;\n}\n.error-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 1.2em;\n  transition: color 0.3s ease;\n  color: gray;\n}\n.error-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d2dde4;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ047QUFFSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUROO0FBR007RUFDRSxjQUFBO0FBRFIiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2QyZGRlNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 54599:
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/sign-up-page/sign-up-page.component */ 54593);


class SignUpComponent {
  static #_ = this.ɵfac = function SignUpComponent_Factory(t) {
    return new (t || SignUpComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SignUpComponent,
    selectors: [["app-sign-up"]],
    decls: 1,
    vars: 0,
    template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-sign-up-page");
      }
    },
    dependencies: [_components_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_0__.SignUpPageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 414:
/*!****************************************************!*\
  !*** ./src/app/pages/summary/summary.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryComponent: () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_httpMethods_api_methods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/httpMethods/api-methods.service */ 89977);
/* harmony import */ var src_app_services_loader_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader/loader */ 16163);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 72602);
/* harmony import */ var src_app_components_summary_details_summary_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/summary-details/summary-details.component */ 28876);









class SummaryComponent {
  constructor(router, apiService, load) {
    this.router = router;
    this.apiService = apiService;
    this.load = load;
    this.getAndShowFullDetails = [];
  }
  ngOnInit() {
    this.getUserAccess();
    this.getFullDetails();
  }
  getUserAccess() {
    this.userAccess = localStorage?.getItem('useraccess');
  }
  // getFullDetails(){
  //   this.load?.showloader()
  //   this.apiService?.getFullSummaryData()?.pipe(
  //     map((response:any)=>{
  //         response.loan_date = moment(response?.loan_date)?.format('DD-MM-YYYY')
  //         response.dob = moment(response?.dob)?.format('DD-MM-YYYY')
  //         return response
  //     })
  //   ).subscribe({
  //     next:(response:LoanFullData[])=>{
  //       this.load?.hideloader()
  //       this.getAndShowFullDetails = response
  //     },
  //     error:(error:any)=>{
  //       this.load.hideloader()
  //       Swal.fire(error?.name,error?.name,'error')
  //       this.router.navigate(['home'])
  //     }
  //   })
  // }
  getFullDetails() {
    this.load?.showloader();
    this.apiService?.getFullSummaryData()?.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
      response.loan_date = moment__WEBPACK_IMPORTED_MODULE_0__(response?.loan_date)?.format('DD-MM-YYYY');
      response.dob = moment__WEBPACK_IMPORTED_MODULE_0__(response?.dob)?.format('DD-MM-YYYY');
      this.getAndShowFullDetails = response;
      return response;
    })).subscribe({
      next: response => {
        this.load?.hideloader();
        // this.getAndShowFullDetails = response
      },

      error: error => {
        this.load.hideloader();
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(error?.name, error?.name, 'error');
        this.router.navigate(['home']);
      }
    });
  }
  static #_ = this.ɵfac = function SummaryComponent_Factory(t) {
    return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_httpMethods_api_methods_service__WEBPACK_IMPORTED_MODULE_2__.ApiMethodsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_loader_loader__WEBPACK_IMPORTED_MODULE_3__.loader));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SummaryComponent,
    selectors: [["app-summary"]],
    decls: 4,
    vars: 3,
    consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "white", "type", "ball-spin", 3, "fullScreen"], [2, "color", "white"], [3, "getAndShowFullDetails", "userAccess"]],
    template: function SummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-summary-details", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("getAndShowFullDetails", ctx.getAndShowFullDetails)("userAccess", ctx.userAccess);
      }
    },
    dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, src_app_components_summary_details_summary_details_component__WEBPACK_IMPORTED_MODULE_4__.SummaryDetailsComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 89977:
/*!*************************************************************!*\
  !*** ./src/app/services/httpMethods/api-methods.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiMethodsService: () => (/* binding */ ApiMethodsService)
/* harmony export */ });
/* harmony import */ var src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/urls/api/api */ 53350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);




class ApiMethodsService {
  constructor(http, activateRoute) {
    this.http = http;
    this.activateRoute = activateRoute;
  }
  ngOnInit() {}
  getHomeData() {
    return this.http.get(src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_0__.data?.api);
  }
  getFullSummaryData() {
    this.loan_id = sessionStorage.getItem('loan_id');
    return this.http.get(`${src_app_urls_api_api__WEBPACK_IMPORTED_MODULE_0__.data?.detailsApi}/${this.loan_id}`);
  }
  static #_ = this.ɵfac = function ApiMethodsService_Factory(t) {
    return new (t || ApiMethodsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ApiMethodsService,
    factory: ApiMethodsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 16163:
/*!*******************************************!*\
  !*** ./src/app/services/loader/loader.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loader: () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 72602);


class loader {
  constructor(load) {
    this.load = load;
  }
  showloader() {
    this.load.show();
  }
  hideloader() {
    this.load.hide();
  }
  static #_ = this.ɵfac = function loader_Factory(t) {
    return new (t || loader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: loader,
    factory: loader.ɵfac
  });
}

/***/ }),

/***/ 62706:
/*!*********************************************************!*\
  !*** ./src/app/services/popUp/toast-service.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 98026);


class ToastService {
  constructor(messageService) {
    this.messageService = messageService;
  }
  acceptToast() {
    setTimeout(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Loan Approved'
      });
    }, 1000);
  }
  deniedToast() {
    setTimeout(() => {
      this.messageService.add({
        severity: 'error',
        summary: 'Reject',
        detail: 'Loan Denied '
      });
    }, 1000);
  }
  static #_ = this.ɵfac = function ToastService_Factory(t) {
    return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ToastService,
    factory: ToastService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 18006:
/*!*************************************************!*\
  !*** ./src/app/shared_modules/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/login/login.component */ 13173);
/* harmony import */ var src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/home/home.component */ 50424);
/* harmony import */ var src_app_components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/loginpage/loginpage.component */ 39185);
/* harmony import */ var src_app_pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/summary/summary.component */ 414);
/* harmony import */ var src_app_components_home_table_home_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/home-table/home-table.component */ 13278);
/* harmony import */ var src_app_components_summary_details_summary_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/summary-details/summary-details.component */ 28876);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/not-found/not-found.component */ 55530);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 72602);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toolbar */ 39177);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/splitter */ 94063);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/divider */ 10920);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/card */ 94722);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputtextarea */ 30652);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/overlaypanel */ 17830);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dataview */ 33197);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/password */ 73219);
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/sign-up/sign-up.component */ 54599);
/* harmony import */ var _components_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sign-up-page/sign-up-page.component */ 54593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);































class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.DropdownModule, primeng_table__WEBPACK_IMPORTED_MODULE_19__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__.ToolbarModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_21__.SplitterModule, primeng_divider__WEBPACK_IMPORTED_MODULE_22__.DividerModule, primeng_card__WEBPACK_IMPORTED_MODULE_23__.CardModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_24__.FileUploadModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__.InputTextareaModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_26__.OverlayPanelModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_27__.TooltipModule, primeng_toast__WEBPACK_IMPORTED_MODULE_28__.ToastModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_29__.DataViewModule, primeng_password__WEBPACK_IMPORTED_MODULE_30__.PasswordModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, src_app_components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_2__.LoginpageComponent, src_app_pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_3__.SummaryComponent, src_app_components_home_table_home_table_component__WEBPACK_IMPORTED_MODULE_4__.HomeTableComponent, src_app_components_summary_details_summary_details_component__WEBPACK_IMPORTED_MODULE_5__.SummaryDetailsComponent, _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__.SignUpComponent, _components_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_8__.SignUpPageComponent, _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.DropdownModule, primeng_table__WEBPACK_IMPORTED_MODULE_19__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__.ToolbarModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_21__.SplitterModule, primeng_divider__WEBPACK_IMPORTED_MODULE_22__.DividerModule, primeng_card__WEBPACK_IMPORTED_MODULE_23__.CardModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_24__.FileUploadModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__.InputTextareaModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_26__.OverlayPanelModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_27__.TooltipModule, primeng_toast__WEBPACK_IMPORTED_MODULE_28__.ToastModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_29__.DataViewModule, primeng_password__WEBPACK_IMPORTED_MODULE_30__.PasswordModule]
  });
})();

/***/ }),

/***/ 53350:
/*!*********************************!*\
  !*** ./src/app/urls/api/api.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data)
/* harmony export */ });
const data = {
  // api : 'https://65795408f08799dc8046aadf.mockapi.io/info/bank_home_info',
  // detailsApi:'https://65795408f08799dc8046aadf.mockapi.io/info/bank_info'
  api: '/api/bank_home_info',
  detailsApi: '/api/bank_info',
  userPass: 'https://659542fb04335332df82543c.mockapi.io/validate/userPass'
};

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 35528,
	"./af.js": 35528,
	"./ar": 1036,
	"./ar-dz": 17579,
	"./ar-dz.js": 17579,
	"./ar-kw": 69588,
	"./ar-kw.js": 69588,
	"./ar-ly": 11650,
	"./ar-ly.js": 11650,
	"./ar-ma": 93258,
	"./ar-ma.js": 93258,
	"./ar-sa": 54085,
	"./ar-sa.js": 54085,
	"./ar-tn": 90287,
	"./ar-tn.js": 90287,
	"./ar.js": 1036,
	"./az": 89757,
	"./az.js": 89757,
	"./be": 59620,
	"./be.js": 59620,
	"./bg": 31139,
	"./bg.js": 31139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 19641,
	"./bn-bd": 19126,
	"./bn-bd.js": 19126,
	"./bn.js": 19641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 20934,
	"./br.js": 20934,
	"./bs": 26274,
	"./bs.js": 26274,
	"./ca": 45831,
	"./ca.js": 45831,
	"./cs": 92354,
	"./cs.js": 92354,
	"./cv": 79692,
	"./cv.js": 79692,
	"./cy": 58774,
	"./cy.js": 58774,
	"./da": 38955,
	"./da.js": 38955,
	"./de": 21557,
	"./de-at": 24954,
	"./de-at.js": 24954,
	"./de-ch": 81881,
	"./de-ch.js": 81881,
	"./de.js": 21557,
	"./dv": 16475,
	"./dv.js": 16475,
	"./el": 38877,
	"./el.js": 38877,
	"./en-au": 70454,
	"./en-au.js": 70454,
	"./en-ca": 67356,
	"./en-ca.js": 67356,
	"./en-gb": 10456,
	"./en-gb.js": 10456,
	"./en-ie": 28789,
	"./en-ie.js": 28789,
	"./en-il": 85471,
	"./en-il.js": 85471,
	"./en-in": 39664,
	"./en-in.js": 39664,
	"./en-nz": 97672,
	"./en-nz.js": 97672,
	"./en-sg": 80805,
	"./en-sg.js": 80805,
	"./eo": 87390,
	"./eo.js": 87390,
	"./es": 1564,
	"./es-do": 51473,
	"./es-do.js": 51473,
	"./es-mx": 92089,
	"./es-mx.js": 92089,
	"./es-us": 84156,
	"./es-us.js": 84156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 22687,
	"./fi.js": 22687,
	"./fil": 80032,
	"./fil.js": 80032,
	"./fo": 46845,
	"./fo.js": 46845,
	"./fr": 8875,
	"./fr-ca": 56425,
	"./fr-ca.js": 56425,
	"./fr-ch": 41746,
	"./fr-ch.js": 41746,
	"./fr.js": 8875,
	"./fy": 67037,
	"./fy.js": 67037,
	"./ga": 11217,
	"./ga.js": 11217,
	"./gd": 37010,
	"./gd.js": 37010,
	"./gl": 51931,
	"./gl.js": 51931,
	"./gom-deva": 64488,
	"./gom-deva.js": 64488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 34984,
	"./gu.js": 34984,
	"./he": 69090,
	"./he.js": 69090,
	"./hi": 42085,
	"./hi.js": 42085,
	"./hr": 38787,
	"./hr.js": 38787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 59819,
	"./hy-am.js": 59819,
	"./id": 44074,
	"./id.js": 44074,
	"./is": 70715,
	"./is.js": 70715,
	"./it": 31746,
	"./it-ch": 77040,
	"./it-ch.js": 77040,
	"./it.js": 31746,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 34346,
	"./jv.js": 34346,
	"./ka": 65538,
	"./ka.js": 65538,
	"./kk": 79772,
	"./kk.js": 79772,
	"./km": 87905,
	"./km.js": 87905,
	"./kn": 79125,
	"./kn.js": 79125,
	"./ko": 69140,
	"./ko.js": 69140,
	"./ku": 2354,
	"./ku.js": 2354,
	"./ky": 63768,
	"./ky.js": 63768,
	"./lb": 14016,
	"./lb.js": 14016,
	"./lo": 83169,
	"./lo.js": 83169,
	"./lt": 62353,
	"./lt.js": 62353,
	"./lv": 83243,
	"./lv.js": 83243,
	"./me": 52338,
	"./me.js": 52338,
	"./mi": 35555,
	"./mi.js": 35555,
	"./mk": 85794,
	"./mk.js": 85794,
	"./ml": 53151,
	"./ml.js": 53151,
	"./mn": 46458,
	"./mn.js": 46458,
	"./mr": 69165,
	"./mr.js": 69165,
	"./ms": 8680,
	"./ms-my": 87477,
	"./ms-my.js": 87477,
	"./ms.js": 8680,
	"./mt": 79684,
	"./mt.js": 79684,
	"./my": 40285,
	"./my.js": 40285,
	"./nb": 45922,
	"./nb.js": 45922,
	"./ne": 29040,
	"./ne.js": 29040,
	"./nl": 5066,
	"./nl-be": 74460,
	"./nl-be.js": 74460,
	"./nl.js": 5066,
	"./nn": 53693,
	"./nn.js": 53693,
	"./oc-lnc": 88676,
	"./oc-lnc.js": 88676,
	"./pa-in": 92341,
	"./pa-in.js": 92341,
	"./pl": 57416,
	"./pl.js": 57416,
	"./pt": 84344,
	"./pt-br": 30113,
	"./pt-br.js": 30113,
	"./pt.js": 84344,
	"./ro": 72643,
	"./ro.js": 72643,
	"./ru": 61305,
	"./ru.js": 61305,
	"./sd": 96095,
	"./sd.js": 96095,
	"./se": 74486,
	"./se.js": 74486,
	"./si": 58742,
	"./si.js": 58742,
	"./sk": 96722,
	"./sk.js": 96722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 52416,
	"./sq.js": 52416,
	"./sr": 39450,
	"./sr-cyrl": 50501,
	"./sr-cyrl.js": 50501,
	"./sr.js": 39450,
	"./ss": 32222,
	"./ss.js": 32222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 19638,
	"./sw.js": 19638,
	"./ta": 96494,
	"./ta.js": 96494,
	"./te": 94435,
	"./te.js": 94435,
	"./tet": 25003,
	"./tet.js": 25003,
	"./tg": 13706,
	"./tg.js": 13706,
	"./th": 16025,
	"./th.js": 16025,
	"./tk": 59780,
	"./tk.js": 59780,
	"./tl-ph": 22068,
	"./tl-ph.js": 22068,
	"./tlh": 39167,
	"./tlh.js": 39167,
	"./tr": 32494,
	"./tr.js": 32494,
	"./tzl": 58707,
	"./tzl.js": 58707,
	"./tzm": 91296,
	"./tzm-latn": 34532,
	"./tzm-latn.js": 34532,
	"./tzm.js": 91296,
	"./ug-cn": 12086,
	"./ug-cn.js": 12086,
	"./uk": 85069,
	"./uk.js": 85069,
	"./ur": 29304,
	"./ur.js": 29304,
	"./uz": 95115,
	"./uz-latn": 97609,
	"./uz-latn.js": 97609,
	"./uz.js": 95115,
	"./vi": 34802,
	"./vi.js": 34802,
	"./x-pseudo": 65605,
	"./x-pseudo.js": 65605,
	"./yo": 88456,
	"./yo.js": 88456,
	"./zh-cn": 23272,
	"./zh-cn.js": 23272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 48101,
	"./zh-mo.js": 48101,
	"./zh-tw": 40262,
	"./zh-tw.js": 40262
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map