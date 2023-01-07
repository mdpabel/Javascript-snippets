class Item {
  constructor(val) {
    this.val = val;
    this.min = null;
    this.max = null;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }

  __top() {
    return this.stack[this.stack.length - 1];
  }

  push(val) {
    const item = new Item(val);
    if (this.stack.length == 0) {
      item.min = val;
      item.max = val;
      this.stack.push(item);
      return;
    }
    let top = this.__top();
    item.max = Math.max(top.max, val);
    item.min = Math.min(top.min, val);
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop().val;
  }

  getMin() {
    return this.__top().min;
  }

  getMax() {
    return this.__top().max;
  }

  pick() {
    return this.stack[this.stack.length - 1].val;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(7);
stack.push(2);

min = stack.getMin();
max = stack.getMax();
pop = stack.pop();

console.log(min, max, pop);

min = stack.getMin();
max = stack.getMax();
pop = stack.pop();

console.log(min, max, pop);

min = stack.getMin();
max = stack.getMax();
pop = stack.pop();

console.log(min, max, pop);
