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
})
