import angular from 'angular';
import _ from 'lodash';

class UserFilter {
  static $inject = ['$injector'];

  constructor ($injector) {
    const ROLES = $injector.get('ROLES');

    this.$rootScope = $injector.get('$rootScope');

    this._filter = {};

    _.forEach(ROLES, role => {
      this._filter[role.key] = false;
    });

  }

  get () {
    return angular.copy(this._filter);
  }

  setOptions (filterState) {
    angular.merge(this._filter, filterState);
    this._broadcast('update');
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

    this._broadcast('update');
  }

  setAll (state) {
    "use strict";
    _.keys(this._filter).map(role => {
      this._filter[role] = state;
    });

    this._broadcast('update');
  }

  _broadcast (action) {
    "use strict";
    this.$rootScope.$broadcast('users-filter:' + action);
  }
}

export default angular.module('test.components.user-filter.service', [])
  .service('UsersFilter', UserFilter).name;
