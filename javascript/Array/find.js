function isPrime(element) {
    if(element%2===0)return false;
    if(element%3===0)return false;
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start === 0) {
        return false;
      }
      if ((element % (start+2)) === 0) {
        return false;
      }
      start+=5;
    }
    return element > 1;
  }
  
  console.log([4, 5, 8, 12].find(isPrime));