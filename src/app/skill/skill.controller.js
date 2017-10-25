(function () {
  'use strict';
  angular.module('@@appName')
    .controller('SkillController', ['$scope', 'Skill',
      function ($scope, Skill) {
        var self = this;

        this.init = function () {
          $scope.categories = Skill.query();
        };

        self.init();
      }]);
})();
