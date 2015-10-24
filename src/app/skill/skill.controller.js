(function() {
    'use strict';
    angular.module('@@appName')
      .controller('SkillController', ['$scope', 'Skill',
        function( $scope, Skill) {
            var self = this;

            this.init = function(){
                $scope.categories = Skill.query();
            };

            self.init();
      }]);
})();

(function() {
    'use strict';
    angular.module('@@appName')
        .controller('ExperienceController', ['$scope', 'Experience',
        function( $scope, Experience ) {
            var self = this;

            this.init = function(){
                $scope.experiences = Experience.query();
            };

            self.init();
      }]);
})();