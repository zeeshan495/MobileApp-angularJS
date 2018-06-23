var app = angular.module('myApp',['ui.router','ngMaterial','ngMessages','ngAnimate','jkAngularRatingStars']);
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
  })
  .state('cart',{
    url : '/cart',
    templateUrl : 'templates/Cart.html',
     controller : 'cartctrl'
  })
  .state('emptyCart',{
    url : '/cart',
    templateUrl : 'templates/emptyCart.html',
     controller : 'emptyCartctrl'
  });
  $urlRouterProvider.otherwise('/login');
}]);
