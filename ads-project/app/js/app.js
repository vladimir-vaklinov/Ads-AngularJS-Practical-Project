var app = angular.module('adsApp', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html'
	})
});

