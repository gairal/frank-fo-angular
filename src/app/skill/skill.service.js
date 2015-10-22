(function() {
    'use strict';
    angular.module('@@appName')
    .factory('Skill', ['$http', 'Gairal', function($http, Gairal) {
        var promise;

        return {
            get: function() {
                if(!promise) {
                    promise = Gairal.get('skillscat/?ordering=display_order');
                }
                return promise;
            }
        };
    }]);
})();
