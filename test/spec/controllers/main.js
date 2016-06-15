'use strict';

describe('A specification suit forController: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tddApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    //setFixtures('<div id="taskForm" style="width:50px; height:50px; background-color: red;" />');
     
      /*var f = jasmine.getFixtures();
        f.fixturesPath = 'base';
        f.load('src/app/views/about.html');*/
      
        
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
