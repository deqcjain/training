const arr="abcde"
const item=arr[Symbol.iterator]();

for(let i=0;i<arr.length;i++){
    console.log(item.next().value);
}

function logIterable(iterable){
        for (const it of iterable) {
            console.log(it);
        }
}

logIterable("abc")