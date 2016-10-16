'use strict';

angular.module('myApp.register', ['firebase'])

// Home controller
.controller('RegisterCtrl', ['$scope', '$firebaseAuth', 'baseUrl', '$location', function($scope, $firebaseAuth, baseUrl, location) {
    var self = this;
    var firebaseObj = new Firebase(baseUrl);
    var auth = $firebaseAuth(firebaseObj);
    this.signUp = function() {
        if(!$scope.regForm.$invalid) {
            var email = this.user.email;
            var password = this.user.password;
            if (email && password) {
                auth.$createUser(email, password)
                .then(function() {
                    // do things if success
                    console.log('User creation success');
                    $location.path('/home');
                }, function(error) {
                    // do things if failure
                    console.log(error);
                    self.regError = true;
                    self.regErrorMessage = error.message;
                });
            }
        }
    };
 
}]);
