const fizzbuzz = require("./fizzbuzz");

function printFizzBuzzForNumberRange(range) {
  const result = [...Array(10).keys()]
    .map((value) => value + 1)
    .reduce((acc, current) => {
      acc[current] = fizzbuzz(current);
      return acc;
    }, {});

  console.table(result);
}

module.exports = printFizzBuzzForNumberRange;
