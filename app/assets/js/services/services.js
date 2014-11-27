(function() {
    'use strict';
    angular.module('Gairal.services')
    .factory('gairalAPIservice', ['$q', '$http', 'HostConfig', function($q, $http, HostConfig) {
        var gairalAPI = {},
            format = '/.json',
            _deferred = $q.defer();

        function get(path) {
            $http.get(HostConfig.API_URL + '/' + path + format)
                .success(function(data, status, headers, config) {
                    _deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    _deferred.reject('error');
                });

            return _deferred.promise;
        }

        gairalAPI.getExperiences = function(scope) {
            var experiences = get('experiences');

            experiences.then(function(data) {
              scope.experiences = data;
            }, function() {
              scope.error = 'Error retrieving experiences';
            });
        };

        gairalAPI.getSkills = function(scope) {
            var skills = get('categories');

            skills.then(function(data) {
              scope.categories = data;
            }, function() {
              scope.error = 'Error retrieving skills';
            });
        };

        gairalAPI.getEducations = function(scope) {
            var educations = get('educations');

            educations.then(function(data) {
              scope.educations = data;
            }, function() {
              scope.error = 'Error retrieving educations';
            });
        };

        gairalAPI.getInterests = function(scope) {
            var interests = get('categories');

            interests.then(function(data) {
              scope.categories = data;
            }, function() {
              scope.error = 'Error retrieving interests';
            });
        };

        gairalAPI.getTravels = function(scope) {
            var travels = get('travels');

            travels.then(function(data) {
              scope.travels = data;
            }, function() {
              scope.error = 'Error retrieving travels';
            });
        };

        return gairalAPI;
    }]);
})();
