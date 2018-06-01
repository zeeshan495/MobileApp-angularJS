app.controller('homeCtrl', function($scope, $mdSidenav, $http, $mdDialog) {
  console.log("inside homeCtrl");
  $scope.toggleLeft = buildToggler('left');

  $http.get("assets/products.json").then(function(response) {
    $scope.myData = response.data;
  });
  $scope.showAdvanced = function(ev, data) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/popup.html',
      parent: angular.element(document.body),
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
    };
  }

  function DialogController($scope, item) {
    $scope.item = item;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

  // function homeCtrl($scope) {
  //   $scope.tempArray=[];
  //   $scope.filterFunction=function(specs.manufacturer){
  //      var i = $.inArray(specs.manufacturer, $scope.tempArray);
  //      if (i > -1) {
  //          $scope.tempArray.splice(i, 1);
  //      } else {
  //          $scope.tempArray.push(specs.manufacturer);
  //      }
  //   }
  //   $scope.brandFilter = function(myData) {
  //       if ($scope.tempArray.length > 0) {
  //           if ($.inArray(myData.specs.manufacturer, $scope.tempArray) < 0)
  //               return;
  //       }
  //
  //       return myData;
  //
  // }
});
