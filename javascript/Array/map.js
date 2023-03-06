const arr=[1,2,3,,4,5,6]

const updated=arr.map(v=>{
    return v*2
})

console.log(arr);
console.log(updated);


const notArr = {
    length: 3,
    0:1,
    1:2,
    2:3
  };
  console.log(Array.prototype.map.call(notArr, (x) => x ** 2));