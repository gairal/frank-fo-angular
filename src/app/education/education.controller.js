(function() {
    'use strict';
    angular.module('@@appName')
      .controller('EducationController', ['$scope', 'Education',function( $scope, Education) {
            $scope.educations = [];
            
            Education.get().then(function(data) {
                $scope.educations = data;
            }, function() {
                $scope.error = 'Error retrieving educations';
            });
      }]);
})();