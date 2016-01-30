import angular from 'angular';

export default angular.module('test.components.sidebar.filter', [])
  .filter('roleLength', () => {
    "use strict";
    return (users, role) => {
      return users.filter( user => {
        return !!user.roles[role];
      }).length;
    }
  }).name;
