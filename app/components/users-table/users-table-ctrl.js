import angular from 'angular';

class UsersTableCtrl {
  static $inject = ['$injector', '$scope'];

  constructor($injector, $scope) {
    this.Users = $injector.get('Users');
    this.UsersFilter = $injector.get('UsersFilter');
    this.ROLES = $injector.get('ROLES');
    this.users = this.Users.get(this.UsersFilter.get());
    this.$filter = $injector.get('$filter');
    this.$location = $injector.get('$location');
    this.order = {
      by: 'name',
      reverse: false
    }
  }

  saveUsers() {
    this.Users.save();
  }

  startDeleting(user) {
    this.users.map(user => {
      user.deleting = false;
    });

    user.deleting = true;
  }

  deleteUser(user) {
    this.Users.delete(user);
    if (this._wasLastUser()) {
      this._goHome();
    }
  }

  orderBy(by) {
    "use strict";
    if (this.order.by = by) {
      this.order.reverse = !this.order.reverse;
    } else {
      this.order.reverse = false;
      this.order.by = by;
    }
  }

  onUserChange() {
    "use strict";
    this.saveUsers();

    if (this._wasLastUser()) {
      this._goHome();
    }
  }

  _wasLastUser() {
    "use strict";
    return !this.$filter('uFilter')(this.users).length;
    return !this.$filter('uFilter')(this.users).length;
  }

  _goHome() {
    "use strict";
    this.$location.path('/home');
  }
}

export const controller = 'UsersTableCtrl';
export const controllerAs = 'UTCtrl';
export default angular.module('test.components.users-table.ctrl', [])
  .controller(controller, UsersTableCtrl)
  .name;
