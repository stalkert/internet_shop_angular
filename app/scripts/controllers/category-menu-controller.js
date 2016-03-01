'use strict';
angular.module('testua')
  .controller('ListCategory',function($http){
    var listCat = this;
    $http.get('data/category.json').success(function(data){
      listCat.item = data;
    });
  });
