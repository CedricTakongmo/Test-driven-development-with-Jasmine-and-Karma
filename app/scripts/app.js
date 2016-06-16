'use strict';

/**
 * @ngdoc overview
 * @name tddApp
 * @description
 * # tddApp
 *
 * Main module of the application.
 */
angular
  .module('tddApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/stackUI.html',
        controller: 'StackuiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
