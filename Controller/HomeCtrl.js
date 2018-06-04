app.controller('homeCtrl', function($scope, $mdSidenav, $http, $mdDialog) {
  console.log("inside homeCtrl");
  $scope.toggleLeft = buildToggler('left');

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

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
      $scope.tempArray
    };
  }

  function DialogController($scope, item) {
    $scope.item = item;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

});
