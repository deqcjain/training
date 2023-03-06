const arr=[10,20,40,50,60]

const res=arr.reduce((acc,curr)=>{
    return acc=acc+curr
},0)

console.log(res);