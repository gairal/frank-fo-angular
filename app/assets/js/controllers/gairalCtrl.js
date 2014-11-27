(function() {
    'use strict';

    angular.module('Gairal.controllers')
        .controller('GairalCtrl', ['$scope', '$location', function( $scope, $location ) {
            $scope.isActive = function (viewLocation) { 
                return viewLocation === $location.path();
            };
            
    }]);
})();