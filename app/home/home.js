'use strict';

angular.module('myApp.home', ['firebase', 'angular-ladda'])

// Home controller
.controller('HomeCtrl', ['$firebaseAuth','$location', 'CommonProp', function($firebaseAuth, $location, CommonProp) {
	var self = this;
    this.user = {};
    var firebaseObj = new Firebase("https://glaring-heat-4420.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);
    this.login = {};
    this.SignIn = function() {
        this.login.loading = true;
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
            self.login.loading = false;
            $location.path('/welcome');
        }, function(error) {
            // Failure callback
            self.login.loading = false;
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