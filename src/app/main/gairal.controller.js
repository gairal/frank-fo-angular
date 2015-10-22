(function() {
    'use strict';

    angular.module('@@appName')
        .controller('GairalController', ['$rootScope', '$scope', '$state', '$mdDialog', 
            function( $rootScope, $scope, $state, $location, $mdDialog ) {
        
            $scope.showContact = function (size) {
                $mdDialog.show({
                    templateUrl: 'app/main/contact/contact.html',
                    scope: $scope.$new(),
                    clickOutsideToClose:true,
                }).finally(function() {
                    $state.go($state.current.data.backState, $rootScope.previousStateParams);
                });
            };
    }]);
})();