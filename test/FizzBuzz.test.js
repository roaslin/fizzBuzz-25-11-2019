import FizzBuzz from "../src/FizzBuzz"

describe('FizzBuzz Should', () => {
  it('return 1 as String when play 1 as number', () => {
    const fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.play(1)).toBe("1")
  })
  it('return 2 as String when play 2 as number', () => {
    const fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.play(2)).toBe("2")
  })
  it('return Fizz when number is divisible by 3', () => {
    const fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.play(3)).toBe("Fizz")
  })
  it('return 4 as String when play 4 as number', () => {
    const fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.play(4)).toBe("4")
  })
  it('return Buzz when number is divisible by 5', () => {
    const fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.play(5)).toBe("Buzz")
  })
  it('return FizzBuzz when number is divisible by both 5 & 3', () => {
    const fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.play(15)).toBe("FizzBuzz")
  })
})
