app.service('filterService', function() {
    this.myFunc = function (featureArray,tempArr,detail) {
      var filteredArr=[];
      console.log(detail);
    for ( i = 0; i < tempArr.length; i++) {
      var element = tempArr[i];
      console.log(element);
      for ( j = 0; j < featureArray.length; j++) {
        var selected = featureArray[j];
        if (element.specs.detail == selected) {
          filteredArr.push(element);
          console.log(filteredArr);
        }
      }
    }
    tempArr = filteredArr;

    return tempArr;

    }
});
