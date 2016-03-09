'use strict';
angular.module('testua')
  .factory('Product', function ProductFactory($http) {

    return {
      getProductsAll: function () {
        return $http.get('data/product.json');
      },
      getProductById: function () {
       return $http.get('data/product.json');

      }
    };
  });
