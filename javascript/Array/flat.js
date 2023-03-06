const flat=require('core-js')

const arr=[1,2,[3,4,[5,6]]]
const obj={
    length:3,
    0:[1,2,3],
    1:{
        length:2,
        0:[4,5],
        1:6
    },
    2:{
        length:2,
        0:1,
        1:2
    }
}
const logger=Array.prototype.flat.call(obj);
console.log(logger);

const temp=arr.flat(2)
console.log(temp);