def mergsort(arry)
  return arry if arry.length < 2
  length = arry.length
  mid = (length/2).floor
  left = arry[0 ... mid]
  right = arry[mid .. -1]
  return glue(mergsort(left), mergsort(right))
end

def glue(arry1, arry2)
  glued = []
  while arry1.length > 0  && arry2.length > 0
    if arry1[0] <= arry2[0]
      glued << arry1.shift
    elsif arry1[0] >= arry2[0]
      glued << arry2.shift
    end
  end
  (glued << arry1 << arry2).flatten
end

p mergsort([3,2,54,2,1])
