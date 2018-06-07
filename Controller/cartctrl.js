app.controller('cartctrl', function($scope, $state, $rootScope, $http, filterService) {
  console.log($rootScope.arrayOfCart);
  $scope.shopping = function() {
    $state.go('home');
  }
  $scope.total = 0;
  $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $rootScope.cartobject = filterService.readData();
  console.log("cartctrl cartobject: ", $rootScope.cartobject);
  for (var i = 0; i < cartobject.length; i++) {
    console.log("price", cartobject[i].price);
    $scope.total = $scope.total + cartobject[i].price;
    // console.log("quantity ",$scope.selectedQuantity);
  }
  $scope.quantity = function(selectedQuantity, data) {
    // console.log("quantity ",selectedQuantity);
    var total = 0;
    for (var i = 0; i < cartobject.length; i++) {
      console.log("price", cartobject[i].price);
      if (data.id == cartobject[i].id) {
        total = total + (cartobject[i].price * selectedQuantity);
      } else {
        total = total + cartobject[i].price;
      }

    }
    $scope.total = total;
  };

  console.log("total", $scope.total);
});
