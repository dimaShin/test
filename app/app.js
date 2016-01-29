import angular from 'angular';
import config from './config';
import constants from './constants';
import helpers from './helpers';
import components from './components';

angular.module('test', [ constants, config, helpers, components ]);
