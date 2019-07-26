app.service('rest', function ($http) {

	this.getTemplates = function () {
		return $http.get('login');
	};

/*
	PLACEHOLDER FOR $http USAGE WITH DIFFERENT PARAMETERS
	this.updateFrameOfTemplate = function (id, left, top, width, height) {
		return $http.patch('rest/images/template/' + id, {left: left, top: top, width: width, height: height});
	};
*/

});
