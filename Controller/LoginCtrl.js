app.controller('loginCtrl',function($scope,$state)
{
  console.log("inside loginCtrl");
  $scope.submit = function(){
    $state.go('home');
  }
});
