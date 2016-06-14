'use strict';

/**
 * @ngdoc function
 * @name tddApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tddApp
 */
angular.module('tddApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
