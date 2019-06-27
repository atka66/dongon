var app = angular.module('Dongon', ['ngRoute', 'angular-growl'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'login/login-tpl.html',
				controller: 'LoginCtrl'
			})
			.when('/test', {
				templateUrl: 'test/test-tpl.html',
				controller: 'TestCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.config(['growlProvider', function(growlProvider) {
		growlProvider.globalDisableIcons(true);
		growlProvider.globalDisableCloseButton(true);
		growlProvider.globalDisableCountDown(true);
		growlProvider.globalTimeToLive(3000);
	}]);
