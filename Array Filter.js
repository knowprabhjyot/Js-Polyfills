// Make a filter prototype for Array

const array = [1,2,4,12];

Array.prototype.filterify = function(cb) {
  let filteredArray = [];
    // this refers to the array
	this.forEach((item) => {
  	if (cb(item)) {
    	filteredArray.push(item);
    }
  })
  return filteredArray;
}

console.log(array.filterify((item) => item % 2))
