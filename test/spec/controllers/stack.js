/*globals $*/
'use strict';

describe('Controller: StackCtrl: describes an abstract data type that serves as a collection of elements',
        function () {

            // load the controller's module
            beforeEach(module('tddApp'));

            var StackCtrl,
                    scope;

            // Initialize the controller and a mock scope
            beforeEach(inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                StackCtrl = $controller('StackCtrl', {
                    $scope: scope
                });
                scope.stack = new People();
            }));

            afterEach(function () {
                StackCtrl = null;
                scope = null;
            });

            it('specPush: should add a new item to a stack', function () {
                var stack, startLength, actualLength, expectedLength, actualPerson, expectedPerson;

                stack = scope.stack;
                startLength = stack.length;

                expectedPerson = new Person('Max', 'Mustermann');
                //call of function to test
                scope.push(expectedPerson);
                actualPerson = stack[stack.length - 1];
                actualLength = startLength + 1;
                expectedLength = stack.length;

                expect(actualPerson).toBe(expectedPerson);
                expect(actualLength).toBe(expectedLength);
            });


            it('specPop: should remove the object at the top of this stack and returns that object as the value of this function',
                    function () {
                        var stack, startLength, actualLength, expectedLength, actualPerson, expectedPerson;

                        stack = scope.stack;
                        startLength = stack.length;
                        //call of function to test
                        actualPerson = scope.pop();

                        expectedPerson = new Person('Peter', 'Schneider');
                        actualLength = startLength - 1;
                        expectedLength = stack.length;

                        expect(actualLength).toBe(expectedLength);
                        expect(actualPerson).toEqual(expectedPerson);

                        scope.stack = [];
                        expect(function () {
                            //call of function to test
                            scope.pop();
                        }).toThrow(new Error('Stack empty Exception'));
                    });

            it('specIsEmpty: if this stack is empty; Returns "true" if and only if this stack contains no items; "false" otherwise.',
                    function () {
                        scope.stack = [new Person('Peter', 'Schneider')];
                        //call of function to test and assert
                        expect(scope.isEmpty()).toBe(false);
                        scope.stack = [];
                        //call of function to test
                        expect(scope.isEmpty()).toBe(true);
                    });

            it('should receive a successful response', function () {
                var ajaxConfig = {
                    url: 'ProductData.json',
                    remainingCallTime: 30000,
                    dataType: 'json',
                };
                spyOn($, 'ajax').and.callFake(function (e) {
                    e.success({});
                });

                var callbacks = {
                    checkForInformation: jasmine.createSpy(),
                    displayErrorMessage: jasmine.createSpy(),
                };

                sendRequest(callbacks, ajaxConfig);
                expect(callbacks.checkForInformation).toHaveBeenCalled();  //Verifies this was called
                expect(callbacks.displayErrorMessage).not.toHaveBeenCalled();  //Verifies this was NOT called
            });

            function sendRequest(callbacks, configuration) {
                $.ajax({
                    url: configuration.url,
                    dataType: configuration.dataType,
                    success: function (data) {
                        callbacks.checkForInformation(data);
                    },
                    error: function () {
                        callbacks.displayErrorMessage();
                    },
                    timeout: configuration.remainingCallTime
                });
            }
            function People() {
                return [{
                        firstname: 'Cedric',
                        lastname: 'Takongmo'
                    }, {
                        firstname: 'Peter',
                        lastname: 'Schneider'
                    }];
            }

            function Person(firstname, lastname) {
                return {
                    firstname: firstname,
                    lastname: lastname
                };
            }
        });