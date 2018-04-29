import { SinglyLinkedList, SinglyLinkedListNode } from "./SinglyLinkedList";

class Stack<T> {
  private ll: SinglyLinkedList<T> = new SinglyLinkedList();

  public push(value: T): void {
    this.ll.addLast(value);
  }

  public pop(): T | null {
    if (this.ll.count === 0) {
      return null;
    }

    const n: SinglyLinkedListNode<T> = this.ll.tail as SinglyLinkedListNode<T>;
    this.ll.removeLast();

    return n.value;
  }

  public peek(): T | null {
    if (this.ll.count === 0) {
      return null;
    }

    return (this.ll.tail as SinglyLinkedListNode<T>).value;
  }
}

export { Stack };
