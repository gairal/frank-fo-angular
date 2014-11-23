(function() {
    'use strict';

    angular.module('Gairal.controllers')
      .controller('SkillCtrl', function( $scope, gairalAPIservice) {
          $scope.categories = '';

          gairalAPIservice.getSkills().success(function (response) {
              $scope.categories = response;
          });
        
      });
})();