def bubble(arry)
  swap = true
  l = arry.length
  while swap do
    swap = false
    (l-1).times do |n|
      if arry[n] > arry[n+1]
        arry[n], arry[n + 1] = arry[n + 1], arry[n]
        swap = true
      end
    end
  end
  arry
end

arry = [5,4,6,2,1,73,4,3,5,6,2,3,6,20,3,2,1]
p bubble(arry)
