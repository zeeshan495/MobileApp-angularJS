app.controller('dashboardctrl', function($scope, $mdDialog, $rootScope, $state, $http, $q, filterService) {
  $rootScope.arrayOfCart = [];

  $http.get("assets/products.json").then(function(response) {
    $rootScope.myData = response.data;
  });

  /**
   * scope - description
   *    addcart is a function to add a product in a cart
   * @param  {type} cartdata description
   * @return {type}          description
   */
  $scope.addcart = function(cartdata) {
    var cartobject = filterService.readData();
    if (cartobject.length == 0) {
      cartobject.push(cartdata);
      var myJSON = JSON.stringify(cartobject);
      localStorage.setItem("testJSON", myJSON);
    } else {
      for (var i = 0; i < cartobject.length; i++) {
        if (cartobject[i].id == cartdata.id) {
          return;
        }
      }
      cartobject.push(cartdata);
    }
    var myJSON = JSON.stringify(cartobject);
    localStorage.setItem("testJSON", myJSON);
    console.log("cartobject length", cartobject.length)
    $rootScope.count = cartobject.length;
  };

  /**
   * scope - description
   *descriptionFunc is to popup the description data
   * @param  {type} ev   description
   * @param  {type} data description
   * @return {type}      description
   */
  $scope.descriptionFunc = function(ev, data) {
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

  function DialogController($scope, item) {
    $scope.item = item;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

});
