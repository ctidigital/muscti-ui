'use strict';

angular.module('musictiApp')
  .directive('topBar', function () {
    return {
      templateUrl: 'views/components/topbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
