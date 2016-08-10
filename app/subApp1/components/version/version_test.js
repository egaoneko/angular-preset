'use strict';

describe('subApp1.version module', function () {
	beforeEach(module('subApp1.version'));

	describe('version service', function () {
		it('should return current version', inject(function (version) {
			expect(version).toEqual('0.1');
		}));
	});
});
