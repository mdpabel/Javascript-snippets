class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  addToHead(val) {
    let newNode = new Node(val);
    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  removeTail() {
    if (!this.tail) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}

const ll = new DoublyLinkedList();
ll.addToTail(2);
ll.addToHead(3);
ll.addToHead(4);

console.log(ll);
