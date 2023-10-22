/*
Approach
iterate the string till the end of string
 fetch the value of the char key from the replacement object
 Append to the result string, since strings in js are immutable
 return the result

Time Complexity = O(n), n = length of the input string
*/


const replaceChar = (inputString, replacement) => {
  let result = '';
  for(let i = 0; i < inputString.length; i++)
  {
    result += replacement[inputString[i]];
  }
  return result;
};

export { replaceChar }