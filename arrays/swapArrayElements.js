const swapArrayElements = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};
const arr = [1,2,3,4,5];
const index1 = 0;
const index2 = 4;
console.log(swapArrayElements(arr, index1, index2));

export { swapArrayElements }