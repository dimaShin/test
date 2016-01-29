import angular from 'angular';

class API {
  static $inject = ['$window'];

  constructor ($window) {
    this.storage = $window.localStorage;
  }

  getUsers (query) {
    if (!query) {
      return angular.fromJson(this.storage.getItem('test-users'));
    }
  }

  setUsers (users) {
    return this.storage.setItem('test-users', angular.toJson(users));
  }
}

export default angular.module('test.helpers.api', [])
  .service('API', API).name;
