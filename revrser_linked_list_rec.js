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

function reverse(node) {
  if (node == null || node.next == null) {
    return node;
  }
  let p1 = reverse(node.next);

  node.next.next = node;
  node.next = null;

  return p1;
}

reverse(one);
