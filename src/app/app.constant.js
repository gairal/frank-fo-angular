(function () {
  'use strict';

  angular.module('@@appName')

    .constant('conf', {
      ENV: '@@env',
      VERSION: '@@appVersion',
      API: {
        BASEURL: '@@apiUrl',
        EXPERIENCE: {
          path: '/works'
        },
        SKILL: {
          path: '/skills/categories'
        },
        EDUCATION: {
          path: '/educations'
        },
        INTEREST: {
          path: '/interests/categories'
        },
        TRAVEL: {
          path: '/travels'
        }
      },
      STATIC: {
        BASEURL: '@@staticUrl/'
      },
      GMAPS: {
        API_KEY: 'TODO'
      }

    });
})();
