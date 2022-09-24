function fizzbuzz(number) {
  const isFizz = (number) => number % 3 === 0;
  const isBuzz = (number) => number % 5 === 0;

  if (number === 0) {
    return 0;
  }

  if (isFizz(number) && isBuzz(number)) {
    return "fizzbuzz";
  }

  if (isFizz(number)) {
    return "fizz";
  }

  if (isBuzz(number)) {
    return "buzz";
  }

  return number;
}

module.exports = fizzbuzz;
