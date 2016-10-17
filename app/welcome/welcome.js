'use strict';
 
angular.module('myApp.welcome', [])
 
.controller('WelcomeCtrl', ['$scope', 'CommonProp', 'baseUrl', '$firebase', '$uibModal', function($scope, CommonProp, baseUrl, $firebase, $uibModal) {
	var self = this;
	var firebaseObj = new Firebase(baseUrl + "/Articles");
	var sync = $firebase(firebaseObj);
	this.articles = sync.$asArray();
 	this.username = CommonProp.getUser();

	 this.editPost = function (id) {
		var firebaseObjUnique = new Firebase(baseUrl + "/Articles/" + id);	
		var syn = $firebase(firebaseObjUnique).$asObject();
		// this.postToUpdate = syn.;
		syn.$loaded().then(function(){
          // Success callback
		  	self.postToUpdate = {title: syn.title, post: syn.post};
			if(self.postToUpdate) {
				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'modal/modal.html',
					controller: 'ModalCtrl',
					controllerAs: 'modal',
					resolve: {
						postToUpdate: function () {
							return self.postToUpdate;
						}
					}
				});
			}
        }, function() {
          // Failure callback
        });
	}
}]);