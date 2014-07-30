'use strict';

angular.module('mensavoterFrontendApp')
  .factory('DayFactory', function (Restangular, $q) {

    var day;

    return {
      setDay: function(newDay) {
        day = newDay;
      },
      getDay: function() {
        return day;
      },
      setMealVote: function(mealID, vote) {
        for(var i = 0; i < day.Mensa.meals.length; i++) {
          if(day.Mensa.meals[i].id === mealID) {
            if(vote === 'up') {
              day.Mensa.meals[i].upvotes += 1;
            } else {
              day.Mensa.meals[i].downvotes += 1;
            }
            break;
          }
        }
        this.calcScores();
      },
      calcScores: function() {
        for(var i = 0; i < day.Mensa.meals.length; i++) {
          day.Mensa.meals[i].score = day.Mensa.meals[i].upvotes-day.Mensa.meals[i].downvotes;
        }
      },
      getToday: function () {
        var deferred = $q.defer();

        Restangular.one('days', 'today').doGET()
          .then(function(res) {

            this.setDay(res);
            this.calcScores();

            deferred.resolve(res);

          }.bind(this), function(err) {
            deferred.reject(err);
          });

        return deferred.promise;
      }
    };
  });
