'use strict';

angular.module('musictiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'mm.foundation'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
