'use strict';
angular.module('testua')
  .factory('Product', function ProductFactory($http) {

    return {
      getProductsAll: function () {
        return $http.get('data/product.json');
      },
      getProductById: function (productId) {
        debugger;
        var data2;
          $http.get('data/product.json').success(function (data) {

          data2= data;
            return data2;
        });
      return data2;
      }
    };
  });
