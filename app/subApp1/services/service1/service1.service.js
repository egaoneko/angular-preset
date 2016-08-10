'use strict';

angular
	.module('subApp1.service1')
	.factory('Service1', ['$resource',
		function ($resource) {
			return $resource('subApp1/resources/service1/:serviceId.json', {}, {
				query: {
					method: 'GET',
					params: {
						serviceId: 'service1'
					},
					isArray: true
				}
			});
		}
	]);
