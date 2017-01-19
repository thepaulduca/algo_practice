def insertion(arry)
  answer = [arry[0]]
  arry = arry[1..-1]
  arry.each do |num|
    index = 0
    while index < answer.length
      if num <= answer[index]
        answer.insert(index, num)
        break
      elsif index == (answer.length - 1)
        answer.insert(index + 1, num)
        break
      end
      index += 1
    end
  end
  answer
end

# print example

p insertion([5,32,12,2,3,2,1,3,4])
