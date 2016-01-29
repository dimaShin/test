import angular from 'angular';

class UsersTableCtrl {
  static $inject = ['$injector', '$scope'];

  constructor($injector, $scope) {
    this.Users = $injector.get('Users');
    this.UsersFilter = $injector.get('UsersFilter');
    this.ROLES = $injector.get('ROLES');
    this.users = this.Users.get(this.UsersFilter.get());

    this.UsersFilter.onUpdate(controller, () => {
      console.log('update');
      this._updateUsers();
    });
    $scope.$on('destroy', this.UsersFilter.destroy.bind(this, controller));
  }

  _updateUsers() {
    const filter = this.UsersFilter.get();
    this.users = this.Users.get()
      .filter(user => {
        return true;
      });
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
  }
}

export const controller = 'UsersTableCtrl';
export const controllerAs = 'UTCtrl';
export default angular.module('test.components.users-table.ctrl', [])
  .controller(controller, UsersTableCtrl)
  .name;
