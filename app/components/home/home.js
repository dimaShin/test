import angular from 'angular';
import HomeCtrl, {controller, controllerAs} from './home-ctrl.js';
import template from './home.html';

export default angular.module('test.components.home', [HomeCtrl])
  .directive('testHome', () => {
    "use strict";
    return {
      restrict: 'E',
      scope: true,
      template,
      controller,
      controllerAs
    }
  }).name;
