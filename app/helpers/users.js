import angular from 'angular';
import _ from 'lodash';

class UsersService {
  static $inject = ['API'];

  constructor (API) {
    this.API = API;
    this._users = [];
    this.fetch();
  }

  get() {
    return this._users;
  }

  getQuantityByRole(role) {
    "use strict";
    if (!role) {
      return this._users.length;
    }

    return this._users.filter(user => {
      return user.roles[role];
    }).length;

  }

  add(user) {
    if (!user.id) {
      user.id = Math.ceil(Math.random() * 10e5);
    }
    this._users.push(user);
    this.save();
  }

  delete(user) {
    const index = this._users.findIndex(u => u.id === user.id);
    this._users.splice(index, 1);
    this.save();
    return this._users;
  }

  fetch() {
    const users = this.API.getUsers();
    if (!users) {
      return;
    }
    this._users = users;
  }

  save() {
    this.API.setUsers(this._users);
  }
}

export default angular.module('test.helpers.users', [])
  .service('Users', UsersService).name;
