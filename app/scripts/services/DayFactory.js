'use strict';

angular.module('mensavoterFrontendApp')
  .factory('DayFactory', function (Restangular) {
    return {
      getToday: function () {
        return Restangular.one('days', 'today').doGET();
      }
    };
  });
