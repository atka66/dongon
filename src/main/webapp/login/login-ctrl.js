app.controller('LoginCtrl', function ($scope, rest, $location, $window) {

	$scope.login = function () {
		// store login details in cookie
		$window.localStorage.setItem('auth', $scope.username + ':' + $scope.password);
		rest.getPrincipal().then(function (resp) {
			$location.path("/test/character-select");
		}, function (resp) {
			console.log("Could not log in!");
			// remove cookie if login failed
			$window.localStorage.removeItem('auth')
			$location.path("/");
		});
	}

});
