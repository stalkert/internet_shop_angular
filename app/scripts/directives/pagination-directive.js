'use strict';
angular.module('testua')
  .directive('pagination', function() {
    return {
      restrict: 'E',
      scope: {
        numPages: '=',
        currentPage: '='
      },
      templateUrl: 'views/templates/pagination-template.html',
      link: function (scope) {
        scope.$watch('numPages', function (value) {
          scope.pages = [];
          for (var i = 1; i <= value; i++) {
            scope.pages.push(i);
          }
          if (scope.currentPage > value) {
            scope.selectPage(value);
          }
        });

        scope.isActive = function (page) {
          return scope.currentPage === page-1;
        };
        scope.selectPage = function (page) {
          if (!scope.isActive(page)) {
            scope.currentPage = page-1;
          }
        };

        scope.selectNext = function () {
          if (!scope.noNext()) {
            //debugger;
            scope.selectPage(scope.currentPage + 2);
          }
        };
        scope.selectPrevious = function () {
          //debugger;
          if (!scope.noPrevious()) {
            scope.selectPage(scope.currentPage);
          }
        };
        scope.noNext = function(){
          //debugger;
          if(scope.pages) {
            return scope.currentPage === scope.pages.length - 1;
          }
        };
        scope.noPrevious = function(){
          return scope.currentPage === 0;
        };
      }
  };
});

