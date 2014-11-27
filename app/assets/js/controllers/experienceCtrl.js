(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('ExperienceCtrl', ['$scope', 'gairalAPIservice',function( $scope, gairalAPIservice) {
        $scope.experiences = [];

        gairalAPIservice.getExperiences($scope);
      }]);
})();