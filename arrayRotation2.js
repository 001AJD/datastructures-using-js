/* Rotate array to the left by n positions. reverse parts of an array
Reverse the entire array
Reverse the first rotateBy Element of an array
Reverse the elements from rotateBy to end index of an array

myArray = [1,2,3,4] rotateLeftBy = 3
step 1 -> [4,3,2,1]
step 2 -> [2,3,4,1]

Time Complexity   = O(Length of array)
Space Complexity  = O(1)
*/

const rotateArrayToLeft = (arr, rotateBy) => {
  rotateBy = rotateBy % arr.length;
  const start = 0;
  const end = (arr.length - 1);
  reverse(arr,start,end);
  reverse(arr,(arr.length-rotateBy),end);
  reverse(arr,start,(end-rotateBy));
  console.log(arr);
  return arr;
};

const reverse = (arr, startIndex, endIndex) => {
  while(startIndex < endIndex)
  {
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
    startIndex += 1;
    endIndex -= 1;
  }
  return arr;
};

const myArray = [1,2,3,4,5];
console.log(rotateArrayToLeft(myArray,1));