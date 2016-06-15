'use strict';

describe('Controller: StackuiCtrl', function () {

  // load the controller's module
  beforeEach(module('tddApp'));

  var StackuiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StackuiCtrl = $controller('StackuiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
