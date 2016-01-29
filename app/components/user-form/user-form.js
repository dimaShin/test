require('./user-form.scss');
import angular from 'angular';
import template from './user-form.html';
import UserFormCtrl, {controller, controllerAs} from './user-form-ctrl';

export default angular.module('test.components.user-form', [ UserFormCtrl ])
  .directive('testUserForm', () => {
    "use strict";
    return {
      restrict: 'E',
      scope: true,
      template,
      controller,
      controllerAs
    }
  }).name;
