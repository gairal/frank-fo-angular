(function() {
    'use strict';
    angular.module('Gairal.directives')
    .directive('gplus',[function (){
        return {
            restrict: 'A',
            link: function(scope,element,attr){
                if(typeof gapi === 'undefined'){
                    (function() {
                        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                        po.src = 'https://apis.google.com/js/plusone.js';
                        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                    })();
                }
            }
        };
    }])
    .directive('fb',[function (){
        return {
            restrict: 'A',
            link: function(scope,element,attr){
                if(typeof FB === 'undefined'){
                    var po = document.createElement('script'); po.type = 'text/javascript';
                    po.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                }
            }
        };
    }]);
})();
