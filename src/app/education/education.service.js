(function() {
    'use strict';
    angular.module('@@appName')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('education', {
                parent: 'root',
                url: '/education',
                data: {
                    roles: [], 
                    pageTitle: 'education.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/education/education.html',
                        controller: 'EducationController'
                    }
                }
            });
    }])
    .factory('Education', ['conf', '$resource',
        function(conf, $resource) {

        return $resource(conf.API.BASEURL + conf.API.EDUCATION.path + '/:eduId',{eduId: '@id'});
    }]);
})();