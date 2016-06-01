'use strict';
angular.module('testua')
  .controller('ListProducts', ['Product', '$rootScope', '$route','$scope', function (Product, $rootScope, $route,$scope) {
    var listProduct = this;
    //firebase.database().ref( 'product').on('value',function(snapshot){
    //  //debugger;
    //  console.log(snapshot.val());
    //});


    var catId = parseInt($route.current.params.categoryId);
    //
     Product.getProductsAll(function (data) {
    //firebase.database().ref('product').once('value').then(function(data){
        listProduct.item = data.val();
      $scope.$apply();
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
