app.controller('CharacterSelectCtrl', function ($scope, $rootScope) {

  $rootScope.heroClass = "is-info";

	$scope.characters = [
	{'name':'Atka', 'lvl':13},
	{'name':'Atka2', 'lvl':324},
	{'name':'Atkilla', 'lvl':1}
	];
});
