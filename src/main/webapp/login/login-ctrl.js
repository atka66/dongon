app.controller('LoginCtrl', function ($rootScope, $scope, rest, state, reject) {

	// private methods

	// initial procedure

	// scope methods
	$scope.loginServer = function () {
		rest.loginServer().then(function (response) {
			state.relocateToServerState();
		}, function (reason) {
			reject.handleReject(reason);
		});
	};

	$scope.loginPlayer = function () {
		rest.loginPlayer({name: $scope.playerName}).then(function (response) {
			$rootScope.stopborosPlayerName = $scope.playerName;
			state.relocateToPlayerState();
		}, function (reason) {
			reject.handleReject(reason);
		});
	};

	// refresh every 1 seconds
});
