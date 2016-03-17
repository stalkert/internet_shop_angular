'use strict';
angular.module('testua')
  .directive('categoryMenu', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/category-menu.html',
      controller: 'ListCategory',
      controllerAs: 'categories'

    };
  });
angular.module('testua')
  .directive('categoryMenuRoute', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/category-menu-route.html',
      controller: 'ListCategory1',
      controllerAs: 'categories'

    };
  });
