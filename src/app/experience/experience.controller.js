(function() {
    'use strict';
    angular.module('@@appName')
        .controller('ExperienceController', ['$rootScope', '$scope', '$mdDialog', 'Experience',
        function($rootScope, $scope, $mdDialog, Experience ) {
            var self = this;

            $scope.openSkills =  function(skills, e) {
                $mdDialog.show({
                    locals:{skills: skills},
                    templateUrl: 'app/skill/dialog/skill.dialog.html',
                    clickOutsideToClose:true,
                    controller: ['$scope', 'skills', function ($scope, skills) { 
                        $scope.skills = skills;
                        $scope.hide = function() {
                            $mdDialog.hide();
                        };
                    }]
                });
            };

            this.init = function(){
                $scope.experiences = Experience.query();
            };

            self.init();
      }]);
})();