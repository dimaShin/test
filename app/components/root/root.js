require('./root.scss');
import angular from 'angular';
import template from './root.html';

export default angular.module('test.components.root', [])
  .directive('root', () => {
    "use strict";
    return {

      restrict: 'E',
      scope: false,
      template

    }
  })
  .name;

