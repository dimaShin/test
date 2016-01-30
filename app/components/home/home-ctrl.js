import angular from 'angular';

class HomeCtrl {
  static $inject = ['$injector'];

  constructor($injector) {
    "use strict";
    const Users = $injector.get('Users');
    this.users = Users.get();
  }
}

export const controller = 'HomeCtrl';
export const controllerAs = 'HCtrl';
export default angular.module('test.components.home.ctrl', [])
  .controller(controller, HomeCtrl).name;
