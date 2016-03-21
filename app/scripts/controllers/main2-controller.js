'use strict';
angular.module('testua')
  .controller('Main2Ctrl', function () {
    var main = this;
    main.showAdvertasing = true;
    main.toggleShowAdv = function (param) {
      //debugger;
      main.showAdvertasing = param;
    };

  });
