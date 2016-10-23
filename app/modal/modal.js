'use strict';
 
angular.module('myApp.modal', [])

.controller('ModalCtrl', ['$uibModalInstance', 'postToUpdate',  function($uibModalInstance, postToUpdate) {
    this.postToUpdate = postToUpdate;

    this.publish = function () {
      $uibModalInstance.close(this.postToUpdate);
    };

    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

]);