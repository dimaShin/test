require('./sidebar.scss');
import angular from 'angular';
import template from './sidebar.html';
import SidebarCtrl, {controller, controllerAs} from './sidebar-ctrl.js';
import RoleLengthFilter from './role-length.js';

export default angular.module('test.components.sidebar', [
  SidebarCtrl,
  RoleLengthFilter
])
  .directive('testSidebar', () => {
    "use strict";
    return {

      restrict: 'E',
      scope: true,
      template,
      controller,
      controllerAs

    }
  })
  .name;
