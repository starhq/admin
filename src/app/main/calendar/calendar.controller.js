/* global $ */
(function() {
    'use strict';

    angular
        .module('admin')
        .controller('CalendarController', CalendarController);

    /** @ngInject */
    function CalendarController() {

        function ini_events(elements) {
            angular.forEach(elements, function(element) {
                var ele = angular.element(element);
                var eventObject = {
                    title: $.trim(ele.text())
                };

                ele.data('eventObject', eventObject);

                ele.draggable({
                    zIndex: 1070,
                    revert: true,
                    revertDuration: 0
                });
            })
        }

        ini_events(angular.element('#external-events div.external-event'));

        function ini_calendar() {
            var date = new Date();
            var d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear();
            angular.element('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                buttonText: {
                    today: 'today',
                    month: 'month',
                    week: 'week',
                    day: 'day'
                },
                events: [{
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    backgroundColor: "#f56954", //red
                    borderColor: "#f56954" //red
                }, {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    backgroundColor: "#f39c12", //yellow
                    borderColor: "#f39c12" //yellow
                }, {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    backgroundColor: "#0073b7", //Blue
                    borderColor: "#0073b7" //Blue
                }, {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    backgroundColor: "#00c0ef", //Info (aqua)
                    borderColor: "#00c0ef" //Info (aqua)
                }, {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    backgroundColor: "#00a65a", //Success (green)
                    borderColor: "#00a65a" //Success (green)
                }, {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/',
                    backgroundColor: "#3c8dbc", //Primary (light-blue)
                    borderColor: "#3c8dbc" //Primary (light-blue)
                }],
                editable: true,
                droppable: true,
                drop: function(date, allDay) {
                    var evt = angular.element(this);

                    var originalEventObject = evt.data('eventObject');
                    var copiedEventObject = angular.copy(originalEventObject);
                    copiedEventObject.start = date;
                    copiedEventObject.allDay = allDay;
                    copiedEventObject.backgroundColor = evt.css("background-color");
                    copiedEventObject.borderColor = evt.css("border-color");
                    angular.element('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
                    if (angular.element('#drop-remove').is(':checked')) {
                        evt.remove();
                    }
                }
            });
        }

        ini_calendar();


        function add_event() {
            var currColor = "#3c8dbc";
            var colorChooser = angular.element("#color-chooser-btn");
            angular.element("#color-chooser > li > a").click(function(e) {
                e.preventDefault();
                //Save color
                currColor = angular.element(this).css("color");
                //Add color effect to button
                angular.element('#add-new-event').css({ "background-color": currColor, "border-color": currColor });
            });
            angular.element("#add-new-event").click(function(e) {
                e.preventDefault();
                //Get value and make sure it is not null
                var val = angular.element("#new-event").val();
                if (val.length == 0) {
                    return;
                }

                //Create events
                var event = angular.element("<div />");
                event.css({ "background-color": currColor, "border-color": currColor, "color": "#fff" }).addClass("external-event");
                event.html(val);
                angular.element('#external-events').prepend(event);

                //Add draggable funtionality
                ini_events(event);

                //Remove event from text input
                angular.element("#new-event").val("");
            });
        }

        add_event();
    }
})();
