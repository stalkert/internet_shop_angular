'use strict';
angular.module('testua')
  .directive('productSingleItem', function () {
    return {

      restrict: 'E',
      templateUrl: 'views/templates/product-single-template.html'

    };
  });

