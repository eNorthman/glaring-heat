'use strict';
 
angular.module('myApp.dmodal', [])

.controller('dModalCtrl', ['$uibModalInstance',  function($uibModalInstance) {
    this.delete = function () {
      $uibModalInstance.close();
    };

    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

]);