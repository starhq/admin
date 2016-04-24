(function() {
    'use strict';

    angular
        .module('admin')
        .controller('Dashboard1Controller', DashBoardController);

    /** @ngInject */
    function DashBoardController($scope) {

        var vm = this;

        $scope.$watch('vm.activeTabDate', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                console.log('--' + newValue);
            }
        });


        function initSortable() {
            angular.element(".connectedSortable").sortable({
                placeholder: "sort-highlight",
                connectWith: ".connectedSortable",
                handle: ".box-header, .nav-tabs",
                forcePlaceholderSize: true,
                zIndex: 999999
            });
            angular.element(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
        }

        initSortable();
    }
})();
