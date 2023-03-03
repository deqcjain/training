const arr=['helllo',9.2,4,10,-3,null,undefined,-0,0]

const res=arr.sort();
console.log(res);
const res1=arr.sort((a,b)=>{
    return (a<b)
});

console.log(res1);
