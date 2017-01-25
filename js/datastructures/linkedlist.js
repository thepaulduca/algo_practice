class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length ++;
  }

  getValue(value) {
    var node = this.head;
    for(let i = 1; i < this.length; i ++) {
      if(node.value == value) return node;
      node = node.next;
    }
    return null;
  }

  getIndex(index) {
    if(index > this.length) return null;
    var node = this.head;
    for(let i = 1; i < index; i++) {
      node = node.next;
    }
    return node
  }

  delete(index) {
    if(index === 0) {
      var head = this.head;
      if(head) {
        this.head = head.next;
      } else {
        this.head = null;
      }
      this.length --;
      return head.value;
    }
    var node = this.getIndex(index - 1);
    var excise = node.next;
    if(!node || !excise) return null;
    if(this.tail === excise) this.tail = node;
    node.next = excise.next;
    this.length --;
    return excise.value;
  }

  pop() {
    return this.delete(this.length);
  }

}



const link = new LinkedList

link.push(3)
link.push(2)
link.push(5)
link.push(4)
link.push(7)


console.log(link.length)
console.log(link.delete(2))
console.log(link.length)



for(let i = 1; i < link.length; i ++) {
  console.log(link.getIndex(i))
}

console.log(link.pop())

console.log(link.length)
