'use strict';

describe('component1', function () {

	// Load the module that contains the `component1` component before each test
	beforeEach(module('subApp1.component1'));

	// Test the controller
	describe('Component1Controller', function () {
		var $httpBackend, ctrl;
		var service1Data = [{
			id: 1,
			group: "service1"
		}, {
			id: 2,
			group: "service1"
		}
		];

		beforeEach(inject(function ($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('subApp1/resources/service1/service1.json').respond(service1Data);

			ctrl = $componentController('component1');
		}));

		it('should fetch the service1 data', function () {
			jasmine.addCustomEqualityTester(angular.equals);

			expect(ctrl.service1).toEqual([]);

			$httpBackend.flush();
			expect(ctrl.service1).toEqual(service1Data);
		});

	});

});