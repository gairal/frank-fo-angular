(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('interestService', ['$http', 'gairalService', function($http, gairalService) {
        var promise;

        return {
            get: function() {
                if(!promise) {
                    promise = gairalService.get('interestscat/?ordering=display_order');
                }
                return promise;
            }
        };
    }]);
})();
