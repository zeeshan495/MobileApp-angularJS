app.controller('cartctrl', function($scope, $state, $rootScope, $http, filterService) {
  console.log($rootScope.arrayOfCart);
  $scope.shopping = function() {
    $state.go('home');
  }
  $scope.total = 0;
  $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  $rootScope.cartobject = filterService.readData();

  for (var i = 0; i < cartobject.length; i++) {
    console.log("price", cartobject[i].price);
    $scope.total = $scope.total + cartobject[i].price;
  }

  $scope.quantity = function(selectedQuantity, data) {
    var total = 0;
    for (var i = 0; i < cartobject.length; i++) {
      if (data.id == cartobject[i].id) {
        total = total + (cartobject[i].price * selectedQuantity);
      } else {
        total = total + cartobject[i].price;
      }
    }
    $scope.total = total;
  };

  $scope.remove = function(data) {
    for (var i = 0; i < $rootScope.cartobject.length; i++) {
      if (data.id == $rootScope.cartobject[i].id) {
        $rootScope.cartobject.splice(i, 1);
        $scope.total=$scope.total-data.price;
        var  myJSON = JSON.stringify($rootScope.cartobject);
          localStorage.setItem("testJSON", myJSON);
            $rootScope.cartobject = filterService.readData();
            $rootScope.count = $rootScope.cartobject.length;
            return;
      }
  }
  };

  console.log("total", $scope.total);
});
