app.controller('LoginCtrl', function ($scope, rest, $cookies, auth) {

	$scope.login = function () {
		// store login details in cookie
		$cookies.put('auth-header', btoa($scope.username + ':' + $scope.password))
		rest.getPrincipal().then(function (resp) {
			console.log("HAPPY")
			console.log(resp);
		}, function (resp) {
			console.log("SAD")
			console.log(resp);
			// remove cookie if login failed
			$cookies.remove('auth-header');
		});
	}

}).controller('SuccCtrl', function ($scope) { //TODO
	$scope.msg = "SUCC";
}).controller('FailCtrl', function ($scope) {
	$scope.msg = "FAIL";
});
