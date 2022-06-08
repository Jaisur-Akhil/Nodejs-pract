/** @format */

//Async
console.log('first ');

setTimeout(() => {
  console.log('2 ec');
}, 2000);

setTimeout(() => {
  console.log('Zero Sec Counter');
}, 0);

console.log('Stop');
