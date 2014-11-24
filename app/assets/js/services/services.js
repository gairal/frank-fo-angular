(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('gairalAPIservice', ['$http', 'HostConfig', function($http, HostConfig) {
        var gairalAPI = {},
            format = '/.json';

        gairalAPI.get = function(path) {
            return $http({
                url: HostConfig.API_URL + '/' + path + format
            });
        };

        gairalAPI.getExperiences = function() {
            return $http({
                url: HostConfig.API_URL + '/experiences' + format
            });
        };

        gairalAPI.getSkills = function() {
            return gairalAPI.get('categories');
        };

        return gairalAPI;
    }]);
})();
