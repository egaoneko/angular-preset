'use strict';

angular.module('myApp.view1', [
	'ngRoute',
	'subApp1.component1'
])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view/view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])

	.controller('View1Ctrl', [function () {

	}]);
