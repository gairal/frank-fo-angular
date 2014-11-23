(function() {
    'use strict';

    angular.module('Gairal.controllers')
        .controller('NavigationCtrl', function( $scope ) {

            $scope.selectedIndex = 0;

    function announceDeselected(tab) {
      $scope.farewell = 'Goodbye ' + tab + '!';
    }

    function announceSelected(tab) {
      $scope.greeting = 'Hello ' + tab + '!';
    }

            $scope.announceSelected = announceSelected;
            $scope.announceDeselected = announceDeselected;

            $scope.next = function() {
              $scope.selectedIndex = Math.min($scope.selectedIndex + 1, 2) ;
            };

            $scope.previous = function() {
              $scope.selectedIndex = Math.max($scope.selectedIndex - 1, 0);
            };


    });
})();