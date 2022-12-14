const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("Should return 1 when receives 1", () => {
    const result = fizzbuzz(1);
    const expected = 1;

    expect(expected).toBe(result);
  });

  test("Should return fizz when receives 3", () => {
    const result = fizzbuzz(3);
    const expected = "fizz";

    expect(expected).toBe(result);
  });

  test("Should return buzz when receives 5", () => {
    const result = fizzbuzz(5);
    const expected = "buzz";

    expect(expected).toBe(result);
  });

  test("Should return fizz when receives a multiple of 3", () => {
    const result = fizzbuzz(9);
    const expected = "fizz";

    expect(expected).toBe(result);
  });

  test("Should return fizz when receives a multiple of 5", () => {
    const result = fizzbuzz(10);
    const expected = "buzz";

    expect(expected).toBe(result);
  });

  test("Should return fizzbuzz when receives a multiple of 3 and 5", () => {
    const result = fizzbuzz(15);
    const expected = "fizzbuzz";

    expect(expected).toBe(result);
  });

  test("Should return 0 when receives 0", () => {
    const result = fizzbuzz(0);
    const expected = 0;

    expect(expected).toBe(result);
  });

  test("Should return error when receives not number", () => {
    expect(() => fizzbuzz("15")).toThrow(
      "The entered parameter is not a number."
    );
  });
});
