(function() {
    'use strict';

    angular
        .module('admin').factory('appDialog', function(ngDialog) {
            return {
                message: function(msg, config, callbackYES, callbackNO) {
                    var defaultConfig = {
                        OkBtnText: "确定",
                        CloseBtnText: "取消",
                        Title: "提示信息",
                        showOkBtn: true,
                        showCloseBtn: true,
                        className: "default"
                    };

                    var cfg = angular.extend(defaultConfig, config);
                    return ngDialog.open({
                        template: 'app/sysViews/dialog.html',
                        className: 'ngdialog-theme-flat',
                        controller: function($scope) {
                            $scope.config = cfg;
                            $scope.message = msg;
                            $scope.ngdgclose = function() {
                                ngDialog.close();
                            };
                            $scope.dgYesPress = function() {
                                if (angular.isFunction(callbackYES)) {
                                    callbackYES()
                                }
                                ngDialog.close();
                            };

                            $scope.dgNoPress = function() {
                                if (angular.isFunction(callbackNO)) {
                                    callbackNO()
                                }
                                ngDialog.close();
                            };
                        }
                    });
                },
                default: function(msg, callback) {
                    return this.message(msg, {
                        showCloseBtn: false
                    }, callback);
                },
                info: function(msg, callback) {
                    return this.message(msg, {
                        className: "info",
                        showCloseBtn: false
                    }, callback);
                },
                success: function(msg, callback) {
                    return this.message(msg, {
                        className: "success",
                        showCloseBtn: false
                    }, callback);
                },
                warning: function(msg, callback) {
                    return this.message(msg, {
                        className: "warning",
                        showCloseBtn: false
                    }, callback);
                },
                danger: function(msg, callback) {
                    return this.message(msg, {
                        className: "danger",
                        showCloseBtn: false
                    }, callback);
                },
                confirm: function(msg, yesCall, noCall) {
                    return this.message(msg, {
                        Title: "系统询问"
                    }, yesCall, noCall);
                },
                loading: function(msg) {
                    return ngDialog.open({
                        template: 'views/sysViews/dialog.loading.html',
                        controller: function($scope) {
                            $scope.message = msg || "请求中，请稍等...";
                        }
                    });
                },
                close: function() {
                    ngDialog.close();
                }
            };
        })


})();
