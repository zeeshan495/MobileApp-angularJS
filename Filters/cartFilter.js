app.filter('cartfilter', function() {
  return function(totalData, cartArr) {
    console.log("inside cart filter");
    var tempArray = [];
    var filteredArr=[];

    console.log(totalData);
    console.log(cartArr);

    if (totalData != undefined) {
      console.log("inside undefined condition");
      for ( i = 0; i < totalData.length; i++) {
          var element = totalData[i];
        for ( j = 0; j < cartArr.length; j++) {
          var selected = cartArr[j];
          console.log("inside for loop");
          if (element == selected)
          {
              filteredArr.push(element);
              console.log("inside if condition");
          }
    }
  }
}
tempArr = filteredArr;
return tempArr;
}
});
