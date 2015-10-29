(function() {
    'use strict';
    angular.module('@@appName')
    .directive('fkGplus',[function (){
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
    .directive('fkFb',[function (){
        return {
            restrict: 'A',
            link: function(scope,element,attr){
                if(typeof FB === 'undefined'){
                    var po = document.createElement('script'); po.type = 'text/javascript';
                    po.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                }
            }
        };
    }]);
})();
