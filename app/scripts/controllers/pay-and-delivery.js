'use strict';
angular.module('testua')
  .controller('PayAndDelivery',['$scope', function($scope){
    $scope.description = 'Здесь будет оплата и доставка';

    //$scope.items = [1,2,3,4,5];
    firebase.database().ref('product').once('value').then(function(data){
      $scope.items = data.val();
      $scope.$apply();
      console.log($scope.items);
    });
    //firebase.database().ref('product').on('value', function (data) {
    // pad.items = [1,2,3,4,5];
    //});

  }]);
