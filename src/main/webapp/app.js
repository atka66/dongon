var app = angular.module('Dongon', ['ngRoute', 'angular-growl'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'login/login-tpl.html',
				controller: 'LoginCtrl'
			})
			.when('/test/character-select', {
				templateUrl: 'test/character-select-tpl.html',
				controller: 'CharacterSelectCtrl'
			});
	})
	.config(['growlProvider', function(growlProvider) {
		growlProvider.globalDisableIcons(true);
		growlProvider.globalDisableCloseButton(true);
		growlProvider.globalDisableCountDown(true);
		growlProvider.globalTimeToLive(3000);
	}])
	.run(function ($rootScope, $location, $window) {
		$rootScope.$on('$routeChangeStart', function($event, next, current) {
			if (!$window.localStorage.getItem('auth')) {
				console.log("auth not found, goto root")
				$location.path("/");
			} else {
				console.log("auth found, staying at place")
			}
		});
	});
