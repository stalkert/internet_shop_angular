'use strict';
angular.module('testua')
  .controller('ListCategory', ['$http', '$rootScope', 'Product','$route','$scope', function ($http, $rootScope, Product,$route,$scope) {
    var listCat = this;
    var catalog = $route.current.params.catalog;

    listCat.clearCheckbox = function () {
      for (var key in listCat.check) {
        //alert(1);
        listCat.check[key] = false;
      }
      $rootScope.brend =[];
    };
    listCat.showBrends = function(){
      firebase.database().ref('product').once('value').then(function (data) {
        var brendsArr = [];
        data.val().forEach(function (item) {
          brendsArr.push([item.brend, item.categoryId, true]);

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
    };

    listCat.showAdvertasing = true;
    $rootScope.toggleShowAdv = function (param) {
      //debugger;
      listCat.showAdvertasing = param;
    };
    listCat.toggleShowAdv = function (param) {
      //debugger;
      listCat.showAdvertasing = param;
    };

    //$http.get('data/category.json').success(function (data) {
    firebase.database().ref('category').once('value').then( function (data){
      listCat.item = data.val();

      console.log(listCat.item);
      $rootScope.listBreadcrumbs = [];
      //debugger;
      listCat.listMainCategories = listCat.item.filter(function (elem) {
        return elem.parentId === 0;
      });
      listCat.getCategoryById = function (id) {

        var oneCat = listCat.item.filter(function (categoryObj) {
          return categoryObj.categoryId === id;
        });
        return oneCat[0].catName;
      };
      listCat.getCategoryObjById = function (id) {
        var oneCat = listCat.item.filter(function (categoryObj) {
          return categoryObj.categoryId === id;
        });
        return oneCat[0];
      };
      listCat.restartSearch = function () {
        $rootScope.chosenId = [];
        $rootScope.listBreadcrumbs = [];
      };
      $rootScope.restartSearch = function () {
        $rootScope.chosenId = [];
        $rootScope.listBreadcrumbs = [];
      };
      listCat.getCategoriesId = function (id) {

        var currentListSubCat = listCat.getCategoryObjById(id).listSubCat;
        if (currentListSubCat === false) {
          $rootScope.chosenId.push(id);

        } else {

          currentListSubCat.forEach(function (elem) {
            listCat.getCategoriesId(elem);
          });

        }
      };

      listCat.getCatWithParent = function (id) {

        var catObj = listCat.getCategoryObjById(id);
        var nameCetegory = listCat.getCategoryById(id);
        if (catObj.parentId === 0) {
          $rootScope.listBreadcrumbs.unshift([nameCetegory, id])
        } else {

          $rootScope.listBreadcrumbs.unshift([nameCetegory, id]);
          listCat.getCatWithParent(catObj.parentId);
        }
      };


      //$rootScope.highPrice = 5000;
      //$rootScope.lowPrice = this.lowPrice;
      //alert(this.lowPrice);
      $scope.$apply();
    });
    if(catalog ==='catalog'){
      listCat.showAdvertasing = false;
    }
  }]);
