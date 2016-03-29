'use strict';
angular.module('testua')
  .directive('brend', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/brend-filter-template.html',
      controller: 'Brend',
      controllerAs: 'brends'

    };
  });
