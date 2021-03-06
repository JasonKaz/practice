/**
 * Typescript implementation of a single linked list node
 */
class SinglyLinkedListNode<T> {
  /**
   * The value within the node
   */
  public value: T;

  /**
   * The next node to point to
   */
  public next: SinglyLinkedListNode<T> | null = null;

  public constructor(value: T) {
    this.value = value;
  }
}

/**
 * Typescript implementation of a single linked list
 */
class SinglyLinkedList<T> {
  /**
   * The head of the list
   */
  public head: SinglyLinkedListNode<T> | null = null;

  /**
   * The tail of the list
   */
  public tail: SinglyLinkedListNode<T> | null = null;

  /**
   * How many nodes are in the list
   */
  public count: number = 0;

  /**
   * Handles resetting the head and tail nodes when the count = 0
   */
  private handleZero(): void {
    if (this.count <= 0) {
      this.head = null;
      this.tail = null;
      this.count = 0;
    }
  }

  /**
   * Adds a value to the beginning of the list
   * @param value The value to add
   */
  public addFirst(value: T): void {
    const n: SinglyLinkedListNode<T> = new SinglyLinkedListNode(value);
    const currentHead: SinglyLinkedListNode<T> | null = this.head;

    this.head = n;
    n.next = currentHead;

    this.count += 1;

    if (this.count === 1) {
      this.tail = this.head;
    }
  }

  /**
   * Adds a value to the end of the list
   * @param value The value to add
   */
  public addLast(value: T): void {
    const n: SinglyLinkedListNode<T> = new SinglyLinkedListNode(value);
    const currentTail: SinglyLinkedListNode<T> | null = this.tail;

    this.tail = n;

    if (currentTail !== null) {
      currentTail.next = this.tail;
    }

    this.count += 1;

    if (this.count === 1) {
      this.head = this.tail;
    }
  }

  /**
   * Removes the first item in the list
   */
  public removeFirst(): void {
    if (this.count !== 0) {
      if (this.head !== null) {
        this.head = this.head.next;
        this.count -= 1;
      }

      this.handleZero();
    }
  }

  /**
   * Removes the last item in the list
   */
  public removeLast(): void {
    if (this.count !== 0) {
      let current: null | SinglyLinkedListNode<T> = this.head;
      while (current !== null && current.next !== this.tail) {
        current = current.next;
      }

      if (current !== null) {
        current.next = null;
      }
      this.tail = current;

      this.count -= 1;

      this.handleZero();
    }
  }

  /**
   * Removes the first instance of the value in the list
   * @param value The value to remove
   */
  public removeValue(value: T): void {
    if (this.count !== 0) {
      let current: null | SinglyLinkedListNode<T> = this.head;
      let previous: null | SinglyLinkedListNode<T> = null;
      let idx: number = 0;

      while (current !== null) {
        if (current.value === value) {
          if (previous === null) {
            // Value is at head
            this.head = current.next;
          } else {
            if (idx === this.count - 1) {
              // Value is at tail
              previous.next = null;
              this.tail = previous;
            } else {
              // Value is in the middle
              previous.next = current.next;
            }
          }

          this.count -= 1;
          break;
        }

        previous = current;
        current = current.next;
        idx++;
      }

      this.handleZero();
    }
  }
}

export { SinglyLinkedList, SinglyLinkedListNode };
