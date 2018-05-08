/// <reference types="@types/jasmine" />

/* tslint:disable:no-magic-numbers */

import { Stack } from "../../../data_structures/Stack";

describe("Stack", () => {
  it("Adds to end", () => {
    const s: Stack<number> = new Stack();
    s.push(1);
    expect(s.peek()).toEqual(1);

    s.push(2);
    expect(s.peek()).toEqual(2);
  });

  it("Pops last value", () => {
    const s: Stack<number> = new Stack();
    s.push(1);
    s.push(2);

    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(1);
    expect(s.pop()).toEqual(null);
  });
});
