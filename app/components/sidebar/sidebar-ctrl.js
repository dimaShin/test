import angular from 'angular';

export const controller = 'SidebarCtrl';
export const controllerAs = 'SBCtrl';

class SidebarCtrl {
  static $inject = ['$injector'];

  constructor ($injector) {
    "use strict";
    this.Users = $injector.get('Users');
    this.ROLES = $injector.get('ROLES');
    //this.users = this.Users.get();
  }
}

export default angular.module('test.components.sidebar.ctrl', [])
  .controller(controller, SidebarCtrl)
  .name;
