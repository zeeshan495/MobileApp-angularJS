app.controller('homeCtrl', function($scope, $mdSidenav, $http, $mdDialog, $state,$rootScope,$window) {
  console.log("inside homeCtrl");
  // text = localStorage.getItem("testJSON");
  // obj = JSON.parse(text);
  // console.log(obj);
  $http.get("assets/products.json").then(function(response) {
    $scope.myData = response.data;
    $scope.manufacturerArray = [];
    $scope.osArray = [];
    $scope.cameraArray = [];
    $scope.storageArray = [];
    $scope.toggle = function(item, list) {
      var indx = list.indexOf(item);
      if (indx > -1) {
        list.splice(indx, 1);
      } else {
        list.push(item);
      }
      console.log(list);
    };

  });

  $scope.showAdvanced = function(ev, data) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/popup.html',
      targetEvent: ev,
      locals: {
        item: data
      },
      clickOutsideToClose: true
    });
  }

  $scope.toggleLeft = buildToggler('left');
  function buildToggler(componentId) {
    return function() {
    $mdSidenav(componentId).toggle();
    if ($scope.myobj==undefined) {
      $scope.myobj={
      "margin-left":"320px"
    }
    }
    else {
      $scope.myobj=undefined;
    }
    };
  }
  $scope.toggleright=function()
  {
// $window.localStorage.clear();
    $state.go('login');
  }
  function DialogController($scope, item) {
    $scope.item = item;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
$scope.cart=function(){
  $state.go('cart');
}

 // $rootScope.count=$rootScope.cartobject.length;

});
