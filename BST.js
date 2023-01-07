class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(root, val) {
    if (!root) {
      return new Node(val);
    }
    if (root.val > val) {
      root.left = this.insert(root.left, val);
    } else {
      root.right = this.insert(root.right, val);
    }
    return root;
  }

  min(root) {
    let node = root;
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  /**
   * case 1 : 1 or 0 child return left or right (42, 44)
   * case 2 : min of right sub tree + replace the root val + remove the min of right sub tree
   */

  delete(root, val) {
    if (!root) {
      return null;
    }
    if (root.val > val) {
      root.left = this.delete(root.left, val);
    } else if (root.val < val) {
      root.right = this.delete(root.right, val);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        const min = this.min(root.right);
        root.val = min.val;
        root.right = this.delete(root.right, root.val);
      }
    }
    return root;
  }
}

const root = new Node(5);
root.insert(root, 2);
root.insert(root, 3);
root.insert(root, 1);
root.insert(root, 7);
root.insert(root, 8);
root.insert(root, 6);
root.delete(root, 5);
console.log(root);
