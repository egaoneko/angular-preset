'use strict';

angular.module('subApp1.version', [
	'subApp1.version.interpolate-filter',
	'subApp1.version.version-directive'
])

	.value('version', '0.1');
