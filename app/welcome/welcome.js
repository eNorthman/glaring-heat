'use strict';
 
angular.module('myApp.welcome', [])
 
.controller('WelcomeCtrl', ['$scope', 'CommonProp', function($scope, CommonProp) {
	debugger;
 	this.username = CommonProp.getUser();
}]);