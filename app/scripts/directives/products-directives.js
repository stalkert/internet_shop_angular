'use strict';
angular.module('testua')
    .directive('productItem', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/templates/products-template.html',
            controller: 'ListProducts',
            controllerAs: 'products'
        };
    });
