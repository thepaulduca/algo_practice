function fibonacci(n) {
  if (n <= 2){
    console.log(n)
    return 1
  } else {
  console.log(n + "- 1 +" + n + "- 2" )
  return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

fibonacci(5)
