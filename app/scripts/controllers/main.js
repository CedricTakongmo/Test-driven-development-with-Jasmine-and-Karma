'use strict';

/**
 * @ngdoc function
 * @name tddApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tddApp
 */
angular.module('tddApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
