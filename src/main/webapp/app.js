var app = angular.module('Dongon', [])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'login/login-tpl.html',
				controller: 'LoginCtrl'
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
