import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-switch/dist/js/bootstrap-switch.min.js'

import 'pnotify/src/pnotify.css'
import 'pnotify/src/pnotify.buttons.css'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './routes';
import components from './components';
import directives from './directives';
import pages from './pages';
import services from './services';

angular.module('app', [uirouter, components, directives, pages, services])
  .config(routes);