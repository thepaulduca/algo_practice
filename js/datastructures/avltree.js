class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if(!this.root){
      this.root = new Node(value);
    }
    else {
      this.root.add(value);
    }
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }
  add(value) {
    if(value < this.value) {
      if (this.left) {
        this.left.add(value);
      }
      else {
        this.left = new Node(value)
      }
      if(!this.right || this.right.height < this.left.height) {
        this.height = this.left.height +  1;
      }
    }
    else {
        if (this.right) {
          this.right.add(value);
        }
        else {
          this.right = new Node(value)
        }
        if(!this.left || this.right.height > this.left.height) {
          this.height = this.right .height +  1;
        }
    }
    this.balance();
  }
  balance() {
    var rightHeight = (this.right) ? this.right.height : 0;
    var leftHeight = (this.left) ? this.left.height : 0;

    if(leftHeight > rightHeight + 1) {
      var leftRightHeight = (this.left.right) ? this.left.right.height : 0;
      var leftLeftHeight = (this.left.left) ? this.left.left.height : 0;
      if(leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }
      this.rotateLL();
    }
    else if (rightHeight > leftHeight + 1) {
      var rightRightHeight = (this.right.right) ? this.right.right.height : 0;
      var rightLeftHeight = (this.right.left) ? this.right.left.height : 0;
      if(rightLeftHeight >rightRightHeight) {
        this.right.rotateLL();
      }
      this.rotateRR();
    }
  }
    rotateRR() {
      var valuePrior = this.value;
      var leftPrior = this.left;
      this.value = this.right.value;
      this.left = this.right;
      this.right = this.right.right;
      this.left.right = this.left.left;
      this.left.left = leftPrior;
      this.left.value = valuePrior;
      this.right.changeLocation();
      this.changeLocation();
    }
    rotateLL() {
      var valuePrior = this.value;
      var rightPrior = this.right;
      this.value = this.left.value;
      this.right = this.left;
      this.left = this.left.left;
      this.right.left = this.right.right;
      this.right.right = rightPrior;
      this.right.value = valuePrior
      this.right.changeLocation();
      this.changeLocation();
    }
    changeLocation() {
      if(!this.right && !this.left) {
        this.height = 1;
      }
      else if (!this.right || (this.left && this.right.height < this.left.height)) {
        this.height = this.left.height + 1;
      }
      else {
        this.height = this.right.height + 1;
      }
    }

}

var tree = new Tree

tree.add(6)
tree.add(4)
tree.add(3)
tree.add(5)
tree.add(2)
tree.add(1)


console.log(tree)
