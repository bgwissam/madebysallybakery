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
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"fa fa-spinner spinner\" *ngIf=\"!loading\"></span>\r\n<nav class=\"navbar navbar-expand navbar-light bg-light\">\r\n  <a class=\"navbar-brand\">{{ pageTitle }}</a>\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\"\r\n         [routerLink]=\"['/welcome']\"\r\n         routerLinkActive=\"active\">Home</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\"\r\n          [routerLink]=\"['/products']\"\r\n          routerLinkActive=\"active\">Products</a>\r\n    </li>\r\n     <li class=\"nav-item\">\r\n      <a class=\"nav-link\"\r\n         [routerLink]=\"['/contactus']\"\r\n         routerLinkActive=\"active\"\r\n         [routerLinkActiveOptions]=\"{ exact : true}\">Contact Us</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\"\r\n        *ngIf=\"isLoggedIn\"\r\n        [routerLink]=\"['/contactus-list']\"\r\n        routerLinkActive = \"active\"\r\n        [routerLinkActiveOptions] =\"{ exact: true }\">Customer List</a>\r\n    </li>\r\n\r\n    <!-- <li class=\"nav-item\">\r\n      <a class=\"nav-link\"\r\n         [routerLink]=\"['/products', 0, 'edit']\"\r\n         *ngIf='isLoggedIn'\r\n         routerLinkActive=\"active\">Add Product</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\"\r\n        *ngIf=\"isLoggedIn\">\r\n      <a class=\"nav-link\"\r\n      routerLinkActive=\"active\">Welcome {{ userName }}</a>\r\n    </li>\r\n    <li class=\"nav-item\"\r\n        *ngIf=\"!isMessageDisplayed\">\r\n      <a class=\"nav-link\"\r\n       (click) =\"displayMessage()\">Show Messages</a>\r\n    </li>\r\n    <li class=\"nav-item\"\r\n        *ngIf=\"isMessageDisplayed\">\r\n        <a class=\"nav-link\"\r\n         (click) =\"hideMessage()\">Hide Messages</a>\r\n      </li> -->\r\n    <li class=\"nav-item\"\r\n        *ngIf=\"!isLoggedIn\">\r\n      <a class=\"nav-link\"\r\n         [routerLink]=\"['/login']\"\r\n         routerLinkActive=\"active\">Log In</a>\r\n    </li>\r\n    <li class=\"nav-item\"\r\n        *ngIf=\"isLoggedIn\">\r\n      <a class=\"nav-link\"\r\n      [routerLink]=\"['/welcome']\"\r\n         (click)=\"logOut()\">Log Out</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<div class=\"card-container mx-auto\">\r\n    <div class=\"row\">\r\n      <div  class=\"col-md-12\"\r\n          [@slideInAnimation] = \"o.isActivated ? o.activatedRoute: ''\">\r\n      <router-outlet #o=\"outlet\"></router-outlet>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <router-outlet name=\"popup\"></router-outlet>\r\n      </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus-grid.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus-grid.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n  <div class=\"table\">\r\n      <table class=\"table table-striped table-hover\">\r\n          <thead>\r\n              <tr>\r\n                  <th\r\n                  (click)=\"sort('firstName')\">Full Name</th>\r\n                  <th\r\n                  (click)=\"sort('email')\">Email Address</th>\r\n                  <th\r\n                  (click)=\"sort('phone')\">Phone</th>\r\n                  <th\r\n                  (click)=\"sort('servings')\">Servings</th>\r\n                  <th\r\n                  (click)=\"sort('occassion')\">Occassion</th>\r\n                  <th\r\n                  (click)=\"sort('dateOfOccassion')\">Date of Occassion</th>\r\n                  <th\r\n                  (click)=\"sort('dateOfApplication')\">Date of Application</th>\r\n                  <th\r\n                  (click)=\"sort('theme')\">Theme</th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr *ngFor=\"let customer of customerList;\r\n                        trackBy:trackby.customer\">\r\n                  <td><a [routerLink]=\"['/contactus',customer._id]\">\r\n                    {{ customer.firstName | capitalize }}  {{ customer.lastName | capitalize}}</a>\r\n                  </td>\r\n                  <td>{{ customer.email }}</td>\r\n                  <td>{{ customer.phone }}</td>\r\n\r\n                  <td>{{ customer.servings }}</td>\r\n                  <td>{{ customer.occassion }}</td>\r\n                  <td>{{ customer.dateOfOccassion | date: 'mediumDate' }}</td>\r\n                  <td>{{ customer.dateOfApplication | date: 'mediumDate' }}</td>\r\n                  <td>{{ customer.theme }}</td>\r\n              </tr>\r\n              <tr *ngIf=\"!customerList.length\">\r\n                  <td>&nbsp;</td>\r\n                  <td colspan=\"6\">{{ customerList.length}} records were found</td>\r\n              </tr>\r\n          </tbody>\r\n      </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-header\">\r\n              {{ title }}\r\n  </div>\r\n      <div class=\"card-body\">\r\n            <div class=\"search-bar\">\r\n                  <app-filter-textbox (changed)=\"filterChanged($event)\"></app-filter-textbox>\r\n            </div>\r\n\r\n      <app-customer-grid [customerList]=\"filteredCustomers\"></app-customer-grid>\r\n    </div>\r\n      <app-pagination [totalItems]=\"totalRecords\"\r\n          [pageSize]=\"pageSize\"\r\n          (pageChanged)=\"pageChanged($event)\"></app-pagination>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    Contact Us\n  </div>\n\n  <div class=\"card-body\">\n    <form\n      novalidate\n      (ngSubmit)=\"save()\"\n      [formGroup]=\"contactUsForm\"\n      class=\"col-md-12\"\n    >\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label\" for=\"firstNameId\"\n          >First Name</label\n        >\n        <div class=\"col-md-8\">\n          <input\n            class=\"form-control\"\n            id=\"firstNameId\"\n            type=\"text\"\n            placeholder=\"First Name (required)\"\n            formControlName=\"firstName\"\n            [ngClass]=\"{\n              'is-invalid':\n                (contactUsForm.get('firstName').touched ||\n                  contactUsForm.get('firstName').dirty) &&\n                !contactUsForm.get('firstName').valid\n            }\"\n          />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"!!contactUsForm.get('firstName').errors?.required\">\n              Please enter your first name.\n            </span>\n            <span *ngIf=\"!!contactUsForm.get('firstName').errors?.minlength\">\n              The first name must be longer than 3 characters.\n            </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label\" for=\"lastNameId\"\n          >Last Name</label\n        >\n        <div class=\"col-md-8\">\n          <input\n            class=\"form-control\"\n            id=\"lastNameId\"\n            type=\"text\"\n            placeholder=\"Last Name (required)\"\n            formControlName=\"lastName\"\n            [ngClass]=\"{\n              'is-invalid':\n                (contactUsForm.get('lastName').touched ||\n                  contactUsForm.get('lastName').dirty) &&\n                !contactUsForm.get('lastName').valid\n            }\"\n          />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"!!contactUsForm.get('lastName').errors?.required\">\n              Please enter your last name.\n            </span>\n            <span *ngIf=\"!!contactUsForm.get('lastName').errors?.maxlength\">\n              The last name must be less than 50 characters.\n            </span>\n          </span>\n        </div>\n      </div>\n      <!-- label and input for email notification -->\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label\" for=\"emailId\">Email</label>\n        <div class=\"col-md-8\">\n          <input\n            class=\"form-control\"\n            id=\"emailId\"\n            type=\"email\"\n            placeholder=\"Email (required)\"\n            required\n            email\n            formControlName=\"email\"\n            [ngClass]=\"{ 'is-invalid': emailMessage }\"\n          />\n          <span class=\"invalid-feedback\">\n            {{ emailMessage }}\n          </span>\n        </div>\n      </div>\n      <!-- label and input for confirm email -->\n      <!-- <div class=\"form-group row mb-2\">\n          <label class=\"col-md-3 col-form-label\" for=\"confirmEmailId\"\n            >Confirm Email</label\n          >\n          <div class=\"col-md-8\">\n            <input\n              class=\"form-control\"\n              id=\"confirmEmailId\"\n              type=\"email\"\n              placeholder=\"Confirm Email (required)\"\n              formControlName=\"confirmEmail\"\n              [ngClass]=\"{ 'is-invalid': confirmEmailMessage }\"\n            />\n            <span class=\"invalid-feedback\">\n              {{ confirmEmailMessage }}\n            </span>\n          </div>\n        </div> -->\n\n      <!-- Label and input for phone number -->\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label\" for=\"phoneId\"\n          >Mobile Number</label\n        >\n        <div class=\"col-md-8\">\n          <input\n            class=\"form-control\"\n            id=\"phoneId\"\n            type=\"tel\"\n            type=\"number\"\n            placeholder=\"Ex: 70 XXXXXX or 03 XXXXXX\"\n            formControlName=\"phone\"\n            [ngClass]=\"{ 'is-invalid': !contactUsForm.get('phone').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"!!contactUsForm.get('phone').errors?.required\">\n              Please enter your phone number\n            </span>\n          </span>\n        </div>\n      </div>\n      <!-- Label and input for notification -->\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label\">Preferred Contact Method</label>\n        <div class=\"col-md-8\">\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                type=\"radio\"\n                value=\"email\"\n                formControlName=\"notification\"\n              />\n              Email\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                type=\"radio\"\n                value=\"text\"\n                formControlName=\"notification\"\n              />\n              Text\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                type=\"radio\"\n                value=\"whatsapp\"\n                formControlName=\"notification\"\n              />\n              Whatsapp\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <!-- Type of order -->\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label pt-0\">Order Type</label>\n        <div class=\"col-md-9\">\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"orderType1Id\"\n                type=\"checkbox\"\n                value=\"cakes\"\n                checked\n                formControlName=\"orderType1\"\n              />\n              Cakes\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"orderType2Id\"\n                type=\"checkbox\"\n                value=\"cupcakes\"\n                formControlName=\"orderType2\"\n              />\n              Cup Cakes\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"orderType3Id\"\n                type=\"checkbox\"\n                value=\"cookies\"\n                formControlName=\"orderType3\"\n              />\n              Cookies\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"orderType4Id\"\n                type=\"checkbox\"\n                value=\"others\"\n                formControlName=\"orderType4\"\n              />\n              Others\n            </label>\n          </div>\n        </div>\n      </div>\n      <!-- Number of Servings -->\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label pt-0\">Number of Servings</label>\n        <div class=\"col-md-4\">\n          <select class=\"form-control\" formControlName=\"servings\" required>\n            <option value=\"\" disabled selected hidden>Select Value...</option>\n            <option value=\"5\">5</option>\n            <option value=\"10\">10</option>\n            <option value=\"15\">15</option>\n            <option value=\"20\">20</option>\n            <option value=\"25\">25</option>\n            <option value=\"30\">30</option>\n            <option value=\"35\">35</option>\n            <option value=\"40\">40</option>\n            <option value=\"50\">50</option>\n            <option value=\"60\">60</option>\n            <option value=\"100\">100</option>\n            <option value=\"200\">200</option>\n          </select>\n        </div>\n      </div>\n      <!-- Type of occassion -->\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label\">Type of Occassion</label>\n        <div class=\"col-md-9\">\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"typeOfOccassion\"\n                type=\"radio\"\n                value=\"birthday\"\n                formControlName=\"occassion\"\n              />Birthday</label\n            >\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"typeOfOccassion\"\n                type=\"radio\"\n                value=\"wedding\"\n                formControlName=\"occassion\"\n              />\n              Wedding</label\n            >\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"typeOfOccassion\"\n                type=\"radio\"\n                value=\"engagement\"\n                formControlName=\"occassion\"\n              />Engagement</label\n            >\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"typeOfOccassion\"\n                type=\"radio\"\n                value=\"party\"\n                formControlName=\"occassion\"\n              />Party</label\n            >\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                id=\"typeOfOccassion\"\n                type=\"radio\"\n                value=\"others\"\n                formControlName=\"occassion\"\n              />Others</label\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label\">Date of Occasion</label>\n        <div class=\"col-md-9\">\n          <input\n            class=\"form-control\"\n            id=\"dateOfOccassion\"\n            type=\"Date\"\n            formControlName=\"dateOfOccassion\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-3 col-form-label\">Describe your Order</label>\n        <div class=\"col-md-9\">\n          <textarea\n            class=\"form-control\"\n            id=\"theme\"\n            type=\"text\"\n            placeholder=\"Describe the theme you desire\"\n            formControlName=\"theme\"\n          ></textarea>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\" *ngIf=\"product\">\n        <label class=\"col-md-3 col-form-label\">Selected Item</label>\n        <div class=\"col-md-3\">\n          <figure>\n            <img\n              src=\"{{ product.imageUrl }}\" >\n          </figure>\n        </div>\n        <div class=\"col-md-2\">\n          <label style=\"font-size:20px;\">\n            <b>{{ product.productName }}</b></label>\n        </div>\n      </div>\n\n      <!-- Save button -->\n      <div class=\"form-group row mb-2\">\n        <div class=\"col-md-4\">\n          <button\n            class=\"btn btn-primary btn-lg\"\n            type=\"submit\"\n            style=\"width:120px\"\n            [title]=\"\n              contactUsForm.valid\n                ? 'Save your entered data'\n                : 'Disabled until the form data is valid'\n            \"\n            [disabled]=\"!contactUsForm.valid\"\n          >\n            Save\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/neworder.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/neworder.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <h2>\r\n    <span class=\"glyphicon glyphicon-user\"></span>\r\n    {{ customer.firstName | capitalize }} &nbsp; {{ customer.lastName | capitalize}}\r\n  </h2>\r\n</header>\r\n<br />\r\n<div class=\"card-edit\">\r\n  <form (ngSubmit)=\"submit()\" #productForm=\"ngForm\" *ngIf=\"customer._id !== null\" novalidate>\r\n    <div class=\"table\">\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>Email Address</th>\r\n            <td colspan=\"4\">{{ customer.email }}</td>\r\n          </tr>\r\n        </thead>\r\n        <thead>\r\n          <tr>\r\n            <th>Phone Number</th>\r\n            <td colspan=\"4\">{{ customer.phone }}</td>\r\n          </tr>\r\n        </thead>\r\n        <thead>\r\n            <tr>\r\n              <th>Notification Method</th>\r\n              <td colspan=\"4\">{{ customer.notification }}</td>\r\n            </tr>\r\n          </thead>\r\n          <thead>\r\n              <tr>\r\n                <th>Order Types</th>\r\n                <th>Cakes</th>\r\n                <th>Cup Cakes</th>\r\n                <th>Cookies</th>\r\n                <th>Others</th>\r\n              </tr>\r\n              <tr>\r\n                <td></td>\r\n                <td>{{ customer.orderType1 }}</td>\r\n                <td> {{ customer.orderType2 }} </td>\r\n                <td>  {{ customer.orderType3 }} </td>\r\n                <td> {{ customer.orderType4 }}</td>\r\n              </tr>\r\n\r\n            </thead>\r\n            <thead>\r\n                <tr>\r\n                  <th>Number of Servings</th>\r\n                  <td colspan=\"4\">{{ customer.servings }}</td>\r\n                </tr>\r\n              </thead>\r\n              <thead>\r\n                  <tr>\r\n                    <th>Occassion</th>\r\n                    <td colspan=\"4\"> {{ customer.occassion }}</td>\r\n                  </tr>\r\n                </thead>\r\n                <thead>\r\n                  <tr>\r\n                    <th>Date of Occassion</th>\r\n                    <td colspan=\"4\"> {{ customer.dateOfOccassion | date: 'mediumDate' }}</td>\r\n                  </tr>\r\n                </thead>\r\n                <thead>\r\n                  <tr>\r\n                    <th>Date of Application</th>\r\n                    <td colspan=\"4\"> {{ customer.dateOfApplication | date: 'mediumDate' }}</td>\r\n                  </tr>\r\n                </thead>\r\n              <thead>\r\n                  <tr>\r\n                    <th>Theme Requested</th>\r\n                    <td colspan=\"4\">{{ customer.theme }}</td>\r\n                  </tr>\r\n                </thead>\r\n      </table>\r\n\r\n    </div>\r\n    <br />\r\n\r\n    <div *ngIf=\"customer\">\r\n      <div\r\n        class=\"alert alert-warning\"\r\n        *ngIf=\"customer._id && deleteMessageEnabled\"\r\n      >\r\n        Delete Customer?&nbsp;&nbsp;<button\r\n          class=\"btn btn-danger\"\r\n          (click)=\"delete($event)\"\r\n        >\r\n          Yes</button\r\n        >&nbsp;&nbsp;\r\n        <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">\r\n          No\r\n        </button>\r\n      </div>\r\n      <button\r\n        class=\"btn btn-danger\"\r\n        *ngIf=\"customer._id && !deleteMessageEnabled\"\r\n        (click)=\"deleteMessageEnabled = true\"\r\n      >\r\n        Delete</button\r\n      >&nbsp;&nbsp;\r\n\r\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\r\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button\r\n        >&nbsp;&nbsp;\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          [disabled]=\"!productForm.valid\"\r\n        >\r\n          {{ operationText }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">\r\n      {{ errorMessage }}\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <header>\n      <h3>\n          <span class=\"glyphicon glyphicon-user\"></span>\n          {{ customer.firstName }} {{ customer.lastName }}\n      </h3>\n  </header>\n  <br />\n  <form [formGroup]=\"customerForm\" (ngSubmit)=\"submit(customerForm)\" class=\"editForm\" novalidate>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.firstName.untouched || customerForm.controls.firstName.valid\">First Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.lastName.untouched || customerForm.controls.lastName.valid\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Gender</label>\n      <br />\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Male\" />\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Female\"  /> \n          Female\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.email.untouched || customerForm.controls.email.valid\">Email is required and must be valid</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.address.untouched || customerForm.controls.address.valid\">Address is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>City</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"city\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.city.untouched || customerForm.controls.city.valid\">City is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>State</label>\n      <select class=\"form-control\" formControlName=\"stateId\">\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.id\">{{state.name}}</option>\n      </select>\n    </div>\n    <br />\n\n    <div *ngIf=\"customer\">\n      <div class=\"alert alert-warning\" *ngIf=\"customer._id && deleteMessageEnabled\">\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n      </div>\n      <button class=\"btn btn-danger\" *ngIf=\"customer._id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.valid\">{{ operationText }}</button>\n      </div>\n    </div>\n    <br />\n    <br />\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <header>\n      <h3>\n          <span class=\"glyphicon glyphicon-user\"></span>\n          {{ customer.firstName }} {{ customer.lastName }}\n      </h3>\n  </header>\n  <br />\n  <div class=\"card-edit\">\n  <form (ngSubmit)=\"submit()\" #customerForm=\"ngForm\" novalidate>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"firstName.untouched || firstName.valid\">First Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"lastName.untouched || lastName.valid\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Gender</label>\n      <br />\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" value=\"Male\" required />\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" value=\"Female\" required />\n          Female\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"customer.email\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" />\n      <div class=\"alert alert-danger\" [hidden]=\"email.untouched || email.valid\">Email is required and must be valid</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"address.untouched || address.valid\">Address is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>City</label>\n      <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"city.untouched || city.valid\">City is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>State</label>\n      <select class=\"form-control\"\n              [(ngModel)]=\"customer.stateId\"\n              name=\"state\"\n              required>\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.name\">{{state.name}}</option>\n      </select>\n    </div>\n    <br />\n\n    <div *ngIf=\"customer\">\n      <div class=\"alert alert-warning\" *ngIf=\"customer._id && deleteMessageEnabled\">\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n      </div>\n      <button class=\"btn btn-danger\" *ngIf=\"customer._id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.valid\">{{ operationText }}</button>\n      </div>\n    </div>\n    <br />\n    <br />\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n\n  </form>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n  <div class=\"table\">\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>&nbsp;</th>\n          <th (click)=\"sort('firstName')\">First Name</th>\n          <th (click)=\"sort('lastName')\">Last Name</th>\n          <th (click)=\"sort('address')\">Address</th>\n          <th (click)=\"sort('city')\">City</th>\n          <th (click)=\"sort('state.name')\">State</th>\n          <th (click)=\"sort('orderTotal')\">Order Total</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let customer of customers; trackBy: trackby.customer\">\n          <td>\n            <img\n              src=\"/assets/images/{{ customer.gender | lowercase }}.png\"\n              class=\"card-image\"\n              alt=\"Customer Image\"\n              [style.width.px]=\"imageWidth\"\n              [style.margin.px]=\"imageMargin\"\n            />\n          </td>\n          <td>\n            <a [routerLink]=\"['/customers', customer._id]\">{{\n              customer.firstName | capitalize\n            }}</a>\n          </td>\n          <td>{{ customer.lastName | capitalize }}</td>\n          <td>{{ customer.address }}</td>\n          <td>{{ customer.city | trim }}</td>\n          <td>{{ customer.state.name }}</td>\n          <td>{{ customer.orderTotal | currency: \"USD\":\"symbol\" }}</td>\n        </tr>\n        <tr *ngIf=\"!customers.length\">\n          <td>&nbsp;</td>\n          <td colspan=\"6\">{{ customers.length }} records were found</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    {{ title }}\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <app-filter-textbox\n          (changed)=\"filterChanged($event)\"\n        ></app-filter-textbox>\n      </div>\n      <div class=\"col-md-6\">\n      <button\n        class=\"btn btn-primary mr-3\"\n        style=\"width:180px;\"\n        type=\"button\"\n        title=\"Add New Customer\"\n        [routerLink]=\"['/customers', '0']\"\n      >\n        Add New Customer\n      </button>\n    </div>\n  </div>\n\n    <app-customers-grid [customers]=\"filteredCustomers\"></app-customers-grid>\n  </div>\n  <app-pagination\n    [totalItems]=\"totalRecords\"\n    [pageSize]=\"pageSize\"\n    (pageChanged)=\"pageChanged($event)\"\n  ></app-pagination>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">Messages\n    <button class=\"btn btn-light btn-sm float-right\"\n            (click)=\"close()\">\n      X\n    </button>\n  </div>\n  <div class=\"card-body\">\n    <div *ngFor=\"let message of messages; let i=index\">\n      <div *ngIf=\"i<10\"\n           class=\"message-row\">\n        {{ message }}\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jw-modal\">\n    <div class=\"jw-modal-body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n<div class=\"jw-modal-background\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-edit.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <h2>\r\n    <span class=\"glyphicon glyphicon-user\"></span>\r\n    {{ product.productName }}\r\n  </h2>\r\n</header>\r\n<br />\r\n<!-- If the user is logged in as admin this section will be active -->\r\n<div class=\"card-edit\" *ngIf=\"isLoggedIn\">\r\n  <form (ngSubmit)=\"submit()\" #productForm=\"ngForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label>Product Name</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        name=\"productName\"\r\n        [(ngModel)]=\"product.productName\"\r\n        #productName=\"ngModel\"\r\n        required\r\n      />\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        [hidden]=\"productName.untouched || productName.valid\"\r\n      >\r\n        Product Name is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Dimensions</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        name=\"dimensions\"\r\n        [(ngModel)]=\"product.productDimensions\"\r\n        #dimensions=\"ngModel\"\r\n        required\r\n      />\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        [hidden]=\"dimensions.untouched || dimensions.valid\"\r\n      >\r\n        Dimensions are required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Servings</label>\r\n      <input\r\n        type=\"number\"\r\n        class=\"form-control\"\r\n        name=\"servings\"\r\n        [(ngModel)]=\"product.productServings\"\r\n        #servings=\"ngModel\"\r\n        required\r\n      />\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        [hidden]=\"servings.untouched || servings.valid\"\r\n      >\r\n        Number of servings are required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Covering</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        name=\"covering\"\r\n        [(ngModel)]=\"product.productCovering\"\r\n        #covering=\"ngModel\"\r\n        required\r\n      />\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        [hidden]=\"covering.untouched || covering.valid\"\r\n      >\r\n        Covering is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Category</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        name=\"category\"\r\n        [(ngModel)]=\"product.category\"\r\n        #category=\"ngModel\"\r\n        required\r\n      />\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        [hidden]=\"category.untouched || category.valid\"\r\n      >\r\n        Category is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Description</label>\r\n      <textarea\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        name=\"description\"\r\n        [(ngModel)]=\"product.description\"\r\n        #description=\"ngModel\"\r\n        required\r\n      ></textarea>\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        [hidden]=\"description.untouched || description.valid\"\r\n      >\r\n        Description is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Image URL</label>\r\n      <input\r\n        type=\"url\"\r\n        class=\"form-control\"\r\n        name=\"imageUrl\"\r\n        [(ngModel)]=\"product.imageUrl\"\r\n        #imageUrl=\"ngModel\"\r\n        required\r\n      />\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        [hidden]=\"imageUrl.untouched || imageUrl.valid\"\r\n      >\r\n        Image Url is required\r\n      </div>\r\n    </div>\r\n\r\n    <br />\r\n\r\n    <div *ngIf=\"product\">\r\n      <div\r\n        class=\"alert alert-warning\"\r\n        *ngIf=\"product._id && deleteMessageEnabled\"\r\n      >\r\n        Delete Product?&nbsp;&nbsp;<button\r\n          class=\"btn btn-danger\"\r\n          (click)=\"delete($event)\"\r\n        >\r\n          Yes</button\r\n        >&nbsp;&nbsp;\r\n        <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">\r\n          No\r\n        </button>\r\n      </div>\r\n      <button\r\n        class=\"btn btn-danger\"\r\n        *ngIf=\"product._id && !deleteMessageEnabled\"\r\n        (click)=\"deleteMessageEnabled = true\"\r\n      >\r\n        Delete</button\r\n      >&nbsp;&nbsp;\r\n\r\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\r\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button\r\n        >&nbsp;&nbsp;\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          [disabled]=\"!productForm.valid\"\r\n        >\r\n          {{ operationText }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">\r\n      {{ errorMessage }}\r\n    </div>\r\n  </form>\r\n</div>\r\n<!-- If the user is not logged in  -->\r\n<div class=\"card-edit\" *ngIf=\"!isLoggedIn\">\r\n  <form (ngSubmit)=\"addOrder()\" #productForm=\"ngForm\" novalidate>\r\n    <table class=\"table table-striped table-hover\">\r\n      <tr>\r\n        <th>Product Name</th>\r\n        <td>{{ product.productName }}</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Dimensions</th>\r\n        <td>{{ product.productDimensions }}</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Servings</th>\r\n        <td>{{ product.productServings }}</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Covering</th>\r\n        <td>{{ product.productCovering }}</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Category</th>\r\n        <td>{{ product.category }}</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Description</th>\r\n        <td>{{ product.description }}</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Image</th>\r\n        <td>\r\n          <figure>\r\n            <img src=\"{{ product.imageUrl }}\" />\r\n          </figure>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <br />\r\n    <div *ngIf=\"product\">\r\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\r\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button\r\n        >&nbsp;&nbsp;\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          {{ operationText }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-grid.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-grid.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n    <div *ngIf= \"isLoggedIn\" class=\"table\">\r\n        <table class=\"table table-striped table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th>&nbsp;</th>\r\n                    <th\r\n                    (click)=\"sort('produdtName')\">Name</th>\r\n                    <th\r\n                    (click)=\"sort('description')\">Description</th>\r\n                    <th\r\n                    (click)=\"sort('dimensions')\">Dimensions</th>\r\n                    <th\r\n                    (click)=\"sort('servings')\">Servings</th>\r\n                    <th\r\n                    (click)=\"sort('covering')\">Covering</th>\r\n                    <th\r\n                    (click)=\"sort('category')\">Category</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let product of products;\r\n                          trackBy:trackby.product\">\r\n                    <td>\r\n                      <figure>\r\n                      <img src= \"{{ product.imageUrl }}\"\r\n                          alt=\"Product Image\"\r\n                          />\r\n                        </figure>\r\n                    </td>\r\n                    <td *ngIf=\"!isLoggedIn\">{{ product.productName | capitalize }}</td>\r\n                    <td *ngIf=\"isLoggedIn\"><a [routerLink]=\"['/products',product._id]\">{{ product.productName | capitalize }}</a></td>\r\n                    <td>{{ product.description }}</td>\r\n                    <td>{{ product.productDimensions }}</td>\r\n                    <td>{{ product.productServings }}</td>\r\n                    <td>{{ product.productCovering }}</td>\r\n                    <td>{{ product.category | capitalize }}</td>\r\n                </tr>\r\n                <tr *ngIf=\"!products.length\">\r\n                    <td>&nbsp;</td>\r\n                    <td colspan=\"6\">{{ products.length}} records were found</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div *ngIf=\"!isLoggedIn\">\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-column\" *ngFor=\"let product of products\">\r\n            <a [routerLink]=\"['/products', product._id]\"><img src=\"{{ product.imageUrl }}\" style=\"width:90%\">\r\n          </a>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header\">\n                {{ title }}\n    </div>\n        <div class=\"card-body\">\n              <div class=\"search-bar\">\n                    <app-filter-textbox (changed)=\"filterChanged($event)\"></app-filter-textbox>\n\n\n                    <button  class=\"button button1\"\n                              *ngIf=\"isLoggedIn\"\n                              title=\"Add New Product\"\n                              [routerLink]=\"['/products', '0']\">Add New Product\n                            </button>\n\n            </div>\n\n          </div>\n          <div class=\"card-body\">\n        <app-products-grid [products]=\"filteredProducts\"></app-products-grid>\n      </div>\n        <app-pagination [totalItems]=\"totalRecords\"\n            [pageSize]=\"pageSize\"\n            (pageChanged)=\"pageChanged($event)\"></app-pagination>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav [hidden]=\"!isVisible\">\n  <ul class=\"pagination\">\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\n      <a aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\n      <a>{{ page }}</a>\n    </li>\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\n      <a aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n      </a>\n    </li>\n  </ul>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n\n  <div class=\"card-body\">\n    <form novalidate\n          (ngSubmit)=\"login(loginForm)\"\n          #loginForm=\"ngForm\"\n          autocomplete=\"off\">\n      <fieldset>\n\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\"\n                 for=\"userNameId\">User Name</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\"\n                   id=\"userNameId\"\n                   type=\"text\"\n                   placeholder=\"User Name (required)\"\n                   required\n                   ngModel\n                   name=\"userName\"\n                   #userNameVar=\"ngModel\"\n                   [ngClass]=\"{'is-invalid': (userNameVar.touched || userNameVar.dirty) && !userNameVar.valid }\" />\n            <span class=\"invalid-feedback\">\n              <span *ngIf=\"!!userNameVar.errors?.required\">\n                User name is required.\n              </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form--label\"\n                 for=\"passwordId\">Password</label>\n\n          <div class=\"col-md-8\">\n            <input class=\"form-control\"\n                   id=\"passwordId\"\n                   type=\"password\"\n                   placeholder=\"Password (required)\"\n                   required\n                   ngModel\n                   name=\"password\"\n                   #passwordVar=\"ngModel\"\n                   [ngClass]=\"{'is-invalid': (passwordVar.touched || passwordVar.dirty) && !passwordVar.valid }\" />\n            <span class=\"invalid-feedback\">\n              <span *ngIf=\"!!passwordVar.errors?.required\">\n                Password is required.\n              </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <button class=\"btn btn-primary mr-3\"\n                    type=\"submit\"\n                    style=\"width:120px\"\n                    [disabled]=\"!loginForm.valid\">\n              Log In\n            </button>\n            <button class=\"btn btn-outline-secondary\"\n                    type=\"button\"\n                    style=\"width:120px\"\n                    [routerLink]=\"['/welcome']\">\n              Cancel\n            </button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n\n  <div class=\"alert alert-danger\"\n       *ngIf=\"errorMessage\">{{errorMessage}}\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    {{ pageTitle }}\n  </div>\n  <div class=\"card-body\">\n    <div class=\"col-md-12\">\n      <div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carousel\" data-slide-to=\"2\"></li>\n          <li data-target=\"#carousel\" data-slide-to=\"3\"></li>\n          <li data-target=\"#carousel\" data-slide-to=\"4\"></li>\n          <li data-target=\"#carousel\" data-slide-to=\"5\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img\n              class=\"large-image\"\n              src=\"../../assets/imagesWelcome/img1.png\"\n            />\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              class=\"large-image\"\n              src=\"../../assets/imagesWelcome/img2.png\"\n            />\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              class=\"large-image\"\n              src=\"../../assets/imagesWelcome/img3.png\"\n            />\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              class=\"large-image\"\n              src=\"../../assets/imagesWelcome/img4.png\"\n            />\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              class=\"large-image\"\n              src=\"../../assets/imagesWelcome/img5.png\"\n            />\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              class=\"large-image\"\n              src=\"../../assets/imagesWelcome/img6.png\"\n            />\n          </div>\n        </div>\n        <a\n          class=\"carousel-control-prev\"\n          href=\"#carousel\"\n          role=\"button\"\n          data-slide=\"prev\"\n        >\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a\n          class=\"carousel-control-next\"\n          href=\"#carousel\"\n          role=\"button\"\n          data-slide=\"next\"\n        >\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <br><br>\n    <div class=\"text-header\">\n      <h3>About Us</h3>\n    </div>\n    <div class=\"text-body\">\n      <p>\n        Made by Sally is a home organization that specilizes in producing\n        different types of cakes and sweets. Our concept is to provide clients\n        with a <b> home made flavour </b>decorated with a professional and\n        elegant design of your choice. In addition to the different types of cakes,\n        we also provide a variety of delicacies such as decorated cookies, cup cakes,\n        and several other products upon your request.\n      </p>\n    </div>\n    <br><br>\n    <div class=\"text-header\">\n      <h3>Our History</h3>\n    </div>\n    <div class=\"main\">\n      <div class=\"sidebar text-body\">\n      <p>\n        Our business started in 2015 and it was met with great success among all\n        our clients.\n        We managed to create a vareity of flavours and custom home made fillings that became very popular and were demanded frequently. Our designs and decorations were complemented occassionaly which was a reason of assurance to grow our business in order to reach more and more cake and sweets lovers.\n        <br />\n        Our products and services are suitable for several celebrations such as birthday\n        parties, new born babies, engagments, anniversaries, and also\n        weddings. So feel confident in trying them as we are sure you'll love them.<br />\n\n        If you are looking for a cake that serves both design and flavour,\n        you've came to the right place, we care about our client's so much that\n        we seek to provide the best experience possible.\n      </p>\n    </div>\n    <div class=\"page-wrap\">\n      <img src=\"../../assets/imagesWelcome/welcomepage1.jpg\"/>\n    </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <div class=\"col-md-12\">\n      <div class=\"text-center\" style=\"font-weight: bold\">\n          You can contact us through:\n      </div>\n      <div class=\"side-300\">\n      <a href=\"https://www.instagram.com/made.by.sally_cake/\">\n        <img class=\"tiny-image\" src=\"../../assets/imagesWelcome/instagram.png\"></a>\n\n\n        <a href=\"https://www.facebook.com/BakingAndDecoration/\">\n          <img class=\"tiny-image\" src=\"../../assets/imagesWelcome/facebook.png\"></a>\n\n\n          <img class=\"tiny-image\" src=\"../../assets/imagesWelcome/whatapp.png\"\n            (click)=\"openModal('whatsapp')\">\n      </div>\n      <jw-modal id='whatsapp'>\n        <h1>Whatsapp Number:</h1>\n        <p><input type=\"text\" [(ngModel)]= \"bodytext\"></p>\n        <button class=\"btn btn-primary\" (click)=\"closeModal('whatsapp')\">Close</button>\n      </jw-modal>\n    </div>\n  <div class=\"text-center\" style=\"font-weight: bold\">\n        Developed by: <br>Wissam Bou Ghannam\n  </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers/customers-grid.component */ "./src/app/customers/customers-grid.component.ts");
/* harmony import */ var _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers/customer-edit.component */ "./src/app/customers/customer-edit.component.ts");
/* harmony import */ var _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customer-edit-reactive.component */ "./src/app/customers/customer-edit-reactive.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _products_products_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products-grid.component */ "./src/app/products/products-grid.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_product_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/product-edit.component */ "./src/app/products/product-edit.component.ts");
/* harmony import */ var _user_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _contactus_contactus_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contactus/contactus-list.component */ "./src/app/contactus/contactus-list.component.ts");
/* harmony import */ var _contactus_contactus_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contactus/contactus-grid.component */ "./src/app/contactus/contactus-grid.component.ts");
/* harmony import */ var _contactus_neworder_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contactus/neworder.component */ "./src/app/contactus/neworder.component.ts");
















