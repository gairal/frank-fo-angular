(function() {
    'use strict';
  angular.module('Gairal.services')
    .factory('gairalAPIservice', ['$http', 'HostConfig', function($http, HostConfig) {
      var gairalAPI = {};

      gairalAPI.getSkills = function() {
        return $http({
          url: HostConfig.API_URL + '/skills/?format=json'
        });
      };

      return gairalAPI;
    }]);
})();
