class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    this.length ++;
    if(!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
     this.tail = node;
  }
  pop() {
    return this.delete(this.length-1);
  }
  // inner method, for finding stuff
  _find(value, test=this._test) {
    let current = this.head;
    let i = 0;
    while(current){
      // if test returns the value you are looking for
      // return the value
      if(test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }
  get(index){
    if(index > this.length) return null
    var start = this.head
    for(var i = 1; i < index; i ++){
      start = start.next
    }
    var node = start
    if(!node) return null;
    return node.value
  }
  //  the test used to compare what your looking for
  //  returns true or false
  //  sometimes you will be looking using a key
  //  sometimes you will be searching using an object
  _test(a, b) {
    return a === b;
  }
  // testIndex - did i find the correct index
  _testIndex(search, __, i) {
    return search === i;
  }
  delete(index) {
    if(index === 0) {
      var head = this.head;
      if(head) {
        this.head = head.next;
      } else {
        this.head = null;
      }
      this.length--;
      return head.value
    }
    var node = this.get(index-1, this.testIndex);
    var excise = node.next;
    if (!excise) return null
    node.next = excise.next;
    if(node.next && !node.next.next) this.tail = node.next;
    this.length--;
    return excise.value
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

var link = new LinkedList

link.push(5)
link.push(3)
link.push(7)
link.push(9)
link.push(4)


console.log(link.length)
link.delete(3)
console.log(link.length)
var ans = link.get(3)
console.log(ans)
