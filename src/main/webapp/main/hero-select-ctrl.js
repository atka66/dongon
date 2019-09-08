app.controller('HeroSelectCtrl', function ($scope, $location) {

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	$scope.maxAchievements = 128;

	$scope.characters = [
	{
		'name': 'Atka',
		'lvl': 11, 'str': 13, 'agi': 17, 'int': 12,
		'hp': 23, 'sp': 12, 'gold': 55, 'currBestDungeon': 14,
		'achievements': 19, 'rebirths': 3, 'bestDungeon': 17
	},
	{
		'name': 'Batka',
		'lvl': 53, 'str': 78, 'agi': 61, 'int': 86,
		'hp': 164, 'sp': 120, 'gold': 682, 'currBestDungeon': 61,
		'achievements': 97, 'rebirths': 42, 'bestDungeon': 117
	}
	];

	$scope.selected = $scope.characters[0];

	$scope.select = function (selected) {
		$scope.selected = selected;
	}

	$scope.enterWorld = function () {
		$location.path("/main/hero/home");
	}
});
