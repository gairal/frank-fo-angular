(function() {
    'use strict';

    angular.module('Gairal.controllers')
        .controller('NavigationCtrl', function( $scope, $timeout, $mdBottomSheet ) {
            $scope.selectedIndex = 0;

            $scope.next = function() {
              $scope.selectedIndex = Math.min($scope.selectedIndex + 1, 2) ;
            };

            $scope.previous = function() {
              $scope.selectedIndex = Math.max($scope.selectedIndex - 1, 0);
            };

            $scope.showInfo = function($event) {
                $mdBottomSheet.show({
                    templateUrl: 'partials/info.html',
                    controller: 'InfoCtrl',
                    targetEvent: $event
                });
            };$scope.showSkills = function($event) {
                $mdBottomSheet.show({
                    templateUrl: 'partials/skill.html',
                    controller: 'SkillCtrl',
                    targetEvent: $event
                });
            };
    });
})();