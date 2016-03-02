'use strict';
angular.module('testua')
  .factory('Product', function ProductFactory($http) {

    return {
      getProductsAll: function () {
        return $http.get('data/product.json');
      },
      getProductById: function (productId) {
        debugger;
         return  $http.get('data/product.json').success(function (data) {

           var data1 = data.filter(function(item){
             return item.id ===productId;
           });
         return data1[0];
        });

      }
    };
  });
