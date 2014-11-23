(function() {
    'use strict';

    angular.module('Gairal.controllers')
      .controller('InfoCtrl', function($scope, $timeout, $mdBottomSheet) {
          $scope.listItemClick = function($index) {
            $mdBottomSheet.hide();
          };
    });
})();