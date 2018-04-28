/// <reference types="@types/jasmine" />

/* tslint:disable:no-magic-numbers */

import { SinglyLinkedList, SinglyLinkedListNode } from "../../../src/data_structures/SinglyLinkedList";

describe("SinglyLinkedList", () => {
  it("Adds one item", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addFirst(1);
    expect(ll.count).toEqual(1);
    expect(ll.head).not.toEqual(null);
    expect(ll.tail).not.toEqual(null);
    expect((ll.head as SinglyLinkedListNode<number>).value).toEqual(1);
    expect((ll.tail as SinglyLinkedListNode<number>).value).toEqual(1);
  });

  it("addLast adds to end", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);
    ll.addLast(2);

    const h: SinglyLinkedListNode<number> = ll.head as SinglyLinkedListNode<number>;
    const t: SinglyLinkedListNode<number> = ll.tail as SinglyLinkedListNode<number>;

    expect(h.value).toEqual(1);
    expect(t.value).toEqual(2);
    expect((h.next as SinglyLinkedListNode<number>).value).toEqual(2);
    expect(t.next).toEqual(null);
  });

  it("addFirst adds to start", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addFirst(1);
    ll.addFirst(2);

    const h: SinglyLinkedListNode<number> = ll.head as SinglyLinkedListNode<number>;
    const t: SinglyLinkedListNode<number> = ll.tail as SinglyLinkedListNode<number>;

    expect(h.value).toEqual(2);
    expect(t.value).toEqual(1);
    expect((h.next as SinglyLinkedListNode<number>).value).toEqual(1);
    expect(t.next).toEqual(null);
  });

  it("Mixed adding works as expected", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addFirst(1);
    ll.addFirst(2);
    ll.addLast(3);
    ll.addLast(4);
    ll.addFirst(5);

    const h: SinglyLinkedListNode<number> = ll.head as SinglyLinkedListNode<number>;
    const n2: SinglyLinkedListNode<number> = h.next as SinglyLinkedListNode<number>;
    const n3: SinglyLinkedListNode<number> = n2.next as SinglyLinkedListNode<number>;
    const n4: SinglyLinkedListNode<number> = n3.next as SinglyLinkedListNode<number>;
    const t: SinglyLinkedListNode<number> = ll.tail as SinglyLinkedListNode<number>;

    expect(h.value).toEqual(5);
    expect(n2.value).toEqual(2);
    expect(n3.value).toEqual(1);
    expect(n4.value).toEqual(3);
    expect(t.value).toEqual(4);
  });
});
