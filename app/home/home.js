'use strict';

var app = angular.module('myApp.home', ['firebase']);

// Home controller
app.controller('HomeCtrl', ['$firebaseAuth','$location', 'CommonProp', function($firebaseAuth, $location, CommonProp) {
    this.user = {};
    var firebaseObj = new Firebase("https://glaring-heat-4420.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);
    this.SignIn = function() {
        if(angular.isDefined(this.user.email) && angular.isDefined(this.user.password)) {
            var username = this.user.email;
            var password = this.user.password;
            loginObj.$authWithPassword({
                    email: username,
                    password: password
                })
                .then(function(user) {
                    CommonProp.setUser(user.password.email);
                    $location.path('/welcome');
                }, function(error) {
                    //Failure callback
                    console.log('Authentication failure');
                });
        }
    }
}]);
app.service('CommonProp', function() {
    var user = '';

    return {
        getUser: function () {
            return user;
        },
        setUser: function (value) {
            user = value;
        }
    }
});
