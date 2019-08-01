app.controller('LoginCtrl', function ($scope, rest, $cookies, auth, $location) {

	$scope.login = function () {
		// store login details in cookie
		$cookies.put('auth-header', btoa($scope.username + ':' + $scope.password))
		rest.getPrincipal().then(function (resp) {
			$location.path("/test");
		}, function (resp) {
			console.log("Could not log in!");
			// remove cookie if login failed
			$cookies.remove('auth-header');
		});
	}

});
