(function() {
    'use strict';
    angular.module('@@appName')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('interest', {
                parent: 'root',
                url: '/interest',
                data: {
                    roles: [], 
                    pageTitle: 'interest.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/interest/interest.html',
                        controller: 'InterestController'
                    }
                }
            });
    }])
    .factory('Interest', ['conf', '$resource',
        function(conf, $resource) {

        return $resource(conf.API.BASEURL + conf.API.INTEREST.path + '/:interestId' + '/?ordering=display_order',{interestId: '@id'});
    }]);
})();