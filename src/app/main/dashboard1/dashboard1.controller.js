/* global moment */
(function() {
    'use strict';

    angular
        .module('admin')
        .controller('Dashboard1Controller', DashBoardController);

    /** @ngInject */
    function DashBoardController($timeout) {

        var vm = this;
        vm.confirm = confirm;

        vm.data = [
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

        function init() {

            //sort todo-list
            angular.element(".todo-list").sortable({
                placeholder: "sort-highlight",
                handle: ".handle",
                forcePlaceholderSize: true,
                zIndex: 999999
            });

            //sort container
            angular.element(".connectedSortable").sortable({
                placeholder: "sort-highlight",
                connectWith: ".connectedSortable",
                handle: ".box-header, .nav-tabs",
                forcePlaceholderSize: true,
                zIndex: 999999
            });
            angular.element(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

            //rich text editor
            angular.element(".textarea").wysihtml5();

            //map data
            var visitorsData = {
                "US": 398, //USA
                "SA": 400, //Saudi Arabia
                "CA": 1000, //Canada
                "DE": 500, //Germany
                "FR": 760, //France
                "CN": 300, //China
                "AU": 700, //Australia
                "BR": 600, //Brazil
                "IN": 800, //India
                "GB": 320, //Great Britain
                "RU": 3000 //Russia
            };

            // map
            angular.element('#world-map').vectorMap({
                map: 'world_mill_en',
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: '#e4e4e4',
                        "fill-opacity": 1,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    }
                },
                series: {
                    regions: [{
                        values: visitorsData,
                        scale: ["#92c1dc", "#ebf4f9"],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onRegionLabelShow: function(e, el, code) {
                    if (typeof visitorsData[code] != "undefined")
                        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
                }
            });

            //Sparkline charts
            var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
            angular.element('#sparkline-1').sparkline(myvalues, {
                type: 'line',
                lineColor: '#92c1dc',
                fillColor: "#ebf4f9",
                height: '50',
                width: '80'
            });
            myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
            angular.element('#sparkline-2').sparkline(myvalues, {
                type: 'line',
                lineColor: '#92c1dc',
                fillColor: "#ebf4f9",
                height: '50',
                width: '80'
            });
            myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
            angular.element('#sparkline-3').sparkline(myvalues, {
                type: 'line',
                lineColor: '#92c1dc',
                fillColor: "#ebf4f9",
                height: '50',
                width: '80'
            });

            //  date range select
            angular.element('.daterange').daterangepicker({
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                startDate: moment().subtract(29, 'days'),
                endDate: moment()
            }, function(start, end) {
                start.format('MMMM D, YYYY');
                end.format('MMMM D, YYYY');
            });

            // knob
            angular.element(".knob").knob();

            // calendar
            angular.element("#calendar").datepicker();

        }



        init();

        $timeout(
            function() {

                angular.element('#chat-box').slimScroll({
                    height: '250px'
                });

            },
            1000
        );


    }
})();
