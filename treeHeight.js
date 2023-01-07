class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  addLeft(node) {
    this.left = node;
  }

  addRight(node) {
    this.right = node;
  }
}

`
        1
      /   \
    2       3
  /   \   /   \
 4     5 6     7
`;

const root = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);

root.addLeft(two);
root.addRight(three);
two.addLeft(four);
two.addRight(five);
three.addLeft(six);
three.addRight(seven);

/**

 */

function height(root) {
  if (root == null) {
    return 0;
  }
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

console.log(height(root));
