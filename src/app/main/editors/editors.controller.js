/* global CKEDITOR */
(function() {
    'use strict';

    angular
        .module('admin')
        .controller('EditorsController', EditorsController);

    /** @ngInject */
    function EditorsController() {

        // var vm = this;

        CKEDITOR.replace('editor1');
        angular.element(".textarea").wysihtml5();

    }
})();
