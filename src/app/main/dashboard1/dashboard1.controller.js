(function() {
    'use strict';

    angular
        .module('admin')
        .controller('Dashboard1Controller', DashBoardController);

    /** @ngInject */
    function DashBoardController() {

        var vm = this;
        vm.confirm = confirm;

        function initSortable() {
            angular.element(".todo-list").sortable({
                placeholder: "sort-highlight",
                handle: ".handle",
                forcePlaceholderSize: true,
                zIndex: 999999
            });

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