const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"] },
    { path: 'products/:id', component: _products_product_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProductEditComponent"] },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] },
    { path: 'customers/:id', component: _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"] },
    { path: 'contactus-list', component: _contactus_contactus_list_component__WEBPACK_IMPORTED_MODULE_13__["ContactusListComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"] },
    { path: 'contactus-order/:orderId', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"] },
    { path: 'contactus/:id', component: _contactus_neworder_component__WEBPACK_IMPORTED_MODULE_15__["NewOrderComponent"] },
    { path: 'login', component: _user_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: '**', redirectTo: '/welcome' } // catch any unfound routes and redirect to home page
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule.components = [_customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"],
    _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"],
    _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_6__["CustomerEditReactiveComponent"],
    _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__["CustomersGridComponent"],
    _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
    _products_products_grid_component__WEBPACK_IMPORTED_MODULE_8__["ProductsGridComponent"],
    _products_product_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProductEditComponent"],
    _user_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
    _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
    _contactus_contactus_grid_component__WEBPACK_IMPORTED_MODULE_14__["ContactusGridComponent"],
    _contactus_contactus_list_component__WEBPACK_IMPORTED_MODULE_13__["ContactusListComponent"],
    _contactus_neworder_component__WEBPACK_IMPORTED_MODULE_15__["NewOrderComponent"]];
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.animation.ts":
/*!**********************************!*\
  !*** ./src/app/app.animation.ts ***!
  \**********************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInAnimation', [
    // Transition between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [
        // Events to apply
        // Defined style and animation function to apply
        // Config object with optional set to true to handle when element not yet added to the DOM
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
        // group block executes in parallel
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ])
]);


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
/* harmony import */ var _app_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.animation */ "./src/app/app.animation.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/message.service */ "./src/app/core/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ "./src/app/modal/index.ts");







let AppComponent = class AppComponent {
    constructor(authService, messageService, router, route, modalService) {
        this.authService = authService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.pageTitle = 'Made By Sally';
        this.loading = true;
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
    get userName() {
        if (this.authService.currentUser) {
            return this.authService.currentUser.userName;
        }
        return '';
    }
    get isMessageDisplayed() {
        return this.messageService.isDisplayed;
    }
    ngOnInit() {
        this.bodytext = '+961 76 809 138';
    }
    // checkRouterEvent(routerEvent: Event) {
    //     if (routerEvent instanceof NavigationStart) {
    //       this.loading = true;
    //     }
    //     if (routerEvent instanceof NavigationEnd ||
    //         routerEvent instanceof NavigationError ||
    //         routerEvent instanceof NavigationCancel) {
    //           this.loading = false;
    //         }
    // }
    // displayMessage(): void {
    //   this.router.navigate([{ outlets: { popup: ['messages']}}]);
    //   this.messageService.isDisplayed = true;
    // }
    // hideMessage(): void {
    //   this.router.navigate([ {outlets: { popup: null }}]);
    //   this.messageService.isDisplayed = false;
    // }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id) {
        this.modalService.close(id);
    }
    logOut() {
        this.authService.logout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _core_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _modal__WEBPACK_IMPORTED_MODULE_6__["ModalService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [_app_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_products_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products-grid.component */ "./src/app/products/products-grid.component.ts");
/* harmony import */ var _products_product_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product-edit.component */ "./src/app/products/product-edit.component.ts");
/* harmony import */ var _user_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _contactus_contactus_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contactus/contactus-list.component */ "./src/app/contactus/contactus-list.component.ts");
/* harmony import */ var _contactus_contactus_grid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contactus/contactus-grid.component */ "./src/app/contactus/contactus-grid.component.ts");
/* harmony import */ var _contactus_neworder_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contactus/neworder.component */ "./src/app/contactus/neworder.component.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal */ "./src/app/modal/index.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _modal__WEBPACK_IMPORTED_MODULE_18__["ModalModule"]
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"].components,
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
            _products_products_grid_component__WEBPACK_IMPORTED_MODULE_10__["ProductsGridComponent"],
            _products_product_edit_component__WEBPACK_IMPORTED_MODULE_11__["ProductEditComponent"],
            _user_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactUsComponent"],
            _contactus_contactus_grid_component__WEBPACK_IMPORTED_MODULE_16__["ContactusGridComponent"],
            _contactus_contactus_list_component__WEBPACK_IMPORTED_MODULE_15__["ContactusListComponent"],
            _contactus_neworder_component__WEBPACK_IMPORTED_MODULE_17__["NewOrderComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contactus/contactus-grid.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-grid.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactusGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusGridComponent", function() { return ContactusGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/trackby.service */ "./src/app/core/trackby.service.ts");




let ContactusGridComponent = class ContactusGridComponent {
    constructor(sorter, trackby) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.customerList = [];
    }
    ngOnInit() {
    }
    sort(prop) {
        this.sorter.sort(this.customerList, prop);
    }
};
ContactusGridComponent.ctorParameters = () => [
    { type: _core_sorter__WEBPACK_IMPORTED_MODULE_2__["Sorter"] },
    { type: _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactusGridComponent.prototype, "customerList", void 0);
ContactusGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus-grid.component.html")).default,
        // When using OnPush detectors, then the framework will check an OnPush
        // component when any of its input properties changes, when it fires
        // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], ContactusGridComponent);



/***/ }),

/***/ "./src/app/contactus/contactus-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-list.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactusListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusListComponent", function() { return ContactusListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");






let ContactusListComponent = class ContactusListComponent {
    constructor(router, dataService, dataFilter, authService) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.authService = authService;
        this.customerList = [];
        this.filteredCustomers = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
    ngOnInit() {
        this.title = 'Customer List';
        this.getCustomerOrders();
    }
    filterChanged(filterText) {
        console.log('The customer list data ' + this.customerList);
        if (filterText && this.customerList) {
            const props = ['firstName', 'lastName', 'email', 'phone'];
            this.filteredCustomers = this.dataFilter.filter(this.customerList, props, filterText);
        }
        else {
            this.filteredCustomers = this.customerList;
        }
    }
    pageChanged(page) {
        this.getCustomerOrders();
    }
    getCustomerOrders() {
        this.dataService.getCustomerOrders()
            .subscribe((response) => {
            this.customerList = this.filteredCustomers = response;
        }, (err) => console.log(err), () => console.log('getCustomerOrders() retrieved customer list'));
    }
};
ContactusListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__["DataFilterService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ContactusListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus-list.component.html")).default
    })
], ContactusListComponent);



