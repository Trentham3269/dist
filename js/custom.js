// Haversine distance function
function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var radlon1 = Math.PI * lon1/180
    var radlon2 = Math.PI * lon2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return Math.round(dist*1000)/1000
};

// Array sum function
function sumArray(arr) {
    var sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum;
};

// Calculate average distance
function avgDist(distArr, cntArr) {
  // Sum distances and counts arrays 
  var sumDistances = sumArray(distances);
  var sumCounts = sumArray(counts);
  // Average distance calc
  var avgDistance = sumDistances / sumCounts;
  console.log(avgDistance);
};