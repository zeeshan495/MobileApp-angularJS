app.filter('myFilter', function(filterService) {
  return function(totalData, manufacturerArray, osArray, cameraArray, storageArray) {
    var tempArr = [];

    if (totalData != undefined) {
      tempArr = totalData;

    if (manufacturerArray.length > 0) {
      tempArr=filterService.myFunc(manufacturerArray,tempArr);
    }
    if (osArray.length > 0) {
      tempArr=filterService.myFunc(osArray,tempArr);
    }
    if (cameraArray.length > 0) {
      tempArr=filterService.myFunc(cameraArray,tempArr);
    }
    if (storageArray.length > 0) {
      tempArr=filterService.myFunc(storageArray,tempArr);
    }
if (tempArr.length==0) {
var msg="We are sorry.....you specified product is unavailable";
document.getElementById("demo").innerHTML = msg;
}else {
  var msg="";
  document.getElementById("demo").innerHTML = msg;
}
    return tempArr;
}
}
});
