(function() {
    'use strict';
    angular.module('@@appName')
        .controller('ExperienceController', ['$scope', '$mdDialog', 'Experience',
        function( $scope, $mdDialog, Experience ) {
            var self = this;

            $scope.openSkills =  function(skills, e) {
                $mdDialog.show({
                    locals:{skills: skills},
                    templateUrl: 'app/skill/dialog/skill.dialog.html',
                    clickOutsideToClose:true,
                    controller: function ($scope, skills) { 
                        $scope.skills = skills  
                    }
                });
            };

            this.init = function(){
                $scope.experiences = Experience.query();
            };

            self.init();
      }]);
})();