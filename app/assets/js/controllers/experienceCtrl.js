(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('ExperienceCtrl', ['$scope', 'experienceService',function( $scope, experienceService ) {
            $scope.experiences = [];
            
            experienceService.get().then(function(data) {
                $scope.experiences = data;
            }, function() {
                $scope.error = 'Error retrieving experiences';
            });
      }]);
})();