/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer */ "./src/app/contactus/customer.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








function emailMatcher(c) {
    const emailControl = c.get('email');
    const confirmEmailControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmEmailControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmEmailControl.value) {
        return null;
    }
    return { match: true };
}
function ratingRange(min, max) {
    return (c) => {
        if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { range: true };
        }
        return null;
    };
}
let ContactUsComponent = class ContactUsComponent {
    constructor(fb, route, dataService, router, datePipe) {
        this.fb = fb;
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.datePipe = datePipe;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
        this.product = {
            productCovering: '',
            productDimensions: '',
            productServings: 0,
            productName: '',
            category: '',
            description: '',
            imageUrl: ''
        };
        this.validationMessaged = {
            required: 'Please enter your email address.',
            email: 'Please enter a valid email address.',
            confirmEmail: 'Please enter the same email address.'
        };
        this.myDate = new Date();
    }
    get addresses() {
        return this.contactUsForm.get('addresses');
    }
    ngOnInit() {
        const id = this.route.snapshot.params.orderId;
        if (id !== '0') {
            console.log('Id ' + id);
            this.getProduct(id);
        }
        else {
            console.log('No order was selected');
        }
        this.contactUsForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: '',
            notification: 'email',
            orderType1: '',
            orderType2: '',
            orderType3: '',
            orderType4: '',
            servings: '',
            occassion: '',
            dateOfOccassion: '',
            dateOfApplication: this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
            theme: '',
            productId: '',
            productImage: null,
            productName: ''
        });
        this.contactUsForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));
        const emailControl = this.contactUsForm.get('email');
        emailControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(value => this.setMessage(emailControl));
    }
    getProduct(id) {
        this.dataService.getProduct(id)
            .subscribe((product) => {
            this.product = product;
            this.contactUsForm = this.fb.group({
                firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
                lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                phone: '',
                notification: 'email',
                orderType1: '',
                orderType2: '',
                orderType3: '',
                orderType4: '',
                servings: '',
                occassion: '',
                dateOfOccassion: '',
                dateOfApplication: this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
                theme: '',
                productId: product._id,
                productImage: product.imageUrl,
                productName: product.productName
            });
        }, (err) => console.log(err));
    }
    save() {
        this.dataService.insertNewCustomer(this.contactUsForm.value)
            .subscribe((contactUsForm) => {
            if (contactUsForm) {
                console.log('customer was inserted successfully');
                this.router.navigate(['/welcome']);
            }
            else {
                this.errorMessage = 'Unable to add new customer';
            }
        }, (err) => console.log(err));
    }
    setNotification(notifyvia) {
        const phoneControl = this.contactUsForm.get('phone');
        if (notifyvia === 'text' || notifyvia === 'whatsapp') {
            phoneControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
    setMessage(c) {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key => this.validationMessaged[key]).join(' ');
        }
    }
    setConfirmMessage(c) {
        this.confirmEmailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.confirmEmailMessage = Object.keys(c.errors).map(key => this.validationMessaged[key]).join(' ');
        }
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
];
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/contactus/customer.ts":
/*!***************************************!*\
  !*** ./src/app/contactus/customer.ts ***!
  \***************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Customer {
    constructor(firstName = '', lastName = '', email = '', confirmEmail = '', phone = '', notification = 'email', orderType1 = 'cakes', orderType2 = '', orderType3 = '', orderType4 = '', servings = '', occassion = '', theme = '', productId = '', productImage = null, productName = '') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.confirmEmail = confirmEmail;
        this.phone = phone;
        this.notification = notification;
        this.orderType1 = orderType1;
        this.orderType2 = orderType2;
        this.orderType3 = orderType3;
        this.orderType4 = orderType4;
        this.servings = servings;
        this.occassion = occassion;
        this.theme = theme;
        this.productId = productId;
        this.productImage = productImage;
        this.productName = productName;
    }
}


/***/ }),

