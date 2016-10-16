'use strict';
 
angular.module('myApp.addPost', [])
 
.controller('AddPostCtrl', ['$scope','$firebase', 'baseUrl','$location', function($scope, $firebase, baseUrl, $location) {
    var firebaseObj = new Firebase(baseUrl + '/Articles');
    var fb = $firebase(firebaseObj);
    this.AddPost = function () {
        var title = this.article.title;
        var post = this.article.post;
        fb.$push({
            title: title,
            post: post
        }).then(function(ref) {
            console.log(ref);
            $location.path('/welcome');
        }, function(error) {
            console.log("Error:", error);
        });
    }
}]);