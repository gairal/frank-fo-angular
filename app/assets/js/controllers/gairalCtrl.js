(function() {
    'use strict';

    angular.module('Gairal.controllers')
        .controller('GairalCtrl', ['$scope', '$location', '$modal', 'HostConfig', function( $scope, $location, $modal, HostConfig ) {
            $scope.imgHost = HostConfig.IMG_URL;

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