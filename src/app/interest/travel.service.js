(function() {
    'use strict';
    angular.module('@@appName')
    .factory('Travel', ['$http', 'Gairal', function($http, Gairal) {
        var promise;

        return {
            get: function() {
                if(!promise) {
                    promise = Gairal.get('travels');
                }
                return promise;
            }
        };
    }]);
})();
