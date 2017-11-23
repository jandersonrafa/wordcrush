import angular from 'angular'

import baseTextService from './baseTextService'
import gameSettingsService from './gameSettingsService'
import playGameService from './playGameService'

export default angular
    .module('administrativo.services', [
        baseTextService,
        gameSettingsService,
        playGameService,
    ])
    .name
