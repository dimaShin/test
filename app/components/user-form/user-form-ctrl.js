import angular from 'angular';
import _ from 'lodash';

export const controller = 'UserFromCtrl';
export const controllerAs = 'UFCtrl';

class UserFromCtrl {
  static $inject = ['$injector', '$scope'];

  constructor ($injector, $scope) {
    this.Users = $injector.get('Users');
    this.UsersFilter = $injector.get('UsersFilter');
    this.$location = $injector.get('$location');
    this.$route = $injector.get('$route');
    this.ROLES = $injector.get('ROLES');
    this._init();
    this._watchFilter($scope);
  }

  _init () {
    this.user = {
      roles: this.UsersFilter.get()
    };
  }

  _watchFilter ($scope) {
    this.UsersFilter.onUpdate(controller, () => {
      this.user.roles = this.UsersFilter.get();
    });

    $scope.$on('destroy', this.UsersFilter.destroy.bind(this, controller));
  }

  onSubmit () {
    this.Users.add(this.user);

    const route = this.$location.path().substr(1);

    if (!this.user.roles[route]) {
      this.UsersFilter.setOption(route, false);
      this.$location.path('/home');
    }

    this._init();
  }
}

export default angular.module('test.components.user-form.ctrl', [])
  .controller(controller, UserFromCtrl).name;
