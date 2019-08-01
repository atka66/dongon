var app = angular.module('Dongon', ['ngRoute', 'ngCookies', 'angular-growl'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'login/login-tpl.html',
				controller: 'LoginCtrl'
			})
			.when('/test', {
				templateUrl: 'test/test-tpl.html',
				controller: 'TestCtrl'
			});
	})
	.config(['growlProvider', function(growlProvider) {
		growlProvider.globalDisableIcons(true);
		growlProvider.globalDisableCloseButton(true);
		growlProvider.globalDisableCountDown(true);
		growlProvider.globalTimeToLive(3000);
	}])
	.run(function ($rootScope, $location, $cookies) {
		$rootScope.$on('$routeChangeStart', function($event, next, current) {
			if (!$cookies.get('auth-header')) {
				console.log("cookie not found, goto root")
				$location.path("/");
			} else {
				console.log("cookie found, staying at place")
			}
		});
	});
