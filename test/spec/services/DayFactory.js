'use strict';

describe('Service: Dayfactory', function () {

  // load the service's module
  beforeEach(module('mensavoterFrontendApp'));

  // instantiate service
  var Dayfactory;
  beforeEach(inject(function (_Dayfactory_) {
    Dayfactory = _Dayfactory_;
  }));

  it('should do something', function () {
    expect(!!Dayfactory).toBe(true);
  });

});
