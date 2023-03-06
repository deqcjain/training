const arr= [1,2,,3,4]

const it=arr.entries()

for (const [key,value] of it) {
    console.log(key, value);
}