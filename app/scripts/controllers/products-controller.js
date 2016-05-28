'use strict';
angular.module('testua')
  .controller('ListProducts', ['Product', '$rootScope', '$route', function (Product, $rootScope, $route) {
    var listProduct = this;

    var catId = parseInt($route.current.params.categoryId);
    Product.getProductsAll()
      .success(function (data) {
        listProduct.item = data;
        Product.getCurrentCategoryObj(catId);
        $rootScope.chosenId = [];
        $rootScope.getFilterPoducts = Product.getFilterPoducts;
        $rootScope.getFilterPrice = Product.getPoductsByPrice;
        $rootScope.getFilterBrend = Product.getPoductsByBrend;
      });

  }]);
