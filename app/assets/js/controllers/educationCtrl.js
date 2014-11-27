(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('EducationCtrl', ['$scope', 'gairalAPIservice',function( $scope, gairalAPIservice) {
            $scope.educations = [];

            gairalAPIservice.getEducations($scope);
      }]);
})();