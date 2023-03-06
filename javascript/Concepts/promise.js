const { rejects } = require("assert");
const fetch = require("node-fetch");
const { resolve } = require("path");

// const username='deqcjain'

// const promise=fetch(`https://api.github.com/users/${username}`)

// console.log(promise);

// promise.then((user)=>{
//     console.log(user);
// })
// promise.catch((e)=>{
//     console.log(e);
// })

const promise = apiFunc(true)
.then((orderId)=>{
    return orderId;
})
.then((orderId)=>{
    console.log(orderId);
    return payment();
})
.then(paymentInfo=>{
    console.log(paymentInfo);
})
.catch((err)=>{
    console.log(err.message);
})

function apiFunc(flag) {
    
    const pr=new Promise((resolve,reject)=>{
        const orderId="12345"
        if(!flag){
            const err=new Error('test error message')
            reject(err)
        }
        else{
            setTimeout(() => {
                console.log("resolved promise");
                resolve(orderId)
            }, 5000);
        }
    })
    return pr;
}

function payment() {
    const pr=new Promise((resolve,reject)=>{
        resolve("payment successful")
    })
    return pr;
}
    