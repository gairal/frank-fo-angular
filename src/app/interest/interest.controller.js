(function () {
  'use strict';
  angular.module('@@appName')
    .controller('InterestController', ['$scope', 'Interest', 'uiGmapGoogleMapApi',
      function ($scope, Interest, uiGmapGoogleMapApi) {
        var self = this;

        this.displayTravels = function (markers) {
          var map = $scope.map.control.getGMap();
          var c = 0;
          var interval = setInterval(function () {
            markers[c].setMap(map);
            if (!$scope.map.zoomChanged) {
              map.setCenter(markers[c].position);
            }
            c++;
            if (c >= markers.length) {
              $scope.map.zoom = 2;
              clearInterval(interval);
            }
          }, 2000);
        };

        this.initGMaps = function (maps, travels) {
          var markers = [];
          for (var i = 0, len = travels.length; i < len; i++) {
            markers.push(new maps.Marker({
              position: new maps.LatLng(travels[i].latitude, travels[i].longitude),
              title: travels[i].place,
              animation: maps.Animation.DROP
            }));
          }
          self.displayTravels(markers);
        };

        this.init = function () {
          $scope.map = {
            center: { latitude: 48.8566, longitude: 2.35222 },
            zoom: 7,
            options: {
              panControl: true,
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: false
            },
            events: {
              zoom_changed: function () { $scope.map.zoomChanged = true; },
              idle: function () { $scope.map.zoomChanged = false; }
            },
            control: {},
            bounds: {},
            zoomChanged: false
          };
          var travels = Interest.travel.query(function () {
            uiGmapGoogleMapApi.then(function (maps) {
              self.initGMaps(maps, travels);
            });
          });
          $scope.categories = Interest.interest.query();
        };

        self.init();
      }]);
})();
