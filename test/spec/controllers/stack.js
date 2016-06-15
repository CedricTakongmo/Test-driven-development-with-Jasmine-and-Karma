'use strict';

describe('Controller: StackCtrl: describes an abstract data type that serves as a collection of elements', function () {

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
        scope.stack = [
            {
                firstname: "Cedric",
                lastName: "Takongmo"
            }, {
                firstname: "Peter",
                lastName: "Schneider"
            }
        ];       
    }));
    
    afterEach(function () {
        StackCtrl = null;
        scope = null;
    });

    it('specPush: should add a new item to a stack', function () {
        var stack = scope.stack,
            startLength = stack.length,
            Mustermann = {
                    firstname: "Max",
                    lastName: "Mustermann"
                };

        scope.push(Mustermann);

        expect(startLength + 1).toBe(stack.length);
        expect(stack[stack.length - 1]).toBe(Mustermann);
    });

    it('specPop: should remove the object at the top of this stack and returns that object as the value of this function', function () {
        var stack = scope.stack,
                startLength = stack.length,
                removedPerson = scope.pop();
        expect(removedPerson).toEqual({
            firstname: "Peter",
            lastName: "Schneider"
        });
        expect(startLength - 1).toBe(stack.length);

        scope.stack = [];
        removedPerson = scope.pop();
        expect(removedPerson).toEqual(undefined);
        expect(scope.stack.length).toBe(0);
    });
    
    it('specIsEmpty: if this stack is empty; Returns "true" if and only if this stack contains no items; "false" otherwise.', function () {
        scope.stack = [{ firstname: "Peter", lastName: "Schneider"}];
        expect(scope.isEmpty()).toBe(false);
        scope.stack = [];
        expect(scope.isEmpty()).toBe(true );
    });
});
