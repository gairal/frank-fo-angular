(function() {
    'use strict';

    var API_HOST       = '@@apiUrl',
        APP_VERSION    = '@@appVersion',
        STATIC_HOST    = '@@staticUrl',
        API_PATH       = '';

    angular.module('Gairal.config', [])

    .constant('APP_VERSION', APP_VERSION)

    /**
     * Google maps related config.
     */
    .constant('GmapsConfig', {
        API_KEY: 'TODO'
    })

    /**
     * Configure base urls, those values may change,
     * see HostConfigSolver
     */
    .constant('HostConfig', {
        API_URL:        API_HOST + API_PATH,
        IMG_URL:        STATIC_HOST
    });
})();
