(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('InterestCtrl', ['$scope', 'gairalAPIservice',function( $scope, gairalAPIservice) {
            $scope.categories = [];
            gairalAPIservice.getInterests($scope);
      }]);
})();