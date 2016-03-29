'use strict';
angular.module('testua')
  .directive('leadersAndLatest', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/leaders-of-sales.html',
      controller: 'ListProducts',
      controllerAs: 'products'

    };
  });
