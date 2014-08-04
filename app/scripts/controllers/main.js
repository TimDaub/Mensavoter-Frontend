'use strict';

angular.module('mensavoterFrontendApp')
  .controller('MainCtrl', function ($scope, DayFactory, $log) {
    DayFactory.getToday()
      .then(function(day) {
        $scope.day = day;
      }, function(err) {
        $log.error(err);
      });
  });
