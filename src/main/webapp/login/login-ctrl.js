app.controller('MainCtrl', function ($rootScope, $scope, rest, scale, $window, growl, $location) {
	$rootScope.currentPage = "main";

	$scope.ready = true;
	$scope.alreadyDownvotedTemplate = false;
	$scope.alreadyDownvotedSource = false;
	$scope.alreadyFaved = false;

	angular.element($window).bind('resize', function() {
		if ($scope.template && $scope.source) {
			adjustScale();
		}
	});

	$scope.fryImage = function () {
		$scope.ready = false;
		$scope.alreadyDownvotedTemplate = false;
		$scope.alreadyDownvotedSource = false;
		$scope.alreadyFaved = false;
		rest.getRandomTemplate().then(function (templateResp) {
			$scope.template = templateResp.data;
			rest.getImageByte($scope.template.id).then(function (tempByteResp) {
				$scope.template.imageByte = atob(tempByteResp.data.byte);
				rest.getRandomSource().then(function (sourceResp) {
					$scope.source = sourceResp.data;
					rest.getImageByte($scope.source.id).then(function (srcByteResp) {
						$scope.source.imageByte = atob(srcByteResp.data.byte);
						adjustScale();
						$scope.ready = true;
					});
				}, function (reason) {
					console.log(reason);
					$scope.ready = true;
				});
			});
		}, function (reason) {
			console.log(reason);
			$scope.ready = true;
		});
	};

	var adjustScale = function () {
		$('#main-source').css(scale.getScaledPosition($scope.template, "main-template"));
	}

	$scope.goToTemplate = function () {
		$location.path("/templates/" + $scope.template.id);
	}

	$scope.goToSource = function () {
		$location.path("/sources/" + $scope.source.id);
	}

	$scope.downvoteTemplate = function () {
		if (!$scope.alreadyDownvotedTemplate) {
			rest.downvote($scope.template.id).then(
				function () {
					growl.success("Sablon leértékelve!");
					$scope.alreadyDownvotedTemplate = true;
				}, function (reason) {
					console.log(reason);
				}
			);
		}
	};

	$scope.downvoteSource = function () {
		if (!$scope.alreadyDownvotedSource) {
			rest.downvote($scope.source.id).then(
				function () {
					growl.success("Készlet leértékelve!");
					$scope.alreadyDownvotedSource = true;
				}, function (reason) {
					console.log(reason);
				}
			);
		}
	};

	$scope.favorite = function () {
		if (!$scope.alreadyFaved) {
			var message = prompt("Hagyj megjegyzést!", $scope.template.name + " - " + $scope.source.name);
            if (message) {
				rest.addFavorite($scope.template.id, $scope.source.id, message).then(
					function () {
						growl.success("Kedvencekhez adva!");
						$scope.alreadyFaved = true;
					}, function (reason) {
						growl.error(reason.data.message);
					}
				);
			}
		}
	}
});
