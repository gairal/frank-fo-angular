(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('travelService', ['$http', 'gairalService', function($http, gairalService) {
        var promise;

        return {
            get: function() {
                if(!promise) {
                    promise = gairalService.get('travels');
                }
                return promise;
            }
        };
    }]);
})();
