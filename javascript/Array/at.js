const at=require('core-js')

const arr=[1,2,3,4,5,6]

function logIndex(cart) {
    return cart.at(-2);
}

const cart=logIndex(arr)
console.log(cart);