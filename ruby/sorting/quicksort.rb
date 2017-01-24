def quicksort(arry)
  return arry if arry.length <= 1
  pivot = arry.pop
  bigger = []
  smaller = []
  arry.each_with_index do |num, i|
    smaller.push(arry[i]) if arry[i] < pivot
    bigger.push(arry[i]) if arry[i] > pivot
  end
  return [quicksort(smaller), pivot, quicksort(bigger)].flatten
end

p quicksort([4,32,32,5,1])
p quicksort([5,3,21,4,100,1])
