'use strict';
angular.module('testua')
  .controller('Brend', ['$rootScope', 'Product', function ($rootScope, Product) {
    var _this = this;
    Product.getBrends();
    _this.addBrend = Product.checkedBrends;
    _this.clearCheckbox =function(){
      _this.check = false;
      alert('работает');
    };
  }]);
