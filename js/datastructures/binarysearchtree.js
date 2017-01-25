class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// duplicate values should go to right tree

 class Tree {
  constructor() {
    this.root = null;
    this.length = 0;
  }
  add(value) {
    var node = new Node(value)
    this.length ++;
    if(!this.root) return this.root = node;
    let current = this.root;
    while(true) {
      if(current.value > node.value) {
        // go left
        if(current.left) {
          current = current.left;
        } else {
          current.left = node;
          return;
        }
      } else {
        // go right
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return;
        }
      }
    }
  }

  search(value) {
    if(this.root.value === value) return this.root;
    var current = this.root;
    while(true) {
      if(current.value === value) {
        return current;
      } else if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right
      } else if (!current) {
        return null;
      }
    }
  }

  delete(value) {
    var node = search(value);
    if(!node) return null;
  }

 }


const tree = new Tree
tree.add(4)
tree.add(2)
tree.add(7)
tree.add(1)
tree.add(6)
console.log(tree)

console.log(tree.search(7))
