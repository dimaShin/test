require('./user-filter.scss');
import angular from 'angular';
import template from './users-filter.html';
import UsersFilterCtrl, {controller, controllerAs} from './users-filter-ctrl';
import UserFilterService from './users-filter-service';

export default angular.module('test.components.user-filter', [
  UserFilterService,
  UsersFilterCtrl
])
  .directive('testUsersFilter', () => {
    "use strict";
    return {
      restrict: 'E',
      scope: true,
      template,
      controller,
      controllerAs
    }
  }).name;

