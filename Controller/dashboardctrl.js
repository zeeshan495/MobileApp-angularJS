var dashCtrl = function($scope,$rootScope,$state,$http,$q,filterService)
{
  $rootScope.arrayOfCart = [];

  $http.get("assets/products.json").then(function(response) {
        $rootScope.myData = response.data;
        // myJSON = JSON.stringify($rootScope.myData);
        // localStorage.setItem("testJSON", myJSON);
    });

    $scope.addcart = function(cartdata) {

    var  cartobject= filterService.readData();
      if (cartobject.length==0) {
        cartobject.push(cartdata);
        console.log("push 1");
        var  myJSON = JSON.stringify(cartobject);
          localStorage.setItem("testJSON", myJSON);
      }else if (cartobject.includes("cartdata")==false) {
          console.log("push 2");
      cartobject.push(cartdata);
      }
        var  myJSON = JSON.stringify(cartobject);
          localStorage.setItem("testJSON", myJSON);

    };

};
app.controller('dashboardctrl', dashCtrl);

 // function exe(a,b,cb) {
 //   cb(a,b);
 // }
//
// function exe(a,b,cb) {
//   return new Promise(function(resolve, reject) {
//     cb(a,b);
//     resolve()
//     // reject("request failed");
//     // setTimeout(cb.bind(null,a,b),1000);
//   });
// }
//
// var sum = function (a,b) {
//   console.log(a+b);
// }
//
// function minus(a,b) {
//   console.log(a-b);
// }
//
// exe(1,2,sum).then(function () {
// console.log("Zeeshan");
// return Promise.resolve(" is MEAN developer")
// }).then(function (data) {
//   console.log("shivraj"+data);
// }).catch(function (err) {
//   console.log(err);
// });
//
// exe(2,1,minus);
