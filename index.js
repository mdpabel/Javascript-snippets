class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let newNode = new Node(value);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  removeTail() {
    let node = this.head;
    if (!node) {
      return;
    }

    if (node && !node.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    while (node && node.next && node.next.next) {
      node = node.next;
    }
    node.next = null;
    this.tail = node;
  }
}

const ll = new SinglyLinkedList();
ll.addToTail(2);

ll.removeTail();

console.log(ll);
