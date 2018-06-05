app.controller('dashboardctrl',function($scope,$state,$http)
{
    $scope.arrayOfCart = [];
  $scope.shopping = function() {
    $state.go('home');
  }

  $http.get("assets/products.json").then(function(response) {
    $scope.myData = response.data;
});

    $scope.addcart = function(cartdata) {
      arrayOfCart.push(cartdata);
      console.log("inside cartctrl");
      console.log("cartArr: ",arrayOfCart);
    };

});
