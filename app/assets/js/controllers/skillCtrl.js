(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('SkillCtrl', ['$scope', 'skillService',function( $scope, skillService) {
            $scope.categories = [];
        
            skillService.get().then(function(data) {
              $scope.categories = data;
            }, function() {
              $scope.error = 'Error retrieving skills';
            });
      }]);
})();