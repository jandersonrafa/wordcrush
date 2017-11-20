import angular from 'angular';

import appBaseSecured from './appBaseSecured';
import baseText from './baseText';
import gameSettings from './gameSettings';

export default angular.module('app.pages', [appBaseSecured, baseText, gameSettings]).name