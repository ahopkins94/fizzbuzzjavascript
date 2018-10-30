describe("fizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  })

  it("should say fizz when a number is divisible by 3", function() {
    expect(fizzbuzz.says(3)).toEqual('fizz')
  });
  it("should say buzz when a number is divisible by 5", function() {
    expect(fizzbuzz.says(5)).toEqual('buzz')
  });
  it("should say fizzbuzz when a number is divisible by 15", function() {
    expect(fizzbuzz.says(15)).toEqual('fizzbuzz')
  });
  it("should return number otherwise", function() {
    expect(fizzbuzz.says(2)).toEqual(2)
  });
});
