'use strict';
angular.module('testua')
  .factory('Product', function ProductFactory($http,$rootScope) {

    return {
      getProductsAll: function () {
        return $http.get('data/product.json');
      },
      getProductById: function () {
        return $http.get('data/product.json');

      },
      getFilterPoducts: function (product) {
        var choosenIdLength = $rootScope.choosenId.length;
        if (choosenIdLength === 0) {
          return true;
        } else {
          for (var i = 0; i < choosenIdLength; i++) {
            if (product.categoryId === $rootScope.choosenId[i]) {
              return true;
            }
          }
        }
      }
    };
  });
