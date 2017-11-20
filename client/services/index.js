import angular from 'angular'

import baseTextService from './baseTextService'
import gameSettingsService from './gameSettingsService'

export default angular
    .module('administrativo.services', [
        baseTextService,
        gameSettingsService,
    ])
    .name
