(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('url'), require('rxjs'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@auth0/angular-jwt', ['exports', '@angular/core', 'rxjs/operators', 'url', 'rxjs', '@angular/common/http'], factory) :
    (global = global || self, factory((global.auth0 = global.auth0 || {}, global.auth0['angular-jwt'] = {}), global.ng.core, global.rxjs.operators, global.url, global.rxjs, global.ng.common.http));
}(this, (function (exports, core, operators, url, rxjs, http) { 'use strict';

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
        };
        return __assign.apply(this, arguments);
    };

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

    var JWT_OPTIONS = new core.InjectionToken('JWT_OPTIONS');

    // tslint:disable:no-bitwise
    var JwtHelperService = /** @class */ (function () {
        function JwtHelperService(config) {
            if (config === void 0) { config = null; }
            this.tokenGetter = config && config.tokenGetter || function () { };
        }
        JwtHelperService.prototype.urlBase64Decode = function (str) {
            var output = str.replace(/-/g, '+').replace(/_/g, '/');
            switch (output.length % 4) {
                case 0: {
                    break;
                }
                case 2: {
                    output += '==';
                    break;
                }
                case 3: {
                    output += '=';
                    break;
                }
                default: {
                    throw new Error('Illegal base64url string!');
                }
            }
            return this.b64DecodeUnicode(output);
        };
        // credits for decoder goes to https://github.com/atk
        JwtHelperService.prototype.b64decode = function (str) {
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var output = '';
            str = String(str).replace(/=+$/, '');
            if (str.length % 4 === 1) {
                throw new Error('\'atob\' failed: The string to be decoded is not correctly encoded.');
            }
            for (
            // initialize result and counters
            var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
            // get next character
            (buffer = str.charAt(idx++)); 
            // character found in table? initialize bit storage and add its ascii value;
            ~buffer &&
                ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                    // and if not first of each 4 characters,
                    // convert the first 8 bits to one ascii character
                    bc++ % 4)
                ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
                : 0) {
                // try to find character in table (0-63, not found => -1)
                buffer = chars.indexOf(buffer);
            }
            return output;
        };
        JwtHelperService.prototype.b64DecodeUnicode = function (str) {
            return decodeURIComponent(Array.prototype.map
                .call(this.b64decode(str), function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
                .join(''));
        };
        JwtHelperService.prototype.decodeToken = function (token) {
            if (token === void 0) { token = this.tokenGetter(); }
            if (!token || token === '') {
                return null;
            }
            var parts = token.split('.');
            if (parts.length !== 3) {
                throw new Error('The inspected token doesn\'t appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.');
            }
            var decoded = this.urlBase64Decode(parts[1]);
            if (!decoded) {
                throw new Error('Cannot decode the token.');
            }
            return JSON.parse(decoded);
        };
        JwtHelperService.prototype.getTokenExpirationDate = function (token) {
            if (token === void 0) { token = this.tokenGetter(); }
            var decoded;
            decoded = this.decodeToken(token);
            if (!decoded || !decoded.hasOwnProperty('exp')) {
                return null;
            }
            var date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date;
        };
        JwtHelperService.prototype.isTokenExpired = function (token, offsetSeconds) {
            if (token === void 0) { token = this.tokenGetter(); }
            if (!token || token === '') {
                return true;
            }
            var date = this.getTokenExpirationDate(token);
            offsetSeconds = offsetSeconds || 0;
            if (date === null) {
                return false;
            }
            return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
        };
        JwtHelperService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [JWT_OPTIONS,] }] }
        ]; };
        JwtHelperService = __decorate([
            core.Injectable(),
            __param(0, core.Inject(JWT_OPTIONS)),
            __metadata("design:paramtypes", [Object])
        ], JwtHelperService);
        return JwtHelperService;
    }());

    var JwtInterceptor = /** @class */ (function () {
        function JwtInterceptor(config, jwtHelper) {
            this.jwtHelper = jwtHelper;
            this.tokenGetter = config.tokenGetter;
            this.headerName = config.headerName || 'Authorization';
            this.authScheme =
                config.authScheme || config.authScheme === ''
                    ? config.authScheme
                    : 'Bearer ';
            this.whitelistedDomains = config.whitelistedDomains || [];
            this.blacklistedRoutes = config.blacklistedRoutes || [];
            this.throwNoTokenError = config.throwNoTokenError || false;
            this.skipWhenExpired = config.skipWhenExpired;
        }
        JwtInterceptor.prototype.isWhitelistedDomain = function (request) {
            var requestUrl = url.parse(request.url, false, true);
            return (requestUrl.host === null ||
                this.whitelistedDomains.findIndex(function (domain) {
                    return typeof domain === 'string'
                        ? domain === requestUrl.host
                        : domain instanceof RegExp
                            ? domain.test(requestUrl.host)
                            : false;
                }) > -1);
        };
        JwtInterceptor.prototype.isBlacklistedRoute = function (request) {
            var url = request.url;
            return (this.blacklistedRoutes.findIndex(function (route) {
                return typeof route === 'string'
                    ? route === url
                    : route instanceof RegExp
                        ? route.test(url)
                        : false;
            }) > -1);
        };
        JwtInterceptor.prototype.handleInterception = function (token, request, next) {
            var _a;
            var tokenIsExpired = false;
            if (!token && this.throwNoTokenError) {
                throw new Error('Could not get token from tokenGetter function.');
            }
            if (this.skipWhenExpired) {
                tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
            }
            if (token && tokenIsExpired && this.skipWhenExpired) {
                request = request.clone();
            }
            else if (token) {
                request = request.clone({
                    setHeaders: (_a = {},
                        _a[this.headerName] = "" + this.authScheme + token,
                        _a)
                });
            }
            return next.handle(request);
        };
        JwtInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            if (!this.isWhitelistedDomain(request) ||
                this.isBlacklistedRoute(request)) {
                return next.handle(request);
            }
            var token = this.tokenGetter(request);
            if (token instanceof Promise) {
                return rxjs.from(token).pipe(operators.mergeMap(function (asyncToken) {
                    return _this.handleInterception(asyncToken, request, next);
                }));
            }
            else {
                return this.handleInterception(token, request, next);
            }
        };
        JwtInterceptor.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [JWT_OPTIONS,] }] },
            { type: JwtHelperService }
        ]; };
        JwtInterceptor = __decorate([
            core.Injectable(),
            __param(0, core.Inject(JWT_OPTIONS)),
            __metadata("design:paramtypes", [Object, JwtHelperService])
        ], JwtInterceptor);
        return JwtInterceptor;
    }());

    var JwtModule = /** @class */ (function () {
        function JwtModule(parentModule) {
            if (parentModule) {
                throw new Error('JwtModule is already loaded. It should only be imported in your application\'s main module.');
            }
        }
        JwtModule_1 = JwtModule;
        JwtModule.forRoot = function (options) {
            return {
                ngModule: JwtModule_1,
                providers: [
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: JwtInterceptor,
                        multi: true
                    },
                    options.jwtOptionsProvider ||
                        {
                            provide: JWT_OPTIONS,
                            useValue: options.config
                        },
                    JwtHelperService
                ]
            };
        };
        var JwtModule_1;
        JwtModule.ctorParameters = function () { return [
            { type: JwtModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        JwtModule = JwtModule_1 = __decorate([
            core.NgModule(),
            __param(0, core.Optional()), __param(0, core.SkipSelf()),
            __metadata("design:paramtypes", [JwtModule])
        ], JwtModule);
        return JwtModule;
    }());

    exports.JWT_OPTIONS = JWT_OPTIONS;
    exports.JwtHelperService = JwtHelperService;
    exports.JwtInterceptor = JwtInterceptor;
    exports.JwtModule = JwtModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=auth0-angular-jwt.umd.js.map
