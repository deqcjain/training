const arr=[1,2,2,3,,,4,2,2,114]

const res=arr.filter(v=>v!==2)
console.log(res);

let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(words);
console.log(modifiedWords);