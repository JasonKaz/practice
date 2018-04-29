/// <reference types="@types/jasmine" />

/* tslint:disable:no-magic-numbers */

import { Queue } from "../../../src/data_structures/Queue";

describe("Queue", () => {
  it("Adds to beginning", () => {
    const q: Queue<number> = new Queue();
    q.enqueue(1);
    expect(q.peek()).toEqual(1);

    q.enqueue(2);
    expect(q.peek()).toEqual(1);
  });

  it("Dequeues first value", () => {
    const q: Queue<number> = new Queue();
    q.enqueue(1);
    q.enqueue(2);

    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(null);
    expect(q.peek()).toEqual(null);
  });
});
