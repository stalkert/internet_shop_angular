'use strict';
angular.module('testua')
  .controller('ListCategory', ['$http', '$rootScope', 'Product', function ($http, $rootScope, Product) {
    var listCat = this;
    listCat.clearCheckbox = function () {
      for (var key in listCat.check) {
        listCat.check[key] = false;
      }
      $rootScope.brend =[];
    };
    listCat.showBrends = Product.getBrends;
    listCat.showAdvertasing = true;
    $rootScope.toggleShowAdv = function (param) {
      //debugger;
      listCat.showAdvertasing = param;
    };
    listCat.toggleShowAdv = function (param) {
      //debugger;
      listCat.showAdvertasing = param;
    };

    $http.get('data/category.json').success(function (data) {

      listCat.item = data;
      $rootScope.listBreadcrumbs = [];
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

    });
    //debugger;
  }]);
