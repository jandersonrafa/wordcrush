import angular from 'angular'

let _$http
class BaseTextService {
	constructor($http) {
		'ngInject'

		_$http = $http
	}

	// $http.post('/someUrl', data, config).then(successCallback, errorCallback);

	import(text) {
		return _$http.post('/api/base-text/import', {text})
	}

}

export default angular
	.module('baseTextService', [])
	.service('baseTextService', BaseTextService)
	.name
