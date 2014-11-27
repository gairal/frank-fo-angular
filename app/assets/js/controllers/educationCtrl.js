(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('EducationCtrl', ['$scope', 'educationService',function( $scope, educationService) {
            $scope.educations = [];
            
            educationService.get().then(function(data) {
                $scope.educations = data;
            }, function() {
                $scope.error = 'Error retrieving educations';
            });
      }]);
})();