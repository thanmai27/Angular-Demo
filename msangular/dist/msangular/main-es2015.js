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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <form #myform=\"ngForm\" enctype=\"multipart/form-data\" ngNativeValidate>\n    <div class=\"card-header\">\n      <h4   id=\"basic-layout-icons\" style=\"margin-left:50%;\">Contact Us</h4>\n      <hr>\n\n      <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 style=\"text-align:left\"> &nbsp; Problem Information &nbsp;</h5>\n            <hr>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <label>Type<span style=\"color: red;\">*</span></label>\n                </div>\n                <div class=\"col-md-8\">\n                  <select id=\"ddl_probtype\" class=\"form-control\"  #type=\"ngModel\" name=\"type\" ngModel required>\n                    <option value=\"1\">Technical</option>\n                    <option value=\"2\">Billing</option>\n                    <option value=\"3\">Quota</option>\n                    <option value=\"4\">Subscription Management</option>\n\n                </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <label>Severity<span style=\"color: red;\">*</span></label>\n                </div>\n                <div class=\"col-md-8\">\n                  <select id=\"ddl_probtype\" class=\"form-control\" name=\"severity\" #severiry=\"ngModel\" ngModel required>\n                    <option value=\"1\">C - Minimal</option>\n                    <option value=\"2\">B - Moderate</option>\n                    <option value=\"3\">A - Critical</option>\n\n                </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <label>Subject<span style=\"color: red;\">*</span></label>\n                </div>\n                <div class=\"col-md-8\">\n                  <input type=\"text\" id=\"txt_Subject\" class=\"form-control\" name=\"subject\" #subject=\"ngModel\" placeholder=\"Subject (Max 150 Characters)\" maxlength=\"150\" ngModel required>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <label>Description<span style=\"color: red;\">*</span></label>\n                </div>\n                <div class=\"col-md-8\">\n                  <textarea id=\"txa_description\" class=\"form-control\" name=\"description\" #description=\"ngModel\"   rows=\"6\" placeholder=\"Provide additional information about your Problem  (Max 5000 Characters)\" maxlength=\"5000\" ngModel required></textarea>\n\n                </div>\n              </div>\n            </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-header\" >\n            <h5 style=\"text-align:left\">&nbsp; Contact Information &nbsp;</h5>\n            <hr>\n\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <label>Mode of Contact<span style=\"color: red;\">*</span></label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <select id=\"ddl_probtype\" class=\"form-control\"   name=\"modeofcontact\"  #modeofcontact=\"ngModel\" (change)=\" fn_changeMandatory()\"  ngModel required>\n\n                      <option value=\"1\">Email</option>\n                      <option value=\"2\">Phone</option>\n\n                  </select>\n                  </div>\n                </div>\n                <div class=\"row\" >\n                  <div class=\"col-md-4\">\n                    <label>Email id :<span *ngIf=\"show\" style=\"color: red;\">*</span></label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <input type=\"email\" id=\"txt_EmailID\" class=\"form-control\"  name=\"email\" #email=\"ngModel\" placeholder=\"Email ID\" maxlength=\"100\" ngModel [required]=\"modeofcontact.value == '1'\">\n\n                  </div>\n                </div>\n                <div class=\"row\" >\n                  <div class=\"col-md-4\">\n                    <label>Phone no :</label>\n                    <span *ngIf=\"!show\" style=\"color: red;\">*</span>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <input type=\"text\" id=\"txt_PhoneNumber\" class=\"form-control\"  name=\"contact\" #contact=\"ngModel\" placeholder=\"Phone Number\" maxlength=\"10\" ngModel  [required]=\"modeofcontact.value == '2'\">\n\n                  </div>\n                </div>\n                 <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <label>CC to</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <input type=\"text\" id=\"txt_CCEmailID\" class=\"form-control\" name=\"cc\" #cc=\"ngModel\"  placeholder=\"Who else should we email\" maxlength=\"100\" ngModel>\n\n                  </div>\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <label>Select file :</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <input type=\"file\" id=\"attachment\" class=\"form-control\" name=\"attachment\" #attachment=\"ngModel\" ngModel>\n\n                  </div>\n                </div>\n\n\n              </div>\n        </div>\n\n      </div>\n\n          <button type=\"submit\" id=\"btn_Save\"  value=\"Submit\" (click)=\"Fn_Submit(myform)\"  class=\"btn btn-success\">\n         Submit\n    </button>\n    <button type=\"button\" id=\"btn_Cancel\"  value=\"Cancel\" (click)=\"Fn_Clear(myform)\" class=\"btn btn-warning \">\n      Reset\n    </button>\n  </div>\n\n  </form>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard/dashboard.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard/dashboard.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 style=\"margin-left: 20%;\">\n  dash board\n</h4>\n<div class=\"container-fluid\"  style=\"margin-left: 20%;\">\n  <!-- Info boxes -->\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-6 col-md-3\">\n      <div class=\"info-box\">\n        <span class=\"info-box-icon bg-info elevation-1\"><i class=\"fas fa-cog\"></i></span>\n\n        <div class=\"info-box-content\">\n          <span class=\"info-box-text\">CPU Traffic</span>\n          <span class=\"info-box-number\">\n            10\n            <small>%</small>\n          </span>\n        </div>\n        <!-- /.info-box-content -->\n      </div>\n      <!-- /.info-box -->\n    </div>\n    <!-- /.col -->\n    <div class=\"col-12 col-sm-6 col-md-3\">\n      <div class=\"info-box mb-3\">\n        <span class=\"info-box-icon bg-danger elevation-1\"><i class=\"fas fa-thumbs-up\"></i></span>\n\n        <div class=\"info-box-content\">\n          <span class=\"info-box-text\">Likes</span>\n          <span class=\"info-box-number\">41,410</span>\n        </div>\n        <!-- /.info-box-content -->\n      </div>\n      <!-- /.info-box -->\n    </div>\n    <!-- /.col -->\n\n    <!-- fix for small devices only -->\n    <div class=\"clearfix hidden-md-up\"></div>\n\n    <div class=\"col-12 col-sm-6 col-md-3\">\n      <div class=\"info-box mb-3\">\n        <span class=\"info-box-icon bg-success elevation-1\"><i class=\"fas fa-shopping-cart\"></i></span>\n\n        <div class=\"info-box-content\">\n          <span class=\"info-box-text\">Sales</span>\n          <span class=\"info-box-number\">760</span>\n        </div>\n        <!-- /.info-box-content -->\n      </div>\n      <!-- /.info-box -->\n    </div>\n    <!-- /.col -->\n    <div class=\"col-12 col-sm-6 col-md-3\">\n      <div class=\"info-box mb-3\">\n        <span class=\"info-box-icon bg-warning elevation-1\"><i class=\"fas fa-users\"></i></span>\n\n        <div class=\"info-box-content\">\n          <span class=\"info-box-text\">New Members</span>\n          <span class=\"info-box-number\">2,000</span>\n        </div>\n        <!-- /.info-box-content -->\n      </div>\n      <!-- /.info-box -->\n    </div>\n    <!-- /.col -->\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">Monthly Recap Report</h5>\n\n          <div class=\"card-tools\">\n            <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\n              <i class=\"fas fa-minus\"></i>\n            </button>\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-tool dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fas fa-wrench\"></i>\n              </button>\n              <div class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                <a href=\"#\" class=\"dropdown-item\">Action</a>\n                <a href=\"#\" class=\"dropdown-item\">Another action</a>\n                <a href=\"#\" class=\"dropdown-item\">Something else here</a>\n                <a class=\"dropdown-divider\"></a>\n                <a href=\"#\" class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"remove\">\n              <i class=\"fas fa-times\"></i>\n            </button>\n          </div>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <p class=\"text-center\">\n                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n              </p>\n\n              <div class=\"chart\">\n                <!-- Sales Chart Canvas -->\n                <canvas id=\"salesChart\" height=\"180\" style=\"height: 180px;\"></canvas>\n              </div>\n              <!-- /.chart-responsive -->\n            </div>\n            <!-- /.col -->\n            <div class=\"col-md-4\">\n              <p class=\"text-center\">\n                <strong>Goal Completion</strong>\n              </p>\n              </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n  <!-- Left navbar links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fas fa-bars\"></i></a>\n    </li>\n    <li class=\"nav-item d-none d-sm-inline-block\">\n      <a href=\"#\" class=\"nav-link\">Home</a>\n    </li>\n\n  </ul>\n\n  <!-- SEARCH FORM -->\n  <form class=\"form-inline ml-3\">\n    <div class=\"input-group input-group-sm\">\n      <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-navbar\" type=\"submit\">\n          <i class=\"fas fa-search\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n\n  <!-- Right navbar links -->\n  <ul class=\"navbar-nav ml-auto\">\n    <!-- Messages Dropdown Menu -->\n\n    <!-- Notifications Dropdown Menu -->\n\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\">\n        <i class=\"far fa-bell\"></i>\n        <span class=\"badge badge-warning navbar-badge\">15</span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n        <span class=\"dropdown-item dropdown-header\">15 Notifications</span>\n        <div class=\"dropdown-divider\"></div>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"fas fa-envelope mr-2\"></i> 4 new messages\n          <span class=\"float-right text-muted text-sm\">3 mins</span>\n        </a>\n        <div class=\"dropdown-divider\"></div>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"fas fa-users mr-2\"></i> 8 friend requests\n          <span class=\"float-right text-muted text-sm\">12 hours</span>\n        </a>\n        <div class=\"dropdown-divider\"></div>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"fas fa-file mr-2\"></i> 3 new reports\n          <span class=\"float-right text-muted text-sm\">2 days</span>\n        </a>\n        <div class=\"dropdown-divider\"></div>\n        <a href=\"#\" class=\"dropdown-item dropdown-footer\">See All Notifications</a>\n      </div>\n    </li>\n\n    <li class=\"nav-item dropdown\">\n      <a href=\"\" data-toggle=\"dropdown\" class=\"dropdown-toggle nav-link dropdown-user-link\">\n        <span class=\"avatar avatar-online\">\n          <img style=\"height: 20px;margin-bottom: 20px;\" src=\"assets/images/avatar.png\" alt=\"avatar\"><i></i></span></a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n\n          <a  class=\"dropdown-item\" (click)=\"Logout()\">\n            <i class=\"fas fa-power-off\"></i> &nbsp; &nbsp;Logout\n          </a>\n      </div>\n  </li>\n  </ul>\n</nav>\n\n<!-- Sidebar -->\n\n  <!-- Sidebar Menu -->\n  <nav class=\"mt-2\">\n  <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n    <li class=\"nav-item\">\n      <a [routerLink]=\"['../', 'dashboard'] \" class=\"nav-link\" style=\"width:20%\">\n        <i class=\"nav-icon fas fa-tachometer-alt\"></i>\n        <p>\n          Dashboard\n        </p>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a [routerLink]=\"['../', 'contact']\" class=\"nav-link\">\n\n      <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp;&nbsp;<p>Contact Us</p></a></li>\n  </ul>\n  </nav>\n\n  <!----------------------------- ./Main Sidebar Container---------------------------- -->\n\n\n  <aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n    <!-- Brand Logo -->\n    <a [routerLink]=\"['/dashboard']\" class=\"brand-link\">\n      <img src=\"assets/images/GreenMatterLogoCollaps.png\" alt=\"AdminLTE Logo\" class=\"brand-image img-circle elevation-3\"\n           style=\"opacity: 5\">\n      <span class=\"brand-text font-weight-light\">Green Matters</span>\n    </a>\n    <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n          <i class=\"nav-icon fas fa-tachometer-alt\"></i>\n          <p>\n            Dashboard\n          </p>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/contact']\" class=\"nav-link\">\n\n        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp;&nbsp;<p>Contact US</p></a></li>\n    </ul>\n\n  </aside>\n\n<section>\n<router-outlet></router-outlet>\n\n</section>\n\n <!-- Main Footer -->\n <footer class=\"main-footer\">\n  <strong>Copyright &copy; 2020 <a href=\"http://www.g7cr.in\" target=\"_blank\">G7CR Technologies India Pvt Ltd.</a>.</strong>\n  All rights reserved.\n\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"back\" [ngStyle]=\"{'background-image': 'url(' + backgroundImage + ')'}\">\n\n\n  <div id=\"main\">\n\n    <form   #myform=\"ngForm\" (ngSubmit)=\"Fn_Login(myform.value) \" >\n  <div id=\"one\">\n    <input class=\"form-control\" type=\"email\" id=\"txt_Username\" placeholder=\"Email address\"  name=\"username\" pattern=\"[a-zA-Z_.\\d]{7,50}@[a-z\\d]{4}[.][a-z]{2}\" #username =\"ngModel\" ngModel><br><br>\n    <span class=\"help-block\" *ngIf=\"show  && !username.valid \">Enter valid email</span>\n  </div>\n  <div id=\"two\">\n    <button  class=\"btn btn-success\"  type=\"submit\" [disabled]=\"username.invalid\">Login with\n      <span><img src=\"../../assets/images/ms_logo.png\" height=\"20\" /></span>\n    </button>\n  </div>\n\n\n    </form>\n\n  </div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'msangular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_outh__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/outh */ "./src/app/outh.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/contact/contact.component */ "./src/app/home/contact/contact.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
                { path: 'dashboard', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
                    children: [{ path: '', component: _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] },
                    ]
                },
                { path: 'contact', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
                    children: [{ path: '', component: _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"] }] },
            ]),
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__["MsalModule"].forRoot({
                auth: {
                    clientId: _app_outh__WEBPACK_IMPORTED_MODULE_12__["OAuthSettings"].clientId,
                    authority: _app_outh__WEBPACK_IMPORTED_MODULE_12__["OAuthSettings"].authority,
                    validateAuthority: _app_outh__WEBPACK_IMPORTED_MODULE_12__["OAuthSettings"].validateAuthority,
                    redirectUri: _app_outh__WEBPACK_IMPORTED_MODULE_12__["OAuthSettings"].redirectUri,
                    postLogoutRedirectUri: "http://localhost:4200/",
                    navigateToLoginRequestUrl: true,
                },
                cache: {
                    cacheLocation: "localStorage",
                },
            }, {
                consentScopes: [
                    'user.read',
                    'openid',
                    'profile',
                ],
                unprotectedResources: [],
                protectedResourceMap: [
                    ['https://graph.microsoft.com/v1.0/me', ['user.read']]
                ],
                extraQueryParameters: {}
            })
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__["MsalInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! msal */ "./node_modules/msal/lib-es6/index.js");
/* harmony import */ var _app_outh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/outh */ "./src/app/outh.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(broadcastService, authService, router) {
        this.broadcastService = broadcastService;
        this.authService = authService;
        this.router = router;
        this.isUser = false;
        this.loggedIn = false;
    }
    ngOnInit() {
        console.log(sessionStorage.getItem('loggedUserinfo'));
        var loggedUserdetails = JSON.parse(sessionStorage.getItem('loggedUserinfo'));
        console.log(loggedUserdetails);
        this.clientname = loggedUserdetails.user;
        this.checkoutAccount();
        this.broadcastService.subscribe('msal:loginSuccess', () => {
            this.checkoutAccount();
        });
        this.authService.handleRedirectCallback((authError, response) => {
            if (authError) {
                console.error('Redirect Error: ', authError.errorMessage);
                return;
            }
            console.log('Redirect Success: ', response.accessToken);
        });
        this.authService.setLogger(new msal__WEBPACK_IMPORTED_MODULE_3__["Logger"]((logLevel, message, piiEnabled) => {
            console.log('MSAL Logging: ', message);
        }, {
            correlationId: msal__WEBPACK_IMPORTED_MODULE_3__["CryptoUtils"].createNewGuid(),
            piiLoggingEnabled: false
        }));
    }
    checkoutAccount() {
        this.loggedIn = !!this.authService.getAccount();
    }
    LogIn() {
        const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Chrome') > -1;
        if (isIE) {
            this.authService.loginRedirect(_app_outh__WEBPACK_IMPORTED_MODULE_4__["OAuthSettings"]);
            this.authService.acquireTokenRedirect(_app_outh__WEBPACK_IMPORTED_MODULE_4__["OAuthSettings"]);
        }
        else {
            this.authService.loginPopup();
            //  this.isUser = true;
        }
    }
    fn_LogOut() {
        localStorage.clear();
        sessionStorage.clear();
        this.authService.logout();
    }
};
AuthService.ctorParameters = () => [
    { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"] },
    { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/home/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/contact/contact.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n  background-color: white;\r\n  margin-top: 4px;\r\n}\r\n\r\n.card{\r\n  margin-left: 20%;\r\n  max-width: 80%;\r\n}\r\n\r\n#btn_Save\r\n{\r\n width:8%;\r\n margin-left:40% ;\r\n margin-top:1%;\r\n}\r\n\r\n#btn_Cancel\r\n{\r\n margin-top:1%;\r\nmargin-left:2% ;\r\n width:8%;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7O0NBRUMsUUFBUTtDQUNSLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7O0FBRUE7O0NBRUMsYUFBYTtBQUNkLGVBQWU7Q0FDZCxRQUFROzs7QUFHVCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uY2FyZHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG59XHJcblxyXG4jYnRuX1NhdmVcclxue1xyXG4gd2lkdGg6OCU7XHJcbiBtYXJnaW4tbGVmdDo0MCUgO1xyXG4gbWFyZ2luLXRvcDoxJTtcclxufVxyXG5cclxuI2J0bl9DYW5jZWxcclxue1xyXG4gbWFyZ2luLXRvcDoxJTtcclxubWFyZ2luLWxlZnQ6MiUgO1xyXG4gd2lkdGg6OCU7XHJcblxyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/contact.service */ "./src/app/shared/contact.service.ts");



// import {ContactService } from '../../shared/contact.service';

let ContactComponent = class ContactComponent {
    constructor(toastr, contactService) {
        this.toastr = toastr;
        this.contactService = contactService;
        this.show = false;
        this.user = {
            message: '',
            fileContent: ''
        };
    }
    ngOnInit() {
    }
    Fn_Clear(form) {
        if (form) {
            form.reset();
        }
    }
    fn_changeMandatory() {
        this.show = !this.show;
    }
    Fn_Submit(form) {
        this.contactService.selectedConatct = form.value;
        this.contactService.postContact(form.value).subscribe((data) => {
            this.Fn_Clear(form);
            console.log(data);
            this.toastr.success("Data Added Successguuly", "Your Request has sent !!!", {
                timeOut: 2000,
                progressAnimation: 'increasing',
            });
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _shared_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/home/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(authservice) {
        this.authservice = authservice;
    }
    ngOnInit() {
    }
    logout() {
        this.authservice.fn_LogOut();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/home/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
let HomeComponent = class HomeComponent {
    constructor(msal, http, authservice) {
        this.msal = msal;
        this.http = http;
        this.authservice = authservice;
    }
    ngOnInit() {
    }
    Logout() {
        this.authservice.fn_LogOut();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main\r\n{\r\n  width:30%;\r\n  margin:5% 60% 0% 35%;\r\n  border:2px solid rgb(0, 255, 179);\r\n  padding-bottom: 6%;\r\n  background-color: azure;\r\n}\r\n\r\n.back\r\n{  padding: 2%;\r\n\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nbutton\r\n{\r\n  margin-left: 20%;\r\n  width:60%;\r\n\r\n}\r\n\r\n.form-control\r\n{\r\n  width:60%;\r\n  margin-left: 20%;\r\n  margin-top: 10%;\r\n}\r\n\r\n.help-block\r\n{\r\n  color: red;\r\n  margin: 0\r\n\r\n\r\n}\r\n\r\n@media only screen and (max-width: 800px)\r\n{\r\n\r\n  button\r\n{\r\n  margin-left:8%;\r\n}\r\n\r\n.form-control\r\n{\r\n  width:80%;\r\n  margin-left: 8%;\r\n  margin-top: 10%;\r\n}\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0dBQ0csV0FBVzs7RUFFWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7O0FBRVg7O0FBRUE7O0VBRUUsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFVBQVU7RUFDVjs7O0FBR0Y7O0FBRUE7OztFQUdFOztFQUVBLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluXHJcbntcclxuICB3aWR0aDozMCU7XHJcbiAgbWFyZ2luOjUlIDYwJSAwJSAzNSU7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMCwgMjU1LCAxNzkpO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcclxufVxyXG5cclxuLmJhY2tcclxueyAgcGFkZGluZzogMiU7XHJcblxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5idXR0b25cclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgd2lkdGg6NjAlO1xyXG5cclxufVxyXG5cclxuLmZvcm0tY29udHJvbFxyXG57XHJcbiAgd2lkdGg6NjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uaGVscC1ibG9ja1xyXG57XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW46IDBcclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KVxyXG57XHJcblxyXG4gIGJ1dHRvblxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6OCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2xcclxue1xyXG4gIHdpZHRoOjgwJTtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _outh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../outh */ "./src/app/outh.ts");





let LoginComponent = class LoginComponent {
    constructor(authservice, msalService) {
        this.authservice = authservice;
        this.msalService = msalService;
        this.show = false;
        this.images = ['../../assets/images/1.jpg',
            '../../assets/images/2.jpg',
            '../../assets/images/3.jpg',
            '../../assets/images/4.jpg',
            '../../assets/images/5.jpg',
            '../../assets/images/6.jpg',
            '../../assets/images/7.jpg'];
        this.backgroundImage = '';
    }
    ngOnInit() {
        let ran = Math.round((Math.random() * 6) + 1);
        // Math.round((Math.random()*100)%5);
        console.log(ran);
        this.backgroundImage = this.images[ran];
    }
    Fn_Login(data) {
        const loggedUserInfo = { user: data.username };
        if (data.username == '') {
            alert("Please Enter UserID");
            return;
        }
        else {
            var s = JSON.stringify(data.username);
            sessionStorage.setItem('loggedUserinfo', JSON.stringify(loggedUserInfo));
            location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=" + _outh__WEBPACK_IMPORTED_MODULE_4__["OAuthSettings"].clientId + "&response_type=code&redirect_uri=" + _outh__WEBPACK_IMPORTED_MODULE_4__["OAuthSettings"].redirectUri + "&response_mode=query&scope=https://graph.microsoft.com/" + _outh__WEBPACK_IMPORTED_MODULE_4__["OAuthSettings"].scopes[0] + "&state=12345&login_hint=" + data.username;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/outh.ts":
/*!*************************!*\
  !*** ./src/app/outh.ts ***!
  \*************************/
/*! exports provided: OAuthSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthSettings", function() { return OAuthSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const OAuthSettings = {
    clientId: 'e242d4d4-8831-4107-a2de-fe03469a13b3',
    authority: 'https://login.microsoftonline.com/common/',
    validateAuthority: true,
    redirectUri: 'http://localhost:4200/dashboard',
    scopes: ['user.read', 'openid', 'profile']
};
const user = { id: OAuthSettings.clientId };
sessionStorage.setItem('user', JSON.stringify(user));


/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (sessionStorage.getItem('loggedUserinfo')) {
            // logged in so return true
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url and return false
            this.router.navigateByUrl('/');
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/contact.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/contact.service.ts ***!
  \*******************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.baseURL = "http://localhost:3000/contact";
    }
    postContact(contact) {
        return this.http.post(this.baseURL, contact);
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\msangular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map