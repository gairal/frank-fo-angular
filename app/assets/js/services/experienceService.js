(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('experienceService', ['$http', 'gairalService', function($http, gairalService) {
        var promise;

        return {
            get: function() {
                if(!promise) {
                    promise = gairalService.get('experiences');
                }
                return promise;
            }
        };
    }]);
})();
