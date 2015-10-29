(function() {
    'use strict';
    angular.module('@@appName')
      .controller('EducationController', ['$scope', '$mdDialog', 'Education',
        function( $scope, $mdDialog, Education) {
            var self = this;

            $scope.openWebsite = function(url){
                window.open(url, '_blank');
            };

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
                $scope.educations = Education.query();
            };

            self.init();
      }]);
})();