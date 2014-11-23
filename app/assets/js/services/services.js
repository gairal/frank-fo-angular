(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('gairalAPIservice', ['$http', 'HostConfig', function($http, HostConfig) {
        var gairalAPI = {},
            format = '/.json';

        gairalAPI.getExperiences = function() {
            return $http({
                url: HostConfig.API_URL + '/experiences' + format
            });
        };

        gairalAPI.getSkills = function() {
            return $http({
                url: HostConfig.API_URL + '/categories' + format
            });
        };

        return gairalAPI;
    }]);
})();
