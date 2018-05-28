var app = angular.module('myApp',['ui.router','ngMaterial','ngMessages','ngAnimate']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider)
{
  $stateProvider
  .state('login',{
    url : '/login',
    templateUrl : 'templates/Login.html',
    controller : 'loginCtrl'
  })
  .state('home',{
    url : '/home',
    templateUrl : 'templates/Home.html',
    controller : 'homeCtrl'
  });
  $urlRouterProvider.otherwise('/login');
}]);
