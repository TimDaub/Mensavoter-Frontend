'use strict';

angular.module('mensavoterFrontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular'
])
  .config(function ($routeProvider, RestangularProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Base URL of the Backend
    RestangularProvider.setBaseUrl('http://uulm-mensavoting.herokuapp.com');
    // Set CORS Params
    RestangularProvider.setDefaultHeaders('Access-Control-Allow-Origin', 'http://127.0.0.1:9000');
    $httpProvider.defaults.withCredentials = true;
  });
