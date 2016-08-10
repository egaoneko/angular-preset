'use strict';

describe('Service1', function () {
	var $httpBackend;
	var Service1;
	var service1Data = [{
		id: 1,
		group: "service1"
	}, {
		id: 2,
		group: "service1"
	},];

	beforeEach(function () {
		jasmine.addCustomEqualityTester(angular.equals);
	});

	beforeEach(module('subApp1.service1'));

	beforeEach(inject(function (_$httpBackend_, _Service1_) {
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('subApp1/resources/service1/service1.json').respond(service1Data);

		Service1 = _Service1_;
	}));

	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should fetch the photos data from `subApp1/resources/service1/service1.json`', function () {
		var service1 = Service1.query();

		expect(service1).toEqual([]);

		$httpBackend.flush();
		expect(service1).toEqual(service1Data);
	});
});

