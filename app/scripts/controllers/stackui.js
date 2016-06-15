'use strict';

/**
 * @ngdoc function
 * @name tddApp.controller:StackuiCtrl
 * @description
 * # StackuiCtrl
 * Controller of the tddApp
 */
angular.module('tddApp')
  .controller('StackuiCtrl', function ($scope) {
            $scope.stack = [];

            $scope.push = function (item) {
                $scope.stack.push(item);
            }

            $scope.pop = function () {
                return $scope.stack.pop();
            }

            $scope.isEmpty = function () {
                return 0 === $scope.stack.length;
            }
  });
