'use strict';
angular.module('testua')
  .controller('SingleProduct', ['$route', 'Product', '$scope', function ($route, Product, $scope) {
    var one = this;
    one.color = "imgw";
    $scope.delivery = "Курьером";
    one.borderClass = false;
    one.setGreenBorder = function () {
      one.borderClass = !one.borderClass;
    };
    var productId = parseInt($route.current.params.productId);
    Product.getProductsAll().success(function (data) {
      one.product = data;
      one.productById = data.filter(function (item) {
        return item.id == productId;
      });
      $scope.$watch('delivery', function () {
        $scope.items = [one.productById, $scope.delivery];
      });

    });

  }]);

angular.module('testua').controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {


  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('testua').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
