import { SinglyLinkedList, SinglyLinkedListNode } from "./SinglyLinkedList";

class Stack<T> {
  private ll: SinglyLinkedList<T> = new SinglyLinkedList();

  /**
   * Adds a new value to the end of the stack
   * @param value The value to add
   */
  public push(value: T): void {
    this.ll.addLast(value);
  }

  /**
   * Removes the last item in the stack and returns it
   */
  public pop(): T | null {
    if (this.ll.count === 0) {
      return null;
    }

    const n: SinglyLinkedListNode<T> = this.ll.tail as SinglyLinkedListNode<T>;
    this.ll.removeLast();

    return n.value;
  }

  /**
   * Returns the last value added to the stack
   */
  public peek(): T | null {
    if (this.ll.count === 0) {
      return null;
    }

    return (this.ll.tail as SinglyLinkedListNode<T>).value;
  }
}

export { Stack };
