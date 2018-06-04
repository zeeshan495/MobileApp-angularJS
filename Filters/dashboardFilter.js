app.filter('myFilter', function(filterService) {
  return function(totalData, manufacturerArray, osArray, cameraArray, storageArray) {
    var tempArr = [];
  //  var filteredArr = [];
    if (totalData != undefined) {
      tempArr = totalData;
      //for manufacturer
    //     if (manufacturerArray.length > 0) {
    //   for ( i = 0; i < tempArr.length; i++) {
    //     var element = tempArr[i];
    //     for ( j = 0; j < manufacturerArray.length; j++) {
    //       var selected = manufacturerArray[j];
    //       if (element.specs.manufacturer == selected) {
    //         filteredArr.push(element);
    //       }
    //     }
    //   }
    //   tempArr = filteredArr;
    // }
var a="manufacturer";
var b="os";
var c="camera";
var d="storage";

if (manufacturerArray.length > 0) {
  tempArr=filterService.myFunc(manufacturerArray,tempArr,a);
  
}
if (osArray.length > 0) {
    tempArr=filterService.myFunc(osArray,tempArr,b);
  }
  if (cameraArray.length > 0) {
      tempArr=filterService.myFunc(cameraArray,tempArr,c);
    }
    if (storageArray.length > 0) {
        tempArr=filterService.myFunc(storageArray,tempArr,d);
}
      //for OS
      // filteredArr = [];
      // if (osArray.length > 0) {
      //   for (i = 0; i < tempArr.length; i++) {
      //     var element = tempArr[i];
      //     for (j = 0; j < osArray.length; j++) {
      //       var selected = osArray[j];
      //       if (element.specs.os == selected) {
      //         filteredArr.push(element);
      //       }
      //     }
      //   }
      //   tempArr = filteredArr;
      // }

      //for camera
      // filteredArr = [];
      // if (cameraArray.length > 0) {
      //   for (i = 0; i < tempArr.length; i++) {
      //     var element = tempArr[i];
      //     for (j = 0; j < cameraArray.length; j++) {
      //       var selected = cameraArray[j];
      //       if (element.specs.camera == selected) {
      //         filteredArr.push(element);
      //       }
      //     }
      //   }
      //   tempArr = filteredArr;
      // }

      //for storage
    //   filteredArr = [];
    //   if (storageArray.length > 0) {
    //     for (i = 0; i < tempArr.length; i++) {
    //       var element = tempArr[i];
    //       for (j = 0; j < storageArray.length; j++) {
    //         var selected = storageArray[j];
    //         if (element.specs.storage == selected) {
    //           filteredArr.push(element);
    //         }
    //       }
    //     }
    //     tempArr = filteredArr;
    //   }
    // }
    return tempArr;
}
}
});
