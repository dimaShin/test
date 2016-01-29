import angular from 'angular';

export default angular.module('test.constants.roles', [])
  .constant('ROLES', {
    RICH: {
      key: 'rich',
      title: 'Rich'
    },
    SUPERPOWERS: {
      key: 'superpowers',
      title: 'Superpowers'
    },
    GENIUS: {
      key: 'genius',
      title: 'Genius'
    }
  }).name;
