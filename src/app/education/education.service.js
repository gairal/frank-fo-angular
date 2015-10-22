(function() {
    'use strict';
    angular.module('@@appName')
    .factory('Education', ['$http', 'Gairal', function($http, Gairal) {
        var promise;

        return {
            get: function() {
                if(!promise) {
                    promise = Gairal.get('educations');
                }
                return promise;
            }
        };
    }]);
})();
