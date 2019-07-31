app.service('rest', function ($http, $cookies) {

	// login endpoint to check if credentials are correct (by checking Authorization header via backend)
	this.getPrincipal = function () {
		return $http({
			method: 'GET',
			url: 'rest/secure/user',
			headers: {
				'Authorization': 'Basic ' + $cookies.get('auth-header')
			}
		});
	};

/*
	PLACEHOLDER FOR $http USAGE WITH DIFFERENT PARAMETERS
	this.updateFrameOfTemplate = function (id, left, top, width, height) {
		return $http.patch('rest/images/template/' + id, {left: left, top: top, width: width, height: height});
	};
*/

});
