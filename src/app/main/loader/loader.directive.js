(function() {
    'use strict';

    angular.module('@@appName')
        .directive('fkLoader', function() {
            return {
                restrict: 'E',
                replace: true,
                template: '<section layout>' +
                    '<div flex></div>' +
                    '<md-progress-circular md-mode="indeterminate" class="md-primary"></md-progress-circular>' +
                    '<div flex></div>' +
                '</section>'
            };
        });
})();