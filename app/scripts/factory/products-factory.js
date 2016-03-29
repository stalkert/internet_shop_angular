'use strict';
angular.module('testua')
  .factory('Product', ['$http', '$rootScope', function ProductFactory($http, $rootScope) {
    $rootScope.brend = [];
    return {
      getProductsAll: function () {
        return $http.get('data/product.json');
      },
      getBrends: function (param) {
        var brends = [];
        return $http.get('data/product.json').success(function (data) {
          data.forEach(function (item) {
            brends.push(item.brend);
          });
          param.brends = unic(brends);
        });
        function unic(arr) {
          var result = [];

          nextInput:
            for (var i = 0; i < arr.length; i++) {
              var brend = arr[i];
              for (var j = 0; j < result.length; j++) {
                if (result[j] === brend) continue nextInput;
              }
              result.push(brend);
            }

          return result;
        }
      },
      checkedBrends: function (currentBrend) {
        if ($rootScope.brend.some(function(item){return item === currentBrend})) {
          $rootScope.brend = $rootScope.brend.filter(function (item) {return item !==currentBrend;});
        } else {
          $rootScope.brend.push(currentBrend);
        }
      },
      getFilterPoducts: function (product) {
        var choosenIdLength = $rootScope.chosenId.length;
        if (choosenIdLength === 0) {
          return true;
        } else {
          for (var i = 0; i < choosenIdLength; i++) {
            if (product.categoryId === $rootScope.chosenId[i]) {
              return true;
            }
          }
        }
      },
      getPoductsByPrice: function (product) {
        //debugger;
        return product.price >= $rootScope.lowPrice && product.price <= $rootScope.highPrice;
      },
      getPoductsByBrend: function (product) {
        if($rootScope.brend.length == 0){
          return true;
        }else {
          for (var i = 0; i < $rootScope.brend.length; i++) {
            if (product.brend === $rootScope.brend[i]) {
              return true;
            }
          }
        }
      },
      getCurrentCategoryObj: function getCurrent(id) {
        $http.get('data/category.json').success(function (data) {
          var arr = data.filter(function (categoryObj) {
            return categoryObj.categoryId === id;
          });
          console.log(arr[0]);
          (function addIdToArray(id) {
            if (arr[0].listSubCat === false) {
              $rootScope.chosenId.push(id)
            } else {
              arr[0].listSubCat.forEach(function (elem) {
                getCurrent(elem);
              });
            }
          })(id);

        });
      }
    };
  }]);
