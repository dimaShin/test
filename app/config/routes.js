import angular from 'angular';
import ngRoute from 'angular-route';
import _ from 'lodash';

export default angular.module('test.config.routes', [ngRoute])
  .config(['$routeProvider', '$locationProvider', 'ROLES', ($routeProvider, $locationProvider, ROLES) => {
    "use strict";
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise('/home');
    $routeProvider
      .when('/home', {
        template: '<test-home />',
        resolve: {
          filter: ['UsersFilter', (UsersFilter) => {
            return UsersFilter.setAll(false);
          }]
        }
      });

    _.forEach(ROLES, role => {
      $routeProvider.when('/' + role.key, {
        template: '<test-home />',
        resolve: {
          filter: ['UsersFilter', (UsersFilter) => {
            return UsersFilter.setOption(role.key, true, true);
          }]
        }
      });
    });
  }]).name;
