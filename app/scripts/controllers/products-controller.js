'use strict';
angular.module('testua')
    .controller('ListProducts', function (Product, $rootScope) {
        var listProduct = this;
        Product.getProductsAll()
            .success(function (data) {
                listProduct.item = data;
            });

        listProduct.getListCategoryId = function (itemProduct) {

            var arrCatId = $rootScope.arrSubCat.length;
            for (var i = 0; i < arrCatId; i++) {
                if (itemProduct.categoryId == $rootScope.arrSubCat[i]) {
                    return itemProduct.categoryId === $rootScope.arrSubCat[i];
                }
            }
        };
    });
