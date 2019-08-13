app.controller('HeroSelectCtrl', function ($scope) {

	$scope.characters = [
	{'name':'Atka', 'lvl':13},
	{'name':'Batka', 'lvl':324},
	{'name':'Atkilla', 'lvl':1}
	];

	$scope.selected = $scope.characters[0];

	$scope.select = function (selected) {
		$scope.selected = selected;
	}
});
