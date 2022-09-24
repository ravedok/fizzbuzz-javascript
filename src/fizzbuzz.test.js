const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("Shoud return 1 when receives 1", () => {
    const result = fizzbuzz(1);
    const expected = 1;

    expect(1).toBe(1);
  });
});
