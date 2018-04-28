/// <reference types="@types/jasmine" />

import { SinglyLinkedList } from "../../../src/data_structures/SinglyLinkedList";

describe("SinglyLinkedList", () => {
  it("Adds one item", () => {
    const ll = new SinglyLinkedList();
    ll.addFirst(1);
    expect(ll.count).toEqual(1);
  });
});
