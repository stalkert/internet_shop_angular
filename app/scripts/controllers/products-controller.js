'use strict';
angular.module('testua')
  .controller('ListProducts', function (Product) {
    var listProduct = this;
    Product.getProductsAll()
      .success(function (data) {
        listProduct.item = data;
      });
  });
