/// <reference types="@types/jasmine" />

import { randomizeArrayOrder, randomizeArrayOrderInPlace } from "../../../src/problems/randomize-array-order";
import * as helpers from "../../helpers/";

/* tslint:disable:no-magic-numbers */

describe("randomizeArrayOrder", () => {
  const ar: number[] = [1, 2, 3];

  it("Contains the same element count", () => {
    const answer: number[] = randomizeArrayOrder(helpers.cloneArray(ar));

    expect(answer.length).toEqual(ar.length);
  });

  it("Contains the same elements", () => {
    const answer: number[] = randomizeArrayOrder(helpers.cloneArray(ar));

    expect(answer.every((e: number) => ar.indexOf(e) !== -1)).toEqual(true);
  });
});

describe("randomizeArrayOrderInPlace", () => {
  const ar: number[] = [1, 2, 3];

  it("Contains the same element count", () => {
    const answer: number[] = randomizeArrayOrderInPlace(helpers.cloneArray(ar));

    expect(answer.length).toEqual(ar.length);
  });

  it("Contains the same elements", () => {
    const answer: number[] = randomizeArrayOrderInPlace(helpers.cloneArray(ar));

    expect(answer.every((e: number) => ar.indexOf(e) !== -1)).toEqual(true);
  });
});
