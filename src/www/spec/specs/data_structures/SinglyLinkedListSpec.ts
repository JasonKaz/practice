/// <reference types="@types/jasmine" />

/* tslint:disable:no-magic-numbers */

import { SinglyLinkedList, SinglyLinkedListNode } from "../../../data_structures/SinglyLinkedList";

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

  it("removeFirst works", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);

    ll.removeFirst();

    const h: SinglyLinkedListNode<number> = ll.head as SinglyLinkedListNode<number>;
    const t: SinglyLinkedListNode<number> = ll.tail as SinglyLinkedListNode<number>;

    expect(ll.count).toEqual(2);
    expect(h.value).toEqual(2);
    expect(t.value).toEqual(3);
  });

  it("removeFirst handles an empty list", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);
    ll.addLast(2);

    ll.removeFirst();
    ll.removeFirst();

    expect(ll.head).toEqual(null);
    expect(ll.tail).toEqual(null);
    expect(ll.count).toEqual(0);

    ll.removeFirst();

    expect(ll.count).toEqual(0);
  });

  it("removeLast works", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);

    ll.removeLast();

    const h: SinglyLinkedListNode<number> = ll.head as SinglyLinkedListNode<number>;
    const t: SinglyLinkedListNode<number> = ll.tail as SinglyLinkedListNode<number>;

    expect(ll.count).toEqual(2);
    expect(h.value).toEqual(1);
    expect(t.value).toEqual(2);
    expect(t.next).toEqual(null);
  });

  it("removeLast handles an empty list", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);
    ll.addLast(2);

    ll.removeLast();
    ll.removeLast();

    expect(ll.head).toEqual(null);
    expect(ll.tail).toEqual(null);
    expect(ll.count).toEqual(0);

    ll.removeLast();

    expect(ll.count).toEqual(0);
  });

  it("removeValue works at head", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);

    ll.removeValue(1);

    const h: SinglyLinkedListNode<number> = ll.head as SinglyLinkedListNode<number>;
    const t: SinglyLinkedListNode<number> = ll.tail as SinglyLinkedListNode<number>;

    expect(ll.count).toEqual(2);
    expect(h.value).toEqual(2);
  });

  it("removeValue works in middle", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);

    ll.removeValue(2);

    const h: SinglyLinkedListNode<number> = ll.head as SinglyLinkedListNode<number>;
    const t: SinglyLinkedListNode<number> = ll.tail as SinglyLinkedListNode<number>;

    expect(ll.count).toEqual(2);
    expect(h.value).toEqual(1);
    expect(t.value).toEqual(3);
  });

  it("removeValue works at tail", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);

    ll.removeValue(3);

    const h: SinglyLinkedListNode<number> = ll.head as SinglyLinkedListNode<number>;
    const t: SinglyLinkedListNode<number> = ll.tail as SinglyLinkedListNode<number>;

    expect(ll.count).toEqual(2);
    expect(h.value).toEqual(1);
    expect(t.value).toEqual(2);
  });

  it("removeValue handles an empty list", () => {
    const ll: SinglyLinkedList<number> = new SinglyLinkedList();
    ll.addLast(1);

    ll.removeValue(1);

    expect(ll.head).toEqual(null);
    expect(ll.tail).toEqual(null);
    expect(ll.count).toEqual(0);

    ll.removeValue(1);

    expect(ll.count).toEqual(0);
  });
});
