const arr=[1,2,3,4]

for(var x in arr){
    console.log(x, arr[x]);
}

for(var x of arr){
    console.log(x);
}