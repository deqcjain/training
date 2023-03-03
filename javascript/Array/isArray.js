// all following calls return true
console.log('1 '+Array.isArray([1]));
console.log('2 '+Array.isArray([]));
console.log('3 '+Array.isArray(new Array()));
console.log('4 '+Array.isArray(new Array("a", "b", "c", "d")));
console.log('5 '+Array.isArray(new Array(3)));
// Little known fact: Array.prototype itself is an array:

console.log('6 '+Array.isArray(Array.prototype));
// all following calls return false
console.log('7 '+Array.isArray({}));
console.log('8 '+Array.isArray());
console.log('9 '+Array.isArray(null));
console.log('10 '+Array.isArray(undefined));
console.log('11 '+Array.isArray(17));
console.log('12 '+Array.isArray("Array"));
console.log('13 '+ Array.isArray(true));
console.log('14 '+ Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
console.log(Array.isArray({ __proto__: Array.prototype }));