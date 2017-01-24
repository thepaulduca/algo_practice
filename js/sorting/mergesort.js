function mergsort(arry) {
  if(arry.length < 2) return arry;
  var length = arry.length;
  var mid = Math.floor(length/2);
  var left = arry.slice(0, mid);
  var right = arry.slice(mid, length)
  return glue(mergsort(left), mergsort(right))
}

function glue(arry1, arry2) {
  var sorted = [];
  while(arry1.length && arry2.length) {
    if(arry1[0] <= arry2[0]) {
      sorted.push(arry1.shift());
    } else {
      sorted.push(arry2.shift());
    }
  }
  return sorted.concat(arry1, arry2)
}


console.log(mergsort([100,6,2,5,3,2,1,35,2,5,1]))
