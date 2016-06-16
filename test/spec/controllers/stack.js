'use strict';

describe('Controller: StackCtrl: describes an abstract data type that serves as a collection of elements',
    function() {

        // load the controller's module
        beforeEach(module('tddApp'));

        var StackCtrl,
            scope;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            StackCtrl = $controller('StackCtrl', {
                $scope: scope
            });
            scope.stack = new People();
        }));

        afterEach(function() {
            StackCtrl = null;
            scope = null;
        });

        it('specPush: should add a new item to a stack', function() {
            var stack, startLength, max;

            stack = scope.stack;
            startLength = stack.length;

            max = new Person("Max", "Mustermann");
            scope.push(max);

            expect(stack[stack.length - 1]).toBe(max);
            expect(startLength + 1).toBe(stack.length);
        });

        it('specPop: should remove the object at the top of this stack and returns that object as the value of this function',
            function() {
                var stack, startLength, removedPerson;

                stack = scope.stack;
                startLength = stack.length;

                removedPerson = scope.pop();

                expect(removedPerson).toEqual(new Person("Peter", "Schneider"));
                expect(startLength - 1).toBe(stack.length);

                scope.stack = [];
                expect(function() {
                    scope.pop()
                }).toThrow(new Error("Stack empty Exception"));
            });

        it('specIsEmpty: if this stack is empty; Returns "true" if and only if this stack contains no items; "false" otherwise.',
            function() {
                scope.stack = [new Person("Peter", "Schneider")];
                expect(scope.isEmpty()).toBe(false);
                scope.stack = [];
                expect(scope.isEmpty()).toBe(true);
            });

        function People() {
            return [{
                firstname: "Cedric",
                lastname: "Takongmo"
            }, {
                firstname: "Peter",
                lastname: "Schneider"
            }];
        }

        function Person(firstname, lastname) {
            return {
                firstname: firstname,
                lastname: lastname
            };
        }
    });