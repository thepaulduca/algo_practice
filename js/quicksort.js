// pick a pivot - choose the last one
// everything smaller in one arry
// everything larger in a different arry
// then call quicksort on each list recursively

function quicksort(arry){
  if(arry.length <= 1) return arry;
  var pivot = arry.pop();
  var bigger = []
  var smaller = []
  for(let i = 0; i < arry.length; i ++){
    if(arry[i] < pivot){
      smaller.push(arry[i])
    } else {
      bigger.push(arry[i])
    }
  }
  return [...quicksort(smaller), pivot, ...quicksort(bigger)]
 }

console.log(quicksort([2,3,15,3]))
