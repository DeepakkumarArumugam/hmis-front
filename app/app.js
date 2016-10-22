'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngRoute',
  'app.services',
  'intake.controllers'
]).
config(function(
  $stateProvider, $urlRouterProvider) {
  // $locationProvider.hashPrefix('!');

  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'intake/dashboard.html',
    controller: 'DashboardController',
  })
  .state('profile', {
    url: '/profile/:_id',
    templateUrl: 'intake/profile.html',
    controller: 'ProfileController',
  })
  .state('checkclientlist', {
    url: '/checkclientlist?name',
    templateUrl: 'intake/checkclientlist.html',
    controller: 'CheckClientListController',
  })
  .state('checkclientnotregistered', {
    url: '/checkclientnotregistered?name',
    templateUrl: 'intake/checkclientnotregistered.html',
    controller: 'CheckClientNotRegisteredController',
  })
  .state('newclient', {
    url: '/newclient?name',
    templateUrl: 'intake/newclient.html',
    controller: 'NewClientController',
  })
  $urlRouterProvider.otherwise('/dashboard');
});
