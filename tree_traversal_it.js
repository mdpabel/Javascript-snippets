import { root } from './tree';

`
        1
      /   \
    2       3
  /   \   /   \
 4     5 6     7
`;

function inOrderTraversal(root) {
  `
  left -> root -> right
  4 -> 2 -> 5 -> 1 -> 6 -> 3 -> 7
  `;
  const stack = [];

  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    if (stack.length === 0) break;
    let node = stack.pop();
    console.log(node.val);
    if (node.right) {
      root = node.right;
    }
  }
}

console.log('In order traversal');
// inOrderTraversal(root);

function preOrderTraversal(root) {
  `
  root -> left -> right
  1 -> 2 -> 4 -> 5 -> 3 -> 6 -> 7
  `;
  const stack = [];

  while (true) {
    while (root) {
      console.log(root.val);
      stack.push(root);
      root = root.left;
    }
    if (stack.length === 0) break;
    let node = stack.pop();
    if (node.right) {
      root = node.right;
    }
  }
}

console.log('Pre order traversal');
// preOrderTraversal(root);

function postOrderTraversal(root) {
  `
  left -> right -> root
  4 -> 5 -> 2 -> 6 -> 7 -> 3 -> 1
  `;
  const stack = [];
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    if (stack.length == 0) break;
    let node = stack[stack.length - 1];
    if (node.right) {
      root = node.right;
    } else {
      let temp = stack.pop();
      console.log(temp.val);
    }
  }
}

console.log('Post order traversal');
postOrderTraversal(root);
