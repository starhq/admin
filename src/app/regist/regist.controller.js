(function() {
    'use strict';

    angular
        .module('admin')
        .controller('RegistController', RegistController);

    /** @ngInject */
    function RegistController(appDialog) {

        var vm = this;
        vm.login = login;

        function login() {
            // alert('hello');
            appDialog.danger('登陆成功');
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
