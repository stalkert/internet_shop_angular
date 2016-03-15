'use strict';

/**
 * @ngdoc overview
 * @name testua
 * @description
 * # testua
 *
 * Main module of the application.
 */
angular
  .module('testua', [
    'ngRoute'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/oplata_i_dostavka', {
        templateUrl: 'views/oplata-i-dostavka.html',
        controller: 'PayAndDelivery',
        controllerAs: 'pad'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/products', {
        templateUrl: 'views/products.html'

      })
      .when('/products/:productId', {
        templateUrl: 'views/product-single.html',
        controller:'SingleProduct',
        controllerAs:'single'
        /*resolve: {
          product : ['$route', 'Product', function ($route, productFactory) {
            var productId = parseInt($route.current.params.productId);
            return productFactory.getProductById(productId);
          }]
        }*/

      })
      .otherwise({
        redirectTo: '/main'
      });
  }]);
