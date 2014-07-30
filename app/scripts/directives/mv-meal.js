'use strict';

angular.module('mensavoterFrontendApp')
  .directive('mvMeal', function ($log, MealFactory) {
    return {
      templateUrl: 'views/templates/mvmeal.html',
      restrict: 'EAC',
      scope: {
        meal: '=',
        date: '='
      },
      controller: function($scope) {

        $scope.vote = function(mealID, voting) {
          MealFactory.vote($scope.date, mealID, voting)
            .then(function(res) {
              $log.log(res);
            }, function(err) {
              $log.error(err);
            });
        };
      }
    };
  });
