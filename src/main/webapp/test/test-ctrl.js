app.controller('StatCtrl', function ($rootScope, $scope, rest, $route, growl, $location) {
	$rootScope.currentPage = "stat";

	$scope.ready = false;

	rest.getStats().then(function (response) {
		$scope.stats = response.data;
		rest.getImageByte($scope.stats.mostHatedTemplate.id).then(function (imageByteResp) {
			$scope.stats.mostHatedTemplate.imageByte = atob(imageByteResp.data.byte);
		});
		rest.getImageByte($scope.stats.mostHatedSource.id).then(function (imageByteResp) {
			$scope.stats.mostHatedSource.imageByte = atob(imageByteResp.data.byte);
		});
		$scope.ready = true;
	}, function (reason) {
		console.log(reason);
	});

	$scope.goToTemplate = function (id) {
		$location.path("/templates/" + id);
	}

	$scope.goToSource = function (id) {
		$location.path("/sources/" + id);
	}

	$scope.redeemImage = function (id) {
		rest.redeem(id).then(
			function () {
				growl.success("A kép megváltást nyert!");
				$route.reload();
			}, function (reason) {
				growl.error(reason.data.message);
			}
		);
	};

	$scope.removeImage = function (image) {
		if (confirm("Biztos törölni akarod a " + image.name + " nevű képet?")) {
			rest.removeImage(image.id).then(function () {
				growl.success("Kép sikeresen törölve.");
				$route.reload();
			}, function (reason) {
				growl.error(reason.data.message);
			});
		}
	};
});
