import angular from 'angular';

class HomeCtrl {
  static $inject = ['$injector'];

  constructor($injector) {
  }
}

export const controller = 'HomeCtrl';
export const controllerAs = 'HCtrl';
export default angular.module('test.components.home.ctrl', [])
  .controller(controller, HomeCtrl).name;
