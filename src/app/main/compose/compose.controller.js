(function() {
    'use strict';

    angular
        .module('admin')
        .controller('ComposeController', ComposeController);

    /** @ngInject */
    function ComposeController() {

        angular.element("#compose-textarea").wysihtml5();
    }
})();
