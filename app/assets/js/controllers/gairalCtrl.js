(function() {
    'use strict';

    angular.module('Gairal.controllers')
        .controller('GairalCtrl', ['$scope', '$location', '$modal', function( $scope, $location, $modal ) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        
            $scope.showContact = function (size) {
                $modal.open({templateUrl: 'partials/contact.html'});
            };
    }]);
})();