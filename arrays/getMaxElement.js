const findMaxElement = (arr) => {
  const arrLength = arr.length;
  let max = arr[0];
  for(let i = 0; i < arrLength; i++)
  {
    if(max < arr[i])
    {
      max = arr[i];
    }
  }
  return max;
};

const arr = [10,2,3,4,5];
console.log(findMaxElement(arr));

export { findMaxElement }
