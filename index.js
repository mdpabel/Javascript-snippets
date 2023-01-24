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
    let newNode = new Node(value, null);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }
}

const ll = new SinglyLinkedList();
ll.addToTail(2);
ll.addToTail(3);

console.log(ll);
