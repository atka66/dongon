var app = angular.module('Dongon', ['ngRoute', 'angular-growl'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'login/login-tpl.html',
				controller: 'LoginCtrl'
			})
			.when('/succ', {
				templateUrl: 'login/login-tpl.html',
				controller: 'SuccCtrl'
			})
			.when('/fail', {
				templateUrl: 'login/login-tpl.html',
				controller: 'FailCtrl'
			});
	})
	.config(['growlProvider', function(growlProvider) {
		growlProvider.globalDisableIcons(true);
		growlProvider.globalDisableCloseButton(true);
		growlProvider.globalDisableCountDown(true);
		growlProvider.globalTimeToLive(3000);
	}]);
