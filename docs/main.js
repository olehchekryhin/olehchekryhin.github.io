(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/olegc/Documents/backbase/olehchekryhin.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "7j3e":
/*!*******************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.ts ***!
  \*******************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/enums */ "Xui1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _result_list_result_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result-list/result-list.component */ "Avls");
/* harmony import */ var _empty_message_empty_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empty-message/empty-message.component */ "svU6");








function AutocompleteComponent_app_result_list_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-result-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendArrowKeyLocation", function AutocompleteComponent_app_result_list_2_Template_app_result_list_sendArrowKeyLocation_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.arrowKeyLocation = $event; })("sendSelectItem", function AutocompleteComponent_app_result_list_2_Template_app_result_list_sendSelectItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locations", ctx_r0.locations == null ? null : ctx_r0.locations.docs)("arrowKeyLocation", ctx_r0.arrowKeyLocation);
} }
function AutocompleteComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-empty-message", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r1.emptyMessage);
} }
class AutocompleteComponent {
    constructor() {
        this.sendLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendSearchState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.firstListItem = 0;
        this.minSearchLength = 1;
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
        this.arrowKeyLocation = 0;
    }
    searchLocations(location) {
        this.sendSearchState.emit(true);
        if (location) {
            this.sendLocation.emit(location);
        }
    }
    selectItem(searchValue) {
        this.sendSearchState.emit(false);
        this.searchField.patchValue(searchValue);
        this.resetArrowKeyLocation();
    }
    stopSearching() {
        this.sendSearchState.emit(false);
        this.resetArrowKeyLocation();
    }
    isResultListVisible(searching, searchFieldValue, loading) {
        return searching && searchFieldValue.length > this.minSearchLength && !loading;
    }
    areLocationsFound(locations) {
        return locations === null || locations === void 0 ? void 0 : locations.numFound;
    }
    selectItemFromList(event) {
        switch (event.key) {
            case _shared_enums__WEBPACK_IMPORTED_MODULE_2__["EventKey"].ArrowUp:
                this.arrowKeyLocation--;
                break;
            case _shared_enums__WEBPACK_IMPORTED_MODULE_2__["EventKey"].ArrowDown:
                this.arrowKeyLocation++;
                break;
        }
        this.setArrowKeyLocation(this.arrowKeyLocation);
    }
    setArrowKeyLocation(arrowKeyLocation) {
        var _a, _b;
        const lastListItem = ((_b = (_a = this.locations) === null || _a === void 0 ? void 0 : _a.docs) === null || _b === void 0 ? void 0 : _b.length) - 1;
        if (arrowKeyLocation <= this.firstListItem) {
            this.arrowKeyLocation = this.firstListItem;
        }
        if (arrowKeyLocation >= lastListItem) {
            this.arrowKeyLocation = lastListItem;
        }
    }
    onEnterLocation(e, locations) {
        const enteredLocation = locations.find((l, i) => i === this.arrowKeyLocation).name;
        this.sendSearchState.emit(false);
        this.searchField.patchValue(enteredLocation);
        this.resetArrowKeyLocation();
        e.preventDefault();
    }
    resetArrowKeyLocation() {
        this.arrowKeyLocation = this.firstListItem;
    }
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], inputs: { loading: "loading", searching: "searching", locations: "locations", placeholder: "placeholder", emptyMessage: "emptyMessage" }, outputs: { sendLocation: "sendLocation", sendSearchState: "sendSearchState" }, decls: 4, vars: 4, consts: [["tabindex", "1", "type", "text", 1, "form-control", "p-2", 3, "formControl", "placeholder", "input", "keydown", "blur", "keydown.enter"], [3, "locations", "arrowKeyLocation", "sendArrowKeyLocation", "sendSelectItem", 4, "ngIf"], [4, "ngIf"], [3, "locations", "arrowKeyLocation", "sendArrowKeyLocation", "sendSelectItem"], [3, "message"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutocompleteComponent_Template_input_input_0_listener($event) { return ctx.searchLocations($event.target.value); })("keydown", function AutocompleteComponent_Template_input_keydown_0_listener($event) { return ctx.selectItemFromList($event); })("blur", function AutocompleteComponent_Template_input_blur_0_listener() { return ctx.stopSearching(); })("keydown.enter", function AutocompleteComponent_Template_input_keydown_enter_0_listener($event) { return ctx.onEnterLocation($event, ctx.locations.docs); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_app_result_list_2_Template, 1, 2, "app-result-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutocompleteComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchField)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areLocationsFound(ctx.locations) && ctx.isResultListVisible(ctx.searching, ctx.searchField.value, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.areLocationsFound(ctx.locations) && ctx.isResultListVisible(ctx.searching, ctx.searchField.value, ctx.loading));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _result_list_result_list_component__WEBPACK_IMPORTED_MODULE_4__["ResultListComponent"], _empty_message_empty_message_component__WEBPACK_IMPORTED_MODULE_5__["EmptyMessageComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Avls":
/*!******************************************************************************!*\
  !*** ./src/app/components/autocomplete/result-list/result-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultListComponent", function() { return ResultListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../badge/badge.component */ "iU+x");




function ResultListComponent_li_1_app_badge_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-badge", 10);
} if (rf & 2) {
    const label_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", label_r7);
} }
function ResultListComponent_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", location_r1.city, ", ");
} }
function ResultListComponent_li_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", location_r1.region, ", ");
} }
function ResultListComponent_li_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r1.country);
} }
function ResultListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ResultListComponent_li_1_Template_li_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.arrowKeyLocationChanged(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResultListComponent_li_1_app_badge_3_Template, 1, 1, "app-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResultListComponent_li_1_Template_button_mousedown_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const location_r1 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.selectItem(location_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResultListComponent_li_1_span_8_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResultListComponent_li_1_span_9_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResultListComponent_li_1_span_10_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.arrowKeyLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getLabel(location_r1.bookingId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", location_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", location_r1.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", location_r1.country);
} }
class ResultListComponent {
    constructor() {
        this.sendSelectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendArrowKeyLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getLabel(bookingId) {
        var _a;
        return ((_a = bookingId === null || bookingId === void 0 ? void 0 : bookingId.split('-')[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || '';
    }
    selectItem(name) {
        this.sendSelectItem.emit(name);
    }
    arrowKeyLocationChanged(index) {
        this.sendArrowKeyLocation.emit(index);
    }
}
ResultListComponent.ɵfac = function ResultListComponent_Factory(t) { return new (t || ResultListComponent)(); };
ResultListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultListComponent, selectors: [["app-result-list"]], inputs: { locations: "locations", arrowKeyLocation: "arrowKeyLocation" }, outputs: { sendSelectItem: "sendSelectItem", sendArrowKeyLocation: "sendArrowKeyLocation" }, decls: 2, vars: 1, consts: [[1, "list-group", "border", "border-dark"], ["class", "list-group-item p-0 border-top", 3, "tabindex", "active", "mouseover", 4, "ngFor", "ngForOf"], [1, "list-group-item", "p-0", "border-top", 3, "tabindex", "mouseover"], [1, "row"], [1, "col-12", "col-md-3"], [3, "label", 4, "ngIf"], [1, "col-12", "col-md-9", "px-4", "pb-2", "p-md-0"], ["type", "button", "aria-current", "true", 1, "list-group-item", "list-group-item-action", "border-0", "p-1", "bg-transparent", 3, "mousedown"], [1, "m-0"], [4, "ngIf"], [3, "label"]], template: function ResultListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultListComponent_li_1_Template, 11, 8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__["BadgeComponent"]], styles: [".list-group-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border: none;\n  border-top: 1px solid #e7e7e7;\n}\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.list-group-item.active[_ngcontent-%COMP%] {\n  background: #e7f4fe;\n}\n.list-group-item[_ngcontent-%COMP%]    + .list-group-item.active[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jlc3VsdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsZUFMZTtFQU1mLFlBQUE7RUFDQSw2QkFBQTtBQUhGO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxtQkFaSTtBQVFSO0FBUUE7RUFDRSxTQUFBO0FBTEYiLCJmaWxlIjoicmVzdWx0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1zaXplLWJhc2U6IDE0cHg7XG4kZ3JheTogI2U3ZTdlNztcbiRsaWdodDogI2U3ZjRmZTtcblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JheTtcblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICRsaWdodDtcbiAgfVxufVxuXG4ubGlzdC1ncm91cC1pdGVtICsgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/search.service */ "l3hs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.component */ "7j3e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







class AppComponent {
    constructor(locationService) {
        this.locationService = locationService;
        this.searching = false;
        this.loading = false;
        this.locationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.locations$ = this.locationSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            this.loading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(location => this.locationService.getLocations(location)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            this.loading = false;
        }));
    }
    searchLocations(location) {
        this.onSearch(true);
        this.locationSubject.next(location.length > 1 && location || '');
    }
    onSearch($event) {
        this.searching = $event;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 5, consts: [[1, "row", "justify-content-center", "py-2"], [1, "col-12", "col-md-6", "col-lg-5"], [1, "bg-warning", "p-2"], ["emptyMessage", "No results found", "placeholder", "Pick-up Location", 3, "locations", "searching", "loading", "sendLocation", "sendSearchState"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-autocomplete", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sendLocation", function AppComponent_Template_app_autocomplete_sendLocation_3_listener($event) { return ctx.searchLocations($event); })("sendSearchState", function AppComponent_Template_app_autocomplete_sendSearchState_3_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locations", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, ctx.locations$))("searching", ctx.searching)("loading", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });


/***/ }),

/***/ "Xui1":
/*!*********************************!*\
  !*** ./src/app/shared/enums.ts ***!
  \*********************************/
/*! exports provided: EventKey, Labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventKey", function() { return EventKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Labels", function() { return Labels; });
var EventKey;
(function (EventKey) {
    EventKey["ArrowUp"] = "ArrowUp";
    EventKey["ArrowDown"] = "ArrowDown";
})(EventKey || (EventKey = {}));
var Labels;
(function (Labels) {
    Labels["AIRPORT"] = "airport";
    Labels["DISTRICT"] = "district";
    Labels["CITY"] = "city";
    Labels["TRAIN"] = "train";
})(Labels || (Labels = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.component */ "7j3e");
/* harmony import */ var _components_autocomplete_empty_message_empty_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/autocomplete/empty-message/empty-message.component */ "svU6");
/* harmony import */ var _components_autocomplete_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/autocomplete/badge/badge.component */ "iU+x");
/* harmony import */ var _components_autocomplete_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/autocomplete/result-list/result-list.component */ "Avls");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"],
        _components_autocomplete_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__["BadgeComponent"],
        _components_autocomplete_empty_message_empty_message_component__WEBPACK_IMPORTED_MODULE_6__["EmptyMessageComponent"],
        _components_autocomplete_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_8__["ResultListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "iU+x":
/*!******************************************************************!*\
  !*** ./src/app/components/autocomplete/badge/badge.component.ts ***!
  \******************************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var _shared_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/enums */ "Xui1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1, a2, a3) { return { "bg-danger": a0, "bg-success": a1, "bg-primary": a2, "bg-info": a3 }; };
class BadgeComponent {
    constructor() {
        this.labels = _shared_enums__WEBPACK_IMPORTED_MODULE_0__["Labels"];
    }
    isBadgeColored(label, name) {
        return (label === null || label === void 0 ? void 0 : label.toLowerCase()) === (name === null || name === void 0 ? void 0 : name.toLowerCase());
    }
}
BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(); };
BadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BadgeComponent, selectors: [["app-badge"]], inputs: { label: "label" }, decls: 2, vars: 7, consts: [[1, "badge", "mt-3", "mx-3", "my-3", "mb-0", 3, "ngClass"]], template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](2, _c0, ctx.isBadgeColored(ctx.label, ctx.labels.AIRPORT), ctx.isBadgeColored(ctx.label, ctx.labels.DISTRICT), ctx.isBadgeColored(ctx.label, ctx.labels.CITY), ctx.isBadgeColored(ctx.label, ctx.labels.TRAIN)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "l3hs":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LocationService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://www.rentalcars.com';
    }
    getLocations(searchTerm) {
        return this.http.get(`${this.apiUrl}/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${6}&solrTerm=${searchTerm}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response === null || response === void 0 ? void 0 : response.results), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([])));
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "svU6":
/*!**********************************************************************************!*\
  !*** ./src/app/components/autocomplete/empty-message/empty-message.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EmptyMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyMessageComponent", function() { return EmptyMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EmptyMessageComponent {
}
EmptyMessageComponent.ɵfac = function EmptyMessageComponent_Factory(t) { return new (t || EmptyMessageComponent)(); };
EmptyMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyMessageComponent, selectors: [["app-empty-message"]], inputs: { message: "message" }, decls: 2, vars: 1, consts: [[1, "empty-message", "p-2", "bg-white", "border", "border-dark"]], template: function EmptyMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
    } }, encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map