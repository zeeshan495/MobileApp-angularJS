app.controller('emptyCartctrl', function($scope, $state, $rootScope, $http, filterService) {
  console.log($rootScope.arrayOfCart);
  $scope.shopping = function() {
    $state.go('home');
  }
});
