app.controller('cartctrl', function($scope, $state,$rootScope, $http) {
  console.log($rootScope.arrayOfCart);
  $scope.shopping = function() {
    $state.go('home');
  }
});
