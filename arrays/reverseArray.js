import { swapArrayElements } from './swapArrayElements.js';
const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while(start < end)
  {
    arr =  swapArrayElements(arr, start, end);
    start++;
    end--;
  }
  return arr;
};
const myArray = [1,2,3,4,5];
console.log(reverseArray(myArray));
export { reverseArray }