class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    const node = new Node(val);
    this.head = node;
    this.tail = node;
  }
}

const snake = new SinglyLinkedList([1, 1]);

const footConsume = (snake, newHead) => {
  const currentHead = snake.head;
  snake.head = newHead;
  snake.head.next = currentHead;
};

const moveSnake = (snake, newHead) => {
  const currentHead = snake.head;
  snake.head = newHead;
  currentHead.newHead = newHead;
  snake.tail = snake.tail.next;
};

const newHead = new Node([1, 2]);
footConsume(snake, newHead);
footConsume(snake, new Node([1, 3]));

console.log(snake);

moveSnake(snake, new Node([1, 4]));

console.log(snake);
