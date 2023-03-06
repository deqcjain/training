const prices = [7, 500, 8123, 12];
console.log(prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }));
console.log(prices.toLocaleString("en-IN", { style: "currency", currency: "RUP" }));
const array1 = [1, 'a', new Date('18 Aug 2000 04:00 am UTC')];
const localeString = array1.toLocaleString('en-US', { timeZone: 'UTC' });

console.log(localeString);
console.log(prices);