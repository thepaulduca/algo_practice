function insort(arry) {
  // iterate through inputed arry
  for(let i = 1; i < arry.length; i++) {
    // itterate through just the sorted part of the arry
    for(let y = 0; y < i; x++) {
      // if the number should be sorted
      if(arry[i] < arry[y]) {
        // then sort it
        const spliced = arry.splice(i, 1);
        arry.splice(j, 0, spliced[0]);
      }
    }
  }

}


console.log(insort([5,32,2,12]))
