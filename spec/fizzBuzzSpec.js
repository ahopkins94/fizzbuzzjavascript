describe("fizzBuzz", function() {
  var fizzbuzz;
  it("should return fizz if a multiple of 3", function() {
    fizzbuzz = new fizzBuzz();
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });
});
