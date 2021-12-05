app.directive('sideNav', function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/sidenav-tpl.html',
		controller: function controller($scope, $location) {
			$scope.loggedInUser = "test";

			$scope.visitablePlaces = [
				{label: 'Home', path: 'home'},
				{label: 'Quest board', path: 'questboard'},
				{label: 'Blacksmith', path: 'blacksmith'},
				{label: 'Inn', path: 'inn'},
				{label: 'Enchanter', path: 'enchanter'}
			];

			$scope.isActive = function (place) {
				return $location.path() === '/main/hero/' + place.path;
			}

			$scope.visitPlace = function (place) {
				$location.path("/main/hero/" + place.path);
			}
		}
	}
});
