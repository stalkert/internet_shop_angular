/**
 * Created by STALKER on 29.05.2016.
 */
'use strict';
angular.module('testua')
  .filter('pagination', function () {
    return function (productsArray, selectedPage, pageSize) {
      //debugger;
      if(productsArray){
        var start = selectedPage * pageSize;
        return productsArray.slice(start, start + pageSize);
      }
    };
  });
