'use strict';
angular.module('testua')
  .controller('Brend', ['$rootScope', 'Product','$scope', function ($rootScope, Product,$scope) {
    var _this = this;

    Product.getBrends(function (data) {
      var brendsArr = [];
      data.val().forEach(function (item) {
        brendsArr.push([item.brend, item.categoryId, true]);
        $scope.$apply();
      });

      //debugger;
      next: for (var j = 0; j < brendsArr.length; j++) {
        if ($rootScope.chosenId) {
          for (var i = 0; i < $rootScope.chosenId.length; i++) {
            if (brendsArr[j][1] === $rootScope.chosenId[i]) {
              brendsArr[j][2] = true;
              continue next;
            } else {
              brendsArr[j][2] = false;
            }
          }
        }
      }
      brendsArr = brendsArr.filter(function (item) {
        return item[2] === true;
      });
      $rootScope.arrBrends = unic(brendsArr);
      $scope.$apply();
      function unic(arr) {
        var result = [];

        nextInput:
          for (var i = 0; i < arr.length; i++) {
            var brend = arr[i];
            for (var j = 0; j < result.length; j++) {
              if (result[j][0] === brend[0]) continue nextInput;
            }
            result.push(brend);
          }

        return result;
      }
    });
    _this.addBrend = Product.checkedBrends;
    //_this.clearCheckbox =function(){
    //  _this.check = false;
    //  alert('работает');
    //};
  }]);
