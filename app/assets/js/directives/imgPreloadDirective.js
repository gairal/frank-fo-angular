(function() {
    'use strict';
    angular.module('Gairal.directives')
    .directive('imgPreload',[function (){
        return {
            restrict: 'A',
            scope: {
              ngSrc: '@'
            },
            link: function(scope,element){
                element.on('load', function() {
                    element.removeClass('spinner-hide');
                    element.addClass('spinner-show');
                    element.parent().find('span').remove();
                });
                scope.$watch('ngSrc', function() {
                    element.addClass('spinner-hide');
                    element.parent().append('<span class="spinner"></span>');
                });      
            }
        };
    }]);
})();
