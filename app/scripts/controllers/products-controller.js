'use strict';
angular.module('testua')
    .controller('ListProducts', function ($http) {
        var listProduct = this;
        $http.get('data/product.json').success(function (data) {
            listProduct.item = data;
        });
    });
