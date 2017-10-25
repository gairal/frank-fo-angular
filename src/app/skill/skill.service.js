(function () {
  'use strict';
  angular.module('@@appName')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('skill', {
          parent: 'root',
          url: '/skill',
          data: {
            roles: [],
            pageTitle: 'skill.title'
          },
          views: {
            'content@': {
              templateUrl: 'app/skill/skill.html',
              controller: 'SkillController'
            }
          }
        });
    }])
    .factory('Skill', ['conf', '$resource',
      function (conf, $resource) {
        return $resource(conf.API.BASEURL + conf.API.SKILL.path + '/:skillId', { skillId: '@id' });
      }]);
})();
