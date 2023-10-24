/*
LeetCode - https://leetcode.com/problems/word-pattern/description/

Approach
- Create Mapping between pattern and input string
- concat the string as per the pattern
- compare the input string with the new concatenated string

Time Complexity = O(n);
*/

const wordPattern = (inputStr, pattern) => {
  let result = '';
  let uniqueCharacters = new Map();
  let uniqueValues = new Set();
  // check the length of the pattern and the input string array
  if(pattern.length !== inputStr.split(' ').length)
  {
    return false;
  }
  for(let i = 0; i < pattern.length; i++)
  {
    // check if the char already exists in the map
    if(uniqueCharacters.has(pattern[i]))
    {
      // a = 'dog' and b is also equal to 'dog', 1 char has 2 values
      if(uniqueCharacters.get(pattern[i]) !== inputStr.split(' ')[i])
      {
        return false;
      }
    }
    else
    {
      // check if 2 different keys has same value i.e a = 'dog' and b = 'dog'
      if(uniqueValues.has(inputStr.split(' ')[i]))
      {
        return false;
      }
      else
      {
        uniqueValues.add(inputStr.split(' ')[i]);
        uniqueCharacters.set(pattern[i], inputStr.split(' ')[i]);
      }
    }
  }
  for(let i = 0; i < pattern.length; i++)
  {
    result += uniqueCharacters.get(pattern[i]) + ' ';
  }
  result = result.trim();
  return (inputStr === result); 
};

export { wordPattern };