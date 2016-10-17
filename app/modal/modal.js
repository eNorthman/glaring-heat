'use strict';
 
angular.module('myApp.modal', [])

.controller('ModalCtrl', ['$uibModalInstance', 'postToUpdate',  function($uibModalInstance, postToUpdate) {
    this.postToUpdate = postToUpdate;
  }

]);