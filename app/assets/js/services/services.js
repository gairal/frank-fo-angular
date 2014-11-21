/* Services */

angular.module('Gairal.services', [])
  .factory('gairalAPIservice', function($http) {
    'use strict';
    var gairalAPI = {};

    gairalAPI.getMessage = function(message) {
      return $http({
        method: 'JSONP',
        url: 'http://echo.jsontest.com/message/' + message + '?callback=JSON_CALLBACK'
      });
    };

    return gairalAPI;
  });
