'use strict';

describe('Directive: mvDialog', function () {

  // load the directive's module
  beforeEach(module('mensavoterFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mv-dialog></mv-dialog>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mvDialog directive');
  }));
});
