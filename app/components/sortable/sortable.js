import angular from 'angular';

export default angular.module('test.components.sortable', [])
  .directive('testSortable', () => {
    "use strict";
    return {

      restrict: 'E',
      scope: {
        options: '=testSortable'
      },


    }
  })
