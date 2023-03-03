const arr=[1, , ,2,3]
const temp=['a','b','c']

const newArr=arr.concat(temp)
console.log(newArr);

const s="abcd"

const s1=Array.prototype.concat.call(s,1,2)
console.log(s1);

const obj={
    "hello":"hi"
}

const s2=Array.prototype.concat.call(obj,arr)
console.log(s2);