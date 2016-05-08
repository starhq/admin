(function() {
    'use strict';

    angular
        .module('admin')
        .controller('FlotController', FlotController);

    /** @ngInject */
    function FlotController() {
        var vm = this;
        vm.update = function(data) {}

        vm.dataset = [{ data: [], yaxis: 1, label: 'sin' }];
        vm.options = {
            legend: {
                container: '#legend',
                show: true
            }
        };

        for (var i = 0; i < 14; i += 0.5) {
            vm.dataset[0].data.push([i, Math.sin(i)]);
        }
    }
})();
