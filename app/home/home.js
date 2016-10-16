'use strict';

angular.module('myApp.home', ['firebase'])

// Home controller
.controller('HomeCtrl', ['$firebaseAuth','$location', 'CommonProp', function($firebaseAuth, $location, CommonProp) {
	this.user = {};
    var firebaseObj = new Firebase("https://glaring-heat-4420.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);
    this.SignIn = function() {
        // e.preventDefault();
        var username = this.user.email;
        var password = this.user.password;

        // Auth Logic will be here
        loginObj.$authWithPassword({
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
            CommonProp.setUser(user.password.email);
            $location.path('/welcome');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
    }
}])
.service('CommonProp', function() {
    var user = '';
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
});