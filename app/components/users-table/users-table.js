require('./users-table.scss');
import angular from 'angular';
import template from './users-table.html';
import UsersTableCtrl, {controller, controllerAs} from './users-table-ctrl';
import uFilter from './users-table-filter';

export default angular.module('test.components.users-table', [
  UsersTableCtrl,
  uFilter
]).directive('testUsersTable', () => {
    "use strict";
    return {
      restrict: 'E',
      scope: true,
      template,
      controller,
      controllerAs
    }
  }).name;