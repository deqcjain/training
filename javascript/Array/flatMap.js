const flatMap=require('core-js')

const arr=[1,2,3,[4,5, ""],6]

const temp=arr.flatMap(x=>[x+2])
console.log(temp);