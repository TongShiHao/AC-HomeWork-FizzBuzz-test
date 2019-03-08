var should = chai.should()
describe('Test fizBuzz function', function () {
  it('if is 9 return Fizz',
    function () {
      var result = fizzBuzz(9)
      result.should.be.equal('Fizz')
    })
  it('if is 10 return Buzz',
    function () {
      var result = fizzBuzz(10)
      result.should.be.equal('Buzz')
    })
  it('if is 15 return FizzBuzz',
    function () {
      var result = fizzBuzz(15)
      result.should.be.equal('FizzBuzz')
    })
  it('If it cannot be divisible return the integer',
    function () {
      var result = fizzBuzz(2)
      result.should.be.equal(2)
    })
})