/***/ "./src/app/contactus/neworder.component.ts":
/*!*************************************************!*\
  !*** ./src/app/contactus/neworder.component.ts ***!
  \*************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");




let NewOrderComponent = class NewOrderComponent {
    constructor(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.customer = {
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            phone: '',
            notification: '',
            orderType1: '',
            orderType2: '',
            orderType3: '',
            orderType4: '',
            servings: '',
            occassion: '',
            dateOfOccassion: null,
            dateOfApplication: null,
            theme: '',
            productId: '',
            productImage: null,
            productName: ''
        };
        this.operationText = 'Update';
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.getNewCustomer(id);
    }
    getNewCustomer(id) {
        this.dataService.getNewCustomer(id)
            .subscribe((customer) => {
            this.customer = customer;
        }, (err) => console.log(err), () => console.log('getNewCustomer() retreived data'));
    }
    submit() {
        // if (this.customer._id) {
        //   this.dataService.update(this.customer)
        //     .subscribe((customer: NewCustomer) => {
        //       if (customer) {
        //         this.router.navigate(['/products']);
        //       } else {
        //         this.errorMessage = 'Unable to save product';
        //       }
        //     },
        //     (err: any) => console.log(err));
        // }
    }
    cancel(event) {
        event.preventDefault();
        this.router.navigate(['/contactus-list']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteNewCustomer(this.customer._id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/contactus-list']);
            }
            else {
                this.errorMessage = 'Unable to delete product';
            }
        }, (err) => console.log(err));
    }
};
NewOrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
NewOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./neworder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/neworder.component.html")).default
    })
], NewOrderComponent);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/message.service */ "./src/app/core/message.service.ts");



