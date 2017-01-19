# run in terminal


def fibo(n)
  n = n.to_i
  return n if n <= 1
  return fibo(n - 1) + fibo(n - 2)
end

puts "Give a number"
answer = gets.chomp
puts "Return Fibbonaci Value in sequence starting with 1"
puts "Input:#{answer}renders fibbonacci number: " + fibo(answer).to_s
