(function() {
    'use strict';

    angular
        .module('admin')
        .controller('MailboxController', MailboxController);

    /** @ngInject */
    function MailboxController() {

        // var vm = this;
        angular.element('.mailbox-messages input[type="checkbox"]').iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'iradio_flat-blue'
        });

        angular.forEach(angular.element(".checkbox-toggle"), function(element) {
            var ele = angular.element(element);
            ele.click(function() {
                var clicks = ele.data('clicks');
                if (clicks) {
                    angular.element(".mailbox-messages input[type='checkbox']").iCheck("uncheck");
                    angular.element(".fa", ele).removeClass("fa-check-square-o").addClass('fa-square-o');
                } else {
                    angular.element(".mailbox-messages input[type='checkbox']").iCheck("check");
                    angular.element(".fa", ele).removeClass("fa-square-o").addClass('fa-check-square-o');
                }
                ele.data("clicks", !clicks);
            });
        });

        angular.forEach(angular.element(".mailbox-star"), function(element) {
            var ele = angular.element(element);
            ele.click(function(e) {
                e.preventDefault();
                //detect type
                var $this = ele.find("a > i");
                var glyph = $this.hasClass("glyphicon");
                var fa = $this.hasClass("fa");

                //Switch states
                if (glyph) {
                    $this.toggleClass("glyphicon-star");
                    $this.toggleClass("glyphicon-star-empty");
                }

                if (fa) {
                    $this.toggleClass("fa-star");
                    $this.toggleClass("fa-star-o");
                }
            });
        });
    }
})();
