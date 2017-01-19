def factorial(n)
  return n if n < 2
  return n * factorial(n-1)
end

puts "A factorial is a number multiplied by each number less then it until 1"
puts "4 factorial = 4 * 3 * 2 * 1 + 24"
puts "Pick a number and find out its Factorial!"
number = gets.chomp.to_i
puts "The factorial of #{number} is #{factorial(number)}"
