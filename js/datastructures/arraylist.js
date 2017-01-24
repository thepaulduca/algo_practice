class ArrayList {
  constructor(){
     this.length = 0;
     this.data = {};
  }

  push(value){
    this.data[this.length] = value;
    this.length++;
  }

  pop(value){
    return this.delete(this.length-1)
  }

  get(index){
    return this.data[index]
  }

  delete(index){
    var response = this.data[index];
    this._collapseTo(index);
    return response;
  }

  _collapseTo(index){
    for(let i = index; i < this.length; i ++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1];
    this.length--;
  }

}

var myArrayList = new ArrayList

myArrayList.push(4)
myArrayList.push(2)
myArrayList.push(6)
myArrayList.push(22)
myArrayList.push(66)
myArrayList.push(1)

console.log(myArrayList)
console.log(myArrayList.pop())
console.log(myArrayList)
console.log(myArrayList.get(2))
myArrayList.delete(2)
console.log(myArrayList)
