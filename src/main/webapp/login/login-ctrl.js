app.controller('LoginCtrl', function ($scope, rest, $location, $window, growl) {

	$scope.login = function () {
		if (!$scope.username || !$scope.password) {
			growl.error("Username and password are required to login!")
		} else {
			// store login details in cookie
			$window.localStorage.setItem('auth', $scope.username + ':' + $scope.password);
			rest.getPrincipal().then(function (resp) {
				$location.path("/main/hero-select");
			}, function (resp) {
				growl.error("Cannot login! Please check if your username and password are correct!")
				// remove cookie if login failed
				$window.localStorage.removeItem('auth')
				$location.path("/");
			});
		}
	}

	$scope.signup = function () {
		if (!$scope.registerUsername || !$scope.registerPassword) {
			growl.error("Username and password are required to sign up!")
		} else {
			console.log("TODO sign up")
		}
	}
});
