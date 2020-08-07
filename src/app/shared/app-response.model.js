"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppResponse = (function () {
    function AppResponse(obj) {
        this.status = obj && obj.status || '';
        this.message = obj && obj.message || '';
        this.data = obj && obj.data || '';
        this.pageInfo = obj && obj.pageInfo || null;
    }
    AppResponse.prototype.toString = function () {
        return 'httpStatus: ' + this.httpStatus + ', status: ' + this.status + ', message: ' + this.message + ', data: ' + this.data;
    };
    AppResponse.prototype.setHttpStatus = function (httpStatus) {
        this.httpStatus = httpStatus;
    };
    AppResponse.prototype.getHttpStatus = function () {
        return this.httpStatus;
    };
    AppResponse.prototype.getStatus = function () {
        return this.status;
    };
    AppResponse.prototype.setStatus = function (status) {
        this.status = status;
    };
    AppResponse.prototype.getMessage = function () {
        return this.message;
    };
    AppResponse.prototype.setMessage = function (message) {
        this.message = message;
    };
    AppResponse.prototype.getData = function () {
        return this.data;
    };
    AppResponse.prototype.setData = function (data) {
        this.data = data;
    };
    AppResponse.prototype.getPageInfo = function () {
        return this.pageInfo;
    };
    AppResponse.prototype.setPageInfo = function (pageInfo) {
        this.pageInfo = pageInfo;
    };
    return AppResponse;
}());
exports.AppResponse = AppResponse;
