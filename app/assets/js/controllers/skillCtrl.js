(function() {
    'use strict';

    angular.module('Gairal.controllers')
      .controller('SkillCtrl', function( $scope, gairalAPIservice) {
          $scope.skills = '';

          gairalAPIservice.getSkills().success(function (response) {
              $scope.skills = response;
          });
        
      });
})();