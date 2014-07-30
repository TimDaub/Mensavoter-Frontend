'use strict';

angular.module('mensavoterFrontendApp')
  .directive('mvMeal', function ($log, MealFactory, DayFactory) {
    return {
      templateUrl: 'views/templates/mvmeal.html',
      restrict: 'EAC',
      scope: {
        meal: '=',
        date: '='
      },
      controller: function($scope, $element) {

        $scope.vote = function(mealID, voting) {
          MealFactory.vote($scope.date, mealID, voting)
            .then(function() {

              if(voting === 'up') {
                $element.find('.upvote i').addClass('mvfontgreen');
              } else {
                $element.find('.downvote i').addClass('mvfontred');
              }

              DayFactory.setMealVote(mealID, voting);
            }, function(err) {
              $log.error(err);
            });
        };
      }
    };
  });
