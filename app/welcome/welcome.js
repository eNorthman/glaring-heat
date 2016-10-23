'use strict';
 
angular.module('myApp.welcome', [])
 
.controller('WelcomeCtrl', ['$scope', 'CommonProp', 'baseUrl', '$firebase', '$uibModal', function($scope, CommonProp, baseUrl, $firebase, $uibModal) {
	var self = this;
	var firebaseObj = new Firebase(baseUrl + "/Articles");
 	this.username = CommonProp.getUser();
	var sync = $firebase(firebaseObj.startAt(this.username).endAt(this.username));
	this.articles = sync.$asArray();

	 this.editPost = function (id) {
		var firebaseObjUnique = new Firebase(baseUrl + "/Articles/" + id);	
		var postToUpdate = $firebase(firebaseObjUnique).$asObject();
		postToUpdate.$loaded().then(function(){
          // Success callback
			if(postToUpdate) {
				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'modal/modal.html',
					controller: 'ModalCtrl',
					controllerAs: 'modal',
					resolve: {
						postToUpdate: function () {
							return postToUpdate;
						}
					}
				});

				modalInstance.result.then(function (result) {	
					var article = $firebase(firebaseObjUnique);
					article.$update({
						title: result.title,
						post: result.post
					}).then(function(ref) {
						console.log('successs')
					}, function(error) {
						console.log("Error:", error);
					});
				}, function () {
					console.info('Modal dismissed at: ' + new Date());
				});
			}
        }, function() {
          // Failure callback
        });
	}

	this.delete = function (id) {
		var firebaseObjUnique = new Firebase(baseUrl + "/Articles/" + id);	
		var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'modal/deleteModal.html',
				controller: 'dModalCtrl',
				controllerAs: 'delete'
			});
		modalInstance.result.then(function (result) {	
			var article = $firebase(firebaseObjUnique);
			article.$remove().then(function() {
				console.log('successs')
			}, function(error) {
				console.log("Error:", error);
			});
		}, function () {
			console.info('Modal dismissed at: ' + new Date());
		});
	}
}]);