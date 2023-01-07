class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

one.next = two;
two.next = three;
three.next = four;

const stack = [];

let node = one;

while (node) {
  stack.push(node);
  node = node.next;
}

let head = stack[stack.length - 1];

while (stack.length > 0) {
  let node = stack.pop();
  node.next = stack[stack.length - 1];
}

console.log(head);
