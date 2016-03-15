'use strict';
angular.module('testua')
  .directive('breadcrumbs', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/breadcrumbs-template.html',
      controller:'ArrBreadcrumbs',
      controllerAs:'breadcrumbs'


    };
  });
