'use strict';

/**
 * @ngdoc function
 * @name tddApp.controller:StackCtrl
 * @description
 * # StackCtrl
 * Controller of the tddApp
 */
angular.module('tddApp')
        .controller('StackCtrl', function ($scope) {
            $scope.stack = [];

            $scope.push = function (item) {
                $scope.stack.push(item);
            };

            $scope.pop = function () {
                if ($scope.stack.length === 0) {
                    throw new Error('Stack empty Exception');
                }
                return $scope.stack.pop();
            };

            $scope.isEmpty = function () {
                return 0 === $scope.stack.length;
            };
        });
