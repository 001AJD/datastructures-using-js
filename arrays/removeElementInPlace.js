/*
Problem 
- https://leetcode.com/problems/remove-element/description/
Approach - Two pointer approach. In Place Algorithm
- Initialize point k = 0 to keep track of all new elements without, val <-- to be removed, parameter2
- Initialize pointer i = 0 to iterate the array till
- Do below till end of array
  - if arr[i] !== val is true
    then arr[k] = arr[i]
      k++;
      i++;
- return the length of new sub array without the val, i.e (k+1);

Time Complexity = O(n);
*/

const removeElementInPlace = (nums, val) => {
  let k = 0;
  for(let i = 0; i < nums.length; i++)
  {
    if(nums[i] !== val)
    {
      nums[k] = nums[i];
      k +=1;
    }
  }
  return (k);
};
export { removeElementInPlace }