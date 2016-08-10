'use strict';

angular.module('subApp1.version.version-directive', [])

	.directive('appVersion', ['version', function (version) {
		return function (scope, elm, attrs) {
			elm.text(version);
		};
	}]);