let AuthService = class AuthService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    get isLoggedIn() {
        return !!this.adminUser;
    }
    login(userName, password) {
        if (!userName || !password) {
            this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        if (userName === 'admin' && password === 'admin') {
            this.adminUser = {
                id: 1,
                userName,
                isAdmin: true,
            };
            this.messageService.addMessage('Admin login');
            return;
        }
        else if (userName === 'wiss' && password === 'wiss') {
            this.currentUser = {
                id: 2,
                userName,
                isAdmin: false
            };
            this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
        }
        else {
            this.messageService.addMessage(`Failed to login`);
        }
    }
    logout() {
        this.adminUser = null;
        this.currentUser = null;
    }
};
AuthService.ctorParameters = () => [
    { type: _core_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _data_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _sorter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _trackby_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trackby.service */ "./src/app/core/trackby.service.ts");
/* harmony import */ var _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ensureModuleLoadedOnceGuard */ "./src/app/shared/ensureModuleLoadedOnceGuard.ts");


// Using the new HttpClientModule now. If you're still on < Angular 4.3 see the
// core.module.ts.httpmodule file instead (simply rename it to the name
// of this file to use it instead)






let CoreModule = class CoreModule extends _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // Can use with Angular 4.3+ to
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _data_filter_service__WEBPACK_IMPORTED_MODULE_4__["DataFilterService"], _sorter__WEBPACK_IMPORTED_MODULE_5__["Sorter"], _trackby_service__WEBPACK_IMPORTED_MODULE_6__["TrackByService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
], CoreModule);

