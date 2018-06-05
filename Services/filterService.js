app.service('filterService', function() {
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
});
