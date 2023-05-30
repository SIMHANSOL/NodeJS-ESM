import { sum } from "../src/math";

test("sum test", () => {
  const a = 1;
  const b = 2;

  expect(sum(a, b)).toBe(a + b);
});