// Example of a custom XSRF class
// export class MyCookieXSRFStrategy implements XSRFStrategy {
//    constructor(
//        private _cookieName: string = 'XSRF-TOKEN', private _headerName: string = 'X-XSRF-TOKEN') { }
//    private getCookie(name: string) {
//        let ca: Array<string> = document.cookie.split(';');
//        let caLen: number = ca.length;
//        let cookieName = name + "=";
//        let c: string;
//        for (let i: number = 0; i < caLen; i += 1) {
//            c = ca[i].replace(/^\s\+/g, "");
//            if (c.indexOf(cookieName) == 0) {
//                return c.substring(cookieName.length, c.length);
//            }
//        }
//        return "";
//    }
//    configureRequest(req: Request) {
//        let xsrfToken = this.getCookie(this._cookieName);
//        alert(xsrfToken);
//        if (xsrfToken) {
//            req.headers.set(this._headerName, xsrfToken);
//        }
//    }
// }


/***/ }),

/***/ "./src/app/core/data-filter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/data-filter.service.ts ***!
  \*********************************************/
/*! exports provided: DataFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterService", function() { return DataFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



let DataFilterService = class DataFilterService {
    filter(datasource, filterProperties, filterData) {
        if (datasource && filterProperties && filterData) {
            filterData = filterData.toUpperCase();
            const filtered = datasource.filter(item => {
                let match = false;
                for (const prop of filterProperties) {
                    let propVal = '';
                    // Account for nested properties like 'state.name'
                    if (prop.indexOf('.') > -1) {
                        propVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, item);
                        if (propVal) {
                            propVal = propVal.toString().toUpperCase();
                        }
                    }
                    else {
                        if (item[prop]) {
                            propVal = item[prop].toString().toUpperCase();
                        }
                    }
                    if (propVal.indexOf(filterData) > -1) {
                        match = true;
                        break;
                    }
                }
                return match;
            });
            return filtered;
        }
        else {
            return datasource;
        }
    }
};
DataFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataFilterService);



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


// Using the new HttpClientModule now. If you're still on < Angular 4.3 see the
// data.service.ts file instead (simplify rename it to the name
// of this file to use it instead)




let DataService = class DataService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = '/api/customers';
        this.baseStatesUrl = '/api/states';
        this.baseProductUrl = '/api/products';
        this.baseCustomerOrderUrl = '/api/orders';
    }
    getCustomers() {
        return this.http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((customers) => {
            this.calculateCustomersOrderTotal(customers);
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCustomersPage(page, pageSize) {
        return this.http.get(`${this.baseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            // Need to observe response in order to get to this header (see {observe: 'response'} above)
            const totalRecords = +res.headers.get('x-inlinecount');
            const customers = res.body;
            this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCustomer(id) {
        return this.http.get(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    insertCustomer(customer) {
        return this.http.post(this.baseUrl, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('insertCustomer status: ' + data.status);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateCustomer(customer) {
        return this.http.put(this.baseUrl + '/' + customer._id, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('updateCustomer status: ' + data.status);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteCustomer(id) {
        return this.http.delete(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getStates() {
        return this.http.get(this.baseStatesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Get list of all products, modify product, add product, and delete a product
    getProducts() {
        return this.http.get(this.baseProductUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => {
            return products;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getProduct(id) {
        return this.http.get(this.baseProductUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateProduct(product) {
        return this.http.put(this.baseProductUrl + '/' + product._id, product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('Updating Product ' + data.status);
            return data.product;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    insertProduct(product) {
        return this.http.post(this.baseProductUrl, product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('Inserting Product ' + data.status);
            this.router.navigate(['/welcome']);
            return data.product;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteProduct(id) {
        return this.http.delete(this.baseProductUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // will catch all the errors returned by any REST function and return it to the user
    calculateCustomersOrderTotal(customers) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    }
    getCustomerOrders() {
        return this.http.get(this.baseCustomerOrderUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((customerList) => {
            return customerList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getNewCustomer(id) {
        return this.http.get(this.baseCustomerOrderUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Contact list insert new customer order
    insertNewCustomer(customer) {
        return this.http.post(this.baseCustomerOrderUrl, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('Inserting new Customer ' + data.status);
            this.router.navigate(['/welcome']);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteNewCustomer(id) {
        return this.http.delete(this.baseCustomerOrderUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // handles errors
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error || 'Node.js server error');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./src/app/core/message.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/message.service.ts ***!
  \*****************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this._messages = [];
        this.isDisplayed = false;
    }
    get messages() {
        return this._messages;
    }
    addMessage(message) {
        const currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/core/sorter.ts":
/*!********************************!*\
  !*** ./src/app/core/sorter.ts ***!
  \********************************/
