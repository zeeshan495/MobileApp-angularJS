var app = angular.module('myApp',['ui.router','ngMaterial']);
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
    templateUrl : 'templates/Toolbar.html',
    controller : 'homeCtrl'
  });
  $urlRouterProvider.otherwise('/login');
}]);
