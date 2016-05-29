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
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/oplata_i_dostavka', {
        templateUrl: 'views/oplata-i-dostavka.html',
        controller: 'PayAndDelivery',
        controllerAs: 'pad'
      })
      //.when('/main', {
      //  templateUrl: 'views/main.html',
      //  controller: 'MainCtrl',
      //  controllerAs: 'main'
      //})
      .when('/main', {
        templateUrl: 'views/main2.html',
        controller:'ListCategory',
        controllerAs:'categories'
      })
      .when('/main/:catalog', {
        templateUrl: 'views/main2.html',
        controller:'ListCategory',
        controllerAs:'categories'

      })
      .when('/products', {
        templateUrl: 'views/products-filtr.html',
        controller:'HeadProductsController',
        controllerAs:'headProducts'

      })
      .when('/products/category/:categoryId', {
        templateUrl: 'views/products-route.html'


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
