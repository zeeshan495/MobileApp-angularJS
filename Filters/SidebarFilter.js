app.filter('deleteDuplicate', function() {
  return function(jsonFile, feature) {
    var featureValue;
    var index;
    var newArr = [];
    if (jsonFile != undefined) {
      for (i = 0; i < jsonFile.length; i++) {
        featureValue = jsonFile[i].specs[feature];
        index = newArr.indexOf(featureValue);
        if (index == -1) {
          newArr.push(featureValue);
        }
      }
    }
    return newArr;
  }
})
