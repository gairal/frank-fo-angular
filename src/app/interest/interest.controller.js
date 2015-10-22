(function() {
    'use strict';
    angular.module('@@appName')
      .controller('InterestController', ['$scope', 'Interest', 'Travel',function( $scope, Interest, Travel) {
      //       $scope.categories = [];
      //       $scope.travels = [];
      //       $scope.mapBounds = false;
      //       $scope.mapLoaded = false;
      //       $scope.mapZoomChanged = false;
      //       $scope.mapOptions = {
      //           center: new google.maps.LatLng(48.8566, 2.35222),
      //           zoom: 7,
      //           mapTypeId: google.maps.MapTypeId.ROADMAP,
      //           panControl: true,
      //           zoomControl: true,
      //           streetViewControl: false,
      //           mapTypeControl: false
      //       };

      //       $scope.loadTravels = function () {
      //           Travel.get().then(function(data) {
      //               $scope.displayTravels(data);
      //           }, function() {
      //               $scope.error = 'Error retrieving travels';
      //           });
      //       };

      //       $scope.displayTravels = function (travels) {
      //           var markerCoord = null,
      //               c = 0;
      //           var interval = setInterval(function() {
      //               markerCoord = new google.maps.LatLng(travels[c].latitude, travels[c].longitude);
      //               $scope.addMarker(markerCoord, travels[c].place, google.maps.Animation.DROP);
      //               $scope.mapBounds.extend(markerCoord);
      //               if (!$scope.mapZoomChanged) {
      //                   $scope.gairalMap.setCenter(markerCoord);
      //               }
      //               c++;
      //               if (c >= travels.length) {
      //                   clearInterval(interval);
      //                   $scope.gairalMap.fitBounds($scope.mapBounds);
      //                   $scope.gairalMap.setZoom(2);
      //               }
      //           }, 2000);
      //       };

      //       $scope.mapIdle = function () {
      //           $scope.mapZoomChanged = false;
      //           if(!$scope.mapLoaded) {
      //               $scope.mapBounds = new google.maps.LatLngBounds();
      //               $scope.loadTravels();
      //               $scope.mapLoaded=true;
      //           }
      //       };

      //       $scope.addMarker = function (latLng, title, animation) {
      //           new google.maps.Marker({
      //               position: latLng,
      //               map: $scope.gairalMap,
      //               title: title,
      //               animation: animation
      //           });
      //       };

      //       Interest.get().then(function(data) {
      //           $scope.categories = data;
      //       }, function() {
      //           $scope.error = 'Error retrieving interests';
      //       });
      }]);
})();