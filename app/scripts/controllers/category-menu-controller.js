'use strict';
angular.module('testua')
  .controller('ListCategory',['$http','$rootScope', function ($http, $rootScope) {
    var listCat = this;
    $http.get('data/category.json').success(function (data) {
      listCat.item = data;

      listCat.listMainCategories = listCat.item.filter(function (elem) {
        return elem.main === true;
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
      listCat.restartSearch = function(){  $rootScope.choosenId=[];};

      listCat.getCategoriesId = function (id) {

        var currentListSubCat = listCat.getCategoryObjById(id).listSubCat;
        if (currentListSubCat  === false) {
          $rootScope.choosenId.push(id);

        } else {

          currentListSubCat.forEach(function(elem){
            listCat.getCategoriesId(elem);
          });

        }
      };
    });
  }]);
