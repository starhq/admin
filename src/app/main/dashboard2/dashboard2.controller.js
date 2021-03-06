/* global Chart */
(function() {
    'use strict';

    angular
        .module('admin')
        .controller('Dashboard2Controller', RegistController);

    /** @ngInject */
    function RegistController() {

        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function(opacity) {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
        };

        function generateSalesChart() {
            var salesChartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Electronics",
                    data: [65, 59, 80, 81, 56, 55, 40]
                }, {
                    label: "Digital Goods",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }]
            };

            angular.forEach(salesChartData.datasets, function(dataset) {
                var color = randomColor(0.4);
                dataset.borderColor = color;
                dataset.backgroundColor = color;
                dataset.pointBorderColor = color;
                dataset.pointBackgroundColor = color;
                dataset.pointBorderWidth = 1;
            });

            var config = {
                responsive: true,
                tooltips: {
                    mode: 'label'
                },
                legend: {
                    display: false
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    xAxes: [{
                        // gridLines: {
                        //     display: false
                        // },
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        // gridLines: {
                        //     display: false
                        // },
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'value'
                        }
                    }]
                }
            };

            var ctx = angular.element('#salesChart').get(0).getContext("2d");

            new Chart(ctx, {
                type: 'line',
                data: salesChartData,
                options: config
            });
        }

        generateSalesChart();


        function fillMap() {
            angular.element('#world-map-markers').vectorMap({
                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                backgroundColor: 'transparent',
                regionStyle: {
                    initial: {
                        fill: 'rgba(210, 214, 222, 1)',
                        "fill-opacity": 1,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": 0.7,
                        cursor: 'pointer'
                    },
                    selected: {
                        fill: 'yellow'
                    },
                    selectedHover: {}
                },
                markerStyle: {
                    initial: {
                        fill: '#00a65a',
                        stroke: '#111'
                    }
                },
                markers: [
                    { latLng: [41.90, 12.45], name: 'Vatican City' },
                    { latLng: [43.73, 7.41], name: 'Monaco' },
                    { latLng: [-0.52, 166.93], name: 'Nauru' },
                    { latLng: [-8.51, 179.21], name: 'Tuvalu' },
                    { latLng: [43.93, 12.46], name: 'San Marino' },
                    { latLng: [47.14, 9.52], name: 'Liechtenstein' },
                    { latLng: [7.11, 171.06], name: 'Marshall Islands' },
                    { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
                    { latLng: [3.2, 73.22], name: 'Maldives' },
                    { latLng: [35.88, 14.5], name: 'Malta' },
                    { latLng: [12.05, -61.75], name: 'Grenada' },
                    { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
                    { latLng: [13.16, -59.55], name: 'Barbados' },
                    { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
                    { latLng: [-4.61, 55.45], name: 'Seychelles' },
                    { latLng: [7.35, 134.46], name: 'Palau' },
                    { latLng: [42.5, 1.51], name: 'Andorra' },
                    { latLng: [14.01, -60.98], name: 'Saint Lucia' },
                    { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
                    { latLng: [1.3, 103.8], name: 'Singapore' },
                    { latLng: [1.46, 173.03], name: 'Kiribati' },
                    { latLng: [-21.13, -175.2], name: 'Tonga' },
                    { latLng: [15.3, -61.38], name: 'Dominica' },
                    { latLng: [-20.2, 57.5], name: 'Mauritius' },
                    { latLng: [26.02, 50.55], name: 'Bahrain' },
                    { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' }
                ]
            });
        }

        fillMap();

        function initSpark() {
            angular.forEach(angular.element('.sparkbar'), function(bar) {
                var ele = angular.element(bar);
                ele.sparkline('html', {
                    type: 'bar',
                    height: ele.data('height') ? ele.data('height') : '30',
                    barColor: ele.data('color')
                });
            });

        }

        initSpark();

        function fillBar() {
            var data = {

                labels: ["Chrome", "IE", "FireFox", "Safari", "Opera", "Navigator"],
                datasets: [{
                    data: [700, 500, 400, 600, 300, 100],
                    backgroundColor: ["#f56954", "#00a65a", "#f39c12", "#00c0ef", "#3c8dbc", "#d2d6de"],
                    hoverBackgroundColor: ["#f56954", "#00a65a", "#f39c12", "#00c0ef", "#3c8dbc", "#d2d6de"]
                }]
            };

            var options = {
                legend: {
                    display: false
                }
            };

            var ctx = angular.element('#pieChart').get(0).getContext("2d");

            new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: options
            });
        }

        fillBar();
    }
})();
