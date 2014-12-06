(function() {
    'use strict';
    angular.module('Gairal', [
        'Gairal.config',
        'Gairal.services',
        'Gairal.controllers',
        'Gairal.directives',
        'Gairal.filters',
        'ngRoute',
        'ui.bootstrap',
        'angular-loading-bar', 
        'ngAnimate'
    ]);
    angular.module('Gairal.services', []);
    angular.module('Gairal.controllers', []);
    angular.module('Gairal.directives', []);
    angular.module('Gairal.filters', []);

    angular.module('Gairal').
        config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/experience', {templateUrl: 'partials/experience.html', controller: 'ExperienceCtrl'}).
                when('/skill', {templateUrl: 'partials/skill.html', controller: 'SkillCtrl'}).
                when('/education', {templateUrl: 'partials/education.html', controller: 'EducationCtrl'}).
                when('/interest', {templateUrl: 'partials/interest.html', controller: 'InterestCtrl'}).
                otherwise({redirectTo: '/experience'});
        }]);
})();
