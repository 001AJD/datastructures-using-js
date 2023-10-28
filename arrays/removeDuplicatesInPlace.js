/*
Two Pointer Approach. Works on Sorted Array.
- declare pointer u = 0 to keep track of unique element's index
- declare pointer i = 1 to iterate the array
- continue below till end of array
  if arr[u] !== arr[i]
    u += 1
    arr[u] = arr[i]
  else
    continue;
- return the length of an array i.e (u+1), since u is zero based

Time complexity = O(n);
*/

const removeDuplicates = (arr) => {
  let u = 0;
  for(let i = 1; i < arr.length; i++)
  {
    if(arr[u] !== arr[i])
    {
      u += 1;
      arr[u] = arr[i];
    }
  }
  return (u+1); // return the length of unique items in array
};

export { removeDuplicates };