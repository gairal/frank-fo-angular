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

        return gairalAPI;
    }]);
})();
