(function() {
    'use strict';

    angular.module('@@appName')
        .controller('GairalController', ['$scope', '$mdBottomSheet', 
            function($scope, $mdBottomSheet ) {
        
            // $scope.showContact = function (size) {
            //     $mdDialog.show({
            //         templateUrl: 'app/main/contact/contact.html',
            //         scope: $scope.$new(),
            //         clickOutsideToClose:true,
            //     }).finally(function() {
            //         $state.go($state.current.data.backState, $rootScope.previousStateParams);
            //     });
            // };
            $scope.showContact = function($event) {
            $mdBottomSheet.show({
                templateUrl: 'app/main/contact/contact.html',
                //controller: 'GridBottomSheetCtrl',
                clickOutsideToClose: true,
                });
            };
    }]);
})();