(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('educationService', ['$http', 'gairalService', function($http, gairalService) {
        var promise;

        return {
            get: function() {
                if(!promise) {
                    promise = gairalService.get('educations');
                }
                return promise;
            }
        };
    }]);
})();
