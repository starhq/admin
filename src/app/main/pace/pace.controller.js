(function() {
    'use strict';

    angular
        .module('admin')
        .controller('PaceController', PaceController);

    /** @ngInject */
    function PaceController() {

        Pace.restart();

    }
})();
