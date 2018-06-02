app.filter('myFilter', function() {
  return function(totalData, manufacturerArray, osArray, cameraArray, storageArray) {
    var tempArr = [];
    var filteredArr = [];
    tempArr = totalData;
    //for manufacturer
    for (i = 0; i < tempArr.length; i++) {
      var element = tempArr[i];
      for (j = 0; j < manufacturerArray.length; j++) {
        var selected = manufacturerArray[j];
        if (element.specs.manufacturer == selected) {
          filteredArr.push(element);
        }
      }
    }
    if (filteredArr.length > 0) {
      tempArr = filteredArr;
    }

    //for OS
    filteredArr = [];
    for (i = 0; i < tempArr.length; i++) {
      var element = tempArr[i];
      for (j = 0; j < osArray.length; j++) {
        var selected = osArray[j];
        if (element.specs.os == selected) {
          filteredArr.push(element);
        }
      }
    }
    if (filteredArr.length > 0) {
      tempArr = filteredArr;
    }

    //for camera
    filteredArr = [];
    for (i = 0; i < tempArr.length; i++) {
      var element = tempArr[i];
      for (j = 0; j < cameraArray.length; j++) {
        var selected = cameraArray[j];
        if (element.specs.camera == selected) {
          filteredArr.push(element);
        }
      }
    }
    if (filteredArr.length > 0) {
      tempArr = filteredArr;
    }

    //for storage
    filteredArr = [];
    for (i = 0; i < tempArr.length; i++) {
      var element = tempArr[i];
      for (j = 0; j < storageArray.length; j++) {
        var selected = storageArray[j];
        if (element.specs.storage == selected) {
          filteredArr.push(element);
        }
      }
    }
    if (filteredArr.length > 0) {
      tempArr = filteredArr;
    }

    return tempArr;
  }
});
