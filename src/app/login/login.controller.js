(function() {
    'use strict';

    angular
        .module('admin')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(appDialog, $location) {

        var vm = this;
        vm.login = login;

        function login() {
            // alert('hello');
            $location.path("/main");
        }

        function initIcheck() {
            angular.element('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
        }

        initIcheck();
    }
})();
