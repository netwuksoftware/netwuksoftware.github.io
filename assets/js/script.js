let pId = null;
$(document).ready(function() {
	$('.modal').modal();

	$('.paddle-buy').click(function() {
		location.href = `https://buy.paddle.com/product/${pId}`;
	});
});

const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/item/:id', {
			templateUrl: 'templates/item.html',
			controller: 'itemCtrl'
		})
		.when('/terms-and-conditions', {
			templateUrl: 'templates/terms.html',
		})
		.when('/privacy-policy', {
			templateUrl: 'templates/privacy.html',
		})
		.otherwise({
			templateUrl: 'templates/404.html',
			controller: 'notFoundCtrl'
		});
});

app.controller('itemCtrl', function($scope, $routeParams, $location) {
	const id = $routeParams.id;
	let index = -1;
	
	for (let i = 0; i < items.length; i++) {
		if (items[i].id == id) {
			index = i;
			break;
		}
	}

	if (index == -1) {
		$location.url('404');
		return;
	}

	$scope.i = items[index];

	$scope.confirmBuy = function(id, name, amt) {
		pId = id;
		
		$('.paddle-buy').text(`Buy for ${amt}`);
		$('item-name').text(name);
		$('#modal1').modal('open');
	}
});

app.controller('homeCtrl', function($scope, $location) {
	$scope.items = items;

	$scope.openItem = function(id) {
		$location.url(`/item/${id}`);
	}

	$scope.confirmBuy = function(id, name, amt) {
		pId = id;
		
		$('.paddle-buy').text(`Buy for ${amt}`);
		$('item-name').text(name);
		$('#modal1').modal('open');
	}
});

app.controller('notFoundCtrl', function($scope, $location) {
	$scope.goHome = function() {
		$location.url('/');
	}
});

const items = [
	{ name: 'DevPad (JAR + Source Code)', desc: 'DevPad made in Java (with Source code)', amt: '$5.00', pay: '576799', id: 'devpad-jar-source', hi: true, tech: ['Java', 'All Platforms'], feat: ['Text Editor made in Java', 'Various Formatting options included', 'Source Code included to help learn Java Programming'] },
	{ name: 'Check Mate Chess Game', desc: 'Check Mate Chess Game made in Java (with Source code)', amt: '$8.00', pay: '576800', id: 'checkmate-jar-source', hi: true, tech: ['Java', 'Libgdx', 'All Platforms'], feat: ['Chess Game made in Java using Libgdx', 'Source Code included to help learn Java Programming', 'Source Code included to help learn Game Development'] },
	{ name: 'Check Mate Chess Game (Multiplayer using SocketIO)', desc: 'Check Mate Chess Game (Multiplayer) made in Java (with Source code)', amt: '$10.00', pay: '576802', id: 'checkmate-multi-jar-source', hi: true, tech: ['Java', 'Libgdx', 'SocketIO', 'All Platforms'], feat: ['Chess Game made in Java using Libgdx', 'Source Code included to help learn Java Programming', 'Source Code included to help learn Libgdx Game Development', 'Learn to make Multiplayer games with SocketIO'] },
	// { name: 'Super Mario Bros Game Clone', desc: 'Super Mario Bros Clone made in Java (with Source code)', amt: '$16.00', pay: '576804', id: 'super-mario-bros-jar-source', hi: true, tech: ['Java', 'Libgdx', 'All Platforms'], feat: ['Super Mario Bros Game Clone made in Java using Libgdx', 'Source Code included to help learn Java Programming', 'Source Code included to help learn Libgdx Game Development'] },
	// { name: 'Super Mario Bros Clone + Check Mate (with Source Code)', desc: 'Super Mario Bros Clone and Check Mate games made in Java (with Source code)', amt: '$25.00', pay: '576803', id: 'games-combo-jar-source', hi: true, tech: ['Java', 'Libgdx', 'All Platforms'], feat: ['Combination of Super Mario Bros Game Clone and Chess Game made in Java using Libgdx', 'Source Code included to help learn Java Programming', 'Source Code included to help learn Game Development'] },
	{ name: 'MIN Browser', desc: '[Only for Windows] MIN Browser', amt: '$18.00', pay: '576805', id: 'min-browser-windows-exe', hi: true, tech: ['Utility', 'Windows'], feat: ['Fast Modern Web Browser based on Chromium Engine', 'Browse in both UDP and TCP'] },
	{ name: 'MIN Browser (with Advanced Dev Tools)', desc: '[Only for Windows] MIN Browser (with Advanced Dev Tools to help designers and developers)', amt: '$35.00', pay: '576806', id: 'min-browser-advanced-exe', hi: true, tech: ['Utility', 'Debugging', 'Windows'], feat: ['Fast Modern Web Browser based on Chromium Engine', 'Browse in both UDP and TCP', 'Debugging Tools Included'] },
	{ name: 'CaptureX Surveillance', desc: '[Only for Windows] CaptureX Surveillence Software Setup', amt: '$30.00', pay: '576806', id: 'capturex-windows-exe', hi: false, tech: ['Utility', 'Windows'], feat: ['Utility for Keeping Camera Surveillance Records', 'Keep records of Multiple Cameras', 'Automatically Generate PDFs based on Camera Screenshots'] },
	{ name: 'CaptureX Surveillance (with Sharing Feature)', desc: '[Only for Windows] CaptureX Surveillance (with Sharing Feature)', amt: '$40.00', pay: '576807', id: 'capturex-advanced-exe', hi: false, tech: ['Utility', 'Windows'], feat: ['Utility for Keeping Camera Surveillance Records', 'Keep records of Multiple Cameras', 'Create contacts and share records with contacts', 'Automatically Generate PDFs based on Camera Screenshots'] }
];