/*! exports provided: Sorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorter", function() { return Sorter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



let Sorter = class Sorter {
    constructor() {
        this.property = null;
        this.direction = 1;
    }
    sort(collection, prop) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort((a, b) => {
            let aVal;
            let bVal;
            // Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, a);
                bVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            // Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal)) {
                aVal = aVal.trim().toUpperCase();
            }
            if (this.isString(bVal)) {
                bVal = bVal.trim().toUpperCase();
            }
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
    isString(val) {
        return (val && (typeof val === 'string' || val instanceof String));
    }
};
Sorter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Sorter);



/***/ }),

/***/ "./src/app/core/trackby.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/trackby.service.ts ***!
  \*****************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrackByService = class TrackByService {
    customer(index, customer) {
        return customer._id;
    }
    product(index, product) {
        return product._id;
    }
};
TrackByService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TrackByService);



/***/ }),

/***/ "./src/app/customers/customer-edit-reactive.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/customers/customer-edit-reactive.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerEditReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditReactiveComponent", function() { return CustomerEditReactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/validation.service */ "./src/app/shared/validation.service.ts");






let CustomerEditReactiveComponent = class CustomerEditReactiveComponent {
    constructor(router, route, dataService, formBuilder) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
        this.buildForm();
    }
    getCustomer(id) {
        this.dataService.getCustomer(id)
            .subscribe((customer) => {
            this.customer = customer;
            this.buildForm();
        }, (err) => console.log(err));
    }
    buildForm() {
        this.customerForm = this.formBuilder.group({
            firstName: [this.customer.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [this.customer.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: [this.customer.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.customer.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _shared_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            address: [this.customer.address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: [this.customer.city, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stateId: [this.customer.stateId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    getStates() {
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    submit({ value, valid }) {
        value._id = this.customer._id;
        value.zip = this.customer.zip || 0;
        // var customer: ICustomer = {
        //   _id: this.customer._id,
        // };
        if (value._id) {
            this.dataService.updateCustomer(value)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to save customer';
                }
            }, (err) => console.log(err));
        }
        else {
            this.dataService.insertCustomer(value)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to add customer';
                }
            }, (err) => console.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        this.router.navigate(['/customers']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer._id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customers']);
            }
            else {
                this.errorMessage = 'Unable to delete customer';
            }
        }, (err) => console.log(err));
    }
};
CustomerEditReactiveComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CustomerEditReactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-edit-reactive',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit-reactive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html")).default
    })
], CustomerEditReactiveComponent);



/***/ }),

/***/ "./src/app/customers/customer-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/customer-edit.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");




let CustomerEditComponent = class CustomerEditComponent {
    constructor(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
    }
    getCustomer(id) {
        this.dataService.getCustomer(id)
            .subscribe((customer) => {
            this.customer = customer;
        }, (err) => console.log(err));
    }
    getStates() {
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    submit() {
        if (this.customer._id) {
            this.dataService.updateCustomer(this.customer)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to save customer';
                }
            }, (err) => console.log(err));
        }
        else {
            this.dataService.insertCustomer(this.customer)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to add customer';
                }
            }, (err) => console.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        this.router.navigate(['/customers']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer._id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customers']);
            }
            else {
                this.errorMessage = 'Unable to delete customer';
            }
        }, (err) => console.log(err));
    }
};
CustomerEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
CustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html")).default
    })
], CustomerEditComponent);



/***/ }),

/***/ "./src/app/customers/customers-grid.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-grid.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGridComponent", function() { return CustomersGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/trackby.service */ "./src/app/core/trackby.service.ts");




let CustomersGridComponent = class CustomersGridComponent {
    constructor(sorter, trackby) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.customers = [];
    }
    ngOnInit() {
    }
    sort(prop) {
        this.sorter.sort(this.customers, prop);
    }
};
CustomersGridComponent.ctorParameters = () => [
    { type: _core_sorter__WEBPACK_IMPORTED_MODULE_2__["Sorter"] },
    { type: _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomersGridComponent.prototype, "customers", void 0);
CustomersGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html")).default,
        // When using OnPush detectors, then the framework will check an OnPush
        // component when any of its input properties changes, when it fires
        // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], CustomersGridComponent);



/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");





let CustomersComponent = class CustomersComponent {
    constructor(router, dataService, dataFilter) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.customers = [];
        this.filteredCustomers = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    ngOnInit() {
        this.title = 'Customers';
        this.getCustomersPage(1);
    }
    filterChanged(filterText) {
        if (filterText && this.customers) {
            const props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
            this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    }
    pageChanged(page) {
        this.getCustomersPage(page);
    }
    getCustomersPage(page) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response) => {
            this.customers = this.filteredCustomers = response.results;
            this.totalRecords = response.totalRecords;
        }, (err) => console.log(err), () => console.log('getCustomersPage() retrieved customers'));
    }
};
CustomersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__["DataFilterService"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/message.service */ "./src/app/core/message.service.ts");




let MessageComponent = class MessageComponent {
    constructor(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    get messages() {
        return this.messageService.messages;
    }
    close() {
        this.router.navigate([{ outlet: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }
};
MessageComponent.ctorParameters = () => [
    { type: _core_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default,
        styles: [".message-row { margin-bottom: 10px }"]
    })
], MessageComponent);



/***/ }),

/***/ "./src/app/modal/index.ts":
/*!********************************!*\
  !*** ./src/app/modal/index.ts ***!
  \********************************/
/*! exports provided: ModalModule, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.module */ "./src/app/modal/modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_1__["ModalModule"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]; });






/***/ }),

