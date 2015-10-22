(function() {
    'use strict';
    angular.module('@@appName')
      .controller('SkillController', ['$scope', 'Skill',function( $scope, Skill) {
            $scope.categories = [];
        
            Skill.get().then(function(data) {
              $scope.categories = data;
            }, function() {
              $scope.error = 'Error retrieving skills';
            });
      }]);
})();