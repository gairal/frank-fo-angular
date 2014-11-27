(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('gairalService', ['$q', '$http', 'HostConfig', function($q, $http, HostConfig) {
        var gairalAPI = {};

        gairalAPI.get = function(path) {
            var _deferred = $q.defer();
            $http.get(HostConfig.API_URL + '/' + path + '/.json')
                .success(function(data, status, headers, config) {
                    _deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    _deferred.reject('error');
                });

            return _deferred.promise;
        };

        gairalAPI.getEducations = function(scope) {
            var educations = gairalAPI.get('educations');

            educations.then(function(data) {
              scope.educations = data;
            }, function() {
              scope.error = 'Error retrieving educations';
            });
        };

        gairalAPI.getInterests = function(scope, q) {
            var interests = gairalAPI.get('categories', $q.defer());

            interests.then(function(data) {
              scope.categories = data;
            }, function() {
              scope.error = 'Error retrieving interests';
            });
        };

        gairalAPI.getTravels = function(scope) {
            var travels = gairalAPI.get('travels');

            travels.then(function(data) {
              scope.travels = data;
            }, function() {
              scope.error = 'Error retrieving travels';
            });
        };

        return gairalAPI;
    }]);
})();
