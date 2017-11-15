import angular from 'angular';
// import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css'

import 'popper.js/dist/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap-switch/dist/js/bootstrap-switch.min.js';

import uirouter from 'angular-ui-router';
// import index from './base';

import routes from './routes';
import components from './components';
import directives from './directives';
import 'bootstrap/dist/css/bootstrap.css'
// angular.module('app', [index]);

angular.module('app', [uirouter, components, directives])
  .config(routes);