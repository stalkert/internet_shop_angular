'use strict';
angular.module('testua')
  .factory('Category', ['$http', '$rootScope', function CategoryFactory($http, $rootScope) {

    return {
      getCategoryById: function (id) {
        var oneCat = listCat.item.filter(function (categoryObj) {
          return categoryObj.categoryId === id;
        });
        return oneCat[0].catName;
      }
    };
  }]);
