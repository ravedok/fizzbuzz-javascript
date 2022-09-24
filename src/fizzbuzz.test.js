const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("Shoud return 1 when receives 1", () => {
    const result = fizzbuzz(1);
    const expected = 1;

    expect(expected).toBe(result);
  });

  test("Shoud return fizz when receives 3", () => {
    const result = fizzbuzz(3);
    const expected = "fizz";

    expect(expected).toBe(result);
  });
});
