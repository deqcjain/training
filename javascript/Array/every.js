//Falsy values
//false, 0, -0, 0n, "", null, undefined, and NaN.

const arr = [1, , 2, 3, , , null]
console.log(arr.every(x => x > 0));