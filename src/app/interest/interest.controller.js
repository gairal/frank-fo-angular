(function() {
    'use strict';
    angular.module('@@appName')
      .controller('InterestController', ['$scope', 'Interest', 'uiGmapGoogleMapApi',
        function( $scope, Interest, uiGmapGoogleMapApi) {
        var self = this, maps;

        this.displayTravels = function (travels) {
        var markerCoord = null,
            c = 0;
        var interval = setInterval(function() {
                markerCoord = new self.maps.LatLng(travels[c].latitude, travels[c].longitude);
                self.addMarker(markerCoord, travels[c].place, self.maps.Animation.DROP);
                //$scope.map.bounds = markerCoord;
                if (!$scope.map.zoomChanged) {
                    $scope.gairalMap.setCenter(markerCoord);
                }
                c++;
                if (c >= travels.length) {
                    clearInterval(interval);
                    $scope.gairalMap.fitBounds($scope.map.bounds);
                    $scope.gairalMap.setZoom(2);
                }
            }, 2000);
        };

        $scope.mapIdle = function () {
            $scope.map.zoomChanged = false;
            if(!$scope.map.loaded) {
                $scope.map.bounds = self.maps.LatLngBounds();
                $scope.map.loaded=true;
            }
        };

        this.addMarker = function (latLng, title, animation) {
            new self.maps.Marker({
                position: latLng,
                map: $scope.gairalMap,
                title: title,
                animation: animation
            });
        };

        this.init = function(){
            $scope.categories = Interest.interest.query();
            var travels = Interest.travel.query(function(){
                uiGmapGoogleMapApi.then(function(maps) {
                    self.maps = maps;
                    self.displayTravels(travels);
                });
            });
            $scope.map = {
                center: { latitude: 48.8566, longitude: 2.35222 },
                zoom: 7,
                options: {
                    panControl: true,
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false
                },
                bounds: false,
                loaded: false,
                zoomChanged: false
            };
        };    

        self.init();
    }]);
})();