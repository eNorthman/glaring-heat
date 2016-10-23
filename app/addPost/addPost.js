'use strict';
 
angular.module('myApp.addPost', [])
 
.controller('AddPostCtrl', ['$scope','$firebase', 'baseUrl','$location', 'CommonProp', function($scope, $firebase, baseUrl, $location, CommonProp) {
    let firebaseObj = new Firebase(baseUrl + '/Articles');
    let fb = $firebase(firebaseObj);
    let user = CommonProp.getUser();
    this.AddPost = function () {
        var title = this.article.title;
        var post = this.article.post;
        fb.$push({
            title: title,
            post: post,
            emailId: user,
            '.priority': user
        }).then(function(ref) {
            console.log(ref);
            $location.path('/welcome');
        }, function(error) {
            console.log("Error:", error);
        });
    }
}]);