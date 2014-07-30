'use strict';

describe('Directive: mvMeal', function () {

  // load the directive's module
  beforeEach(module('mensavoterFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mv-meal></mv-meal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mvMeal directive');
  }));
});
