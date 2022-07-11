import * as fc from "fast-check";
import { it, expect, describe } from "vitest";

import add from "./main";

describe("add", () => {
  it("should always return a number", () => {
    fc.assert(
      fc.property(fc.array(fc.integer({ min: 0 })), (nums) => {
        expect(typeof add(...nums)).toBe("number");
      })
    );
  });

  it("should always be positive, when the inputs are positive", () => {
    fc.assert(
      fc.property(fc.array(fc.integer({ min: 0 })), (nums) => {
        expect(add(...nums)).toBeGreaterThanOrEqual(0);
      })
    );
  });

  it("should always be negative, when the inputs are negative", () => {
    fc.assert(
      fc.property(fc.array(fc.integer({ max: 0 })), (nums) => {
        expect(add(...nums)).toBeLessThanOrEqual(0);
      })
    );
  });

  it(`should always be equal to or greater than any of its arguments,
        if they are all positive`, () => {
    fc.assert(
      fc.property(fc.array(fc.integer({ min: 0 })), (nums) => {
        nums.forEach((n) => expect(add(...nums)).toBeGreaterThanOrEqual(n));
      })
    );
  });
});
