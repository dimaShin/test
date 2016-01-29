import angular from 'angular';
import _ from 'lodash';

class UserFilter {
  static $inject = ['$injector'];

  constructor ($injector) {
    const ROLES = $injector.get('ROLES');

    this._filter = {};

    _.forEach(ROLES, role => {
      this._filter[role.key] = false;
    });

    this.callbacks = {};

  }

  get () {
    return angular.copy(this._filter);
  }

  setOptions (filterState) {
    angular.merge(this._filter, filterState);
    _.forEach(this.callbacks, callback => callback());
  }

  setOption (key, value, theOnly) {
    if (this._filter[key] === undefined) {
      throw new Error('Trying to set unregistered filter value: ' + key);
    }

    if (theOnly) {
      _.forEach(this._filter, (role, key) => {
        this._filter[key] = false;
      })
    }

    this._filter[key] = !!value;

    _.forEach(this.callbacks, callback => callback());
  }

  onUpdate (listener, callback) {
    this.callbacks[listener] = callback;
  }

  destroy (listener) {
    delete this.callbacks[listener];
  }
}

export default angular.module('test.components.user-filter.service', [])
  .service('UsersFilter', UserFilter).name;
