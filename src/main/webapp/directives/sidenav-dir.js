app.directive('sideNav', function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/sidenav-tpl.html',
		controller: function controller($scope) {
			$scope.visitablePlaces = ['home', 'billboard', 'blacksmith', 'inn', 'enchanter'];

            $scope.loggedInUser = "test"

            $scope.visitPlace = function (place) {

            }
		}
	}
});
