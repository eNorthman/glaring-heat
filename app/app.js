'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.welcome',
  'myApp.addPost'
]);
myApp.
config(['$routeProvider', function($routeProvider) {
	   $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
    }).when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
    }).when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome'
    }).when('/addPost', {
        templateUrl: 'addPost/addPost.html',
        controller: 'AddPostCtrl',
        controllerAs: 'addpost'
    });;
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

myApp.value('baseUrl', 'https://glaring-heat-4420.firebaseio.com');
