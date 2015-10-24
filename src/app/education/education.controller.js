(function() {
    'use strict';
    angular.module('@@appName')
      .controller('EducationController', ['$scope', 'Education',
        function( $scope, Education) {
            var self = this;

            this.init = function(){
                $scope.educations = Education.query();
            };

            self.init();
      }]);
})();