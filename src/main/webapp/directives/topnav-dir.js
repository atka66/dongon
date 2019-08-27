app.directive('topNav', function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/topnav-tpl.html',
		controller: function controller($scope) {
            $scope.loggedInUser = "test"
		}
	}
});
