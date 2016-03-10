'use strict';
angular.module('testua')
  .controller('ListProducts', function (Product, $rootScope) {
    var listProduct = this;
    Product.getProductsAll()
      .success(function (data) {
        listProduct.item = data;
        $rootScope.choosenId = [];
        $rootScope.getFilterPoducts = function (product) {
          var choosenIdLength = $rootScope.choosenId.length;
          if (choosenIdLength === 0) {
            return true;
          } else {
            for (var i = 0; i < choosenIdLength; i++) {
              if(product.categoryId === $rootScope.choosenId[i]) {
                return true;
              }
            }
          }
        };
      });

    /* listProduct.getListCategoryId = function (itemProduct) {

     var arrCatId = $rootScope.arrSubCat.length;
     for (var i = 0; i < arrCatId; i++) {
     if (itemProduct.categoryId == $rootScope.arrSubCat[i]) {
     return itemProduct.categoryId === $rootScope.arrSubCat[i];
     }
     }
     };*/
  });
