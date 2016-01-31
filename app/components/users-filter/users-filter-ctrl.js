import angular from 'angular';

class UsersFilterCtrl {
  static $inject = ['$injector', '$scope'];

  constructor($injector, $scope) {
    this.ROLES = $injector.get('ROLES');
    this.$location = $injector.get('$location');
    this.Users = $injector.get('Users');
  }

  isActive(role) {
    return '/' + role === this.$location.path();
  }

}

export const controller = 'UsersFilterCtrl';
export const controllerAs = 'UFtCtrl';
export default angular.module('test.components.users-filter.ctrl', [])
  .controller(controller, UsersFilterCtrl)
  .name;


