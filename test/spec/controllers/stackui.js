/*globals $*/
'use strict';

describe('Controller: StackuiCtrl', function () {

    // load the controller's module
    beforeEach(module('tddApp'));

    var StackuiCtrl,
            scope,
            $compileAngular;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope,
            _$compile_) {
        scope = $rootScope.$new();
        StackuiCtrl = $controller('StackuiCtrl', {
            $scope: scope
        });
        $compileAngular = _$compile_;
    }));

    it('should insert new object-person in the stack after clicking on "Add"',
            function () {
                //init view
                var $view, $container, last, actualPerson, expectedPerson;

                $view = getTemplate();
                $container = $compileAngular($view)(scope);

                //add new person
                expectedPerson = new Person(Math.random().toString(), Math.random().toString());

                $container.find('.stackui-input-firstname').val(expectedPerson.firstname).trigger('input')
                        .end().find('.stackui-input-lastname').val(expectedPerson.lastname).trigger('input')
                        .end().find('.stackui-btn-add').click();

                //assert
                last = scope.stack[scope.stack.length - 1];
                actualPerson = {firstname: last.firstname, lastname: last.lastname};
                expect(actualPerson).toEqual(expectedPerson);

            });

    it('should remove the last person in the stack after clicking on "Remove last"',
            function () {
                var $view, last, actualPerson, expectedPerson;
                $view = getTemplate();

                $compileAngular($view)(scope).find('.stackui-btn-remove-last').click();

                last = scope.stack[scope.stack.length - 1];
                actualPerson = {firstname: last.firstname, lastname: last.lastname};
                expectedPerson = {firstname: 'Max', lastname: 'Lahm'};

                expect(actualPerson).toEqual(expectedPerson);

            });

    function getTemplate() {
        jasmine.getFixtures().fixturesPath = 'base/app/views';
        jasmine.getFixtures().load('stackUI.html');
        return $(jasmine.getFixtures().fixturesCache_['stackUI.html']);
    }

    function Person(firstname, lastname) {
        return {
            firstname: firstname,
            lastname: lastname
        };
    }
});