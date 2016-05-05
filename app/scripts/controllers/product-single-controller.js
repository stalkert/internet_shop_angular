'use strict';
angular.module('testua')
  .controller('SingleProduct',['$route','Product', function ($route, Product) {
    var one = this;
    one.borderClass = false;
    one.setGreenBorder =function(){
      one.borderClass = !one.borderClass;
    };
    var productId = parseInt($route.current.params.productId);
    Product.getProductsAll().success(function (data) {
      one.product = data;
      one.productById = data.filter(function (item) {
        return item.id == productId;
      });
    });


  }]);
