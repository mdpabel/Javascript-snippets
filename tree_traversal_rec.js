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
  if (root.left) inOrderTraversal(root.left);
  console.log(root.val);
  if (root.right) inOrderTraversal(root.right);
}

console.log('In order traversal');
inOrderTraversal(root);

function preOrderTraversal(root) {
  `
  root -> left -> right
  1 -> 2 -> 4 -> 5 -> 3 -> 6 -> 7
  `;
  console.log(root.val);
  if (root.left) preOrderTraversal(root.left);
  if (root.right) preOrderTraversal(root.right);
}

console.log('Pre order traversal');
preOrderTraversal(root);

function postOrderTraversal(root) {
  `
  root -> left -> right
  4 -> 5 -> 2 -> 6 -> 7 -> 3 -> 1
  `;
  if (root.left) postOrderTraversal(root.left);
  if (root.right) postOrderTraversal(root.right);
  console.log(root.val);
}

console.log('Post order traversal');
postOrderTraversal(root);
