import angular from 'angular';

export default angular.module('test.components.users-table.filter', [])
  .filter('uFilter', ['UsersFilter', (UsersFilter) => {
    "use strict";

    return users => {
      const filter = UsersFilter.get();
      return users.filter(user => {
        for(let i in filter) {
          if (!filter.hasOwnProperty(i)) {
            continue;
          }
          if (filter[i] && !user.roles[i]) {
            return false;
          }
        }
        return true;
      });
    }

  }]).name;
