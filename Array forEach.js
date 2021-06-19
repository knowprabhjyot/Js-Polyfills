// Make a Map prototype for Array

const array = [1,2,4,12];

Array.prototype.forEachify = function(cb) {
    // this refers to the array
    for(let i = 0;i < this.length;i++) {
        cb(this[i]);
    }
}

console.log(array.forEachify((item) => console.log(item)))
