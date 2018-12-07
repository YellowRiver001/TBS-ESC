(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main-main-module~project-manage-project-manage-module~user-manage-user-manage-module"],{

/***/ "./node_modules/element-angular/release/alert/alert.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/alert/alert.js ***!
  \*************************************************************/
/*! exports provided: ICON_CLASS_MAP, ElAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_CLASS_MAP", function() { return ICON_CLASS_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElAlert", function() { return ElAlert; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./node_modules/element-angular/release/alert/animation.js");


var /** @type {?} */ ICON_CLASS_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error',
    'info': 'el-icon-info',
};
var ElAlert = /** @class */ (function () {
    function ElAlert() {
        this.type = 'info';
        this.center = false;
        this.closable = true;
        this.closeText = '';
        this.showIcon = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = true;
    }
    /**
     * @return {?}
     */
    ElAlert.prototype.makeIconClass = function () {
        var /** @type {?} */ base = ICON_CLASS_MAP[this.type] || 'el-icon-info';
        var /** @type {?} */ isBig = this.description || this.descriptionTmp ? ' is-big' : '';
        return base + isBig;
    };
    /**
     * @return {?}
     */
    ElAlert.prototype.makeTitleClass = function () {
        return this.description || this.descriptionTmp ? ' is-bold' : '';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElAlert.prototype.clickHandle = function (event) {
        this.visible = false;
        this.close.emit(event);
    };
    ElAlert.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-alert',
                    animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div [class]=\"'el-alert el-alert--' + type\" [@fadeAnimation]=\"!visible\"\n      [class.is-center]=\"center\" role=\"alert\">\n      <i [class]=\"'el-alert__icon ' + makeIconClass()\" *ngIf=\"showIcon\"></i>\n      <div class=\"el-alert__content\">\n        <span [class]=\"'el-alert__title ' + makeTitleClass()\">\n          <ng-content></ng-content>\n        </span>\n        <p class=\"el-alert__description\" *ngIf=\"description && !descriptionTmp\">{{description}}</p>\n        <p class=\"el-alert__description\" *ngIf=\"descriptionTmp\"><ng-template [ngTemplateOutlet]=\"descriptionTmp\"></ng-template></p>\n        <i class=\"el-alert__closebtn\"\n          *ngIf=\"closable\"\n          [class.is-customed]=\"closeText !== ''\"\n          [class.el-icon-close]=\"closeText === ''\"\n          (click)=\"clickHandle($event)\">\n          {{closeText}}\n        </i>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElAlert.ctorParameters = function () { return []; };
    ElAlert.propDecorators = {
        'descriptionTmp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['description',] },],
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'center': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'description': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'closable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'closeText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['close-text',] },],
        'showIcon': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-icon',] },],
        'close': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElAlert;
}());

function ElAlert_tsickle_Closure_declarations() {
    /** @type {?} */
    ElAlert.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElAlert.ctorParameters;
    /** @type {?} */
    ElAlert.propDecorators;
    /** @type {?} */
    ElAlert.prototype.descriptionTmp;
    /** @type {?} */
    ElAlert.prototype.type;
    /** @type {?} */
    ElAlert.prototype.center;
    /** @type {?} */
    ElAlert.prototype.description;
    /** @type {?} */
    ElAlert.prototype.closable;
    /** @type {?} */
    ElAlert.prototype.closeText;
    /** @type {?} */
    ElAlert.prototype.showIcon;
    /** @type {?} */
    ElAlert.prototype.close;
    /** @type {?} */
    ElAlert.prototype.visible;
}
//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/alert/animation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/alert/animation.js ***!
  \*****************************************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        height: 0,
        border: 0,
        padding: 0,
        margin: 0,
        visibility: 'hidden',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        height: '*',
        border: '*',
        margin: '*',
        padding: '*',
        visibility: 'inherit',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-in-out")),
]);
//# sourceMappingURL=animation.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/alert/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/element-angular/release/alert/module.js ***!
  \**************************************************************/
/*! exports provided: ElAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElAlertModule", function() { return ElAlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./node_modules/element-angular/release/alert/alert.js");



var ElAlertModule = /** @class */ (function () {
    function ElAlertModule() {
    }
    /**
     * @return {?}
     */
    ElAlertModule.forRoot = function () {
        return { ngModule: ElAlertModule, providers: [] };
    };
    ElAlertModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_alert__WEBPACK_IMPORTED_MODULE_2__["ElAlert"]],
                    exports: [_alert__WEBPACK_IMPORTED_MODULE_2__["ElAlert"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_alert__WEBPACK_IMPORTED_MODULE_2__["ElAlert"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElAlertModule.ctorParameters = function () { return []; };
    return ElAlertModule;
}());

function ElAlertModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElAlertModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElAlertModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/badge/badge.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/badge/badge.js ***!
  \*************************************************************/
/*! exports provided: ElBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElBadge", function() { return ElBadge; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElBadge = /** @class */ (function () {
    function ElBadge() {
        this.hidden = false;
        this.isDot = false;
    }
    /**
     * @return {?}
     */
    ElBadge.prototype.makeContent = function () {
        if (this.isDot)
            return '';
        if (typeof this.model === 'number') {
            return this.max < this.model ? this.max + "+" : this.model;
        }
        return this.model;
    };
    ElBadge.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-badge',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"el-badge\">\n      <ng-content></ng-content>\n      <sup *ngIf=\"!hidden && (!!makeContent() || isDot)\"\n        class=\"el-badge__content\"\n        style=\"z-index: 1;\"\n        [class.is-fixed]=\"true\" [class.is-dot]=\"isDot\">\n        {{makeContent()}}\n      </sup>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElBadge.ctorParameters = function () { return []; };
    ElBadge.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'hidden': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'isDot': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['is-dot',] },],
    };
    return ElBadge;
}());

function ElBadge_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBadge.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBadge.ctorParameters;
    /** @type {?} */
    ElBadge.propDecorators;
    /** @type {?} */
    ElBadge.prototype.model;
    /** @type {?} */
    ElBadge.prototype.max;
    /** @type {?} */
    ElBadge.prototype.hidden;
    /** @type {?} */
    ElBadge.prototype.isDot;
}
//# sourceMappingURL=badge.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/badge/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/element-angular/release/badge/module.js ***!
  \**************************************************************/
/*! exports provided: ElBadgesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElBadgesModule", function() { return ElBadgesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge */ "./node_modules/element-angular/release/badge/badge.js");



var ElBadgesModule = /** @class */ (function () {
    function ElBadgesModule() {
    }
    /**
     * @return {?}
     */
    ElBadgesModule.forRoot = function () {
        return { ngModule: ElBadgesModule, providers: [] };
    };
    ElBadgesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_badge__WEBPACK_IMPORTED_MODULE_2__["ElBadge"]],
                    exports: [_badge__WEBPACK_IMPORTED_MODULE_2__["ElBadge"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_badge__WEBPACK_IMPORTED_MODULE_2__["ElBadge"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElBadgesModule.ctorParameters = function () { return []; };
    return ElBadgesModule;
}());

function ElBadgesModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBadgesModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBadgesModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/breadcrumb/breadcrumb-item.js":
/*!****************************************************************************!*\
  !*** ./node_modules/element-angular/release/breadcrumb/breadcrumb-item.js ***!
  \****************************************************************************/
/*! exports provided: ElBreadcrumbItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElBreadcrumbItem", function() { return ElBreadcrumbItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb */ "./node_modules/element-angular/release/breadcrumb/breadcrumb.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");




var ElBreadcrumbItem = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} router
     * @param {?} el
     */
    function ElBreadcrumbItem(root, router, el) {
        this.root = root;
        this.router = router;
        this.el = el;
        this.prevent = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ElBreadcrumbItem.prototype.clickHandle = function (event) {
        event.stopPropagation();
        this.root.itemHandle(this.to);
        if (!this.to || this.root.prevent || this.prevent)
            return;
        return this.router.navigateByUrl(this.to, this.extras);
    };
    /**
     * @return {?}
     */
    ElBreadcrumbItem.prototype.ngOnInit = function () {
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_3__["removeNgTag"])(this.el.nativeElement);
    };
    ElBreadcrumbItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-breadcrumb-item',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <span class=\"el-breadcrumb__item\">\n      <span class=\"el-breadcrumb__inner\" (click)=\"clickHandle($event)\" ref=\"link\" role=\"link\">\n        <ng-content></ng-content>\n      </span>\n      <i *ngIf=\"root.separatorClass\" [class]=\"'el-breadcrumb__separator ' + root.separatorClass\"></i>\n      <span *ngIf=\"!root.separatorClass\" class=\"el-breadcrumb__separator\">{{root.separator}}</span>\n    </span>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElBreadcrumbItem.ctorParameters = function () { return [
        { type: _breadcrumb__WEBPACK_IMPORTED_MODULE_1__["ElBreadcrumb"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElBreadcrumbItem.propDecorators = {
        'to': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'prevent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'extras': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElBreadcrumbItem;
}());

function ElBreadcrumbItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBreadcrumbItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBreadcrumbItem.ctorParameters;
    /** @type {?} */
    ElBreadcrumbItem.propDecorators;
    /** @type {?} */
    ElBreadcrumbItem.prototype.to;
    /** @type {?} */
    ElBreadcrumbItem.prototype.prevent;
    /** @type {?} */
    ElBreadcrumbItem.prototype.extras;
    /** @type {?} */
    ElBreadcrumbItem.prototype.root;
    /** @type {?} */
    ElBreadcrumbItem.prototype.router;
    /** @type {?} */
    ElBreadcrumbItem.prototype.el;
}
//# sourceMappingURL=breadcrumb-item.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/breadcrumb/breadcrumb.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/breadcrumb/breadcrumb.js ***!
  \***********************************************************************/
/*! exports provided: ElBreadcrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElBreadcrumb", function() { return ElBreadcrumb; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElBreadcrumb = /** @class */ (function () {
    function ElBreadcrumb() {
        this.separator = '/';
        this.prevent = false;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ElBreadcrumb.prototype.itemHandle = function (path) {
        this.next.emit(path);
    };
    ElBreadcrumb.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-breadcrumb',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"el-breadcrumb\" aria-label=\"Breadcrumb\" role=\"navigation\">\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElBreadcrumb.ctorParameters = function () { return []; };
    ElBreadcrumb.propDecorators = {
        'separator': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'separatorClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['separator-class',] },],
        'prevent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'next': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['next',] },],
    };
    return ElBreadcrumb;
}());

function ElBreadcrumb_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBreadcrumb.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBreadcrumb.ctorParameters;
    /** @type {?} */
    ElBreadcrumb.propDecorators;
    /** @type {?} */
    ElBreadcrumb.prototype.separator;
    /** @type {?} */
    ElBreadcrumb.prototype.separatorClass;
    /** @type {?} */
    ElBreadcrumb.prototype.prevent;
    /** @type {?} */
    ElBreadcrumb.prototype.next;
}
//# sourceMappingURL=breadcrumb.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/breadcrumb/module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/breadcrumb/module.js ***!
  \*******************************************************************/
/*! exports provided: ElBreadcrumbsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElBreadcrumbsModule", function() { return ElBreadcrumbsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb */ "./node_modules/element-angular/release/breadcrumb/breadcrumb.js");
/* harmony import */ var _breadcrumb_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb-item */ "./node_modules/element-angular/release/breadcrumb/breadcrumb-item.js");




var ElBreadcrumbsModule = /** @class */ (function () {
    function ElBreadcrumbsModule() {
    }
    /**
     * @return {?}
     */
    ElBreadcrumbsModule.forRoot = function () {
        return { ngModule: ElBreadcrumbsModule, providers: [] };
    };
    ElBreadcrumbsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["ElBreadcrumb"], _breadcrumb_item__WEBPACK_IMPORTED_MODULE_3__["ElBreadcrumbItem"]],
                    exports: [_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["ElBreadcrumb"], _breadcrumb_item__WEBPACK_IMPORTED_MODULE_3__["ElBreadcrumbItem"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["ElBreadcrumb"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElBreadcrumbsModule.ctorParameters = function () { return []; };
    return ElBreadcrumbsModule;
}());

function ElBreadcrumbsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBreadcrumbsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBreadcrumbsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/button/button-group.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/button/button-group.js ***!
  \*********************************************************************/
/*! exports provided: ElButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElButtonGroup", function() { return ElButtonGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElButtonGroup = /** @class */ (function () {
    function ElButtonGroup() {
        this.nativeClass = '';
    }
    ElButtonGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-button-group',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div [class]=\"'el-button-group ' + nativeClass\">\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElButtonGroup.ctorParameters = function () { return []; };
    ElButtonGroup.propDecorators = {
        'nativeClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] },],
    };
    return ElButtonGroup;
}());

function ElButtonGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    ElButtonGroup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElButtonGroup.ctorParameters;
    /** @type {?} */
    ElButtonGroup.propDecorators;
    /** @type {?} */
    ElButtonGroup.prototype.nativeClass;
}
//# sourceMappingURL=button-group.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/button/button.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/button/button.js ***!
  \***************************************************************/
/*! exports provided: ElButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElButton", function() { return ElButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ElButton = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} sanitizer
     */
    function ElButton(el, sanitizer) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.elDisabled = false;
        this.themeType = '';
        this.nativeType = 'button';
        this.size = '';
        this.icon = '';
        this.loading = false;
        this.plain = false;
        this.round = false;
        this.autofocus = false;
        this.style = '';
        this.nativeClass = '';
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ElButton.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    ElButton.prototype.clickHandle = function ($event) {
        this.click.emit($event);
    };
    /**
     * @return {?}
     */
    ElButton.prototype.extendStyles = function () {
        return this.sanitizer.bypassSecurityTrustStyle(this.style);
    };
    /**
     * @return {?}
     */
    ElButton.prototype.ngOnInit = function () {
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_1__["removeNgTag"])(this.el.nativeElement);
    };
    ElButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-button',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n  <button (click)=\"clickHandle($event)\"\n    [class]=\"'el-button ' + (themeType ? ' el-button--' + themeType : '')\n      + (size ? ' el-button--' + size : '') + ' ' + nativeClass\"\n    [class.is-disabled]=\"elDisabled\"\n    [class.is-loading]=\"loading\"\n    [class.is-plain]=\"plain\"\n    [class.is-round]=\"round\"\n    [disabled]=\"elDisabled\"\n    [type]=\"nativeType\"\n    [style]=\"extendStyles()\"\n    [autofocus]=\"autofocus\">\n    <i class=\"el-icon-loading\" *ngIf=\"loading\"></i>\n    <i [class]=\"'el-icon-' + icon\" *ngIf=\"icon && !loading\"></i>\n    <ng-content></ng-content>\n  </button>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElButton.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], },
    ]; };
    ElButton.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'themeType': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['type',] },],
        'nativeType': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['native-type',] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'icon': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'loading': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'plain': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'round': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autofocus': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'style': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nativeClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] },],
        'click': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElButton;
}());

function ElButton_tsickle_Closure_declarations() {
    /** @type {?} */
    ElButton.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElButton.ctorParameters;
    /** @type {?} */
    ElButton.propDecorators;
    /** @type {?} */
    ElButton.prototype.elDisabled;
    /** @type {?} */
    ElButton.prototype.themeType;
    /** @type {?} */
    ElButton.prototype.nativeType;
    /** @type {?} */
    ElButton.prototype.size;
    /** @type {?} */
    ElButton.prototype.icon;
    /** @type {?} */
    ElButton.prototype.loading;
    /** @type {?} */
    ElButton.prototype.plain;
    /** @type {?} */
    ElButton.prototype.round;
    /** @type {?} */
    ElButton.prototype.autofocus;
    /** @type {?} */
    ElButton.prototype.style;
    /** @type {?} */
    ElButton.prototype.nativeClass;
    /** @type {?} */
    ElButton.prototype.click;
    /** @type {?} */
    ElButton.prototype.el;
    /** @type {?} */
    ElButton.prototype.sanitizer;
}
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/button/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/button/module.js ***!
  \***************************************************************/
/*! exports provided: ElButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElButtonsModule", function() { return ElButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./node_modules/element-angular/release/button/button.js");
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-group */ "./node_modules/element-angular/release/button/button-group.js");




var ElButtonsModule = /** @class */ (function () {
    function ElButtonsModule() {
    }
    /**
     * @return {?}
     */
    ElButtonsModule.forRoot = function () {
        return { ngModule: ElButtonsModule, providers: [] };
    };
    ElButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_button__WEBPACK_IMPORTED_MODULE_2__["ElButton"], _button_group__WEBPACK_IMPORTED_MODULE_3__["ElButtonGroup"]],
                    exports: [_button__WEBPACK_IMPORTED_MODULE_2__["ElButton"], _button_group__WEBPACK_IMPORTED_MODULE_3__["ElButtonGroup"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_button__WEBPACK_IMPORTED_MODULE_2__["ElButton"], _button_group__WEBPACK_IMPORTED_MODULE_3__["ElButtonGroup"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElButtonsModule.ctorParameters = function () { return []; };
    return ElButtonsModule;
}());

function ElButtonsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElButtonsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElButtonsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/card/card.js":
/*!***********************************************************!*\
  !*** ./node_modules/element-angular/release/card/card.js ***!
  \***********************************************************/
/*! exports provided: ElCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCard", function() { return ElCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


var ElCard = /** @class */ (function () {
    /**
     * @param {?} sanitizer
     */
    function ElCard(sanitizer) {
        this.sanitizer = sanitizer;
        this.bodyStyle = '';
    }
    /**
     * @return {?}
     */
    ElCard.prototype.makeSafebodyStyle = function () {
        return this.sanitizer.bypassSecurityTrustStyle(this.bodyStyle);
    };
    ElCard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-card',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"el-card\">\n      <div class=\"el-card__header\" *ngIf=\"header || headerStr\">\n        <ng-container *ngIf=\"header\">\n          <ng-template [ngTemplateOutlet]=\"header\">\n          </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!header\">\n          {{headerStr}}\n        </ng-container>\n      </div>\n      <div class=\"el-card__body\" [style]=\"makeSafebodyStyle()\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCard.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    ElCard.propDecorators = {
        'header': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['header',] },],
        'headerStr': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['header',] },],
        'bodyStyle': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['body-style',] },],
    };
    return ElCard;
}());

function ElCard_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCard.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCard.ctorParameters;
    /** @type {?} */
    ElCard.propDecorators;
    /** @type {?} */
    ElCard.prototype.header;
    /** @type {?} */
    ElCard.prototype.headerStr;
    /** @type {?} */
    ElCard.prototype.bodyStyle;
    /** @type {?} */
    ElCard.prototype.sanitizer;
}
//# sourceMappingURL=card.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/card/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/card/module.js ***!
  \*************************************************************/
/*! exports provided: ElCardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCardsModule", function() { return ElCardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./node_modules/element-angular/release/card/card.js");



var ElCardsModule = /** @class */ (function () {
    function ElCardsModule() {
    }
    /**
     * @return {?}
     */
    ElCardsModule.forRoot = function () {
        return { ngModule: ElCardsModule, providers: [] };
    };
    ElCardsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_card__WEBPACK_IMPORTED_MODULE_2__["ElCard"]],
                    exports: [_card__WEBPACK_IMPORTED_MODULE_2__["ElCard"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_card__WEBPACK_IMPORTED_MODULE_2__["ElCard"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCardsModule.ctorParameters = function () { return []; };
    return ElCardsModule;
}());

function ElCardsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCardsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCardsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/carousel/animations.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/carousel/animations.js ***!
  \*********************************************************************/
/*! exports provided: carouselBtnLeftAnimation, carouselBtnRightAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselBtnLeftAnimation", function() { return carouselBtnLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselBtnRightAnimation", function() { return carouselBtnRightAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ carouselBtnLeftAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('carouselBtnLeftAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(-15px, -50%, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(-15px, -50%, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translate3D(0, -50%, 0)',
        visibility: 'inherit',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-out")),
]);
var /** @type {?} */ carouselBtnRightAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('carouselBtnRightAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(15px, -50%, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(15px, -50%, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translate3D(0, -50%, 0)',
        visibility: 'inherit',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-out")),
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/carousel/carousel-item.js":
/*!************************************************************************!*\
  !*** ./node_modules/element-angular/release/carousel/carousel-item.js ***!
  \************************************************************************/
/*! exports provided: ElCarouselItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCarouselItem", function() { return ElCarouselItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./node_modules/element-angular/release/carousel/carousel.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");





var ElCarouselItem = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} sanitizer
     * @param {?} el
     */
    function ElCarouselItem(root, sanitizer, el) {
        this.root = root;
        this.sanitizer = sanitizer;
        this.el = el;
        this.label = '';
        this.isActive = false;
    }
    /**
     * @return {?}
     */
    ElCarouselItem.prototype.updateActive = function () {
        var /** @type {?} */ isActive = this.root.model === this.index;
        if (this.isActive !== isActive) {
            this.isActive = isActive;
        }
    };
    /**
     * @return {?}
     */
    ElCarouselItem.prototype.updateStyles = function () {
        var /** @type {?} */ map = {
            '1': 0 - this.width,
            '-1': this.width,
            '2': this.width,
            '-2': 0 - this.width,
            '0': 0,
        };
        var /** @type {?} */ offset = this.root.model - this.index;
        var /** @type {?} */ translate = map[offset];
        var /** @type {?} */ styles = "transform: translateX(" + translate + "px);";
        // change direction disable animation
        var /** @type {?} */ changeDirection = (this.preTranslate < 0 && translate > 0)
            || (this.preTranslate > 0 && translate < 0);
        this.isAnimating = !changeDirection;
        this.styles = this.sanitizer.bypassSecurityTrustStyle(styles);
        // save current value
        this.preTranslate = translate;
    };
    /**
     * @return {?}
     */
    ElCarouselItem.prototype.update = function () {
        this.updateStyles();
        this.updateActive();
    };
    /**
     * @return {?}
     */
    ElCarouselItem.prototype.ngOnInit = function () {
        var _this = this;
        // collect items
        this.root.items.push(this.label);
        this.width = this.el.nativeElement.children[0].offsetWidth;
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_4__["removeNgTag"])(this.el.nativeElement);
        // manually update
        this.root.subscriber.push(function () { return _this.update(); });
        this.update();
    };
    ElCarouselItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-carousel-item',
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]],
                    template: "\n    <div class=\"el-carousel__item\"\n      [class.is-active]=\"isActive\"\n      [class.el-carousel__item--card]=\"root.type === 'card'\"\n      [class.is-animating]=\"isAnimating\"\n      [style]=\"styles\">\n      <!--<div class=\"el-carousel__mask\" *ngIf=\"root.type === 'card'\"-->\n        <!--[@fadeAnimation]=\"isActive()\">-->\n      <!--</div>-->\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCarouselItem.ctorParameters = function () { return [
        { type: _carousel__WEBPACK_IMPORTED_MODULE_2__["ElCarousel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _carousel__WEBPACK_IMPORTED_MODULE_2__["ElCarousel"]; }),] },] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElCarouselItem.propDecorators = {
        'index': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElCarouselItem;
}());

function ElCarouselItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCarouselItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCarouselItem.ctorParameters;
    /** @type {?} */
    ElCarouselItem.propDecorators;
    /** @type {?} */
    ElCarouselItem.prototype.index;
    /** @type {?} */
    ElCarouselItem.prototype.label;
    /** @type {?} */
    ElCarouselItem.prototype.width;
    /** @type {?} */
    ElCarouselItem.prototype.preTranslate;
    /** @type {?} */
    ElCarouselItem.prototype.isAnimating;
    /** @type {?} */
    ElCarouselItem.prototype.isActive;
    /** @type {?} */
    ElCarouselItem.prototype.styles;
    /** @type {?} */
    ElCarouselItem.prototype.root;
    /** @type {?} */
    ElCarouselItem.prototype.sanitizer;
    /** @type {?} */
    ElCarouselItem.prototype.el;
}
//# sourceMappingURL=carousel-item.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/carousel/carousel-props.js":
/*!*************************************************************************!*\
  !*** ./node_modules/element-angular/release/carousel/carousel-props.js ***!
  \*************************************************************************/
/*! exports provided: ElCarouselProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCarouselProps", function() { return ElCarouselProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElCarouselProps = /** @class */ (function () {
    function ElCarouselProps() {
        this.height = '150px';
        this.trigger = 'click'; // click, hover
        this.indicatorTrigger = 'click'; // click, hover
        this.autoplay = true;
        this.interval = 3000;
        this.initialIndex = 0;
        this.arrow = 'hover'; // always, hover, never
        this.model = 0;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ElCarouselProps.propDecorators = {
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'trigger': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'indicatorTrigger': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoplay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'interval': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'initialIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['initial-index',] },],
        'indicatorPosition': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['indicator-position',] },],
        'arrow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElCarouselProps;
}());

function ElCarouselProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCarouselProps.propDecorators;
    /** @type {?} */
    ElCarouselProps.prototype.height;
    /** @type {?} */
    ElCarouselProps.prototype.trigger;
    /** @type {?} */
    ElCarouselProps.prototype.indicatorTrigger;
    /** @type {?} */
    ElCarouselProps.prototype.autoplay;
    /** @type {?} */
    ElCarouselProps.prototype.interval;
    /** @type {?} */
    ElCarouselProps.prototype.initialIndex;
    /** @type {?} */
    ElCarouselProps.prototype.indicatorPosition;
    /** @type {?} */
    ElCarouselProps.prototype.arrow;
    /** @type {?} */
    ElCarouselProps.prototype.type;
    /** @type {?} */
    ElCarouselProps.prototype.model;
    /** @type {?} */
    ElCarouselProps.prototype.modelChange;
}
//# sourceMappingURL=carousel-props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/carousel/carousel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/carousel/carousel.js ***!
  \*******************************************************************/
/*! exports provided: ElCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCarousel", function() { return ElCarousel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-item */ "./node_modules/element-angular/release/carousel/carousel-item.js");
/* harmony import */ var _carousel_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-props */ "./node_modules/element-angular/release/carousel/carousel-props.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./node_modules/element-angular/release/carousel/animations.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ElCarousel = /** @class */ (function (_super) {
    __extends(ElCarousel, _super);
    function ElCarousel() {
        var _this = _super.call(this) || this;
        _this.subscriber = [];
        _this.items = [];
        _this.hasLabel = false;
        return _this;
    }
    /**
     * @param {?} nextValue
     * @param {?} eventType
     * @return {?}
     */
    ElCarousel.prototype.btnActionHandle = function (nextValue, eventType) {
        if (this.trigger !== eventType)
            return;
        this.autoplay && this.resetInterval();
        this.setActiveItem(nextValue);
    };
    /**
     * @param {?} nextValue
     * @param {?} eventType
     * @return {?}
     */
    ElCarousel.prototype.indicatorActionHandle = function (nextValue, eventType) {
        if (this.indicatorTrigger !== eventType)
            return;
        this.autoplay && this.resetInterval();
        this.setActiveItem(nextValue);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ElCarousel.prototype.setActiveItem = function (index) {
        if (!this.children)
            return;
        var /** @type {?} */ len = this.children.length;
        var /** @type {?} */ nextValue = index >= len ? 0 : index < 0 ? len - 1 : index;
        this.model = nextValue;
        this.subscriber.forEach(function (func) { return func(); });
        this.modelChange.emit(this.model);
    };
    /**
     * @return {?}
     */
    ElCarousel.prototype.resetInterval = function () {
        var _this = this;
        this.timer && clearInterval(this.timer);
        this.timer = setInterval(function () {
            _this.setActiveItem(_this.model + 1);
        }, this.interval);
    };
    /**
     * @return {?}
     */
    ElCarousel.prototype.ngAfterContentChecked = function () {
        var _this = this;
        var /** @type {?} */ timer = setTimeout(function () {
            _this.children.forEach(function (item, index) {
                item.index = index;
                item.updateActive();
                item.updateStyles();
            });
            // all labels are validated
            _this.hasLabel = !_this.items.some(function (item) { return !item; });
            // auto play
            _this.autoplay && _this.resetInterval();
            clearTimeout(timer);
        }, 0);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElCarousel.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        this.setActiveItem(changes.model.currentValue);
    };
    /**
     * @return {?}
     */
    ElCarousel.prototype.ngOnDestroy = function () {
        this.timer && clearInterval(this.timer);
    };
    ElCarousel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-carousel',
                    animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["carouselBtnLeftAnimation"], _animations__WEBPACK_IMPORTED_MODULE_3__["carouselBtnRightAnimation"]],
                    template: "\n    <div class=\"el-carousel\"\n      #carousel\n      [class.el-carousel--card]=\"type === 'card'\"\n      (mouseenter)=\"carousel.hover = true\"\n      (mouseleave)=\"carousel.hover = false\">\n      <div class=\"el-carousel__container\" [ngStyle]=\"{height: height}\">\n        <button class=\"el-carousel__arrow el-carousel__arrow--left\"\n          #leftBtn\n          *ngIf=\"arrow !== 'never'\"\n          [@carouselBtnLeftAnimation]=\"arrow === 'always' || carousel.hover\"\n          (mouseenter)=\"btnActionHandle(model - 1,'hover')\"\n          (click)=\"btnActionHandle(model - 1, 'click')\">\n          <i class=\"el-icon-arrow-left\"></i>\n        </button>\n        <button class=\"el-carousel__arrow el-carousel__arrow--right\"\n          #rightBtn\n          *ngIf=\"arrow !== 'never'\"\n          [@carouselBtnRightAnimation]=\"arrow === 'always' || carousel.hover\"\n          (mouseenter)=\"btnActionHandle(model + 1, 'hover')\"\n          (click)=\"btnActionHandle(model + 1, 'click')\">\n          <i class=\"el-icon-arrow-right\"></i>\n        </button>\n        <ng-content></ng-content>\n      </div>\n      <ul class=\"el-carousel__indicators\" *ngIf=\"indicatorPosition !== 'none'\"\n        [class.el-carousel__indicators--labels]=\"hasLabel\"\n        [class.el-carousel__indicators--outside]=\"indicatorPosition === 'outside' || type === 'card'\">\n        <li *ngFor=\"let item of items; let i = index\"\n          class=\"el-carousel__indicator\"\n          [class.is-active]=\"i === model\"\n          (mouseenter)=\"indicatorActionHandle(i, 'hover')\"\n          (click)=\"indicatorActionHandle(i, 'click')\">\n          <button class=\"el-carousel__button\">\n            <span *ngIf=\"hasLabel\">{{item}}</span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCarousel.ctorParameters = function () { return []; };
    ElCarousel.propDecorators = {
        'children': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _carousel_item__WEBPACK_IMPORTED_MODULE_1__["ElCarouselItem"]; }),] },],
    };
    return ElCarousel;
}(_carousel_props__WEBPACK_IMPORTED_MODULE_2__["ElCarouselProps"]));

function ElCarousel_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCarousel.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCarousel.ctorParameters;
    /** @type {?} */
    ElCarousel.propDecorators;
    /** @type {?} */
    ElCarousel.prototype.children;
    /** @type {?} */
    ElCarousel.prototype.subscriber;
    /** @type {?} */
    ElCarousel.prototype.items;
    /** @type {?} */
    ElCarousel.prototype.hasLabel;
    /** @type {?} */
    ElCarousel.prototype.timer;
}
//# sourceMappingURL=carousel.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/carousel/module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/carousel/module.js ***!
  \*****************************************************************/
/*! exports provided: ElCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCarouselModule", function() { return ElCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./node_modules/element-angular/release/carousel/carousel.js");
/* harmony import */ var _carousel_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel-item */ "./node_modules/element-angular/release/carousel/carousel-item.js");




var ElCarouselModule = /** @class */ (function () {
    function ElCarouselModule() {
    }
    /**
     * @return {?}
     */
    ElCarouselModule.forRoot = function () {
        return { ngModule: ElCarouselModule, providers: [] };
    };
    ElCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_carousel__WEBPACK_IMPORTED_MODULE_2__["ElCarousel"], _carousel_item__WEBPACK_IMPORTED_MODULE_3__["ElCarouselItem"]],
                    exports: [_carousel__WEBPACK_IMPORTED_MODULE_2__["ElCarousel"], _carousel_item__WEBPACK_IMPORTED_MODULE_3__["ElCarouselItem"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_carousel__WEBPACK_IMPORTED_MODULE_2__["ElCarousel"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCarouselModule.ctorParameters = function () { return []; };
    return ElCarouselModule;
}());

function ElCarouselModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCarouselModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCarouselModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/cascader/cascader-props.js":
/*!*************************************************************************!*\
  !*** ./node_modules/element-angular/release/cascader/cascader-props.js ***!
  \*************************************************************************/
/*! exports provided: ElCascaderPoprs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCascaderPoprs", function() { return ElCascaderPoprs; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElCascaderPoprs = /** @class */ (function () {
    function ElCascaderPoprs() {
        this.elDisabled = false;
        this.placeholder = '请选择';
        this.clearable = false;
        this.allLevels = true;
        this.changeOnSelect = false;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ElCascaderPoprs.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    ElCascaderPoprs.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'placeholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'options': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'clearable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'allLevels': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['all-levels',] },],
        'changeOnSelect': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['change-on-select',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElCascaderPoprs;
}());

function ElCascaderPoprs_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCascaderPoprs.propDecorators;
    /** @type {?} */
    ElCascaderPoprs.prototype.elDisabled;
    /** @type {?} */
    ElCascaderPoprs.prototype.size;
    /** @type {?} */
    ElCascaderPoprs.prototype.placeholder;
    /** @type {?} */
    ElCascaderPoprs.prototype.options;
    /** @type {?} */
    ElCascaderPoprs.prototype.clearable;
    /** @type {?} */
    ElCascaderPoprs.prototype.allLevels;
    /** @type {?} */
    ElCascaderPoprs.prototype.changeOnSelect;
    /** @type {?} */
    ElCascaderPoprs.prototype.model;
    /** @type {?} */
    ElCascaderPoprs.prototype.modelChange;
}
//# sourceMappingURL=cascader-props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/cascader/cascader.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/cascader/cascader.js ***!
  \*******************************************************************/
/*! exports provided: ElCascader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCascader", function() { return ElCascader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cascader_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cascader-props */ "./node_modules/element-angular/release/cascader/cascader-props.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ElCascader = /** @class */ (function (_super) {
    __extends(ElCascader, _super);
    /**
     * @param {?} renderer
     */
    function ElCascader(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.steps = [];
        _this.menuVisible = false;
        _this.inputHover = false;
        _this.currentLabels = [];
        _this.controlChange = function () { };
        _this.controlTouch = function () { };
        return _this;
    }
    /**
     * @return {?}
     */
    ElCascader.prototype.close = function () {
        this.menuVisible = false;
        this.globalListenFunc && this.globalListenFunc();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElCascader.prototype.clickHandle = function (event) {
        var _this = this;
        event.stopPropagation();
        if (this.elDisabled)
            return;
        var /** @type {?} */ element = (event.target);
        var /** @type {?} */ isSelfTrigger = ['SPAN', 'I', 'INPUT'].find(function (v) { return v === element.tagName; });
        if (!isSelfTrigger)
            return;
        this.menuVisible = !this.menuVisible;
        if (this.menuVisible) {
            this.globalListenFunc = this.renderer.listen('document', 'click', function () {
                _this.menuVisible = false;
            });
        }
        else {
            this.globalListenFunc && this.globalListenFunc();
        }
    };
    /**
     * @return {?}
     */
    ElCascader.prototype.changeLabels = function () {
        var /** @type {?} */ nextValue = [];
        this.steps.forEach(function (items) {
            var /** @type {?} */ steps = items.filter(function (item) { return item.active; });
            nextValue.push(steps[0]);
        });
        this.currentLabels = nextValue;
        var /** @type {?} */ next = nextValue.map(function (item) { return item.value; });
        this.model = next;
        this.modelChange.emit(next);
        this.controlChange(next);
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ElCascader.prototype.clearValue = function (event) {
        event && event.stopPropagation();
        this.currentLabels = [];
        var /** @type {?} */ step1 = this.options.map(function (option) {
            return Object.assign(option, {
                active: false,
            });
        });
        this.steps = [step1];
        this.menuVisible = false;
    };
    /**
     * @param {?} event
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    ElCascader.prototype.selectHandle = function (event, step, index) {
        event.stopPropagation();
        if (this.steps[step][index].elDisabled)
            return;
        this.steps[step] = this.steps[step].map(function (item, i) {
            return Object.assign(item, { active: i === index });
        });
        // reset steps
        this.steps.length = step + 1;
        var /** @type {?} */ next = this.steps[step][index].children;
        // go next
        if (next && Array.isArray(next)) {
            // change on select (props)
            this.changeOnSelect && this.changeLabels();
            var /** @type {?} */ nativeNext = next.map(function (item) { return Object.assign(item, { active: false }); });
            return this.steps.push(nativeNext);
        }
        // last step
        this.changeLabels();
        this.menuVisible = false;
    };
    /**
     * @return {?}
     */
    ElCascader.prototype.showClearIcon = function () {
        return !!(this.clearable && this.inputHover && this.currentLabels.length);
    };
    /**
     * @return {?}
     */
    ElCascader.prototype.ngOnInit = function () {
        this.clearValue();
        if (this.model && this.model.length) {
            var /** @type {?} */ getLabel_1 = function (options, val) {
                var /** @type {?} */ item = options.filter(function (item) { return item.value === val; })[0];
                return { children: item.children, val: item };
            };
            var /** @type {?} */ options_1 = this.options;
            var /** @type {?} */ val = this.model.map(function (v) {
                var _a = getLabel_1(options_1, v), children = _a.children, val = _a.val;
                options_1 = children;
                return val;
            });
            this.currentLabels = val.filter(function (v) { return !!v; });
        }
    };
    /**
     * @return {?}
     */
    ElCascader.prototype.ngOnDestroy = function () {
        this.globalListenFunc && this.globalListenFunc();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElCascader.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElCascader.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElCascader.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElCascader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-cascader',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElCascader; }),
                            multi: true
                        }],
                    template: "\n    <span [class]=\"'el-cascader ' +  (menuVisible ? 'is-opened ' : '') + (elDisabled ? 'is-disabled ' : '')\n      + (size ? 'el-cascader--' + size : '')\"\n      (click)=\"clickHandle($event)\"\n      (mouseenter)=\"inputHover = true\" (mouseleave)=\"inputHover = false\">\n      <el-input [readonly]=\"true\"\n        [placeholder]=\"currentLabels.length ? '' : placeholder\"\n        [size]=\"size\" [elDisabled]=\"elDisabled\"\n        [icon]=\"showClearIcon() ? 'circle-close' : 'caret-bottom'\"\n        [iconClass]=\"showClearIcon() ? 'el-cascader__clearIcon' : (menuVisible ? 'is-reverse' : '')\"\n        (icon-click)=\"clearValue($event)\">\n      </el-input>\n    \n      <span class=\"el-cascader__label\" *ngIf=\"currentLabels.length\">\n        <ng-container *ngIf=\"allLevels\">\n          <ng-container *ngFor=\"let item of currentLabels; let i = index\">\n            {{ item.label }}\n            <span *ngIf=\"i < currentLabels.length - 1\"> / </span>\n          </ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!allLevels\">\n          {{ currentLabels[currentLabels.length - 1].label }}\n        </ng-container>\n      </span>\n      <el-cascader-menu></el-cascader-menu>\n  </span>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCascader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    return ElCascader;
}(_cascader_props__WEBPACK_IMPORTED_MODULE_1__["ElCascaderPoprs"]));

function ElCascader_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCascader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCascader.ctorParameters;
    /** @type {?} */
    ElCascader.prototype.steps;
    /** @type {?} */
    ElCascader.prototype.menuVisible;
    /** @type {?} */
    ElCascader.prototype.inputHover;
    /** @type {?} */
    ElCascader.prototype.currentLabels;
    /** @type {?} */
    ElCascader.prototype.globalListenFunc;
    /** @type {?} */
    ElCascader.prototype.controlChange;
    /** @type {?} */
    ElCascader.prototype.controlTouch;
    /** @type {?} */
    ElCascader.prototype.renderer;
}
//# sourceMappingURL=cascader.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/cascader/cascader.menu.js":
/*!************************************************************************!*\
  !*** ./node_modules/element-angular/release/cascader/cascader.menu.js ***!
  \************************************************************************/
/*! exports provided: ElCascaderMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCascaderMenu", function() { return ElCascaderMenu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cascader */ "./node_modules/element-angular/release/cascader/cascader.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");



var ElCascaderMenu = /** @class */ (function () {
    /**
     * @param {?} root
     */
    function ElCascaderMenu(root) {
        this.root = root;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ElCascaderMenu.prototype.clickHandle = function (event) {
        event.stopPropagation();
    };
    ElCascaderMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-cascader-menu',
                    template: "\n    <div class=\"el-cascader-menus\"\n      style=\"z-index: 2007; position: absolute; top: 100%; left: 0;\"\n      [@dropAnimation]=\"root.menuVisible\"\n      (click)=\"clickHandle($event)\">\n      <ul class=\"el-cascader-menu\" *ngFor=\"let menuItem of root.steps; let step = index\">\n        <li *ngFor=\"let listItem of menuItem; let i = index\"\n          class=\"el-cascader-menu__item\"\n          [class.el-cascader-menu__item--extensible]=\"listItem.children\"\n          [class.is-active]=\"listItem.active\"\n          [class.is-disabled]=\"listItem.elDisabled\"\n          (click)=\"root.selectHandle($event, step, i)\">\n          {{listItem.label}}\n        </li>\n      </ul>\n    </div>\n  ",
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_2__["dropAnimation"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCascaderMenu.ctorParameters = function () { return [
        { type: _cascader__WEBPACK_IMPORTED_MODULE_1__["ElCascader"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    return ElCascaderMenu;
}());

function ElCascaderMenu_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCascaderMenu.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCascaderMenu.ctorParameters;
    /** @type {?} */
    ElCascaderMenu.prototype.root;
}
//# sourceMappingURL=cascader.menu.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/cascader/module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/cascader/module.js ***!
  \*****************************************************************/
/*! exports provided: ElCascaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCascaderModule", function() { return ElCascaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/module */ "./node_modules/element-angular/release/input/module.js");
/* harmony import */ var _cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cascader */ "./node_modules/element-angular/release/cascader/cascader.js");
/* harmony import */ var _cascader_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cascader.menu */ "./node_modules/element-angular/release/cascader/cascader.menu.js");





var ElCascaderModule = /** @class */ (function () {
    function ElCascaderModule() {
    }
    /**
     * @return {?}
     */
    ElCascaderModule.forRoot = function () {
        return { ngModule: ElCascaderModule, providers: [] };
    };
    ElCascaderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_cascader__WEBPACK_IMPORTED_MODULE_3__["ElCascader"], _cascader_menu__WEBPACK_IMPORTED_MODULE_4__["ElCascaderMenu"]],
                    exports: [_cascader__WEBPACK_IMPORTED_MODULE_3__["ElCascader"], _cascader_menu__WEBPACK_IMPORTED_MODULE_4__["ElCascaderMenu"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _input_module__WEBPACK_IMPORTED_MODULE_2__["ElInputsModule"]],
                    entryComponents: [_cascader__WEBPACK_IMPORTED_MODULE_3__["ElCascader"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCascaderModule.ctorParameters = function () { return []; };
    return ElCascaderModule;
}());

function ElCascaderModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCascaderModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCascaderModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/checkbox/checkbox-button.js":
/*!**************************************************************************!*\
  !*** ./node_modules/element-angular/release/checkbox/checkbox-button.js ***!
  \**************************************************************************/
/*! exports provided: ElCheckboxButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCheckboxButton", function() { return ElCheckboxButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-group */ "./node_modules/element-angular/release/checkbox/checkbox-group.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ElCheckboxButton = /** @class */ (function () {
    /**
     * @param {?} hostGroup
     * @param {?} el
     * @param {?} domSanitizer
     */
    function ElCheckboxButton(hostGroup, el, domSanitizer) {
        this.hostGroup = hostGroup;
        this.el = el;
        this.domSanitizer = domSanitizer;
        this.elDisabled = false;
        this.indeterminate = false;
        this.checked = false;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parentIsGroup = false;
        this.isFocus = false;
        this.showLabel = false;
    }
    Object.defineProperty(ElCheckboxButton.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ElCheckboxButton.prototype.activeStyle = function () {
        if (!this.hostGroup)
            return this.domSanitizer.bypassSecurityTrustStyle('');
        var /** @type {?} */ styles = "backgroundColor: " + this.hostGroup.fill + ";" +
            ("borderColor: " + this.hostGroup.fill + ";color: " + this.hostGroup.textColor + ";") +
            ("box-shadow: -1px 0 0 0 " + this.hostGroup.fill + ";");
        return this.domSanitizer.bypassSecurityTrustStyle(this.checked && !this.elDisabled ? styles : '');
    };
    /**
     * @return {?}
     */
    ElCheckboxButton.prototype.isChecked = function () {
        if (this.parentIsGroup) {
            return this.hostGroup.model.indexOf(this.label) > -1;
        }
        return this.model;
    };
    /**
     * @param {?} t
     * @return {?}
     */
    ElCheckboxButton.prototype.changeHandle = function (t) {
        this.parentIsGroup && this.hostGroup.updateModelFromChildren(t, this.label);
        this.model = t;
        this.checked = this.isChecked();
    };
    /**
     * @return {?}
     */
    ElCheckboxButton.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ nativeElement = this.el.nativeElement;
        this.parentIsGroup = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["isParentTag"])(nativeElement, 'el-checkbox-group');
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["removeNgTag"])(nativeElement);
        // update model from group
        if (this.parentIsGroup) {
            this.labels = this.hostGroup.model;
            this.size = this.hostGroup.size;
            this.model = this.isChecked();
            // update handle
            this.hostGroup.subscriber.push(function () { return _this.model = _this.isChecked(); });
        }
        this.checked = this.isChecked();
    };
    /**
     * @return {?}
     */
    ElCheckboxButton.prototype.ngAfterViewInit = function () {
        var _this = this;
        var /** @type {?} */ contentText = this.content && this.content.nativeElement.innerText;
        setTimeout(function () {
            _this.showLabel = !contentText || contentText.length < 1;
        }, 0);
    };
    ElCheckboxButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-checkbox-button',
                    template: "\n    <label [class]=\"'el-checkbox-button' + (size ? ' el-checkbox-button--' + size : '') \"\n      role=\"checkbox\"\n      [class.is-disabled]=\"elDisabled\" [class.is-focus]=\"isFocus\"\n      [class.is-indeterminate]=\"indeterminate\" [class.is-checked]=\"checked\">\n      <input class=\"el-checkbox-button__original\" type=\"checkbox\"\n        [disabled]=\"elDisabled\" [value]=\"label\" [name]=\"name\"\n        [ngModel]=\"model\" (ngModelChange)=\"changeHandle($event)\"\n        (focus)=\"isFocus = true\" (blur)=\"isFocus = false\">\n      <span class=\"el-checkbox-button__inner\"\n        [style]=\"activeStyle()\">\n        <ng-container *ngIf=\"showLabel\">{{label}}</ng-container>\n        <span *ngIf=\"!showLabel\" #content>\n          <ng-content></ng-content>\n        </span>\n      </span>\n    </label>\n  ",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCheckboxButton.ctorParameters = function () { return [
        { type: _checkbox_group__WEBPACK_IMPORTED_MODULE_1__["ElCheckboxGroup"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], },
    ]; };
    ElCheckboxButton.propDecorators = {
        'content': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content',] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'indeterminate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'checked': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'name': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'trueLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['true-label',] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElCheckboxButton;
}());

function ElCheckboxButton_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCheckboxButton.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCheckboxButton.ctorParameters;
    /** @type {?} */
    ElCheckboxButton.propDecorators;
    /** @type {?} */
    ElCheckboxButton.prototype.content;
    /** @type {?} */
    ElCheckboxButton.prototype.elDisabled;
    /** @type {?} */
    ElCheckboxButton.prototype.label;
    /** @type {?} */
    ElCheckboxButton.prototype.model;
    /** @type {?} */
    ElCheckboxButton.prototype.indeterminate;
    /** @type {?} */
    ElCheckboxButton.prototype.checked;
    /** @type {?} */
    ElCheckboxButton.prototype.name;
    /** @type {?} */
    ElCheckboxButton.prototype.trueLabel;
    /** @type {?} */
    ElCheckboxButton.prototype.modelChange;
    /** @type {?} */
    ElCheckboxButton.prototype.labels;
    /** @type {?} */
    ElCheckboxButton.prototype.parentIsGroup;
    /** @type {?} */
    ElCheckboxButton.prototype.isFocus;
    /** @type {?} */
    ElCheckboxButton.prototype.showLabel;
    /** @type {?} */
    ElCheckboxButton.prototype.size;
    /** @type {?} */
    ElCheckboxButton.prototype.hostGroup;
    /** @type {?} */
    ElCheckboxButton.prototype.el;
    /** @type {?} */
    ElCheckboxButton.prototype.domSanitizer;
}
//# sourceMappingURL=checkbox-button.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/checkbox/checkbox-group.js":
/*!*************************************************************************!*\
  !*** ./node_modules/element-angular/release/checkbox/checkbox-group.js ***!
  \*************************************************************************/
/*! exports provided: ElCheckboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCheckboxGroup", function() { return ElCheckboxGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var ElCheckboxGroup = /** @class */ (function () {
    function ElCheckboxGroup() {
        this.model = [];
        this.fill = '#20a0ff';
        this.textColor = '#ffffff';
        this.min = 0;
        this.max = 1000;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // children update handle
        this.subscriber = [];
        this.controlChange = function () { };
        this.controlTouch = function () { };
    }
    /**
     * @param {?} nextValue
     * @return {?}
     */
    ElCheckboxGroup.prototype.changeModel = function (nextValue) {
        var _this = this;
        setTimeout(function () {
            _this.model = nextValue;
            _this.modelChange.emit(nextValue);
            _this.controlChange(nextValue);
            _this.subscriber.forEach(function (sub) { return sub(); });
        }, 0);
    };
    /**
     * @param {?} t
     * @param {?} label
     * @return {?}
     */
    ElCheckboxGroup.prototype.updateModelFromChildren = function (t, label) {
        // add label value
        if (t && this.model.indexOf(label) === -1) {
            if (this.model.length >= this.max)
                return;
            this.model.push(label);
        }
        // remove label value
        if (!t && this.model.indexOf(label) > -1) {
            if (this.model.length < this.min)
                return;
            this.model = this.model.map(function (v) { return v === label ? null : v; })
                .filter(function (v) { return v; });
        }
        // synchronize host
        this.changeModel(this.model);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElCheckboxGroup.prototype.ngOnChanges = function (changes) {
        if (!changes || !changes.model)
            return;
        if (changes.model.isFirstChange())
            return;
        this.changeModel(changes.model.currentValue);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElCheckboxGroup.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElCheckboxGroup.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElCheckboxGroup.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElCheckboxGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-checkbox-group',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElCheckboxGroup; }),
                            multi: true
                        }],
                    template: "\n    <div class=\"el-checkbox-group\" role=\"group\" aria-label=\"checkbox-group\">\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCheckboxGroup.ctorParameters = function () { return []; };
    ElCheckboxGroup.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'fill': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'textColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['text-color',] },],
        'min': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElCheckboxGroup;
}());

function ElCheckboxGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCheckboxGroup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCheckboxGroup.ctorParameters;
    /** @type {?} */
    ElCheckboxGroup.propDecorators;
    /** @type {?} */
    ElCheckboxGroup.prototype.model;
    /** @type {?} */
    ElCheckboxGroup.prototype.size;
    /** @type {?} */
    ElCheckboxGroup.prototype.fill;
    /** @type {?} */
    ElCheckboxGroup.prototype.textColor;
    /** @type {?} */
    ElCheckboxGroup.prototype.min;
    /** @type {?} */
    ElCheckboxGroup.prototype.max;
    /** @type {?} */
    ElCheckboxGroup.prototype.modelChange;
    /** @type {?} */
    ElCheckboxGroup.prototype.subscriber;
    /** @type {?} */
    ElCheckboxGroup.prototype.controlChange;
    /** @type {?} */
    ElCheckboxGroup.prototype.controlTouch;
}
//# sourceMappingURL=checkbox-group.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/checkbox/checkbox.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/checkbox/checkbox.js ***!
  \*******************************************************************/
/*! exports provided: ElCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCheckbox", function() { return ElCheckbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-group */ "./node_modules/element-angular/release/checkbox/checkbox-group.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ElCheckbox = /** @class */ (function () {
    /**
     * @param {?} hostGroup
     * @param {?} el
     */
    function ElCheckbox(hostGroup, el) {
        this.hostGroup = hostGroup;
        this.el = el;
        this.elDisabled = false;
        this.indeterminate = false;
        this.checked = false;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parentIsGroup = false;
        this.isFocus = false;
        this.showLabel = false;
        this.controlChange = function () { };
        this.controlTouch = function () { };
    }
    Object.defineProperty(ElCheckbox.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ElCheckbox.prototype.isChecked = function () {
        if (this.parentIsGroup) {
            return this.hostGroup.model.indexOf(this.label) > -1;
        }
        return this.model;
    };
    /**
     * @param {?} t
     * @param {?=} notEmit
     * @return {?}
     */
    ElCheckbox.prototype.changeHandle = function (t, notEmit) {
        if (notEmit === void 0) { notEmit = false; }
        if (this.parentIsGroup) {
            return this.hostGroup.updateModelFromChildren(t, this.label);
        }
        this.model = t;
        this.checked = this.isChecked();
        if (notEmit)
            return;
        this.modelChange.emit(this.model);
        this.controlChange(this.model);
    };
    /**
     * @return {?}
     */
    ElCheckbox.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ nativeElement = this.el.nativeElement;
        this.parentIsGroup = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["isParentTag"])(nativeElement, 'el-checkbox-group');
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["removeNgTag"])(nativeElement);
        // update model from group
        if (this.parentIsGroup) {
            this.labels = this.hostGroup.model;
            this.model = this.isChecked();
            // update handle
            this.hostGroup.subscriber.push(function () {
                _this.model = _this.isChecked();
                _this.checked = _this.isChecked();
            });
        }
        this.checked = this.isChecked();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElCheckbox.prototype.ngOnChanges = function (changes) {
        if (!changes || !changes.model)
            return;
        if (changes.model.isFirstChange())
            return;
        this.changeHandle(changes.model.currentValue, true);
    };
    /**
     * @return {?}
     */
    ElCheckbox.prototype.ngAfterViewInit = function () {
        var _this = this;
        var /** @type {?} */ contentText = this.content && this.content.nativeElement.innerText;
        setTimeout(function () {
            _this.showLabel = !contentText || contentText.length < 1;
        }, 0);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElCheckbox.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElCheckbox.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElCheckbox.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElCheckbox.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-checkbox',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElCheckbox; }),
                            multi: true
                        }],
                    template: "\n    <label class=\"el-checkbox\">\n    <span class=\"el-checkbox__input\"\n      [class.is-disabled]=\"elDisabled\" [class.is-focus]=\"isFocus\"\n      [class.is-indeterminate]=\"indeterminate\" [class.is-checked]=\"checked\">\n      <span class=\"el-checkbox__inner\"></span>\n      <input class=\"el-checkbox__original\" type=\"checkbox\"\n        [disabled]=\"elDisabled\" [value]=\"label\" [name]=\"name\"\n        [ngModel]=\"model\" (ngModelChange)=\"changeHandle($event)\"\n        (focus)=\"isFocus = true\" (blur)=\"isFocus = false\">\n    </span>\n    <span class=\"el-checkbox__label\" style=\"padding-left: 6px;\">\n      <ng-container *ngIf=\"showLabel\">{{label}}</ng-container>\n      <span *ngIf=\"!showLabel\" #content>\n        <ng-content></ng-content>\n      </span>\n    </span>\n    </label>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCheckbox.ctorParameters = function () { return [
        { type: _checkbox_group__WEBPACK_IMPORTED_MODULE_1__["ElCheckboxGroup"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElCheckbox.propDecorators = {
        'content': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content',] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'indeterminate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'checked': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'name': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'trueLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['true-label',] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElCheckbox;
}());

function ElCheckbox_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCheckbox.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCheckbox.ctorParameters;
    /** @type {?} */
    ElCheckbox.propDecorators;
    /** @type {?} */
    ElCheckbox.prototype.content;
    /** @type {?} */
    ElCheckbox.prototype.elDisabled;
    /** @type {?} */
    ElCheckbox.prototype.label;
    /** @type {?} */
    ElCheckbox.prototype.model;
    /** @type {?} */
    ElCheckbox.prototype.indeterminate;
    /** @type {?} */
    ElCheckbox.prototype.checked;
    /** @type {?} */
    ElCheckbox.prototype.name;
    /** @type {?} */
    ElCheckbox.prototype.trueLabel;
    /** @type {?} */
    ElCheckbox.prototype.modelChange;
    /** @type {?} */
    ElCheckbox.prototype.labels;
    /** @type {?} */
    ElCheckbox.prototype.parentIsGroup;
    /** @type {?} */
    ElCheckbox.prototype.isFocus;
    /** @type {?} */
    ElCheckbox.prototype.showLabel;
    /** @type {?} */
    ElCheckbox.prototype.controlChange;
    /** @type {?} */
    ElCheckbox.prototype.controlTouch;
    /** @type {?} */
    ElCheckbox.prototype.hostGroup;
    /** @type {?} */
    ElCheckbox.prototype.el;
}
//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/checkbox/module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/checkbox/module.js ***!
  \*****************************************************************/
/*! exports provided: ElCheckboxsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCheckboxsModule", function() { return ElCheckboxsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox */ "./node_modules/element-angular/release/checkbox/checkbox.js");
/* harmony import */ var _checkbox_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox-button */ "./node_modules/element-angular/release/checkbox/checkbox-button.js");
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-group */ "./node_modules/element-angular/release/checkbox/checkbox-group.js");






var ElCheckboxsModule = /** @class */ (function () {
    function ElCheckboxsModule() {
    }
    /**
     * @return {?}
     */
    ElCheckboxsModule.forRoot = function () {
        return { ngModule: ElCheckboxsModule, providers: [] };
    };
    ElCheckboxsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_checkbox__WEBPACK_IMPORTED_MODULE_3__["ElCheckbox"], _checkbox_button__WEBPACK_IMPORTED_MODULE_4__["ElCheckboxButton"], _checkbox_group__WEBPACK_IMPORTED_MODULE_5__["ElCheckboxGroup"]],
                    exports: [_checkbox__WEBPACK_IMPORTED_MODULE_3__["ElCheckbox"], _checkbox_button__WEBPACK_IMPORTED_MODULE_4__["ElCheckboxButton"], _checkbox_group__WEBPACK_IMPORTED_MODULE_5__["ElCheckboxGroup"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    entryComponents: [_checkbox__WEBPACK_IMPORTED_MODULE_3__["ElCheckbox"], _checkbox_button__WEBPACK_IMPORTED_MODULE_4__["ElCheckboxButton"], _checkbox_group__WEBPACK_IMPORTED_MODULE_5__["ElCheckboxGroup"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCheckboxsModule.ctorParameters = function () { return []; };
    return ElCheckboxsModule;
}());

function ElCheckboxsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCheckboxsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCheckboxsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/col/col.directive.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/col/col.directive.js ***!
  \*******************************************************************/
/*! exports provided: ElColDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElColDirective", function() { return ElColDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");



var ElColDirective = /** @class */ (function () {
    /**
     * @param {?} sanitizer
     * @param {?} el
     */
    function ElColDirective(sanitizer, el) {
        this.sanitizer = sanitizer;
        this.el = el;
        this.span = 24;
        this.offset = 0;
        this.push = 0;
        this.pull = 0;
        this.parentIsRow = null;
        this.gutterFromParent = 0;
        this.nativeClass = ' ';
        this.nativeClass += this.el.nativeElement.classList.value;
    }
    /**
     * @return {?}
     */
    ElColDirective.prototype.classList = function () {
        var _this = this;
        var /** @type {?} */ makeClass = function (key) { return key !== 'span'
            ? " el-col-" + key + "-" + _this[key]
            : " el-col-" + _this[key]; };
        var /** @type {?} */ classStr = ['span', 'offset', 'pull', 'push'].reduce(function (pre, next) { return !_this[next]
            ? pre
            : pre + makeClass(next); }, 'el-col');
        return classStr + this.nativeClass;
    };
    /**
     * @return {?}
     */
    ElColDirective.prototype.sizeClassList = function () {
        var _this = this;
        var /** @type {?} */ makeClass = function (key) {
            var /** @type {?} */ props = _this[key] || {};
            return Object.keys(props).map(function (prop) { return prop !== 'span'
                ? "el-col-" + key + "-" + prop + "-" + props[prop]
                : "el-col-" + key + "-" + props[prop]; }).join(' ');
        };
        var /** @type {?} */ classStr = ['xs', 'sm', 'md', 'lg', 'xl'].reduce(function (pre, next) { return !_this[next] ?
            pre : typeof _this[next] === 'object'
            ? pre + " " + makeClass(next)
            : pre + " el-col-" + next + "-" + _this[next]; }, '');
        return classStr;
    };
    /**
     * @return {?}
     */
    ElColDirective.prototype.gutterStyle = function () {
        var /** @type {?} */ styleStr = '';
        if (this.gutterFromParent) {
            styleStr += "padding-left: " + this.gutterFromParent / 2 + "px;";
            styleStr += "padding-right: " + this.gutterFromParent / 2 + "px;";
        }
        return this.sanitizer.bypassSecurityTrustStyle(styleStr);
    };
    /**
     * @return {?}
     */
    ElColDirective.prototype.ngOnInit = function () {
        var /** @type {?} */ nativeElement = this.el.nativeElement;
        this.parentIsRow = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["isParentAttr"])(nativeElement, 'el-row');
        if (this.parentIsRow) {
            this.gutterFromParent = this.parentIsRow.getAttribute('gutter') || 0;
        }
    };
    ElColDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-col]',
                    host: {
                        '[style]': 'gutterStyle()',
                        '[class]': 'classList() + sizeClassList()',
                    },
                },] },
    ];
    /**
     * @nocollapse
     */
    ElColDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElColDirective.propDecorators = {
        'span': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'offset': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'push': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pull': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'xs': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'sm': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'md': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'lg': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'xl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElColDirective;
}());

function ElColDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElColDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElColDirective.ctorParameters;
    /** @type {?} */
    ElColDirective.propDecorators;
    /** @type {?} */
    ElColDirective.prototype.span;
    /** @type {?} */
    ElColDirective.prototype.offset;
    /** @type {?} */
    ElColDirective.prototype.push;
    /** @type {?} */
    ElColDirective.prototype.pull;
    /** @type {?} */
    ElColDirective.prototype.xs;
    /** @type {?} */
    ElColDirective.prototype.sm;
    /** @type {?} */
    ElColDirective.prototype.md;
    /** @type {?} */
    ElColDirective.prototype.lg;
    /** @type {?} */
    ElColDirective.prototype.xl;
    /** @type {?} */
    ElColDirective.prototype.parentIsRow;
    /** @type {?} */
    ElColDirective.prototype.gutterFromParent;
    /** @type {?} */
    ElColDirective.prototype.nativeClass;
    /** @type {?} */
    ElColDirective.prototype.sanitizer;
    /** @type {?} */
    ElColDirective.prototype.el;
}
//# sourceMappingURL=col.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/col/module.js":
/*!************************************************************!*\
  !*** ./node_modules/element-angular/release/col/module.js ***!
  \************************************************************/
/*! exports provided: ElColModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElColModule", function() { return ElColModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _col_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./col.directive */ "./node_modules/element-angular/release/col/col.directive.js");



var ElColModule = /** @class */ (function () {
    function ElColModule() {
    }
    /**
     * @return {?}
     */
    ElColModule.forRoot = function () {
        return { ngModule: ElColModule, providers: [] };
    };
    ElColModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_col_directive__WEBPACK_IMPORTED_MODULE_2__["ElColDirective"]],
                    exports: [_col_directive__WEBPACK_IMPORTED_MODULE_2__["ElColDirective"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElColModule.ctorParameters = function () { return []; };
    return ElColModule;
}());

function ElColModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElColModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElColModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/collapse/collapse-item.js":
/*!************************************************************************!*\
  !*** ./node_modules/element-angular/release/collapse/collapse-item.js ***!
  \************************************************************************/
/*! exports provided: ElCollapseItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCollapseItem", function() { return ElCollapseItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse */ "./node_modules/element-angular/release/collapse/collapse.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");



var ElCollapseItem = /** @class */ (function () {
    /**
     * @param {?} root
     */
    function ElCollapseItem(root) {
        this.root = root;
        this.value = null;
        this.isActive = false;
    }
    /**
     * @return {?}
     */
    ElCollapseItem.prototype.updateActiveStatus = function () {
        var _this = this;
        this.isActive = this.root.modelValue.some(function (val) { return val === _this.value; });
    };
    /**
     * @return {?}
     */
    ElCollapseItem.prototype.clickHandle = function () {
        if (this.value === null) {
            this.value = Math.random().toString(16).substr(2, 8);
        }
        this.root.updateModel(this.value);
    };
    /**
     * @return {?}
     */
    ElCollapseItem.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ updateHandle = function () { return _this.updateActiveStatus(); };
        this.root.subscriber.push(updateHandle);
    };
    ElCollapseItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-collapse-item',
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_2__["dropAnimation"]],
                    styles: [".el-collapse-item-fix-border:last-child { margin-bottom: 0; }"],
                    template: "\n    <div class=\"el-collapse-item el-collapse-item-fix-border\" [class.is-active]=\"isActive\">\n      <div role=\"tab\" [attr.aria-expanded]=\"isActive\">\n        <div class=\"el-collapse-item__header\" (click)=\"clickHandle()\" role=\"button\">\n          <i class=\"el-collapse-item__arrow el-icon-arrow-right\"></i>\n          <ng-container *ngIf=\"labelTmp\">\n            <ng-template [ngTemplateOutlet]=\"labelTmp\">\n            </ng-template>\n          </ng-container>\n          <ng-container *ngIf=\"!labelTmp\">{{label}}</ng-container>\n        </div>\n      </div>\n      \n      <div class=\"el-collapse-item__wrap\" [ngStyle]=\"{'border-width': isActive ? '1px' : '0'}\">\n        <div class=\"el-collapse-item__content\" [@dropAnimation]=\"isActive\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCollapseItem.ctorParameters = function () { return [
        { type: _collapse__WEBPACK_IMPORTED_MODULE_1__["ElCollapse"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    ElCollapseItem.propDecorators = {
        'labelTmp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['label',] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElCollapseItem;
}());

function ElCollapseItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCollapseItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCollapseItem.ctorParameters;
    /** @type {?} */
    ElCollapseItem.propDecorators;
    /** @type {?} */
    ElCollapseItem.prototype.labelTmp;
    /** @type {?} */
    ElCollapseItem.prototype.label;
    /** @type {?} */
    ElCollapseItem.prototype.value;
    /** @type {?} */
    ElCollapseItem.prototype.isActive;
    /** @type {?} */
    ElCollapseItem.prototype.root;
}
//# sourceMappingURL=collapse-item.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/collapse/collapse.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/collapse/collapse.js ***!
  \*******************************************************************/
/*! exports provided: ElCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCollapse", function() { return ElCollapse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElCollapse = /** @class */ (function () {
    function ElCollapse() {
        this.modelValue = [];
        this.subscriber = [];
        this.accordion = false;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ElCollapse.prototype, "model", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            this.modelValue = val;
            this.updateSubscriber();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ElCollapse.prototype.updateModel = function (value) {
        var /** @type {?} */ index = this.modelValue.findIndex(function (val) { return val === value; });
        if (index < 0) {
            this.accordion && (this.model = []);
            this.modelValue.push(value);
            this.updateSubscriber();
            return this.modelChange.emit(this.modelValue);
        }
        if (this.accordion) {
            this.model = [];
        }
        else {
            this.modelValue.splice(index, 1);
        }
        this.updateSubscriber();
        this.modelChange.emit(this.modelValue);
    };
    /**
     * @return {?}
     */
    ElCollapse.prototype.ngAfterViewInit = function () {
        var _this = this;
        var /** @type {?} */ timer = window.setTimeout(function () {
            _this.updateSubscriber();
            window.clearTimeout(timer);
        }, 0);
    };
    /**
     * @return {?}
     */
    ElCollapse.prototype.updateSubscriber = function () {
        this.subscriber.forEach(function (handle) { return handle(); });
    };
    ElCollapse.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-collapse',
                    styles: [".el-collapse-fix-border { border-bottom: 0; }"],
                    template: "\n    <div class=\"el-collapse el-collapse-fix-border\" role=\"tablist\" aria-multiselectable=\"true\">\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCollapse.ctorParameters = function () { return []; };
    ElCollapse.propDecorators = {
        'accordion': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElCollapse;
}());

function ElCollapse_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCollapse.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCollapse.ctorParameters;
    /** @type {?} */
    ElCollapse.propDecorators;
    /** @type {?} */
    ElCollapse.prototype.modelValue;
    /** @type {?} */
    ElCollapse.prototype.subscriber;
    /** @type {?} */
    ElCollapse.prototype.accordion;
    /** @type {?} */
    ElCollapse.prototype.modelChange;
}
//# sourceMappingURL=collapse.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/collapse/module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/collapse/module.js ***!
  \*****************************************************************/
/*! exports provided: ElCollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCollapseModule", function() { return ElCollapseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse */ "./node_modules/element-angular/release/collapse/collapse.js");
/* harmony import */ var _collapse_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse-item */ "./node_modules/element-angular/release/collapse/collapse-item.js");




var ElCollapseModule = /** @class */ (function () {
    function ElCollapseModule() {
    }
    /**
     * @return {?}
     */
    ElCollapseModule.forRoot = function () {
        return { ngModule: ElCollapseModule, providers: [] };
    };
    ElCollapseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_collapse__WEBPACK_IMPORTED_MODULE_2__["ElCollapse"], _collapse_item__WEBPACK_IMPORTED_MODULE_3__["ElCollapseItem"]],
                    exports: [_collapse__WEBPACK_IMPORTED_MODULE_2__["ElCollapse"], _collapse_item__WEBPACK_IMPORTED_MODULE_3__["ElCollapseItem"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_collapse__WEBPACK_IMPORTED_MODULE_2__["ElCollapse"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElCollapseModule.ctorParameters = function () { return []; };
    return ElCollapseModule;
}());

function ElCollapseModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCollapseModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCollapseModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/children/aside.js":
/*!**************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/children/aside.js ***!
  \**************************************************************************/
/*! exports provided: ElAside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElAside", function() { return ElAside; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");


var ElAside = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function ElAside(el) {
        this.el = el;
        this.width = '300px';
    }
    /**
     * @return {?}
     */
    ElAside.prototype.ngOnInit = function () {
        console.log('Element Angular: Container Component is discarded, use [Container directive] replace it.');
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_1__["removeNgTag"])(this.el.nativeElement);
    };
    ElAside.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-aside',
                    template: "\n    <aside [class]=\"'el-aside ' + class\" [ngStyle]=\"{width: width}\">\n      <ng-content></ng-content>\n    </aside>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElAside.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElAside.propDecorators = {
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'class': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElAside;
}());

function ElAside_tsickle_Closure_declarations() {
    /** @type {?} */
    ElAside.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElAside.ctorParameters;
    /** @type {?} */
    ElAside.propDecorators;
    /** @type {?} */
    ElAside.prototype.width;
    /** @type {?} */
    ElAside.prototype.class;
    /** @type {?} */
    ElAside.prototype.el;
}
//# sourceMappingURL=aside.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/children/footer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/children/footer.js ***!
  \***************************************************************************/
/*! exports provided: ElFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElFooter", function() { return ElFooter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container */ "./node_modules/element-angular/release/container/container.js");
/* harmony import */ var _shared_utils_host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/host */ "./node_modules/element-angular/release/shared/utils/host.js");



var ElFooter = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} el
     */
    function ElFooter(root, el) {
        this.root = root;
        this.el = el;
        this.height = '60px';
    }
    /**
     * @return {?}
     */
    ElFooter.prototype.ngOnInit = function () {
        console.log('Element Angular: Container Component is discarded, use [Container directive] replace it.');
        this.root.setVertical(true);
        Object(_shared_utils_host__WEBPACK_IMPORTED_MODULE_2__["removeNgTag"])(this.el.nativeElement);
    };
    ElFooter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-footer',
                    template: "\n    <footer [class]=\"'el-footer ' + class\" [ngStyle]=\"{height: height}\">\n      <ng-content></ng-content>\n    </footer>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElFooter.ctorParameters = function () { return [
        { type: _container__WEBPACK_IMPORTED_MODULE_1__["ElContainer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElFooter.propDecorators = {
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'class': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElFooter;
}());

function ElFooter_tsickle_Closure_declarations() {
    /** @type {?} */
    ElFooter.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElFooter.ctorParameters;
    /** @type {?} */
    ElFooter.propDecorators;
    /** @type {?} */
    ElFooter.prototype.height;
    /** @type {?} */
    ElFooter.prototype.class;
    /** @type {?} */
    ElFooter.prototype.root;
    /** @type {?} */
    ElFooter.prototype.el;
}
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/children/header.js":
/*!***************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/children/header.js ***!
  \***************************************************************************/
/*! exports provided: ElHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElHeader", function() { return ElHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container */ "./node_modules/element-angular/release/container/container.js");
/* harmony import */ var _shared_utils_host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/host */ "./node_modules/element-angular/release/shared/utils/host.js");



var ElHeader = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} el
     */
    function ElHeader(root, el) {
        this.root = root;
        this.el = el;
        this.height = '60px';
    }
    /**
     * @return {?}
     */
    ElHeader.prototype.ngOnInit = function () {
        console.log('Element Angular: Container Component is discarded, use [Container directive] replace it.');
        this.root.setVertical(true);
        Object(_shared_utils_host__WEBPACK_IMPORTED_MODULE_2__["removeNgTag"])(this.el.nativeElement);
    };
    ElHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-header',
                    template: "\n    <header [class]=\"'el-header ' + class\" [ngStyle]=\"{height: height}\">\n      <ng-content></ng-content>\n    </header>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElHeader.ctorParameters = function () { return [
        { type: _container__WEBPACK_IMPORTED_MODULE_1__["ElContainer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElHeader.propDecorators = {
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'class': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElHeader;
}());

function ElHeader_tsickle_Closure_declarations() {
    /** @type {?} */
    ElHeader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElHeader.ctorParameters;
    /** @type {?} */
    ElHeader.propDecorators;
    /** @type {?} */
    ElHeader.prototype.height;
    /** @type {?} */
    ElHeader.prototype.class;
    /** @type {?} */
    ElHeader.prototype.root;
    /** @type {?} */
    ElHeader.prototype.el;
}
//# sourceMappingURL=header.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/children/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/children/index.js ***!
  \**************************************************************************/
/*! exports provided: ElMain, ElAside, ElHeader, ElFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./node_modules/element-angular/release/container/children/header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElHeader", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["ElHeader"]; });

/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./node_modules/element-angular/release/container/children/aside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElAside", function() { return _aside__WEBPACK_IMPORTED_MODULE_1__["ElAside"]; });

/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./node_modules/element-angular/release/container/children/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElMain", function() { return _main__WEBPACK_IMPORTED_MODULE_2__["ElMain"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./node_modules/element-angular/release/container/children/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElFooter", function() { return _footer__WEBPACK_IMPORTED_MODULE_3__["ElFooter"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/children/main.js":
/*!*************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/children/main.js ***!
  \*************************************************************************/
/*! exports provided: ElMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMain", function() { return ElMain; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/host */ "./node_modules/element-angular/release/shared/utils/host.js");


var ElMain = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function ElMain(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ElMain.prototype.ngOnInit = function () {
        console.log('Element Angular: Container Component is discarded, use [Container directive] replace it.');
        Object(_shared_utils_host__WEBPACK_IMPORTED_MODULE_1__["removeNgTag"])(this.el.nativeElement);
    };
    ElMain.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-main',
                    template: "\n    <main [class]=\"'el-main ' + class\">\n      <ng-content></ng-content>\n    </main>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElMain.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElMain.propDecorators = {
        'class': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElMain;
}());

function ElMain_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMain.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMain.ctorParameters;
    /** @type {?} */
    ElMain.propDecorators;
    /** @type {?} */
    ElMain.prototype.class;
    /** @type {?} */
    ElMain.prototype.el;
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/container.directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/container.directive.js ***!
  \*******************************************************************************/
/*! exports provided: ElContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElContainerDirective", function() { return ElContainerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var ElContainerDirective = /** @class */ (function () {
    /**
     * @param {?} ngClass
     */
    function ElContainerDirective(ngClass) {
        this.ngClass = ngClass;
        this.direction = '';
    }
    /**
     * @return {?}
     */
    ElContainerDirective.prototype.ngOnChanges = function () {
        this.colletClasses();
    };
    /**
     * @return {?}
     */
    ElContainerDirective.prototype.ngOnInit = function () {
        this.colletClasses();
    };
    /**
     * @return {?}
     */
    ElContainerDirective.prototype.colletClasses = function () {
        this.hostClasses = {
            'el-container': true,
            'is-vertical': this.direction === 'vertical',
        };
        this.ngClass.ngClass = this.hostClasses;
        this.ngClass.ngDoCheck();
    };
    ElContainerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-container]',
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElContainerDirective.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] },] },
    ]; };
    ElContainerDirective.propDecorators = {
        'direction': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElContainerDirective;
}());

function ElContainerDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElContainerDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElContainerDirective.ctorParameters;
    /** @type {?} */
    ElContainerDirective.propDecorators;
    /** @type {?} */
    ElContainerDirective.prototype.direction;
    /** @type {?} */
    ElContainerDirective.prototype.hostClasses;
    /** @type {?} */
    ElContainerDirective.prototype.ngClass;
}
//# sourceMappingURL=container.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/container.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/container/container.js ***!
  \*********************************************************************/
/*! exports provided: ElContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElContainer", function() { return ElContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/host */ "./node_modules/element-angular/release/shared/utils/host.js");


var ElContainer = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function ElContainer(el) {
        this.el = el;
        this.direction = '';
        this.isVertical = false;
    }
    /**
     * @param {?=} isVertical
     * @return {?}
     */
    ElContainer.prototype.setVertical = function (isVertical) {
        if (isVertical && this.direction !== 'horizontal') {
            this.isVertical = true;
        }
    };
    /**
     * @return {?}
     */
    ElContainer.prototype.ngOnInit = function () {
        console.log('Element Angular: Container Component is discarded, use [Container directive] replace it.');
        this.isVertical = this.direction === 'vertical';
        Object(_shared_utils_host__WEBPACK_IMPORTED_MODULE_1__["removeNgTag"])(this.el.nativeElement);
    };
    ElContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-container',
                    template: "\n    <section [class]=\"'el-container ' + class\" [class.is-vertical]=\"isVertical\">\n      <ng-content></ng-content>\n    </section>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElContainer.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElContainer.propDecorators = {
        'direction': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'class': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElContainer;
}());

function ElContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ElContainer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElContainer.ctorParameters;
    /** @type {?} */
    ElContainer.propDecorators;
    /** @type {?} */
    ElContainer.prototype.direction;
    /** @type {?} */
    ElContainer.prototype.class;
    /** @type {?} */
    ElContainer.prototype.isVertical;
    /** @type {?} */
    ElContainer.prototype.el;
}
//# sourceMappingURL=container.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/directives/aside.directive.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/directives/aside.directive.js ***!
  \**************************************************************************************/
/*! exports provided: ElAsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElAsideDirective", function() { return ElAsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var ElAsideDirective = /** @class */ (function () {
    /**
     * @param {?} ngStyle
     */
    function ElAsideDirective(ngStyle) {
        this.ngStyle = ngStyle;
        this.width = '300px';
    }
    /**
     * @return {?}
     */
    ElAsideDirective.prototype.ngOnChanges = function () {
        this.colletClasses();
    };
    /**
     * @return {?}
     */
    ElAsideDirective.prototype.ngOnInit = function () {
        this.colletClasses();
    };
    /**
     * @return {?}
     */
    ElAsideDirective.prototype.colletClasses = function () {
        this.hostStyles = {
            width: this.width,
        };
        this.ngStyle.ngStyle = this.hostStyles;
        this.ngStyle.ngDoCheck();
    };
    ElAsideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-aside]',
                    host: { class: 'el-aside' },
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElAsideDirective.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] },] },
    ]; };
    ElAsideDirective.propDecorators = {
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElAsideDirective;
}());

function ElAsideDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElAsideDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElAsideDirective.ctorParameters;
    /** @type {?} */
    ElAsideDirective.propDecorators;
    /** @type {?} */
    ElAsideDirective.prototype.width;
    /** @type {?} */
    ElAsideDirective.prototype.hostStyles;
    /** @type {?} */
    ElAsideDirective.prototype.ngStyle;
}
//# sourceMappingURL=aside.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/directives/footer.directive.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/directives/footer.directive.js ***!
  \***************************************************************************************/
/*! exports provided: ElFooterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElFooterDirective", function() { return ElFooterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var ElFooterDirective = /** @class */ (function () {
    /**
     * @param {?} ngStyle
     */
    function ElFooterDirective(ngStyle) {
        this.ngStyle = ngStyle;
        this.height = '60px';
    }
    /**
     * @return {?}
     */
    ElFooterDirective.prototype.ngOnChanges = function () {
        this.colletClasses();
    };
    /**
     * @return {?}
     */
    ElFooterDirective.prototype.ngOnInit = function () {
        this.colletClasses();
    };
    /**
     * @return {?}
     */
    ElFooterDirective.prototype.colletClasses = function () {
        this.hostStyles = {
            height: this.height,
        };
        this.ngStyle.ngStyle = this.hostStyles;
        this.ngStyle.ngDoCheck();
    };
    ElFooterDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-footer]',
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
                    host: { class: 'el-footer' },
                },] },
    ];
    /**
     * @nocollapse
     */
    ElFooterDirective.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] },] },
    ]; };
    ElFooterDirective.propDecorators = {
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElFooterDirective;
}());

function ElFooterDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElFooterDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElFooterDirective.ctorParameters;
    /** @type {?} */
    ElFooterDirective.propDecorators;
    /** @type {?} */
    ElFooterDirective.prototype.height;
    /** @type {?} */
    ElFooterDirective.prototype.hostStyles;
    /** @type {?} */
    ElFooterDirective.prototype.ngStyle;
}
//# sourceMappingURL=footer.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/directives/header.directive.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/directives/header.directive.js ***!
  \***************************************************************************************/
/*! exports provided: ElHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElHeaderDirective", function() { return ElHeaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var ElHeaderDirective = /** @class */ (function () {
    /**
     * @param {?} ngStyle
     */
    function ElHeaderDirective(ngStyle) {
        this.ngStyle = ngStyle;
        this.height = '60px';
    }
    /**
     * @return {?}
     */
    ElHeaderDirective.prototype.ngOnChanges = function () {
        this.colletClasses();
    };
    /**
     * @return {?}
     */
    ElHeaderDirective.prototype.ngOnInit = function () {
        this.colletClasses();
    };
    /**
     * @return {?}
     */
    ElHeaderDirective.prototype.colletClasses = function () {
        this.hostStyles = {
            height: this.height,
        };
        this.ngStyle.ngStyle = this.hostStyles;
        this.ngStyle.ngDoCheck();
    };
    ElHeaderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-header]',
                    host: { class: 'el-header' },
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElHeaderDirective.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] },] },
    ]; };
    ElHeaderDirective.propDecorators = {
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElHeaderDirective;
}());

function ElHeaderDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElHeaderDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElHeaderDirective.ctorParameters;
    /** @type {?} */
    ElHeaderDirective.propDecorators;
    /** @type {?} */
    ElHeaderDirective.prototype.height;
    /** @type {?} */
    ElHeaderDirective.prototype.hostStyles;
    /** @type {?} */
    ElHeaderDirective.prototype.ngStyle;
}
//# sourceMappingURL=header.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/directives/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/directives/index.js ***!
  \****************************************************************************/
/*! exports provided: ElHeaderDirective, ElMainDirective, ElFooterDirective, ElAsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.directive */ "./node_modules/element-angular/release/container/directives/header.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElHeaderDirective", function() { return _header_directive__WEBPACK_IMPORTED_MODULE_0__["ElHeaderDirective"]; });

/* harmony import */ var _main_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.directive */ "./node_modules/element-angular/release/container/directives/main.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElMainDirective", function() { return _main_directive__WEBPACK_IMPORTED_MODULE_1__["ElMainDirective"]; });

/* harmony import */ var _footer_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.directive */ "./node_modules/element-angular/release/container/directives/footer.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElFooterDirective", function() { return _footer_directive__WEBPACK_IMPORTED_MODULE_2__["ElFooterDirective"]; });

/* harmony import */ var _aside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside.directive */ "./node_modules/element-angular/release/container/directives/aside.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElAsideDirective", function() { return _aside_directive__WEBPACK_IMPORTED_MODULE_3__["ElAsideDirective"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/directives/main.directive.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/element-angular/release/container/directives/main.directive.js ***!
  \*************************************************************************************/
/*! exports provided: ElMainDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMainDirective", function() { return ElMainDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var ElMainDirective = /** @class */ (function () {
    function ElMainDirective() {
    }
    ElMainDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-main]',
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
                    host: { class: 'el-main' },
                },] },
    ];
    /**
     * @nocollapse
     */
    ElMainDirective.ctorParameters = function () { return []; };
    return ElMainDirective;
}());

function ElMainDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMainDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMainDirective.ctorParameters;
}
//# sourceMappingURL=main.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/container/module.js":
/*!******************************************************************!*\
  !*** ./node_modules/element-angular/release/container/module.js ***!
  \******************************************************************/
/*! exports provided: ElContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElContainerModule", function() { return ElContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "./node_modules/element-angular/release/container/container.js");
/* harmony import */ var _container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container.directive */ "./node_modules/element-angular/release/container/container.directive.js");
/* harmony import */ var _children_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./children/index */ "./node_modules/element-angular/release/container/children/index.js");
/* harmony import */ var _directives_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/index */ "./node_modules/element-angular/release/container/directives/index.js");






var ElContainerModule = /** @class */ (function () {
    function ElContainerModule() {
    }
    /**
     * @return {?}
     */
    ElContainerModule.forRoot = function () {
        return { ngModule: ElContainerModule, providers: [] };
    };
    ElContainerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _container__WEBPACK_IMPORTED_MODULE_2__["ElContainer"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElHeader"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElAside"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElMain"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElFooter"],
                        _container_directive__WEBPACK_IMPORTED_MODULE_3__["ElContainerDirective"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_5__["ElHeaderDirective"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_5__["ElMainDirective"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_5__["ElFooterDirective"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_5__["ElAsideDirective"],
                    ],
                    exports: [
                        _container__WEBPACK_IMPORTED_MODULE_2__["ElContainer"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElHeader"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElAside"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElMain"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElFooter"],
                        _container_directive__WEBPACK_IMPORTED_MODULE_3__["ElContainerDirective"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_5__["ElHeaderDirective"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_5__["ElMainDirective"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_5__["ElFooterDirective"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_5__["ElAsideDirective"],
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_container__WEBPACK_IMPORTED_MODULE_2__["ElContainer"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElContainerModule.ctorParameters = function () { return []; };
    return ElContainerModule;
}());

function ElContainerModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElContainerModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElContainerModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/date-picker/children/date-table.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/element-angular/release/date-picker/children/date-table.js ***!
  \*********************************************************************************/
/*! exports provided: ElDateTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDateTable", function() { return ElDateTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format */ "./node_modules/element-angular/release/date-picker/utils/format.js");


var ElDateTable = /** @class */ (function () {
    function ElDateTable() {
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.weeks = ['日', '一', '二', '三', '四', '五', '六'];
        this.tableRows = [[], [], [], [], [], []];
        this.targetMonthOffset = 0; // default: current month, offset = 0
    }
    /**
     * @param {?} first
     * @param {?} lastCount
     * @return {?}
     */
    ElDateTable.BuildMonthStartRow = function (first, lastCount) {
        var /** @type {?} */ lastday = 7 - first;
        // first loop
        lastCount++;
        lastday++;
        return [0, 1, 2, 3, 4, 5, 6].map(function () {
            lastday--;
            if (lastday > 0)
                return { day: lastday, monthOffset: 0 };
            lastCount--;
            return { day: lastCount, monthOffset: -1 };
        }).reverse();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ElDateTable.prototype.isToday = function (item) {
        if (this.currentMonthOffset === null)
            return false;
        return item.monthOffset === this.currentMonthOffset && this.today === item.day;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ElDateTable.prototype.isTargetDay = function (item) {
        return item.monthOffset === this.targetMonthOffset && item.day === this.targetDay;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ElDateTable.prototype.clickHandle = function (item) {
        var /** @type {?} */ date = this.date;
        var /** @type {?} */ currentMonth = date.getMonth() + 1;
        var /** @type {?} */ targetMonth = currentMonth + item.monthOffset;
        // update target and update view
        this.targetDay = item.day;
        this.targetMonthOffset = item.monthOffset;
        // get time and emit a number
        date.setMonth(targetMonth - 1);
        date.setDate(item.day);
        this.modelChange.emit(date.getTime());
    };
    /**
     * @return {?}
     */
    ElDateTable.prototype.getRows = function () {
        var /** @type {?} */ date = this.date;
        this.targetDay = date.getDate();
        this.today = new Date().getDate();
        this.currentMonthOffset = _utils_format__WEBPACK_IMPORTED_MODULE_1__["DateFormat"].getCurrentMonthOffset(date);
        var /** @type {?} */ lastMonth = date.getMonth() - 1;
        var /** @type {?} */ lastYear = lastMonth < 0 ? date.getFullYear() - 1 : date.getFullYear();
        var /** @type {?} */ currentMonthdayCount = _utils_format__WEBPACK_IMPORTED_MODULE_1__["DateFormat"].getDayCountOfMonth(date.getFullYear(), date.getMonth());
        var /** @type {?} */ lastMonthDayCount = _utils_format__WEBPACK_IMPORTED_MODULE_1__["DateFormat"].getDayCountOfMonth(lastYear, lastMonth < 0 ? 12 : lastMonth);
        var /** @type {?} */ firstDay = _utils_format__WEBPACK_IMPORTED_MODULE_1__["DateFormat"].getFirstDayOfMonth(date);
        var /** @type {?} */ nextMonthDay = 0;
        this.tableRows = this.tableRows.map(function (row, index) {
            if (index === 0) {
                return ElDateTable.BuildMonthStartRow(firstDay, lastMonthDayCount);
            }
            var /** @type {?} */ thisWeekFirstDay = 7 - firstDay + 7 * (index - 1);
            return new Array(7).fill(0).map(function (v, i) {
                var /** @type {?} */ start = thisWeekFirstDay + i + 1;
                if (start <= currentMonthdayCount)
                    return { day: start, monthOffset: 0 };
                nextMonthDay++;
                return { day: nextMonthDay, monthOffset: 1 };
            });
        });
    };
    /**
     * @return {?}
     */
    ElDateTable.prototype.ngOnInit = function () {
        this.date = new Date(this.model);
        this.getRows();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElDateTable.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        // first change
        if (changes.model.isFirstChange())
            return;
        this.model = changes.model.currentValue;
        this.date = new Date(this.model);
        this.getRows();
    };
    ElDateTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-date-table',
                    providers: [_utils_format__WEBPACK_IMPORTED_MODULE_1__["DateFormat"]],
                    template: "\n    <table class=\"el-date-table\" cellspacing=\"0\" cellpadding=\"0\">\n      <tbody>\n      <tr>\n        <th *ngFor=\"let week of weeks\">{{week}}</th>\n      </tr>\n      <tr class=\"el-date-table__row\"\n          *ngFor=\"let row of tableRows\">\n        <td *ngFor=\"let item of row\"\n          [class.available]=\"item.monthOffset === 0\"\n          [class.next-month]=\"item.monthOffset === 1\"\n          [class.prev-month]=\"item.monthOffset === -1\"\n          [class.normal]=\"item.monthOffset === 0\"\n          [class.today]=\"isToday(item)\"\n          [class.current]=\"isTargetDay(item)\"\n          (click)=\"clickHandle(item)\">\n          <div>\n            <span>{{item.day}}</span>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDateTable.ctorParameters = function () { return []; };
    ElDateTable.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabledDate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled-date',] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElDateTable;
}());

function ElDateTable_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDateTable.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDateTable.ctorParameters;
    /** @type {?} */
    ElDateTable.propDecorators;
    /** @type {?} */
    ElDateTable.prototype.model;
    /** @type {?} */
    ElDateTable.prototype.disabledDate;
    /** @type {?} */
    ElDateTable.prototype.modelChange;
    /** @type {?} */
    ElDateTable.prototype.weeks;
    /** @type {?} */
    ElDateTable.prototype.tableRows;
    /** @type {?} */
    ElDateTable.prototype.targetDay;
    /** @type {?} */
    ElDateTable.prototype.targetMonthOffset;
    /** @type {?} */
    ElDateTable.prototype.date;
    /** @type {?} */
    ElDateTable.prototype.today;
    /** @type {?} */
    ElDateTable.prototype.currentMonthOffset;
}
//# sourceMappingURL=date-table.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/date-picker/children/month-table.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/element-angular/release/date-picker/children/month-table.js ***!
  \**********************************************************************************/
/*! exports provided: EMonthTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMonthTable", function() { return EMonthTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var EMonthTable = /** @class */ (function () {
    function EMonthTable() {
        this.showWeekNumber = false;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.monthRows = [
            ['一月', '二月', '三月', '四月'],
            ['五月', '六月', '七月', '八月'],
            ['九月', '十月', '十一月', '十二月'],
        ];
    }
    /**
     * @param {?} i
     * @param {?} k
     * @return {?}
     */
    EMonthTable.prototype.clickHandle = function (i, k) {
        var /** @type {?} */ monthID = 4 * i + k;
        this.currentMonth = monthID;
        this.date.setMonth(monthID);
        this.modelChange.emit(this.date.getTime());
    };
    /**
     * @param {?} i
     * @param {?} k
     * @return {?}
     */
    EMonthTable.prototype.isCurrentMonth = function (i, k) {
        return this.currentMonth === 4 * i + k;
    };
    /**
     * @return {?}
     */
    EMonthTable.prototype.ngOnInit = function () {
        this.date = new Date(this.model);
        this.currentMonth = this.date.getMonth();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    EMonthTable.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        // first change
        if (changes.model.isFirstChange())
            return;
        this.model = changes.model.currentValue;
        this.date = new Date(this.model);
        this.currentMonth = this.date.getMonth();
    };
    EMonthTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-month-table',
                    template: "\n    <table class=\"el-month-table\">\n      <tbody>\n      <tr *ngFor=\"let row of monthRows; let i = index;\">\n        <td class=\"available\"\n            *ngFor=\"let item of row; let k = index;\"\n            [class.current]=\"isCurrentMonth(i, k)\"\n            (click)=\"clickHandle(i, k)\">\n          <a class=\"cell\">{{ item }}</a>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    EMonthTable.ctorParameters = function () { return []; };
    EMonthTable.propDecorators = {
        'showWeekNumber': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabledDate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled-date',] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return EMonthTable;
}());

function EMonthTable_tsickle_Closure_declarations() {
    /** @type {?} */
    EMonthTable.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    EMonthTable.ctorParameters;
    /** @type {?} */
    EMonthTable.propDecorators;
    /** @type {?} */
    EMonthTable.prototype.showWeekNumber;
    /** @type {?} */
    EMonthTable.prototype.model;
    /** @type {?} */
    EMonthTable.prototype.disabledDate;
    /** @type {?} */
    EMonthTable.prototype.modelChange;
    /** @type {?} */
    EMonthTable.prototype.currentMonth;
    /** @type {?} */
    EMonthTable.prototype.date;
    /** @type {?} */
    EMonthTable.prototype.monthRows;
}
//# sourceMappingURL=month-table.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/date-picker/children/year-table.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/element-angular/release/date-picker/children/year-table.js ***!
  \*********************************************************************************/
/*! exports provided: ElYearTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElYearTable", function() { return ElYearTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElYearTable = /** @class */ (function () {
    function ElYearTable() {
        this.showWeekNumber = false;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    ElYearTable.prototype.clickHandle = function (year) {
        this.currentYear = year;
        this.date.setFullYear(year);
        this.modelChange.emit(this.date.getTime());
    };
    /**
     * @param {?} currentYear
     * @return {?}
     */
    ElYearTable.prototype.updateYearRow = function (currentYear) {
        var /** @type {?} */ startYear = ~~(currentYear / 10) * 10;
        return [[], [], []].map(function (v, index) {
            return [0, 1, 2, 3].map(function (num) { return startYear + (index * 4) + num; });
        });
    };
    /**
     * @return {?}
     */
    ElYearTable.prototype.ngOnInit = function () {
        this.date = new Date(this.model);
        this.currentYear = this.date.getFullYear();
        this.yearRows = this.updateYearRow(this.currentYear);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElYearTable.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        // first change
        if (changes.model.isFirstChange())
            return;
        this.model = changes.model.currentValue;
        this.date = new Date(this.model);
        this.currentYear = this.date.getFullYear();
        this.yearRows = this.updateYearRow(this.currentYear);
    };
    ElYearTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-year-table',
                    template: "\n    <table class=\"el-year-table\">\n      <tbody>\n      <tr *ngFor=\"let years of yearRows\">\n        <td class=\"available\" *ngFor=\"let year of years\"\n          [class.current]=\"year === currentYear\"\n          (click)=\"clickHandle(year)\">\n          <a class=\"cell\">{{year}}</a>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElYearTable.ctorParameters = function () { return []; };
    ElYearTable.propDecorators = {
        'showWeekNumber': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabledDate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled-date',] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElYearTable;
}());

function ElYearTable_tsickle_Closure_declarations() {
    /** @type {?} */
    ElYearTable.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElYearTable.ctorParameters;
    /** @type {?} */
    ElYearTable.propDecorators;
    /** @type {?} */
    ElYearTable.prototype.showWeekNumber;
    /** @type {?} */
    ElYearTable.prototype.model;
    /** @type {?} */
    ElYearTable.prototype.disabledDate;
    /** @type {?} */
    ElYearTable.prototype.modelChange;
    /** @type {?} */
    ElYearTable.prototype.date;
    /** @type {?} */
    ElYearTable.prototype.yearRows;
    /** @type {?} */
    ElYearTable.prototype.currentYear;
}
//# sourceMappingURL=year-table.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/date-picker/module.js":
/*!********************************************************************!*\
  !*** ./node_modules/element-angular/release/date-picker/module.js ***!
  \********************************************************************/
/*! exports provided: ElDateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDateModule", function() { return ElDateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/module */ "./node_modules/element-angular/release/input/module.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picker */ "./node_modules/element-angular/release/date-picker/picker.js");
/* harmony import */ var _picker_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picker-panel */ "./node_modules/element-angular/release/date-picker/picker-panel.js");
/* harmony import */ var _children_date_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./children/date-table */ "./node_modules/element-angular/release/date-picker/children/date-table.js");
/* harmony import */ var _children_year_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./children/year-table */ "./node_modules/element-angular/release/date-picker/children/year-table.js");
/* harmony import */ var _children_month_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./children/month-table */ "./node_modules/element-angular/release/date-picker/children/month-table.js");









var ElDateModule = /** @class */ (function () {
    function ElDateModule() {
    }
    /**
     * @return {?}
     */
    ElDateModule.forRoot = function () {
        return { ngModule: ElDateModule, providers: [] };
    };
    ElDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_picker__WEBPACK_IMPORTED_MODULE_4__["ElDataPicker"], _picker_panel__WEBPACK_IMPORTED_MODULE_5__["ElDatePickerPanel"], _children_date_table__WEBPACK_IMPORTED_MODULE_6__["ElDateTable"], _children_year_table__WEBPACK_IMPORTED_MODULE_7__["ElYearTable"], _children_month_table__WEBPACK_IMPORTED_MODULE_8__["EMonthTable"]],
                    exports: [_picker__WEBPACK_IMPORTED_MODULE_4__["ElDataPicker"], _picker_panel__WEBPACK_IMPORTED_MODULE_5__["ElDatePickerPanel"], _children_date_table__WEBPACK_IMPORTED_MODULE_6__["ElDateTable"], _children_year_table__WEBPACK_IMPORTED_MODULE_7__["ElYearTable"], _children_month_table__WEBPACK_IMPORTED_MODULE_8__["EMonthTable"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _input_module__WEBPACK_IMPORTED_MODULE_3__["ElInputsModule"]],
                    entryComponents: [_picker__WEBPACK_IMPORTED_MODULE_4__["ElDataPicker"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDateModule.ctorParameters = function () { return []; };
    return ElDateModule;
}());

function ElDateModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDateModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDateModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/date-picker/picker-panel.js":
/*!**************************************************************************!*\
  !*** ./node_modules/element-angular/release/date-picker/picker-panel.js ***!
  \**************************************************************************/
/*! exports provided: ElDatePickerPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDatePickerPanel", function() { return ElDatePickerPanel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picker */ "./node_modules/element-angular/release/date-picker/picker.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");



var ElDatePickerPanel = /** @class */ (function () {
    /**
     * @param {?} root
     */
    function ElDatePickerPanel(root) {
        this.root = root;
        this.show = false;
        this.hiddenDay = false;
        this.panelAbsolute = true;
        this.panelIndex = 200;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shortcuts = false;
        this.showTime = false;
        this.currentView = 'date';
    }
    /**
     * @param {?} pickPath
     * @return {?}
     */
    ElDatePickerPanel.prototype.showPicker = function (pickPath) {
        this.currentView = pickPath;
    };
    /**
     * @return {?}
     */
    ElDatePickerPanel.prototype.updateDate = function () {
        var /** @type {?} */ date = new Date(this.model);
        var /** @type {?} */ startYear = ~~(date.getFullYear() / 10) * 10;
        this.dateShowModels = {
            month: date.getMonth(),
            year: date.getFullYear(),
            yearRange: [startYear, startYear + 10],
        };
    };
    /**
     * @param {?} time
     * @return {?}
     */
    ElDatePickerPanel.prototype.datePickChangeHandle = function (time) {
        this.model = time;
        this.modelChange.emit(time);
        this.updateDate();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    ElDatePickerPanel.prototype.monthPickChangeHandle = function (time) {
        this.model = time;
        // hidden day, only show month
        if (this.hiddenDay) {
            this.modelChange.emit(time);
        }
        else {
            this.currentView = 'date';
        }
        this.updateDate();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    ElDatePickerPanel.prototype.yearPickChangeHandle = function (time) {
        this.model = time;
        this.currentView = 'month';
        this.updateDate();
    };
    /**
     * @param {?} step
     * @return {?}
     */
    ElDatePickerPanel.prototype.nextYear = function (step) {
        // year table component opened, edit year range
        if (this.currentView === 'year') {
            step = step * 10;
        }
        var /** @type {?} */ date = new Date(this.model);
        date.setFullYear(this.dateShowModels.year + step);
        this.model = date.getTime();
        this.updateDate();
    };
    /**
     * @param {?} step
     * @return {?}
     */
    ElDatePickerPanel.prototype.nextMonth = function (step) {
        var /** @type {?} */ date = new Date(this.model);
        date.setMonth(this.dateShowModels.month + step);
        this.model = date.getTime();
        this.updateDate();
    };
    /**
     * @return {?}
     */
    ElDatePickerPanel.prototype.ngOnInit = function () {
        // hidden day
        this.currentView = this.hiddenDay ? 'month' : 'date';
        this.model = this.model || Date.now();
        this.updateDate();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElDatePickerPanel.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        // first change
        if (changes.model.isFirstChange())
            return;
        this.model = changes.model.currentValue;
        this.model = this.model || Date.now();
        this.updateDate();
    };
    ElDatePickerPanel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-data-picker-panel',
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_2__["dropAnimation"]],
                    styles: [' .el-picker-panel-absolute { position: absolute; } '],
                    template: "\n    <div [@dropAnimation]=\"show\"\n      [ngStyle]=\"{ width: width ? width + 'px' : 'auto', 'z-index': panelIndex}\"\n      [class]=\"'el-picker-panel el-date-picker '\"\n      [class.has-time]=\"showTime\"\n      [class.el-picker-panel-absolute]=\"panelAbsolute\">\n      <div class=\"el-picker-panel__body-wrapper\">\n        <!--<div class=\"el-picker-panel__sidebar\" *ngIf=\"shortcuts\">-->\n          <!--<button type=\"button\" class=\"el-picker-panel__shortcut\"-->\n            <!--*ngFor=\"shortcut in shortcuts\"-->\n            <!--(click)=\"handleShortcutClick(shortcut)\">-->\n            <!--{{ shortcut.text }}-->\n          <!--</button>-->\n        <!--</div>-->\n        <div class=\"el-picker-panel__body\">\n          <div class=\"el-date-picker__header\">\n            <button class=\"el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left\"\n              type=\"button\" (click)=\"nextYear(-1)\">\n            </button>\n            <button class=\"el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left\"\n              type=\"button\" (click)=\"nextMonth(-1)\"\n              *ngIf=\"currentView === 'date'\">\n            </button>\n            \n            <!--year label-->\n            <span class=\"el-date-picker__header-label\" *ngIf=\"currentView !== 'year'\"\n              (click)=\"showPicker('year')\">{{dateShowModels.year}} \u5E74</span>\n            <!--year range label-->\n            <span class=\"el-date-picker__header-label\" *ngIf=\"currentView === 'year'\">\n              {{dateShowModels.yearRange[0]}} \u5E74 - {{dateShowModels.yearRange[1]}} \u5E74\n            </span>\n            \n            <span class=\"el-date-picker__header-label\"\n              [class.active]=\"currentView === 'month'\"\n              (click)=\"showPicker('month')\"\n              *ngIf=\"currentView === 'date'\">{{dateShowModels.month + 1}} \u6708</span>\n            <button class=\"el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right\"\n              type=\"button\" (click)=\"nextYear(1)\">\n            </button>\n            <button class=\"el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right\"\n              type=\"button\" (click)=\"nextMonth(1)\"\n              *ngIf=\"currentView === 'date'\">\n            </button>\n          </div>\n\n          <div class=\"el-picker-panel__content\">\n            <el-date-table *ngIf=\"currentView === 'date' && !hiddenDay\"\n              (modelChange)=\"datePickChangeHandle($event)\"\n              [model]=\"model\">\n            </el-date-table>\n            <el-year-table *ngIf=\"currentView === 'year'\"\n              [model]=\"model\"\n              (modelChange)=\"yearPickChangeHandle($event)\"\n              [disabled-date]=\"disabledDate\">\n            </el-year-table>\n            <el-month-table *ngIf=\"currentView === 'month'\"\n              [model]=\"model\"\n              (modelChange)=\"monthPickChangeHandle($event)\"\n              [disabled-date]=\"disabledDate\">\n            </el-month-table>\n          </div>\n        </div>\n      </div>\n\n      <!--<div class=\"el-picker-panel__footer\" *ngIf=\"footerVisible && currentView === 'date'\">-->\n        <!--<a href=\"JavaScript:\" class=\"el-picker-panel__link-btn\" (click)=\"changeToNow()\">556</a>-->\n        <!--<button class=\"el-picker-panel__btn\" type=\"button\"-->\n          <!--(click)=\"confirm()\">667</button>-->\n      <!--</div>-->\n    </div>\n  "
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDatePickerPanel.ctorParameters = function () { return [
        { type: _picker__WEBPACK_IMPORTED_MODULE_1__["ElDataPicker"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    ElDatePickerPanel.propDecorators = {
        'show': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'hiddenDay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hidden-day',] },],
        'panelAbsolute': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['panel-absolute',] },],
        'panelIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['panel-index',] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElDatePickerPanel;
}());

function ElDatePickerPanel_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDatePickerPanel.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDatePickerPanel.ctorParameters;
    /** @type {?} */
    ElDatePickerPanel.propDecorators;
    /** @type {?} */
    ElDatePickerPanel.prototype.show;
    /** @type {?} */
    ElDatePickerPanel.prototype.width;
    /** @type {?} */
    ElDatePickerPanel.prototype.model;
    /** @type {?} */
    ElDatePickerPanel.prototype.hiddenDay;
    /** @type {?} */
    ElDatePickerPanel.prototype.panelAbsolute;
    /** @type {?} */
    ElDatePickerPanel.prototype.panelIndex;
    /** @type {?} */
    ElDatePickerPanel.prototype.modelChange;
    /** @type {?} */
    ElDatePickerPanel.prototype.shortcuts;
    /** @type {?} */
    ElDatePickerPanel.prototype.showTime;
    /** @type {?} */
    ElDatePickerPanel.prototype.currentView;
    /** @type {?} */
    ElDatePickerPanel.prototype.dateShowModels;
    /** @type {?} */
    ElDatePickerPanel.prototype.root;
}
//# sourceMappingURL=picker-panel.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/date-picker/picker-props.js":
/*!**************************************************************************!*\
  !*** ./node_modules/element-angular/release/date-picker/picker-props.js ***!
  \**************************************************************************/
/*! exports provided: ElDatePickerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDatePickerProps", function() { return ElDatePickerProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElDatePickerProps = /** @class */ (function () {
    function ElDatePickerProps() {
        this.readonly = false;
        this.editable = true;
        this.clearable = true;
        this.changeOnBlur = false;
        this.align = 'left'; // enum: left, center, right
        this.type = 'date'; // enum: year/month/date/week/datetime/datetimerange/daterange
        this.placeholder = '选择日期';
        this.format = 'yyyy-MM-dd';
        this.hiddenDay = false;
        this.panelAbsolute = true;
        this.panelIndex = 200;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elDisabled = false;
    }
    Object.defineProperty(ElDatePickerProps.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    ElDatePickerProps.propDecorators = {
        'readonly': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'editable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'clearable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'changeOnBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['change-on-blur',] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'align': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'placeholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'format': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'hiddenDay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hidden-day',] },],
        'panelAbsolute': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['panel-absolute',] },],
        'panelIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['panel-index',] },],
        'panelWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['panel-width',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'clearClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['clear-click',] },],
        'iconClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['icon-click',] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElDatePickerProps;
}());

function ElDatePickerProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDatePickerProps.propDecorators;
    /** @type {?} */
    ElDatePickerProps.prototype.readonly;
    /** @type {?} */
    ElDatePickerProps.prototype.editable;
    /** @type {?} */
    ElDatePickerProps.prototype.clearable;
    /** @type {?} */
    ElDatePickerProps.prototype.changeOnBlur;
    /** @type {?} */
    ElDatePickerProps.prototype.size;
    /** @type {?} */
    ElDatePickerProps.prototype.align;
    /** @type {?} */
    ElDatePickerProps.prototype.type;
    /** @type {?} */
    ElDatePickerProps.prototype.placeholder;
    /** @type {?} */
    ElDatePickerProps.prototype.format;
    /** @type {?} */
    ElDatePickerProps.prototype.hiddenDay;
    /** @type {?} */
    ElDatePickerProps.prototype.panelAbsolute;
    /** @type {?} */
    ElDatePickerProps.prototype.panelIndex;
    /** @type {?} */
    ElDatePickerProps.prototype.panelWidth;
    /** @type {?} */
    ElDatePickerProps.prototype.model;
    /** @type {?} */
    ElDatePickerProps.prototype.modelChange;
    /** @type {?} */
    ElDatePickerProps.prototype.clearClick;
    /** @type {?} */
    ElDatePickerProps.prototype.iconClick;
    /** @type {?} */
    ElDatePickerProps.prototype.elDisabled;
}
//# sourceMappingURL=picker-props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/date-picker/picker.js":
/*!********************************************************************!*\
  !*** ./node_modules/element-angular/release/date-picker/picker.js ***!
  \********************************************************************/
/*! exports provided: ElDataPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDataPicker", function() { return ElDataPicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _picker_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picker-props */ "./node_modules/element-angular/release/date-picker/picker-props.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/format */ "./node_modules/element-angular/release/date-picker/utils/format.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ElDataPicker = /** @class */ (function (_super) {
    __extends(ElDataPicker, _super);
    /**
     * @param {?} dateFormat
     * @param {?} renderer
     */
    function ElDataPicker(dateFormat, renderer) {
        var _this = _super.call(this) || this;
        _this.dateFormat = dateFormat;
        _this.renderer = renderer;
        _this.showPanelPicker = false;
        _this.iconShowClose = false;
        _this.controlChange = function () { };
        _this.controlTouch = function () { };
        return _this;
    }
    /**
     * @param {?} t
     * @return {?}
     */
    ElDataPicker.prototype.iconMouseActionHandle = function (t) {
        if (!this.clearable)
            return;
        this.iconShowClose = this.model && t;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ElDataPicker.prototype.iconClickHandle = function (e) {
        this.iconClick.emit(e);
        if (this.elDisabled)
            return;
        // use close action
        if (this.iconShowClose) {
            this.clearClick.emit(e);
            this.model = null;
            this.value = Date.now();
            this.showPanelPicker = false;
            this.iconShowClose = false;
            return;
        }
        // toggle action
        this.showPanelPicker = !this.showPanelPicker;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElDataPicker.prototype.propagationHandle = function (event) {
        event.stopPropagation();
    };
    /**
     * @param {?} input
     * @return {?}
     */
    ElDataPicker.prototype.changeHandle = function (input) {
        var /** @type {?} */ time = this.dateFormat.getTime(input);
        // if (!time) return
        this.value = time;
    };
    /**
     * @return {?}
     */
    ElDataPicker.prototype.tryUpdateText = function () {
        if (!this.value) {
            this.model = null;
            this.modelChange.emit(null);
            this.controlChange(null);
            this.showPanelPicker = false;
            return;
        }
        var /** @type {?} */ modelTime = new Date(this.model).getTime();
        var /** @type {?} */ time = this.dateFormat.getTime(this.value);
        this.dateChangeHandle(time ? this.value : modelTime);
    };
    /**
     * @param {?} time
     * @return {?}
     */
    ElDataPicker.prototype.dateChangeHandle = function (time) {
        this.model = _utils_format__WEBPACK_IMPORTED_MODULE_2__["DateFormat"].moment(time, this.format);
        this.value = new Date(this.model).getTime();
        this.modelChange.emit(this.model);
        this.controlChange(this.model);
        this.showPanelPicker = false;
    };
    /**
     * @return {?}
     */
    ElDataPicker.prototype.focusHandle = function () {
        var _this = this;
        this.showPanelPicker = true;
        this.globalKeydownListener && this.globalKeydownListener();
        this.globalKeydownListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.keyCode === 9 || event.keyCode === 27) {
                _this.showPanelPicker = false;
                _this.globalKeydownListener && _this.globalKeydownListener();
            }
            if (event.keyCode === 13) {
                _this.tryUpdateText();
            }
        });
    };
    /**
     * @return {?}
     */
    ElDataPicker.prototype.ngOnInit = function () {
        var _this = this;
        this.globalClickListener = this.renderer.listen('document', 'click', function () {
            if (!_this.showPanelPicker)
                return;
            _this.showPanelPicker = false;
            _this.changeOnBlur && _this.tryUpdateText();
        });
        // init value
        var /** @type {?} */ time = this.dateFormat.getTime(this.model);
        if (!time)
            return;
        this.model = _utils_format__WEBPACK_IMPORTED_MODULE_2__["DateFormat"].moment(time, this.format);
        this.value = time;
    };
    /**
     * @return {?}
     */
    ElDataPicker.prototype.ngOnDestroy = function () {
        this.globalClickListener && this.globalClickListener();
        this.globalKeydownListener && this.globalKeydownListener();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElDataPicker.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElDataPicker.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElDataPicker.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElDataPicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-date-picker',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElDataPicker; }),
                            multi: true
                        }, _utils_format__WEBPACK_IMPORTED_MODULE_2__["DateFormat"]],
                    template: "\n    <div (click)=\"propagationHandle($event)\">\n      <el-input [class]=\"'el-date-editor ' + 'el-date-editor--' + type\"\n        [readonly]=\"!editable || readonly\"\n        [elDisabled]=\"elDisabled\"\n        [size]=\"size\" [placeholder]=\"placeholder\"\n        [icon]=\"iconShowClose ? 'close' : 'date'\"\n        [model]=\"model\"\n        (icon-click)=\"iconClickHandle($event)\"\n        (modelChange)=\"changeHandle($event)\"\n        (icon-mouseenter)=\"iconMouseActionHandle(true)\"\n        (icon-mouseleave)=\"iconMouseActionHandle(false)\"\n        (focus)=\"focusHandle()\">\n      </el-input>\n      <el-data-picker-panel [show]=\"showPanelPicker\"  [hidden-day]=\"hiddenDay\"\n        [panel-absolute]=\"panelAbsolute\" [panel-index]=\"panelIndex\" [width]=\"panelWidth\"\n        [model]=\"value\" (modelChange)=\"dateChangeHandle($event)\">\n      </el-data-picker-panel>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDataPicker.ctorParameters = function () { return [
        { type: _utils_format__WEBPACK_IMPORTED_MODULE_2__["DateFormat"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    return ElDataPicker;
}(_picker_props__WEBPACK_IMPORTED_MODULE_1__["ElDatePickerProps"]));

function ElDataPicker_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDataPicker.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDataPicker.ctorParameters;
    /** @type {?} */
    ElDataPicker.prototype.showPanelPicker;
    /** @type {?} */
    ElDataPicker.prototype.value;
    /** @type {?} */
    ElDataPicker.prototype.globalClickListener;
    /** @type {?} */
    ElDataPicker.prototype.globalKeydownListener;
    /** @type {?} */
    ElDataPicker.prototype.iconShowClose;
    /** @type {?} */
    ElDataPicker.prototype.controlChange;
    /** @type {?} */
    ElDataPicker.prototype.controlTouch;
    /** @type {?} */
    ElDataPicker.prototype.dateFormat;
    /** @type {?} */
    ElDataPicker.prototype.renderer;
}
//# sourceMappingURL=picker.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/date-picker/utils/format.js":
/*!**************************************************************************!*\
  !*** ./node_modules/element-angular/release/date-picker/utils/format.js ***!
  \**************************************************************************/
/*! exports provided: DateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return DateFormat; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DateFormat = /** @class */ (function () {
    function DateFormat() {
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateFormat.checkedDate = function (date) {
        return typeof date === 'number' ? new Date(date) : date;
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    DateFormat.getDayCountOfMonth = function (year, month) {
        var /** @type {?} */ isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        return [
            month === 1 && !isLeapYear,
            month === 1 && isLeapYear,
            !!([3, 5, 8, 10].find(function (num) { return num === month; })),
            true,
        ].reduce(function (pre, next, index) { return pre ? pre : (next ? 28 + index : 0); }, 0);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateFormat.getFirstDayOfMonth = function (date) {
        var /** @type {?} */ checkedDate = DateFormat.checkedDate(date);
        checkedDate.setDate(1);
        return checkedDate.getDay();
    };
    /**
     * @param {?} targetDate
     * @return {?}
     */
    DateFormat.getCurrentMonthOffset = function (targetDate) {
        var /** @type {?} */ checkedDate = DateFormat.checkedDate(targetDate);
        var /** @type {?} */ currentDate = new Date();
        if (currentDate.getFullYear() !== checkedDate.getFullYear()) {
            return null;
        }
        var /** @type {?} */ offset = currentDate.getMonth() - checkedDate.getMonth();
        return (offset > 1 || offset < -1) ? null : offset;
    };
    /**
     * @param {?} input
     * @param {?} format
     * @return {?}
     */
    DateFormat.moment = function (input, format) {
        var /** @type {?} */ d = new Date(input);
        if (String(d) === 'Invalid Date')
            return '';
        var /** @type {?} */ makeReg = function (value) { return new RegExp("(" + value + ")"); };
        var /** @type {?} */ keys = ['M+', 'd+', 'h+', 'm+', 's+', 'q+', 'S'];
        var /** @type {?} */ values = [
            d.getMonth() + 1,
            d.getDate(),
            d.getHours(),
            d.getMinutes(),
            d.getSeconds(),
            Math.floor((d.getMonth() + 3) / 3),
            d.getMilliseconds(),
        ];
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        var /** @type {?} */ len = 0, /** @type {?} */ key, /** @type {?} */ val;
        while (len < keys.length) {
            key = keys[len];
            val = values[len];
            if (makeReg(key).test(format)) {
                format = ((format)).replace(RegExp.$1, (RegExp.$1.length === 1) ? val : ('00' + val).substr(('' + val).length));
            }
            len++;
        }
        return format;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    DateFormat.prototype.getTime = function (input) {
        var /** @type {?} */ date = new Date(input);
        if (String(date) === 'Invalid Date') {
            return 0;
        }
        return date.getTime();
    };
    DateFormat.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    DateFormat.ctorParameters = function () { return []; };
    return DateFormat;
}());

function DateFormat_tsickle_Closure_declarations() {
    /** @type {?} */
    DateFormat.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DateFormat.ctorParameters;
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/dialog/dialog.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/dialog/dialog.js ***!
  \***************************************************************/
/*! exports provided: ElDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDialog", function() { return ElDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");
/* harmony import */ var _dialog_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.props */ "./node_modules/element-angular/release/dialog/dialog.props.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ElDialog = /** @class */ (function (_super) {
    __extends(ElDialog, _super);
    /**
     * @param {?} sanitizer
     * @param {?} renderer
     * @param {?} window
     * @param {?} document
     */
    function ElDialog(sanitizer, renderer, window, document) {
        var _this = _super.call(this) || this;
        _this.sanitizer = sanitizer;
        _this.renderer = renderer;
        _this.window = window;
        _this.document = document;
        return _this;
    }
    /**
     * @return {?}
     */
    ElDialog.prototype.makeDialogStyles = function () {
        var /** @type {?} */ width = this.width ? "width: " + this.width + ";" : '';
        var /** @type {?} */ styles = "top: " + this.top + ";" + width;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    ElDialog.prototype.closeHandler = function () {
        var _this = this;
        this.beforeClose(function () {
            _this.visible = false;
            _this.visibleChange.emit(_this.visible);
            _this.updateWithVisibleChange();
        });
    };
    /**
     * @return {?}
     */
    ElDialog.prototype.wrapperClickHandle = function () {
        // close dialog
        if (this.closeOnClickModal) {
            this.closeHandler();
        }
    };
    /**
     * @return {?}
     */
    ElDialog.prototype.updateWithVisibleChange = function () {
        // update modal
        if (this.cacheModalElement) {
            // this.cacheModalElement.innerHTML = this.makeModalTmp(this.visible)
            this.renderer.setStyle(this.cacheModalElement, 'display', this.visible ? 'block' : 'none');
        }
        // lock body scroll
        if (this.lockScroll) {
            var /** @type {?} */ nextValue = this.visible ? 'hidden' : this.cacheOverflow;
            this.renderer.setStyle(this.document.body, 'overflow', nextValue);
        }
    };
    /**
     * @return {?}
     */
    ElDialog.prototype.ngOnInit = function () {
        var _this = this;
        // save old overflow
        if (this.lockScroll) {
            this.cacheOverflow = this.window.getComputedStyle(this.document.body).overflow;
        }
        this.cacheModalElement = this.renderer.createElement('div');
        this.renderer.setAttribute(this.cacheModalElement, 'class', 'v-modal');
        this.renderer.setStyle(this.cacheModalElement, 'z-index', this.modalZindex);
        this.renderer.setStyle(this.cacheModalElement, 'display', this.visible ? 'block' : 'none');
        this.document.body.appendChild(this.cacheModalElement);
        // listen esc
        if (this.closeOnPressEscape) {
            this.globalListenFunc = this.renderer.listen('document', 'keydown', function (event) {
                _this.visible && event.keyCode === 27 && _this.closeHandler();
            });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElDialog.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.visible)
            return;
        this.visible = changes.visible.currentValue;
        this.updateWithVisibleChange();
    };
    /**
     * @return {?}
     */
    ElDialog.prototype.ngOnDestroy = function () {
        this.globalListenFunc && this.globalListenFunc();
        this.cacheModalElement.parentElement.removeChild(this.cacheModalElement);
        this.renderer.setStyle(this.document.body, 'overflow', this.cacheOverflow);
    };
    ElDialog.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-dialog',
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_4__["dialogFadeAnimation"]],
                    template: "\n    <div class=\"el-dialog__wrapper\" [@dialogFadeAnimation]=\"visible\"\n      [ngStyle]=\"{ 'z-index': dialogZindex }\"\n      (click)=\"wrapperClickHandle()\">\n      <div [class]=\"'el-dialog ' + customClass\"\n        [class.el-dialog--center]=\"center\"\n        [style]=\"makeDialogStyles()\"\n        (click)=\"$event.stopPropagation()\">\n        <div class=\"el-dialog__header\">\n          <ng-container *ngIf=\"titleTmp\">\n            <ng-template [ngTemplateOutlet]=\"titleTmp\"></ng-template>\n          </ng-container>\n          <span class=\"el-dialog__title\" *ngIf=\"!titleTmp\">{{title}}</span>\n          <button type=\"button\" class=\"el-dialog__headerbtn\"\n            aria-label=\"Close\"\n            *ngIf=\"showClose\"\n            (click)=\"closeHandler()\">\n            <i class=\"el-dialog__close el-icon el-icon-close\"></i>\n          </button>\n        </div>\n        <div class=\"el-dialog__body\">\n          <ng-content></ng-content>\n        </div>\n        <div class=\"el-dialog__footer\">\n          <ng-container *ngIf=\"footerTmp\">\n            <ng-template [ngTemplateOutlet]=\"footerTmp\"></ng-template>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDialog.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_2__["WindowWrapper"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_2__["DocumentWrapper"], },
    ]; };
    ElDialog.propDecorators = {
        'titleTmp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['title',] },],
        'footerTmp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['footer',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElDialog;
}(_dialog_props__WEBPACK_IMPORTED_MODULE_3__["ElDialogProps"]));

function ElDialog_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDialog.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDialog.ctorParameters;
    /** @type {?} */
    ElDialog.propDecorators;
    /** @type {?} */
    ElDialog.prototype.titleTmp;
    /** @type {?} */
    ElDialog.prototype.footerTmp;
    /** @type {?} */
    ElDialog.prototype.model;
    /** @type {?} */
    ElDialog.prototype.cacheOverflow;
    /** @type {?} */
    ElDialog.prototype.cacheModalElement;
    /** @type {?} */
    ElDialog.prototype.globalListenFunc;
    /** @type {?} */
    ElDialog.prototype.sanitizer;
    /** @type {?} */
    ElDialog.prototype.renderer;
    /** @type {?} */
    ElDialog.prototype.window;
    /** @type {?} */
    ElDialog.prototype.document;
}
//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/dialog/dialog.props.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/dialog/dialog.props.js ***!
  \*********************************************************************/
/*! exports provided: ElDialogProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDialogProps", function() { return ElDialogProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElDialogProps = /** @class */ (function () {
    function ElDialogProps() {
        this.center = false;
        this.top = '15%'; // css value
        this.closeOnClickModal = true;
        this.closeOnPressEscape = true;
        this.lockScroll = true; // lock body overflow
        this.showClose = true;
        this.beforeClose = (function (d) { return d(); });
        this.dialogZindex = 2000;
        this.modalZindex = 1999;
        this.visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ElDialogProps.propDecorators = {
        'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'center': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'top': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'closeOnClickModal': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['close-on-click-modal',] },],
        'closeOnPressEscape': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['close-on-press-escape',] },],
        'lockScroll': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['lock-scroll',] },],
        'customClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['custom-class',] },],
        'showClose': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-close',] },],
        'beforeClose': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['before-close',] },],
        'dialogZindex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['dialog-zindex',] },],
        'modalZindex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['modal-zindex',] },],
        'visible': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'visibleChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElDialogProps;
}());

function ElDialogProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDialogProps.propDecorators;
    /** @type {?} */
    ElDialogProps.prototype.title;
    /** @type {?} */
    ElDialogProps.prototype.width;
    /** @type {?} */
    ElDialogProps.prototype.center;
    /** @type {?} */
    ElDialogProps.prototype.top;
    /** @type {?} */
    ElDialogProps.prototype.closeOnClickModal;
    /** @type {?} */
    ElDialogProps.prototype.closeOnPressEscape;
    /** @type {?} */
    ElDialogProps.prototype.lockScroll;
    /** @type {?} */
    ElDialogProps.prototype.customClass;
    /** @type {?} */
    ElDialogProps.prototype.showClose;
    /** @type {?} */
    ElDialogProps.prototype.beforeClose;
    /** @type {?} */
    ElDialogProps.prototype.dialogZindex;
    /** @type {?} */
    ElDialogProps.prototype.modalZindex;
    /** @type {?} */
    ElDialogProps.prototype.visible;
    /** @type {?} */
    ElDialogProps.prototype.visibleChange;
}
//# sourceMappingURL=dialog.props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/dialog/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/dialog/module.js ***!
  \***************************************************************/
/*! exports provided: getDocument, getWindow, ElDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDialogModule", function() { return ElDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/module */ "./node_modules/element-angular/release/shared/module.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog */ "./node_modules/element-angular/release/dialog/dialog.js");




/**
 * @return {?}
 */
function getDocument() { return document; }
/**
 * @return {?}
 */
function getWindow() { return window; }
var ElDialogModule = /** @class */ (function () {
    function ElDialogModule() {
    }
    /**
     * @return {?}
     */
    ElDialogModule.forRoot = function () {
        return { ngModule: ElDialogModule, providers: [] };
    };
    ElDialogModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_dialog__WEBPACK_IMPORTED_MODULE_3__["ElDialog"]],
                    exports: [_dialog__WEBPACK_IMPORTED_MODULE_3__["ElDialog"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["ElSharedModule"]],
                    entryComponents: [_dialog__WEBPACK_IMPORTED_MODULE_3__["ElDialog"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDialogModule.ctorParameters = function () { return []; };
    return ElDialogModule;
}());

function ElDialogModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDialogModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDialogModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/dropdown/animation.js":
/*!********************************************************************!*\
  !*** ./node_modules/element-angular/release/dropdown/animation.js ***!
  \********************************************************************/
/*! exports provided: dropAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropAnimation", function() { return dropAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ dropAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dropAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        height: 0,
        border: 0,
        padding: 0,
        visibility: 'hidden',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        height: 0,
        border: 0,
        padding: 0,
        visibility: 'hidden',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        height: '*',
        border: '*',
        padding: '*',
        visibility: 'inherit',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-out")),
]);
//# sourceMappingURL=animation.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/dropdown/dropdown.item.js":
/*!************************************************************************!*\
  !*** ./node_modules/element-angular/release/dropdown/dropdown.item.js ***!
  \************************************************************************/
/*! exports provided: ElDropdownItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDropdownItem", function() { return ElDropdownItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElDropdownItem = /** @class */ (function () {
    function ElDropdownItem() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ElDropdownItem.prototype.handleClick = function (event) {
        if (this.model.elDisabled)
            return;
        event.stopPropagation();
        this.selected.emit(this.model);
    };
    ElDropdownItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-dropdown-item',
                    template: "\n    <li class=\"el-dropdown-menu__item\"\n    [class.is-disabled]=\"model.elDisabled\"\n    [class.el-dropdown-menu__item--divided]=\"model.divided\"\n    (click)=\"handleClick($event)\">\n      {{model.label}}\n    </li>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDropdownItem.ctorParameters = function () { return []; };
    ElDropdownItem.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'selected': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElDropdownItem;
}());

function ElDropdownItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDropdownItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDropdownItem.ctorParameters;
    /** @type {?} */
    ElDropdownItem.propDecorators;
    /** @type {?} */
    ElDropdownItem.prototype.model;
    /** @type {?} */
    ElDropdownItem.prototype.selected;
}
//# sourceMappingURL=dropdown.item.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/dropdown/dropdown.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/dropdown/dropdown.js ***!
  \*******************************************************************/
/*! exports provided: ElDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDropdown", function() { return ElDropdown; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _dropdown_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.props */ "./node_modules/element-angular/release/dropdown/dropdown.props.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./node_modules/element-angular/release/dropdown/animation.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ElDropdown = /** @class */ (function (_super) {
    __extends(ElDropdown, _super);
    /**
     * @param {?} renderer
     * @param {?} sanitizer
     * @param {?} document
     * @param {?} el
     */
    function ElDropdown(renderer, sanitizer, document, el) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.sanitizer = sanitizer;
        _this.document = document;
        _this.el = el;
        _this.showMenu = false;
        _this.slideToBottom = true;
        _this.mouseleave = function () {
            if (_this.trigger !== 'hover')
                return;
            _this.timer = setTimeout(function () {
                _this.closeMenu();
                clearTimeout(_this.timer);
            }, 400);
        };
        _this.mouseenter = function () {
            if (_this.trigger !== 'hover')
                return;
            _this.timer && clearTimeout(_this.timer);
            !_this.showMenu && _this.visibleChange.emit();
            _this.showMenu = true;
        };
        return _this;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    ElDropdown.prototype.openMenu = function (event) {
        var _this = this;
        event && event.stopPropagation();
        this.showMenu = !this.showMenu;
        this.visibleChange.emit();
        this.globalListenFunc = this.renderer.listen('document', 'click', function () {
            _this.closeMenu();
        });
    };
    /**
     * @return {?}
     */
    ElDropdown.prototype.closeMenu = function () {
        this.showMenu = false;
        this.visibleChange.emit();
        this.globalListenFunc && this.globalListenFunc();
    };
    /**
     * @param {?} model
     * @return {?}
     */
    ElDropdown.prototype.selectHandle = function (model) {
        this.selected.emit(model);
        // select and hide menu (props)
        this.hideOnClick && this.closeMenu();
    };
    /**
     * @return {?}
     */
    ElDropdown.prototype.makeListStyles = function () {
        var /** @type {?} */ styles = "top: " + (this.slideToBottom ? '100%' : (0 - this.listHeight) + 'px') + ";" +
            ((this.menuAlign === 'end' ? 'right' : 'left') + ": 0; position: absolute; min-width: 100px;") +
            ("white-space: " + (this.menuNoWrap ? 'nowrap' : 'normal'));
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    ElDropdown.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.listHeight = this.list.nativeElement.offsetHeight + 12;
        this.globalScrollFunc = this.renderer.listen('window', 'scroll', function () {
            var /** @type {?} */ top = _this.el.nativeElement.getBoundingClientRect().top;
            var /** @type {?} */ nextValue = _this.document.documentElement.clientHeight - top > _this.listHeight;
            if (nextValue !== _this.slideToBottom) {
                _this.slideToBottom = nextValue;
            }
        });
    };
    /**
     * @return {?}
     */
    ElDropdown.prototype.ngOnDestroy = function () {
        this.globalListenFunc && this.globalListenFunc();
        this.globalScrollFunc && this.globalScrollFunc();
    };
    ElDropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-dropdown',
                    template: "\n    <ng-template #content>\n      <ng-content></ng-content>\n    </ng-template>\n    <div class=\"el-dropdown\">\n      <ng-container *ngIf=\"splitButton\">\n        <el-button [type]=\"type\" [size]=\"size\" (click)=\"openMenu($event)\">\n          <span>\n            <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n            <i class=\"el-icon-caret-bottom el-icon--right\"></i>\n          </span>\n        </el-button>\n      </ng-container>\n      <ng-container *ngIf=\"!splitButton\">\n        <span class=\"el-dropdown-link\" (click)=\"openMenu($event)\" style=\"cursor: pointer;\">\n          <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n          <i class=\"el-icon-caret-bottom el-icon--right\"></i>\n        </span>\n      </ng-container>\n      <div [style]=\"makeListStyles()\">\n        <ul class=\"el-dropdown-menu\" #list [@dropAnimation]=\"showMenu\">\n          <el-dropdown-item *ngFor=\"let item of model\" [model]=\"item\" (selected)=\"selectHandle(item)\">\n          </el-dropdown-item>\n        </ul>\n      </div>\n    </div>\n  ",
                    animations: [_animation__WEBPACK_IMPORTED_MODULE_3__["dropAnimation"]],
                    styles: ['.el-dropdown-menu { overflow: hidden; }'],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDropdown.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_4__["DocumentWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElDropdown.propDecorators = {
        'list': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['list',] },],
        'mouseleave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] },],
        'mouseenter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] },],
    };
    return ElDropdown;
}(_dropdown_props__WEBPACK_IMPORTED_MODULE_2__["ElDropdownProps"]));

function ElDropdown_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDropdown.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDropdown.ctorParameters;
    /** @type {?} */
    ElDropdown.propDecorators;
    /** @type {?} */
    ElDropdown.prototype.list;
    /** @type {?} */
    ElDropdown.prototype.showMenu;
    /** @type {?} */
    ElDropdown.prototype.timer;
    /** @type {?} */
    ElDropdown.prototype.slideToBottom;
    /** @type {?} */
    ElDropdown.prototype.listHeight;
    /** @type {?} */
    ElDropdown.prototype.globalListenFunc;
    /** @type {?} */
    ElDropdown.prototype.globalScrollFunc;
    /** @type {?} */
    ElDropdown.prototype.mouseleave;
    /** @type {?} */
    ElDropdown.prototype.mouseenter;
    /** @type {?} */
    ElDropdown.prototype.renderer;
    /** @type {?} */
    ElDropdown.prototype.sanitizer;
    /** @type {?} */
    ElDropdown.prototype.document;
    /** @type {?} */
    ElDropdown.prototype.el;
}
//# sourceMappingURL=dropdown.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/dropdown/dropdown.props.js":
/*!*************************************************************************!*\
  !*** ./node_modules/element-angular/release/dropdown/dropdown.props.js ***!
  \*************************************************************************/
/*! exports provided: ElDropdownProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDropdownProps", function() { return ElDropdownProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElDropdownProps = /** @class */ (function () {
    function ElDropdownProps() {
        this.splitButton = false;
        // style
        this.menuAlign = 'end';
        this.menuNoWrap = false;
        // trigger type
        this.trigger = 'hover';
        this.hideOnClick = true;
        // event
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ElDropdownProps.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'splitButton': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['split-button',] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'menuAlign': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['menu-align',] },],
        'menuNoWrap': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['menu-no-wrap',] },],
        'trigger': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'hideOnClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-on-click',] },],
        'visibleChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['visible-change',] },],
        'selected': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElDropdownProps;
}());

function ElDropdownProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDropdownProps.propDecorators;
    /** @type {?} */
    ElDropdownProps.prototype.model;
    /** @type {?} */
    ElDropdownProps.prototype.splitButton;
    /** @type {?} */
    ElDropdownProps.prototype.size;
    /** @type {?} */
    ElDropdownProps.prototype.type;
    /** @type {?} */
    ElDropdownProps.prototype.menuAlign;
    /** @type {?} */
    ElDropdownProps.prototype.menuNoWrap;
    /** @type {?} */
    ElDropdownProps.prototype.trigger;
    /** @type {?} */
    ElDropdownProps.prototype.hideOnClick;
    /** @type {?} */
    ElDropdownProps.prototype.visibleChange;
    /** @type {?} */
    ElDropdownProps.prototype.selected;
}
//# sourceMappingURL=dropdown.props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/dropdown/module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/dropdown/module.js ***!
  \*****************************************************************/
/*! exports provided: ElDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElDropdownModule", function() { return ElDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/module */ "./node_modules/element-angular/release/shared/module.js");
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/module */ "./node_modules/element-angular/release/button/module.js");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.item */ "./node_modules/element-angular/release/dropdown/dropdown.item.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown */ "./node_modules/element-angular/release/dropdown/dropdown.js");






var ElDropdownModule = /** @class */ (function () {
    function ElDropdownModule() {
    }
    /**
     * @return {?}
     */
    ElDropdownModule.forRoot = function () {
        return { ngModule: ElDropdownModule, providers: [] };
    };
    ElDropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_dropdown__WEBPACK_IMPORTED_MODULE_5__["ElDropdown"], _dropdown_item__WEBPACK_IMPORTED_MODULE_4__["ElDropdownItem"]],
                    exports: [_dropdown__WEBPACK_IMPORTED_MODULE_5__["ElDropdown"], _dropdown_item__WEBPACK_IMPORTED_MODULE_4__["ElDropdownItem"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _button_module__WEBPACK_IMPORTED_MODULE_3__["ElButtonsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["ElSharedModule"]],
                    entryComponents: [_dropdown__WEBPACK_IMPORTED_MODULE_5__["ElDropdown"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElDropdownModule.ctorParameters = function () { return []; };
    return ElDropdownModule;
}());

function ElDropdownModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDropdownModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDropdownModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/element-angular.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/element-angular/release/element-angular.module.js ***!
  \************************************************************************/
/*! exports provided: ElChildModules, ELMODULES_GROUP, ElModule, ElMessageService, ElNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElChildModules", function() { return ElChildModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELMODULES_GROUP", function() { return ELMODULES_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElModule", function() { return ElModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message/message.service */ "./node_modules/element-angular/release/message/message.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElMessageService", function() { return _message_message_service__WEBPACK_IMPORTED_MODULE_1__["ElMessageService"]; });

/* harmony import */ var _notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.service */ "./node_modules/element-angular/release/notification/notification.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElNotificationService", function() { return _notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["ElNotificationService"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/module */ "./node_modules/element-angular/release/shared/module.js");
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/module */ "./node_modules/element-angular/release/button/module.js");
/* harmony import */ var _checkbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox/module */ "./node_modules/element-angular/release/checkbox/module.js");
/* harmony import */ var _icon_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon/module */ "./node_modules/element-angular/release/icon/module.js");
/* harmony import */ var _radio_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio/module */ "./node_modules/element-angular/release/radio/module.js");
/* harmony import */ var _menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/module */ "./node_modules/element-angular/release/menu/module.js");
/* harmony import */ var _tooltip_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tooltip/module */ "./node_modules/element-angular/release/tooltip/module.js");
/* harmony import */ var _row_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./row/module */ "./node_modules/element-angular/release/row/module.js");
/* harmony import */ var _col_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./col/module */ "./node_modules/element-angular/release/col/module.js");
/* harmony import */ var _input_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input/module */ "./node_modules/element-angular/release/input/module.js");
/* harmony import */ var _input_number_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input-number/module */ "./node_modules/element-angular/release/input-number/module.js");
/* harmony import */ var _tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tag/module */ "./node_modules/element-angular/release/tag/module.js");
/* harmony import */ var _select_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./select/module */ "./node_modules/element-angular/release/select/module.js");
/* harmony import */ var _switch_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./switch/module */ "./node_modules/element-angular/release/switch/module.js");
/* harmony import */ var _rate_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rate/module */ "./node_modules/element-angular/release/rate/module.js");
/* harmony import */ var _progress_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./progress/module */ "./node_modules/element-angular/release/progress/module.js");
/* harmony import */ var _steps_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./steps/module */ "./node_modules/element-angular/release/steps/module.js");
/* harmony import */ var _loading_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loading/module */ "./node_modules/element-angular/release/loading/module.js");
/* harmony import */ var _message_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message/module */ "./node_modules/element-angular/release/message/module.js");
/* harmony import */ var _notification_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notification/module */ "./node_modules/element-angular/release/notification/module.js");
/* harmony import */ var _cascader_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cascader/module */ "./node_modules/element-angular/release/cascader/module.js");
/* harmony import */ var _badge_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./badge/module */ "./node_modules/element-angular/release/badge/module.js");
/* harmony import */ var _card_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./card/module */ "./node_modules/element-angular/release/card/module.js");
/* harmony import */ var _dropdown_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dropdown/module */ "./node_modules/element-angular/release/dropdown/module.js");
/* harmony import */ var _breadcrumb_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./breadcrumb/module */ "./node_modules/element-angular/release/breadcrumb/module.js");
/* harmony import */ var _date_picker_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./date-picker/module */ "./node_modules/element-angular/release/date-picker/module.js");
/* harmony import */ var _slider_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./slider/module */ "./node_modules/element-angular/release/slider/module.js");
/* harmony import */ var _dialog_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialog/module */ "./node_modules/element-angular/release/dialog/module.js");
/* harmony import */ var _carousel_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./carousel/module */ "./node_modules/element-angular/release/carousel/module.js");
/* harmony import */ var _collapse_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./collapse/module */ "./node_modules/element-angular/release/collapse/module.js");
/* harmony import */ var _alert_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./alert/module */ "./node_modules/element-angular/release/alert/module.js");
/* harmony import */ var _pagination_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pagination/module */ "./node_modules/element-angular/release/pagination/module.js");
/* harmony import */ var _upload_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./upload/module */ "./node_modules/element-angular/release/upload/module.js");
/* harmony import */ var _table_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./table/module */ "./node_modules/element-angular/release/table/module.js");
/* harmony import */ var _container_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./container/module */ "./node_modules/element-angular/release/container/module.js");
/* harmony import */ var _form_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./form/module */ "./node_modules/element-angular/release/form/module.js");
/* harmony import */ var _tree_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./tree/module */ "./node_modules/element-angular/release/tree/module.js");








































var /** @type {?} */ ElChildModules = {
    ElButtonsModule: _button_module__WEBPACK_IMPORTED_MODULE_4__["ElButtonsModule"], ElIconsModule: _icon_module__WEBPACK_IMPORTED_MODULE_6__["ElIconsModule"], ElRadiosModule: _radio_module__WEBPACK_IMPORTED_MODULE_7__["ElRadiosModule"], ElMenusModule: _menu_module__WEBPACK_IMPORTED_MODULE_8__["ElMenusModule"], ElTooltipModule: _tooltip_module__WEBPACK_IMPORTED_MODULE_9__["ElTooltipModule"], ElRowModule: _row_module__WEBPACK_IMPORTED_MODULE_10__["ElRowModule"],
    ElColModule: _col_module__WEBPACK_IMPORTED_MODULE_11__["ElColModule"], ElCheckboxsModule: _checkbox_module__WEBPACK_IMPORTED_MODULE_5__["ElCheckboxsModule"], ElInputsModule: _input_module__WEBPACK_IMPORTED_MODULE_12__["ElInputsModule"], ElInputNumberModule: _input_number_module__WEBPACK_IMPORTED_MODULE_13__["ElInputNumberModule"], ElTagsModule: _tag_module__WEBPACK_IMPORTED_MODULE_14__["ElTagsModule"], ElSelectModule: _select_module__WEBPACK_IMPORTED_MODULE_15__["ElSelectModule"],
    ElSwitchModule: _switch_module__WEBPACK_IMPORTED_MODULE_16__["ElSwitchModule"], ElRateModule: _rate_module__WEBPACK_IMPORTED_MODULE_17__["ElRateModule"], ElProgressModule: _progress_module__WEBPACK_IMPORTED_MODULE_18__["ElProgressModule"], ElStepsModule: _steps_module__WEBPACK_IMPORTED_MODULE_19__["ElStepsModule"], ElLoadingModule: _loading_module__WEBPACK_IMPORTED_MODULE_20__["ElLoadingModule"], ElMessagesModule: _message_module__WEBPACK_IMPORTED_MODULE_21__["ElMessagesModule"],
    ElSharedModule: _shared_module__WEBPACK_IMPORTED_MODULE_3__["ElSharedModule"], ElNotificationModule: _notification_module__WEBPACK_IMPORTED_MODULE_22__["ElNotificationModule"], ElCascaderModule: _cascader_module__WEBPACK_IMPORTED_MODULE_23__["ElCascaderModule"], ElBadgesModule: _badge_module__WEBPACK_IMPORTED_MODULE_24__["ElBadgesModule"], ElCardsModule: _card_module__WEBPACK_IMPORTED_MODULE_25__["ElCardsModule"], ElDropdownModule: _dropdown_module__WEBPACK_IMPORTED_MODULE_26__["ElDropdownModule"],
    ElBreadcrumbsModule: _breadcrumb_module__WEBPACK_IMPORTED_MODULE_27__["ElBreadcrumbsModule"], ElDateModule: _date_picker_module__WEBPACK_IMPORTED_MODULE_28__["ElDateModule"], ElSliderModule: _slider_module__WEBPACK_IMPORTED_MODULE_29__["ElSliderModule"], ElDialogModule: _dialog_module__WEBPACK_IMPORTED_MODULE_30__["ElDialogModule"], ElCarouselModule: _carousel_module__WEBPACK_IMPORTED_MODULE_31__["ElCarouselModule"], ElCollapseModule: _collapse_module__WEBPACK_IMPORTED_MODULE_32__["ElCollapseModule"],
    ElAlertModule: _alert_module__WEBPACK_IMPORTED_MODULE_33__["ElAlertModule"], ElPaginationModule: _pagination_module__WEBPACK_IMPORTED_MODULE_34__["ElPaginationModule"], ElUploadModule: _upload_module__WEBPACK_IMPORTED_MODULE_35__["ElUploadModule"], ElTableModule: _table_module__WEBPACK_IMPORTED_MODULE_36__["ElTableModule"], ElContainerModule: _container_module__WEBPACK_IMPORTED_MODULE_37__["ElContainerModule"], ElFormModule: _form_module__WEBPACK_IMPORTED_MODULE_38__["ElFormModule"],
    ElTreeModule: _tree_module__WEBPACK_IMPORTED_MODULE_39__["ElTreeModule"],
};
var /** @type {?} */ ELMODULES_GROUP = [
    _button_module__WEBPACK_IMPORTED_MODULE_4__["ElButtonsModule"], _icon_module__WEBPACK_IMPORTED_MODULE_6__["ElIconsModule"], _radio_module__WEBPACK_IMPORTED_MODULE_7__["ElRadiosModule"], _menu_module__WEBPACK_IMPORTED_MODULE_8__["ElMenusModule"], _tooltip_module__WEBPACK_IMPORTED_MODULE_9__["ElTooltipModule"], _row_module__WEBPACK_IMPORTED_MODULE_10__["ElRowModule"],
    _col_module__WEBPACK_IMPORTED_MODULE_11__["ElColModule"], _checkbox_module__WEBPACK_IMPORTED_MODULE_5__["ElCheckboxsModule"], _input_module__WEBPACK_IMPORTED_MODULE_12__["ElInputsModule"], _input_number_module__WEBPACK_IMPORTED_MODULE_13__["ElInputNumberModule"], _tag_module__WEBPACK_IMPORTED_MODULE_14__["ElTagsModule"], _select_module__WEBPACK_IMPORTED_MODULE_15__["ElSelectModule"],
    _switch_module__WEBPACK_IMPORTED_MODULE_16__["ElSwitchModule"], _rate_module__WEBPACK_IMPORTED_MODULE_17__["ElRateModule"], _progress_module__WEBPACK_IMPORTED_MODULE_18__["ElProgressModule"], _steps_module__WEBPACK_IMPORTED_MODULE_19__["ElStepsModule"], _loading_module__WEBPACK_IMPORTED_MODULE_20__["ElLoadingModule"], _message_module__WEBPACK_IMPORTED_MODULE_21__["ElMessagesModule"],
    _shared_module__WEBPACK_IMPORTED_MODULE_3__["ElSharedModule"], _notification_module__WEBPACK_IMPORTED_MODULE_22__["ElNotificationModule"], _cascader_module__WEBPACK_IMPORTED_MODULE_23__["ElCascaderModule"], _badge_module__WEBPACK_IMPORTED_MODULE_24__["ElBadgesModule"], _card_module__WEBPACK_IMPORTED_MODULE_25__["ElCardsModule"], _dropdown_module__WEBPACK_IMPORTED_MODULE_26__["ElDropdownModule"],
    _breadcrumb_module__WEBPACK_IMPORTED_MODULE_27__["ElBreadcrumbsModule"], _date_picker_module__WEBPACK_IMPORTED_MODULE_28__["ElDateModule"], _slider_module__WEBPACK_IMPORTED_MODULE_29__["ElSliderModule"], _dialog_module__WEBPACK_IMPORTED_MODULE_30__["ElDialogModule"], _carousel_module__WEBPACK_IMPORTED_MODULE_31__["ElCarouselModule"], _collapse_module__WEBPACK_IMPORTED_MODULE_32__["ElCollapseModule"],
    _alert_module__WEBPACK_IMPORTED_MODULE_33__["ElAlertModule"], _pagination_module__WEBPACK_IMPORTED_MODULE_34__["ElPaginationModule"], _upload_module__WEBPACK_IMPORTED_MODULE_35__["ElUploadModule"], _table_module__WEBPACK_IMPORTED_MODULE_36__["ElTableModule"], _container_module__WEBPACK_IMPORTED_MODULE_37__["ElContainerModule"], _form_module__WEBPACK_IMPORTED_MODULE_38__["ElFormModule"],
    _tree_module__WEBPACK_IMPORTED_MODULE_39__["ElTreeModule"],
];
var ElModule = /** @class */ (function () {
    function ElModule() {
    }
    /**
     * @return {?}
     */
    ElModule.forRoot = function () {
        return {
            ngModule: ElModule,
            providers: [],
        };
    };
    ElModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _button_module__WEBPACK_IMPORTED_MODULE_4__["ElButtonsModule"].forRoot(), _icon_module__WEBPACK_IMPORTED_MODULE_6__["ElIconsModule"].forRoot(), _radio_module__WEBPACK_IMPORTED_MODULE_7__["ElRadiosModule"].forRoot(), _menu_module__WEBPACK_IMPORTED_MODULE_8__["ElMenusModule"].forRoot(),
                        _tooltip_module__WEBPACK_IMPORTED_MODULE_9__["ElTooltipModule"].forRoot(), _row_module__WEBPACK_IMPORTED_MODULE_10__["ElRowModule"].forRoot(), _col_module__WEBPACK_IMPORTED_MODULE_11__["ElColModule"].forRoot(), _checkbox_module__WEBPACK_IMPORTED_MODULE_5__["ElCheckboxsModule"].forRoot(),
                        _input_module__WEBPACK_IMPORTED_MODULE_12__["ElInputsModule"].forRoot(), _input_number_module__WEBPACK_IMPORTED_MODULE_13__["ElInputNumberModule"].forRoot(), _tag_module__WEBPACK_IMPORTED_MODULE_14__["ElTagsModule"].forRoot(), _select_module__WEBPACK_IMPORTED_MODULE_15__["ElSelectModule"].forRoot(),
                        _switch_module__WEBPACK_IMPORTED_MODULE_16__["ElSwitchModule"].forRoot(), _rate_module__WEBPACK_IMPORTED_MODULE_17__["ElRateModule"].forRoot(), _progress_module__WEBPACK_IMPORTED_MODULE_18__["ElProgressModule"].forRoot(), _steps_module__WEBPACK_IMPORTED_MODULE_19__["ElStepsModule"].forRoot(),
                        _loading_module__WEBPACK_IMPORTED_MODULE_20__["ElLoadingModule"].forRoot(), _message_module__WEBPACK_IMPORTED_MODULE_21__["ElMessagesModule"].forRoot(), _shared_module__WEBPACK_IMPORTED_MODULE_3__["ElSharedModule"].forRoot(), _notification_module__WEBPACK_IMPORTED_MODULE_22__["ElNotificationModule"].forRoot(),
                        _cascader_module__WEBPACK_IMPORTED_MODULE_23__["ElCascaderModule"].forRoot(), _badge_module__WEBPACK_IMPORTED_MODULE_24__["ElBadgesModule"].forRoot(), _card_module__WEBPACK_IMPORTED_MODULE_25__["ElCardsModule"].forRoot(), _dropdown_module__WEBPACK_IMPORTED_MODULE_26__["ElDropdownModule"].forRoot(),
                        _breadcrumb_module__WEBPACK_IMPORTED_MODULE_27__["ElBreadcrumbsModule"].forRoot(), _date_picker_module__WEBPACK_IMPORTED_MODULE_28__["ElDateModule"].forRoot(), _slider_module__WEBPACK_IMPORTED_MODULE_29__["ElSliderModule"].forRoot(), _dialog_module__WEBPACK_IMPORTED_MODULE_30__["ElDialogModule"].forRoot(),
                        _carousel_module__WEBPACK_IMPORTED_MODULE_31__["ElCarouselModule"].forRoot(), _collapse_module__WEBPACK_IMPORTED_MODULE_32__["ElCollapseModule"].forRoot(), _alert_module__WEBPACK_IMPORTED_MODULE_33__["ElAlertModule"].forRoot(), _pagination_module__WEBPACK_IMPORTED_MODULE_34__["ElPaginationModule"].forRoot(),
                        _upload_module__WEBPACK_IMPORTED_MODULE_35__["ElUploadModule"].forRoot(), _table_module__WEBPACK_IMPORTED_MODULE_36__["ElTableModule"].forRoot(), _container_module__WEBPACK_IMPORTED_MODULE_37__["ElContainerModule"].forRoot(), _form_module__WEBPACK_IMPORTED_MODULE_38__["ElFormModule"].forRoot(),
                        _tree_module__WEBPACK_IMPORTED_MODULE_39__["ElTreeModule"].forRoot(),
                    ],
                    exports: ELMODULES_GROUP,
                },] },
    ];
    /**
     * @nocollapse
     */
    ElModule.ctorParameters = function () { return []; };
    return ElModule;
}());
function ElModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElModule.ctorParameters;
}

//# sourceMappingURL=element-angular.module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/form/form-item.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-angular/release/form/form-item.js ***!
  \****************************************************************/
/*! exports provided: ElFormItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElFormItem", function() { return ElFormItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./node_modules/element-angular/release/form/form.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ElFormItem = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} sanitizer
     */
    function ElFormItem(root, sanitizer) {
        this.root = root;
        this.sanitizer = sanitizer;
        this.required = false;
        this.showMessage = true;
        this.statusSubscriber = [];
    }
    /**
     * @return {?}
     */
    ElFormItem.prototype.showMessageEl = function () {
        if (this.status !== 'error')
            return false;
        return this.error && this.showMessage && this.root.showMessage;
    };
    /**
     * @return {?}
     */
    ElFormItem.prototype.isInlineMessage = function () {
        var /** @type {?} */ notDefault = typeof this.inlineMessage === 'boolean';
        return notDefault ? this.inlineMessage : this.root.inlineMessage;
    };
    /**
     * @return {?}
     */
    ElFormItem.prototype.makeSize = function () {
        var /** @type {?} */ appointed = this.size || this.root.size || '';
        return appointed ? " el-form-item--" + appointed + " " : '';
    };
    /**
     * @return {?}
     */
    ElFormItem.prototype.makeLabelStyle = function () {
        var /** @type {?} */ width = this.labelWidth || this.root.labelWidth || null;
        var /** @type {?} */ styles = width && this.root.labelPosition !== 'top' ? "width: " + width + ";" : '';
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    ElFormItem.prototype.makeContentStyle = function () {
        var /** @type {?} */ skipStyle = (this.root.labelPosition === 'top' || this.root.inline)
            || (!this.label && !this.root.labelWidth);
        if (skipStyle)
            return this.sanitizer.bypassSecurityTrustStyle('');
        var /** @type {?} */ width = this.labelWidth || this.root.labelWidth;
        var /** @type {?} */ styles = "margin-left: " + width + ";";
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElFormItem.prototype.ngOnChanges = function (changes) {
        if (!this.root.showIcon)
            return;
        if (!changes || !changes.status)
            return;
        this.statusSubscriber.forEach(function (sub) {
            sub(changes.status.currentValue);
        });
    };
    ElFormItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-form-item',
                    template: "\n  <div [class]=\"'el-form-item ' + makeSize()\"\n    [class.el-form-item--feedback]=\"root.showIcon\"\n    [class.is-error]=\"status === 'error'\"\n    [class.is-success]=\"status === 'success'\"\n    [class.is-validating]=\"status === 'validating'\"\n    [class.is-required]=\"required\">\n    <label class=\"el-form-item__label\" [style]=\"makeLabelStyle()\" *ngIf=\"label\">\n      {{label}}\n    </label>\n    <div class=\"el-form-item__content\" [style]=\"makeContentStyle()\">\n      <ng-content></ng-content>\n      <div *ngIf=\"showMessageEl\" class=\"el-form-item__error\"\n        [class.el-form-item__error--inline]=\"isInlineMessage()\">\n          {{error}}\n        </div>\n    </div>\n  </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElFormItem.ctorParameters = function () { return [
        { type: _form__WEBPACK_IMPORTED_MODULE_1__["ElForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], },
    ]; };
    ElFormItem.propDecorators = {
        'status': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'error': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'required': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'labelWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['label-width',] },],
        'showMessage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-message',] },],
        'inlineMessage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['inline-message',] },],
    };
    return ElFormItem;
}());

function ElFormItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElFormItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElFormItem.ctorParameters;
    /** @type {?} */
    ElFormItem.propDecorators;
    /** @type {?} */
    ElFormItem.prototype.status;
    /** @type {?} */
    ElFormItem.prototype.error;
    /** @type {?} */
    ElFormItem.prototype.label;
    /** @type {?} */
    ElFormItem.prototype.size;
    /** @type {?} */
    ElFormItem.prototype.required;
    /** @type {?} */
    ElFormItem.prototype.labelWidth;
    /** @type {?} */
    ElFormItem.prototype.showMessage;
    /** @type {?} */
    ElFormItem.prototype.inlineMessage;
    /** @type {?} */
    ElFormItem.prototype.statusSubscriber;
    /** @type {?} */
    ElFormItem.prototype.root;
    /** @type {?} */
    ElFormItem.prototype.sanitizer;
}
//# sourceMappingURL=form-item.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/form/form.js":
/*!***********************************************************!*\
  !*** ./node_modules/element-angular/release/form/form.js ***!
  \***********************************************************/
/*! exports provided: ElForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElForm", function() { return ElForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.props */ "./node_modules/element-angular/release/form/form.props.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ElForm = /** @class */ (function (_super) {
    __extends(ElForm, _super);
    function ElForm() {
        return _super.call(this) || this;
    }
    ElForm.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-form',
                    template: "\n    <form [class]=\"'el-form ' + (labelPosition ? 'el-form--label-' + labelPosition : '')\n      + (inline ? ' el-form--inline' : '')\">\n     <ng-content></ng-content>\n    </form>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElForm.ctorParameters = function () { return []; };
    return ElForm;
}(_form_props__WEBPACK_IMPORTED_MODULE_1__["ElFormProps"]));

function ElForm_tsickle_Closure_declarations() {
    /** @type {?} */
    ElForm.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElForm.ctorParameters;
}
//# sourceMappingURL=form.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/form/form.props.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/form/form.props.js ***!
  \*****************************************************************/
/*! exports provided: ElFormProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElFormProps", function() { return ElFormProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElFormProps = /** @class */ (function () {
    function ElFormProps() {
        this.inline = false;
        this.showIcon = false;
        this.showMessage = false;
        this.inlineMessage = false;
        // right / left / top
        this.labelPosition = 'right';
    }
    ElFormProps.propDecorators = {
        'inline': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showIcon': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-icon',] },],
        'showMessage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-message',] },],
        'inlineMessage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['inline-message',] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['size',] },],
        'labelPosition': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['label-position',] },],
        'labelWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['label-width',] },],
        'labelSuffix': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['label-suffix',] },],
    };
    return ElFormProps;
}());

function ElFormProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElFormProps.propDecorators;
    /** @type {?} */
    ElFormProps.prototype.inline;
    /** @type {?} */
    ElFormProps.prototype.showIcon;
    /** @type {?} */
    ElFormProps.prototype.showMessage;
    /** @type {?} */
    ElFormProps.prototype.inlineMessage;
    /** @type {?} */
    ElFormProps.prototype.size;
    /** @type {?} */
    ElFormProps.prototype.labelPosition;
    /** @type {?} */
    ElFormProps.prototype.labelWidth;
    /** @type {?} */
    ElFormProps.prototype.labelSuffix;
}
//# sourceMappingURL=form.props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/form/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/form/module.js ***!
  \*************************************************************/
/*! exports provided: ElFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElFormModule", function() { return ElFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/module */ "./node_modules/element-angular/release/shared/module.js");
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/module */ "./node_modules/element-angular/release/button/module.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./node_modules/element-angular/release/form/form.js");
/* harmony import */ var _form_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-item */ "./node_modules/element-angular/release/form/form-item.js");






var ElFormModule = /** @class */ (function () {
    function ElFormModule() {
    }
    /**
     * @return {?}
     */
    ElFormModule.forRoot = function () {
        return { ngModule: ElFormModule, providers: [] };
    };
    ElFormModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_form__WEBPACK_IMPORTED_MODULE_4__["ElForm"], _form_item__WEBPACK_IMPORTED_MODULE_5__["ElFormItem"]],
                    exports: [_form__WEBPACK_IMPORTED_MODULE_4__["ElForm"], _form_item__WEBPACK_IMPORTED_MODULE_5__["ElFormItem"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _button_module__WEBPACK_IMPORTED_MODULE_3__["ElButtonsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["ElSharedModule"]],
                    entryComponents: [_form__WEBPACK_IMPORTED_MODULE_4__["ElForm"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElFormModule.ctorParameters = function () { return []; };
    return ElFormModule;
}());

function ElFormModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElFormModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElFormModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/icon/icon.js":
/*!***********************************************************!*\
  !*** ./node_modules/element-angular/release/icon/icon.js ***!
  \***********************************************************/
/*! exports provided: ElIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElIcon", function() { return ElIcon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElIcon = /** @class */ (function () {
    function ElIcon() {
    }
    ElIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-icon',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <i [class]=\"iconName ? 'el-icon-' + iconName : ''\"></i>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElIcon.ctorParameters = function () { return []; };
    ElIcon.propDecorators = {
        'iconName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['name',] },],
    };
    return ElIcon;
}());

function ElIcon_tsickle_Closure_declarations() {
    /** @type {?} */
    ElIcon.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElIcon.ctorParameters;
    /** @type {?} */
    ElIcon.propDecorators;
    /** @type {?} */
    ElIcon.prototype.iconName;
}
//# sourceMappingURL=icon.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/icon/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/icon/module.js ***!
  \*************************************************************/
/*! exports provided: ElIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElIconsModule", function() { return ElIconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./node_modules/element-angular/release/icon/icon.js");



var ElIconsModule = /** @class */ (function () {
    function ElIconsModule() {
    }
    /**
     * @return {?}
     */
    ElIconsModule.forRoot = function () {
        return { ngModule: ElIconsModule, providers: [] };
    };
    ElIconsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_icon__WEBPACK_IMPORTED_MODULE_2__["ElIcon"]],
                    exports: [_icon__WEBPACK_IMPORTED_MODULE_2__["ElIcon"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_icon__WEBPACK_IMPORTED_MODULE_2__["ElIcon"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElIconsModule.ctorParameters = function () { return []; };
    return ElIconsModule;
}());

function ElIconsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElIconsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElIconsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/input-number/input-number-props.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/element-angular/release/input-number/input-number-props.js ***!
  \*********************************************************************************/
/*! exports provided: ElInputNumberPoprs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElInputNumberPoprs", function() { return ElInputNumberPoprs; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElInputNumberPoprs = /** @class */ (function () {
    function ElInputNumberPoprs() {
        this.elDisabled = false;
        this.min = 0;
        this.max = Number.MAX_SAFE_INTEGER;
        this.step = 1;
        this.controls = true;
        this.debounce = 300;
        // bind value
        this.model = '';
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ElInputNumberPoprs.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    ElInputNumberPoprs.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'min': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'step': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'controls': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'debounce': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElInputNumberPoprs;
}());

function ElInputNumberPoprs_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInputNumberPoprs.propDecorators;
    /** @type {?} */
    ElInputNumberPoprs.prototype.elDisabled;
    /** @type {?} */
    ElInputNumberPoprs.prototype.min;
    /** @type {?} */
    ElInputNumberPoprs.prototype.max;
    /** @type {?} */
    ElInputNumberPoprs.prototype.step;
    /** @type {?} */
    ElInputNumberPoprs.prototype.size;
    /** @type {?} */
    ElInputNumberPoprs.prototype.controls;
    /** @type {?} */
    ElInputNumberPoprs.prototype.debounce;
    /** @type {?} */
    ElInputNumberPoprs.prototype.model;
    /** @type {?} */
    ElInputNumberPoprs.prototype.modelChange;
}
//# sourceMappingURL=input-number-props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/input-number/input-number.js":
/*!***************************************************************************!*\
  !*** ./node_modules/element-angular/release/input-number/input-number.js ***!
  \***************************************************************************/
/*! exports provided: ElInputNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElInputNumber", function() { return ElInputNumber; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_number_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-number-props */ "./node_modules/element-angular/release/input-number/input-number-props.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ElInputNumber = /** @class */ (function (_super) {
    __extends(ElInputNumber, _super);
    function ElInputNumber() {
        var _this = _super.call(this) || this;
        _this.minDisabled = false;
        _this.maxDisabled = false;
        _this.controlChange = function () { };
        _this.controlTouch = function () { };
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ElInputNumber.prototype.changeHandle = function (value) {
        var /** @type {?} */ oldValue = this.model;
        this.model = value;
        if (Number.isNaN(+this.model)) {
            this.model = oldValue;
            return;
        }
        this.maxDisabled = value > this.max;
        this.minDisabled = value < this.min;
        if (this.maxDisabled)
            return this.dispatchModel(this.max);
        if (this.minDisabled)
            return this.dispatchModel(this.min);
        this.modelChange.emit(value);
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    ElInputNumber.prototype.dispatchModel = function (limit) {
        var _this = this;
        var /** @type {?} */ timer = setTimeout(function () {
            _this.model = limit;
            _this.modelChange.emit(limit);
            clearTimeout(timer);
        }, this.debounce);
    };
    /**
     * @param {?=} calcType
     * @return {?}
     */
    ElInputNumber.prototype.decreaseHandle = function (calcType) {
        if (calcType === void 0) { calcType = true; }
        if (this.elDisabled)
            return;
        var /** @type {?} */ step = calcType ? this.step : 0 - this.step;
        var /** @type {?} */ val = Number(this.model) + step;
        if (Number.isNaN(val))
            return;
        this.maxDisabled = val > this.max;
        this.minDisabled = val < this.min;
        if (!this.maxDisabled && !this.minDisabled) {
            this.model = val;
            this.modelChange.emit(this.model);
            this.controlChange(this.model);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElInputNumber.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElInputNumber.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElInputNumber.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElInputNumber.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-input-number',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElInputNumber; }),
                            multi: true
                        }],
                    styles: ["\n    .el-input-spin-button::-webkit-inner-spin-button { visibility: hidden; -webkit-appearance: none; }\n    .el-input-spin-button { -moz-appearance: textfield; }\n  "],
                    template: "\n    <div [class]=\"'el-input-number' + (size ? ' el-input-number--' + size : '')\"\n      [class.is-disabled]=\"elDisabled\" [class.is-without-controls]=\"!controls\">\n      <span *ngIf=\"controls\" class=\"el-input-number__decrease\" role=\"button\"\n        [class.is-disabled]=\"minDisabled\" (click)=\"decreaseHandle(false)\">\n        <i class=\"el-icon-minus\"></i>\n      </span>\n      <span *ngIf=\"controls\" class=\"el-input-number__increase\" role=\"button\"\n        [class.is-disabled]=\"maxDisabled\" (click)=\"decreaseHandle(true)\">\n        <i class=\"el-icon-plus\"></i>\n      </span>\n\n      <div [class]=\"'el-input ' + (size ? ' el-input--' + size : '')\" [class.is-disabled]=\"elDisabled\">\n        <input class=\"el-input__inner el-input-spin-button  \" autocomplete=\"off\" role=\"spinbutton\"\n          [attr.max]=\"max\" [attr.min]=\"min\" [attr.aria-valuemax]=\"max\" [attr.aria-valuemin]=\"min\"\n          [disabled]=\"elDisabled\" [value]=\"model\" [ngModel]=\"model\" (ngModelChange)=\"changeHandle($event)\"\n          type=\"number\" rows=\"2\" aria-valuenow=\"1\" [attr.aria-disabled]=\"elDisabled\">\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElInputNumber.ctorParameters = function () { return []; };
    return ElInputNumber;
}(_input_number_props__WEBPACK_IMPORTED_MODULE_1__["ElInputNumberPoprs"]));

function ElInputNumber_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInputNumber.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElInputNumber.ctorParameters;
    /** @type {?} */
    ElInputNumber.prototype.minDisabled;
    /** @type {?} */
    ElInputNumber.prototype.maxDisabled;
    /** @type {?} */
    ElInputNumber.prototype.controlChange;
    /** @type {?} */
    ElInputNumber.prototype.controlTouch;
}
//# sourceMappingURL=input-number.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/input-number/module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/input-number/module.js ***!
  \*********************************************************************/
/*! exports provided: ElInputNumberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElInputNumberModule", function() { return ElInputNumberModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-number */ "./node_modules/element-angular/release/input-number/input-number.js");




var ElInputNumberModule = /** @class */ (function () {
    function ElInputNumberModule() {
    }
    /**
     * @return {?}
     */
    ElInputNumberModule.forRoot = function () {
        return { ngModule: ElInputNumberModule, providers: [] };
    };
    ElInputNumberModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_input_number__WEBPACK_IMPORTED_MODULE_3__["ElInputNumber"]],
                    exports: [_input_number__WEBPACK_IMPORTED_MODULE_3__["ElInputNumber"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    entryComponents: [_input_number__WEBPACK_IMPORTED_MODULE_3__["ElInputNumber"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElInputNumberModule.ctorParameters = function () { return []; };
    return ElInputNumberModule;
}());

function ElInputNumberModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInputNumberModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElInputNumberModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/input/help.js":
/*!************************************************************!*\
  !*** ./node_modules/element-angular/release/input/help.js ***!
  \************************************************************/
/*! exports provided: getTextareaHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextareaHeight", function() { return getTextareaHeight; });
/**
 *  initial file from Element
 *  see: github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js
 *
 */
var /** @type {?} */ hiddenTextarea;
var /** @type {?} */ HIDDEN_STYLE = "\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n";
var /** @type {?} */ CONTEXT_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
];
var /** @type {?} */ calculateNodeStyling = function (targetElement) {
    var /** @type {?} */ style = window.getComputedStyle(targetElement);
    var /** @type {?} */ boxSizing = style.getPropertyValue('box-sizing');
    var /** @type {?} */ paddingSize = (parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top')));
    var /** @type {?} */ borderSize = (parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width')));
    var /** @type {?} */ contextStyle = CONTEXT_STYLE
        .map(function (name) { return name + ":" + style.getPropertyValue(name); })
        .join(';');
    return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
};
var /** @type {?} */ getTextareaHeight = function (targetElement, minRows, maxRows) {
    if (minRows === void 0) { minRows = null; }
    if (maxRows === void 0) { maxRows = null; }
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    var _a = calculateNodeStyling(targetElement), paddingSize = _a.paddingSize, borderSize = _a.borderSize, boxSizing = _a.boxSizing, contextStyle = _a.contextStyle;
    hiddenTextarea.setAttribute('style', contextStyle + ";" + HIDDEN_STYLE);
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
    var /** @type {?} */ height = hiddenTextarea.scrollHeight;
    if (boxSizing === 'border-box') {
        height += borderSize;
    }
    else if (boxSizing === 'content-box') {
        height -= paddingSize;
    }
    hiddenTextarea.value = '';
    var /** @type {?} */ singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
        var /** @type {?} */ minHeight = singleRowHeight * minRows;
        if (boxSizing === 'border-box') {
            minHeight += paddingSize + borderSize;
        }
        height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
        var /** @type {?} */ maxHeight = singleRowHeight * maxRows;
        if (boxSizing === 'border-box') {
            maxHeight += paddingSize + borderSize;
        }
        height = Math.min(maxHeight, height);
    }
    return height + 'px';
};

//# sourceMappingURL=help.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/input/input-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/input/input-props.js ***!
  \*******************************************************************/
/*! exports provided: ElInputPoprs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElInputPoprs", function() { return ElInputPoprs; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElInputPoprs = /** @class */ (function () {
    function ElInputPoprs() {
        this.type = 'text'; // input type. enum: text/textarea
        this.value = ''; // init value
        this.placeholder = '';
        this.rows = 2; // only type === 'textarea'
        // native attrs
        this.autoComplete = 'off'; // only type === 'text'
        this.nativeType = 'text';
        this.readonly = false;
        // @Input() step: any
        this.autofocus = false;
        // @Input() form: string
        // bind value
        this.model = '';
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // hook
        this.iconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // handle on the input icon
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iconMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iconMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iconMousedown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iconMouseup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elDisabled = false;
    }
    Object.defineProperty(ElInputPoprs.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    ElInputPoprs.propDecorators = {
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxlength': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'minlength': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'placeholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'rows': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'resize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'icon': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'iconClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autosize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoComplete': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['auto-complete',] },],
        'name': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nativeType': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['native-type',] },],
        'readonly': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autofocus': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'parentClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'iconClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['icon-click',] },],
        'focus': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'blur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'iconMouseEnter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['icon-mouseenter',] },],
        'iconMouseLeave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['icon-mouseleave',] },],
        'iconMousedown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['icon-mousedown',] },],
        'iconMouseup': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['icon-mouseup',] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElInputPoprs;
}());

function ElInputPoprs_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInputPoprs.propDecorators;
    /** @type {?} */
    ElInputPoprs.prototype.type;
    /** @type {?} */
    ElInputPoprs.prototype.value;
    /** @type {?} */
    ElInputPoprs.prototype.maxlength;
    /** @type {?} */
    ElInputPoprs.prototype.minlength;
    /** @type {?} */
    ElInputPoprs.prototype.placeholder;
    /** @type {?} */
    ElInputPoprs.prototype.size;
    /** @type {?} */
    ElInputPoprs.prototype.rows;
    /** @type {?} */
    ElInputPoprs.prototype.resize;
    /** @type {?} */
    ElInputPoprs.prototype.icon;
    /** @type {?} */
    ElInputPoprs.prototype.iconClass;
    /** @type {?} */
    ElInputPoprs.prototype.autosize;
    /** @type {?} */
    ElInputPoprs.prototype.autoComplete;
    /** @type {?} */
    ElInputPoprs.prototype.name;
    /** @type {?} */
    ElInputPoprs.prototype.nativeType;
    /** @type {?} */
    ElInputPoprs.prototype.readonly;
    /** @type {?} */
    ElInputPoprs.prototype.autofocus;
    /** @type {?} */
    ElInputPoprs.prototype.parentClass;
    /** @type {?} */
    ElInputPoprs.prototype.model;
    /** @type {?} */
    ElInputPoprs.prototype.modelChange;
    /** @type {?} */
    ElInputPoprs.prototype.iconClick;
    /** @type {?} */
    ElInputPoprs.prototype.focus;
    /** @type {?} */
    ElInputPoprs.prototype.blur;
    /** @type {?} */
    ElInputPoprs.prototype.iconMouseEnter;
    /** @type {?} */
    ElInputPoprs.prototype.iconMouseLeave;
    /** @type {?} */
    ElInputPoprs.prototype.iconMousedown;
    /** @type {?} */
    ElInputPoprs.prototype.iconMouseup;
    /** @type {?} */
    ElInputPoprs.prototype.elDisabled;
}
//# sourceMappingURL=input-props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/input/input.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/input/input.js ***!
  \*************************************************************/
/*! exports provided: ElInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElInput", function() { return ElInput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _input_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-props */ "./node_modules/element-angular/release/input/input-props.js");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help */ "./node_modules/element-angular/release/input/help.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");
/* harmony import */ var _form_form_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/form-item */ "./node_modules/element-angular/release/form/form-item.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var ElInput = /** @class */ (function (_super) {
    __extends(ElInput, _super);
    /**
     * @param {?} sanitizer
     * @param {?} el
     * @param {?} form
     */
    function ElInput(sanitizer, el, form) {
        var _this = _super.call(this) || this;
        _this.sanitizer = sanitizer;
        _this.el = el;
        _this.form = form;
        _this.controlChange = function () { };
        _this.controlTouch = function () { };
        return _this;
    }
    /**
     * @return {?}
     */
    ElInput.prototype.makeTextareaStyles = function () {
        if (!this.autosize || this.type !== 'textarea')
            return;
        var /** @type {?} */ height = Object(_help__WEBPACK_IMPORTED_MODULE_3__["getTextareaHeight"])(this.textarea.nativeElement, this.autosize.minRows, this.autosize.maxRows);
        var /** @type {?} */ styles = "resize: " + this.resize + "; height: " + height + ";";
        this.textareaStyles = this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ElInput.prototype.handleInput = function (val) {
        var _this = this;
        this.model = val;
        this.modelChange.emit(val);
        this.controlChange(val);
        var /** @type {?} */ timer = setTimeout(function () {
            _this.makeTextareaStyles();
            clearTimeout(timer);
        }, 0);
    };
    /**
     * @return {?}
     */
    ElInput.prototype.showPointer = function () {
        var /** @type {?} */ clickEvent = !!(this.iconClick.observers && this.iconClick.observers.length);
        var /** @type {?} */ mouseEvent = !!(this.iconMousedown.observers && this.iconMousedown.observers.length);
        return clickEvent || mouseEvent;
    };
    /**
     * @return {?}
     */
    ElInput.prototype.ngOnInit = function () {
        var _this = this;
        // auto follow form status
        var /** @type {?} */ parentIsForm = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_5__["isParentTag"])(this.el.nativeElement, 'el-form-item');
        if (parentIsForm) {
            var /** @type {?} */ iconStatus_1 = {
                error: 'circle-close', success: 'circle-check', validating: 'circle-validating',
            };
            this.iconClass = 'el-input__validateIcon';
            this.form.statusSubscriber.push(function (status) {
                _this.icon = iconStatus_1[status] || '';
            });
        }
        if (this.value && !this.model) {
            this.model = this.value;
        }
    };
    /**
     * @return {?}
     */
    ElInput.prototype.ngAfterViewInit = function () {
        var _this = this;
        // no content required
        if (this.type === 'textarea') {
            return setTimeout(function () {
                _this.makeTextareaStyles();
            }, 0);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElInput.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElInput.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElInput.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-input',
                    styles: ["\n    .icon-disabled { cursor: not-allowed; } .icon-disabled:before { cursor: not-allowed; }\n    .icon-pointer { cursor: pointer; }"],
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElInput; }),
                            multi: true
                        }],
                    template: "\n    <div [class]=\"(type === 'text' ? 'el-input' : 'el-textarea') +\n    (size ? ' el-input--' + size : '') + ' ' + parentClass\"\n      [class.is-disabled]=\"elDisabled\"\n      [class.el-input-group]=\"prepend || append\"\n      [class.el-input-group--append]=\"append\"\n      [class.el-input-group--prepend]=\"prepend\">\n      <ng-container *ngIf=\"type === 'text'\">\n        \n        <div class=\"el-input-group__prepend\" *ngIf=\"prepend\">\n          <ng-template [ngTemplateOutlet]=\"prepend\">\n          </ng-template>\n        </div>\n        \n        <span class=\"el-input__suffix\" *ngIf=\"icon\" (click)=\"iconClick.emit($event)\"\n          (mouseenter)=\"iconMouseEnter.emit($event)\" (mouseleave)=\"iconMouseLeave.emit($event)\"\n          (mousedown)=\"iconMousedown.emit($event)\" (mouseup)=\"iconMouseup.emit($event)\"\n          [class.icon-pointer]=\"showPointer()\"\n          [class.icon-disabled]=\"elDisabled\">\n          <span class=\"el-input__suffix-inner\">\n            <i [class]=\"'el-input__icon ' + ('el-icon-' + icon) + (iconClick ? ' is-clickable ' : ' ')\n              + (iconClass ? iconClass : '')\"\n              [attr.disabled]=\"elDisabled\"\n              [class.icon-disabled]=\"elDisabled\"\n              *ngIf=\"icon\"></i>\n          </span>\n        </span>\n        <input class=\"el-input__inner\"\n          [autocomplete]=\"autoComplete\" [value]=\"value\" [name]=\"name\" [type]=\"nativeType\"\n          [placeholder]=\"placeholder\" [autofocus]=\"autofocus\"\n          [disabled]=\"elDisabled\" [readonly]=\"readonly\"\n          [maxlength]=\"maxlength\" [minlength]=\"minlength\"\n          [ngModel]=\"model\" (ngModelChange)=\"handleInput($event)\"\n          (focus)=\"focus.emit($event)\" (blur)=\"blur.emit($event)\">\n        <i *ngIf=\"validating\" class=\"el-input__icon el-icon-loading\"></i>\n        \n        <div class=\"el-input-group__append\" *ngIf=\"append\">\n          <ng-template [ngTemplateOutlet]=\"append\">\n          </ng-template>\n        </div>\n      </ng-container>\n      \n      <ng-container *ngIf=\"type === 'textarea'\">\n        <textarea class=\"el-textarea__inner\" #textarea\n          [style]=\"textareaStyles\"\n          [value]=\"value\" [name]=\"name\"\n          [placeholder]=\"placeholder\" [autofocus]=\"autofocus\"\n          [disabled]=\"elDisabled\" [readonly]=\"readonly\"\n          [maxlength]=\"maxlength\" [minlength]=\"minlength\"\n          [ngModel]=\"model\" (input)=\"handleInput($event.target.value)\"\n          (focus)=\"focus.emit($event)\" (blur)=\"blur.emit($event)\"></textarea>\n      </ng-container>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElInput.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _form_form_item__WEBPACK_IMPORTED_MODULE_6__["ElFormItem"], },
    ]; };
    ElInput.propDecorators = {
        'prepend': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['prepend',] },],
        'append': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['append',] },],
        'textarea': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['textarea',] },],
    };
    return ElInput;
}(_input_props__WEBPACK_IMPORTED_MODULE_2__["ElInputPoprs"]));

function ElInput_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInput.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElInput.ctorParameters;
    /** @type {?} */
    ElInput.propDecorators;
    /** @type {?} */
    ElInput.prototype.prepend;
    /** @type {?} */
    ElInput.prototype.append;
    /** @type {?} */
    ElInput.prototype.textarea;
    /** @type {?} */
    ElInput.prototype.textareaStyles;
    /** @type {?} */
    ElInput.prototype.controlChange;
    /** @type {?} */
    ElInput.prototype.controlTouch;
    /** @type {?} */
    ElInput.prototype.sanitizer;
    /** @type {?} */
    ElInput.prototype.el;
    /** @type {?} */
    ElInput.prototype.form;
}
//# sourceMappingURL=input.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/input/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/element-angular/release/input/module.js ***!
  \**************************************************************/
/*! exports provided: ElInputsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElInputsModule", function() { return ElInputsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./node_modules/element-angular/release/input/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_form_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/form-item */ "./node_modules/element-angular/release/form/form-item.js");





var ElInputsModule = /** @class */ (function () {
    function ElInputsModule() {
    }
    /**
     * @return {?}
     */
    ElInputsModule.forRoot = function () {
        return { ngModule: ElInputsModule, providers: [_form_form_item__WEBPACK_IMPORTED_MODULE_4__["ElFormItem"]] };
    };
    ElInputsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_input__WEBPACK_IMPORTED_MODULE_2__["ElInput"]],
                    exports: [_input__WEBPACK_IMPORTED_MODULE_2__["ElInput"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
                    entryComponents: [_input__WEBPACK_IMPORTED_MODULE_2__["ElInput"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElInputsModule.ctorParameters = function () { return []; };
    return ElInputsModule;
}());

function ElInputsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInputsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElInputsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/loading/loading.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/element-angular/release/loading/loading.directive.js ***!
  \***************************************************************************/
/*! exports provided: ElLoadingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElLoadingDirective", function() { return ElLoadingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");


var ElLoadingDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} window
     */
    function ElLoadingDirective(el, renderer, document, window) {
        this.el = el;
        this.renderer = renderer;
        this.document = document;
        this.window = window;
        this.lock = false; // ban scroll on loading active
        this.fullScreen = false;
        this.elLoadingTop = '50%';
        this.visible = false;
    }
    Object.defineProperty(ElLoadingDirective.prototype, "showLoading", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            this.visible = val;
            if (!this.cacheElement)
                return;
            this.cacheElement.innerHTML = this.makeHtml();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} status
     * @return {?}
     */
    ElLoadingDirective.prototype.toggleLock = function (status) {
        if (status === void 0) { status = false; }
        if (!this.lock)
            return;
        var /** @type {?} */ nextValue = status ? 'hidden' : this.cacheOverflow;
        this.renderer.setStyle(this.document.body, 'overflow', nextValue);
    };
    /**
     * @return {?}
     */
    ElLoadingDirective.prototype.makeHtml = function () {
        this.lock && this.toggleLock(this.visible);
        return "\n      <div class=\"el-loading-mask " + this.customClass + " " + (this.fullScreen ? ' is-fullscreen' : '') + "\"\n        style=\"display: " + (this.visible ? 'block' : 'none') + "\">\n        <div class=\"el-loading-spinner\" style=\"top: " + this.elLoadingTop + "\">\n          <svg class=\"circular\" viewBox=\"25 25 50 50\">\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\"/>\n          </svg>\n          <p class=\"el-loading-text\" style=\"display: " + (this.text ? 'block' : 'none') + "\">\n            " + this.text + "\n          </p>\n        </div>\n      </div>\n    ";
    };
    /**
     * @return {?}
     */
    ElLoadingDirective.prototype.ngOnInit = function () {
        // save old overflow
        if (this.lock) {
            this.cacheOverflow = this.window.getComputedStyle(this.document.body).overflow;
        }
        this.cacheElement = this.renderer.createElement('div');
        this.cacheElement.innerHTML = this.makeHtml();
        var /** @type {?} */ parentElement = this.fullScreen ? this.document.body : this.el.nativeElement;
        if (!this.fullScreen) {
            this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
        }
        this.renderer.appendChild(parentElement, this.cacheElement);
    };
    ElLoadingDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-loading]',
                },] },
    ];
    /**
     * @nocollapse
     */
    ElLoadingDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_1__["DocumentWrapper"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_1__["WindowWrapper"], },
    ]; };
    ElLoadingDirective.propDecorators = {
        'text': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'lock': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'customClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['custom-class',] },],
        'fullScreen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['full-screen',] },],
        'elLoadingTop': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['el-loading-top',] },],
        'showLoading': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['el-loading',] },],
    };
    return ElLoadingDirective;
}());

function ElLoadingDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElLoadingDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElLoadingDirective.ctorParameters;
    /** @type {?} */
    ElLoadingDirective.propDecorators;
    /** @type {?} */
    ElLoadingDirective.prototype.text;
    /** @type {?} */
    ElLoadingDirective.prototype.lock;
    /** @type {?} */
    ElLoadingDirective.prototype.customClass;
    /** @type {?} */
    ElLoadingDirective.prototype.fullScreen;
    /** @type {?} */
    ElLoadingDirective.prototype.elLoadingTop;
    /** @type {?} */
    ElLoadingDirective.prototype.cacheElement;
    /** @type {?} */
    ElLoadingDirective.prototype.cacheOverflow;
    /** @type {?} */
    ElLoadingDirective.prototype.visible;
    /** @type {?} */
    ElLoadingDirective.prototype.el;
    /** @type {?} */
    ElLoadingDirective.prototype.renderer;
    /** @type {?} */
    ElLoadingDirective.prototype.document;
    /** @type {?} */
    ElLoadingDirective.prototype.window;
}
//# sourceMappingURL=loading.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/loading/module.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-angular/release/loading/module.js ***!
  \****************************************************************/
/*! exports provided: ElLoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElLoadingModule", function() { return ElLoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/module */ "./node_modules/element-angular/release/shared/module.js");
/* harmony import */ var _loading_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.directive */ "./node_modules/element-angular/release/loading/loading.directive.js");




var ElLoadingModule = /** @class */ (function () {
    function ElLoadingModule() {
    }
    /**
     * @return {?}
     */
    ElLoadingModule.forRoot = function () {
        return { ngModule: ElLoadingModule, providers: [] };
    };
    ElLoadingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_loading_directive__WEBPACK_IMPORTED_MODULE_3__["ElLoadingDirective"]],
                    exports: [_loading_directive__WEBPACK_IMPORTED_MODULE_3__["ElLoadingDirective"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["ElSharedModule"]],
                    entryComponents: [],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElLoadingModule.ctorParameters = function () { return []; };
    return ElLoadingModule;
}());

function ElLoadingModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElLoadingModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElLoadingModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/menu/menu-item-group.js":
/*!**********************************************************************!*\
  !*** ./node_modules/element-angular/release/menu/menu-item-group.js ***!
  \**********************************************************************/
/*! exports provided: ElMenuItemGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMenuItemGroup", function() { return ElMenuItemGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./node_modules/element-angular/release/menu/menu.js");



var ElMenuItemGroup = /** @class */ (function () {
    /**
     * @param {?} rootMenu
     * @param {?} sanitizer
     */
    function ElMenuItemGroup(rootMenu, sanitizer) {
        this.rootMenu = rootMenu;
        this.sanitizer = sanitizer;
        this.title = '';
    }
    /**
     * @return {?}
     */
    ElMenuItemGroup.prototype.paddingStyle = function () {
        return this.sanitizer.bypassSecurityTrustStyle('padding-left: 20px');
    };
    /**
     * @return {?}
     */
    ElMenuItemGroup.prototype.ngOnInit = function () {
        if (!this.title) {
            console.warn('el-menu-item-group required props: [title: string]');
        }
    };
    ElMenuItemGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-menu-item-group',
                    template: "\n    <li class=\"el-menu-item-group\">\n      <div class=\"el-menu-item-group__title\" [style]=\"paddingStyle()\" #groupTitle\n        (mouseenter)=\"groupTitle.style.backgroundColor = rootMenu.hoverBackgroundColor() \"\n        (mouseleave)=\"groupTitle.style.backgroundColor = ''\">\n        <ng-container *ngIf=\"!titleTmp\">\n          {{title}}\n        </ng-container>\n        <ng-container *ngIf=\"titleTmp\">\n          <ng-template [ngTemplateOutlet]=\"titleTmp\"></ng-template>\n        </ng-container>\n      </div>\n      <ul><ng-content></ng-content></ul>\n    </li>\n  "
                },] },
    ];
    /**
     * @nocollapse
     */
    ElMenuItemGroup.ctorParameters = function () { return [
        { type: _menu__WEBPACK_IMPORTED_MODULE_2__["ElMenu"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    ElMenuItemGroup.propDecorators = {
        'titleTmp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['title',] },],
        'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElMenuItemGroup;
}());

function ElMenuItemGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMenuItemGroup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMenuItemGroup.ctorParameters;
    /** @type {?} */
    ElMenuItemGroup.propDecorators;
    /** @type {?} */
    ElMenuItemGroup.prototype.titleTmp;
    /** @type {?} */
    ElMenuItemGroup.prototype.title;
    /** @type {?} */
    ElMenuItemGroup.prototype.rootMenu;
    /** @type {?} */
    ElMenuItemGroup.prototype.sanitizer;
}
//# sourceMappingURL=menu-item-group.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/menu/menu-item.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-angular/release/menu/menu-item.js ***!
  \****************************************************************/
/*! exports provided: ElMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMenuItem", function() { return ElMenuItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./node_modules/element-angular/release/menu/menu.js");
/* harmony import */ var _submenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submenu */ "./node_modules/element-angular/release/menu/submenu.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ElMenuItem = /** @class */ (function () {
    /**
     * @param {?} rootMenu
     * @param {?} subMenu
     * @param {?} sanitizer
     * @param {?} el
     * @param {?} router
     */
    function ElMenuItem(rootMenu, subMenu, sanitizer, el, router) {
        this.rootMenu = rootMenu;
        this.subMenu = subMenu;
        this.sanitizer = sanitizer;
        this.el = el;
        this.router = router;
        this.elDisabled = false;
        this.title = '';
        this.extras = {};
        this.inSubmenu = false;
    }
    Object.defineProperty(ElMenuItem.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ElMenuItem.prototype.clickHandle = function () {
        var /** @type {?} */ comRef = this.subMenu || this.rootMenu;
        comRef.selectHandle(this.index);
        var /** @type {?} */ nextBorderIndex = (this.inSubmenu && this.subMenu) ? this.subMenu.index : this.index;
        this.rootMenu.showBorderIndex = nextBorderIndex;
        this.to && this.router.navigateByUrl(this.to, this.extras);
    };
    /**
     * @return {?}
     */
    ElMenuItem.prototype.borderColor = function () {
        // not show border in group
        var /** @type {?} */ dontShowBorder = this.inSubmenu && this.subMenu;
        if (dontShowBorder)
            return 'transparent';
        return this.rootMenu.showBorderIndex === this.index ?
            (this.rootMenu.activeTextColor ? this.rootMenu.activeTextColor : '')
            : 'transparent';
    };
    /**
     * @return {?}
     */
    ElMenuItem.prototype.color = function () {
        return this.rootMenu.model === this.index ?
            (this.rootMenu.activeTextColor ? this.rootMenu.activeTextColor : '#409eff')
            : this.rootMenu.textColor ? this.rootMenu.textColor : '#909399';
    };
    /**
     * @return {?}
     */
    ElMenuItem.prototype.ngOnInit = function () {
        this.inSubmenu = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_4__["isParentTag"])(this.el.nativeElement, 'el-submenu');
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_4__["removeNgTag"])(this.el.nativeElement);
    };
    ElMenuItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-menu-item',
                    template: "\n    <li class=\"el-menu-item\" (click)=\"clickHandle()\" #list\n      [ngStyle]=\"{ paddingLeft: '20px',\n      backgroundColor: rootMenu.backgroundColor || '',\n      borderBottomColor: borderColor(),\n      color: color() }\"\n      (mouseenter)=\"list.style.backgroundColor = rootMenu.hoverBackgroundColor()\"\n      (mouseleave)=\"list.style.backgroundColor = rootMenu.backgroundColor || ''\"\n      [class.is-active]=\"rootMenu.model === index\"\n      [class.is-disabled]=\"elDisabled\">\n      <ng-content></ng-content>\n    </li>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElMenuItem.ctorParameters = function () { return [
        { type: _menu__WEBPACK_IMPORTED_MODULE_2__["ElMenu"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _submenu__WEBPACK_IMPORTED_MODULE_3__["ElSubmenu"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], },
    ]; };
    ElMenuItem.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'index': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'to': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'extras': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElMenuItem;
}());

function ElMenuItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMenuItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMenuItem.ctorParameters;
    /** @type {?} */
    ElMenuItem.propDecorators;
    /** @type {?} */
    ElMenuItem.prototype.elDisabled;
    /** @type {?} */
    ElMenuItem.prototype.index;
    /** @type {?} */
    ElMenuItem.prototype.title;
    /** @type {?} */
    ElMenuItem.prototype.to;
    /** @type {?} */
    ElMenuItem.prototype.extras;
    /** @type {?} */
    ElMenuItem.prototype.inSubmenu;
    /** @type {?} */
    ElMenuItem.prototype.rootMenu;
    /** @type {?} */
    ElMenuItem.prototype.subMenu;
    /** @type {?} */
    ElMenuItem.prototype.sanitizer;
    /** @type {?} */
    ElMenuItem.prototype.el;
    /** @type {?} */
    ElMenuItem.prototype.router;
}
//# sourceMappingURL=menu-item.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/menu/menu.js":
/*!***********************************************************!*\
  !*** ./node_modules/element-angular/release/menu/menu.js ***!
  \***********************************************************/
/*! exports provided: ElMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMenu", function() { return ElMenu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElMenu = /** @class */ (function () {
    function ElMenu() {
        this.mode = 'vertical';
        this.theme = 'light';
        this.uniqueOpened = false;
        this.menuTrigger = 'hover';
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openedMenus = this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ElMenu.prototype.openMenu = function (index) {
        var /** @type {?} */ openedMenus = this.openedMenus;
        if (openedMenus.indexOf(index) !== -1)
            return;
        this.openedMenus.push(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ElMenu.prototype.closeMenu = function (index) {
        this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
    };
    /**
     * @param {?} index
     * @param {?=} path
     * @return {?}
     */
    ElMenu.prototype.selectHandle = function (index, path) {
        var /** @type {?} */ main = path || index;
        this.model = main;
        this.modelChange.emit(main);
    };
    /**
     * @return {?}
     */
    ElMenu.prototype.hoverBackgroundColor = function () {
        return this.backgroundColor ? this.hexToRGB() : '';
    };
    /**
     * @return {?}
     */
    ElMenu.prototype.hexToRGB = function () {
        var /** @type {?} */ hex = +this.backgroundColor.replace('#', '0x');
        var /** @type {?} */ rgb = [(hex & 0xff0000) >> 16, (hex & 0x00ff00) >> 8, hex & 0x0000ff];
        return "rgb(" + rgb.map(function (v) { return ~~(0.8 * v); }).join(',') + ")";
    };
    ElMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-menu',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <ul [class]=\"'el-menu ' + nativeClass\"\n      [class.el-menu--horizontal]=\"mode === 'horizontal'\"\n      [ngStyle]=\"{ backgroundColor: backgroundColor || '' }\">\n      <ng-content></ng-content>\n    </ul>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElMenu.ctorParameters = function () { return []; };
    ElMenu.propDecorators = {
        'mode': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'theme': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nativeClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] },],
        'defaultOpeneds': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['default-openeds',] },],
        'uniqueOpened': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['unique-opened',] },],
        'menuTrigger': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['menu-trigger',] },],
        'backgroundColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['background-color',] },],
        'textColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['text-color',] },],
        'activeTextColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['active-text-color',] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElMenu;
}());

function ElMenu_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMenu.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMenu.ctorParameters;
    /** @type {?} */
    ElMenu.propDecorators;
    /** @type {?} */
    ElMenu.prototype.mode;
    /** @type {?} */
    ElMenu.prototype.theme;
    /** @type {?} */
    ElMenu.prototype.model;
    /** @type {?} */
    ElMenu.prototype.nativeClass;
    /** @type {?} */
    ElMenu.prototype.defaultOpeneds;
    /** @type {?} */
    ElMenu.prototype.uniqueOpened;
    /** @type {?} */
    ElMenu.prototype.menuTrigger;
    /** @type {?} */
    ElMenu.prototype.backgroundColor;
    /** @type {?} */
    ElMenu.prototype.textColor;
    /** @type {?} */
    ElMenu.prototype.activeTextColor;
    /** @type {?} */
    ElMenu.prototype.modelChange;
    /** @type {?} */
    ElMenu.prototype.openedMenus;
    /** @type {?} */
    ElMenu.prototype.showBorderIndex;
}
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/menu/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/menu/module.js ***!
  \*************************************************************/
/*! exports provided: ElMenusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMenusModule", function() { return ElMenusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip/module */ "./node_modules/element-angular/release/tooltip/module.js");
/* harmony import */ var _menu_item_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-item-group */ "./node_modules/element-angular/release/menu/menu-item-group.js");
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-item */ "./node_modules/element-angular/release/menu/menu-item.js");
/* harmony import */ var _submenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submenu */ "./node_modules/element-angular/release/menu/submenu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "./node_modules/element-angular/release/menu/menu.js");







var ElMenusModule = /** @class */ (function () {
    function ElMenusModule() {
    }
    /**
     * @return {?}
     */
    ElMenusModule.forRoot = function () {
        return { ngModule: ElMenusModule, providers: [] };
    };
    ElMenusModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_menu__WEBPACK_IMPORTED_MODULE_6__["ElMenu"], _submenu__WEBPACK_IMPORTED_MODULE_5__["ElSubmenu"], _menu_item__WEBPACK_IMPORTED_MODULE_4__["ElMenuItem"], _menu_item_group__WEBPACK_IMPORTED_MODULE_3__["ElMenuItemGroup"]],
                    exports: [_menu__WEBPACK_IMPORTED_MODULE_6__["ElMenu"], _submenu__WEBPACK_IMPORTED_MODULE_5__["ElSubmenu"], _menu_item__WEBPACK_IMPORTED_MODULE_4__["ElMenuItem"], _menu_item_group__WEBPACK_IMPORTED_MODULE_3__["ElMenuItemGroup"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tooltip_module__WEBPACK_IMPORTED_MODULE_2__["ElTooltipModule"].forRoot()],
                    entryComponents: [_menu__WEBPACK_IMPORTED_MODULE_6__["ElMenu"], _submenu__WEBPACK_IMPORTED_MODULE_5__["ElSubmenu"], _menu_item__WEBPACK_IMPORTED_MODULE_4__["ElMenuItem"], _menu_item_group__WEBPACK_IMPORTED_MODULE_3__["ElMenuItemGroup"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElMenusModule.ctorParameters = function () { return []; };
    return ElMenusModule;
}());

function ElMenusModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMenusModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMenusModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/menu/submenu.js":
/*!**************************************************************!*\
  !*** ./node_modules/element-angular/release/menu/submenu.js ***!
  \**************************************************************/
/*! exports provided: ElSubmenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSubmenu", function() { return ElSubmenu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./node_modules/element-angular/release/menu/menu.js");



var ElSubmenu = /** @class */ (function () {
    /**
     * @param {?} rootMenu
     */
    function ElSubmenu(rootMenu) {
        this.rootMenu = rootMenu;
        this.opened = false;
        this.active = false;
        this.subActive = false;
        this.dontUserHover = false;
    }
    /**
     * @return {?}
     */
    ElSubmenu.prototype.mouseenterHandle = function () {
        var _this = this;
        this.active = true;
        if (this.dontUserHover)
            return;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.rootMenu.openMenu(_this.index);
            _this.updateOpened();
            clearTimeout(_this.timer);
        }, 300);
    };
    /**
     * @return {?}
     */
    ElSubmenu.prototype.mouseleaveHandle = function () {
        var _this = this;
        this.active = false;
        if (this.dontUserHover)
            return;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.rootMenu.closeMenu(_this.index);
            _this.updateOpened();
            clearTimeout(_this.timer);
        }, 300);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ElSubmenu.prototype.selectHandle = function (path) {
        this.rootMenu.selectHandle(this.index, path);
        // selected and close list
        if (this.rootMenu.mode !== 'vertical') {
            this.rootMenu.closeMenu(this.index);
        }
        this.updateOpened();
    };
    /**
     * @return {?}
     */
    ElSubmenu.prototype.updateOpened = function () {
        this.opened = this.rootMenu.openedMenus.indexOf(this.index) > -1;
    };
    /**
     * @return {?}
     */
    ElSubmenu.prototype.clickHandle = function () {
        if (!this.dontUserHover)
            return;
        if (this.opened) {
            this.rootMenu.closeMenu(this.index);
        }
        else {
            this.rootMenu.openMenu(this.index);
        }
        this.updateOpened();
    };
    /**
     * @return {?}
     */
    ElSubmenu.prototype.borderColor = function () {
        return this.rootMenu.showBorderIndex === this.index ?
            (this.rootMenu.activeTextColor ? this.rootMenu.activeTextColor : '#409eff')
            : 'transparent';
    };
    /**
     * @return {?}
     */
    ElSubmenu.prototype.ngOnInit = function () {
        this.updateOpened();
        this.active = this.index === this.rootMenu.model;
        this.dontUserHover = this.rootMenu.mode === 'vertical' || this.rootMenu.menuTrigger !== 'hover';
    };
    ElSubmenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-submenu',
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_1__["dropAnimation"]],
                    template: "\n    <li [class.el-submenu]=\"true\"\n      [class.is-active]=\"active\"\n      [class.is-opened]=\"opened\"\n      (mouseenter)=\"mouseenterHandle()\"\n      (mouseleave)=\"mouseleaveHandle()\">\n      <div class=\"el-submenu__title\" (click)=\"clickHandle()\"\n        [ngStyle]=\"{ paddingLeft: '20px;', color: rootMenu.textColor || '', borderBottomColor: borderColor() }\"\n        #subTitle\n        (mouseenter)=\"subTitle.style.backgroundColor = rootMenu.hoverBackgroundColor()\"\n        (mouseleave)=\"subTitle.style.backgroundColor = ''\">\n        <ng-container *ngIf=\"!titleTmp\">\n          {{title}}\n        </ng-container>\n        <ng-container *ngIf=\"titleTmp\">\n          <ng-template [ngTemplateOutlet]=\"titleTmp\"></ng-template>\n        </ng-container>\n        <i class=\"el-submenu__icon-arrow\"\n          [class.el-icon-caret-bottom]=\"rootMenu.mode === 'horizontal'\"\n          [class.el-icon-arrow-down]=\"rootMenu.mode === 'vertical'\"></i>\n      </div>\n      <ul class=\"el-menu\" [@dropAnimation]=\"opened\"\n        [ngStyle]=\"{ backgroundColor: rootMenu.backgroundColor || '' }\">\n        <ng-content></ng-content>\n      </ul>\n    </li>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSubmenu.ctorParameters = function () { return [
        { type: _menu__WEBPACK_IMPORTED_MODULE_2__["ElMenu"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
    ]; };
    ElSubmenu.propDecorators = {
        'titleTmp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['title',] },],
        'index': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElSubmenu;
}());

function ElSubmenu_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSubmenu.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSubmenu.ctorParameters;
    /** @type {?} */
    ElSubmenu.propDecorators;
    /** @type {?} */
    ElSubmenu.prototype.titleTmp;
    /** @type {?} */
    ElSubmenu.prototype.index;
    /** @type {?} */
    ElSubmenu.prototype.title;
    /** @type {?} */
    ElSubmenu.prototype.timer;
    /** @type {?} */
    ElSubmenu.prototype.opened;
    /** @type {?} */
    ElSubmenu.prototype.active;
    /** @type {?} */
    ElSubmenu.prototype.subActive;
    /** @type {?} */
    ElSubmenu.prototype.dontUserHover;
    /** @type {?} */
    ElSubmenu.prototype.rootMenu;
}
//# sourceMappingURL=submenu.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/message/images.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-angular/release/message/images.js ***!
  \****************************************************************/
/*! exports provided: error, info, success, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var /** @type {?} */ error = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+aWNvbl9kYW5nZXI8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iRWxlbWVudC1ndWlkZWxpbmUtdjAuMi40IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJNZXNzYWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAuMDAwMDAwLCAtMzMyLjAwMDAwMCkiPiAgICAgICAgICAgIDxnIGlkPSLluKblgL7lkJFf5L+h5oGvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wMDAwMDAsIDMzMi4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS0yIj4gICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uX2RhbmdlciI+ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiBmaWxsPSIjRkY0OTQ5IiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjwvcmVjdD4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuODE3MjYyNywxNi4zNDUxNzk2IEMyNS45MzkwOTAyLDE2LjIyMzM0ODMgMjYsMTYuMDc2MTQxOCAyNiwxNS45MDM1NTIzIEMyNiwxNS43MzA5NjI4IDI1LjkzOTA5MDIsMTUuNTgzNzU2MyAyNS44MTcyNjI3LDE1LjQ2MTkyODkgTDI0LjUwNzYxNTcsMTQuMTgyNzQxMSBDMjQuMzg1Nzg4MiwxNC4wNjA5MTM3IDI0LjI0MzY1NzUsMTQgMjQuMDgxMjE5NiwxNCBDMjMuOTE4NzgxNywxNCAyMy43NzY2NTEsMTQuMDYwOTEzNyAyMy42NTQ4MjM1LDE0LjE4Mjc0MTEgTDIwLDE3LjgzNzU2MzUgTDE2LjMxNDcyMTYsMTQuMTgyNzQxMSBDMTYuMTkyODkwMiwxNC4wNjA5MTM3IDE2LjA1MDc1OTUsMTQgMTUuODg4MzIxNiwxNCBDMTUuNzI1ODg3NiwxNCAxNS41ODM3NTY5LDE0LjA2MDkxMzcgMTUuNDYxOTI5NCwxNC4xODI3NDExIEwxNC4xNTIyODI0LDE1LjQ2MTkyODkgQzE0LjA1MDc1ODIsMTUuNTgzNzU2MyAxNCwxNS43MzA5NjI4IDE0LDE1LjkwMzU1MjMgQzE0LDE2LjA3NjE0MTggMTQuMDUwNzU4MiwxNi4yMjMzNDgzIDE0LjE1MjI4MjQsMTYuMzQ1MTc5NiBMMTcuODM3NTYwOCwyMC4wMDAwMDE5IEwxNC4xNTIyODI0LDIzLjY1NDgyNDMgQzE0LjA1MDc1ODIsMjMuNzc2NjUxNyAxNCwyMy45MjM4NTgyIDE0LDI0LjA5NjQ0NzcgQzE0LDI0LjI2OTAzNzIgMTQuMDUwNzU4MiwyNC40MTYyNDM3IDE0LjE1MjI4MjQsMjQuNTM4MDcxMSBMMTUuNDYxOTI5NCwyNS44MTcyNTg5IEMxNS41ODM3NTY5LDI1LjkzOTA4NjMgMTUuNzI1ODg3NiwyNiAxNS44ODgzMjE2LDI2IEMxNi4wNTA3NTk1LDI2IDE2LjE5Mjg5MDIsMjUuOTM5MDg2MyAxNi4zMTQ3MjE2LDI1LjgxNzI1ODkgTDIwLDIyLjE2MjQzNjUgTDIzLjY1NDgyMzUsMjUuODE3MjU4OSBDMjMuNzc2NjUxLDI1LjkzOTA4NjMgMjMuOTE4NzgxNywyNiAyNC4wODEyMTk2LDI2IEMyNC4yNDM2NTc1LDI2IDI0LjM4NTc4ODIsMjUuOTM5MDg2MyAyNC41MDc2MTU3LDI1LjgxNzI1ODkgTDI1LjgxNzI2MjcsMjQuNTM4MDcxMSBDMjUuOTM5MDkwMiwyNC40MTYyNDM3IDI2LDI0LjI2OTAzNzIgMjYsMjQuMDk2NDQ3NyBDMjYsMjMuOTIzODU4MiAyNS45MzkwOTAyLDIzLjc3NjY1MTcgMjUuODE3MjYyNywyMy42NTQ4MjQzIEwyMi4xMzE5ODA0LDIwLjAwMDAwMTkgTDI1LjgxNzI2MjcsMTYuMzQ1MTc5NiBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+';
var /** @type {?} */ info = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+aWNvbl9pbmZvPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IkVsZW1lbnQtZ3VpZGVsaW5lLXYwLjIuNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iTWVzc2FnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTE1Mi4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0i5bim5YC+5ZCRX+S/oeaBryIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuMDAwMDAwLCAxNTIuMDAwMDAwKSI+ICAgICAgICAgICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtMiI+ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9pbmZvIj4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIGZpbGw9IiM1MEJGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PC9yZWN0PiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS42MTUzODQ2LDI2LjU0MzIwOTkgQzIxLjYxNTM4NDYsMjYuOTQ3ODc1MSAyMS40NTgzMzQ4LDI3LjI5MTgzNjggMjEuMTQ0MjMwOCwyNy41NzUxMDI5IEMyMC44MzAxMjY4LDI3Ljg1ODM2ODkgMjAuNDQ4NzE5NCwyOCAyMCwyOCBDMTkuNTUxMjgwNiwyOCAxOS4xNjk4NzMyLDI3Ljg1ODM2ODkgMTguODU1NzY5MiwyNy41NzUxMDI5IEMxOC41NDE2NjUyLDI3LjI5MTgzNjggMTguMzg0NjE1NCwyNi45NDc4NzUxIDE4LjM4NDYxNTQsMjYuNTQzMjA5OSBMMTguMzg0NjE1NCwxOS43NDQ4NTYgQzE4LjM4NDYxNTQsMTkuMzQwMTkwNyAxOC41NDE2NjUyLDE4Ljk5NjIyOSAxOC44NTU3NjkyLDE4LjcxMjk2MyBDMTkuMTY5ODczMiwxOC40Mjk2OTY5IDE5LjU1MTI4MDYsMTguMjg4MDY1OCAyMCwxOC4yODgwNjU4IEMyMC40NDg3MTk0LDE4LjI4ODA2NTggMjAuODMwMTI2OCwxOC40Mjk2OTY5IDIxLjE0NDIzMDgsMTguNzEyOTYzIEMyMS40NTgzMzQ4LDE4Ljk5NjIyOSAyMS42MTUzODQ2LDE5LjM0MDE5MDcgMjEuNjE1Mzg0NiwxOS43NDQ4NTYgTDIxLjYxNTM4NDYsMjYuNTQzMjA5OSBaIE0yMCwxNS44MDQyOTgxIEMxOS40NDQ0NDI3LDE1LjgwNDI5ODEgMTguOTcyMjI0LDE1LjYxOTM2ODcgMTguNTgzMzMzMywxNS4yNDk1MDQ2IEMxOC4xOTQ0NDI3LDE0Ljg3OTY0MDYgMTgsMTQuNDMwNTI1NSAxOCwxMy45MDIxNDkxIEMxOCwxMy4zNzM3NzI2IDE4LjE5NDQ0MjcsMTIuOTI0NjU3NSAxOC41ODMzMzMzLDEyLjU1NDc5MzUgQzE4Ljk3MjIyNCwxMi4xODQ5Mjk1IDE5LjQ0NDQ0MjcsMTIgMjAsMTIgQzIwLjU1NTU1NzMsMTIgMjEuMDI3Nzc2LDEyLjE4NDkyOTUgMjEuNDE2NjY2NywxMi41NTQ3OTM1IEMyMS44MDU1NTczLDEyLjkyNDY1NzUgMjIsMTMuMzczNzcyNiAyMiwxMy45MDIxNDkxIEMyMiwxNC40MzA1MjU1IDIxLjgwNTU1NzMsMTQuODc5NjQwNiAyMS40MTY2NjY3LDE1LjI0OTUwNDYgQzIxLjAyNzc3NiwxNS42MTkzNjg3IDIwLjU1NTU1NzMsMTUuODA0Mjk4MSAyMCwxNS44MDQyOTgxIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+';
var /** @type {?} */ success = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+aWNvbl9zdWNjZXNzPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IkVsZW1lbnQtZ3VpZGVsaW5lLXYwLjIuNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iTWVzc2FnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTIxMi4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0i5bim5YC+5ZCRX+S/oeaBryIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuMDAwMDAwLCAyMTIuMDAwMDAwKSI+ICAgICAgICAgICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtMiI+ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9zdWNjZXNzIj4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIGZpbGw9IiMxM0NFNjYiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PC9yZWN0PiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNy44MjU1ODE0LDE3LjE0ODQzNTcgTDE5LjAxNzQ0LDI1LjgyODEyMTMgQzE4LjkwMTE2MDksMjUuOTQyNzA4MyAxOC43NjU1MDMzLDI2IDE4LjYxMDQ2NywyNiBDMTguNDU1NDI3LDI2IDE4LjMxOTc2OTMsMjUuOTQyNzA4MyAxOC4yMDM0ODY1LDI1LjgyODEyMTMgTDE4LjAyOTA3MTYsMjUuNjU2MjUgTDEzLjE3NDQxODYsMjAuODQzNzUgQzEzLjA1ODEzOTUsMjAuNzI5MTYzIDEzLDIwLjU5NTQ4MzcgMTMsMjAuNDQyNzA0NyBDMTMsMjAuMjg5OTI5MyAxMy4wNTgxMzk1LDIwLjE1NjI1IDEzLjE3NDQxODYsMjAuMDQxNjY2NyBMMTQuMzY2Mjc3MiwxOC44NjcxODU3IEMxNC40ODI1NiwxOC43NTI2MDIzIDE0LjYxODIxNzcsMTguNjk1MzEwNyAxNC43NzMyNTc3LDE4LjY5NTMxMDcgQzE0LjkyODI5NCwxOC42OTUzMTA3IDE1LjA2Mzk1MTYsMTguNzUyNjAyMyAxNS4xODAyMzA3LDE4Ljg2NzE4NTcgTDE4LjYxMDQ2NywyMi4yNzYwMzggTDI1LjgxOTc2OTMsMTUuMTcxODcxMyBDMjUuOTM2MDQ4NCwxNS4wNTcyODggMjYuMDcxNzA2LDE1IDI2LjIyNjc0MjMsMTUgQzI2LjM4MTc4MjMsMTUgMjYuNTE3NDQsMTUuMDU3Mjg4IDI2LjYzMzcyMjgsMTUuMTcxODcxMyBMMjcuODI1NTgxNCwxNi4zNDYzNTIzIEMyNy45NDE4NjA1LDE2LjQ2MDkzNTcgMjgsMTYuNTk0NjE1IDI4LDE2Ljc0NzM5NCBDMjgsMTYuOTAwMTczIDI3Ljk0MTg2MDUsMTcuMDMzODUyMyAyNy44MjU1ODE0LDE3LjE0ODQzNTcgTDI3LjgyNTU4MTQsMTcuMTQ4NDM1NyBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+';
var /** @type {?} */ warning = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+aWNvbl93YXJuaW5nPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iTWVzc2FnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTI3Mi4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0i5bim5YC+5ZCRX+S/oeaBry1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wMDAwMDAsIDI3Mi4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS0yIj4gICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uX3dhcm5pbmciPiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgZmlsbD0iI0Y3QkEyQSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48L3JlY3Q+ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIxLjYxNTM4NDYsMjYuNTQzMjA5OSBDMjEuNjE1Mzg0NiwyNi45NDc4NzUxIDIxLjQ1ODMzNDgsMjcuMjkxODM2OCAyMS4xNDQyMzA4LDI3LjU3NTEwMjkgQzIwLjgzMDEyNjgsMjcuODU4MzY4OSAyMC40NDg3MTk0LDI4IDIwLDI4IEMxOS41NTEyODA2LDI4IDE5LjE2OTg3MzIsMjcuODU4MzY4OSAxOC44NTU3NjkyLDI3LjU3NTEwMjkgQzE4LjU0MTY2NTIsMjcuMjkxODM2OCAxOC4zODQ2MTU0LDI2Ljk0Nzg3NTEgMTguMzg0NjE1NCwyNi41NDMyMDk5IEwxOC4zODQ2MTU0LDE5Ljc0NDg1NiBDMTguMzg0NjE1NCwxOS4zNDAxOTA3IDE4LjU0MTY2NTIsMTguOTk2MjI5IDE4Ljg1NTc2OTIsMTguNzEyOTYzIEMxOS4xNjk4NzMyLDE4LjQyOTY5NjkgMTkuNTUxMjgwNiwxOC4yODgwNjU4IDIwLDE4LjI4ODA2NTggQzIwLjQ0ODcxOTQsMTguMjg4MDY1OCAyMC44MzAxMjY4LDE4LjQyOTY5NjkgMjEuMTQ0MjMwOCwxOC43MTI5NjMgQzIxLjQ1ODMzNDgsMTguOTk2MjI5IDIxLjYxNTM4NDYsMTkuMzQwMTkwNyAyMS42MTUzODQ2LDE5Ljc0NDg1NiBMMjEuNjE1Mzg0NiwyNi41NDMyMDk5IFogTTIwLDE1LjgwNDI5ODEgQzE5LjQ0NDQ0MjcsMTUuODA0Mjk4MSAxOC45NzIyMjQsMTUuNjE5MzY4NyAxOC41ODMzMzMzLDE1LjI0OTUwNDYgQzE4LjE5NDQ0MjcsMTQuODc5NjQwNiAxOCwxNC40MzA1MjU1IDE4LDEzLjkwMjE0OTEgQzE4LDEzLjM3Mzc3MjYgMTguMTk0NDQyNywxMi45MjQ2NTc1IDE4LjU4MzMzMzMsMTIuNTU0NzkzNSBDMTguOTcyMjI0LDEyLjE4NDkyOTUgMTkuNDQ0NDQyNywxMiAyMCwxMiBDMjAuNTU1NTU3MywxMiAyMS4wMjc3NzYsMTIuMTg0OTI5NSAyMS40MTY2NjY3LDEyLjU1NDc5MzUgQzIxLjgwNTU1NzMsMTIuOTI0NjU3NSAyMiwxMy4zNzM3NzI2IDIyLDEzLjkwMjE0OTEgQzIyLDE0LjQzMDUyNTUgMjEuODA1NTU3MywxNC44Nzk2NDA2IDIxLjQxNjY2NjcsMTUuMjQ5NTA0NiBDMjEuMDI3Nzc2LDE1LjYxOTM2ODcgMjAuNTU1NTU3MywxNS44MDQyOTgxIDIwLDE1LjgwNDI5ODEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMjAuMDAwMDAwLCAtMjAuMDAwMDAwKSAiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==';

//# sourceMappingURL=images.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/message/message.animation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/element-angular/release/message/message.animation.js ***!
  \***************************************************************************/
/*! exports provided: MessageAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAnimation", function() { return MessageAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ MessageAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('messageAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        top: '20px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        top: '20px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        visibility: 'inherit',
        top: '50px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-out")),
]);
//# sourceMappingURL=message.animation.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/message/message.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/message/message.js ***!
  \*****************************************************************/
/*! exports provided: ElMessageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMessageContainer", function() { return ElMessageContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./node_modules/element-angular/release/message/images.js");
/* harmony import */ var _message_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.animation */ "./node_modules/element-angular/release/message/message.animation.js");




var ElMessageContainer = /** @class */ (function () {
    /**
     * @param {?} sanitizer
     */
    function ElMessageContainer(sanitizer) {
        this.sanitizer = sanitizer;
        this.showClose = false;
        this.type = 'info';
        this.center = false;
        this.duration = 3000;
        // user setting
        this.iconClass = '';
        this.customClass = '';
        this.zIndex = 1000;
        this.message = '';
        this.showBox = false;
        this.onClose = function () { };
        this.onDestroy = function () { };
    }
    /**
     * @return {?}
     */
    ElMessageContainer.prototype.makeTypeClass = function () {
        return this.type && !this.iconClass ? "el-message__icon el-icon-" + this.type : '';
    };
    /**
     * @return {?}
     */
    ElMessageContainer.prototype.makeLink = function () {
        return this.sanitizer.bypassSecurityTrustUrl(_images__WEBPACK_IMPORTED_MODULE_2__[this.type]);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ElMessageContainer.prototype.show = function (message) {
        var _this = this;
        this.message = message;
        this.showBox = true;
        this.timer = setTimeout(function () {
            _this.close();
        }, this.duration);
    };
    /**
     * @return {?}
     */
    ElMessageContainer.prototype.close = function () {
        this.timer && clearTimeout(this.timer);
        this.showBox = false;
        this.onClose();
        this.onDestroy();
    };
    /**
     * @return {?}
     */
    ElMessageContainer.prototype.startTimer = function () {
        var _this = this;
        if (!this.showBox)
            return;
        this.timer = setTimeout(function () {
            _this.close();
        }, this.duration);
    };
    /**
     * @return {?}
     */
    ElMessageContainer.prototype.clearTimer = function () {
        this.timer && clearTimeout(this.timer);
    };
    ElMessageContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-message-container',
                    styles: [""],
                    template: "\n    <div [class]=\"'el-message ' + customClass + (type && !iconClass ? ' el-message--' + type : '')\"\n      [class.is-center]=\"center\"\n      style=\"visibility: hidden; transition: all .25s\" role=\"alertdialog\"\n      [ngStyle]=\"{ 'z-index': zIndex }\"\n      (mouseenter)=\"clearTimer()\" (mouseleave)=\"startTimer()\"\n      [@messageAnimation]=\"showBox\">\n      <i [class]=\"iconClass\" *ngIf=\"iconClass\"></i>\n      <i [class]=\"makeTypeClass()\" *ngIf=\"!iconClass\"></i>\n      \n      <p class=\"el-message__content\" tabindex=\"0\">{{ message }}</p>\n      <div *ngIf=\"showClose\" class=\"el-message__closeBtn el-icon-close\" (click)=\"close()\" role=\"button\"></div>\n    </div>\n  ",
                    animations: [_message_animation__WEBPACK_IMPORTED_MODULE_3__["MessageAnimation"]]
                },] },
    ];
    /**
     * @nocollapse
     */
    ElMessageContainer.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    return ElMessageContainer;
}());

function ElMessageContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMessageContainer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMessageContainer.ctorParameters;
    /** @type {?} */
    ElMessageContainer.prototype.id;
    /** @type {?} */
    ElMessageContainer.prototype.showClose;
    /** @type {?} */
    ElMessageContainer.prototype.type;
    /** @type {?} */
    ElMessageContainer.prototype.center;
    /** @type {?} */
    ElMessageContainer.prototype.duration;
    /** @type {?} */
    ElMessageContainer.prototype.iconClass;
    /** @type {?} */
    ElMessageContainer.prototype.customClass;
    /** @type {?} */
    ElMessageContainer.prototype.zIndex;
    /** @type {?} */
    ElMessageContainer.prototype.message;
    /** @type {?} */
    ElMessageContainer.prototype.showBox;
    /** @type {?} */
    ElMessageContainer.prototype.timer;
    /** @type {?} */
    ElMessageContainer.prototype.onClose;
    /** @type {?} */
    ElMessageContainer.prototype.onDestroy;
    /** @type {?} */
    ElMessageContainer.prototype.sanitizer;
}
//# sourceMappingURL=message.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/message/message.service.js":
/*!*************************************************************************!*\
  !*** ./node_modules/element-angular/release/message/message.service.js ***!
  \*************************************************************************/
/*! exports provided: ElMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMessageService", function() { return ElMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./node_modules/element-angular/release/message/message.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");



var ElMessageService = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} dynamic
     */
    function ElMessageService(root, dynamic) {
        this.root = root;
        this.dynamic = dynamic;
        this.components = [];
        this.createComponent();
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    ElMessageService.prototype.show = function (msg) {
        var _this = this;
        if (this.components.length === 0 || this.components[this.components.length - 1].init) {
            this.createComponent();
        }
        // mark the component
        var /** @type {?} */ current = this.components[this.components.length - 1];
        current.init = true;
        current.instance.onDestroy = function () {
            // component detach and destroy
            _this.dynamic.destroy(current.copy);
            // remove empty item
            var /** @type {?} */ index = _this.components.findIndex(function (com) { return com.id === current.id; });
            _this.components.splice(index, 1);
        };
        var /** @type {?} */ timer = setTimeout(function () {
            current.instance.show(msg);
            clearTimeout(timer);
        }, 0);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    ElMessageService.prototype.success = function (msg) {
        this.setOptions({ type: 'success' });
        this.show(msg);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    ElMessageService.prototype.warning = function (msg) {
        this.setOptions({ type: 'warning' });
        this.show(msg);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    ElMessageService.prototype.info = function (msg) {
        this.setOptions({ type: 'info' });
        this.show(msg);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    ElMessageService.prototype.error = function (msg) {
        this.setOptions({ type: 'error' });
        this.show(msg);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    ElMessageService.prototype.setOptions = function (options) {
        if (this.components.length === 0 || this.components[this.components.length - 1].init) {
            this.createComponent();
        }
        var /** @type {?} */ last = this.components[this.components.length - 1];
        last.instance = Object.assign(last.instance, options);
    };
    /**
     * @return {?}
     */
    ElMessageService.prototype.createComponent = function () {
        var /** @type {?} */ com = this.dynamic.generator(_message__WEBPACK_IMPORTED_MODULE_1__["ElMessageContainer"]);
        this.components.push({
            instance: com.instance,
            id: com.instance.id,
            copy: com,
            init: false
        });
    };
    ElMessageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    ElMessageService.ctorParameters = function () { return [
        { type: _message__WEBPACK_IMPORTED_MODULE_1__["ElMessageContainer"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_2__["ExDynamicService"], },
    ]; };
    return ElMessageService;
}());

function ElMessageService_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMessageService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMessageService.ctorParameters;
    /** @type {?} */
    ElMessageService.prototype.components;
    /** @type {?} */
    ElMessageService.prototype.root;
    /** @type {?} */
    ElMessageService.prototype.dynamic;
}
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/message/module.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-angular/release/message/module.js ***!
  \****************************************************************/
/*! exports provided: ElMessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMessagesModule", function() { return ElMessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "./node_modules/element-angular/release/message/message.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./node_modules/element-angular/release/message/message.service.js");




var ElMessagesModule = /** @class */ (function () {
    function ElMessagesModule() {
    }
    /**
     * @return {?}
     */
    ElMessagesModule.forRoot = function () {
        return { ngModule: ElMessagesModule, providers: [
                _message_service__WEBPACK_IMPORTED_MODULE_3__["ElMessageService"],
            ] };
    };
    ElMessagesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_message__WEBPACK_IMPORTED_MODULE_2__["ElMessageContainer"]],
                    exports: [_message__WEBPACK_IMPORTED_MODULE_2__["ElMessageContainer"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_message__WEBPACK_IMPORTED_MODULE_2__["ElMessageContainer"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElMessagesModule.ctorParameters = function () { return []; };
    return ElMessagesModule;
}());

function ElMessagesModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMessagesModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMessagesModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/notification/module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/notification/module.js ***!
  \*********************************************************************/
/*! exports provided: ElNotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElNotificationModule", function() { return ElNotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification */ "./node_modules/element-angular/release/notification/notification.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./node_modules/element-angular/release/notification/notification.service.js");




var ElNotificationModule = /** @class */ (function () {
    function ElNotificationModule() {
    }
    /**
     * @return {?}
     */
    ElNotificationModule.forRoot = function () {
        return { ngModule: ElNotificationModule, providers: [
                _notification_service__WEBPACK_IMPORTED_MODULE_3__["ElNotificationService"],
            ] };
    };
    ElNotificationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_notification__WEBPACK_IMPORTED_MODULE_2__["ElNotificationContainer"]],
                    exports: [_notification__WEBPACK_IMPORTED_MODULE_2__["ElNotificationContainer"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_notification__WEBPACK_IMPORTED_MODULE_2__["ElNotificationContainer"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElNotificationModule.ctorParameters = function () { return []; };
    return ElNotificationModule;
}());

function ElNotificationModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElNotificationModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElNotificationModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/notification/notification.js":
/*!***************************************************************************!*\
  !*** ./node_modules/element-angular/release/notification/notification.js ***!
  \***************************************************************************/
/*! exports provided: typeMap, ElNotificationContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeMap", function() { return typeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElNotificationContainer", function() { return ElNotificationContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");


var /** @type {?} */ typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
};
var ElNotificationContainer = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function ElNotificationContainer(el) {
        this.el = el;
        this.height = 0;
        // user setting
        this.offset = 15;
        this.type = '';
        this.duration = 3000;
        this.iconClass = '';
        this.customClass = '';
        this.zIndex = 1000;
        this.position = 'top-right';
        this.title = '';
        this.message = '';
        this.showBox = false;
        this.horizontalDirection = 'right';
        this.onClose = function () { };
        this.onDestroy = function () { };
    }
    /**
     * @return {?}
     */
    ElNotificationContainer.prototype.makeClass = function () {
        return typeMap[this.type] ? "el-icon-" + typeMap[this.type] : '';
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    ElNotificationContainer.prototype.setContent = function (message, title) {
        var _this = this;
        if (title === void 0) { title = ''; }
        this.message = message;
        this.title = title;
        setTimeout(function () {
            _this.height = _this.el.nativeElement.children[0].offsetHeight;
        }, 0);
    };
    /**
     * @return {?}
     */
    ElNotificationContainer.prototype.show = function () {
        var _this = this;
        this.showBox = true;
        this.timer = setTimeout(function () {
            _this.close();
        }, this.duration);
    };
    /**
     * @return {?}
     */
    ElNotificationContainer.prototype.close = function () {
        this.timer && clearTimeout(this.timer);
        this.showBox = false;
        this.onClose();
        this.onDestroy();
    };
    /**
     * @return {?}
     */
    ElNotificationContainer.prototype.startTimer = function () {
        var _this = this;
        if (!this.showBox)
            return;
        this.timer = setTimeout(function () {
            _this.close();
        }, this.duration);
    };
    /**
     * @return {?}
     */
    ElNotificationContainer.prototype.clearTimer = function () {
        this.timer && clearTimeout(this.timer);
    };
    /**
     * @return {?}
     */
    ElNotificationContainer.prototype.ngOnInit = function () {
        this.horizontalDirection = this.position.includes('right') ? 'right' : 'left';
    };
    ElNotificationContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-notification-container',
                    template: "\n    <div [class]=\"'el-notification ' + horizontalDirection + ' ' + customClass\"\n      [@notifyAnimation]=\"showBox\"\n      [ngStyle]=\"{top: (offset ? offset + 'px' : 'auto'), 'z-index': zIndex}\"\n      style=\"visibility: hidden;\"\n      (mouseenter)=\"clearTimer()\" (mouseleave)=\"startTimer()\">\n      <i [class]=\"'el-notification__icon ' + makeClass() + ' ' + iconClass\"\n        *ngIf=\"type || iconClass\"></i>\n      <div class=\"el-notification__group\" [class.is-with-icon]=\"makeClass() || iconClass\">\n        <h2 class=\"el-notification__title\" *ngIf=\"title\">{{title}}</h2>\n        <div class=\"el-notification__content\"><p>{{message}}</p></div>\n        <div class=\"el-notification__closeBtn el-icon-close\" (click)=\"close()\"></div>\n      </div>\n    </div>\n  ",
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_1__["notifyAnimation"]]
                },] },
    ];
    /**
     * @nocollapse
     */
    ElNotificationContainer.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return ElNotificationContainer;
}());

function ElNotificationContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ElNotificationContainer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElNotificationContainer.ctorParameters;
    /** @type {?} */
    ElNotificationContainer.prototype.id;
    /** @type {?} */
    ElNotificationContainer.prototype.height;
    /** @type {?} */
    ElNotificationContainer.prototype.offset;
    /** @type {?} */
    ElNotificationContainer.prototype.type;
    /** @type {?} */
    ElNotificationContainer.prototype.duration;
    /** @type {?} */
    ElNotificationContainer.prototype.iconClass;
    /** @type {?} */
    ElNotificationContainer.prototype.customClass;
    /** @type {?} */
    ElNotificationContainer.prototype.zIndex;
    /** @type {?} */
    ElNotificationContainer.prototype.position;
    /** @type {?} */
    ElNotificationContainer.prototype.title;
    /** @type {?} */
    ElNotificationContainer.prototype.message;
    /** @type {?} */
    ElNotificationContainer.prototype.showBox;
    /** @type {?} */
    ElNotificationContainer.prototype.timer;
    /** @type {?} */
    ElNotificationContainer.prototype.horizontalDirection;
    /** @type {?} */
    ElNotificationContainer.prototype.onClose;
    /** @type {?} */
    ElNotificationContainer.prototype.onDestroy;
    /** @type {?} */
    ElNotificationContainer.prototype.el;
}
//# sourceMappingURL=notification.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/notification/notification.service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/element-angular/release/notification/notification.service.js ***!
  \***********************************************************************************/
/*! exports provided: ElNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElNotificationService", function() { return ElNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification */ "./node_modules/element-angular/release/notification/notification.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");



var ElNotificationService = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} dynamic
     */
    function ElNotificationService(root, dynamic) {
        this.root = root;
        this.dynamic = dynamic;
        this.components = [];
        this.createComponent();
    }
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    ElNotificationService.prototype.show = function (msg, title) {
        var _this = this;
        var /** @type {?} */ len = this.components.length;
        if (len === 0 || this.components[len - 1].init) {
            this.createComponent();
        }
        // mark the component
        var /** @type {?} */ currentLen = this.components.length;
        var /** @type {?} */ current = this.components[currentLen - 1];
        current.init = true;
        current.instance.setContent(msg, title);
        // init current component
        if (currentLen > 1) {
            var /** @type {?} */ lastInstance = this.components[currentLen - 2].instance;
            current.instance.offset = lastInstance.height + lastInstance.offset + 15;
        }
        current.instance.onDestroy = function () {
            var /** @type {?} */ index = _this.components.findIndex(function (com) { return com.id === current.id; });
            // reflow top style
            _this.components.forEach(function (com, i) {
                if (i <= index)
                    return;
                com.instance.offset = com.instance.offset - current.instance.height - 15;
            });
            // component detach and remove element
            _this.dynamic.destroy(current.copy);
            // remove empty item
            _this.components.splice(index, 1);
        };
        var /** @type {?} */ timer = setTimeout(function () {
            current.instance.show();
            clearTimeout(timer);
        }, 0);
    };
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    ElNotificationService.prototype.success = function (msg, title) {
        this.setOptions({ type: 'success' });
        this.show(msg, title);
    };
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    ElNotificationService.prototype.warning = function (msg, title) {
        this.setOptions({ type: 'warning' });
        this.show(msg, title);
    };
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    ElNotificationService.prototype.info = function (msg, title) {
        this.setOptions({ type: 'info' });
        this.show(msg, title);
    };
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    ElNotificationService.prototype.error = function (msg, title) {
        this.setOptions({ type: 'error' });
        this.show(msg, title);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    ElNotificationService.prototype.setOptions = function (options) {
        if (this.components.length === 0 || this.components[this.components.length - 1].init) {
            this.createComponent();
        }
        var /** @type {?} */ last = this.components[this.components.length - 1];
        last.instance = Object.assign(last.instance, options);
    };
    /**
     * @return {?}
     */
    ElNotificationService.prototype.createComponent = function () {
        var /** @type {?} */ com = this.dynamic.generator(_notification__WEBPACK_IMPORTED_MODULE_1__["ElNotificationContainer"]);
        this.components.push({
            instance: com.instance,
            id: com.instance.id,
            copy: com,
            init: false
        });
    };
    ElNotificationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    ElNotificationService.ctorParameters = function () { return [
        { type: _notification__WEBPACK_IMPORTED_MODULE_1__["ElNotificationContainer"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_2__["ExDynamicService"], },
    ]; };
    return ElNotificationService;
}());

function ElNotificationService_tsickle_Closure_declarations() {
    /** @type {?} */
    ElNotificationService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElNotificationService.ctorParameters;
    /** @type {?} */
    ElNotificationService.prototype.components;
    /** @type {?} */
    ElNotificationService.prototype.root;
    /** @type {?} */
    ElNotificationService.prototype.dynamic;
}
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/pagination/children/button.js":
/*!****************************************************************************!*\
  !*** ./node_modules/element-angular/release/pagination/children/button.js ***!
  \****************************************************************************/
/*! exports provided: ElPaginationButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElPaginationButton", function() { return ElPaginationButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElPaginationButton = /** @class */ (function () {
    function ElPaginationButton() {
        this.disabled = false;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} step
     * @return {?}
     */
    ElPaginationButton.prototype.clickHandle = function (step) {
        if (this.disabled)
            return;
        this.next.emit(step);
    };
    ElPaginationButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-pagination-btn',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <button type=\"button\" class=\"btn-prev\"\n      *ngIf=\"dir === 'left'\"\n      [class.disabled]=\"disabled\"\n      (click)=\"clickHandle(-1)\">\n      <i class=\"el-icon el-icon-arrow-left\"></i>\n    </button>\n    <button type=\"button\" class=\"btn-next\"\n      *ngIf=\"dir === 'right'\"\n      [class.disabled]=\"disabled\"\n      (click)=\"clickHandle(1)\">\n    <i class=\"el-icon el-icon-arrow-right\"></i>\n    </button>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElPaginationButton.ctorParameters = function () { return []; };
    ElPaginationButton.propDecorators = {
        'dir': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'next': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElPaginationButton;
}());

function ElPaginationButton_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationButton.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationButton.ctorParameters;
    /** @type {?} */
    ElPaginationButton.propDecorators;
    /** @type {?} */
    ElPaginationButton.prototype.dir;
    /** @type {?} */
    ElPaginationButton.prototype.disabled;
    /** @type {?} */
    ElPaginationButton.prototype.next;
}
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/pagination/children/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/element-angular/release/pagination/children/index.js ***!
  \***************************************************************************/
/*! exports provided: ElPaginationButton, ElPaginationPager, ElPaginationSize, ElPaginationJump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./node_modules/element-angular/release/pagination/children/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElPaginationButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["ElPaginationButton"]; });

/* harmony import */ var _pager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pager */ "./node_modules/element-angular/release/pagination/children/pager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElPaginationPager", function() { return _pager__WEBPACK_IMPORTED_MODULE_1__["ElPaginationPager"]; });

/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size */ "./node_modules/element-angular/release/pagination/children/size.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElPaginationSize", function() { return _size__WEBPACK_IMPORTED_MODULE_2__["ElPaginationSize"]; });

/* harmony import */ var _jump__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jump */ "./node_modules/element-angular/release/pagination/children/jump.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElPaginationJump", function() { return _jump__WEBPACK_IMPORTED_MODULE_3__["ElPaginationJump"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/pagination/children/jump.js":
/*!**************************************************************************!*\
  !*** ./node_modules/element-angular/release/pagination/children/jump.js ***!
  \**************************************************************************/
/*! exports provided: ElPaginationJump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElPaginationJump", function() { return ElPaginationJump; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElPaginationJump = /** @class */ (function () {
    function ElPaginationJump() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} page
     * @param {?} max
     * @return {?}
     */
    ElPaginationJump.nextPageNumber = function (page, max) {
        if (page <= 1)
            return 1;
        if (page >= max)
            return max;
        return page;
    };
    /**
     * @param {?} nextValue
     * @return {?}
     */
    ElPaginationJump.prototype.changeHandle = function (nextValue) {
        if (Number.isNaN(+nextValue))
            return;
        var /** @type {?} */ next = ElPaginationJump.nextPageNumber(+nextValue, this.max);
        var /** @type {?} */ pre = this.model;
        this.model = Math.round(next);
        this.next.emit(this.model - pre);
    };
    ElPaginationJump.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-pagination-jump',
                    template: "\n    <span class=\"el-pagination__jump\">\n      \u524D\u5F80\n    <div class=\"el-input el-pagination__editor is-in-pagination\">\n      <input class=\"el-input__inner\" type=\"number\" #input\n        autocomplete=\"off\" rows=\"2\"\n        [min]=\"1\" [max]=\"max\" [ngModel]=\"model\"\n        (keyup.enter)=\"changeHandle(input.value)\" (blur)=\"changeHandle(input.value)\"/>\n    </div>\n      \u9875\n    </span>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElPaginationJump.ctorParameters = function () { return []; };
    ElPaginationJump.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'next': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElPaginationJump;
}());

function ElPaginationJump_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationJump.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationJump.ctorParameters;
    /** @type {?} */
    ElPaginationJump.propDecorators;
    /** @type {?} */
    ElPaginationJump.prototype.model;
    /** @type {?} */
    ElPaginationJump.prototype.max;
    /** @type {?} */
    ElPaginationJump.prototype.next;
}
//# sourceMappingURL=jump.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/pagination/children/pager.js":
/*!***************************************************************************!*\
  !*** ./node_modules/element-angular/release/pagination/children/pager.js ***!
  \***************************************************************************/
/*! exports provided: ElPaginationPager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElPaginationPager", function() { return ElPaginationPager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElPaginationPager = /** @class */ (function () {
    function ElPaginationPager() {
        this.current = 1;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPrevMore = false;
        this.showNextMore = false;
        this.quicknextIconClass = 'el-icon-more';
        this.quickprevIconClass = 'el-icon-more';
    }
    /**
     * @param {?} minValue
     * @return {?}
     */
    ElPaginationPager.pagerGenerator = function (minValue) {
        var /** @type {?} */ target = new Array(5).fill('').map(function (v, i) { return i + minValue; });
        return target;
    };
    /**
     * Always show 5 numbers, excluding head and foot
     * like: 1 ... < 5, 6, 7, 8, 9 > ... 100
     *
     * jump page button is [showPrevMore] and [showNextMore]
     *
     * @param {?} current
     * @param {?} count
     * @return {?} number[], like: [2, 3, 4, 5, 6]
     *
     */
    ElPaginationPager.prototype.makePagers = function (current, count) {
        var /** @type {?} */ pagerCount = 7;
        if (count < pagerCount) {
            this.setMoreBtn(false, false);
            var /** @type {?} */ target = ElPaginationPager.pagerGenerator(2);
            target.length = count - 2 >= 0 ? count - 2 : 0;
            return target;
        }
        var /** @type {?} */ max = current + 2;
        var /** @type {?} */ min = current - 2;
        if (max >= count) {
            this.setMoreBtn(true, false);
            return ElPaginationPager.pagerGenerator(count - 5);
        }
        if (min <= 2) {
            this.setMoreBtn(false, true);
            return ElPaginationPager.pagerGenerator(2);
        }
        this.setMoreBtn(true, true);
        return ElPaginationPager.pagerGenerator(min);
    };
    /**
     * @param {?} prev
     * @param {?} next
     * @return {?}
     */
    ElPaginationPager.prototype.setMoreBtn = function (prev, next) {
        this.showPrevMore = prev;
        this.showNextMore = next;
    };
    /**
     * @param {?} to
     * @return {?}
     */
    ElPaginationPager.prototype.clickHandle = function (to) {
        var /** @type {?} */ step = to - this.current;
        this.next.emit(step);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    ElPaginationPager.prototype.jumpHandle = function (step) {
        this.next.emit(step);
    };
    /**
     * @return {?}
     */
    ElPaginationPager.prototype.ngOnInit = function () {
        this.pagers = this.makePagers(this.current, this.count);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElPaginationPager.prototype.ngOnChanges = function (changes) {
        if (!changes)
            return;
        this.pagers = this.makePagers(this.current, this.count);
    };
    ElPaginationPager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-pagination-pager',
                    template: "\n    <ul class=\"el-pager\">\n      <li class=\"number\" [class.active]=\"current === 1\"\n        (click)=\"clickHandle(1)\"\n        *ngIf=\"count > 0\">1</li>\n      <li *ngIf=\"showPrevMore\"\n        [class]=\"'el-icon more btn-quickprev ' + quickprevIconClass\"\n        (click)=\"jumpHandle(-5)\"\n        (mouseenter)=\"quickprevIconClass = 'el-icon-d-arrow-left'\"\n        (mouseleave)=\"quickprevIconClass = 'el-icon-more'\"></li>\n      <li class=\"number\"\n        *ngFor=\"let pager of pagers\"\n        (click)=\"clickHandle(pager)\"\n        [class.active]=\"current === pager\">{{ pager }}</li>\n      <li [class]=\"'el-icon more btn-quicknext ' + quicknextIconClass\"\n        *ngIf=\"showNextMore\"\n        (click)=\"jumpHandle(5)\"\n        (mouseenter)=\"quicknextIconClass = 'el-icon-d-arrow-right'\"\n        (mouseleave)=\"quicknextIconClass = 'el-icon-more'\"></li>\n      <li class=\"number\"\n        [class.active]=\"current === count\"\n        (click)=\"clickHandle(count)\"\n        *ngIf=\"count > 1\">{{ count }}</li>\n    </ul>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElPaginationPager.ctorParameters = function () { return []; };
    ElPaginationPager.propDecorators = {
        'current': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'count': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'next': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElPaginationPager;
}());

function ElPaginationPager_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationPager.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationPager.ctorParameters;
    /** @type {?} */
    ElPaginationPager.propDecorators;
    /** @type {?} */
    ElPaginationPager.prototype.current;
    /** @type {?} */
    ElPaginationPager.prototype.count;
    /** @type {?} */
    ElPaginationPager.prototype.next;
    /** @type {?} */
    ElPaginationPager.prototype.pagers;
    /** @type {?} */
    ElPaginationPager.prototype.showPrevMore;
    /** @type {?} */
    ElPaginationPager.prototype.showNextMore;
    /** @type {?} */
    ElPaginationPager.prototype.quicknextIconClass;
    /** @type {?} */
    ElPaginationPager.prototype.quickprevIconClass;
}
//# sourceMappingURL=pager.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/pagination/children/size.js":
/*!**************************************************************************!*\
  !*** ./node_modules/element-angular/release/pagination/children/size.js ***!
  \**************************************************************************/
/*! exports provided: ElPaginationSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElPaginationSize", function() { return ElPaginationSize; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElPaginationSize = /** @class */ (function () {
    function ElPaginationSize() {
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ElPaginationSize.prototype.ngOnInit = function () {
        this.options = this.sizes.map(function (size) { return ({
            value: size,
            label: size + '条/页',
        }); });
    };
    ElPaginationSize.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-pagination-size',
                    template: "\n    <el-select [model]=\"model\" (modelChange)=\"modelChange.emit($event)\"\n      popper-class=\"is-arrow-fixed\">\n      <el-option *ngFor=\"let item of options\"\n        [label]=\"item.label\"\n        [value]=\"item.value\"></el-option>\n    </el-select>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElPaginationSize.ctorParameters = function () { return []; };
    ElPaginationSize.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'sizes': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElPaginationSize;
}());

function ElPaginationSize_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationSize.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationSize.ctorParameters;
    /** @type {?} */
    ElPaginationSize.propDecorators;
    /** @type {?} */
    ElPaginationSize.prototype.model;
    /** @type {?} */
    ElPaginationSize.prototype.sizes;
    /** @type {?} */
    ElPaginationSize.prototype.modelChange;
    /** @type {?} */
    ElPaginationSize.prototype.options;
}
//# sourceMappingURL=size.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/pagination/module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/pagination/module.js ***!
  \*******************************************************************/
/*! exports provided: ElPaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElPaginationModule", function() { return ElPaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select/module */ "./node_modules/element-angular/release/select/module.js");
/* harmony import */ var _children_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./children/index */ "./node_modules/element-angular/release/pagination/children/index.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination */ "./node_modules/element-angular/release/pagination/pagination.js");






var ElPaginationModule = /** @class */ (function () {
    function ElPaginationModule() {
    }
    /**
     * @return {?}
     */
    ElPaginationModule.forRoot = function () {
        return { ngModule: ElPaginationModule, providers: [] };
    };
    ElPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _pagination__WEBPACK_IMPORTED_MODULE_5__["ElPagination"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElPaginationButton"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElPaginationPager"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElPaginationSize"],
                        _children_index__WEBPACK_IMPORTED_MODULE_4__["ElPaginationJump"],
                    ],
                    exports: [_pagination__WEBPACK_IMPORTED_MODULE_5__["ElPagination"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _select_module__WEBPACK_IMPORTED_MODULE_3__["ElSelectModule"]],
                    entryComponents: [_pagination__WEBPACK_IMPORTED_MODULE_5__["ElPagination"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElPaginationModule.ctorParameters = function () { return []; };
    return ElPaginationModule;
}());

function ElPaginationModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/pagination/pagination.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/pagination/pagination.js ***!
  \***********************************************************************/
/*! exports provided: ElPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElPagination", function() { return ElPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pagination_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.props */ "./node_modules/element-angular/release/pagination/pagination.props.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ElPagination = /** @class */ (function (_super) {
    __extends(ElPagination, _super);
    function ElPagination() {
        var _this = _super.call(this) || this;
        _this.showPager = true;
        _this.showPrev = true;
        _this.showNext = true;
        _this.showTotal = true;
        _this.showSize = true;
        _this.showJumper = true;
        return _this;
    }
    /**
     * @param {?} ElName
     * @param {?} layout
     * @return {?}
     */
    ElPagination.showLayout = function (ElName, layout) {
        var /** @type {?} */ member = layout.find(function (name) { return name === ElName; });
        return !!member;
    };
    /**
     * @param {?} step
     * @return {?}
     */
    ElPagination.prototype.nextHandle = function (step) {
        var /** @type {?} */ nextPage = this.model + step;
        this.model = nextPage < 1 ? 1 : nextPage > this.total ? this.total : nextPage;
        this.modelChange.emit(this.model);
    };
    /**
     * @param {?} nextPageSize
     * @return {?}
     */
    ElPagination.prototype.updatePageSize = function (nextPageSize) {
        this.pageCount = Math.ceil(this.total / nextPageSize);
        this.model = 1;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElPagination.prototype.ngOnChanges = function (changes) {
        if (!changes)
            return;
        if (changes.total && changes.total.isFirstChange())
            return;
        this.updateLayout();
    };
    /**
     * @return {?}
     */
    ElPagination.prototype.ngOnInit = function () {
        if (!this.pageCount && this.total === undefined) {
            return console.warn('el-pagination required [total]');
        }
        this.updateLayout();
    };
    /**
     * @return {?}
     */
    ElPagination.prototype.updateLayout = function () {
        if (this.total === undefined || this.total === null) {
            this.total = Math.round(this.pageCount * this.pageSize);
        }
        this.pageCount = Math.ceil(this.total / this.pageSize) || 1;
        this.showPager = ElPagination.showLayout('pager', this.layout);
        this.showPrev = ElPagination.showLayout('prev', this.layout);
        this.showNext = ElPagination.showLayout('next', this.layout);
        this.showTotal = ElPagination.showLayout('total', this.layout);
        this.showSize = ElPagination.showLayout('size', this.layout);
        this.showJumper = ElPagination.showLayout('jumper', this.layout);
    };
    ElPagination.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-pagination',
                    template: "\n    <div class=\"el-pagination\"\n      [class.el-pagination--small]=\"small\"\n      style=\"display: inline-table;\">\n      <span class=\"el-pagination__total\" *ngIf=\"showTotal\">\u5171 {{total}} \u6761</span>\n      <el-pagination-size *ngIf=\"showSize\"\n        [model]=\"pageSize\" [sizes]=\"pageSizes\"\n        (modelChange)=\"updatePageSize($event)\">\n      </el-pagination-size>\n      \n      <el-pagination-btn dir=\"left\" (next)=\"nextHandle($event)\"\n        *ngIf=\"showPrev\"\n        [disabled]=\"model <= 1\">\n      </el-pagination-btn>\n      <el-pagination-pager [current]=\"model\" [count]=\"pageCount\"\n        *ngIf=\"showPager\"\n        (next)=\"nextHandle($event)\">\n      </el-pagination-pager>\n      <el-pagination-btn dir=\"right\" (next)=\"nextHandle($event)\"\n        *ngIf=\"showNext\"\n        [disabled]=\"model === pageCount\">\n      </el-pagination-btn>\n\n      <el-pagination-jump *ngIf=\"showJumper\"\n        [model]=\"model\" [max]=\"pageCount\"\n        (next)=\"nextHandle($event)\">\n      </el-pagination-jump>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElPagination.ctorParameters = function () { return []; };
    return ElPagination;
}(_pagination_props__WEBPACK_IMPORTED_MODULE_1__["ElPaginationProps"]));

function ElPagination_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPagination.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPagination.ctorParameters;
    /** @type {?} */
    ElPagination.prototype.showPager;
    /** @type {?} */
    ElPagination.prototype.showPrev;
    /** @type {?} */
    ElPagination.prototype.showNext;
    /** @type {?} */
    ElPagination.prototype.showTotal;
    /** @type {?} */
    ElPagination.prototype.showSize;
    /** @type {?} */
    ElPagination.prototype.showJumper;
}
//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/pagination/pagination.props.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/element-angular/release/pagination/pagination.props.js ***!
  \*****************************************************************************/
/*! exports provided: ElPaginationProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElPaginationProps", function() { return ElPaginationProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElPaginationProps = /** @class */ (function () {
    function ElPaginationProps() {
        this.small = false;
        this.layout = ['prev', 'pager', 'next', 'total'];
        this.pageSize = 10;
        this.pageSizes = [10, 20, 30, 40, 50, 100];
        this.model = 1; // current page
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ElPaginationProps.propDecorators = {
        'small': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'total': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'layout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['page-size',] },],
        'pageSizes': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['page-sizes',] },],
        'pageCount': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['page-count',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElPaginationProps;
}());

function ElPaginationProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationProps.propDecorators;
    /** @type {?} */
    ElPaginationProps.prototype.small;
    /** @type {?} */
    ElPaginationProps.prototype.total;
    /** @type {?} */
    ElPaginationProps.prototype.layout;
    /** @type {?} */
    ElPaginationProps.prototype.pageSize;
    /** @type {?} */
    ElPaginationProps.prototype.pageSizes;
    /** @type {?} */
    ElPaginationProps.prototype.pageCount;
    /** @type {?} */
    ElPaginationProps.prototype.model;
    /** @type {?} */
    ElPaginationProps.prototype.modelChange;
}
//# sourceMappingURL=pagination.props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/progress/module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/progress/module.js ***!
  \*****************************************************************/
/*! exports provided: ElProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElProgressModule", function() { return ElProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress */ "./node_modules/element-angular/release/progress/progress.js");



var ElProgressModule = /** @class */ (function () {
    function ElProgressModule() {
    }
    /**
     * @return {?}
     */
    ElProgressModule.forRoot = function () {
        return { ngModule: ElProgressModule, providers: [] };
    };
    ElProgressModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_progress__WEBPACK_IMPORTED_MODULE_2__["Elprogress"]],
                    exports: [_progress__WEBPACK_IMPORTED_MODULE_2__["Elprogress"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_progress__WEBPACK_IMPORTED_MODULE_2__["Elprogress"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElProgressModule.ctorParameters = function () { return []; };
    return ElProgressModule;
}());

function ElProgressModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElProgressModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElProgressModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/progress/progress.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/progress/progress.js ***!
  \*******************************************************************/
/*! exports provided: Elprogress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elprogress", function() { return Elprogress; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


var Elprogress = /** @class */ (function () {
    /**
     * @param {?} sanitizer
     */
    function Elprogress(sanitizer) {
        this.sanitizer = sanitizer;
        this.percentage = 0;
        this.type = 'line';
        this.strokeWidth = 6;
        this.textInside = false;
        this.showText = true;
        // only in type=circle
        this.width = 126;
    }
    /**
     * @return {?}
     */
    Elprogress.prototype.progressTextSize = function () {
        return this.type === 'line' ? 12 + this.strokeWidth * 0.4
            : this.width * 0.111111 + 2;
    };
    /**
     * @return {?}
     */
    Elprogress.prototype.makeIconClass = function () {
        if (this.type === 'line') {
            return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-cross';
        }
        return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
    };
    /**
     * @return {?}
     */
    Elprogress.prototype.makeStroke = function () {
        if (this.status === 'success')
            return '#13ce66';
        if (this.status === 'exception')
            return '#ff4949';
        return '#20a0ff';
    };
    /**
     * @return {?}
     */
    Elprogress.prototype.makeTrackPath = function () {
        var /** @type {?} */ radius = ~~(50 - Number.parseFloat(this.relativeStrokeWidth) / 2);
        return "M 50 50 m 0 -" + radius + " a " + radius + " " + radius + " 0 1 1 0 " + radius * 2 + " a " + radius + " " + radius + " 0 1 1 0 -" + radius * 2;
    };
    /**
     * @return {?}
     */
    Elprogress.prototype.svgStyles = function () {
        var /** @type {?} */ perimeter = (50 - parseFloat(this.relativeStrokeWidth) / 2) * 2 * Math.PI;
        var /** @type {?} */ styles = "stroke-dasharray: " + perimeter + "px, " + perimeter + "px;";
        styles += "stroke-dashoffset: " + (1 - this.percentage / 100) * perimeter + "px;";
        styles += 'transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease';
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    Elprogress.prototype.colorStryles = function () {
        var /** @type {?} */ styles = "width: " + this.percentage + "%;" +
            (this.activeColor ? "background-color: " + this.activeColor + ";" : '');
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    Elprogress.prototype.ngOnInit = function () {
        this.percentage > 100 && (this.percentage = 100);
        this.relativeStrokeWidth = (this.strokeWidth / this.width * 100).toFixed(1);
    };
    Elprogress.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-progress',
                    template: "\n    <div [class]=\"'el-progress el-progress--' + type + (status ? ' is-' + status : '')\"\n      [class.el-progress--without-text]=\"!showText\"\n      [class.el-progress--text-inside]=\"textInside\">\n      <div class=\"el-progress-bar\" *ngIf=\"type === 'line'\">\n        <div class=\"el-progress-bar__outer\" [ngStyle]=\"{height: strokeWidth + 'px'}\">\n          <div class=\"el-progress-bar__inner\" [style]=\"colorStryles()\">\n            <div class=\"el-progress-bar__innerText\" *ngIf=\"showText && textInside\">{{percentage}}%</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"el-progress-circle\" *ngIf=\"type === 'circle'\" [ngStyle]=\"{height: width + 'px', width: width + 'px'}\">\n        <svg viewBox=\"0 0 100 100\">\n          <path class=\"el-progress-circle__track\" [attr.d]=\"makeTrackPath()\" stroke=\"#e5e9f2\"\n            [attr.stroke-width]=\"relativeStrokeWidth\" fill=\"none\"></path>\n          <path class=\"el-progress-circle__path\" [attr.d]=\"makeTrackPath()\" stroke-linecap=\"round\" [attr.stroke]=\"makeStroke()\"\n            [attr.stroke-width]=\"relativeStrokeWidth\" fill=\"none\" [style]=\"svgStyles()\"></path>\n        </svg>\n      </div>\n      <div class=\"el-progress__text\" *ngIf=\"showText && !textInside\"\n           [ngStyle]=\"{fontSize: progressTextSize + 'px'}\">\n        <ng-container *ngIf=\"!status\">{{percentage}}%</ng-container>\n        <i *ngIf=\"status\" [class]=\"makeIconClass()\"></i>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    Elprogress.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    Elprogress.propDecorators = {
        'percentage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'status': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'strokeWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['stroke-width',] },],
        'textInside': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['text-inside',] },],
        'showText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-text',] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'activeColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['active-color',] },],
    };
    return Elprogress;
}());

function Elprogress_tsickle_Closure_declarations() {
    /** @type {?} */
    Elprogress.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Elprogress.ctorParameters;
    /** @type {?} */
    Elprogress.propDecorators;
    /** @type {?} */
    Elprogress.prototype.percentage;
    /** @type {?} */
    Elprogress.prototype.type;
    /** @type {?} */
    Elprogress.prototype.status;
    /** @type {?} */
    Elprogress.prototype.strokeWidth;
    /** @type {?} */
    Elprogress.prototype.textInside;
    /** @type {?} */
    Elprogress.prototype.showText;
    /** @type {?} */
    Elprogress.prototype.width;
    /** @type {?} */
    Elprogress.prototype.activeColor;
    /** @type {?} */
    Elprogress.prototype.relativeStrokeWidth;
    /** @type {?} */
    Elprogress.prototype.sanitizer;
}
//# sourceMappingURL=progress.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/radio/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/element-angular/release/radio/module.js ***!
  \**************************************************************/
/*! exports provided: ElRadiosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRadiosModule", function() { return ElRadiosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-group */ "./node_modules/element-angular/release/radio/radio-group.js");
/* harmony import */ var _radio_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-button */ "./node_modules/element-angular/release/radio/radio-button.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio */ "./node_modules/element-angular/release/radio/radio.js");






var ElRadiosModule = /** @class */ (function () {
    function ElRadiosModule() {
    }
    /**
     * @return {?}
     */
    ElRadiosModule.forRoot = function () {
        return { ngModule: ElRadiosModule, providers: [] };
    };
    ElRadiosModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_radio__WEBPACK_IMPORTED_MODULE_5__["ElRadio"], _radio_group__WEBPACK_IMPORTED_MODULE_3__["ElRadioGroup"], _radio_button__WEBPACK_IMPORTED_MODULE_4__["ElRadioButton"]],
                    exports: [_radio__WEBPACK_IMPORTED_MODULE_5__["ElRadio"], _radio_group__WEBPACK_IMPORTED_MODULE_3__["ElRadioGroup"], _radio_button__WEBPACK_IMPORTED_MODULE_4__["ElRadioButton"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    entryComponents: [_radio__WEBPACK_IMPORTED_MODULE_5__["ElRadio"], _radio_group__WEBPACK_IMPORTED_MODULE_3__["ElRadioGroup"], _radio_button__WEBPACK_IMPORTED_MODULE_4__["ElRadioButton"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElRadiosModule.ctorParameters = function () { return []; };
    return ElRadiosModule;
}());

function ElRadiosModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRadiosModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRadiosModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/radio/radio-button.js":
/*!********************************************************************!*\
  !*** ./node_modules/element-angular/release/radio/radio-button.js ***!
  \********************************************************************/
/*! exports provided: ElRadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRadioButton", function() { return ElRadioButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-group */ "./node_modules/element-angular/release/radio/radio-group.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");



var ElRadioButton = /** @class */ (function () {
    /**
     * @param {?} rootGroup
     * @param {?} el
     */
    function ElRadioButton(rootGroup, el) {
        this.rootGroup = rootGroup;
        this.el = el;
        this.elDisabled = false;
        this.nativeName = '';
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showLabel = false;
        this.parentIsGroup = false;
    }
    Object.defineProperty(ElRadioButton.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ElRadioButton.prototype.changeHandle = function () {
        if (this.parentIsGroup) {
            return this.rootGroup.changeHandle(this.label);
        }
        this.modelChange.emit(this.label);
    };
    /**
     * @return {?}
     */
    ElRadioButton.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ nativeElement = this.el.nativeElement;
        var /** @type {?} */ update = function () {
            _this.elDisabled = _this.rootGroup.elDisabled;
            _this.model = _this.rootGroup.model;
            _this.size = _this.rootGroup.buttonSize;
            _this.activeStyles = {
                backgroundColor: _this.rootGroup.fillColor || '',
                borderColor: _this.rootGroup.fillColor || '',
                boxShadow: _this.rootGroup.fillColor ? "-1px 0 0 0 " + _this.rootGroup.fillColor : '',
                color: _this.rootGroup.textColor || '',
            };
        };
        this.parentIsGroup = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["isParentTag"])(nativeElement, 'el-radio-group');
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["removeNgTag"])(nativeElement);
        if (this.parentIsGroup && this.rootGroup) {
            update();
            this.rootGroup.subscriber.push(update);
        }
    };
    ElRadioButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-radio-button',
                    template: "\n    <label [class]=\"'el-radio-button' + (size ? ' el-radio-button--' + size : '')\"\n      [class.is-disabled]=\"elDisabled\"\n      [class.is-active]=\"model === label\">\n      <input class=\"el-radio-button__orig-radio\" type=\"radio\"\n        [value]=\"label\" [name]=\"nativeName\" [disabled]=\"elDisabled\"\n        [ngModel]=\"model\" (ngModelChange)=\"changeHandle()\">\n      <span class=\"el-radio-button__inner\" [ngStyle]=\"model === label && activeStyles\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElRadioButton.ctorParameters = function () { return [
        { type: _radio_group__WEBPACK_IMPORTED_MODULE_1__["ElRadioGroup"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElRadioButton.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nativeName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['name',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElRadioButton;
}());

function ElRadioButton_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRadioButton.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRadioButton.ctorParameters;
    /** @type {?} */
    ElRadioButton.propDecorators;
    /** @type {?} */
    ElRadioButton.prototype.elDisabled;
    /** @type {?} */
    ElRadioButton.prototype.label;
    /** @type {?} */
    ElRadioButton.prototype.nativeName;
    /** @type {?} */
    ElRadioButton.prototype.model;
    /** @type {?} */
    ElRadioButton.prototype.modelChange;
    /** @type {?} */
    ElRadioButton.prototype.size;
    /** @type {?} */
    ElRadioButton.prototype.showLabel;
    /** @type {?} */
    ElRadioButton.prototype.parentIsGroup;
    /** @type {?} */
    ElRadioButton.prototype.activeStyles;
    /** @type {?} */
    ElRadioButton.prototype.rootGroup;
    /** @type {?} */
    ElRadioButton.prototype.el;
}
//# sourceMappingURL=radio-button.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/radio/radio-group.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/radio/radio-group.js ***!
  \*******************************************************************/
/*! exports provided: ElRadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRadioGroup", function() { return ElRadioGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var ElRadioGroup = /** @class */ (function () {
    function ElRadioGroup() {
        this.elDisabled = false;
        this.fillColor = '#20a0ff';
        this.textColor = '#ffffff';
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriber = [];
        this.controlChange = function () { };
        this.controlTouch = function () { };
    }
    Object.defineProperty(ElRadioGroup.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} nextValue
     * @return {?}
     */
    ElRadioGroup.prototype.changeHandle = function (nextValue) {
        var _this = this;
        setTimeout(function () {
            _this.model = nextValue;
            _this.modelChange.emit(nextValue);
            _this.controlChange(nextValue);
            _this.subscriber.forEach(function (sub) { return sub(); });
        }, 0);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElRadioGroup.prototype.writeValue = function (value) {
        this.model = value;
        this.changeHandle(this.model);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElRadioGroup.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElRadioGroup.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElRadioGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-radio-group',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElRadioGroup; }),
                            multi: true,
                        }],
                    template: "\n    <div class=\"el-radio-group\" role=\"radiogroup\">\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElRadioGroup.ctorParameters = function () { return []; };
    ElRadioGroup.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'buttonSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['size',] },],
        'fillColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fill',] },],
        'textColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElRadioGroup;
}());

function ElRadioGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRadioGroup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRadioGroup.ctorParameters;
    /** @type {?} */
    ElRadioGroup.propDecorators;
    /** @type {?} */
    ElRadioGroup.prototype.elDisabled;
    /** @type {?} */
    ElRadioGroup.prototype.buttonSize;
    /** @type {?} */
    ElRadioGroup.prototype.fillColor;
    /** @type {?} */
    ElRadioGroup.prototype.textColor;
    /** @type {?} */
    ElRadioGroup.prototype.model;
    /** @type {?} */
    ElRadioGroup.prototype.modelChange;
    /** @type {?} */
    ElRadioGroup.prototype.subscriber;
    /** @type {?} */
    ElRadioGroup.prototype.controlChange;
    /** @type {?} */
    ElRadioGroup.prototype.controlTouch;
}
//# sourceMappingURL=radio-group.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/radio/radio.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/radio/radio.js ***!
  \*************************************************************/
/*! exports provided: ElRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRadio", function() { return ElRadio; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-group */ "./node_modules/element-angular/release/radio/radio-group.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ElRadio = /** @class */ (function () {
    /**
     * @param {?} rootGroup
     * @param {?} el
     */
    function ElRadio(rootGroup, el) {
        this.rootGroup = rootGroup;
        this.el = el;
        this.elDisabled = false;
        this.label = '';
        this.nativeName = '';
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFocus = false;
        this.parentIsGroup = false;
        this.controlChange = function () { };
        this.controlTouch = function () { };
        console.log(this.elDisabled);
    }
    Object.defineProperty(ElRadio.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ElRadio.prototype.changeHandle = function () {
        if (this.parentIsGroup) {
            return this.rootGroup.changeHandle(this.label);
        }
        this.model = this.label;
        this.modelChange.emit(this.label);
        this.controlChange(this.label);
    };
    /**
     * @return {?}
     */
    ElRadio.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ nativeElement = this.el.nativeElement;
        var /** @type {?} */ update = function () {
            if (_this.rootGroup.elDisabled) {
                _this.elDisabled = _this.rootGroup.elDisabled;
            }
            _this.model = _this.rootGroup.model;
        };
        this.parentIsGroup = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["isParentTag"])(nativeElement, 'el-radio-group');
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["removeNgTag"])(nativeElement);
        if (this.parentIsGroup && this.rootGroup) {
            update();
            this.rootGroup.subscriber.push(update);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElRadio.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElRadio.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElRadio.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElRadio.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-radio',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElRadio; }),
                            multi: true,
                        }],
                    template: "\n    <label class=\"el-radio\" role=\"radio\" tabindex=\"0\">\n      <span class=\"el-radio__input\"\n        style=\"float: left;\"\n        [class.is-disabled]=\"elDisabled\"\n        [class.is-checked]=\"model === label\"\n        [class.is-focus]=\"isFocus\">\n        <span class=\"el-radio__inner\"></span>\n        <input class=\"el-radio__original\" type=\"radio\"\n          [value]=\"label\" [name]=\"nativeName\" [disabled]=\"elDisabled\"\n          (focus)=\"isFocus = true\" (blur)=\"isFocus = false\"\n          [ngModel]=\"model\" (ngModelChange)=\"changeHandle()\">\n      </span>\n      <span class=\"el-radio__label\"><ng-content></ng-content></span>\n    </label>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElRadio.ctorParameters = function () { return [
        { type: _radio_group__WEBPACK_IMPORTED_MODULE_1__["ElRadioGroup"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElRadio.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nativeName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['name',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElRadio;
}());

function ElRadio_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRadio.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRadio.ctorParameters;
    /** @type {?} */
    ElRadio.propDecorators;
    /** @type {?} */
    ElRadio.prototype.elDisabled;
    /** @type {?} */
    ElRadio.prototype.label;
    /** @type {?} */
    ElRadio.prototype.nativeName;
    /** @type {?} */
    ElRadio.prototype.model;
    /** @type {?} */
    ElRadio.prototype.modelChange;
    /** @type {?} */
    ElRadio.prototype.isFocus;
    /** @type {?} */
    ElRadio.prototype.parentIsGroup;
    /** @type {?} */
    ElRadio.prototype.controlChange;
    /** @type {?} */
    ElRadio.prototype.controlTouch;
    /** @type {?} */
    ElRadio.prototype.rootGroup;
    /** @type {?} */
    ElRadio.prototype.el;
}
//# sourceMappingURL=radio.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/rate/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/rate/module.js ***!
  \*************************************************************/
/*! exports provided: ElRateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRateModule", function() { return ElRateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate */ "./node_modules/element-angular/release/rate/rate.js");



var ElRateModule = /** @class */ (function () {
    function ElRateModule() {
    }
    /**
     * @return {?}
     */
    ElRateModule.forRoot = function () {
        return { ngModule: ElRateModule, providers: [] };
    };
    ElRateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_rate__WEBPACK_IMPORTED_MODULE_2__["ElRate"]],
                    exports: [_rate__WEBPACK_IMPORTED_MODULE_2__["ElRate"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_rate__WEBPACK_IMPORTED_MODULE_2__["ElRate"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElRateModule.ctorParameters = function () { return []; };
    return ElRateModule;
}());

function ElRateModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRateModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRateModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/rate/rate.js":
/*!***********************************************************!*\
  !*** ./node_modules/element-angular/release/rate/rate.js ***!
  \***********************************************************/
/*! exports provided: ElRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRate", function() { return ElRate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rate_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate.props */ "./node_modules/element-angular/release/rate/rate.props.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ElRate = /** @class */ (function (_super) {
    __extends(ElRate, _super);
    /**
     * @param {?} sanitizer
     * @param {?} renderer
     */
    function ElRate(sanitizer, renderer) {
        var _this = _super.call(this) || this;
        _this.sanitizer = sanitizer;
        _this.renderer = renderer;
        _this.scores = [];
        _this.controlChange = function () { };
        _this.controlTouch = function () { };
        return _this;
    }
    /**
     * @param {?} __0
     * @param {?=} index
     * @param {?=} reset
     * @return {?}
     */
    ElRate.prototype.hoverToggle = function (_a, index, reset) {
        var srcElement = _a.srcElement;
        if (reset === void 0) { reset = false; }
        if (this.elDisabled)
            return;
        var /** @type {?} */ iconElement = srcElement.tagName === 'I' ? srcElement : srcElement.children[0];
        if (reset) {
            this.model = this.backupModel;
            this.renderer.removeClass(iconElement, 'hover');
        }
        else {
            this.model = index;
            this.renderer.addClass(iconElement, 'hover');
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ElRate.prototype.selectValue = function (index) {
        if (this.elDisabled)
            return;
        this.model = this.backupModel = index;
        this.modelChange.emit(index);
        this.controlChange;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ElRate.prototype.makeIconClasses = function (index) {
        var /** @type {?} */ voidClass = this.elDisabled ? this.rateMap.elDisabled.class : this.rateMap.void.class;
        var /** @type {?} */ activeItem = this.findCurrentType(this.model, this.rateMap);
        var /** @type {?} */ classes = index <= this.model ? activeItem.class : voidClass;
        return 'el-rate__icon ' + classes;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ElRate.prototype.makeIconStyles = function (index) {
        var /** @type {?} */ voidColor = this.elDisabled ? this.rateMap.elDisabled.color : this.rateMap.void.color;
        var /** @type {?} */ activeItem = this.findCurrentType(this.model, this.rateMap);
        var /** @type {?} */ styles = "color: " + (index <= this.model ? activeItem.color : voidColor) + ";";
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @param {?} index
     * @param {?} rateMap
     * @return {?}
     */
    ElRate.prototype.findCurrentType = function (index, rateMap) {
        if (index <= this.lowThreshold)
            return rateMap.low;
        if (index >= this.highThreshold)
            return rateMap.high;
        return rateMap.medium;
    };
    /**
     * @return {?}
     */
    ElRate.prototype.ngOnInit = function () {
        this.scores = new Array(this.max).fill('');
        this.backupModel = this.model;
        this.rateMap = {
            low: { color: this.colors[0], class: this.iconClasses[0] },
            medium: { color: this.colors[1], class: this.iconClasses[1] },
            high: { color: this.colors[2], class: this.iconClasses[2] },
            void: { color: this.voidColor, class: this.voidIconClass },
            elDisabled: { color: this.disabledVoidColor, class: this.disabledVoidIconClass },
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElRate.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElRate.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElRate.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElRate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-rate',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElRate; }),
                            multi: true
                        }],
                    template: "\n    <div class=\"el-rate\" role=\"slider\">\n      <span *ngFor=\"let s of scores; let i = index\" class=\"el-rate__item\"\n        [ngStyle]=\"{cursor: elDisabled ? 'auto' : 'pointer'}\"\n        (mousemove)=\"hoverToggle($event, i)\"\n        (mouseleave)=\"hoverToggle($event, i, true)\"\n        (click)=\"selectValue(i)\">\n        <i class=\"el-rate__icon\" [style]=\"makeIconStyles(i)\"\n          [class]=\"makeIconClasses(i)\"\n          [class.hover]=\"i\"\n          #rateIcon></i>\n      </span>\n      <span *ngIf=\"showText\" class=\"el-rate__text\" [ngStyle]=\"{ color: textColor }\">\n        {{ texts[model] }}\n      </span>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElRate.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ElRate.propDecorators = {
        'rateIcon': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['rateIcon',] },],
    };
    return ElRate;
}(_rate_props__WEBPACK_IMPORTED_MODULE_1__["ElRateProps"]));

function ElRate_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRate.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRate.ctorParameters;
    /** @type {?} */
    ElRate.propDecorators;
    /** @type {?} */
    ElRate.prototype.rateIcon;
    /** @type {?} */
    ElRate.prototype.scores;
    /** @type {?} */
    ElRate.prototype.rateMap;
    /** @type {?} */
    ElRate.prototype.backupModel;
    /** @type {?} */
    ElRate.prototype.controlChange;
    /** @type {?} */
    ElRate.prototype.controlTouch;
    /** @type {?} */
    ElRate.prototype.sanitizer;
    /** @type {?} */
    ElRate.prototype.renderer;
}
//# sourceMappingURL=rate.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/rate/rate.props.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/rate/rate.props.js ***!
  \*****************************************************************/
/*! exports provided: ElRateProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRateProps", function() { return ElRateProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElRateProps = /** @class */ (function () {
    function ElRateProps() {
        this.elDisabled = false;
        this.max = 5;
        // color and class
        this.colors = ['#F7BA2A', '#F7BA2A', '#F7BA2A'];
        this.voidColor = '#C6D1DE';
        this.iconClasses = ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'];
        this.voidIconClass = 'el-icon-star-off';
        this.disabledVoidColor = '#EFF2F7';
        this.disabledVoidIconClass = 'el-icon-star-on';
        // @Input('allow-half') allowHalf: boolean = false
        this.lowThreshold = 2;
        this.highThreshold = 4;
        // show text
        this.showText = false;
        this.textColor = '#1F2D3D';
        this.texts = ['极差', '失望', '一般', '满意', '惊喜'];
        // bind value
        this.model = 0;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ElRateProps.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    ElRateProps.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'colors': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'voidColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['void-color',] },],
        'iconClasses': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['icon-classes',] },],
        'voidIconClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['void-icon-class',] },],
        'disabledVoidColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled-void-color',] },],
        'disabledVoidIconClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled-void-icon-class',] },],
        'lowThreshold': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['low-threshold',] },],
        'highThreshold': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['high-threshold',] },],
        'showText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-text',] },],
        'textColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['text-color',] },],
        'texts': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElRateProps;
}());

function ElRateProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRateProps.propDecorators;
    /** @type {?} */
    ElRateProps.prototype.elDisabled;
    /** @type {?} */
    ElRateProps.prototype.max;
    /** @type {?} */
    ElRateProps.prototype.colors;
    /** @type {?} */
    ElRateProps.prototype.voidColor;
    /** @type {?} */
    ElRateProps.prototype.iconClasses;
    /** @type {?} */
    ElRateProps.prototype.voidIconClass;
    /** @type {?} */
    ElRateProps.prototype.disabledVoidColor;
    /** @type {?} */
    ElRateProps.prototype.disabledVoidIconClass;
    /** @type {?} */
    ElRateProps.prototype.lowThreshold;
    /** @type {?} */
    ElRateProps.prototype.highThreshold;
    /** @type {?} */
    ElRateProps.prototype.showText;
    /** @type {?} */
    ElRateProps.prototype.textColor;
    /** @type {?} */
    ElRateProps.prototype.texts;
    /** @type {?} */
    ElRateProps.prototype.model;
    /** @type {?} */
    ElRateProps.prototype.modelChange;
}
//# sourceMappingURL=rate.props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/row/module.js":
/*!************************************************************!*\
  !*** ./node_modules/element-angular/release/row/module.js ***!
  \************************************************************/
/*! exports provided: ElRowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRowModule", function() { return ElRowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _row_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row.directive */ "./node_modules/element-angular/release/row/row.directive.js");



var ElRowModule = /** @class */ (function () {
    function ElRowModule() {
    }
    /**
     * @return {?}
     */
    ElRowModule.forRoot = function () {
        return { ngModule: ElRowModule, providers: [] };
    };
    ElRowModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_row_directive__WEBPACK_IMPORTED_MODULE_2__["ElRowDirective"]],
                    exports: [_row_directive__WEBPACK_IMPORTED_MODULE_2__["ElRowDirective"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElRowModule.ctorParameters = function () { return []; };
    return ElRowModule;
}());

function ElRowModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRowModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRowModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/row/row.directive.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/row/row.directive.js ***!
  \*******************************************************************/
/*! exports provided: ElRowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElRowDirective", function() { return ElRowDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


var ElRowDirective = /** @class */ (function () {
    /**
     * @param {?} sanitizer
     * @param {?} el
     */
    function ElRowDirective(sanitizer, el) {
        this.sanitizer = sanitizer;
        this.el = el;
        this.gutter = 0;
        this.justify = 'start';
        this.align = 'top';
        this.nativeClass = ' ';
        this.nativeClass += this.el.nativeElement.classList.value;
    }
    /**
     * @return {?}
     */
    ElRowDirective.prototype.justifyClass = function () {
        return this.justify !== 'start' ? " is-justify-" + this.justify : '';
    };
    /**
     * @return {?}
     */
    ElRowDirective.prototype.alignClass = function () {
        return this.align !== 'top' ? " is-align-" + this.align : '';
    };
    /**
     * @return {?}
     */
    ElRowDirective.prototype.gutterStyle = function () {
        var /** @type {?} */ styleStr = '';
        if (this.gutter) {
            styleStr += "margin-left: -" + this.gutter / 2 + "px;";
            styleStr += "margin-right: -" + this.gutter / 2 + "px;";
        }
        return this.sanitizer.bypassSecurityTrustStyle(styleStr);
    };
    ElRowDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-row]',
                    host: {
                        '[class]': '"el-row" + justifyClass() + alignClass() + nativeClass',
                        '[class.el-row--flex]': 'type === "flex"',
                        '[style]': 'gutterStyle()',
                    },
                },] },
    ];
    /**
     * @nocollapse
     */
    ElRowDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElRowDirective.propDecorators = {
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'gutter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'justify': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'align': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElRowDirective;
}());

function ElRowDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRowDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRowDirective.ctorParameters;
    /** @type {?} */
    ElRowDirective.propDecorators;
    /** @type {?} */
    ElRowDirective.prototype.type;
    /** @type {?} */
    ElRowDirective.prototype.gutter;
    /** @type {?} */
    ElRowDirective.prototype.justify;
    /** @type {?} */
    ElRowDirective.prototype.align;
    /** @type {?} */
    ElRowDirective.prototype.nativeClass;
    /** @type {?} */
    ElRowDirective.prototype.sanitizer;
    /** @type {?} */
    ElRowDirective.prototype.el;
}
//# sourceMappingURL=row.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/select/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/select/module.js ***!
  \***************************************************************/
/*! exports provided: ElSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSelectModule", function() { return ElSelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tag_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/module */ "./node_modules/element-angular/release/tag/module.js");
/* harmony import */ var _input_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/module */ "./node_modules/element-angular/release/input/module.js");
/* harmony import */ var _select_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-dropdown */ "./node_modules/element-angular/release/select/select-dropdown.js");
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./option */ "./node_modules/element-angular/release/select/option.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select */ "./node_modules/element-angular/release/select/select.js");








var ElSelectModule = /** @class */ (function () {
    function ElSelectModule() {
    }
    /**
     * @return {?}
     */
    ElSelectModule.forRoot = function () {
        return { ngModule: ElSelectModule, providers: [] };
    };
    ElSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_select_dropdown__WEBPACK_IMPORTED_MODULE_5__["ElSelectDropdown"], _option__WEBPACK_IMPORTED_MODULE_6__["ElOption"], _select__WEBPACK_IMPORTED_MODULE_7__["ElSelect"]],
                    exports: [_select_dropdown__WEBPACK_IMPORTED_MODULE_5__["ElSelectDropdown"], _option__WEBPACK_IMPORTED_MODULE_6__["ElOption"], _select__WEBPACK_IMPORTED_MODULE_7__["ElSelect"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _tag_module__WEBPACK_IMPORTED_MODULE_3__["ElTagsModule"], _input_module__WEBPACK_IMPORTED_MODULE_4__["ElInputsModule"]],
                    entryComponents: [_select_dropdown__WEBPACK_IMPORTED_MODULE_5__["ElSelectDropdown"], _option__WEBPACK_IMPORTED_MODULE_6__["ElOption"], _select__WEBPACK_IMPORTED_MODULE_7__["ElSelect"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSelectModule.ctorParameters = function () { return []; };
    return ElSelectModule;
}());

function ElSelectModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSelectModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSelectModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/select/option.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/select/option.js ***!
  \***************************************************************/
/*! exports provided: ElOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElOption", function() { return ElOption; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./node_modules/element-angular/release/select/select.js");


var ElOption = /** @class */ (function () {
    /**
     * @param {?} rootSelect
     */
    function ElOption(rootSelect) {
        this.rootSelect = rootSelect;
        this.elDisabled = false;
        this.rootDisabled = false;
        this.itemSelected = false;
    }
    Object.defineProperty(ElOption.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ElOption.prototype.clickHandle = function (event) {
        event.stopPropagation();
        if (this.elDisabled || this.rootDisabled)
            return;
        this.rootSelect.changeLabel(this.label, this.value);
    };
    /**
     * @return {?}
     */
    ElOption.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ updateHandle = function () {
            if (_this.rootSelect.multiple) {
                _this.itemSelected = Array.isArray(_this.rootSelect.model) && _this.rootSelect.model.indexOf(_this.value) > -1;
            }
            else {
                _this.itemSelected = _this.value === _this.rootSelect.model;
            }
            _this.itemSelected && _this.rootSelect.changeLabel(_this.label);
        };
        this.rootDisabled = this.rootSelect.elDisabled;
        updateHandle();
        this.rootSelect.subscriber.push(updateHandle);
        this.rootSelect.appendOptions({
            value: this.value,
            label: this.label,
        });
    };
    ElOption.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-option',
                    template: "\n    <li class=\"el-select-dropdown__item\"\n      [class.is-disabled]=\"elDisabled || rootDisabled\"\n      [class.selected]=\"itemSelected\"\n      (click)=\"clickHandle($event)\">\n      <span>{{ label }}</span>\n    </li>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElOption.ctorParameters = function () { return [
        { type: _select__WEBPACK_IMPORTED_MODULE_1__["ElSelect"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    ElOption.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElOption;
}());

function ElOption_tsickle_Closure_declarations() {
    /** @type {?} */
    ElOption.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElOption.ctorParameters;
    /** @type {?} */
    ElOption.propDecorators;
    /** @type {?} */
    ElOption.prototype.elDisabled;
    /** @type {?} */
    ElOption.prototype.value;
    /** @type {?} */
    ElOption.prototype.label;
    /** @type {?} */
    ElOption.prototype.rootDisabled;
    /** @type {?} */
    ElOption.prototype.itemSelected;
    /** @type {?} */
    ElOption.prototype.rootSelect;
}
//# sourceMappingURL=option.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/select/select-dropdown.js":
/*!************************************************************************!*\
  !*** ./node_modules/element-angular/release/select/select-dropdown.js ***!
  \************************************************************************/
/*! exports provided: ElSelectDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSelectDropdown", function() { return ElSelectDropdown; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./node_modules/element-angular/release/select/select.js");




var ElSelectDropdown = /** @class */ (function () {
    /**
     * @param {?} rootSelect
     * @param {?} sanitizer
     */
    function ElSelectDropdown(rootSelect, sanitizer) {
        this.rootSelect = rootSelect;
        this.sanitizer = sanitizer;
        this.isActived = false;
        this.multiple = false;
    }
    /**
     * @return {?}
     */
    ElSelectDropdown.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ firstStyle = 'display: none; opacity: 0; height: 0;';
        this.dropdownStyles = this.sanitizer.bypassSecurityTrustStyle(firstStyle);
        setTimeout(function () {
            var /** @type {?} */ styles = "min-width: " + _this.rootSelect.selfWidth + "px; " + (firstStyle || '');
            _this.dropdownStyles = _this.sanitizer.bypassSecurityTrustStyle(styles);
            _this.popperClass = _this.rootSelect.popperClass;
            firstStyle = '';
        }, 0);
    };
    ElSelectDropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-select-dropdown',
                    template: "\n    <div [class]=\"'el-select-dropdown ' + popperClass\"\n      [style]=\"dropdownStyles\"\n      [@state]=\"isActived\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('state', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 1,
                                height: '*',
                                display: 'block',
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0,
                                height: 0,
                                display: 'none',
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("250ms ease-in-out")),
                        ])
                    ],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSelectDropdown.ctorParameters = function () { return [
        { type: _select__WEBPACK_IMPORTED_MODULE_3__["ElSelect"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    ElSelectDropdown.propDecorators = {
        'isActived': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElSelectDropdown;
}());

function ElSelectDropdown_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSelectDropdown.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSelectDropdown.ctorParameters;
    /** @type {?} */
    ElSelectDropdown.propDecorators;
    /** @type {?} */
    ElSelectDropdown.prototype.isActived;
    /** @type {?} */
    ElSelectDropdown.prototype.multiple;
    /** @type {?} */
    ElSelectDropdown.prototype.popperClass;
    /** @type {?} */
    ElSelectDropdown.prototype.dropdownStyles;
    /** @type {?} */
    ElSelectDropdown.prototype.rootSelect;
    /** @type {?} */
    ElSelectDropdown.prototype.sanitizer;
}
//# sourceMappingURL=select-dropdown.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/select/select-props.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/select/select-props.js ***!
  \*********************************************************************/
/*! exports provided: ElSelectPoprs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSelectPoprs", function() { return ElSelectPoprs; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElSelectPoprs = /** @class */ (function () {
    function ElSelectPoprs() {
        this.elDisabled = false;
        this.clearable = false;
        this.placeholder = '请选择';
        this.multiple = false;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ElSelectPoprs.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    ElSelectPoprs.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'clearable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'name': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'placeholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'multiple': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'popperClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['popper-class',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElSelectPoprs;
}());

function ElSelectPoprs_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSelectPoprs.propDecorators;
    /** @type {?} */
    ElSelectPoprs.prototype.elDisabled;
    /** @type {?} */
    ElSelectPoprs.prototype.clearable;
    /** @type {?} */
    ElSelectPoprs.prototype.name;
    /** @type {?} */
    ElSelectPoprs.prototype.size;
    /** @type {?} */
    ElSelectPoprs.prototype.placeholder;
    /** @type {?} */
    ElSelectPoprs.prototype.multiple;
    /** @type {?} */
    ElSelectPoprs.prototype.popperClass;
    /** @type {?} */
    ElSelectPoprs.prototype.model;
    /** @type {?} */
    ElSelectPoprs.prototype.modelChange;
}
//# sourceMappingURL=select-props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/select/select.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/select/select.js ***!
  \***************************************************************/
/*! exports provided: ElSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSelect", function() { return ElSelect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _select_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-props */ "./node_modules/element-angular/release/select/select-props.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ElSelect = /** @class */ (function (_super) {
    __extends(ElSelect, _super);
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} window
     */
    function ElSelect(el, renderer, window) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.window = window;
        _this.subscriber = [];
        _this.multipleLabels = [];
        _this.multiplePlaceholder = _this.placeholder;
        _this.dropdownActive = false;
        _this.iconClass = 'arrow-up';
        _this.selectOptions = [];
        _this.controlChange = function () { };
        _this.controlTouch = function () { };
        return _this;
    }
    /**
     * @param {?=} isEnter
     * @return {?}
     */
    ElSelect.prototype.mouseHandle = function (isEnter) {
        if (isEnter === void 0) { isEnter = false; }
        this.clearable = this.clearable && !this.multiple;
        if (!this.clearable || !this.model)
            return;
        this.iconClass = "" + (isEnter ? 'circle-close is-reverse' : 'arrow-up');
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ElSelect.prototype.toggleHandle = function (event) {
        this.clearable = this.clearable && !this.multiple;
        if (this.elDisabled)
            return;
        event && event.stopPropagation();
        this.dropdownActive = !this.dropdownActive;
        var /** @type {?} */ nextClass = 'arrow-up' + (this.dropdownActive ? ' is-reverse' : '');
        this.iconClass = !this.clearable ? nextClass : this.iconClass;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElSelect.prototype.clearSelected = function (event) {
        this.clearable = this.clearable && !this.multiple;
        if (!this.clearable)
            return;
        event.stopPropagation();
        // reset icon
        this.mouseHandle(false);
        // reset selected label
        this.changeLabel(null, null);
        // reset model
        this.model = null;
        this.modelChange.emit(this.model);
        this.controlChange(this.model);
        this.subscriber.forEach(function (sub) { return sub(); });
        // close dropdown menu
        this.dropdownActive = false;
    };
    /**
     * @param {?} nextLabel
     * @param {?=} nextValue
     * @return {?}
     */
    ElSelect.prototype.changeLabel = function (nextLabel, nextValue) {
        this.dropdownActive && this.toggleHandle();
        // only update label
        this.selectedLabel = this.multiple ? '' : nextLabel;
        if (!nextValue || this.model === nextValue)
            return;
        if (this.multiple) {
            this.updateValueWithMultipleMode(nextLabel, nextValue);
            this.updateLayoutWithMultipleMode();
        }
        else {
            this.model = nextValue;
        }
        this.modelChange.emit(this.model);
        this.controlChange(this.model);
        this.subscriber.forEach(function (sub) { return sub(); });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ElSelect.prototype.appendOptions = function (item) {
        this.selectOptions.push(item);
    };
    /**
     * @return {?}
     */
    ElSelect.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ timer = window.setTimeout(function () {
            _this.selfWidth = _this.el.nativeElement.getBoundingClientRect().width;
            clearTimeout(timer);
        }, 0);
        this.globalListener = this.renderer.listen('document', 'click', function () {
            _this.dropdownActive && _this.toggleHandle();
        });
        this.updatePlaceholderWithMultipleMode();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElSelect.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        if (changes.model.isFirstChange())
            return;
        // reset model
        if (!changes.model.currentValue) {
            this.selectedLabel = changes.model.currentValue;
            this.model = changes.model.currentValue;
            this.modelChange.emit(changes.model.currentValue);
            this.controlChange(this.model);
        }
        this.subscriber.forEach(function (sub) { return sub(); });
    };
    /**
     * @return {?}
     */
    ElSelect.prototype.ngOnDestroy = function () {
        this.globalListener && this.globalListener();
    };
    /**
     * @return {?}
     */
    ElSelect.prototype.ngAfterViewInit = function () {
        var _this = this;
        var /** @type {?} */ timer = this.window.setTimeout(function () {
            _this.initModelWithMultipleMode();
            _this.window.clearTimeout(timer);
        }, 0);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElSelect.prototype.writeValue = function (value) {
        this.model = value;
        this.initModelWithMultipleMode();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElSelect.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElSelect.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    /**
     * @return {?}
     */
    ElSelect.prototype.updateLayoutWithMultipleMode = function () {
        var _this = this;
        var /** @type {?} */ updateHandle = function () {
            if (!_this.tags)
                return;
            var /** @type {?} */ children = _this.tags.nativeElement && _this.tags.nativeElement.children;
            var /** @type {?} */ inputEl = _this.input.el.nativeElement;
            if (!children || !children.length || !inputEl)
                return;
            var /** @type {?} */ inputWidth = inputEl.getBoundingClientRect().width;
            var /** @type {?} */ unit = inputWidth - 34;
            var /** @type {?} */ row = 1;
            Array.from(children).reduce(function (count, el) {
                var /** @type {?} */ currentWidth = el.getBoundingClientRect().width || 80;
                if (count + currentWidth < unit)
                    return count + currentWidth;
                // add a row
                row++;
                return currentWidth;
            }, 0);
            var /** @type {?} */ el = inputEl.querySelector('.el-input__inner');
            _this.renderer.setStyle(el, 'height', Math.ceil(row) * 40 + "px");
        };
        var /** @type {?} */ timer = this.window.setTimeout(function () {
            updateHandle();
            _this.window.clearTimeout(timer);
        }, 0);
    };
    /**
     * @param {?} nextLabel
     * @param {?=} nextValue
     * @return {?}
     */
    ElSelect.prototype.updateValueWithMultipleMode = function (nextLabel, nextValue) {
        var /** @type {?} */ model = Array.isArray(this.model)
            ? (this.model.indexOf(nextValue) > -1 ? this.model.filter(function (v) { return v !== nextValue; }) : this.model.concat(nextValue))
            : [nextValue];
        this.model = model.filter(function (r) { return r !== undefined; });
        this.multipleLabels = !nextLabel || this.multipleLabels.indexOf(nextLabel) > -1
            ? this.multipleLabels.filter(function (v) { return v !== nextLabel; })
            : this.multipleLabels.concat(nextLabel);
        this.updatePlaceholderWithMultipleMode();
    };
    /**
     * @return {?}
     */
    ElSelect.prototype.updatePlaceholderWithMultipleMode = function () {
        if (!this.multiple)
            return;
        this.multiplePlaceholder = this.model && this.model.length ? '' : this.placeholder;
    };
    /**
     * @return {?}
     */
    ElSelect.prototype.initModelWithMultipleMode = function () {
        var _this = this;
        if (!this.model || !this.multiple || !this.selectOptions.length)
            return;
        if (!Array.isArray(this.model))
            this.model = [this.model];
        this.multipleLabels = this.model
            .map(function (item) {
            var /** @type {?} */ option = _this.selectOptions.find(function (option) { return option.value === item; });
            if (option && option.label)
                return option.label;
            return null;
        })
            .filter(function (r) { return !!r; });
        this.updateLayoutWithMultipleMode();
    };
    ElSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-select',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElSelect; }),
                            multi: true
                        }],
                    styles: ["\n    .el-select-dropdown__list { overflow: hidden; }\n    .el-select__tags__padding { padding-right: 30px; }\n  "],
                    template: "\n    <div class=\"el-select\" (click)=\"toggleHandle($event)\">\n      <div class=\"el-select__tags el-select__tags__padding\" *ngIf=\"multiple && model && model.length\" #tags>\n        <el-tag *ngFor=\"let tag of multipleLabels; let i = index\"\n          [closable]=\"!elDisabled\"\n          [size]=\"size\"\n          (close)=\"$event.stopPropagation();changeLabel(tag, model[i])\"\n          type=\"info\">{{tag}}</el-tag>\n      </div>\n      \n      <el-input iconClass=\"el-select__caret\" #input\n        [model]=\"selectedLabel\"\n        [placeholder]=\"multiple ? multiplePlaceholder : placeholder\"\n        [icon]=\"iconClass\"\n        [name]=\"name\"\n        [size]=\"size\"\n        [elDisabled]=\"elDisabled\" [readonly]=\"true\"\n        (mouseenter)=\"mouseHandle(true)\" (mouseleave)=\"mouseHandle(false)\"\n        (icon-click)=\"clearSelected($event)\">\n      </el-input>\n      <ng-container>\n        <el-select-dropdown [isActived]=\"dropdownActive\">\n          <ul class=\"el-scrollbar__view el-select-dropdown__list\">\n            <ng-content></ng-content>\n          </ul>\n        </el-select-dropdown>\n      </ng-container>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSelect.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_3__["WindowWrapper"], },
    ]; };
    ElSelect.propDecorators = {
        'tags': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tags',] },],
        'input': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['input',] },],
    };
    return ElSelect;
}(_select_props__WEBPACK_IMPORTED_MODULE_1__["ElSelectPoprs"]));

function ElSelect_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSelect.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSelect.ctorParameters;
    /** @type {?} */
    ElSelect.propDecorators;
    /** @type {?} */
    ElSelect.prototype.tags;
    /** @type {?} */
    ElSelect.prototype.input;
    /** @type {?} */
    ElSelect.prototype.selfWidth;
    /** @type {?} */
    ElSelect.prototype.subscriber;
    /** @type {?} */
    ElSelect.prototype.multipleLabels;
    /** @type {?} */
    ElSelect.prototype.multiplePlaceholder;
    /** @type {?} */
    ElSelect.prototype.dropdownActive;
    /** @type {?} */
    ElSelect.prototype.selectedLabel;
    /** @type {?} */
    ElSelect.prototype.iconClass;
    /** @type {?} */
    ElSelect.prototype.globalListener;
    /** @type {?} */
    ElSelect.prototype.selectOptions;
    /** @type {?} */
    ElSelect.prototype.controlChange;
    /** @type {?} */
    ElSelect.prototype.controlTouch;
    /** @type {?} */
    ElSelect.prototype.el;
    /** @type {?} */
    ElSelect.prototype.renderer;
    /** @type {?} */
    ElSelect.prototype.window;
}
//# sourceMappingURL=select.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/animation/dialog-fade.animation.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/animation/dialog-fade.animation.js ***!
  \****************************************************************************************/
/*! exports provided: dialogFadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogFadeAnimation", function() { return dialogFadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ dialogFadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dialogFadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(0, -25px, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(0, -25px, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translate3D(0, 0, 0)',
        visibility: 'inherit',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-in-out")),
]);
//# sourceMappingURL=dialog-fade.animation.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/animation/drop.animation.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/animation/drop.animation.js ***!
  \*********************************************************************************/
/*! exports provided: dropAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropAnimation", function() { return dropAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ dropAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dropAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        height: 0,
        border: 0,
        padding: 0,
        visibility: 'hidden',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        height: 0,
        border: 0,
        padding: 0,
        visibility: 'hidden',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        height: '*',
        border: '*',
        padding: '*',
        visibility: 'inherit',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-out")),
]);
//# sourceMappingURL=drop.animation.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/animation/fade.animation.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/animation/fade.animation.js ***!
  \*********************************************************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        display: 'block'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-in-out")),
]);
//# sourceMappingURL=fade.animation.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/animation/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/animation/index.js ***!
  \************************************************************************/
/*! exports provided: fadeAnimation, slideAnimation, notifyAnimation, dropAnimation, dialogFadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fade_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade.animation */ "./node_modules/element-angular/release/shared/animation/fade.animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return _fade_animation__WEBPACK_IMPORTED_MODULE_0__["fadeAnimation"]; });

/* harmony import */ var _slide_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide.animation */ "./node_modules/element-angular/release/shared/animation/slide.animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideAnimation", function() { return _slide_animation__WEBPACK_IMPORTED_MODULE_1__["slideAnimation"]; });

/* harmony import */ var _notify_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notify.animation */ "./node_modules/element-angular/release/shared/animation/notify.animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyAnimation", function() { return _notify_animation__WEBPACK_IMPORTED_MODULE_2__["notifyAnimation"]; });

/* harmony import */ var _drop_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop.animation */ "./node_modules/element-angular/release/shared/animation/drop.animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropAnimation", function() { return _drop_animation__WEBPACK_IMPORTED_MODULE_3__["dropAnimation"]; });

/* harmony import */ var _dialog_fade_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-fade.animation */ "./node_modules/element-angular/release/shared/animation/dialog-fade.animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dialogFadeAnimation", function() { return _dialog_fade_animation__WEBPACK_IMPORTED_MODULE_4__["dialogFadeAnimation"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/animation/notify.animation.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/animation/notify.animation.js ***!
  \***********************************************************************************/
/*! exports provided: notifyAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyAnimation", function() { return notifyAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ notifyAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('notifyAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(0, 0, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(0, -10px, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translate3D(0, 0, 0)',
        visibility: 'inherit',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            visibility: 'inherit',
            transform: 'translate3D(50px, 0, 0)',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms linear')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            visibility: 'inherit',
            transform: 'translate3D(0px, 0, 0)',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms linear')
    ]),
]);
//# sourceMappingURL=notify.animation.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/animation/slide.animation.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/animation/slide.animation.js ***!
  \**********************************************************************************/
/*! exports provided: slideAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAnimation", function() { return slideAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var /** @type {?} */ slideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(-50%, 0px, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3D(-50%, 0px, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translate3D(-50%, 30px, 0)',
        visibility: 'inherit',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("250ms ease-out")),
]);
//# sourceMappingURL=slide.animation.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/directives/class.directive.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/directives/class.directive.js ***!
  \***********************************************************************************/
/*! exports provided: ElClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElClassDirective", function() { return ElClassDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElClassDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function ElClassDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.classNames = '';
    }
    /**
     * @return {?}
     */
    ElClassDirective.prototype.ngOnInit = function () {
        this.renderer.addClass(this.el.nativeElement, this.classNames);
    };
    ElClassDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[el-class]',
                },] },
    ];
    /**
     * @nocollapse
     */
    ElClassDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ElClassDirective.propDecorators = {
        'classNames': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['el-class',] },],
    };
    return ElClassDirective;
}());

function ElClassDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElClassDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElClassDirective.ctorParameters;
    /** @type {?} */
    ElClassDirective.propDecorators;
    /** @type {?} */
    ElClassDirective.prototype.classNames;
    /** @type {?} */
    ElClassDirective.prototype.el;
    /** @type {?} */
    ElClassDirective.prototype.renderer;
}
//# sourceMappingURL=class.directive.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/directives/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/directives/index.js ***!
  \*************************************************************************/
/*! exports provided: ElClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.directive */ "./node_modules/element-angular/release/shared/directives/class.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElClassDirective", function() { return _class_directive__WEBPACK_IMPORTED_MODULE_0__["ElClassDirective"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/module.js ***!
  \***************************************************************/
/*! exports provided: getDocument, getWindow, ElSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSharedModule", function() { return ElSharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/index */ "./node_modules/element-angular/release/shared/directives/index.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");
/* harmony import */ var _pipe_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/index */ "./node_modules/element-angular/release/shared/pipe/index.js");





/**
 * @return {?}
 */
function getDocument() { return document; }
/**
 * @return {?}
 */
function getWindow() { return window; }
var ElSharedModule = /** @class */ (function () {
    function ElSharedModule() {
    }
    /**
     * @return {?}
     */
    ElSharedModule.forRoot = function () {
        return { ngModule: ElSharedModule, providers: [
                _shared_services_index__WEBPACK_IMPORTED_MODULE_3__["ExDynamicService"],
                _pipe_index__WEBPACK_IMPORTED_MODULE_4__["ElCSSValuePipe"],
                { provide: _shared_services_index__WEBPACK_IMPORTED_MODULE_3__["DocumentWrapper"], useFactory: getDocument },
                { provide: _shared_services_index__WEBPACK_IMPORTED_MODULE_3__["WindowWrapper"], useFactory: getWindow },
            ] };
    };
    ElSharedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _pipe_index__WEBPACK_IMPORTED_MODULE_4__["ElCSSValuePipe"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_2__["ElClassDirective"],
                    ],
                    exports: [
                        _pipe_index__WEBPACK_IMPORTED_MODULE_4__["ElCSSValuePipe"],
                        _directives_index__WEBPACK_IMPORTED_MODULE_2__["ElClassDirective"],
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSharedModule.ctorParameters = function () { return []; };
    return ElSharedModule;
}());

function ElSharedModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSharedModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSharedModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/pipe/css-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/pipe/css-value.js ***!
  \***********************************************************************/
/*! exports provided: ElCSSValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElCSSValuePipe", function() { return ElCSSValuePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElCSSValuePipe = /** @class */ (function () {
    function ElCSSValuePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ElCSSValuePipe.prototype.transform = function (value) {
        if (typeof value === 'number')
            return value + "px";
        if (Number.isNaN(+value))
            return String(value);
        return value + "px";
    };
    ElCSSValuePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'cssValue' },] },
    ];
    /**
     * @nocollapse
     */
    ElCSSValuePipe.ctorParameters = function () { return []; };
    return ElCSSValuePipe;
}());

function ElCSSValuePipe_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCSSValuePipe.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCSSValuePipe.ctorParameters;
}
//# sourceMappingURL=css-value.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/pipe/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/pipe/index.js ***!
  \*******************************************************************/
/*! exports provided: ElCSSValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-value */ "./node_modules/element-angular/release/shared/pipe/css-value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElCSSValuePipe", function() { return _css_value__WEBPACK_IMPORTED_MODULE_0__["ElCSSValuePipe"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/services/dynamic.service.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/services/dynamic.service.js ***!
  \*********************************************************************************/
/*! exports provided: DocumentWrapper, WindowWrapper, ExDynamicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentWrapper", function() { return DocumentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowWrapper", function() { return WindowWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExDynamicService", function() { return ExDynamicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DocumentWrapper = /** @class */ (function (_super) {
    __extends(DocumentWrapper, _super);
    function DocumentWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    DocumentWrapper.ctorParameters = function () { return []; };
    return DocumentWrapper;
}(Document));

function DocumentWrapper_tsickle_Closure_declarations() {
    /** @type {?} */
    DocumentWrapper.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DocumentWrapper.ctorParameters;
}
var WindowWrapper = /** @class */ (function (_super) {
    __extends(WindowWrapper, _super);
    function WindowWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    WindowWrapper.ctorParameters = function () { return []; };
    return WindowWrapper;
}(Window));

function WindowWrapper_tsickle_Closure_declarations() {
    /** @type {?} */
    WindowWrapper.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WindowWrapper.ctorParameters;
}
var ExDynamicService = /** @class */ (function () {
    /**
     * @param {?} document
     * @param {?} factory
     * @param {?} injector
     * @param {?} appRef
     */
    function ExDynamicService(document, factory, injector, appRef) {
        this.document = document;
        this.factory = factory;
        this.injector = injector;
        this.appRef = appRef;
    }
    /**
     * @param {?} Container
     * @return {?}
     */
    ExDynamicService.prototype.generator = function (Container) {
        var /** @type {?} */ id = this.makeID();
        var /** @type {?} */ component = this.factory
            .resolveComponentFactory(Container)
            .create(this.injector);
        this.appRef.attachView(component.hostView);
        var /** @type {?} */ hostElement = this.document.createElement('div');
        hostElement.setAttribute('id', id);
        component.instance.id = id;
        hostElement.appendChild(((component.hostView)).rootNodes[0]);
        this.document.body.appendChild(hostElement);
        return component;
    };
    /**
     * @param {?} com
     * @return {?}
     */
    ExDynamicService.prototype.destroy = function (com) {
        var _this = this;
        var /** @type {?} */ timer = setTimeout(function () {
            _this.destroyWait(com);
            clearTimeout(timer);
        }, 500);
    };
    /**
     * @param {?} com
     * @return {?}
     */
    ExDynamicService.prototype.destroyWait = function (com) {
        var /** @type {?} */ id = com.instance.id;
        this.appRef.detachView(com.hostView);
        com.destroy();
        try {
            var /** @type {?} */ hostElement = this.document.getElementById(id);
            hostElement && hostElement.parentElement.removeChild(hostElement);
        }
        catch (err) { }
    };
    /**
     * @return {?}
     */
    ExDynamicService.prototype.makeID = function () {
        return Math.random().toString(16).substr(2, 8);
    };
    ExDynamicService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    ExDynamicService.ctorParameters = function () { return [
        { type: DocumentWrapper, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], },
    ]; };
    return ExDynamicService;
}());

function ExDynamicService_tsickle_Closure_declarations() {
    /** @type {?} */
    ExDynamicService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ExDynamicService.ctorParameters;
    /** @type {?} */
    ExDynamicService.prototype.document;
    /** @type {?} */
    ExDynamicService.prototype.factory;
    /** @type {?} */
    ExDynamicService.prototype.injector;
    /** @type {?} */
    ExDynamicService.prototype.appRef;
}
//# sourceMappingURL=dynamic.service.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/services/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/services/index.js ***!
  \***********************************************************************/
/*! exports provided: ExDynamicService, DocumentWrapper, WindowWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic.service */ "./node_modules/element-angular/release/shared/services/dynamic.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExDynamicService", function() { return _dynamic_service__WEBPACK_IMPORTED_MODULE_0__["ExDynamicService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentWrapper", function() { return _dynamic_service__WEBPACK_IMPORTED_MODULE_0__["DocumentWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowWrapper", function() { return _dynamic_service__WEBPACK_IMPORTED_MODULE_0__["WindowWrapper"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/utils/bounding.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/utils/bounding.js ***!
  \***********************************************************************/
/*! exports provided: getPositionForDir, getRealShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionForDir", function() { return getPositionForDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealShape", function() { return getRealShape; });
var /** @type {?} */ getRealShape = function (el) {
    var /** @type {?} */ rect = el.getBoundingClientRect();
    var _a = window.getComputedStyle(el), width = _a.width, height = _a.height;
    var /** @type {?} */ getCSSStyleVal = function (val, parentNum) {
        if (!val)
            return 0;
        var /** @type {?} */ str = String(val);
        var /** @type {?} */ strVal = str.includes('px') ? str.split('px')[0] :
            str.includes('%') ? Number(str.split('%')[0]) * parentNum * 0.01 : str;
        return Number.isNaN(Number(strVal)) ? 0 : Number(strVal);
    };
    return {
        width: getCSSStyleVal(width, rect.width),
        height: getCSSStyleVal(height, rect.height),
    };
};
var /** @type {?} */ getPositionForDir = function (hostRect, selfRect, dir, arrowDir) {
    var /** @type {?} */ diffWidth = hostRect.width - selfRect.width;
    var /** @type {?} */ diffHeight = selfRect.height - hostRect.height;
    var /** @type {?} */ topMap = {
        top: -10 - selfRect.height,
        bottom: hostRect.height,
        left: arrowDir === 'start' ? 0 : arrowDir === 'end' ? 0 - diffHeight : 0 - Math.abs(diffHeight / 2),
        right: arrowDir === 'start' ? 0 : arrowDir === 'end' ? 0 - diffHeight : 0 - Math.abs(diffHeight / 2),
    };
    var /** @type {?} */ leftMap = {
        left: -10 - selfRect.width,
        right: hostRect.width,
        top: arrowDir === 'start' ? 0 : arrowDir === 'end' ? diffWidth : diffWidth / 2,
        bottom: arrowDir === 'start' ? 0 : arrowDir === 'end' ? diffWidth : diffWidth / 2,
    };
    var /** @type {?} */ isHorizontal = dir === 'left' || dir === 'right';
    var /** @type {?} */ arrowLen = isHorizontal
        ? arrowDir === 'center' ? selfRect.height : Math.min(hostRect.height, selfRect.height)
        : arrowDir === 'center' ? selfRect.width : Math.min(hostRect.height, selfRect.height);
    var /** @type {?} */ position = {
        arrowFace: dir,
        arrowDir: isHorizontal ? (arrowDir === 'end' ? 'bottom' : 'top') : (arrowDir === 'start' ? 'left' : 'right'),
        arrowPosition: arrowLen / 2 - 5,
        top: topMap[dir],
        left: leftMap[dir],
    };
    return position;
};

//# sourceMappingURL=bounding.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/utils/host.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/utils/host.js ***!
  \*******************************************************************/
/*! exports provided: removeNgTag, isParentTag, isParentAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNgTag", function() { return removeNgTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParentTag", function() { return isParentTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParentAttr", function() { return isParentAttr; });
var /** @type {?} */ removeNgTag = function (nativeElement) {
    var /** @type {?} */ parentElement = nativeElement.parentElement;
    if (!parentElement || !parentElement.insertBefore)
        return;
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    parentElement.removeChild(nativeElement);
};
var /** @type {?} */ isParentTag = function (nativeElement, parentTag) {
    var /** @type {?} */ parentIsTag = false;
    var /** @type {?} */ parent = nativeElement.parentElement;
    var /** @type {?} */ findLen = 3, /** @type {?} */ lowerName = '';
    while (findLen) {
        lowerName = parent.localName.toLowerCase();
        if (lowerName.indexOf('el') > -1) {
            parentIsTag = lowerName === parentTag;
            findLen = 0;
        }
        else {
            parent = parent.parentElement;
            findLen--;
        }
    }
    return parentIsTag;
};
var /** @type {?} */ isParentAttr = function (nativeElement, parentAttr) {
    var /** @type {?} */ parentIsAttr = false;
    var /** @type {?} */ parent = nativeElement.parentElement;
    var /** @type {?} */ findLen = 5;
    while (findLen) {
        parentIsAttr = parent.hasAttribute(parentAttr);
        if (parentIsAttr) {
            parentIsAttr = parent;
            findLen = 0;
        }
        else {
            parent = parent.parentElement;
            findLen--;
        }
    }
    return parentIsAttr;
};

//# sourceMappingURL=host.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/shared/utils/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/element-angular/release/shared/utils/index.js ***!
  \********************************************************************/
/*! exports provided: getPositionForDir, getRealShape, removeNgTag, isParentTag, isParentAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bounding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounding */ "./node_modules/element-angular/release/shared/utils/bounding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPositionForDir", function() { return _bounding__WEBPACK_IMPORTED_MODULE_0__["getPositionForDir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRealShape", function() { return _bounding__WEBPACK_IMPORTED_MODULE_0__["getRealShape"]; });

/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./host */ "./node_modules/element-angular/release/shared/utils/host.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNgTag", function() { return _host__WEBPACK_IMPORTED_MODULE_1__["removeNgTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isParentTag", function() { return _host__WEBPACK_IMPORTED_MODULE_1__["isParentTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isParentAttr", function() { return _host__WEBPACK_IMPORTED_MODULE_1__["isParentAttr"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/slider/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/slider/module.js ***!
  \***************************************************************/
/*! exports provided: ElSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSliderModule", function() { return ElSliderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip/module */ "./node_modules/element-angular/release/tooltip/module.js");
/* harmony import */ var _slider_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-button */ "./node_modules/element-angular/release/slider/slider-button.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider */ "./node_modules/element-angular/release/slider/slider.js");





var ElSliderModule = /** @class */ (function () {
    function ElSliderModule() {
    }
    /**
     * @return {?}
     */
    ElSliderModule.forRoot = function () {
        return { ngModule: ElSliderModule, providers: [] };
    };
    ElSliderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_slider__WEBPACK_IMPORTED_MODULE_4__["ElSlider"], _slider_button__WEBPACK_IMPORTED_MODULE_3__["ElSliderButton"]],
                    exports: [_slider__WEBPACK_IMPORTED_MODULE_4__["ElSlider"], _slider_button__WEBPACK_IMPORTED_MODULE_3__["ElSliderButton"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tooltip_module__WEBPACK_IMPORTED_MODULE_2__["ElTooltipModule"]],
                    entryComponents: [_slider__WEBPACK_IMPORTED_MODULE_4__["ElSlider"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSliderModule.ctorParameters = function () { return []; };
    return ElSliderModule;
}());

function ElSliderModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSliderModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSliderModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/slider/slider-button.js":
/*!**********************************************************************!*\
  !*** ./node_modules/element-angular/release/slider/slider-button.js ***!
  \**********************************************************************/
/*! exports provided: ElSliderButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSliderButton", function() { return ElSliderButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./node_modules/element-angular/release/slider/slider.js");




var ElSliderButton = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} sanitizer
     * @param {?} renderer
     */
    function ElSliderButton(root, sanitizer, renderer) {
        this.root = root;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.elDisabled = false;
        this.model = 0;
        this.vertical = false;
        this.min = 0;
        this.max = 100;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hovering = false;
        this.dragging = false;
        this.popper = true;
        this.startPosition = 0;
        this.globalListenFunc = [];
        this.showPopper = false;
    }
    Object.defineProperty(ElSliderButton.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} t
     * @return {?}
     */
    ElSliderButton.prototype.popperMouseHandle = function (t) {
        if (!this.dragging && !t) {
            this.showPopper = false;
        }
        if (t && !this.elDisabled) {
            this.showPopper = true;
        }
    };
    /**
     * @return {?}
     */
    ElSliderButton.prototype.getCurrentPosition = function () {
        return (this.model - this.min) / (this.max - this.min) * 100;
    };
    /**
     * @return {?}
     */
    ElSliderButton.prototype.updateWrapperStyle = function () {
        var /** @type {?} */ currentPosition = this.getCurrentPosition();
        var /** @type {?} */ styles = (this.vertical ? 'bottom' : 'left') + ": " + currentPosition + "%";
        this.wrapperStyles = this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    ElSliderButton.prototype.formatValue = function () {
        return this.formatTooltip ? this.formatTooltip(this.model) : this.model;
    };
    /**
     * @param {?} t
     * @return {?}
     */
    ElSliderButton.prototype.togglePopper = function (t) {
        this.hovering = t;
        this.popper = t;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElSliderButton.prototype.buttonDownHandle = function (event) {
        var _this = this;
        event.preventDefault();
        this.onDragStart(event);
        (_a = this.globalListenFunc).push.apply(_a, [
            this.renderer.listen('window', 'mousemove', function (e) {
                _this.draggingHandle(e);
            }),
            this.renderer.listen('window', 'mouseup', function () {
                _this.dragEndHandle();
            })
        ]);
        var _a;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElSliderButton.prototype.onDragStart = function (event) {
        // show tooltip
        this.popperMouseHandle(true);
        this.dragging = true;
        if (this.vertical) {
            this.startY = ((event)).clientY;
        }
        else {
            this.startX = ((event)).clientX;
        }
        this.startPosition = this.getCurrentPosition();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElSliderButton.prototype.draggingHandle = function (event) {
        if (!this.dragging)
            return;
        this.togglePopper(true);
        this.root.resetSize();
        var /** @type {?} */ diff = 0;
        if (this.vertical) {
            this.currentY = ((event)).clientY;
            diff = (this.startY - this.currentY) / this.root.size * 100;
        }
        else {
            this.currentX = ((event)).clientX;
            diff = (this.currentX - this.startX) / this.root.size * 100;
        }
        this.position = this.startPosition + diff;
        this.setPosition(this.position);
    };
    /**
     * @return {?}
     */
    ElSliderButton.prototype.dragEndHandle = function () {
        var _this = this;
        if (!this.dragging)
            return;
        // hide tooltip
        this.showPopper = false;
        var /** @type {?} */ timer = setTimeout(function () {
            _this.dragging = false;
            _this.togglePopper(false);
            _this.setPosition(_this.position);
            clearTimeout(timer);
        }, 0);
        this.globalListenFunc.forEach(function (func) { return func(); });
        this.globalListenFunc = [];
    };
    /**
     * @param {?} next
     * @return {?}
     */
    ElSliderButton.prototype.setPosition = function (next) {
        if (next === null)
            return;
        var /** @type {?} */ checkedNext = next < 0 ? 0 : next > 100 ? 100 : next;
        var /** @type {?} */ val = checkedNext * (this.max - this.min) * 0.01 + this.min;
        if (Number.isNaN(val))
            return;
        this.model = Math.round(val);
        this.modelChange.emit(this.model);
        this.updateWrapperStyle();
    };
    /**
     * @return {?}
     */
    ElSliderButton.prototype.ngOnInit = function () {
        this.updateWrapperStyle();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElSliderButton.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        // first change
        // if (!changes.model.previousValue) return
        this.model = changes.model.currentValue;
        this.updateWrapperStyle();
    };
    ElSliderButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-slider-button',
                    styles: ["\n    .popper-center {\n      position: absolute;\n      left: 15px;\n      top: -35px;\n      display: none;\n      transform: translateX(-50%);\n    }\n    .isVertical { margin-left: 2px; }\n  "],
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]],
                    template: "\n    <div class=\"el-slider__button-wrapper\"\n      [class.hover]=\"hovering\" [class.dragging]=\"dragging\"\n      [class.isVertical]=\"vertical\"\n      [style]=\"wrapperStyles\"\n      (mouseenter)=\"togglePopper(true)\"\n      (mouseleave)=\"togglePopper(false)\"\n      (mousedown)=\"buttonDownHandle($event)\">\n      <div class=\"el-slider__button el-tooltip\" #wrapper\n        (mouseenter)=\"popperMouseHandle(true)\" (mouseleave)=\"popperMouseHandle(false)\"></div>\n      <div class=\"el-tooltip__popper is-dark popper-center\" x-placement=\"top\"\n        [@fadeAnimation]=\"!showPopper\">\n        <div x-arrow class=\"popper__arrow\" style=\"left: 50%; transform: translateX(-50%);\"></div>\n        <span>{{ formatValue() }}</span>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSliderButton.ctorParameters = function () { return [
        { type: _slider__WEBPACK_IMPORTED_MODULE_3__["ElSlider"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ElSliderButton.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'vertical': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'formatTooltip': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['format-tooltip',] },],
        'min': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElSliderButton;
}());

function ElSliderButton_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSliderButton.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSliderButton.ctorParameters;
    /** @type {?} */
    ElSliderButton.propDecorators;
    /** @type {?} */
    ElSliderButton.prototype.elDisabled;
    /** @type {?} */
    ElSliderButton.prototype.model;
    /** @type {?} */
    ElSliderButton.prototype.vertical;
    /** @type {?} */
    ElSliderButton.prototype.formatTooltip;
    /** @type {?} */
    ElSliderButton.prototype.min;
    /** @type {?} */
    ElSliderButton.prototype.max;
    /** @type {?} */
    ElSliderButton.prototype.modelChange;
    /** @type {?} */
    ElSliderButton.prototype.hovering;
    /** @type {?} */
    ElSliderButton.prototype.dragging;
    /** @type {?} */
    ElSliderButton.prototype.popper;
    /** @type {?} */
    ElSliderButton.prototype.wrapperStyles;
    /** @type {?} */
    ElSliderButton.prototype.startY;
    /** @type {?} */
    ElSliderButton.prototype.startX;
    /** @type {?} */
    ElSliderButton.prototype.currentY;
    /** @type {?} */
    ElSliderButton.prototype.currentX;
    /** @type {?} */
    ElSliderButton.prototype.startPosition;
    /** @type {?} */
    ElSliderButton.prototype.position;
    /** @type {?} */
    ElSliderButton.prototype.globalListenFunc;
    /** @type {?} */
    ElSliderButton.prototype.showPopper;
    /** @type {?} */
    ElSliderButton.prototype.root;
    /** @type {?} */
    ElSliderButton.prototype.sanitizer;
    /** @type {?} */
    ElSliderButton.prototype.renderer;
}
//# sourceMappingURL=slider-button.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/slider/slider.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/slider/slider.js ***!
  \***************************************************************/
/*! exports provided: ElSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSlider", function() { return ElSlider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _slider_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.props */ "./node_modules/element-angular/release/slider/slider.props.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ElSlider = /** @class */ (function (_super) {
    __extends(ElSlider, _super);
    /**
     * @param {?} sanitizer
     */
    function ElSlider(sanitizer) {
        var _this = _super.call(this) || this;
        _this.sanitizer = sanitizer;
        _this.start = 0;
        _this.isDragging = false;
        _this.controlChange = function () { };
        _this.controlTouch = function () { };
        return _this;
    }
    /**
     * @return {?}
     */
    ElSlider.prototype.makeRunwayStyle = function () {
        var /** @type {?} */ styles = this.vertical ? "height: " + this.height + "px;" : '';
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    ElSlider.prototype.makeBarStyle = function () {
        var /** @type {?} */ val = (this.model - this.min) * 100 / (this.max - this.min);
        var /** @type {?} */ styles = this.vertical ? "height: " + val + "%; bottom: " + this.start + "%;"
            : "width: " + val + "%; left: " + this.start + "%;";
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    ElSlider.prototype.resetSize = function () {
        if (!this.runwayElement)
            return;
        this.size = this.runwayElement.nativeElement["client" + (this.vertical ? 'Height' : 'Width')];
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElSlider.prototype.onSliderClick = function (event) {
        if (this.elDisabled || this.isDragging)
            return;
        this.resetSize();
        var /** @type {?} */ val = this.vertical ? event.clientY : event.clientX;
        var _a = this.runwayElement.nativeElement.getBoundingClientRect(), left = _a.left, bottom = _a.bottom;
        var /** @type {?} */ offset = Math.abs(val - (this.vertical ? bottom : left));
        // update value
        this.model = Math.round((offset / this.size) * (this.max - this.min)) + this.min;
        this.moveChange(this.model);
        this.makeBarStyle();
    };
    /**
     * @param {?} nextValue
     * @return {?}
     */
    ElSlider.prototype.moveChange = function (nextValue) {
        this.model = nextValue;
        this.modelChange.emit(nextValue);
        this.controlChange(nextValue);
    };
    /**
     * @return {?}
     */
    ElSlider.prototype.ngOnInit = function () {
        if (!this.model) {
            this.model = this.min;
        }
    };
    /**
     * @return {?}
     */
    ElSlider.prototype.ngAfterViewInit = function () {
        this.resetSize();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElSlider.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElSlider.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElSlider.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElSlider.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-slider',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElSlider; }),
                            multi: true
                        }],
                    template: "\n    <div class=\"el-slider\" [class.is-vertical]=\"vertical\">\n      <div class=\"el-slider__runway\" [class.disabled]=\"elDisabled\"\n        [style]=\"makeRunwayStyle()\" (click)=\"onSliderClick($event)\" #runway>\n        <div class=\"el-slider__bar\" [style]=\"makeBarStyle()\"></div>\n        <el-slider-button [vertical]=\"vertical\"\n          [model]=\"model\"\n          (modelChange)=\"moveChange($event)\"\n          [min]=\"min\" [max]=\"max\"\n          [format-tooltip]=\"formatTooltip\"\n          [elDisabled]=\"!showTooltip\">\n        </el-slider-button>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSlider.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    ElSlider.propDecorators = {
        'runwayElement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['runway',] },],
    };
    return ElSlider;
}(_slider_props__WEBPACK_IMPORTED_MODULE_2__["ElSliderProps"]));

function ElSlider_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSlider.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSlider.ctorParameters;
    /** @type {?} */
    ElSlider.propDecorators;
    /** @type {?} */
    ElSlider.prototype.runwayElement;
    /** @type {?} */
    ElSlider.prototype.size;
    /** @type {?} */
    ElSlider.prototype.start;
    /** @type {?} */
    ElSlider.prototype.isDragging;
    /** @type {?} */
    ElSlider.prototype.controlChange;
    /** @type {?} */
    ElSlider.prototype.controlTouch;
    /** @type {?} */
    ElSlider.prototype.sanitizer;
}
//# sourceMappingURL=slider.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/slider/slider.props.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/slider/slider.props.js ***!
  \*********************************************************************/
/*! exports provided: ElSliderProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSliderProps", function() { return ElSliderProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElSliderProps = /** @class */ (function () {
    function ElSliderProps() {
        this.elDisabled = false;
        this.min = 0;
        this.max = 100;
        // @Input('show-input') showInput: boolean = false
        // @Input('show-input-controls') showInputControls: boolean = true
        this.showTooltip = true;
        this.vertical = false;
        this.height = 200;
        // bind value
        this.model = 0;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ElSliderProps.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    ElSliderProps.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'min': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showTooltip': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-tooltip',] },],
        'formatTooltip': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['format-tooltip',] },],
        'vertical': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['vertical-height',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElSliderProps;
}());

function ElSliderProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSliderProps.propDecorators;
    /** @type {?} */
    ElSliderProps.prototype.elDisabled;
    /** @type {?} */
    ElSliderProps.prototype.min;
    /** @type {?} */
    ElSliderProps.prototype.max;
    /** @type {?} */
    ElSliderProps.prototype.showTooltip;
    /** @type {?} */
    ElSliderProps.prototype.formatTooltip;
    /** @type {?} */
    ElSliderProps.prototype.vertical;
    /** @type {?} */
    ElSliderProps.prototype.height;
    /** @type {?} */
    ElSliderProps.prototype.model;
    /** @type {?} */
    ElSliderProps.prototype.modelChange;
}
//# sourceMappingURL=slider.props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/steps/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/element-angular/release/steps/module.js ***!
  \**************************************************************/
/*! exports provided: ElStepsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElStepsModule", function() { return ElStepsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step */ "./node_modules/element-angular/release/steps/step.js");
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steps */ "./node_modules/element-angular/release/steps/steps.js");




var ElStepsModule = /** @class */ (function () {
    function ElStepsModule() {
    }
    /**
     * @return {?}
     */
    ElStepsModule.forRoot = function () {
        return { ngModule: ElStepsModule, providers: [] };
    };
    ElStepsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_step__WEBPACK_IMPORTED_MODULE_2__["ElStep"], _steps__WEBPACK_IMPORTED_MODULE_3__["ElSteps"]],
                    exports: [_step__WEBPACK_IMPORTED_MODULE_2__["ElStep"], _steps__WEBPACK_IMPORTED_MODULE_3__["ElSteps"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_step__WEBPACK_IMPORTED_MODULE_2__["ElStep"], _steps__WEBPACK_IMPORTED_MODULE_3__["ElSteps"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElStepsModule.ctorParameters = function () { return []; };
    return ElStepsModule;
}());

function ElStepsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElStepsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElStepsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/steps/step.js":
/*!************************************************************!*\
  !*** ./node_modules/element-angular/release/steps/step.js ***!
  \************************************************************/
/*! exports provided: ElStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElStep", function() { return ElStep; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steps */ "./node_modules/element-angular/release/steps/steps.js");




var ElStep = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} el
     * @param {?} sanitizer
     */
    function ElStep(root, el, sanitizer) {
        this.root = root;
        this.el = el;
        this.sanitizer = sanitizer;
        this.index = 1;
        this.mainOffset = '0px';
    }
    /**
     * @return {?}
     */
    ElStep.prototype.currentStatus = function () {
        if (this.root.active > this.index) {
            return this.root.finishStatus;
        }
        if (this.root.active === this.index) {
            return this.root.processStatus;
        }
        return 'wait';
    };
    /**
     * @return {?}
     */
    ElStep.prototype.makeStepStyles = function () {
        var /** @type {?} */ space = this.root.space;
        var /** @type {?} */ width = typeof space === 'number' ? space + "px" : space
            ? String(space) : 100 / (this.root.stepsLength - 1) + "%";
        var /** @type {?} */ lastStyles = this.isLast()
            ? "max-width: " + 100 / this.root.stepsLength + "%;"
            : "margin-right: " + this.root.offset + "px;";
        var /** @type {?} */ styles = "flex-basis: " + width + "; " + lastStyles;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    ElStep.prototype.makeLineStyles = function () {
        var /** @type {?} */ step = this.index === this.root.active - 1
            ? (this.currentStatus() !== 'error' ? 50 : 0)
            : this.currentStatus() === 'wait' ? 0 : 100;
        var /** @type {?} */ delay = (this.root.processStatus === 'wait' ? -1 : 1) * 150 * this.index + 'ms';
        var /** @type {?} */ key = this.root.direction === 'vertical' ? 'height' : 'width';
        var /** @type {?} */ styles = "border-width: " + (step ? '1px' : 0) + "; " + key + ": " + step + "%; transition-delay: " + delay + ";";
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    /**
     * @return {?}
     */
    ElStep.prototype.isLast = function () {
        return this.root.stepsLength - 1 === this.index;
    };
    /**
     * @return {?}
     */
    ElStep.prototype.isVertical = function () {
        return this.root.direction === 'vertical';
    };
    /**
     * @return {?}
     */
    ElStep.prototype.ngOnInit = function () {
        this.index = +this.el.nativeElement.getAttribute('el-index');
        if (this.root.direction === 'horizontal' && this.root.alignCenter) {
            var /** @type {?} */ width = this.titleRef.nativeElement.getBoundingClientRect().width;
            this.mainOffset = width / 2 + 16 + 'px';
        }
        Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_2__["removeNgTag"])(this.el.nativeElement);
    };
    ElStep.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-step',
                    template: "\n    <div [class]=\"'el-step ' + (!root.simple ? 'is-' + root.direction : '')\"\n      [class.is-simple]=\"root.simple\"\n      [class.is-center]=\"root.alignCenter && !root.simple && !isVertical()\"\n      [class.is-flex]=\"isLast() && !root.alignCenter && !root.simple\"\n      [style]=\"makeStepStyles()\">\n      <div [class]=\"'el-step__head is-' + currentStatus()\">\n        <div class=\"el-step__line\" [ngStyle]=\"{\n          'margin-right': isLast() ? '' : root.offset + 'px',\n          'display': isLast() ? 'none' : 'block'}\">\n          <i class=\"el-step__line-inner\" [style]=\"makeLineStyles()\"></i>\n        </div>\n\n        <span [class]=\"'el-step__icon ' + (icon ? 'is-icon' : 'is-text')\">\n          <ng-container *ngIf=\"currentStatus() !== 'success' && currentStatus() !== 'error'\">\n            <i *ngIf=\"icon\" [class]=\"'el-step__icon-inner el-icon-' + icon\"></i>\n            <div *ngIf=\"!icon && !root.simple\" class=\"el-step__icon-inner\" >{{ index + 1 }}</div>\n          </ng-container>\n          <i *ngIf=\"currentStatus() === 'success' || currentStatus() === 'error'\"\n            [class]=\"'el-icon-' + (currentStatus() === 'success' ? 'check' : 'close') + ' el-step__icon-inner is-status'\">\n          </i>\n        </span>\n      </div>\n      <div class=\"el-step__main\">\n        <div [class]=\"'el-step__title ' + 'is-' + currentStatus()\" #titleRef>\n          <ng-container>{{ title }}</ng-container>\n        </div>\n        <div *ngIf=\"root.simple\" class=\"el-step__arrow\"></div>\n        <div [class]=\"'el-step__description ' + 'is-' + currentStatus()\">\n          <ng-container>{{ description }}</ng-container>\n        </div>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElStep.ctorParameters = function () { return [
        { type: _steps__WEBPACK_IMPORTED_MODULE_3__["ElSteps"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    ElStep.propDecorators = {
        'titleRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['titleRef',] },],
        'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'description': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'icon': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'status': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElStep;
}());

function ElStep_tsickle_Closure_declarations() {
    /** @type {?} */
    ElStep.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElStep.ctorParameters;
    /** @type {?} */
    ElStep.propDecorators;
    /** @type {?} */
    ElStep.prototype.titleRef;
    /** @type {?} */
    ElStep.prototype.title;
    /** @type {?} */
    ElStep.prototype.description;
    /** @type {?} */
    ElStep.prototype.icon;
    /** @type {?} */
    ElStep.prototype.status;
    /** @type {?} */
    ElStep.prototype.index;
    /** @type {?} */
    ElStep.prototype.mainOffset;
    /** @type {?} */
    ElStep.prototype.root;
    /** @type {?} */
    ElStep.prototype.el;
    /** @type {?} */
    ElStep.prototype.sanitizer;
}
//# sourceMappingURL=step.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/steps/steps.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/steps/steps.js ***!
  \*************************************************************/
/*! exports provided: ElSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSteps", function() { return ElSteps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElSteps = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function ElSteps(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.direction = 'horizontal'; // enum: vertical/horizontal
        this.active = 0;
        this.simple = false;
        this.processStatus = 'process';
        this.finishStatus = 'finish'; // enum: wait/process/finish/error/success
        this.alignCenter = false;
        this.offset = 0;
        this.stepsLength = 0;
    }
    /**
     * @return {?}
     */
    ElSteps.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ children = this.el.nativeElement.querySelectorAll('el-step');
        if (!children || !children.length) {
            return console.warn('steps components required children');
        }
        children.forEach(function (el, index) {
            _this.renderer.setAttribute(el, 'el-index', String(index));
        });
        this.stepsLength = children.length;
        // this.offset = children[this.stepsLength - 1].getBoundingClientRect().width / (this.stepsLength - 1)
    };
    ElSteps.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-steps',
                    template: "\n    <div [class]=\"'el-steps ' + (!simple ? 'el-steps--' + direction : '')\"\n      [class.el-steps--simple]=\"simple\">\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSteps.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ElSteps.propDecorators = {
        'space': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'direction': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'active': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'simple': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'processStatus': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['process-status',] },],
        'finishStatus': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['finish-status',] },],
        'alignCenter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['align-center',] },],
    };
    return ElSteps;
}());

function ElSteps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSteps.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSteps.ctorParameters;
    /** @type {?} */
    ElSteps.propDecorators;
    /** @type {?} */
    ElSteps.prototype.space;
    /** @type {?} */
    ElSteps.prototype.direction;
    /** @type {?} */
    ElSteps.prototype.active;
    /** @type {?} */
    ElSteps.prototype.simple;
    /** @type {?} */
    ElSteps.prototype.processStatus;
    /** @type {?} */
    ElSteps.prototype.finishStatus;
    /** @type {?} */
    ElSteps.prototype.alignCenter;
    /** @type {?} */
    ElSteps.prototype.offset;
    /** @type {?} */
    ElSteps.prototype.stepsLength;
    /** @type {?} */
    ElSteps.prototype.el;
    /** @type {?} */
    ElSteps.prototype.renderer;
}
//# sourceMappingURL=steps.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/switch/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/switch/module.js ***!
  \***************************************************************/
/*! exports provided: ElSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSwitchModule", function() { return ElSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ "./node_modules/element-angular/release/switch/switch.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ElSwitchModule = /** @class */ (function () {
    function ElSwitchModule() {
    }
    /**
     * @return {?}
     */
    ElSwitchModule.forRoot = function () {
        return { ngModule: ElSwitchModule, providers: [] };
    };
    ElSwitchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_switch__WEBPACK_IMPORTED_MODULE_2__["ElSwitch"]],
                    exports: [_switch__WEBPACK_IMPORTED_MODULE_2__["ElSwitch"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
                    entryComponents: [_switch__WEBPACK_IMPORTED_MODULE_2__["ElSwitch"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSwitchModule.ctorParameters = function () { return []; };
    return ElSwitchModule;
}());

function ElSwitchModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSwitchModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSwitchModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/switch/switch.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/switch/switch.js ***!
  \***************************************************************/
/*! exports provided: ElSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElSwitch", function() { return ElSwitch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ElSwitch = /** @class */ (function () {
    /**
     * @param {?} sanitizer
     */
    function ElSwitch(sanitizer) {
        this.sanitizer = sanitizer;
        this.elDisabled = false;
        this.activeColor = '#409EFF';
        this.inactiveColor = '#C0CCDA';
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._model = false;
        this.hasText = false;
        this.controlChange = function () { };
        this.controlTouch = function () { };
    }
    Object.defineProperty(ElSwitch.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElSwitch.prototype, "model", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            this._model = val;
            this.updateStyles();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} nextValue
     * @return {?}
     */
    ElSwitch.prototype.changeHandle = function (nextValue) {
        this.model = nextValue;
        this.modelChange.emit(nextValue);
        this.controlChange(nextValue);
    };
    /**
     * @return {?}
     */
    ElSwitch.prototype.updateStyles = function () {
        var /** @type {?} */ baseStyle = "width: " + this.realWidth + "px;";
        var /** @type {?} */ translate = this._model ? "translate3d(" + (this.realWidth - 20) + "px, 0, 0)" : '';
        var /** @type {?} */ color = this._model ? this.activeColor : this.inactiveColor;
        var /** @type {?} */ colorStyles = "border-color: " + color + "; background-color: " + color + ";";
        this.iconTransform = this.sanitizer.bypassSecurityTrustStyle("transform: " + translate);
        if (this.activeColor && this.inactiveColor) {
            baseStyle += colorStyles;
        }
        this.coreStyles = this.sanitizer.bypassSecurityTrustStyle(baseStyle);
    };
    /**
     * @return {?}
     */
    ElSwitch.prototype.ngOnInit = function () {
        this.realWidth = this.width ? this.width : 40;
        this.updateStyles();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ElSwitch.prototype.writeValue = function (value) {
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElSwitch.prototype.registerOnChange = function (fn) {
        this.controlChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ElSwitch.prototype.registerOnTouched = function (fn) {
        this.controlTouch = fn;
    };
    ElSwitch.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-switch',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ElSwitch; }),
                            multi: true
                        }],
                    template: "\n    <label class=\"el-switch\"\n      [class.is-disabled]=\"elDisabled\"\n      [class.el-switch--wide]=\"hasText\"\n      [class.is-checked]=\"_model\">\n      <div class=\"el-switch__mask\" *ngIf=\"elDisabled\"></div>\n      <input class=\"el-switch__input\" type=\"checkbox\"\n        [name]=\"name\" [disabled]=\"elDisabled\"\n        [ngModel]=\"_model\" (ngModelChange)=\"changeHandle($event)\">\n      \n      <div class=\"el-switch__label el-switch__label--left\" [class.is-active]=\"!_model\"\n        *ngIf=\"inactiveText || inactiveIconClass\">\n        <i [class]=\"inactiveIconClass\" *ngIf=\"inactiveIconClass\"></i>\n        <span *ngIf=\"!inactiveIconClass\">{{ inactiveText }}</span>\n      </div>\n\n      <span class=\"el-switch__core\" [style]=\"coreStyles\">\n        <span class=\"el-switch__button\" [style]=\"iconTransform\"></span>\n      </span>\n\n      <div class=\"el-switch__label el-switch__label--right\" [class.is-active]=\"_model\"\n           *ngIf=\"activeText || activeIconClass\">\n        <i [class]=\"activeIconClass\" *ngIf=\"activeIconClass\"></i>\n        <span *ngIf=\"!activeIconClass\">{{ activeText }}</span>\n      </div>\n    </label>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElSwitch.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    ElSwitch.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'name': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'activeIconClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['active-icon-class',] },],
        'inactiveIconClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['inactive-icon-class',] },],
        'activeText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['active-text',] },],
        'inactiveText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['inactive-text',] },],
        'activeColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['active-color',] },],
        'inactiveColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['inactive-color',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElSwitch;
}());

function ElSwitch_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSwitch.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSwitch.ctorParameters;
    /** @type {?} */
    ElSwitch.propDecorators;
    /** @type {?} */
    ElSwitch.prototype.elDisabled;
    /** @type {?} */
    ElSwitch.prototype.name;
    /** @type {?} */
    ElSwitch.prototype.width;
    /** @type {?} */
    ElSwitch.prototype.activeIconClass;
    /** @type {?} */
    ElSwitch.prototype.inactiveIconClass;
    /** @type {?} */
    ElSwitch.prototype.activeText;
    /** @type {?} */
    ElSwitch.prototype.inactiveText;
    /** @type {?} */
    ElSwitch.prototype.activeColor;
    /** @type {?} */
    ElSwitch.prototype.inactiveColor;
    /** @type {?} */
    ElSwitch.prototype.modelChange;
    /** @type {?} */
    ElSwitch.prototype._model;
    /** @type {?} */
    ElSwitch.prototype.hasText;
    /** @type {?} */
    ElSwitch.prototype.realWidth;
    /** @type {?} */
    ElSwitch.prototype.coreStyles;
    /** @type {?} */
    ElSwitch.prototype.iconTransform;
    /** @type {?} */
    ElSwitch.prototype.controlChange;
    /** @type {?} */
    ElSwitch.prototype.controlTouch;
    /** @type {?} */
    ElSwitch.prototype.sanitizer;
}
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/table/children/body.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/table/children/body.js ***!
  \*********************************************************************/
/*! exports provided: ElTableBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTableBody", function() { return ElTableBody; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format */ "./node_modules/element-angular/release/table/utils/format.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ElTableBody = /** @class */ (function () {
    /**
     * @param {?} tableFormat
     * @param {?} sanitizer
     */
    function ElTableBody(tableFormat, sanitizer) {
        this.tableFormat = tableFormat;
        this.sanitizer = sanitizer;
        this.stripe = false;
        this.center = false;
        this.cellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formatModel = [];
    }
    /**
     * @param {?} str
     * @return {?}
     */
    ElTableBody.prototype.renderHtml = function (str) {
        return this.sanitizer.bypassSecurityTrustHtml(str);
    };
    /**
     * @param {?} domHandle
     * @param {?} next
     * @return {?}
     */
    ElTableBody.prototype.merge = function (domHandle, next) {
        return Object.assign(domHandle, next);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    ElTableBody.prototype.isTemplateRef = function (content) {
        return content && typeof content === 'object';
    };
    /**
     * @return {?}
     */
    ElTableBody.prototype.getBodyWidth = function () {
        var /** @type {?} */ width = _utils_format__WEBPACK_IMPORTED_MODULE_1__["ElTableFormat"].getCSSValue(this.layout.bodyWidth);
        if (!width)
            return this.layout.bodyWidth;
        return width - this.layout.scrollBarWidth;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ElTableBody.prototype.getFormatModel = function (index) {
        return this.formatModel[index];
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ElTableBody.prototype.destroyRowFunc = function (index) {
        var _this = this;
        return function () {
            _this.model.splice(index, 1);
            _this.formatModel = _this.tableFormat.formatRowData(_this.model);
        };
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ElTableBody.prototype.makeRowClass = function (index) {
        var /** @type {?} */ userRows = this.formatModel[index];
        var /** @type {?} */ userClass = this.rowClassName ? this.rowClassName(userRows, index) : '';
        return 'el-table__row ' + userClass;
    };
    /**
     * @param {?} event
     * @param {?} Ref
     * @return {?}
     */
    ElTableBody.prototype.doubleClickHandle = function (event, Ref) {
        Ref.event = event;
        this.cellDblClick.emit(Ref);
    };
    /**
     * @param {?} event
     * @param {?} Ref
     * @return {?}
     */
    ElTableBody.prototype.clickHandle = function (event, Ref) {
        Ref.event = event;
        this.cellClick.emit(Ref);
    };
    /**
     * @param {?} event
     * @param {?} isEnter
     * @return {?}
     */
    ElTableBody.prototype.cellMouseActionHandle = function (event, isEnter) {
        if (isEnter)
            return this.cellMouseEnter.emit(event);
        this.cellMouseLeave.emit(event);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElTableBody.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        this.formatModel = this.tableFormat.formatRowData(this.model);
    };
    ElTableBody.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-table-body',
                    template: "\n    <table class=\"el-table__body\" [ngStyle]=\"{ width: getBodyWidth() | cssValue }\"\n      cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\n      <tr *ngFor=\"let tr of model; let k = index\" #tableRow\n        [hidden]=\"tr.hidden\"\n        [class]=\"makeRowClass(k)\"\n        [class.hover-row]=\"tableRow.hover\"\n        [class.el-table__row--striped]=\"stripe && k % 2 === 1\"\n        (mouseenter)=\"tableRow.hover = true\" (mouseleave)=\"tableRow.hover = false\">\n        <ng-container *ngFor=\"let td of tr; let i = index;\">\n          <td *ngIf=\"!td.hidden\" #tdRef\n            [ngStyle]=\"{ width: td.width | cssValue }\"\n            [class]=\"'el-table_1_column_' + (i + 1)\"\n            (mouseenter)=\"cellMouseActionHandle($event, true);tdRef.destroy = destroyRowFunc(k);\"\n            (mouseleave)=\"cellMouseActionHandle($event, false)\"\n            (click)=\"clickHandle($event, tdRef)\"\n            (dblclick)=\"doubleClickHandle($event, tdRef)\">\n            <div class=\"cell\" [ngStyle]=\"{ 'text-align': center ? 'center' : 'unset' }\">\n              <ng-container *ngIf=\"!isTemplateRef(td.value) && !td._renderHTML\">{{ td.value }}</ng-container>\n              <div *ngIf=\"!isTemplateRef(td.value) && td._renderHTML\" [innerHtml]=\"renderHtml(td.value)\"></div>\n              <ng-container *ngIf=\"isTemplateRef(td.value)\">\n                <ng-template [ngTemplateOutlet]=\"td.value\" [ngTemplateOutletContext]=\"{\n                scope: merge(tdRef, {rowData: getFormatModel(k), index: k})}\"></ng-template>\n              </ng-container>\n            </div>\n          </td>\n        </ng-container>\n      </tr>\n    </table>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTableBody.ctorParameters = function () { return [
        { type: _utils_format__WEBPACK_IMPORTED_MODULE_1__["ElTableFormat"], },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], },
    ]; };
    ElTableBody.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['model',] },],
        'stripe': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'center': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'layout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'rowClassName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['row-class-name',] },],
        'cellClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cell-click',] },],
        'cellDblClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cell-dblclick',] },],
        'cellMouseEnter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cell-mouse-enter',] },],
        'cellMouseLeave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cell-mouse-leave',] },],
    };
    return ElTableBody;
}());

function ElTableBody_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableBody.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableBody.ctorParameters;
    /** @type {?} */
    ElTableBody.propDecorators;
    /** @type {?} */
    ElTableBody.prototype.model;
    /** @type {?} */
    ElTableBody.prototype.stripe;
    /** @type {?} */
    ElTableBody.prototype.center;
    /** @type {?} */
    ElTableBody.prototype.layout;
    /** @type {?} */
    ElTableBody.prototype.rowClassName;
    /** @type {?} */
    ElTableBody.prototype.cellClick;
    /** @type {?} */
    ElTableBody.prototype.cellDblClick;
    /** @type {?} */
    ElTableBody.prototype.cellMouseEnter;
    /** @type {?} */
    ElTableBody.prototype.cellMouseLeave;
    /** @type {?} */
    ElTableBody.prototype.formatModel;
    /** @type {?} */
    ElTableBody.prototype.tableFormat;
    /** @type {?} */
    ElTableBody.prototype.sanitizer;
}
//# sourceMappingURL=body.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/table/children/column.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/table/children/column.js ***!
  \***********************************************************************/
/*! exports provided: ElTableColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTableColumn", function() { return ElTableColumn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table */ "./node_modules/element-angular/release/table/table.js");


var ElTableColumn = /** @class */ (function () {
    /**
     * @param {?} root
     * @param {?} el
     */
    function ElTableColumn(root, el) {
        this.root = root;
        this.el = el;
        this.renderHTML = false;
        this.width = 'auto';
        this.maxDeep = 10;
    }
    /**
     * @param {?} self
     * @return {?}
     */
    ElTableColumn.prototype.findChild = function (self) {
        var /** @type {?} */ children = self.children;
        if (!children || !children.length)
            return 0;
        return Array.from(children)
            .map(function (child) {
            return child.tagName.toUpperCase() === 'EL-TABLE-COLUMN';
        })
            .filter(function (r) { return r; })
            .length;
    };
    /**
     * @param {?} self
     * @return {?}
     */
    ElTableColumn.prototype.findLevel = function (self) {
        var _this = this;
        var /** @type {?} */ brothers = self.parentElement.children;
        var /** @type {?} */ brothersDeeps = Array.from(brothers).map(function (el) { return _this.findDeep(el); });
        var /** @type {?} */ maxDeep = brothersDeeps.sort(function (pre, next) { return next - pre; })[0];
        return maxDeep;
    };
    /**
     * @param {?} self
     * @return {?}
     */
    ElTableColumn.prototype.findDeep = function (self) {
        var /** @type {?} */ deep = 0;
        Array.from(new Array(this.maxDeep)).every(function () {
            var /** @type {?} */ children = self.children;
            if (!children || !children.length)
                return false;
            if (children[0].tagName.toUpperCase() !== 'EL-TABLE-COLUMN') {
                return false;
            }
            self = children[0];
            deep++;
        });
        return deep;
    };
    /**
     * @param {?} deep
     * @param {?} self
     * @return {?}
     */
    ElTableColumn.prototype.isLastElement = function (deep, self) {
        if (deep !== 0)
            return false;
        var /** @type {?} */ isLast = true;
        Array.from(new Array(this.maxDeep)).every(function () {
            var /** @type {?} */ parent = self.parentElement;
            if (!parent)
                return false;
            if (self !== parent.children[parent.children.length - 1]) {
                isLast = false;
                return false;
            }
            if (parent.tagName.toUpperCase() !== 'EL-TABLE-COLUMN') {
                return false;
            }
            self = parent;
            return true;
        });
        return isLast;
    };
    /**
     * @return {?}
     */
    ElTableColumn.prototype.ngOnInit = function () {
        var /** @type {?} */ self = this.el.nativeElement;
        var /** @type {?} */ brothers = self.parentElement.children;
        var /** @type {?} */ deep = this.findDeep(self);
        var /** @type {?} */ level = deep === 0 && brothers.length > 1 ? this.findLevel(self) : deep;
        var /** @type {?} */ childCount = this.findChild(self);
        var /** @type {?} */ tableColumn = {
            modelKey: this.modelKey,
            label: this.label ? this.label : this.modelKey,
            width: this.width,
            slot: this.slot,
            _renderHTML: this.renderHTML,
            deep: deep, level: level, childCount: childCount,
        };
        this.root.updateColumns(tableColumn);
        if (deep === 0) {
            this.root.updateColumnsWidth({ auto: false, width: +this.width });
        }
        // last element
        if (this.isLastElement(deep, self)) {
            this.root.transformColumnsData();
        }
    };
    ElTableColumn.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-table-column',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTableColumn.ctorParameters = function () { return [
        { type: _table__WEBPACK_IMPORTED_MODULE_1__["ElTable"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ElTableColumn.propDecorators = {
        'slot': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['slot',] },],
        'modelKey': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['model-key',] },],
        'renderHTML': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['render-html',] },],
        'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElTableColumn;
}());

function ElTableColumn_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableColumn.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableColumn.ctorParameters;
    /** @type {?} */
    ElTableColumn.propDecorators;
    /** @type {?} */
    ElTableColumn.prototype.slot;
    /** @type {?} */
    ElTableColumn.prototype.modelKey;
    /** @type {?} */
    ElTableColumn.prototype.renderHTML;
    /** @type {?} */
    ElTableColumn.prototype.label;
    /** @type {?} */
    ElTableColumn.prototype.width;
    /** @type {?} */
    ElTableColumn.prototype.maxDeep;
    /** @type {?} */
    ElTableColumn.prototype.root;
    /** @type {?} */
    ElTableColumn.prototype.el;
}
//# sourceMappingURL=column.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/table/children/header.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/table/children/header.js ***!
  \***********************************************************************/
/*! exports provided: ElTableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTableHeader", function() { return ElTableHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElTableHeader = /** @class */ (function () {
    function ElTableHeader() {
        this.model = [];
        this.border = false;
        this.columnsWidth = [];
    }
    /**
     * @param {?} th
     * @return {?}
     */
    ElTableHeader.prototype.makeClasses = function (th) {
        var /** @type {?} */ isLeaf = this.getColspan(th) > 1 ? '' : 'is-leaf';
        return this.height === 'auto' ? isLeaf + " " : ' gutter';
    };
    /**
     * @param {?} td
     * @return {?}
     */
    ElTableHeader.prototype.getRowspan = function (td) {
        if (td.deep === 0 && td.level !== 0) {
            return td.level + 1;
        }
        return 1;
    };
    /**
     * @param {?} th
     * @return {?}
     */
    ElTableHeader.prototype.getColspan = function (th) {
        return th.childCount > 0 ? th.childCount : 1;
    };
    ElTableHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-table-header',
                    template: "\n    <ng-template #widthTmp>\n      <col *ngFor=\"let item of columnsWidth\" [width]=\"item.width\">\n    </ng-template>\n    <table class=\"el-table__header\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"\n      [ngStyle]=\"{ width: '100%' }\">\n      <ng-template [ngTemplateOutlet]=\"widthTmp\">\n      </ng-template>\n\n      <tr *ngFor=\"let tr of model\">\n        <th *ngFor=\"let th of tr\" [class]=\"makeClasses(th)\"\n            [ngStyle]=\"{ width: th.width | cssValue }\"\n            [attr.colspan]=\"getColspan(th)\" [attr.rowspan]=\"getRowspan(th)\">\n          <div class=\"cell\" [ngStyle]=\"{\n            width: th.width | cssValue,\n            'display': center ? 'block' : 'inline-block',\n            'text-align': center ? 'center' : 'unset' }\">{{th.label}}</div>\n        </th>\n      </tr>\n    </table>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTableHeader.ctorParameters = function () { return []; };
    ElTableHeader.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'layout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'border': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'center': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'columnsWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['columns-width',] },],
    };
    return ElTableHeader;
}());

function ElTableHeader_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableHeader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableHeader.ctorParameters;
    /** @type {?} */
    ElTableHeader.propDecorators;
    /** @type {?} */
    ElTableHeader.prototype.model;
    /** @type {?} */
    ElTableHeader.prototype.layout;
    /** @type {?} */
    ElTableHeader.prototype.border;
    /** @type {?} */
    ElTableHeader.prototype.height;
    /** @type {?} */
    ElTableHeader.prototype.center;
    /** @type {?} */
    ElTableHeader.prototype.columnsWidth;
}
//# sourceMappingURL=header.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/table/children/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/element-angular/release/table/children/index.js ***!
  \**********************************************************************/
/*! exports provided: ElTableHeader, ElTableColumn, ElTableBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./node_modules/element-angular/release/table/children/header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElTableHeader", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["ElTableHeader"]; });

/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column */ "./node_modules/element-angular/release/table/children/column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElTableColumn", function() { return _column__WEBPACK_IMPORTED_MODULE_1__["ElTableColumn"]; });

/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ "./node_modules/element-angular/release/table/children/body.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElTableBody", function() { return _body__WEBPACK_IMPORTED_MODULE_2__["ElTableBody"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/table/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/element-angular/release/table/module.js ***!
  \**************************************************************/
/*! exports provided: ElTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTableModule", function() { return ElTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _children_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./children/index */ "./node_modules/element-angular/release/table/children/index.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ "./node_modules/element-angular/release/table/table.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/format */ "./node_modules/element-angular/release/table/utils/format.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/module */ "./node_modules/element-angular/release/shared/module.js");






var ElTableModule = /** @class */ (function () {
    function ElTableModule() {
    }
    /**
     * @return {?}
     */
    ElTableModule.forRoot = function () {
        return { ngModule: ElTableModule, providers: [_utils_format__WEBPACK_IMPORTED_MODULE_4__["ElTableFormat"]] };
    };
    ElTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _table__WEBPACK_IMPORTED_MODULE_3__["ElTable"],
                        _children_index__WEBPACK_IMPORTED_MODULE_2__["ElTableHeader"],
                        _children_index__WEBPACK_IMPORTED_MODULE_2__["ElTableColumn"],
                        _children_index__WEBPACK_IMPORTED_MODULE_2__["ElTableBody"],
                    ],
                    exports: [
                        _table__WEBPACK_IMPORTED_MODULE_3__["ElTable"],
                        _children_index__WEBPACK_IMPORTED_MODULE_2__["ElTableColumn"],
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["ElSharedModule"]],
                    entryComponents: [_table__WEBPACK_IMPORTED_MODULE_3__["ElTable"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTableModule.ctorParameters = function () { return []; };
    return ElTableModule;
}());

function ElTableModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/table/table.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/table/table.js ***!
  \*************************************************************/
/*! exports provided: ElTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTable", function() { return ElTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");
/* harmony import */ var _table_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.props */ "./node_modules/element-angular/release/table/table.props.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/format */ "./node_modules/element-angular/release/table/utils/format.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var ElTable = /** @class */ (function (_super) {
    __extends(ElTable, _super);
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} window
     * @param {?} differs
     */
    function ElTable(el, renderer, document, window, differs) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.document = document;
        _this.window = window;
        _this.differs = differs;
        _this.columnsWithLevel = [];
        _this.layout = {
            headerHeight: 40,
            bodyHeight: 'auto',
            bodyWidth: 'auto',
            scrollBarWidth: 0,
        };
        _this.columnsWidth = [];
        _this.columns = [];
        _this.widthCount = 0;
        _this.differ = _this.differs.find([]).create();
        return _this;
    }
    /**
     * @return {?}
     */
    ElTable.GEN_TEMPLATE_KEY = function () {
        return Math.random().toString(16).substr(2, 8);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElTable.prototype.bodyScroll = function (event) {
        if (!this.scrollX)
            return;
        var /** @type {?} */ el = ((event.target));
        if (el.scrollLeft === undefined)
            return;
        this.headerRef.nativeElement.scrollLeft = el.scrollLeft;
    };
    /**
     * @param {?} column
     * @return {?}
     */
    ElTable.prototype.updateColumns = function (column) {
        var /** @type {?} */ next = Object.assign(column, { index: this.columns.length });
        this.columns.push(next);
    };
    /**
     * @return {?}
     */
    ElTable.prototype.updateBodyHeight = function () {
        var _this = this;
        var /** @type {?} */ height = _utils_format__WEBPACK_IMPORTED_MODULE_3__["ElTableFormat"].getCSSValue(this.height);
        var /** @type {?} */ header = this.headerRef.nativeElement;
        if (!header || !height)
            return;
        var /** @type {?} */ timer = setTimeout(function () {
            var /** @type {?} */ headerHeight = header.offsetHeight;
            if (headerHeight) {
                _this.layout.headerHeight = headerHeight;
                _this.layout.bodyHeight = height - _this.layout.headerHeight;
                _this.layout.scrollBarWidth = _this.window.innerWidth - _this.document.body.clientWidth;
            }
            clearTimeout(timer);
        }, 0);
    };
    /**
     * @return {?}
     */
    ElTable.prototype.updateLayout = function () {
        var /** @type {?} */ elTable = this.el.nativeElement.children[0];
        this.layout.bodyWidth = this.widthCount || elTable.clientWidth;
        if (this.widthCount) {
            this.renderer.setStyle(elTable, 'width', this.widthCount + "px");
        }
    };
    /**
     * @param {?} widthItem
     * @return {?}
     */
    ElTable.prototype.updateColumnsWidth = function (widthItem) {
        this.columnsWidth.push(widthItem);
    };
    /**
     * @param {?} columnsWidth
     * @return {?}
     */
    ElTable.prototype.computeColumnsWidth = function (columnsWidth) {
        var /** @type {?} */ auto = 0, /** @type {?} */ count = 0;
        columnsWidth.forEach(function (item) {
            if (item.auto)
                return auto++;
            if (Number.isNaN(item.width)) {
                item.auto = true;
                return auto++;
            }
            count += item.width;
        });
        // if user has set the width, use fixed width
        // update layout
        if (!auto) {
            this.widthCount = count;
            this.updateLayout();
        }
        var /** @type {?} */ average = (this.layout.bodyWidth - count) / auto;
        return columnsWidth.map(function (item) {
            return item.auto ? Object.assign(item, { width: average }) : item;
        });
    };
    /**
     * @return {?}
     */
    ElTable.prototype.transformColumnsData = function () {
        var _this = this;
        // order by deep
        this.columns = this.columns.map(function (column) {
            if (!Array.isArray(_this.columnsWithLevel[column.level])) {
                _this.columnsWithLevel[column.level] = [];
            }
            _this.columnsWithLevel[column.level].push(column);
            if (column.deep === 0)
                return column;
            return null;
        }).filter(function (r) { return r; });
        this.columnsWithLevel.reverse();
        this.columnsWidth = this.computeColumnsWidth(this.columnsWidth);
        // distribution template
        this.columns = this.columns.map(function (column) {
            if (!column.slot)
                return column;
            var /** @type {?} */ TEMPLATE_KEY = ElTable.GEN_TEMPLATE_KEY();
            _this.modelStorge = _this.model.map(function (v) {
                return Object.assign(v, (_a = {}, _a[TEMPLATE_KEY] = column.slot, _a));
                var _a;
            });
            return Object.assign(column, { modelKey: TEMPLATE_KEY });
        });
        this.orderMap = this.columns.reduce(function (pre, next) {
            return Object.assign(pre, (_a = {}, _a[next.modelKey] = next, _a));
            var _a;
        }, {});
        this.transformModelData();
    };
    /**
     * @return {?}
     */
    ElTable.prototype.transformModelData = function () {
        var /** @type {?} */ orderMap = this.orderMap;
        // add index, width, value
        if (!this.modelStorge) {
            this.modelStorge = this.model;
        }
        var /** @type {?} */ modelWithIndex = this.modelStorge.map(function (row) {
            return Object.keys(__assign({}, row, orderMap)).map(function (v) {
                var /** @type {?} */ item = orderMap[v] || {};
                return _a = {
                        hidden: !item.width,
                        value: row[v]
                    },
                    _a[v] = row[v],
                    _a.index = ~~item.index,
                    _a.width = item.width,
                    _a._renderHTML = item._renderHTML,
                    _a;
                var _a;
            })
                .filter(function (r) { return !!r; });
        });
        // column sort
        this.columnsData = modelWithIndex.map(function (row) {
            return row.sort(function (pre, next) { return pre.index - next.index; });
        });
        this.updateBodyHeight();
    };
    /**
     * @return {?}
     */
    ElTable.prototype.ngOnInit = function () {
        var _this = this;
        this.updateLayout();
        this.updateBodyHeight();
        this.globalListenFunc = this.renderer.listen('window', 'resize', function () {
            _this.updateLayout();
            _this.columnsWidth = _this.computeColumnsWidth(_this.columnsWidth);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ElTable.prototype.ngOnChanges = function (changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        // first change
        if (changes.model.isFirstChange())
            return;
        this.model = changes.model.currentValue;
        this.transformModelData();
    };
    /**
     * @return {?}
     */
    ElTable.prototype.ngDoCheck = function () {
        var _this = this;
        var /** @type {?} */ change = this.differ.diff(this.model);
        if (!change || !this.orderMap)
            return;
        // distribution template
        this.modelStorge = this.model;
        var /** @type {?} */ nextColumns = this.columns.map(function (column) {
            if (!column.slot)
                return column;
            var /** @type {?} */ TEMPLATE_KEY = ElTable.GEN_TEMPLATE_KEY();
            _this.modelStorge = _this.model.map(function (v) {
                return Object.assign(v, (_a = {}, _a[TEMPLATE_KEY] = column.slot, _a));
                var _a;
            });
            return Object.assign(column, { modelKey: TEMPLATE_KEY });
        });
        this.orderMap = nextColumns.reduce(function (pre, next) {
            return Object.assign(pre, (_a = {}, _a[next.modelKey] = next, _a));
            var _a;
        }, {});
        this.transformModelData();
    };
    /**
     * @return {?}
     */
    ElTable.prototype.ngOnDestroy = function () {
        this.globalListenFunc && this.globalListenFunc();
    };
    ElTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-table',
                    styles: ["\n  .el-table__header-scroll::-webkit-scrollbar { visibility: hidden; }\n  "],
                    template: "\n    <div class=\"el-table\"\n      [ngStyle]=\"{ height: height | cssValue }\"\n      [class.el-table--enable-row-transition]=\"true\"\n      [class.el-table--striped]=\"stripe\"\n      [class.el-table--border]=\"border\"\n      [class.el-table--hidden]=\"false\">\n      <div class=\"hidden-columns\"><ng-content></ng-content></div>\n      <div class=\"el-table__header-wrapper el-table__header-scroll\" [hidden]=\"!showHeader\"\n        [ngStyle]=\"{'overflow-x': (scrollX ? 'auto' : 'hidden')}\" #headerRef>\n        <el-table-header [model]=\"columnsWithLevel\" [layout]=\"layout\" [columns-width]=\"columnsWidth\"\n          [border]=\"border\" [height]=\"height\" [center]=\"center === 'header' || center === 'all'\">\n        </el-table-header>\n      </div>\n      <div class=\"el-table__body-wrapper\" [ngStyle]=\"{ height: layout.bodyHeight | cssValue }\"\n        (scroll)=\"bodyScroll($event)\">\n        <el-table-body [model]=\"columnsData\" [stripe]=\"stripe\"\n          [layout]=\"layout\" [row-class-name]=\"rowClassName\"\n          [center]=\"center === 'all'\"\n          [ngStyle]=\"{ width: layout.bodyWidth + 'px' }\">\n        </el-table-body>\n        <div [ngStyle]=\"{width: layout.bodyWidth + 'px'}\" class=\"el-table__empty-block\" *ngIf=\"!model || model.length === 0\">\n          <span class=\"el-table__empty-text\">{{placeholder}}</span>\n        </div>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_1__["DocumentWrapper"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_1__["WindowWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], },
    ]; };
    ElTable.propDecorators = {
        'headerRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['headerRef',] },],
    };
    return ElTable;
}(_table_props__WEBPACK_IMPORTED_MODULE_2__["ElTableProps"]));

function ElTable_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTable.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTable.ctorParameters;
    /** @type {?} */
    ElTable.propDecorators;
    /** @type {?} */
    ElTable.prototype.headerRef;
    /** @type {?} */
    ElTable.prototype.columnsData;
    /** @type {?} */
    ElTable.prototype.columnsWithLevel;
    /** @type {?} */
    ElTable.prototype.layout;
    /** @type {?} */
    ElTable.prototype.columnsWidth;
    /** @type {?} */
    ElTable.prototype.columns;
    /** @type {?} */
    ElTable.prototype.globalListenFunc;
    /** @type {?} */
    ElTable.prototype.orderMap;
    /** @type {?} */
    ElTable.prototype.modelStorge;
    /** @type {?} */
    ElTable.prototype.differ;
    /** @type {?} */
    ElTable.prototype.widthCount;
    /** @type {?} */
    ElTable.prototype.el;
    /** @type {?} */
    ElTable.prototype.renderer;
    /** @type {?} */
    ElTable.prototype.document;
    /** @type {?} */
    ElTable.prototype.window;
    /** @type {?} */
    ElTable.prototype.differs;
}
//# sourceMappingURL=table.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/table/table.props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-angular/release/table/table.props.js ***!
  \*******************************************************************/
/*! exports provided: ElTableProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTableProps", function() { return ElTableProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElTableProps = /** @class */ (function () {
    function ElTableProps() {
        this.height = 'auto';
        // @Input('max-height') maxHeight: string
        this.placeholder = '暂无数据';
        this.stripe = false;
        this.border = false;
        this.scrollX = false;
        this.showHeader = true;
        this.center = '';
        // bind value
        this.model = 0;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ElTableProps.propDecorators = {
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'placeholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'stripe': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'border': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'scrollX': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['scroll-x',] },],
        'showHeader': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-header',] },],
        'center': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['center',] },],
        'rowClassName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['row-class-name',] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'select': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'selectAll': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['select-all',] },],
        'selectionChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['selection-change',] },],
        'cellMouseEnter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cell-mouse-enter',] },],
        'cellMouseLeave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cell-mouse-leave',] },],
        'cellClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cell-click',] },],
        'cellDblclick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cell-dblclick',] },],
    };
    return ElTableProps;
}());

function ElTableProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableProps.propDecorators;
    /** @type {?} */
    ElTableProps.prototype.height;
    /** @type {?} */
    ElTableProps.prototype.placeholder;
    /** @type {?} */
    ElTableProps.prototype.stripe;
    /** @type {?} */
    ElTableProps.prototype.border;
    /** @type {?} */
    ElTableProps.prototype.scrollX;
    /** @type {?} */
    ElTableProps.prototype.showHeader;
    /** @type {?} */
    ElTableProps.prototype.center;
    /** @type {?} */
    ElTableProps.prototype.rowClassName;
    /** @type {?} */
    ElTableProps.prototype.model;
    /** @type {?} */
    ElTableProps.prototype.modelChange;
    /** @type {?} */
    ElTableProps.prototype.select;
    /** @type {?} */
    ElTableProps.prototype.selectAll;
    /** @type {?} */
    ElTableProps.prototype.selectionChange;
    /** @type {?} */
    ElTableProps.prototype.cellMouseEnter;
    /** @type {?} */
    ElTableProps.prototype.cellMouseLeave;
    /** @type {?} */
    ElTableProps.prototype.cellClick;
    /** @type {?} */
    ElTableProps.prototype.cellDblclick;
}
//# sourceMappingURL=table.props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/table/utils/format.js":
/*!********************************************************************!*\
  !*** ./node_modules/element-angular/release/table/utils/format.js ***!
  \********************************************************************/
/*! exports provided: ElTableFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTableFormat", function() { return ElTableFormat; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElTableFormat = /** @class */ (function () {
    function ElTableFormat() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    ElTableFormat.getCSSValue = function (val) {
        if (val === 'auto')
            return null;
        if (!Number.isNaN(+val))
            return +val;
        if (String(val).endsWith('px')) {
            return +String(val).split('px')[0];
        }
    };
    /**
     * @param {?} tableRows
     * @return {?}
     */
    ElTableFormat.prototype.formatRowData = function (tableRows) {
        var /** @type {?} */ elTableKeys = ['value', 'width', 'index'];
        var /** @type {?} */ tableRowsMap = tableRows.map(function (row, index) {
            var /** @type {?} */ currentRow = {};
            row.forEach(function (item) {
                return Object.keys(item).forEach(function (r) {
                    if (elTableKeys.indexOf(r) < 0) {
                        currentRow[r] = item[r];
                    }
                });
            });
            currentRow['index'] = index;
            return currentRow;
        });
        return tableRowsMap;
    };
    ElTableFormat.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    ElTableFormat.ctorParameters = function () { return []; };
    return ElTableFormat;
}());

function ElTableFormat_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableFormat.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableFormat.ctorParameters;
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tag/module.js":
/*!************************************************************!*\
  !*** ./node_modules/element-angular/release/tag/module.js ***!
  \************************************************************/
/*! exports provided: ElTagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTagsModule", function() { return ElTagsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag */ "./node_modules/element-angular/release/tag/tag.js");



var ElTagsModule = /** @class */ (function () {
    function ElTagsModule() {
    }
    /**
     * @return {?}
     */
    ElTagsModule.forRoot = function () {
        return { ngModule: ElTagsModule, providers: [] };
    };
    ElTagsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_tag__WEBPACK_IMPORTED_MODULE_2__["ElTag"]],
                    exports: [_tag__WEBPACK_IMPORTED_MODULE_2__["ElTag"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_tag__WEBPACK_IMPORTED_MODULE_2__["ElTag"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTagsModule.ctorParameters = function () { return []; };
    return ElTagsModule;
}());

function ElTagsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTagsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTagsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tag/tag.js":
/*!*********************************************************!*\
  !*** ./node_modules/element-angular/release/tag/tag.js ***!
  \*********************************************************/
/*! exports provided: ElTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTag", function() { return ElTag; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


var ElTag = /** @class */ (function () {
    /**
     * @param {?} sanitizer
     */
    function ElTag(sanitizer) {
        this.sanitizer = sanitizer;
        this.closable = false;
        this.hit = false;
        this.closeTransition = false;
        this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ElTag.prototype.ngOnInit = function () {
        var /** @type {?} */ styles = "backgroundColor: " + this.color;
        this.tagStyles = this.sanitizer.bypassSecurityTrustStyle(styles);
    };
    ElTag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-tag',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <span [class]=\"'el-tag' + (type ? ' el-tag--' + type : '') + (size ? ' el-tag--' + size : '')\"\n      [class.is-hit]=\"hit\">\n      <ng-content></ng-content>\n      <i class=\"el-tag__close el-icon-close\" *ngIf=\"closable\" (click)=\"closeEmitter.emit($event)\"></i>\n    </span>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTag.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    ElTag.propDecorators = {
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'closable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'hit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'color': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'closeTransition': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['close-transition',] },],
        'closeEmitter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['close',] },],
    };
    return ElTag;
}());

function ElTag_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTag.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTag.ctorParameters;
    /** @type {?} */
    ElTag.propDecorators;
    /** @type {?} */
    ElTag.prototype.type;
    /** @type {?} */
    ElTag.prototype.closable;
    /** @type {?} */
    ElTag.prototype.hit;
    /** @type {?} */
    ElTag.prototype.color;
    /** @type {?} */
    ElTag.prototype.size;
    /** @type {?} */
    ElTag.prototype.closeTransition;
    /** @type {?} */
    ElTag.prototype.closeEmitter;
    /** @type {?} */
    ElTag.prototype.tagStyles;
    /** @type {?} */
    ElTag.prototype.sanitizer;
}
//# sourceMappingURL=tag.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tooltip/module.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-angular/release/tooltip/module.js ***!
  \****************************************************************/
/*! exports provided: getWindow, ElTooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTooltipModule", function() { return ElTooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip */ "./node_modules/element-angular/release/tooltip/tooltip.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/module */ "./node_modules/element-angular/release/shared/module.js");




/**
 * @return {?}
 */
function getWindow() { return window; }
var ElTooltipModule = /** @class */ (function () {
    function ElTooltipModule() {
    }
    /**
     * @return {?}
     */
    ElTooltipModule.forRoot = function () {
        return { ngModule: ElTooltipModule, providers: [] };
    };
    ElTooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_tooltip__WEBPACK_IMPORTED_MODULE_2__["ElTooltip"]],
                    exports: [_tooltip__WEBPACK_IMPORTED_MODULE_2__["ElTooltip"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["ElSharedModule"]],
                    entryComponents: [_tooltip__WEBPACK_IMPORTED_MODULE_2__["ElTooltip"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTooltipModule.ctorParameters = function () { return []; };
    return ElTooltipModule;
}());

function ElTooltipModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTooltipModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTooltipModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tooltip/tooltip.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/tooltip/tooltip.js ***!
  \*****************************************************************/
/*! exports provided: ElTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTooltip", function() { return ElTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/index */ "./node_modules/element-angular/release/shared/services/index.js");
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/index */ "./node_modules/element-angular/release/shared/utils/index.js");




var ElTooltip = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} window
     */
    function ElTooltip(renderer, el, window) {
        this.renderer = renderer;
        this.el = el;
        this.window = window;
        this.elDisabled = false;
        this.watch = false;
        this.placement = 'bottom';
        this.effect = 'dark';
        this.visibleArrow = true;
        this.xPlacement = 'bottom';
        this.showPopper = true;
        this.cache = {};
    }
    Object.defineProperty(ElTooltip.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} hostRect
     * @param {?} selfRect
     * @return {?}
     */
    ElTooltip.prototype.getPosition = function (hostRect, selfRect) {
        var /** @type {?} */ doubleConventions = this.placement.includes('-');
        var /** @type {?} */ arrowDir = doubleConventions ? this.placement.split('-')[1] : 'center';
        var /** @type {?} */ dir = doubleConventions ? this.placement.split('-')[0] : this.placement;
        var /** @type {?} */ position = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_3__["getPositionForDir"])(hostRect, selfRect, dir, arrowDir);
        this.cache.position = position;
        this.cache.hostRect = hostRect;
    };
    /**
     * @return {?}
     */
    ElTooltip.prototype.setPopoerPositionAndShow = function () {
        var _a = this.cache, tipElement = _a.tipElement, position = _a.position;
        var /** @type {?} */ arrowElement = tipElement.querySelector('.popper__arrow');
        this.xPlacement = position.arrowFace;
        this.renderer.setStyle(tipElement, 'left', position.left + "px");
        this.renderer.setStyle(tipElement, 'top', position.top + "px");
        // fix tipbox auto wrap
        this.renderer.setStyle(tipElement, 'width', this.tipElementShape.width + "px");
        this.renderer.setStyle(tipElement, 'height', this.tipElementShape.height + "px");
        this.renderer.setStyle(arrowElement, position.arrowDir, position.arrowPosition + "px");
    };
    /**
     * @param {?} host
     * @return {?}
     */
    ElTooltip.prototype.bindEvent = function (host) {
        var _this = this;
        host.addEventListener('mouseenter', function () {
            if (_this.elDisabled)
                return;
            _this.setPopoerPositionAndShow();
            _this.showPopper = true;
        });
        host.addEventListener('mouseleave', function () {
            _this.showPopper = false;
            _this.watch && _this.update();
        });
    };
    /**
     * @return {?}
     */
    ElTooltip.prototype.update = function () {
        var _this = this;
        var _a = this.cache, tipElement = _a.tipElement, hostRect = _a.hostRect;
        this.renderer.setStyle(tipElement, 'width', 'auto');
        this.renderer.setStyle(tipElement, 'height', 'auto');
        setTimeout(function () {
            _this.tipElementShape = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_3__["getRealShape"])(tipElement);
            var /** @type {?} */ tipRect = { width: tipElement.offsetWidth, height: tipElement.offsetHeight };
            _this.getPosition(hostRect, tipRect);
            _this.renderer.setStyle(tipElement, 'width', _this.tipElementShape.width + "px");
            _this.renderer.setStyle(tipElement, 'height', _this.tipElementShape.height + "px");
        }, 0);
    };
    /**
     * @return {?}
     */
    ElTooltip.prototype.ngAfterContentInit = function () {
        var _this = this;
        var /** @type {?} */ tipElement = this.popperContent.nativeElement;
        var /** @type {?} */ hostElement = this.el.nativeElement.children[0];
        this.bindEvent(hostElement);
        this.cache.tipElement = tipElement;
        var /** @type {?} */ timer = setTimeout(function () {
            _this.tipElementShape = Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_3__["getRealShape"])(tipElement);
            var /** @type {?} */ tipRect = { width: tipElement.offsetWidth, height: tipElement.offsetHeight };
            var /** @type {?} */ hostRect = hostElement.getBoundingClientRect();
            _this.getPosition(hostRect, tipRect);
            clearTimeout(timer);
        }, 0);
    };
    ElTooltip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-tooltip',
                    template: "\n    <div style=\"position: relative; display: inline-block;\">\n      <div [class]=\"'el-tooltip__popper is-' + effect + ' ' + popperClass\"\n        style=\"left: -20000px; top: 0; position: absolute;\"\n        [@fadeAnimation]=\"!showPopper\" [attr.x-placement]=\"xPlacement\" #popperContent>\n        <div x-arrow class=\"popper__arrow\" [hidden]=\"!visibleArrow\"></div>\n        <ng-template [ngTemplateOutlet]=\"tip\"></ng-template>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  ",
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTooltip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _shared_services_index__WEBPACK_IMPORTED_MODULE_2__["WindowWrapper"], },
    ]; };
    ElTooltip.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'watch': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'placement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'popperClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'effect': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'visibleArrow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['visible-arrow',] },],
        'popperContent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['popperContent',] },],
        'tip': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['tip',] },],
    };
    return ElTooltip;
}());

function ElTooltip_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTooltip.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTooltip.ctorParameters;
    /** @type {?} */
    ElTooltip.propDecorators;
    /** @type {?} */
    ElTooltip.prototype.elDisabled;
    /** @type {?} */
    ElTooltip.prototype.watch;
    /** @type {?} */
    ElTooltip.prototype.placement;
    /** @type {?} */
    ElTooltip.prototype.popperClass;
    /** @type {?} */
    ElTooltip.prototype.effect;
    /** @type {?} */
    ElTooltip.prototype.visibleArrow;
    /** @type {?} */
    ElTooltip.prototype.popperContent;
    /** @type {?} */
    ElTooltip.prototype.tip;
    /** @type {?} */
    ElTooltip.prototype.xPlacement;
    /** @type {?} */
    ElTooltip.prototype.showPopper;
    /** @type {?} */
    ElTooltip.prototype.cache;
    /** @type {?} */
    ElTooltip.prototype.tipElementShape;
    /** @type {?} */
    ElTooltip.prototype.renderer;
    /** @type {?} */
    ElTooltip.prototype.el;
    /** @type {?} */
    ElTooltip.prototype.window;
}
//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tree/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/element-angular/release/tree/module.js ***!
  \*************************************************************/
/*! exports provided: ElTreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTreeModule", function() { return ElTreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree */ "./node_modules/element-angular/release/tree/tree.js");
/* harmony import */ var _tree_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-item */ "./node_modules/element-angular/release/tree/tree-item.js");
/* harmony import */ var _checkbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkbox/module */ "./node_modules/element-angular/release/checkbox/module.js");





var ElTreeModule = /** @class */ (function () {
    function ElTreeModule() {
    }
    /**
     * @return {?}
     */
    ElTreeModule.forRoot = function () {
        return { ngModule: ElTreeModule, providers: [] };
    };
    ElTreeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_tree__WEBPACK_IMPORTED_MODULE_2__["ElTree"], _tree_item__WEBPACK_IMPORTED_MODULE_3__["ElTreeItem"]],
                    exports: [_tree__WEBPACK_IMPORTED_MODULE_2__["ElTree"], _tree_item__WEBPACK_IMPORTED_MODULE_3__["ElTreeItem"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _checkbox_module__WEBPACK_IMPORTED_MODULE_4__["ElCheckboxsModule"]],
                    entryComponents: [_tree__WEBPACK_IMPORTED_MODULE_2__["ElTree"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTreeModule.ctorParameters = function () { return []; };
    return ElTreeModule;
}());

function ElTreeModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTreeModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTreeModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tree/tree-item.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-angular/release/tree/tree-item.js ***!
  \****************************************************************/
/*! exports provided: ElTreeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTreeItem", function() { return ElTreeItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree */ "./node_modules/element-angular/release/tree/tree.js");
/* harmony import */ var _shared_animation_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/animation/index */ "./node_modules/element-angular/release/shared/animation/index.js");



var ElTreeItem = /** @class */ (function () {
    /**
     * @param {?} root
     */
    function ElTreeItem(root) {
        this.root = root;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ElTreeItem.prototype.clickHandle = function (event) {
        event.stopPropagation();
        if (!this.root.expandOnClickNode)
            return this.itemEmitter('click');
        this.updateExpanded();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElTreeItem.prototype.iconClickHandle = function (event) {
        event.stopPropagation();
        this.updateExpanded();
    };
    /**
     * @return {?}
     */
    ElTreeItem.prototype.checkHandle = function () {
        if (this.root.elDisabled)
            return;
        this.root.updateChecked(this.model.id);
        this.root.emitter({
            label: this.model.label,
            treeNodeID: this.model.id,
            action: 'checkbox',
            checked: this.model.checked,
        });
    };
    /**
     * @return {?}
     */
    ElTreeItem.prototype.updateExpanded = function () {
        var /** @type {?} */ dontUpdateExpanded = this.isLeaf();
        var /** @type {?} */ nextAction = dontUpdateExpanded ? 'click' : (this.model.expanded ? 'close' : 'open');
        this.itemEmitter(nextAction);
        !dontUpdateExpanded && this.root.updateExpanded(this.model.id);
    };
    /**
     * @return {?}
     */
    ElTreeItem.prototype.isLeaf = function () {
        return !this.model.children || !this.model.children.length;
    };
    /**
     * @param {?} action
     * @return {?}
     */
    ElTreeItem.prototype.itemEmitter = function (action) {
        this.root.emitter({
            label: this.model.label,
            treeNodeID: this.model.id,
            action: action,
            checked: this.model.checked,
        });
    };
    ElTreeItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-tree-item',
                    animations: [_shared_animation_index__WEBPACK_IMPORTED_MODULE_2__["dropAnimation"]],
                    template: "\n    <div class=\"el-tree-node\" (click)=\"clickHandle($event)\"\n      [class.is-focusable]=\"!root.elDisabled\"\n      [class.is-checked]=\"!root.elDisabled && model.checked\"\n      role=\"treeitem\">\n      <div class=\"el-tree-node__content\"\n        [ngStyle]=\"{ 'padding-left': (model._level - 1) * indent + 'px' }\">\n        <span class=\"el-tree-node__expand-icon el-icon-caret-right\"\n          [class.expanded]=\"model.expanded\"\n          [class.is-leaf]=\"isLeaf()\"\n          (click)=\"iconClickHandle($event)\"></span>\n        <el-checkbox *ngIf=\"root.showCheckbox\" [model]=\"model.checked\" [indeterminate]=\"model._indeterminate\"\n          [elDisabled]=\"root.elDisabled\"\n          (modelChange)=\"checkHandle($event)\">\n        </el-checkbox>\n        <span class=\"el-tree-node__label\">{{ model.label }}</span>\n      </div>\n      <div class=\"el-tree-node__children\" *ngIf=\"!isLeaf()\" [@dropAnimation]=\"model.expanded\">\n        <el-tree-item *ngFor=\"let item of model.children\"\n          [model]=\"item\" [indent]=\"indent\">\n        </el-tree-item>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTreeItem.ctorParameters = function () { return [
        { type: _tree__WEBPACK_IMPORTED_MODULE_1__["ElTree"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    ElTreeItem.propDecorators = {
        'indent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElTreeItem;
}());

function ElTreeItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTreeItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTreeItem.ctorParameters;
    /** @type {?} */
    ElTreeItem.propDecorators;
    /** @type {?} */
    ElTreeItem.prototype.indent;
    /** @type {?} */
    ElTreeItem.prototype.model;
    /** @type {?} */
    ElTreeItem.prototype.root;
}
//# sourceMappingURL=tree-item.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tree/tree-props.js":
/*!*****************************************************************!*\
  !*** ./node_modules/element-angular/release/tree/tree-props.js ***!
  \*****************************************************************/
/*! exports provided: ElTreeProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTreeProps", function() { return ElTreeProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElTreeProps = /** @class */ (function () {
    function ElTreeProps() {
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emptyText = '';
        this.showCheckbox = false;
        this.defaultExpandAll = false;
        this.defaultExpandedKeys = [];
        this.defaultCheckedKeys = [];
        this.expandOnClickNode = true;
        this.indent = 16;
        this.accordion = false;
        this.elDisabled = false;
    }
    Object.defineProperty(ElTreeProps.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    ElTreeProps.propDecorators = {
        'modelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'emptyText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['empty-text',] },],
        'showCheckbox': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-checkbox',] },],
        'defaultExpandAll': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['default-expand-all',] },],
        'defaultExpandedKeys': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['default-expanded-keys',] },],
        'defaultCheckedKeys': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['default-checked-keys',] },],
        'expandOnClickNode': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['expand-on-click-node',] },],
        'indent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'accordion': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElTreeProps;
}());

function ElTreeProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTreeProps.propDecorators;
    /** @type {?} */
    ElTreeProps.prototype.identModel;
    /** @type {?} */
    ElTreeProps.prototype.modelChange;
    /** @type {?} */
    ElTreeProps.prototype.emptyText;
    /** @type {?} */
    ElTreeProps.prototype.showCheckbox;
    /** @type {?} */
    ElTreeProps.prototype.defaultExpandAll;
    /** @type {?} */
    ElTreeProps.prototype.defaultExpandedKeys;
    /** @type {?} */
    ElTreeProps.prototype.defaultCheckedKeys;
    /** @type {?} */
    ElTreeProps.prototype.expandOnClickNode;
    /** @type {?} */
    ElTreeProps.prototype.indent;
    /** @type {?} */
    ElTreeProps.prototype.accordion;
    /** @type {?} */
    ElTreeProps.prototype.elDisabled;
}
//# sourceMappingURL=tree-props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tree/tree.js":
/*!***********************************************************!*\
  !*** ./node_modules/element-angular/release/tree/tree.js ***!
  \***********************************************************/
/*! exports provided: ElTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElTree", function() { return ElTree; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/element-angular/release/tree/utils.js");
/* harmony import */ var _tree_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-props */ "./node_modules/element-angular/release/tree/tree-props.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ElTree = /** @class */ (function (_super) {
    __extends(ElTree, _super);
    function ElTree() {
        var _this = _super.call(this) || this;
        _this.userSafeHooks = function () { return ({
            findAllChecked: _this.findAllChecked.bind(_this),
            updateItemChecked: _this.updateChecked.bind(_this),
            updateItemExpanded: _this.updateExpanded.bind(_this),
            removeAllChecked: _this.removeAllChecked.bind(_this),
        }); };
        return _this;
    }
    Object.defineProperty(ElTree.prototype, "model", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            var /** @type {?} */ standardTool = new _utils__WEBPACK_IMPORTED_MODULE_1__["ModelStandard"]({
                initDepth: 0,
                defaultExpandAll: this.defaultExpandAll,
                defaultExpandedKeys: this.defaultExpandedKeys,
                defaultCheckedKeys: this.defaultCheckedKeys,
            });
            this.identModel = standardTool.filterModel(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ElTree.prototype.findAllChecked = function () {
        if (!this.showCheckbox)
            return [];
        return _utils__WEBPACK_IMPORTED_MODULE_1__["ModelStandard"].FindAllChecked(this.identModel);
    };
    /**
     * @return {?}
     */
    ElTree.prototype.removeAllChecked = function () {
        _utils__WEBPACK_IMPORTED_MODULE_1__["ModelStandard"].LoopRemoveChecked(this.identModel);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ElTree.prototype.updateExpanded = function (id) {
        this.identModel = _utils__WEBPACK_IMPORTED_MODULE_1__["ModelStandard"].DeepUpdateExpanded(id, this.identModel, this.accordion);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ElTree.prototype.updateChecked = function (id) {
        if (!this.showCheckbox)
            return;
        this.identModel = _utils__WEBPACK_IMPORTED_MODULE_1__["ModelStandard"].DeepUpdateChecked(id, this.identModel);
    };
    /**
     * @param {?} next
     * @return {?}
     */
    ElTree.prototype.emitter = function (next) {
        this.modelChange.emit(next);
    };
    ElTree.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-tree',
                    template: "\n    <div class=\"el-tree\" role=\"tree\">\n      <el-tree-item *ngFor=\"let item of identModel\"\n        [model]=\"item\" [indent]=\"indent\">\n      </el-tree-item>\n      <div class=\"el-tree__empty-block\" *ngIf=\"!identModel && !identModel.length\">\n        <span class=\"el-tree__empty-text\">{{ emptyText }}</span>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElTree.ctorParameters = function () { return []; };
    ElTree.propDecorators = {
        'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ElTree;
}(_tree_props__WEBPACK_IMPORTED_MODULE_2__["ElTreeProps"]));

function ElTree_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTree.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTree.ctorParameters;
    /** @type {?} */
    ElTree.propDecorators;
    /** @type {?} */
    ElTree.prototype.userSafeHooks;
}
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/tree/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/element-angular/release/tree/utils.js ***!
  \************************************************************/
/*! exports provided: notEmptyArray, makeRandomID, ModelStandard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmptyArray", function() { return notEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRandomID", function() { return makeRandomID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelStandard", function() { return ModelStandard; });
var /** @type {?} */ notEmptyArray = function (arr) {
    if (!Array.isArray(arr))
        return false;
    return arr && arr.length > 0;
};
var /** @type {?} */ makeRandomID = function () { return Math.random().toString(16).slice(-8); };
var ModelStandard = /** @class */ (function () {
    /**
     * @param {?} init
     */
    function ModelStandard(init) {
        this.init = init;
    }
    /**
     * @param {?} models
     * @return {?}
     */
    ModelStandard.LoopRemoveChecked = function (models) {
        models.forEach(function (item) {
            item.checked = false;
            if (item.children && item.children.length) {
                ModelStandard.LoopRemoveChecked(item.children);
            }
        });
    };
    /**
     * @param {?} id
     * @param {?} models
     * @param {?} accordion
     * @return {?}
     */
    ModelStandard.DeepUpdateExpanded = function (id, models, accordion) {
        if (!models || !models.length)
            return [];
        var /** @type {?} */ index = models.findIndex(function (item) { return item.id === id; });
        if (index === -1)
            return models.map(function (item) {
                return Object.assign(item, {
                    children: ModelStandard.DeepUpdateExpanded(id, item.children || [], accordion)
                });
            });
        // in accordion mode, only open one.
        // dont return new object, new object will cause the component to be re rendered,
        // and the current animation may be lost.
        var /** @type {?} */ nextExpanded = !models[index].expanded;
        if (accordion) {
            models = models.map(function (item) { return Object.assign(item, {
                expanded: false
            }); });
        }
        models[index].expanded = nextExpanded;
        return models;
    };
    /**
     * @param {?} id
     * @param {?} models
     * @return {?}
     */
    ModelStandard.DeepUpdateChecked = function (id, models) {
        if (!models || !models.length)
            return [];
        var /** @type {?} */ index = models.findIndex(function (item) { return item.id === id; });
        if (index === -1) {
            models.forEach(function (item) {
                var /** @type {?} */ nextChildren = ModelStandard.DeepUpdateChecked(id, item.children || []);
                var /** @type {?} */ nextIndeterminate = !!nextChildren.find(function (item) { return item.checked || item._indeterminate; });
                var /** @type {?} */ allChecked = nextChildren.length > 0 && !nextChildren.find(function (item) { return !item.checked; });
                item._indeterminate = allChecked ? false : nextIndeterminate;
                item.children = nextChildren;
                // leaf have have no subelements so no need to be updated。
                // leaf element is not affected by subelements.
                if (nextChildren.length) {
                    item.checked = allChecked;
                }
            });
            return models;
        }
        models[index].checked = !models[index].checked;
        models[index]._indeterminate = false;
        if (models[index].children && models[index].children.length > 0) {
            ModelStandard.SetChildrenChecked(models[index].children, models[index].checked);
        }
        return models;
    };
    /**
     * @param {?} models
     * @param {?} checked
     * @return {?}
     */
    ModelStandard.SetChildrenChecked = function (models, checked) {
        models.forEach(function (item) {
            item.checked = checked;
            if (item.children && item.children.length) {
                ModelStandard.SetChildrenChecked(item.children, checked);
            }
        });
    };
    /**
     * @param {?} models
     * @return {?}
     */
    ModelStandard.FindAllChecked = function (models) {
        var /** @type {?} */ checkedLabels = models.reduce(function (labels, item) {
            if (labels === void 0) { labels = []; }
            var /** @type {?} */ childrenLabels = (item.children && item.children.length)
                ? ModelStandard.FindAllChecked(item.children)
                : [];
            return labels.concat.apply(labels, childrenLabels.concat([item.checked ? item.label : []]));
        }, []);
        return checkedLabels;
    };
    /**
     * @param {?} models
     * @return {?}
     */
    ModelStandard.prototype.filterModel = function (models) {
        return this.updateDepthIdent(models, this.init.initDepth);
    };
    /**
     * @param {?} models
     * @param {?} depth
     * @return {?}
     */
    ModelStandard.prototype.updateDepthIdent = function (models, depth) {
        var _this = this;
        return models.map(function (item) {
            var /** @type {?} */ nextID = item.id || makeRandomID();
            var /** @type {?} */ nextChildren = notEmptyArray(item.children)
                ? _this.updateDepthIdent(item.children, depth + 1) : [];
            var /** @type {?} */ nextIndeterminate = !!nextChildren.find(function (item) { return item.checked || item._indeterminate; });
            var /** @type {?} */ allChecked = nextChildren.length > 0 && !nextChildren.find(function (item) { return !item.checked; });
            return Object.assign({}, item, {
                id: nextID,
                checked: allChecked || _this.isChecked(nextID, item),
                _level: depth ? depth + 1 : 1,
                expanded: _this.isExpanded(nextID, item),
                _indeterminate: allChecked ? false : nextIndeterminate,
                children: nextChildren,
            });
        });
    };
    /**
     * @param {?} id
     * @param {?} item
     * @return {?}
     */
    ModelStandard.prototype.isExpanded = function (id, item) {
        if (item.expanded === true)
            return true;
        if (this.init.defaultExpandAll)
            return true;
        if (!this.init.defaultExpandedKeys.length)
            return false;
        return !!this.init.defaultExpandedKeys.find(function (key) { return key === id; });
    };
    /**
     * @param {?} id
     * @param {?} item
     * @return {?}
     */
    ModelStandard.prototype.isChecked = function (id, item) {
        if (item.checked === true)
            return true;
        if (!this.init.defaultCheckedKeys.length)
            return false;
        return !!this.init.defaultCheckedKeys.find(function (key) { return key === id; });
    };
    return ModelStandard;
}());

function ModelStandard_tsickle_Closure_declarations() {
    /** @type {?} */
    ModelStandard.prototype.init;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/upload/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/upload/module.js ***!
  \***************************************************************/
/*! exports provided: ElUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElUploadModule", function() { return ElUploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../progress/module */ "./node_modules/element-angular/release/progress/module.js");
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/module */ "./node_modules/element-angular/release/button/module.js");
/* harmony import */ var _upload_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload.request */ "./node_modules/element-angular/release/upload/upload.request.js");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload */ "./node_modules/element-angular/release/upload/upload.js");
/* harmony import */ var _upload_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload.list */ "./node_modules/element-angular/release/upload/upload.list.js");
/* harmony import */ var _upload_dragger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload.dragger */ "./node_modules/element-angular/release/upload/upload.dragger.js");










var ElUploadModule = /** @class */ (function () {
    function ElUploadModule() {
    }
    /**
     * @return {?}
     */
    ElUploadModule.forRoot = function () {
        return { ngModule: ElUploadModule, providers: [_upload_request__WEBPACK_IMPORTED_MODULE_6__["ElUploadRequest"]] };
    };
    ElUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_upload__WEBPACK_IMPORTED_MODULE_7__["ElUpload"], _upload_list__WEBPACK_IMPORTED_MODULE_8__["ElUploadList"], _upload_dragger__WEBPACK_IMPORTED_MODULE_9__["ElUploadDragger"]],
                    exports: [_upload__WEBPACK_IMPORTED_MODULE_7__["ElUpload"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                        _button_module__WEBPACK_IMPORTED_MODULE_5__["ElButtonsModule"],
                        _progress_module__WEBPACK_IMPORTED_MODULE_4__["ElProgressModule"],
                    ],
                    entryComponents: [_upload__WEBPACK_IMPORTED_MODULE_7__["ElUpload"]],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElUploadModule.ctorParameters = function () { return []; };
    return ElUploadModule;
}());

function ElUploadModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElUploadModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElUploadModule.ctorParameters;
}
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/upload/upload.dragger.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/upload/upload.dragger.js ***!
  \***********************************************************************/
/*! exports provided: ElUploadDragger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElUploadDragger", function() { return ElUploadDragger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElUploadDragger = /** @class */ (function () {
    function ElUploadDragger() {
        this.elDisabled = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragger = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ElUploadDragger.prototype.dragoverHandle = function (event) {
        event.preventDefault();
        if (this.elDisabled)
            return;
        this.dragger = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElUploadDragger.prototype.dragLeaveHandle = function (event) {
        event.preventDefault();
        this.dragger = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElUploadDragger.prototype.dropHandle = function (event) {
        event.preventDefault();
        if (this.elDisabled)
            return;
        this.change.emit({ target: { files: event.dataTransfer.files } });
    };
    ElUploadDragger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-upload-dragger',
                    template: "\n    <div class=\"el-upload-dragger\"\n      [class.is-dragover]=\"dragger\"\n      (drop)=\"dropHandle($event)\"\n      (dragover)=\"dragoverHandle($event)\"\n      (dragleave)=\"dragLeaveHandle($event)\">\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElUploadDragger.ctorParameters = function () { return []; };
    ElUploadDragger.propDecorators = {
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'change': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElUploadDragger;
}());

function ElUploadDragger_tsickle_Closure_declarations() {
    /** @type {?} */
    ElUploadDragger.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElUploadDragger.ctorParameters;
    /** @type {?} */
    ElUploadDragger.propDecorators;
    /** @type {?} */
    ElUploadDragger.prototype.elDisabled;
    /** @type {?} */
    ElUploadDragger.prototype.change;
    /** @type {?} */
    ElUploadDragger.prototype.dragger;
}
//# sourceMappingURL=upload.dragger.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/upload/upload.js":
/*!***************************************************************!*\
  !*** ./node_modules/element-angular/release/upload/upload.js ***!
  \***************************************************************/
/*! exports provided: ElUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElUpload", function() { return ElUpload; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _upload_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.props */ "./node_modules/element-angular/release/upload/upload.props.js");
/* harmony import */ var _upload_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload.request */ "./node_modules/element-angular/release/upload/upload.request.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ElUpload = /** @class */ (function (_super) {
    __extends(ElUpload, _super);
    /**
     * @param {?} request
     * @param {?} sanitizer
     */
    function ElUpload(request, sanitizer) {
        var _this = _super.call(this) || this;
        _this.request = request;
        _this.sanitizer = sanitizer;
        _this.files = [];
        return _this;
    }
    /**
     * @return {?}
     */
    ElUpload.generateID = function () {
        return Math.random().toString(16).substr(2, 8);
    };
    /**
     * @param {?} response
     * @return {?}
     */
    ElUpload.updatePercentage = function (response) {
        var loaded = response.loaded, total = response.total;
        if (loaded === undefined || !total)
            return 0;
        return Math.round(loaded / total * 100);
    };
    /**
     * @return {?}
     */
    ElUpload.prototype.clickHandle = function () {
        if (this.elDisabled)
            return;
        this.input.nativeElement.click();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ElUpload.prototype.changeHandle = function (event) {
        var _this = this;
        var /** @type {?} */ files = ((event.target)).files;
        if (!files || !files.length)
            return;
        var /** @type {?} */ checkedFiles = this.multiple ? Array.from(files) : [files[0]];
        this.input.nativeElement.value = null;
        checkedFiles.forEach(function (file) {
            var /** @type {?} */ next = {
                id: ElUpload.generateID(),
                name: file.name,
                status: 'ready',
                size: file.size,
                percentage: 0,
                raw: file,
                url: _this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
            };
            _this.files.push(next);
            _this.updateFile(next);
            _this.uploadFilter(file) === false ? _this.removeHandle(next) : _this.upload(next);
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElUpload.prototype.upload = function (file) {
        var _this = this;
        file.status = 'uploading';
        this.updateFile(file);
        this.request.upload(this.action, file.raw)
            .subscribe(function (event) {
            file.percentage = ElUpload.updatePercentage(event);
            file.percentage && _this.lifecycle.progress(file, file.percentage);
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.lifecycle.success(Object.assign(file, { status: 'success' }), event);
            }
            _this.updateFile(file);
        }, function (err) {
            file.status = 'fail';
            _this.lifecycle.error(file, err);
            _this.removeHandle(file);
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElUpload.prototype.removeHandle = function (file) {
        this.lifecycle.remove(file);
        var /** @type {?} */ index = this.files.findIndex(function (_a) {
            var id = _a.id;
            return file.id === id;
        });
        this.files.splice(index, 1);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElUpload.prototype.updateFile = function (file) {
        var /** @type {?} */ index = this.files.findIndex(function (_a) {
            var id = _a.id;
            return file.id === id;
        });
        if (!index)
            return;
        this.files[index] = file;
    };
    /**
     * @return {?}
     */
    ElUpload.prototype.ngOnInit = function () {
        var _this = this;
        this.request
            .setHeader(this.headers)
            .setCredentials(this.withCredentials)
            .setFileName(this.name)
            .addExtraData(this.data);
        this.fileList.forEach(function (file) {
            _this.files.push({
                id: ElUpload.generateID(),
                name: file.name,
                status: 'success',
                raw: null, size: null,
                url: _this.sanitizer.bypassSecurityTrustUrl(file.url),
            });
        });
    };
    ElUpload.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-upload',
                    template: "\n    <ng-template #uploadList>\n      <el-upload-list [files]=\"files\"  *ngIf=\"showFileList\"\n        [list-type]=\"listType\" [elDisabled]=\"elDisabled\"\n        (remove)=\"removeHandle($event)\" (preview)=\"lifecycle.preview($event)\">\n      </el-upload-list>\n    </ng-template>\n    \n    <ng-template #triggerBlock>\n      <div [class]=\"'el-upload el-upload--' + listType\" (click)=\"clickHandle()\">\n        <el-button *ngIf=\"!trigger\" size=\"small\" type=\"primary\">\u70B9\u51FB\u4E0A\u4F20</el-button>\n        <ng-container *ngIf=\"trigger\">\n          <ng-template [ngTemplateOutlet]=\"trigger\"></ng-template>\n        </ng-container>\n        <input class=\"el-upload__input\" type=\"file\" name=\"file\" #input\n          [accept]=\"accept\" [name]=\"name\" [multiple]=\"multiple\"\n          (change)=\"changeHandle($event)\">\n      </div>\n    </ng-template>\n    \n    <el-upload-dragger *ngIf=\"drag\" [elDisabled]=\"elDisabled\" (change)=\"changeHandle($event)\">\n      <ng-template [ngTemplateOutlet]=\"triggerBlock\"></ng-template>\n    </el-upload-dragger>\n    \n    <ng-container *ngIf=\"listType === 'picture-card'\">\n      <ng-template [ngTemplateOutlet]=\"uploadList\"></ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!drag\">\n      <ng-template [ngTemplateOutlet]=\"triggerBlock\"></ng-template>\n    </ng-container>\n    \n    <ng-container *ngIf=\"tip\">\n      <ng-template [ngTemplateOutlet]=\"tip\"></ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"listType !== 'picture-card'\">\n      <ng-template [ngTemplateOutlet]=\"uploadList\"></ng-template>\n    </ng-container>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElUpload.ctorParameters = function () { return [
        { type: _upload_request__WEBPACK_IMPORTED_MODULE_4__["ElUploadRequest"], },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    ElUpload.propDecorators = {
        'trigger': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['trigger',] },],
        'dragger': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['dragger',] },],
        'tip': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['tip',] },],
        'input': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['input',] },],
    };
    return ElUpload;
}(_upload_props__WEBPACK_IMPORTED_MODULE_3__["ElUploadProps"]));

function ElUpload_tsickle_Closure_declarations() {
    /** @type {?} */
    ElUpload.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElUpload.ctorParameters;
    /** @type {?} */
    ElUpload.propDecorators;
    /** @type {?} */
    ElUpload.prototype.trigger;
    /** @type {?} */
    ElUpload.prototype.dragger;
    /** @type {?} */
    ElUpload.prototype.tip;
    /** @type {?} */
    ElUpload.prototype.input;
    /** @type {?} */
    ElUpload.prototype.files;
    /** @type {?} */
    ElUpload.prototype.request;
    /** @type {?} */
    ElUpload.prototype.sanitizer;
}
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/upload/upload.list.js":
/*!********************************************************************!*\
  !*** ./node_modules/element-angular/release/upload/upload.list.js ***!
  \********************************************************************/
/*! exports provided: ElUploadList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElUploadList", function() { return ElUploadList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElUploadList = /** @class */ (function () {
    function ElUploadList() {
        this.files = [];
        this.elDisabled = false;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.preview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    ElUploadList.prototype.clickHandle = function (file) {
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElUploadList.prototype.removeHandle = function (file) {
        this.remove.emit(file);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ElUploadList.prototype.previewHandle = function (file) {
        this.preview.emit(file);
    };
    ElUploadList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'el-upload-list',
                    template: "\n    <ul [class]=\"'el-upload-list el-upload-list--' + listType\"\n      [class.is-disabled]=\"elDisabled\">\n      <li *ngFor=\"let file of files; let i = index\"\n        [class]=\"'el-upload-list__item is-' + file.status\">\n        <img class=\"el-upload-list__item-thumbnail\"\n          *ngIf=\"file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1\"\n          [src]=\"file.url\">\n        <a class=\"el-upload-list__item-name\" (click)=\"clickHandle(file)\">\n          <i class=\"el-icon-document\"></i>\n          {{file.name}}\n        </a>\n        <label class=\"el-upload-list__item-status-label\">\n          <i [class.el-icon-check]=\"['picture-card', 'picture'].indexOf(listType) > -1\"\n            [class.el-icon-circle-check]=\"listType === 'text'\"\n            [class.el-icon-upload-success]=\"true\"></i>\n        </label>\n        <i class=\"el-icon-close\" *ngIf=\"!elDisabled\" (click)=\"removeHandle(file)\"></i>\n        <el-progress *ngIf=\"file.status === 'uploading'\"\n          [type]=\"listType === 'picture-card' ? 'circle' : 'line'\"\n          [stroke-width]=\"listType === 'picture-card' ? 6 : 2\"\n          [percentage]=\"file.percentage\">\n        </el-progress>\n        <span class=\"el-upload-list__item-actions\" *ngIf=\"listType === 'picture-card'\">\n        <span class=\"el-upload-list__item-preview\"\n          *ngIf=\"listType === 'picture-card'\"\n          (click)=\"previewHandle(file)\">\n          <i class=\"el-icon-view\"></i>\n        </span>\n        <span class=\"el-upload-list__item-delete\"\n          *ngIf=\"!elDisabled\"\n          (click)=\"removeHandle(file)\">\n          <i class=\"el-icon-delete2\"></i>\n        </span>\n      </span>\n      </li>\n    </ul>\n  ",
                },] },
    ];
    /**
     * @nocollapse
     */
    ElUploadList.ctorParameters = function () { return []; };
    ElUploadList.propDecorators = {
        'files': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'listType': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['list-type',] },],
        'remove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'preview': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ElUploadList;
}());

function ElUploadList_tsickle_Closure_declarations() {
    /** @type {?} */
    ElUploadList.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElUploadList.ctorParameters;
    /** @type {?} */
    ElUploadList.propDecorators;
    /** @type {?} */
    ElUploadList.prototype.files;
    /** @type {?} */
    ElUploadList.prototype.elDisabled;
    /** @type {?} */
    ElUploadList.prototype.listType;
    /** @type {?} */
    ElUploadList.prototype.remove;
    /** @type {?} */
    ElUploadList.prototype.preview;
}
//# sourceMappingURL=upload.list.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/upload/upload.props.js":
/*!*********************************************************************!*\
  !*** ./node_modules/element-angular/release/upload/upload.props.js ***!
  \*********************************************************************/
/*! exports provided: ElUploadProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElUploadProps", function() { return ElUploadProps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ElUploadProps = /** @class */ (function () {
    function ElUploadProps() {
        this.elDisabled = false;
        this.data = {};
        this.name = 'file';
        this.drag = false;
        this.multiple = false;
        this.headers = {};
        this.withCredentials = false;
        this.showFileList = true;
        this.listType = 'text';
        // @Input('auto-upload') autoUpload: boolean = true
        this.fileList = [];
        // lifecycle event
        this.preview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.progress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // about http event
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadFilter = function (f) { return true; };
    }
    Object.defineProperty(ElUploadProps.prototype, "disabled", {
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElUploadProps.prototype, "lifecycle", {
        /**
         * @return {?}
         */
        get: function () {
            var _this = this;
            return {
                preview: function (f) { return _this.preview.emit(f); },
                remove: function (f) { return _this.remove.emit(f); },
                success: function (f, res) { return _this.success.emit({ commonFile: f, response: res }); },
                error: function (f, err) { return _this.error.emit({ commonFile: f, error: err }); },
                progress: function (f, percentage) { return _this.progress.emit({ commonFile: f, percentage: percentage }); },
            };
        },
        enumerable: true,
        configurable: true
    });
    ElUploadProps.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'elDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'data': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'name': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'action': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'accept': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'drag': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'multiple': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'headers': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'withCredentials': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['with-credentials',] },],
        'showFileList': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-file-list',] },],
        'listType': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['list-type',] },],
        'fileList': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['file-list',] },],
        'preview': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'remove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'progress': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'success': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'error': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'uploadFilter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['upload-filter',] },],
    };
    return ElUploadProps;
}());

function ElUploadProps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElUploadProps.propDecorators;
    /** @type {?} */
    ElUploadProps.prototype.elDisabled;
    /** @type {?} */
    ElUploadProps.prototype.data;
    /** @type {?} */
    ElUploadProps.prototype.name;
    /** @type {?} */
    ElUploadProps.prototype.action;
    /** @type {?} */
    ElUploadProps.prototype.accept;
    /** @type {?} */
    ElUploadProps.prototype.drag;
    /** @type {?} */
    ElUploadProps.prototype.multiple;
    /** @type {?} */
    ElUploadProps.prototype.headers;
    /** @type {?} */
    ElUploadProps.prototype.withCredentials;
    /** @type {?} */
    ElUploadProps.prototype.showFileList;
    /** @type {?} */
    ElUploadProps.prototype.listType;
    /** @type {?} */
    ElUploadProps.prototype.fileList;
    /** @type {?} */
    ElUploadProps.prototype.preview;
    /** @type {?} */
    ElUploadProps.prototype.remove;
    /** @type {?} */
    ElUploadProps.prototype.progress;
    /** @type {?} */
    ElUploadProps.prototype.success;
    /** @type {?} */
    ElUploadProps.prototype.error;
    /** @type {?} */
    ElUploadProps.prototype.uploadFilter;
}
//# sourceMappingURL=upload.props.js.map

/***/ }),

/***/ "./node_modules/element-angular/release/upload/upload.request.js":
/*!***********************************************************************!*\
  !*** ./node_modules/element-angular/release/upload/upload.request.js ***!
  \***********************************************************************/
/*! exports provided: ElUploadRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElUploadRequest", function() { return ElUploadRequest; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ElUploadRequest = /** @class */ (function () {
    /**
     * @param {?} http
     */
    function ElUploadRequest(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @param {?} file
     * @return {?}
     */
    ElUploadRequest.prototype.upload = function (path, file) {
        var /** @type {?} */ req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', path, file, {
            headers: this.headers,
            reportProgress: true,
            withCredentials: this.withCredentials,
        });
        return this.http.request(req);
    };
    /**
     * @param {?=} headers
     * @return {?}
     */
    ElUploadRequest.prototype.setHeader = function (headers) {
        if (headers === void 0) { headers = {}; }
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headers);
        return this;
    };
    /**
     * @param {?} withCredentials
     * @return {?}
     */
    ElUploadRequest.prototype.setCredentials = function (withCredentials) {
        this.withCredentials = withCredentials;
        return this;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ElUploadRequest.prototype.setFileName = function (name) {
        this.fileName = name;
        return this;
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    ElUploadRequest.prototype.addExtraData = function (data) {
        if (data === void 0) { data = {}; }
        this.defaultBody = data;
        return this;
    };
    ElUploadRequest.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    ElUploadRequest.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], },
    ]; };
    return ElUploadRequest;
}());

function ElUploadRequest_tsickle_Closure_declarations() {
    /** @type {?} */
    ElUploadRequest.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElUploadRequest.ctorParameters;
    /** @type {?} */
    ElUploadRequest.prototype.headers;
    /** @type {?} */
    ElUploadRequest.prototype.withCredentials;
    /** @type {?} */
    ElUploadRequest.prototype.fileName;
    /** @type {?} */
    ElUploadRequest.prototype.defaultBody;
    /** @type {?} */
    ElUploadRequest.prototype.http;
}
//# sourceMappingURL=upload.request.js.map

/***/ })

}]);
//# sourceMappingURL=default~main-main-module~project-manage-project-manage-module~user-manage-user-manage-module.js.map