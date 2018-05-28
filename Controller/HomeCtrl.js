app.controller('homeCtrl',function ($scope,$mdSidenav,$http) {
  console.log("inside homeCtrl");
  $scope.toggleLeft = buildToggler('left');
  $http.get("Assets/products.json").then(function (response) {
      $scope.myData = response.data;
      return $scope.myData;
  });

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }

});
// app.controller('sidebarCtrl',function ($scope, $mdSidenav) {
//     $scope.toggleLeft = buildToggler('left');
//
//     function buildToggler(componentId) {
//       return function() {
//         $mdSidenav(componentId).toggle();
//       };
//     }
//   });
