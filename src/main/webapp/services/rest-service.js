app.service('rest', function ($http, $window) {

	var getAuthHeader = function () {
          var auth = $window.localStorage.getItem('auth');
	return auth ? {'Authorization' : 'Basic ' + btoa(auth)} : null;
	}

	var sendHttp = function (method, url, data) {
		return $http({
			method: method,
			url: url,
			headers: getAuthHeader(),
			data: data
		});
	}

	// login endpoint to check if credentials are correct (by checking Authorization header via backend)
	this.getPrincipal = function () {
		return sendHttp('GET', 'rest/secure/user', null);
	};

});
