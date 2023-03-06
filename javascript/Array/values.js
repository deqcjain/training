const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator);
console.log(iterator.next().value);
for (const it of iterator) {
    console.log(it);
    if (it === 'b')
        break;
}
console.log(iterator.next().value);