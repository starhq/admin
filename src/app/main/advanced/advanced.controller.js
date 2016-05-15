(function() {
    'use strict';

    angular
        .module('admin')
        .controller('AdvancedController', AdvancedController);

    /** @ngInject */
    function AdvancedController() {

        // var vm = this;
        angular.element(".select2").select2();


    }
})();
