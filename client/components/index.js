import angular from 'angular';
import home from './home';
import teste from './teste';
import appBaseSecured from './appBaseSecured';

export default angular.module('app.components', [appBaseSecured, home, teste]).name