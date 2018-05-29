app.controller('loginCtrl',function($scope,$state)
{
  console.log("inside loginCtrl");

  $scope.submit = function(){
    if ($scope.user.email==null||$scope.user.password==null) {
      $state.go('login');
    }
    else {
          $state.go('home');
          }
  }
});
