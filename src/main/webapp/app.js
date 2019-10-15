var app = angular.module('Dongon', ['ngRoute', 'angular-growl'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'login/login-tpl.html',
				controller: 'LoginCtrl'
			})
			.when('/main/hero-select', {
				templateUrl: 'main/hero-select-tpl.html',
				controller: 'HeroSelectCtrl'
			})
			.when('/main/hero/home', {
				templateUrl: 'main/hero/home-tpl.html',
				controller: 'HomeCtrl'
			})
			.when('/main/hero/questboard', {
				templateUrl: 'main/hero/questboard-tpl.html',
				controller: 'QuestboardCtrl'
			})
			.when('/main/hero/blacksmith', {
				templateUrl: 'main/hero/blacksmith-tpl.html',
				controller: 'BlacksmithCtrl'
			})
			.when('/main/hero/inn', {
				templateUrl: 'main/hero/inn-tpl.html',
				controller: 'InnCtrl'
			})
			.when('/main/hero/enchanter', {
				templateUrl: 'main/hero/enchanter-tpl.html',
				controller: 'EnchanterCtrl'
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
