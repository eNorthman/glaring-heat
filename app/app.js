'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.welcome'
]).
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
    }).otherwise({redirectTo: '/home'});
}]);
