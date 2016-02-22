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
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
