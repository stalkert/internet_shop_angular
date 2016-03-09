'use strict';
angular.module('testua')
    .controller('ListCategory', function ($http, $rootScope) {
        var listCat = this;
        $http.get('data/category.json').success(function (data) {
            listCat.item = data;
        });
        $rootScope.arrSubCat = [];
        listCat.findSubCatId = function (categoryName) {
            $rootScope.arrSubCat = [];
            var item = listCat.item.filter(function (category) {
                return category.catName === categoryName;
            });

            if (item[0].categoryId === undefined) {
                item[0].listSubCat.forEach(function (item) {
                    if (item.categoryId === undefined) {
                        item.listSubCat.forEach(function (item) {
                            if (item.categoryId === undefined) {
                                alert("Последний уровень вложенности!");
                            }
                            else {
                                $rootScope.arrSubCat.push(item.categoryId);
                            }
                        });
                    }
                    else {
                        $rootScope.arrSubCat.push(item.categoryId);
                    }
                });
            }
            else {
                $rootScope.arrSubCat.push(item.categoryId);
            }
            alert($rootScope.arrSubCat);


        };
        function searchObj(arr, str) {


            var obj;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].catName === str) {
                    obj=arr[i];
                    break;
                }else if(arr[i].listSubCat === undefined){
                    continue;
                }else{

                   return searchObj(arr[i].listSubCat, str);
                    }
                }
            return obj;
            }



        listCat.consoleobj = function (categoryName) {
            console.log(searchObj(listCat.item, categoryName));
        }
    });
