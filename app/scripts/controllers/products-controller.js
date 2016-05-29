'use strict';
angular.module('testua')
  .controller('ListProducts', ['Product', '$rootScope', '$route','$scope', function (Product, $rootScope, $route,$scope) {
    var listProduct = this;


    var catId = parseInt($route.current.params.categoryId);
    Product.getProductsAll()
      .success(function (data) {
        listProduct.item = data;
        $rootScope.pageNo = 0;
        $rootScope.pageSize = 8;
        $scope.$watch('filteredProducts.length',function(){
          if($scope.filteredProducts) {
            $rootScope.pageCount = Math.ceil($scope.filteredProducts.length / $rootScope.pageSize);
          }
        });
        Product.getCurrentCategoryObj(catId);
        $rootScope.chosenId = [];
        $rootScope.getFilterPoducts = Product.getFilterPoducts;
        $rootScope.getFilterPrice = Product.getPoductsByPrice;
        $rootScope.getFilterBrend = Product.getPoductsByBrend;
      });

  }]);
