(function() {
    'use strict';

    angular.module('Gairal.controllers')
        .controller('GairalCtrl', ['$scope', '$location', '$modal', function( $scope, $location, $modal ) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };

            $scope.title = function () {
                var title = '';
                switch($location.path()) {
                    case '/experience':
                        title = 'Experience';
                        break;
                    case '/education':
                        title = 'Education';
                        break;
                    case '/skill':
                        title = 'Skills';
                        break;
                    case '/interest':
                        title = 'Interests / Motivation';
                        break;
                    default:
                        title = 'Experience';
                }
                return title;
            };
        
            $scope.showContact = function (size) {
                $modal.open({templateUrl: 'partials/contact.html'});
            };
    }]);
})();