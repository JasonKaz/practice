class SinglyLinkedListNode<T> {
  public value: T;
  public next: SinglyLinkedListNode<T> | null = null;

  public constructor(value: T) {
    this.value = value;
  }
}

class SinglyLinkedList<T> {
  public head: SinglyLinkedListNode<T> | null = null;
  public tail: SinglyLinkedListNode<T> | null = null;
  public count = 0;

  private handleZero(): void {
    if (this.count <= 0) {
      this.head = null;
      this.tail = null;
      this.count = 0;
    }
  }

  public addFirst(value: T): void {
    const n = new SinglyLinkedListNode(value);
    const currentHead: SinglyLinkedListNode<T> | null = this.head;

    this.head = n;
    n.next = currentHead;

    this.count += 1;

    if (this.count === 1) {
      this.tail = this.head;
    }
  }

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

  public removeFirst(): void {
    if (this.count !== 0) {
      if (this.head !== null) {
        this.head = this.head.next;
        this.count -= 1;
      }

      this.handleZero();
    }
  }

  public removeLast(): void {
    if (this.count !== 0) {
      let current = this.head;
      while (current !== null && current.next !== this.tail) {
        current = current.next;
      }

      current.next = null;
      this.tail = current;

      this.count -= 1;

      this.handleZero();
    }
  }

  public removeValue(value: T): void {
    if (this.count === 0) {
      return;
    }

    if (this.head.value === value) {
      return this.removeFirst();
    }

    if (this.tail.value === value) {
      return this.removeLast();
    }

    var current = this.head;
    var previous = null;
    while (current !== null) {
      if (current.value === value) {
        previous.next = current.next;
        this.count -= 1;
        break;
      }

      previous = current;
      current = current.next;
    }

    this.handleZero();
  }
}
