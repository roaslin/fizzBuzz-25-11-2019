export default class FizzBuzz {
    play(number) {
        if (isDivisibleBy5(number) && isDivisibleBy3(number)) {
            return "FizzBuzz";
        }
        if (isDivisibleBy5(number)) {
            return "Buzz";
        }

        if (isDivisibleBy3(number)) {
            return "Fizz";
        }
        return number.toString();
    }
}

function isDivisibleBy3(number) {
    return number % 3 == 0;
}

function isDivisibleBy5(number) {
    return number % 5 == 0;
}

