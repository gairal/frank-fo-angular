(function() {
    'use strict';
    angular.module('@@appName')
    .factory('Gairal', [, 
        function() {
            var self = this;

            return {
                formDataObject: function(data) {
                    var fd = new FormData();
                    angular.forEach(data, function(value, key) {
                        fd.append(key, value);
                    });
                    return fd;
                }
            };
    }]);
})();
