'use strict';

angular.module('mensavoterFrontendApp')
  .factory('DayFactory', function (Restangular, $q) {
    return {
      getToday: function () {
        var deferred = $q.defer();

        Restangular.one('days', 'today').doGET()
          .then(function(res) {

            // Sort by voting
            for(var i = 0; i < res.Mensa.meals.length; i++) {
              res.Mensa.meals[i].score = res.Mensa.meals[i].upvotes-res.Mensa.meals[i].downvotes;
            }

            deferred.resolve(res);

          }, function(err) {
            deferred.reject(err);
          });

        return deferred.promise;
      }
    };
  });
