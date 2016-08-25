'use strict';

angular.module('myApp.home', ['firebase'])

// Home controller
.controller('HomeCtrl', ['$firebaseSimpleLogin', function($firebaseSimpleLogin) {
	this.user = {};
    var firebaseObj = new Firebase("https://glaring-heat-4420.firebaseio.com");
    var loginObj = $firebaseSimpleLogin(firebaseObj);
    this.SignIn = function() {
        var username = this.user.email;
        var password = this.user.password;

        // Auth Logic will be here
        loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
    }
}]);
