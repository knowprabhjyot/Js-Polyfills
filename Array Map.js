// Make a Map prototype for Array

const array = [1,2,4,12];

Array.prototype.mapify = function(cb) {
  let mappedArray = [];
    // this refers to the array
	this.forEach((item) => {
       mappedArray.push(cb(item));
  })
  return mappedArray;
}

console.log(array.mapify((item) => item * 2));
