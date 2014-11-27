(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('skillService', ['$http', 'gairalService', function($http, gairalService) {
        var promise;

        return {
            get: function() {
                if(!promise) {
                    promise = gairalService.get('categories');
                }
                return promise;
            }
        };
    }]);
})();
