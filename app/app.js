'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'subApp1',
	'myApp.mainView',
	'myApp.view1',
	'myApp.view2'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({
		redirectTo: '/main'
	});
}]);
