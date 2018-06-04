app.controller('homeCtrl', function($scope, $mdSidenav, $http, $mdDialog, $state) {
  console.log("inside homeCtrl");

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
      // parent: angular.element(document.body),
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
    $state.go('login');
  }
  function DialogController($scope, item) {
    $scope.item = item;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

});
