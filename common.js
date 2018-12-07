(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/public/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/public/services/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(httpClient) {
        this.httpClient = httpClient;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = { headers: this.header, withCredentials: true, params: null };
    }
    /**
      * get请求 （获取数据）
      * @param url 接口地址
      * @param params 参数
      * @returns {Promise<R>|Promise<U>} 返回
      */
    HttpService.prototype.get = function (url, params) {
        var _this = this;
        this.options.params = params;
        return this.httpClient.get(url, this.options)
            .toPromise()
            .then(this.handleSuccess)
            .catch(function (res) { return _this.handleError(res); });
    };
    /**
      * post请求 （添加数据）
      * @param url 接口地址
      * @param params 参数
      * @returns {Promise<R>|Promise<U>} 返回
      */
    HttpService.prototype.post = function (url, params) {
        var _this = this;
        return this.httpClient.post(url, params, this.options)
            .toPromise()
            .then(this.handleSuccess)
            .catch(function (res) { return _this.handleError(res); });
    };
    /**
      * delete请求 （删除数据）
      * @param url 接口地址
      * @param params 参数
      * @returns {Promise<R>|Promise<U>} 返回
      */
    HttpService.prototype.delete = function (url, params) {
        var _this = this;
        // this.options.params = params;
        return this.httpClient.delete(url, this.options)
            .toPromise()
            .then(this.handleSuccess)
            .catch(function (res) { return _this.handleError(res); });
    };
    /**
      * put请求 （更新数据）
      * @param url 接口地址
      * @param params 参数
      * @returns {Promise<R>|Promise<U>} 返回
      */
    HttpService.prototype.put = function (url, params) {
        var _this = this;
        return this.httpClient.put(url, params, this.options)
            .toPromise()
            .then(this.handleSuccess)
            .catch(function (res) { return _this.handleError(res); });
    };
    /**
      * 处理请求成功
      * @param res 参数（成功结果）
      * @returns {{data: (string|null|((node:any)=>any) 返回
       */
    HttpService.prototype.handleSuccess = function (res) {
        return res;
    };
    /**
      * 处理请求错误
      * @param error 参数（失败结果）
      * @returns {void|Promise<string>|Promise<T>|any} 返回
      */
    HttpService.prototype.handleError = function (error) {
        var msg = '请求失败';
        if (error.status === 400) {
            console.log('请求参数正确');
        }
        if (error.status === 404) {
            console.error('请检查路径是否正确');
        }
        if (error.status === 500) {
            console.error('请求的服务器错误');
        }
        return { success: false, msg: msg };
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map