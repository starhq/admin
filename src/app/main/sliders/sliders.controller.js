(function() {
    'use strict';

    angular
        .module('admin')
        .controller('SlidersController', SlidersController);

    /** @ngInject */
    function SlidersController() {

        // var vm = this;

        // angular.element("#range_1").ionRangeSlider({
        //     min: 0,
        //     max: 5000,
        //     from: 1000,
        //     to: 4000,
        //     type: 'double',
        //     step: 1,
        //     prefix: "$",
        //     prettify: false,
        //     hasGrid: true
        // });
        // angular.element("#range_2").ionRangeSlider();

        // angular.element("#range_5").ionRangeSlider({
        //     min: 0,
        //     max: 10,
        //     type: 'single',
        //     step: 0.1,
        //     postfix: " mm",
        //     prettify: false,
        //     hasGrid: true
        // });
        // angular.element("#range_6").ionRangeSlider({
        //     min: -50,
        //     max: 50,
        //     from: 0,
        //     type: 'single',
        //     step: 1,
        //     postfix: "°",
        //     prettify: false,
        //     hasGrid: true
        // });

        // angular.element("#range_4").ionRangeSlider({
        //     type: "single",
        //     step: 100,
        //     postfix: " light years",
        //     from: 55000,
        //     hideMinMax: true,
        //     hideFromTo: false
        // });

        new Slider("#slider1", { id: "slider1c" });
    }
})();
