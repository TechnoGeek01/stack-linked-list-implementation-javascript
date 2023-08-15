class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node();
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }

    return ++this.size; // ++i returns the incremented value. i++ returns the value before increment
  }

  pop() {
    if (!this.first) return null;

    var poppedNode = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return poppedNode.value;
  }
}
