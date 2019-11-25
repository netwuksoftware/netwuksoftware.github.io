const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/item/:name', {
			templateUrl: 'templates/item.html',
			controller: 'itemCtrl'
		})
		.otherwise({
			template: '<h1>Page Not Found</h1>'
		});
});

app.controller('itemCtrl', function($scope, $routeParams) {
	const name = $routeParams.name;
	console.log(`Name - ${name}`);
});

app.controller('homeCtrl', function($scope) {
	console.log('Home');	
});