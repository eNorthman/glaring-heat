'use strict';

angular.module('myApp.register', ['firebase'])

// Home controller
.controller('RegisterCtrl', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location) {
 	var firebaseObj = new Firebase("https://glaring-heat-4420.firebaseio.com");
	var auth = $firebaseAuth(firebaseObj);
 	this.signUp = function () {
 		if(!$scope.regForm.$invalid) {
 			var email = this.user.email;
            var password = this.user.password;
            if (email && password) {
                auth.$createUser(email, password)
                .then(function() {
                	$location.path('/home');
                    // do things if success
                    console.log('User creation success');
                }, function(error) {
                	$scope.regError = true;
					$scope.regErrorMessage = error.message;
                    // do things if failure
                    console.log(error);
                });
            }
 		}
 	}
}]);
