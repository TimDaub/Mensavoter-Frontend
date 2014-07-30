'use strict';

angular.module('mensavoterFrontendApp')
  .factory('MealFactory', function (Restangular) {
    return {
      vote: function(date, mealID, voting) {
        return Restangular.one('days', date).one('meals', mealID).one(voting).doGET();
      }
    };
  });
