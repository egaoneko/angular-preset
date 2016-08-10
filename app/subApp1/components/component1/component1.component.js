'use strict';

angular
	.module('subApp1.component1')
	.component('component1', {
		templateUrl: 'subApp1/components/component1/component1.template.html',
		controller: ['Service1', Component1Controller]
	});

function Component1Controller (Service1) {
	this.content = "Hello Component1";
	this.service1 = Service1.query();
}
