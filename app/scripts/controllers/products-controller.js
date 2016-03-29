'use strict';
angular.module('testua')
  .controller('ListProducts',['Product','$rootScope','$route', function (Product, $rootScope,$route) {
    var listProduct = this;

    var catId = parseInt($route.current.params.categoryId);
    Product.getProductsAll()
      .success(function (data) {
        listProduct.item = data;
        //var getListCategory = function (id) {
        //  debugger;
        //
        //  var currentListSubCat;
        //  $http.get('data/category.json').success(function (data) {
        //    listProduct.cat = data;
        //    listProduct.cat.filter(function (categoryObj) {
        //      return categoryObj.categoryId === id;
        //    });
        //
        //  });
        //  currentListSubCat = listProduct.cat[0].listSubCat;
        //  var arr=[];
        //  function getList(id) {
        //
        //    if (currentListSubCat === false) {
        //     arr.push(id);
        //
        //    } else {
        //
        //      currentListSubCat.forEach(function (elem) {
        //        if (elem !== false) {
        //          getList(elem);
        //        }
        //      });
        //
        //    }
        //  }
        //  getList(id);
        //  debugger;
        //  return arr;
        //};
        //$rootScope.chosenId = getListCategory(catId);
        Product.getCurrentCategoryObj(catId);
        $rootScope.chosenId =[];
        $rootScope.getFilterPoducts = Product.getFilterPoducts;
        $rootScope.getFilterPrice = Product.getPoductsByPrice;
        console.log($rootScope.getFilterPrice);
      });
  }]);
