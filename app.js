var app = angular.module("loginApp",['ui.router'],['ng-material']);
app.config(function($stateProvider,$urlRouterProvider)
{
  $stateProvider
  .state('login',{
    url : '/login',
    templateUrl : 'templates/Login.html',
    controller : 'loginCtrl'
  });
  $urlRouterProvider.otherwise('login');
});