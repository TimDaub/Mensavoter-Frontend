'use strict';

angular.module('mensavoterFrontendApp')
  .directive('mvDialog', function () {
    return {
      templateUrl: 'views/templates/mvdialog.html',
      restrict: 'EAC',
      scope: true,
      link: function postLink(scope) {
        
      }
    };
  });
