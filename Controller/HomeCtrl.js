app.controller('homeCtrl',function ($scope,$mdSidenav,$http,$mdDialog) {
  console.log("inside homeCtrl");
  $scope.toggleLeft = buildToggler('left');
  $http.get("assets/products.json").then(function (response) {
      $scope.myData = response.data;
      return $scope.myData;
  });
$scope.showAlert = function(description) {
  $mdDialog.show(
      $mdDialog.alert()
      .title('DESCRIPTION : '+description)
      .ok('Got it!')

     );
};
  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }

});
