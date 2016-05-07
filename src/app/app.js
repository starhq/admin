(function() {
    'use strict';

    angular
        .module('admin', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ngDialog', 'angular.morris-chart']).config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            }).state('regist', {
                url: '/regist',
                templateUrl: 'app/regist/regist.html',
                controller: 'RegistController',
                controllerAs: 'regist'
            })
            .state('main', {
                abstract: true,
                url: '/main',
                templateUrl: 'app/main/main.html'
            }).state('main.index', {
                url: '',
                templateUrl: 'app/main/dashboard2/dashboard2.html',
                controller: 'Dashboard2Controller',
                controllerAs: 'dsahboard2',
                parent: 'main'
            }).state('main.dashboard2', {
                url: '/dashboard2',
                templateUrl: 'app/main/dashboard2/dashboard2.html',
                controller: 'Dashboard2Controller',
                controllerAs: 'dsahboard2',
                parent: 'main'
            }).state('main.dashboard1', {
                url: '/dashboard1',
                templateUrl: 'app/main/dashboard1/dashboard1.html',
                controller: 'Dashboard1Controller',
                controllerAs: 'dashboard1',
                parent: 'main'
            }).state('main.top', {
                url: '/top',
                templateUrl: 'app/main/top/top.html',
                controller: 'TopController',
                controllerAs: 'top',
                parent: 'main'
            }).state('main.boxed', {
                url: '/boxed',
                templateUrl: 'app/main/boxed/boxed.html',
                controller: 'BoxedController',
                controllerAs: 'boxed',
                parent: 'main'
            }).state('main.fixed', {
                url: '/fixed',
                templateUrl: 'app/main/fixed/fixed.html',
                controller: 'FixedController',
                controllerAs: 'fixed',
                parent: 'main'
            }).state('main.collapsed-sidebar', {
                url: '/collapsed-sidebar',
                templateUrl: 'app/main/collapsed-sidebar/collapsed-sidebar.html',
                controller: 'CollapsedSidebarController',
                controllerAs: 'collapsedsidebar',
                parent: 'main'
            });
        // .state('main', {
        //     url: '/main',
        //     views: {
        //         "": {
        //             templateUrl: 'app/main/main.html'
        //         },
        //         "header@main": {
        //             templateUrl: 'app/header/header.html',
        //             controller: 'HeaderController',
        //             controllerAs: 'header'
        //         },
        //         "left@main": {
        //             templateUrl: 'app/sidebar/sidebar.html',
        //             controller: 'SidebarController',
        //             controllerAs: 'sidebar'
        //         },
        //         "body@main": {
        //             templateUrl: 'app/content/content.html',
        //             controller: 'ContentController',
        //             controllerAs: 'content'
        //         }
        //     }
        // });

        $urlRouterProvider.otherwise('/');
    }

})();
