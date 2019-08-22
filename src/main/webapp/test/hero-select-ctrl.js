app.controller('HeroSelectCtrl', function ($scope) {

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	$scope.characters = [
	{'name': 'Atka', 'lvl': 11, 'gold': 55, 'maxLvl': 13, 'deaths': 3},
	{'name': 'Batka', 'lvl': 84, 'gold': 98724, 'maxLvl': 125, 'deaths': 12}
	];

	$scope.selected = $scope.characters[0];

	$scope.select = function (selected) {
		$scope.selected = selected;
	}
});
