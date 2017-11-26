import './assets/css/paper-kit.css?v=2.1.0'
import './assets/js/paper-kit.js?v=2.1.0'

import fogLow from './assets/img/fog-low.png'
import wordcrush from './assets/img/wordcrush.jpg'
import clouds from './assets/img/clouds.png'

let _$state
export default class AppBaseSecuredCtrl {
	constructor($state) {
		'ngInject'

		_$state = $state
	}

	fogLow() {
		return fogLow
	}

	creativeTimWhiteSlim2() {
		return creativeTimWhiteSlim2
	}

	soroushKarimi() {
		return soroushKarimi
	}

	federicoBeccari() {
		return federicoBeccari
	}

	joshuaStannard() {
		return joshuaStannard
	}

	getBackgroundImageBrigadeiro() {
		return wordcrush
	}

	getClouds() {
		return clouds
	}

	isStateBaseText() {
		return _$state.is("secured.baseText")
	}

	isStateGameSettings() {
		return _$state.is("secured.gameSettings")
	}

	isStatePlayGame() {
		return _$state.is("secured.playGame")
	}

	redirectBaseText() {
		_$state.go("secured.baseText")
	}

	redirectGameSettings() {
		_$state.go("secured.gameSettings")
	}

	redirectPlayGame() {
		_$state.go("secured.playGame")
	}
}
