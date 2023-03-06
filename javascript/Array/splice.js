const flat = require('core-js')
const arr = [1, 2, 3, 4, 5, 6];
const arr1 = [60, 20]
const temp1 = arr1.flat()
const temp = arr.splice(0, 2, temp1)
console.log(temp); // returns deleted items in array
console.log(arr); //changes arr

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)