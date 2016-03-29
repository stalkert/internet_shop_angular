'use strict';
angular.module('testua')
  .controller('ListCategory',['$http','$rootScope','Product',function ($http, $rootScope,Product) {
    var listCat = this;
    //setTimeout(function(){
    //  alert(listCat.lowPrice);
    //},1000);

    listCat.low=listCat.lowPrice;

    //$rootScope.lowPrice = 0;
    //$rootScope.highPrice = 25000;
    listCat.showAdvertasing = true;
    listCat.toggleShowAdv = function (param) {
      //debugger;
      listCat.showAdvertasing = param;
    };

    $http.get('data/category.json').success(function (data) {
      //$rootScope.lowPrice=0;
      //$rootScope.highPrice=2000;
      listCat.item = data;
      $rootScope.listBreadcrumbs=[];
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
      listCat.restartSearch = function(){  $rootScope.chosenId=[];$rootScope.listBreadcrumbs=[];};

      listCat.getCategoriesId = function (id) {

        var currentListSubCat = listCat.getCategoryObjById(id).listSubCat;
        if (currentListSubCat  === false) {
          $rootScope.chosenId.push(id);

        } else {

          currentListSubCat.forEach(function(elem){
            listCat.getCategoriesId(elem);
          });

        }
      };

      listCat.getCatWithParent = function(id){

        var catObj = listCat.getCategoryObjById(id);
        var nameCetegory = listCat.getCategoryById(id);
        if (catObj.parentId === 0){
          $rootScope.listBreadcrumbs.unshift([nameCetegory,id])
        }else{

          $rootScope.listBreadcrumbs.unshift([nameCetegory,id]);
          listCat.getCatWithParent(catObj.parentId);
        }
      };



      //$rootScope.highPrice = 5000;
      //$rootScope.lowPrice = this.lowPrice;
      //alert(this.lowPrice);

    });
    //debugger;
  }]);
