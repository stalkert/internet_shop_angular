'use strict';
angular.module('testua')
  .factory('Product',['$http','$rootScope', function ProductFactory($http,$rootScope) {

    return {
      getProductsAll: function () {
        return $http.get('data/product.json');
      },
      getProductById: function () {
        return $http.get('data/product.json');

      },
      getFilterPoducts: function (product) {
        var choosenIdLength = $rootScope.chosenId.length;
        if (choosenIdLength === 0) {
          return true;
        } else {
          for (var i = 0; i < choosenIdLength; i++) {
            if (product.categoryId === $rootScope.chosenId[i]) {
              return true;
            }
          }
        }
      }
    };
  }]);
