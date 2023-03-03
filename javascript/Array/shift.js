const names = [1,2,3,,,4,null,undefined];

console.log(names.shift());

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}