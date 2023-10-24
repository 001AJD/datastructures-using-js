/*
Approach
- Create Mapping between pattern and input string
- concat the string as per the pattern
- compare the input string with the new concatenated string

Time Complexity = O(n);
*/

const wordPattern = (inputStr, pattern) => {
  let result = '', isMatching = false;
  let uniqueCharacters = new Map();
  if(pattern.length !== inputStr.split(' ').length)
  {
    isMatching = false;
  }
  for(let i = 0; i < pattern.length; i++)
  {
    // check if the char already exists in the map
    if(uniqueCharacters.has(pattern[i]))
    {
      if(uniqueCharacters.get(pattern[i]) !== inputStr.split(' ')[i])
      {
        isMatching = false;
        break;
      }
    }
    else
    {
      uniqueCharacters.set(pattern[i], inputStr.split(' ')[i]);
    }
  }
  for(let i = 0; i < pattern.length; i++)
  {
    result += uniqueCharacters.get(pattern[i]) + ' ';
  }
  result = result.trim();
  isMatching = (inputStr === result);
  return isMatching;
};

export { wordPattern };