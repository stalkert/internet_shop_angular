'use strict';
angular.module('testua')
  .controller('ListProducts', function (Product, $rootScope) {
    var listProduct = this;
    Product.getProductsAll()
      .success(function (data) {
        listProduct.item = data;
        $rootScope.choosenId = [];
        $rootScope.getFilterPoducts = Product.getFilterPoducts;
      });
  });
