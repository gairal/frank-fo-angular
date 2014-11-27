(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('TravelCtrl', ['$scope', 'gairalAPIService',function( $scope, gairalAPIService) {
            $scope.travels = [];
            gairalAPIService.getSkills($scope);
      }]);
})();