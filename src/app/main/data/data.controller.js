(function() {
    'use strict';

    angular
        .module('admin')
        .controller('DataController', DataController);

    /** @ngInject */
    function DataController() {

        // var vm = this;
        angular.element('#example2').DataTable({
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false
        });

        angular.element('#example1').DataTable();


    }
})();
