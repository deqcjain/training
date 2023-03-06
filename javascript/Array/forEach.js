const flatten = (arr) => {
    const result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...flatten(item));
      } else {
        result.push(item);
      }
    });
    return result;
  };

  const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
  console.log(flatten(nested)); 


  const arr=Array(1,2,3,4,5,6,7)

  let sum=0;
  arr.forEach(v => {
    sum+=v;
});

console.log(sum);
  