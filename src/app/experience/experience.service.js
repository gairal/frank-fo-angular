(function () {
  'use strict';
  angular.module('@@appName')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('experience', {
          parent: 'root',
          url: '/experience',
          data: {
            roles: [],
            pageTitle: 'experience.title'
          },
          views: {
            'content@': {
              templateUrl: 'app/experience/experience.html',
              controller: 'ExperienceController'
            }
          }
        });
    }])
    .factory('Experience', ['conf', '$resource',
      function (conf, $resource) {
        return $resource(conf.API.BASEURL + conf.API.EXPERIENCE.path + '/:expId', { expId: '@id' });
      }]);
})();
