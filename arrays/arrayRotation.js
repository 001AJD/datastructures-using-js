/* Rotate array to the left by n positions. shift one element at a time approach
myArray = [1,2,3,4] rotateLeftBy = 3
step 1 -> [2,3,4,1]
step 2 -> [3,4,1,2]
step 3 -> [4,1,2,3]

Time Complexity   = O(Length of array * rotateBy)
Space Complexity  = O(1)
*/

const rotateArrayToLeft = (arr, rotateBy) => {
  rotateBy = rotateBy % arr.length;
  const arrLength = arr.length;
  for(let index = 0; index < rotateBy; index++)
  {
    let temp = arr[index];
    for(let j = 0; j < (arrLength - 1); j++)
    {
      arr[j] = arr[j+1];
    }
    arr[arrLength-1] = temp;
  }
  return arr;
};
const myArray = [1,2,3,4,5];
console.log(myArray);
console.log(rotateArrayToLeft(myArray,1));