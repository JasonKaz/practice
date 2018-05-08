/// <reference types="@types/jasmine" />

import { isPrime } from "../../../problems/is-prime";

/* tslint:disable:no-magic-numbers */

describe("isPrime", () => {
  it("Gets correct values", () => {
    expect(isPrime(1)).toEqual(false);
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(3)).toEqual(true);
    expect(isPrime(4)).toEqual(false);
    expect(isPrime(7351)).toEqual(true);
    expect(isPrime(7352)).toEqual(false);
    expect(isPrime(68718952447)).toEqual(true);
    expect(isPrime(1125899839733759)).toEqual(true);
    expect(isPrime(87178291199)).toEqual(true);
    expect(isPrime(433494437)).toEqual(true);
    expect(isPrime(433494337)).toEqual(false);
    expect(isPrime(2971215073)).toEqual(true);
    expect(isPrime(2971215373)).toEqual(false);
  });
});
