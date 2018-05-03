/// <reference types="@types/jasmine" />

import { isSubArrayPrime } from "../../../src/problems/is-sub-array-prime";

/* tslint:disable:no-magic-numbers */

describe("isPrime", () => {
  it("Gets correct values", () => {
    expect(isSubArrayPrime([1, 2, 3, 5, 5, 4, 7, 8, 9], 2, 5)).toEqual(true);
    expect(isSubArrayPrime([1, 6, 4, 5, 5, 4, 7, 8, 9], 1, 4)).toEqual(false);
  });
});
