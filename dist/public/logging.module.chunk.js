webpackJsonp(["logging.module"],{

/***/ "./src/app/logging/log-details/log-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logging/log-details/log-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    log-details works!\n</p>"

/***/ }),

/***/ "./src/app/logging/log-details/log-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LogDetailsComponent = /** @class */ (function () {
    function LogDetailsComponent(_Router) {
        this._Router = _Router;
    }
    LogDetailsComponent.prototype.ngOnInit = function () {
    };
    LogDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-log-details',
            template: __webpack_require__("./src/app/logging/log-details/log-details.component.html"),
            styles: [__webpack_require__("./src/app/logging/log-details/log-details.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LogDetailsComponent);
    return LogDetailsComponent;
}());
exports.LogDetailsComponent = LogDetailsComponent;


/***/ }),

/***/ "./src/app/logging/log-listing/log-listing.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 50px;\n}\n\nth {\n    cursor: pointer;\n}\n\n"

/***/ }),

/***/ "./src/app/logging/log-listing/log-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-3\">\n            <input #search type=\"text\" class=\"form-control\" placeholder=\"search for URLs or session ids\">\n        </div>\n        <div class=\"col-lg-1\">\n            <button class=\"btn btn-primary\" (click)=\"getLogs(search, page)\">search</button>\n        </div>\n        <div class=\"col-lg-2 offset-lg-6\">\n            <select #page class=\"form-control\" name=\"pageSize\" id=\"pageSize\">\n                <option value=\"5\">5</option>\n                <option value=\"10\">10</option>\n                <option value=\"20\">20</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row mtl\">\n        <div class=\"col-lg-12\">\n            <table class=\"table text-center\">\n                <thead>\n                    <tr>\n                        <th>Session Id</th>\n                        <th>Request</th>\n                        <th>Response</th>\n                        <th>URL</th>\n                        <th>Metadata</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let log of logs?.rows; let i = index\">\n                        <td>\n                            {{i + 1}}\n                            <button class=\"btn btn-link btn-sm\">(details)</button>\n                        </td>\n                        <td>\n                            <button class=\"btn btn-link\">request</button>\n                        </td>\n                        <td>\n                            <button class=\"btn btn-link\">response</button>\n                        </td>\n                        <td>\n                            {{log?.url}}\n                        </td>\n                        <td>\n                            <button class=\"btn btn-link\">metadata</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/logging/log-listing/log-listing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var filter_model_1 = __webpack_require__("./src/app/models/filter.model.ts");
var LogListingComponent = /** @class */ (function () {
    function LogListingComponent(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    LogListingComponent.prototype.ngOnInit = function () {
        this.filterGroup = new filter_model_1.FilterGroup();
    };
    LogListingComponent.prototype.getLogs = function (search, page) {
        var _this = this;
        this.filterGroup.size = page.value;
        this.filterGroup.search = {
            title: "Search",
            filters: [{
                    key: "url",
                    value: search.value.trim()
                }]
        };
        this._HttpClient.post('/api/logs/all', this.filterGroup)
            .toPromise()
            .then(function (response) {
            if (response.status) {
                _this.logs = response.data;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LogListingComponent = __decorate([
        core_1.Component({
            selector: 'app-log-listing',
            template: __webpack_require__("./src/app/logging/log-listing/log-listing.component.html"),
            styles: [__webpack_require__("./src/app/logging/log-listing/log-listing.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LogListingComponent);
    return LogListingComponent;
}());
exports.LogListingComponent = LogListingComponent;


/***/ }),

/***/ "./src/app/logging/logging.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var logs_routing_module_1 = __webpack_require__("./src/app/logging/logs-routing.module.ts");
var log_listing_component_1 = __webpack_require__("./src/app/logging/log-listing/log-listing.component.ts");
var log_details_component_1 = __webpack_require__("./src/app/logging/log-details/log-details.component.ts");
var LoggingModule = /** @class */ (function () {
    function LoggingModule() {
    }
    LoggingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forChild(logs_routing_module_1.routes)
            ],
            declarations: [
                log_listing_component_1.LogListingComponent,
                log_details_component_1.LogDetailsComponent
            ],
            bootstrap: [
                log_listing_component_1.LogListingComponent
            ]
        })
    ], LoggingModule);
    return LoggingModule;
}());
exports.LoggingModule = LoggingModule;


/***/ }),

/***/ "./src/app/logging/logs-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_listing_component_1 = __webpack_require__("./src/app/logging/log-listing/log-listing.component.ts");
exports.routes = [{
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }, {
        path: 'list',
        component: log_listing_component_1.LogListingComponent
    }, {
        path: 'details',
        component: log_listing_component_1.LogListingComponent
    }, {
        path: 'request',
        component: log_listing_component_1.LogListingComponent
    }, {
        path: 'response',
        component: log_listing_component_1.LogListingComponent
    }, {
        path: 'metadata',
        component: log_listing_component_1.LogListingComponent
    }];


/***/ }),

/***/ "./src/app/models/filter.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Search = /** @class */ (function () {
    function Search() {
    }
    return Search;
}());
exports.Search = Search;
var Range = /** @class */ (function () {
    function Range() {
    }
    return Range;
}());
exports.Range = Range;
var Select = /** @class */ (function () {
    function Select() {
    }
    return Select;
}());
exports.Select = Select;
var Filter = /** @class */ (function () {
    function Filter() {
    }
    return Filter;
}());
exports.Filter = Filter;
var SelectFilter = /** @class */ (function (_super) {
    __extends(SelectFilter, _super);
    function SelectFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SelectFilter;
}(Filter));
exports.SelectFilter = SelectFilter;
var FilterGroup = /** @class */ (function () {
    function FilterGroup() {
        this.page = 1;
        this.size = 20;
        this.orderType = "asc";
    }
    FilterGroup.reset = function (filterGroup) {
        filterGroup.search.filters.forEach(function (filter) {
            filter.value = "";
        });
        filterGroup.range.filters.forEach(function (filter) {
            filter.min = null;
            filter.max = null;
        });
        filterGroup.select.forEach(function (selectFilter) {
            selectFilter.filters.forEach(function (filter) {
                filter.value = false;
            });
        });
    };
    FilterGroup.isEmpty = function (filterGroup) {
        if (!filterGroup) {
            return true;
        }
        var isEmpty = true;
        isEmpty = isEmpty && (!filterGroup.search ||
            !filterGroup.search.filters ||
            filterGroup.search.filters.every(function (filter) {
                return !filter.value;
            }));
        isEmpty = isEmpty && (!filterGroup.range ||
            !filterGroup.range.filters ||
            filterGroup.range.filters.every(function (filter) {
                return !filter.min && !filter.max;
            }));
        if (filterGroup.select) {
            filterGroup.select.forEach(function (select) {
                isEmpty = isEmpty && (select.filters.every(function (filter) {
                    return !filter.value;
                }));
            });
        }
        return isEmpty;
    };
    return FilterGroup;
}());
exports.FilterGroup = FilterGroup;


/***/ })

});
//# sourceMappingURL=logging.module.chunk.js.map