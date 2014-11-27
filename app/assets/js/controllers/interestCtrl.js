(function() {
    'use strict';
    angular.module('Gairal.controllers')
      .controller('InterestCtrl', ['$scope', 'interestService',function( $scope, interestService) {
            $scope.categories = [];
            
            interestService.get().then(function(data) {
                $scope.categories = data;
            }, function() {
                $scope.error = 'Error retrieving interests';
            });
      }]);
})();