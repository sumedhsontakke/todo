webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1>Angular Router</h1>\n  <nav>\n    <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Crisis Center</a>\n    <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n  </nav>-->\n  <div class=\"loading\"><img src=\"./assets/Rolling.svg\"></div>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        //alert();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/todo-app/todoList/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__("../../../../../src/pages/dashboard/dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_todo_list_todo_list__ = __webpack_require__("../../../../../src/pages/todo-list/todo-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_call_service__ = __webpack_require__("../../../../../src/providers/http-call-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database__ = __webpack_require__("../../../../../src/providers/database.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_variables__ = __webpack_require__("../../../../../src/providers/global-variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var appRoutes = [
    { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */] },
    { path: 'todo-list/:key', component: __WEBPACK_IMPORTED_MODULE_7__pages_todo_list_todo_list__["a" /* TodoListPage */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_todo_list_todo_list__["a" /* TodoListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__providers_http_call_service__["a" /* HttpCallService */],
                __WEBPACK_IMPORTED_MODULE_9__providers_database__["a" /* Database */],
                __WEBPACK_IMPORTED_MODULE_10__providers_global_variables__["a" /* GlobalVariables */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/todo-app/todoList/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/todo-app/todoList/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/todo-app/todoList/src/main.js.map

/***/ }),

/***/ "../../../../../src/pages/dashboard/dashboard.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\npage-dashboard {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/dashboard/dashboard.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n\n    <h3>User List</h3>\n  \n\n</header>\n\n\n<div class=\"container\" >\n  <div class=\"cards-container\" *ngFor = \"let obj of users\">\n    <div class=\"card\">\n      <div class=\"header\">\n        User Description\n      </div>\n      <div class=\"main-content desc-data\"> \n        <div>\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n          {{obj.name}}\n        </div>\n        <div>\n          <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n          {{obj.email}}\n        </div>\n        <div>\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n          {{obj.address.suite}}, {{ obj.address.street}}, {{obj.address.city}}, {{obj.address.zipcode}}\n        </div>\n        <div>\n          <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n          {{obj.phone}}\n        </div>\n        <div>\n          <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n          {{obj.website}}\n        </div> \n        <div>\n          <i class=\"fa fa-industry\" aria-hidden=\"true\"></i>\n          {{obj.company.name}}\n        </div>        \n        <div>\n        <button margin-top margin-bottom (click)=\"userSelect(obj)\"  ion-button>View Todos</button>  \n        </div>  \n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/pages/dashboard/dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__ = __webpack_require__("../../../../../src/providers/http-call-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_variables__ = __webpack_require__("../../../../../src/providers/global-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database__ = __webpack_require__("../../../../../src/providers/database.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(database, globalVariables, router, httpCallService) {
        this.database = database;
        this.globalVariables = globalVariables;
        this.router = router;
        this.httpCallService = httpCallService;
        this.loadData();
    }
    DashboardPage.prototype.ngOnInit = function () {
        //this.router.navigate(['/dashboard', 1]);
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.loadData = function () {
        var _this = this;
        this.httpCallService.postData("users", {}, "")
            .then(function (data) {
            _this.users = data;
        }, function (err) {
        });
    };
    DashboardPage.prototype.userSelect = function (data) {
        console.log(data);
        //set object in global variables
        this.router.navigate(['/todo-list', data.id]);
        this.globalVariables.passedData.next(data);
        //    this.navCtrl.push(TodoListPage, { "obj": data });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/pages/dashboard/dashboard.html"),
            styles: [__webpack_require__("../../../../../src/pages/dashboard/dashboard.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_database__["a" /* Database */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__providers_database__["a" /* Database */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_global_variables__["a" /* GlobalVariables */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__providers_global_variables__["a" /* GlobalVariables */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__["a" /* HttpCallService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__["a" /* HttpCallService */]) === 'function' && _d) || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/todo-app/todoList/src/dashboard.js.map

/***/ }),

/***/ "../../../../../src/pages/todo-list/todo-list.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n\n    <h3>todoList</h3>\n\n</header>\n\n\n<div class=\"container\" padding *ngIf=\"todoList\">\n  <div class=\"cards-container\" *ngFor=\"let value of todoList\">\n  <div class=\"card\" >\n      <div class=\"header\">\n       Todo\n      </div>\n\n    <div class=\"main-content desc-data\"> \n      <div>\n        Title: {{value.title}}\n      </div>\n      <div>\n       \n        <div class=\"border\">\n            <label>Complete Status</label>\n            <input type=\"checkbox\" color=\"dark\" [checked]=\"value.completed\" [(ngModel)]=\"value.completed\" (click)=\"updateDb(todoList)\">\n          </div>        \n      </div>\n\n    </div>\n    </div>\n  </div>\n</div>\n\n<footer>\n            <div>\n                \n                <input placeholder=\"Create new todo\" type=\"text\" [(ngModel)]=\"add\" value=\"\">\n\n          <button ion-button icon-only (click)=\"addNewTodo()\" [disabled]='add == \"\"'>\n              +\n            </button>\n            </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/pages/todo-list/todo-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_variables__ = __webpack_require__("../../../../../src/providers/global-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__ = __webpack_require__("../../../../../src/providers/http-call-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database__ = __webpack_require__("../../../../../src/providers/database.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoListPage = (function () {
    function TodoListPage(activatedRoute, globalVariables, database, httpCallService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.globalVariables = globalVariables;
        this.database = database;
        this.httpCallService = httpCallService;
        this.todoList = [];
        this.add = "";
        this.activatedRoute.params.subscribe(function (params) {
            var key = params['key'];
            _this.key = key;
            console.log(key);
            _this.ajaxloadData(key);
        });
        //    this.loadData(this.item.id);
    }
    TodoListPage.prototype.ajaxloadData = function (key) {
        var _this = this;
        this.httpCallService.postData("users", {}, "")
            .then(function (data) {
            console.log(data);
            for (var i = 0; i < data['length']; i++) {
                if (data[i].id == key) {
                    _this.item = data[i];
                    console.log(_this.item);
                    _this.loadData(_this.item.id);
                }
            }
        }, function (err) {
        });
    };
    TodoListPage.prototype.addNewTodo = function () {
        console.log("data", this.add);
        //get last obj
        var value = "todo=" + this.add + "&userId=" + this.key;
        //select db
        this.httpCallService.postData("todos/XXX", value, "")
            .then(function (data) {
            alert("Added Successfully");
        }, function (err) {
            alert("Added Successfully");
        });
        this.add = "";
    };
    TodoListPage.prototype.loadData = function (id) {
        var _this = this;
        this.httpCallService.postData("todos", {}, "")
            .then(function (data) {
            console.log("server data", data);
            _this.todoList = [];
            for (var i = 0; i < data["length"]; i++) {
                if (data[i]['userId'] == id) {
                    //push server data in local db
                    _this.todoList.push(data[i]);
                }
            }
            console.log(_this.todoList);
        }, function (err) {
        });
        //get todo list by user
        //select db
    };
    TodoListPage.prototype.updateDb = function (value) {
        console.log(value);
        var data = "todo=" + value + "&userId=" + this.key;
        this.httpCallService.postData("todos/XXX", data, "")
            .then(function (data) {
            alert("updated Successfully");
        }, function (err) {
            alert("Updated Successfully");
        });
    };
    TodoListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoListPage');
    };
    TodoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'page-todo-list',
            template: __webpack_require__("../../../../../src/pages/todo-list/todo-list.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_global_variables__["a" /* GlobalVariables */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_global_variables__["a" /* GlobalVariables */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_database__["a" /* Database */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__providers_database__["a" /* Database */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__["a" /* HttpCallService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__["a" /* HttpCallService */]) === 'function' && _d) || Object])
    ], TodoListPage);
    return TodoListPage;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/todo-app/todoList/src/todo-list.js.map

/***/ }),

/***/ "../../../../../src/providers/database.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_call_service__ = __webpack_require__("../../../../../src/providers/http-call-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var Database = (function () {
    function Database(http, httpCallService) {
        var _this = this;
        this.http = http;
        this.httpCallService = httpCallService;
        console.log('Hello Userdb Provider');
        //this.db = new PouchDB("user");
        //check if user todo list is already there
        //select db
        this.userdb();
        this.getAll().then(function (data) {
            console.log("data found", data);
            if (data['total_rows'] == 0) {
                _this.httpCallService.postData("todos", {}, "")
                    .then(function (data) {
                    console.log("server data", data);
                    //push server data in local db
                    _this.insert({ data: data });
                }, function (err) {
                });
            }
        }, function (err) {
            console.log("data not found");
        });
    }
    Database.prototype.userdb = function () {
        this.db = __webpack_require__("../../../../pouchdb/lib/index-browser.es.js");
    };
    Database.prototype.getWhere = function (doc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Inserting Document
            _this.db.get(doc, function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("inserted");
                }
            });
        });
    };
    Database.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Inserting Document
            _this.db.allDocs({
                include_docs: true,
                attachments: true
            }).then(function (result) {
                resolve(result);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    Database.prototype.insert = function (doc) {
        var _this = this;
        doc._id = (new Date().valueOf()).toString();
        return new Promise(function (resolve, reject) {
            //Inserting Document
            _this.db.put(doc, function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("inserted");
                }
            });
        });
    };
    //doc is unique _id and datatoupdate is object
    Database.prototype.update = function (doc, datatoupdate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var self = _this;
            _this.db.get(doc).then(function (value) {
                datatoupdate._rev = value._rev;
                return self.db.put(datatoupdate);
            }).then(function (response) {
                resolve(response);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    Database.prototype.delete = function () {
        var db = this.db;
        return new Promise(function (resolve, reject) {
            db.allDocs().then(function (result) {
                // Promise isn't supported by all browsers; you may want to use bluebird
                return Promise.all(result.rows.map(function (row) {
                    return db.remove(row.id, row.value.rev);
                }));
            }).then(function () {
                resolve(true);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    Database.prototype.deleteDoc = function (mydoc) {
        var db = this.db;
        return new Promise(function (resolve, reject) {
            db.get(mydoc).then(function (doc) {
                return db.remove(doc);
            }).then(function (result) {
                resolve(true);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    Database = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_http_call_service__["a" /* HttpCallService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__providers_http_call_service__["a" /* HttpCallService */]) === 'function' && _b) || Object])
    ], Database);
    return Database;
    var _a, _b;
}());
//# sourceMappingURL=D:/todo-app/todoList/src/database.js.map

/***/ }),

/***/ "../../../../../src/providers/global-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
Generated class for the HttpCallService provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
*/
var GlobalVariables = (function () {
    function GlobalVariables(http) {
        this.http = http;
        this.passedData = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */]();
        // console.log('Hello HttpCallService Provider');
        this.passedData.subscribe(function (next) {
            console.log(next);
        });
        //console.log(this.passedData);
        //this.passedData.next("data---------------");
    }
    GlobalVariables = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], GlobalVariables);
    return GlobalVariables;
    var _a;
}());
//# sourceMappingURL=D:/todo-app/todoList/src/global-variables.js.map

/***/ }),

/***/ "../../../../../src/providers/http-call-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
Generated class for the HttpCallService provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
*/
var HttpCallService = (function () {
    function HttpCallService(http) {
        // console.log('Hello HttpCallService Provider');
        this.http = http;
        this.baseUrl = "http://vahano.hurix.com";
        //public baseUrl = "http://172.18.14.169/vahano";
        this.sessionValue = "";
    }
    HttpCallService.prototype.init = function () {
    };
    HttpCallService.prototype.postData = function (credentials, type, headers) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            //console.log(JSON.stringify(credentials));
            //this.http.post(type, JSON.stringify(credentials), {headers: headers})
            var createdUrl;
            console.log(type);
            if (type != "") {
                createdUrl = "https://jsonplaceholder.typicode.com/" + credentials + "?" + type;
            }
            else {
                createdUrl = "https://jsonplaceholder.typicode.com/" + credentials;
            }
            _this.http.get(createdUrl)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpCallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], HttpCallService);
    return HttpCallService;
    var _a;
}());
//# sourceMappingURL=D:/todo-app/todoList/src/http-call-service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map