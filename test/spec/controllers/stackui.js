'use strict';

describe('Controller: StackuiCtrl', function() {

    // load the controller's module
    beforeEach(module('tddApp'));

    var StackuiCtrl,
        scope,
        $compile;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope,
        _$compile_) {
        scope = $rootScope.$new();
        StackuiCtrl = $controller('StackuiCtrl', {
            $scope: scope
        });
        $compile = _$compile_;
    }));

    it('should insert new object-person in the stack after clicking on "Add"',
        function() {
            //init view
            var $view, $container, dummyPerson, last;

            $view = getTemplate();
            $container = $compile($view)(scope);

            //add new person
            dummyPerson = new Person(Math.random().toString(), Math.random().toString());

            $container.find(".stackui-input-firstname").val(dummyPerson.firstname).trigger('input')
                .end().find(".stackui-input-lastname").val(dummyPerson.lastname).trigger('input')
                .end().find(".stackui-btn-add").click();

            //assert
            last = scope.stack[scope.stack.length - 1];
            expect({ firstname: last.firstname, lastname: last
                    .lastname }).toEqual(dummyPerson);

        });

    it('should remove the last person in the stack after clicking on "Remove last"',
        function() {
            var $view, last;
            $view = getTemplate();

            $compile($view)(scope).find(".stackui-btn-remove-last").click();

            last = scope.stack[scope.stack.length - 1];
            expect({ firstname: last.firstname, lastname: last.lastname })
                    .toEqual({ firstname: "Max",lastname: "Lahm" });

        });

    function getTemplate() {
        jasmine.getFixtures().fixturesPath = "base/app/views";
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