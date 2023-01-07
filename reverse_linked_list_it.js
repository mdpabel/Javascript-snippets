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

let p1 = null;
let p2 = one;

while (p2) {
  let p3 = p2.next;
  p2.next = p1;
  p1 = p2;
  p2 = p3;
}

console.log(p1);
