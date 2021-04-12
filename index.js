class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    }
  

  get(pos) {
    if(this.length ===0 || pos>this.length-1){
      throw new Error('OutOfBounds');
    }else
    return this.items[pos]
  }
  

  max() {
    if(this.length ===0){
      throw new Error('EmptySortedList');
    }
    let maximumItem = Math.max(...this.items);
    return maximumItem

  }

  min() {
    if(this.length ===0){
      throw new Error('EmptySortedList');
    }
    let minimumItem = Math.min(...this.items);
    return minimumItem

  }
  
  sum() {
    if(this.length ===0){
      return 0;
    }
    return this.items.reduce((a, b) => a + b);
  }


  avg() {
    if(this.length ===0){
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
