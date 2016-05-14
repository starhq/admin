/* global $ */
(function() {
    'use strict';

    angular
        .module('admin')
        .controller('InlineController', InlineController);

    /** @ngInject */
    function InlineController($timeout) {

        angular.element(".knob").knob({
            draw: function() {
                var knob = this;
                if (knob.$.data('skin') == 'tron') {

                    var a = knob.angle(knob.cv),
                        sa = knob.startAngle,
                        sat = knob.startAngle,
                        ea, eat = sat + a,
                        r = true;

                    knob.g.lineWidth = knob.lineWidth;

                    knob.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

                    if (knob.o.displayPrevious) {
                        ea = knob.startAngle + knob.angle(knob.value);
                        knob.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                        knob.g.beginPath();
                        knob.g.strokeStyle = knob.previousColor;
                        knob.g.arc(knob.xy, knob.xy, knob.radius - knob.lineWidth, sa, ea, false);
                        knob.g.stroke();
                    }

                    knob.g.beginPath();
                    knob.g.strokeStyle = r ? knob.o.fgColor : knob.fgColor;
                    knob.g.arc(knob.xy, knob.xy, knob.radius - knob.lineWidth, sat, eat, false);
                    knob.g.stroke();

                    knob.g.lineWidth = 2;
                    knob.g.beginPath();
                    knob.g.strokeStyle = knob.o.fgColor;
                    knob.g.arc(knob.xy, knob.xy, knob.radius - knob.lineWidth + 1 + knob.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    knob.g.stroke();

                    return false;
                }
            }
        });




        angular.forEach(angular.element(".sparkline"), function(data) {
            var sparkline = angular.element(data);
            sparkline.sparkline('html', sparkline.data());
        })




        function drawDocSparklines() {

            // Bar + line composite charts
            angular.element('#compositebar').sparkline('html', { type: 'bar', barColor: '#aaf' });
            angular.element('#compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], { composite: true, fillColor: false, lineColor: 'red' });


            // Line charts taking their values from the tag
            angular.element('.sparkline-1').sparkline();

            // Larger line charts for the docs
            angular.element('.largeline').sparkline('html', { type: 'line', height: '2.5em', width: '4em' });

            // Customized line chart
            angular.element('#linecustom').sparkline('html', {
                height: '1.5em',
                width: '8em',
                lineColor: '#f00',
                fillColor: '#ffa',
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: '#77f',
                spotRadius: 3
            });

            // Bar charts using inline values
            angular.element('.sparkbar').sparkline('html', { type: 'bar' });

            angular.element('.barformat').sparkline([1, 3, 5, 3, 8], {
                type: 'bar',
                tooltipFormat: '{{value:levels}} - {{value}}',
                tooltipValueLookups: {
                    levels: $.range_map({ ':2': 'Low', '3:6': 'Medium', '7:': 'High' })
                }
            });

            // Tri-state charts using inline values
            angular.element('.sparktristate').sparkline('html', { type: 'tristate' });
            angular.element('.sparktristatecols').sparkline('html', { type: 'tristate', colorMap: { '-2': '#fa7', '2': '#44f' } });

            // Composite line charts, the second using values supplied via javascript
            angular.element('#compositeline').sparkline('html', { fillColor: false, changeRangeMin: 0, chartRangeMax: 10 });
            angular.element('#compositeline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], { composite: true, fillColor: false, lineColor: 'red', changeRangeMin: 0, chartRangeMax: 10 });

            // Line charts with normal range marker
            angular.element('#normalline').sparkline('html', { fillColor: false, normalRangeMin: -1, normalRangeMax: 8 });
            angular.element('#normalExample').sparkline('html', { fillColor: false, normalRangeMin: 80, normalRangeMax: 95, normalRangeColor: '#4f4' });

            // Discrete charts
            angular.element('.discrete1').sparkline('html', { type: 'discrete', lineColor: 'blue', xwidth: 18 });
            angular.element('#discrete2').sparkline('html', { type: 'discrete', lineColor: 'blue', thresholdColor: 'red', thresholdValue: 4 });

            // Bullet charts
            angular.element('.sparkbullet').sparkline('html', { type: 'bullet' });

            // Pie charts
            angular.element('.sparkpie').sparkline('html', { type: 'pie', height: '1.0em' });

            // Box plots
            angular.element('.sparkboxplot').sparkline('html', { type: 'box' });
            angular.element('.sparkboxplotraw').sparkline([1, 3, 5, 8, 10, 15, 18], { type: 'box', raw: true, showOutliers: true, target: 6 });

            // Box plot with specific field order
            angular.element('.boxfieldorder').sparkline('html', {
                type: 'box',
                tooltipFormatFieldlist: ['med', 'lq', 'uq'],
                tooltipFormatFieldlistKey: 'field'
            });

            // click event demo sparkline
            angular.element('.clickdemo').sparkline();
            angular.element('.clickdemo').bind('sparklineClick', function(ev) {
                var sparkline = ev.sparklines[0],
                    region = sparkline.getCurrentRegionFields();
                alert("Clicked on x=" + region.x + " y=" + region.y);
            });

            // mouseover event demo sparkline
            angular.element('.mouseoverdemo').sparkline();
            angular.element('.mouseoverdemo').bind('sparklineRegionChange', function(ev) {
                var sparkline = ev.sparklines[0],
                    region = sparkline.getCurrentRegionFields();
                angular.element('.mouseoverregion').text("x=" + region.x + " y=" + region.y);
            }).bind('mouseleave', function() {
                angular.element('.mouseoverregion').text('');
            });
        }

        /**
         ** Draw the little mouse speed animated graph
         ** This just attaches a handler to the mousemove event to see
         ** (roughly) how far the mouse has moved
         ** and then updates the display a couple of times a second via
         ** setTimeout()
         **/
        function drawMouseSpeedDemo() {
            var mrefreshinterval = 500; // update display every 500ms
            var lastmousex = -1;
            var lastmousey = -1;
            var lastmousetime;
            var mousetravel = 0;
            var mpoints = [];
            var mpoints_max = 30;
            angular.element('html').mousemove(function(e) {
                var mousex = e.pageX;
                var mousey = e.pageY;
                if (lastmousex > -1) {
                    mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
                }
                lastmousex = mousex;
                lastmousey = mousey;
            });
            var mdraw = function() {
                var md = new Date();
                var timenow = md.getTime();
                if (lastmousetime && lastmousetime != timenow) {
                    var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                    mpoints.push(pps);
                    if (mpoints.length > mpoints_max)
                        mpoints.splice(0, 1);
                    mousetravel = 0;
                    angular.element('#mousespeed').sparkline(mpoints, { width: mpoints.length * 2, tooltipSuffix: ' pixels per second' });
                }
                lastmousetime = timenow;
                $timeout(mdraw, mrefreshinterval);
            };
            // We could use setInterval instead, but I prefer to do it this way
            $timeout(mdraw, mrefreshinterval);
        }

        drawDocSparklines();
        drawMouseSpeedDemo();
    }
})();
