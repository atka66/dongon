app.directive('sideNav', function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/sidenav-tpl.html',
		controller: function controller($scope) {
            $scope.loggedInUser = "test"
		}
	}
});
