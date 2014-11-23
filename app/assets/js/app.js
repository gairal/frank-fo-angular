// Declare app level module which depends on filters, and services
angular.module('Gairal', [
  'Gairal.config',
  'Gairal.services',
  'Gairal.controllers',
  'Gairal.directives',
  'Gairal.filters',
  'ngRoute',
  'ngMaterial'
]);
angular.module('Gairal.services', ['Gairal.config']);
angular.module('Gairal.controllers', ['ngMaterial']);
angular.module('Gairal.directives', []);
angular.module('Gairal.filters', []);

angular.module('Gairal').
config(['$routeProvider', function($routeProvider) {
    'use strict';
  /*$routeProvider.
    when('/experience', {templateUrl: 'partials/experience.html', controller: 'experienceCtrl'}).
    when('/skill', {templateUrl: 'partials/skill.html', controller: 'SkillCtrl'}).
    otherwise({redirectTo: '/experience'});*/
}]);
