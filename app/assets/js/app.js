// Declare app level module which depends on filters, and services
angular.module('Gairal', [
  'Gairal.controllers',
  'Gairal.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
    'use strict';
  $routeProvider.
    when('/hp', {templateUrl: 'partials/hp.html', controller: 'HeaderCtrl'}).
    when('/account', {templateUrl: 'partials/account.html', controller: 'HeaderCtrl'}).
    otherwise({redirectTo: '/hp'});
}]);
