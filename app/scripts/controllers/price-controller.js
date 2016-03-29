'use strict';
angular.module('testua')
  .controller('Price',['Product','$rootScope','$scope', function (Product, $rootScope,$scope) {
    $scope.$watch('lowPrice',function(){
      $rootScope.lowPrice = $scope.lowPrice;
    });
    $scope.$watch('highPrice',function(){
      $rootScope.highPrice = $scope.highPrice;
    });
  }]);
