(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('TravelCtrl', ['$scope', 'gairalAPIservice',function( $scope, gairalAPIservice) {
            $scope.travels = [];
            gairalAPIservice.getSkills($scope);
      }]);
})();