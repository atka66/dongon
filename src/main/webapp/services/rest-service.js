app.service('rest', function ($http) {

	this.getTemplates = function () {
		return $http.get('rest/images/templates');
	};

	this.getTemplate = function (id) {
		return $http.get('rest/images/template/' + id);
	};

	this.getSources = function () {
		return $http.get('rest/images/sources');
	};

	this.getSource = function (id) {
		return $http.get('rest/images/source/' + id);
	};

	this.getImageByte = function (id) {
		return $http.get('rest/images/byte/' + id);
	};

	this.getRandomTemplate = function () {
		return $http.get('rest/images/random/template');
	};

	this.getRandomSource = function () {
		return $http.get('rest/images/random/source');
	};

	this.uploadTemplate = function (name, imageByte) {
		return $http.post('rest/images/template', {name: name, imageByte: imageByte});
	};

	this.uploadSource = function (name, imageByte) {
		return $http.post('rest/images/source', {name: name, imageByte: imageByte});
	};

	this.updateFrameOfTemplate = function (id, left, top, width, height) {
		return $http.patch('rest/images/template/' + id, {left: left, top: top, width: width, height: height});
	};

	this.updateImageName = function (id, name) {
		return $http.patch('rest/images/' + id, {name: name});
	};

	this.downvote = function (id) {
		return $http.post('rest/images/downvote', id);
	};

	this.redeem = function (id) {
		return $http.post('rest/images/redeem', id);
	};

	this.getFavorites = function () {
		return $http.get('rest/favs');
	}

	this.getFavorite = function (id) {
		return $http.get('rest/favs/' + id);
	};

	this.addFavorite = function (templateId, sourceId, message) {
		return $http.post('rest/favs', {templateId: templateId, sourceId: sourceId, message: message});
	}

	this.removeFavorite = function (id) {
		return $http.delete('rest/favs/' + id);
	};

	this.removeImage = function (id) {
		return $http.delete('rest/images/' + id);
	};

	this.getStats = function () {
		return $http.get('rest/stats');
	};
});
