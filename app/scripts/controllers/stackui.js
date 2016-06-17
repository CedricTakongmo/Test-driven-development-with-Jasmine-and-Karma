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
            $scope.stack = [{
                    firstname: 'Steeven',
                    lastname: 'Robson',
                }, {
                    firstname: 'Max',
                    lastname: 'Lahm',
                }, {
                    firstname: 'Edouard',
                    lastname: 'Smith',
                }];

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

            $scope.add = function () {
                if ($scope.firstname !== '' || $scope.lastname !== '') {
                    $scope.push({
                        firstname: $scope.firstname,
                        lastname: $scope.lastname,
                    });
                    $scope.iniInputs();
                } else {
                    console.log('Please fill the fileds in');
                }
            };

            $scope.removeLast = function () {
                try {
                    var last = $scope.pop();
                    if (last !== undefined) {
                        console.log(last.firstname + ' ' + last.lastname + ' has been removed');
                    }
                } catch (e) {
                    console.log(e.message);
                }
            };

            $scope.iniInputs = function () {
                $scope.firstname = '';
                $scope.lastname = '';
            };

            $scope.iniInputs();
        });
