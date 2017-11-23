import angular from 'angular';

import appBaseSecured from './appBaseSecured';
import baseText from './baseText';
import gameSettings from './gameSettings';
import playGame from './playGame';

export default angular.module('app.pages', [appBaseSecured, baseText, gameSettings, playGame]).name