(function() {
    'use strict';

    angular
        .module('admin', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ngDialog']).config(routerConfig);

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
                templateUrl: 'app/main/dashboard/dashboard2.html',
                controller: 'Dashboard2Controller',
                controllerAs: 'dsahboard2',
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
