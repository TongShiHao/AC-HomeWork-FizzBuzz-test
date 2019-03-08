function fizzBuzz(num) {
  let str = ''
  if (num % 15 === 0) {
    str += 'FizzBuzz'
  } else if (num % 3 === 0) {
    str += 'Fizz'
  } else if (num % 5 === 0) {
    str += 'Buzz'
  }
  if (str != '') {
    return str
  } else {
    return num
  }
}