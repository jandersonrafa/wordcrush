import angular from 'angular'

let _$http
class GameSettingsService {
	constructor($http) {
		'ngInject'

		_$http = $http
	}

	findSettings() {
		return _$http.get('/api/game-settings/find-settings')
	}

	save(listKeywordHelps) {
		return _$http.post('/api/game-settings/save', listKeywordHelps)
	}

}

export default angular
	.module('gameSettingsService', [])
	.service('gameSettingsService', GameSettingsService)
	.name
