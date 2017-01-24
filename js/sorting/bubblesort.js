function bubble(arry) {
  let swap = false
  do {
    swap = false;
    for(let i = 0; i < arry.length; i++) {
      if(arry[i] > arry[i + 1]) {
        console.log(arry)
        let change = arry[i];
        arry[i] = arry[i+1];
        arry[i+1] = change;
        swap = true;
      }
    }
  } while(swap);
  return arry
}

console.log(bubble([20,4,3,5,3,2,5,1]))
