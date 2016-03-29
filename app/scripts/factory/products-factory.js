'use strict';
angular.module('testua')
  .factory('Product', ['$http', '$rootScope', function ProductFactory($http, $rootScope) {

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
      },
      setRootScopePrice: function(low,high){
        $rootScope.lowPrice = low;
        $rootScope.highPrice = high;
      },
      getPoductsByPrice:function (product) {
        //debugger;
        return product.price >= $rootScope.lowPrice && product.price <= $rootScope.highPrice;
      },
      getCurrentCategoryObj: function getCurrent(id) {
        $http.get('data/category.json').success(function (data) {
          var arr = data.filter(function (categoryObj) {
            return categoryObj.categoryId === id;
          });
          console.log(arr[0]);
          (function addIdToArray(id) {
            if (arr[0].listSubCat === false) {
              $rootScope.chosenId.push(id)
            } else {
              arr[0].listSubCat.forEach(function (elem) {
                getCurrent(elem);
              });
            }
          })(id);

        });
      }
    };
  }]);
