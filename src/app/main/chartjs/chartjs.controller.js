(function() {
    'use strict';

    angular
        .module('admin')
        .controller('CharJSController', CharJSController);

    /** @ngInject */
    function CharJSController() {

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
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'value'
                        }
                    }]
                }
            };

            var ctx = angular.element('#areaChart').get(0).getContext("2d");

            new Chart(ctx, {
                type: 'line',
                data: salesChartData,
                options: config
            });

        }

        generateSalesChart();

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

        function generateLineChart() {
            var salesChartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Electronics",
                    fill: false,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }, {
                    label: "Digital Goods",
                    fill: false,
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
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'value'
                        }
                    }]
                }
            };

            var ctx = angular.element('#lineChart').get(0).getContext("2d");

            new Chart(ctx, {
                type: 'line',
                data: salesChartData,
                options: config
            });

        }

        generateLineChart();

        function generateBarChart() {
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
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'value'
                        }
                    }]
                }
            };

            var ctx = angular.element('#barChart').get(0).getContext("2d");

            new Chart(ctx, {
                type: 'bar',
                data: salesChartData,
                options: config
            });

        }

        generateBarChart();
    }
})();
