/*
Problem: https://leetcode.com/problems/search-a-2d-matrix/
*/

const searchMatrices = (arr, target) => {
  if(!Array.isArray(arr))
  {
    return 'Not an array';
  }
  let row = 0, column = arr[row].length-1;
  while(row <= arr.length-1 && column >= 0)
  {
    if(arr[row][column] === target)
    {
      console.log(row,column);
      return ([row,column]);
    }
    if(arr[row][column] < target)
    {
      row += 1;
    }
    else
    {
      column -= 1;
    }
  }
  return false;
};

const input = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
];
const target = 300;
console.log(searchMatrices(input, target));

export { searchMatrices }