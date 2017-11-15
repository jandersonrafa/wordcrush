import fogLow from './assets/img/fog-low.png'
import creativeTimWhiteSlim2 from './assets/img/creative-tim-white-slim2.png'
import soroushKarimi from './assets/img/soroush-karimi.jpg'
import federicoBeccari from './assets/img/federico-beccari.jpg'
import joshuaStannard from './assets/img/joshua-stannard.jpg'
import brigadeiro from './assets/img/brigadeiro.jpg'
import clouds from './assets/img/clouds.png'

export default class AppBaseSecuredCtrl {
	constructor() {
		'ngInject'
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
		return brigadeiro
	}

	getClouds() {
		return clouds
	}
}
