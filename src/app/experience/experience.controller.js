(function() {
    'use strict';
    angular.module('@@appName')
        .controller('ExperienceController', ['$scope', 'Experience',
        function( $scope, Experience ) {
            var self = this;

            this.init = function(){
                $scope.experiences = Experience.query(function(){
                    var test = scope.experiences;
                });
            };

            self.init();
      }]);
})();