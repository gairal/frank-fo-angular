(function() {
    'use strict';

    angular.module('Gairal.controllers')
        .controller('NavigationCtrl', ['$scope', '$timeout', function( $scope, $timeout ) {
            $scope.selectedIndex = 0;

            $scope.next = function() {
              $scope.selectedIndex = Math.min($scope.selectedIndex + 1, 5) ;
            };

            $scope.previous = function() {
              $scope.selectedIndex = Math.max($scope.selectedIndex - 1, 0);
            };

            $scope.showInfo = function($event) {
                $scope.selectedIndex = 5;
                // $mdBottomSheet.show({
                //     templateUrl: 'partials/info.html',
                //     controller: 'InfoCtrl',
                //     targetEvent: $event
                // });
            };
            $scope.showSkills = function($event) {
                $scope.selectedIndex = 1;
                /*$mdBottomSheet.show({
                    templateUrl: 'partials/skill.html',
                    controller: 'SkillCtrl',
                    targetEvent: $event
                });*/
            };
            $scope.showMotivation = function($event) {
                $scope.selectedIndex = 2;
            };
    }]);
})();