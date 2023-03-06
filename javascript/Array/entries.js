const arr = [1, 2, , 3, 4, null]

const it = arr.entries()

for (const [key, value] of it) {
    console.log(key, value);
}