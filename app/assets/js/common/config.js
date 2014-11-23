'use strict';

(function() {

    var API_HOST       = '@@apiUrl',
        APP_VERSION    = '@@appVersion',
        STATIC_HOST    = '@@staticUrl',
        API_PATH       = '/api/v1/';

    angular.module('gairal.config', [])

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
        PAYMENT_HOST:   API_HOST
    });
})();
