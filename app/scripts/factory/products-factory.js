'use strict';
angular.module('testua')
  .factory('Product', ['$http', '$rootScope', function ProductFactory($http, $rootScope) {
    $rootScope.brend = [];
    //$scope.$apply();
    return {
      getProductsAll: function (callback) {
        //return $http.get('data/product.json');
         return firebase.database().ref('product').once('value').then(callback);
        //function(snapshot){
        //  //debugger;
        //  console.log(snapshot.val());
        //});
      },
      getBrends: function (callback) {
        //var brendsArr = [];
        return firebase.database().ref('product').once('value').then(callback
        //  function (data) {
        //
        //data.val().forEach(function (item) {
        //    brendsArr.push([item.brend,item.categoryId,true]);
        //
        //  });
        //  //debugger;
        //  next: for(var j = 0; j < brendsArr.length; j++) {
        //    if($rootScope.chosenId) {
        //      for (var i = 0; i < $rootScope.chosenId.length; i++) {
        //        if (brendsArr[j][1] === $rootScope.chosenId[i]) {
        //          brendsArr[j][2] = true;
        //          continue next;
        //        } else {
        //          brendsArr[j][2] = false;
        //        }
        //      }
        //    }
        //  }
        //  brendsArr = brendsArr.filter(function(item){
        //    return item[2] === true;
        //  });
        //  $rootScope.arrBrends = unic(brendsArr);
        //
        //  }
        );


        //function unic(arr) {
        //  var result = [];
        //
        //  nextInput:
        //    for (var i = 0; i < arr.length; i++) {
        //      var brend = arr[i];
        //      for (var j = 0; j < result.length; j++) {
        //        if (result[j][0] === brend[0]) continue nextInput;
        //      }
        //      result.push(brend);
        //    }
        //
        //  return result;
        //}
      },

      checkedBrends: function (currentBrend,check) {
        //if (check && $rootScope.brend.some(function(item){return item === currentBrend})) {
        if(!check){
          //debugger;
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
        firebase.database().ref('category').once('value').then( function (data){

          var catArr = data.val();
          //$scope.$apply();
          var arr = catArr.filter(function (categoryObj) {
            return categoryObj.categoryId === id;
          });
          console.log(arr[0]);
          (function addIdToArray(id) {
            if (arr[0] && arr[0].listSubCat === false) {
              $rootScope.chosenId.push(id)
            } else {
              if(arr[0]) {
                arr[0].listSubCat.forEach(function (elem) {
                  getCurrent(elem);
                });
              }
            }
          })(id);

        });
      }
    };
  }]);
