(function() {
    'use strict';

    angular
        .module('admin')
        .controller('MorrisController', MorrisController);

    /** @ngInject */
    function MorrisController() {
        var vm = this;

        var data = [
            { y: '2011 Q1', item1: 2666, item2: 2666 },
            { y: '2011 Q2', item1: 2778, item2: 2294 },
            { y: '2011 Q3', item1: 4912, item2: 1969 },
            { y: '2011 Q4', item1: 3767, item2: 3597 },
            { y: '2012 Q1', item1: 6810, item2: 1914 },
            { y: '2012 Q2', item1: 5670, item2: 4293 },
            { y: '2012 Q3', item1: 4820, item2: 3795 },
            { y: '2012 Q4', item1: 15073, item2: 5967 },
            { y: '2013 Q1', item1: 10687, item2: 4460 },
            { y: '2013 Q2', item1: 8432, item2: 5713 }
        ];

        vm.area = data;

        var donut = [
            { label: "Download Sales", value: 12 },
            { label: "In-Store Sales", value: 30 },
            { label: "Mail-Order Sales", value: 20 }
        ];
        vm.donut = donut;

        var line = [
            { y: '2011 Q1', item1: 2666 },
            { y: '2011 Q2', item1: 2778 },
            { y: '2011 Q3', item1: 4912 },
            { y: '2011 Q4', item1: 3767 },
            { y: '2012 Q1', item1: 6810 },
            { y: '2012 Q2', item1: 5670 },
            { y: '2012 Q3', item1: 4820 },
            { y: '2012 Q4', item1: 15073 },
            { y: '2013 Q1', item1: 10687 },
            { y: '2013 Q2', item1: 8432 }
        ];

        vm.line = line;

        var bar = [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
        ];

        vm.bar = bar;
    };


})();
