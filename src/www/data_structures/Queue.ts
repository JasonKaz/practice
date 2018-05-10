import { SinglyLinkedList, SinglyLinkedListNode } from "./SinglyLinkedList";

/**
 * Typescript implementation of a Queue
 */
class Queue<T> {
  /**
   * Internal linked list
   */
  private readonly ll: SinglyLinkedList<T> = new SinglyLinkedList();

  /**
   * Queues a new value
   * @param value The value to queue
   */
  public enqueue(value: T): void {
    this.ll.addLast(value);
  }

  /**
   * Removes the first item in the queue and returns it
   */
  public dequeue(): T | null {
    if (this.ll.count === 0) {
      return null;
    }

    const tmp: SinglyLinkedListNode<T> = this.ll.head as SinglyLinkedListNode<T>;
    this.ll.removeFirst();

    return tmp.value;
  }

  /**
   * Returns the first value added to the stack
   */
  public peek(): T | null {
    if (this.ll.count === 0) {
      return null;
    }

    return (this.ll.head as SinglyLinkedListNode<T>).value;
  }
}

export { Queue };
