app.service('filterService', function($rootScope) {
    this.myFunc = function (featureArray,tempArr) {
      var filteredArr=[];

    for ( i = 0; i < tempArr.length; i++) {
        var element = tempArr[i];
      for ( j = 0; j < featureArray.length; j++) {
        var selected = featureArray[j];
        if (element.specs.manufacturer == selected ||
                element.specs.storage == selected ||
                    element.specs.os == selected ||
                        element.specs.camera == selected ) {
          filteredArr.push(element);
        }
      }
    }
    tempArr = filteredArr;
    return tempArr;
    }

    this.readData=function(){
      cartArr=localStorage.getItem("testJSON");
       cartobject=JSON.parse(cartArr);
     if (cartobject==null) {
       $rootScope.arrayOfCart=[];
      var  myJSON = JSON.stringify($rootScope.arrayOfCart);
        localStorage.setItem("testJSON", myJSON);
        var cartArr=localStorage.getItem("testJSON");
        $rootScope.arrayOfCart=JSON.parse(cartArr);
        // localStorage.setItem("cartArr length", arrayOfCart.length);
        return $rootScope.arrayOfCart;
      }


      return cartobject;
    }
});
