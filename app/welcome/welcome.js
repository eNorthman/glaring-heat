'use strict';
 
angular.module('myApp.welcome', [])
 
.controller('WelcomeCtrl', ['$scope', 'CommonProp', 'baseUrl', '$firebase', function($scope, CommonProp, baseUrl, $firebase) {
	var firebaseObj = new Firebase(baseUrl + "/Articles");
	var sync = $firebase(firebaseObj);
	this.articles = sync.$asArray();
 	this.username = CommonProp.getUser();
}]);