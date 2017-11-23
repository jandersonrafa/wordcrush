import angular from 'angular'

let _$http
class PlayGameService {
	constructor($http) {
		'ngInject'

		_$http = $http
	}

	findSettings() {
		return _$http.get('/api/play-game/find-settings')
	}

}

export default angular
	.module('playGameService', [])
	.service('playGameService', PlayGameService)
	.name