/***/ "./src/app/modal/modal.component.less":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.less ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21vZGFsL0Q6L0FuZ3VsYXIvQW5ndWxhckNMSS1Nb25nb0RCIC0gQ3VzdG9tZXJzL3NyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0NBQ2dDO0FDQ2hDO0VEQ0UsaUNBQWlDO0VDQy9CLGFBQUE7QURDSjtBQ0hBO0VES0UsOENBQThDO0VDQ3hDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VEQ04scURBQXFEO0VDRS9DLGFBQUE7RURBTixzQ0FBc0M7RUNHaEMsY0FBQTtBRERSO0FDZkE7RUFtQlksYUFBQTtFQUNBLGdCQUFBO0VERFYsZ0RBQWdEO0VDSXRDLFlBQUE7QURGWjtBQ3JCQTtFRHVCRSwrQ0FBK0M7RUNNekMsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RURKTiw0QkFBNEI7RUNPdEIsc0JBQUE7RUFDQSxhQUFBO0VETE4sK0RBQStEO0VDUXpELFlBQUE7QUROUjtBQ1VBO0VEUkUsNkVBQTZFO0VDVTNFLGdCQUFBO0FEUkoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbC9tb2RhbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PREFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5qdy1tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbCB7XG4gIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gIG92ZXJmbG93OiBhdXRvO1xufVxuanctbW9kYWwgLmp3LW1vZGFsIC5qdy1tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICBtYXJnaW46IDQwcHg7XG59XG5qdy1tb2RhbCAuanctbW9kYWwtYmFja2dyb3VuZCB7XG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiA5MDA7XG59XG5ib2R5Lmp3LW1vZGFsLW9wZW4ge1xuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi8qIE1PREFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5qdy1tb2RhbCB7XG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAuanctbW9kYWwge1xuICAgICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgXG4gICAgICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICAuanctbW9kYWwtYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgICAgICAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICAgICAgICAgICAgbWFyZ2luOiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAgICAgICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgXG4gICAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuanctbW9kYWwgYW5kIGFib3ZlIGV2ZXJ5dGhpbmcgZWxzZSAgKi9cbiAgICAgICAgei1pbmRleDogOTAwO1xuICAgIH1cbn1cblxuYm9keS5qdy1tb2RhbC1vcGVuIHtcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal/modal.service.ts");



let ModalComponent = class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
};
ModalComponent.ctorParameters = () => [
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "id", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jw-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.less */ "./src/app/modal/modal.component.less")).default]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/modal/modal.module.ts":
/*!***************************************!*\
  !*** ./src/app/modal/modal.module.ts ***!
  \***************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/modal/modal.component.ts");




let ModalModule = class ModalModule {
};
ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]]
    })
], ModalModule);



/***/ }),

/***/ "./src/app/modal/modal.service.ts":
/*!****************************************!*\
  !*** ./src/app/modal/modal.service.ts ***!
  \****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalService = class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
};
ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ModalService);



/***/ }),

/***/ "./src/app/products/product-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-edit.component.ts ***!
  \****************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");





let ProductEditComponent = class ProductEditComponent {
    constructor(router, route, dataService, authService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.authService = authService;
        this.product = {
            productCovering: '',
            productDimensions: '',
            productServings: 0,
            productName: '',
            category: '',
            description: '',
            imageUrl: ''
        };
        this.operationText = 'Insert';
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        if (id !== '0') {
            if (this.isLoggedIn) {
                console.log('Id ' + id);
                this.operationText = 'Update';
            }
            else {
                this.operationText = 'Order This';
            }
            this.getProduct(id);
        }
    }
    getProduct(id) {
        this.dataService.getProduct(id)
            .subscribe((product) => {
            this.product = product;
        }, (err) => console.log(err));
    }
    submit() {
        if (this.product._id) {
            this.dataService.updateProduct(this.product)
                .subscribe((product) => {
                if (product) {
                    this.router.navigate(['/products']);
                }
                else {
                    this.errorMessage = 'Unable to save product';
                }
            }, (err) => console.log(err));
        }
        else {
            this.dataService.insertProduct(this.product)
                .subscribe((product) => {
                if (product) {
                    console.log('Product was added');
                    this.router.navigate(['/products']);
                }
                else {
                    this.errorMessage = 'Unable to add product';
                }
            }, (err) => console.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        this.router.navigate(['/products']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteProduct(this.product._id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/products']);
            }
            else {
                this.errorMessage = 'Unable to delete product';
            }
        }, (err) => console.log(err));
    }
    addOrder() {
        if (this.product._id) {
            this.router.navigate(['/contactus-order/' + this.product._id]);
        }
        else {
            this.errorMessage = 'Unable to select this item';
        }
    }
};
ProductEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-edit.component.html")).default
    })
], ProductEditComponent);



/***/ }),

/***/ "./src/app/products/products-grid.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-grid.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsGridComponent", function() { return ProductsGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/trackby.service */ "./src/app/core/trackby.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");





let ProductsGridComponent = class ProductsGridComponent {
    constructor(sorter, trackby, authService) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.authService = authService;
        this.images = 4;
        this.products = [];
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
    ngOnInit() {
    }
    sort(prop) {
        this.sorter.sort(this.products, prop);
    }
};
ProductsGridComponent.ctorParameters = () => [
    { type: _core_sorter__WEBPACK_IMPORTED_MODULE_2__["Sorter"] },
    { type: _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsGridComponent.prototype, "images", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsGridComponent.prototype, "products", void 0);
ProductsGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-grid.component.html")).default,
        // When using OnPush detectors, then the framework will check an OnPush
        // component when any of its input properties changes, when it fires
        // an event, or when an observable fires an event
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], ProductsGridComponent);



/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");






let ProductsComponent = class ProductsComponent {
    constructor(router, dataService, dataFilter, authService) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.authService = authService;
        this.products = [];
        this.images = [];
        this.filteredProducts = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
    ngOnInit() {
        this.title = 'Products';
        this.getProducts();
        this.displayImages();
    }
    filterChanged(filterText) {
        console.log('The product data' + this.products);
        if (filterText && this.products) {
            const props = ['productName', 'description', 'dimensions', 'servings', 'covering', 'category'];
            this.filteredProducts = this.dataFilter.filter(this.products, props, filterText);
        }
        else {
            this.filteredProducts = this.products;
        }
    }
    pageChanged(page) {
        this.getProducts();
    }
    getProducts() {
        this.dataService.getProducts()
            .subscribe((response) => {
            this.products = this.filteredProducts = response;
            console.log('Logging products' + this.products);
        }, (err) => console.log(err), () => console.log('getProduct() retrieved products'));
    }
    displayImages() {
        for (let i = 1; i < this.products.length; i++) {
            if (i % 4 === 1 && i !== 1) {
            }
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__["DataFilterService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/shared/ensureModuleLoadedOnceGuard.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/ensureModuleLoadedOnceGuard.ts ***!
  \*******************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterTextboxComponent = class FilterTextboxComponent {
    constructor() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    filterChanged(event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); // Raise changed event
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterTextboxComponent.prototype, "changed", void 0);
FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-textbox',
        template: `
    <form>
    <div class="text-filter">
         Search:&nbsp;
         <input type="text" name="filter" id="ip2"
                [(ngModel)]="model.filter"
                (keyup)="filterChanged($event)"  />
    </div>
    </form>
  `
    })
], FilterTextboxComponent);



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {\n  background-color: #027FF4;\n  border-color: #027FF4;\n}\n\n.pagination a {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN0ZGNDtcbiAgYm9yZGVyLWNvbG9yOiAjMDI3RkY0O1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get pageSize() {
        return this.pagerPageSize;
    }
    set pageSize(size) {
        this.pagerPageSize = size;
        this.update();
    }
    get totalItems() {
        return this.pagerTotalItems;
    }
    set totalItems(itemCount) {
        this.pagerTotalItems = itemCount;
        this.update();
    }
    ngOnInit() {
    }
    update() {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    }
    previousNext(direction, event) {
        let page = this.currentPage;
        if (direction === -1) {
            if (page > 1) {
                page--;
            }
        }
        else {
            if (page < this.totalPages) {
                page++;
            }
        }
        this.changePage(page, event);
    }
    changePage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page) {
            return;
        }
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "pageSize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "totalItems", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.css */ "./src/app/shared/pagination/pagination.component.css")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CapitalizePipe = class CapitalizePipe {
    transform(value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
};
CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);



/***/ }),

/***/ "./src/app/shared/pipes/trim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrimPipe = class TrimPipe {
    transform(value) {
        if (!value) {
            return '';
        }
        return value.trim();
    }
};
TrimPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'trim' })
], TrimPipe);



/***/ }),

/***/ "./src/app/shared/property-resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/property-resolver.ts ***!
  \*********************************************/
/*! exports provided: propertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyResolver", function() { return propertyResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class propertyResolver {
    static resolve(path, obj) {
        return path.split('.').reduce((prev, curr) => {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    }
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
/* harmony import */ var _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/validation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/validation.service.ts ***!
  \**********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ValidationService {
    static getValidatorErrorMessage(code) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
}


/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'Log In';
    }
    login(loginForm) {
        if (loginForm && loginForm.valid) {
            const userName = loginForm.form.value.userName;
            const password = loginForm.form.value.password;
            this.authService.login(userName, password);
            // Navigate to the Url selected or Product List page after log in.
            if (this.authService.redirectUrl) {
                this.router.navigateByUrl(this.authService.redirectUrl);
            }
            else {
                this.router.navigate(['/products']);
            }
        }
        else {
            this.errorMessage = 'Please enter a user name and password.';
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal */ "./src/app/modal/index.ts");



let WelcomeComponent = class WelcomeComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.pageTitle = 'Welcome to the world of flavour and design';
    }
    ngOnInit() {
        this.bodytext = '+961 76 809 138';
    }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id) {
        this.modalService.close(id);
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default
    })
], WelcomeComponent);



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! D:\Angular\AngularCLI-MongoDB - Customers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map