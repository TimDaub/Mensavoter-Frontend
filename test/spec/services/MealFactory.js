'use strict';

describe('Service: Mealfactory', function () {

  // load the service's module
  beforeEach(module('mensavoterFrontendApp'));

  // instantiate service
  var Mealfactory;
  beforeEach(inject(function (_Mealfactory_) {
    Mealfactory = _Mealfactory_;
  }));

  it('should do something', function () {
    expect(!!Mealfactory).toBe(true);
  });

});
