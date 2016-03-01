/**
 * Created by ITaranenko on 2/29/2016.
 */

    'use strict';
    angular.module('testua')
        .directive('categoryMenu',function(){
            return {
                restrict: 'E',
                templateUrl:'views/category-menu.html',
                controller:'ListCategory',
                controllerAs:'categories'
            };
        });
