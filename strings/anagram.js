/*
Approach
check if the length of two string are equal
  if not, then not an anagram
    return false
  if yes, 
    convert the string to lower case
    push all the characters into two separate array
    sort the array
    check if the arrays are equals 
    if yes, then return true
    if not, then return false

Time Complexity = O(n)
*/

const isAnagram = (str1, str2) => {
  let result = true;
  let map1 = new Map(), map2 = new Map();
  if(str1.length !== str2.length)
  {
    result = false;
    return result;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(let i = 0; i < str1.length; i++)
  {
    // create map1 for str1
    if(!map1.has(str1[i]))
    {
      map1.set(str1[i], 1);
    }
    else
    {
      let count = map1.get(str1[i]);
      map1.set(str1[i], (count+1));
    }
    // create map2 for str2
    if(!map2.has(str2[i]))
    {
      map2.set(str2[i], 1);
    }
    else
    {
      let count = map2.get(str2[i]);
      map2.set(str2[i], (count+1));
    }
  }

  for(const [key, value] of map1)
  {
    if(!map2.has(key))
    {
      result = false;
      break;
    }
    else
    {
      if(value !== map2.get(key))
      {
        result = false;
        break;
      }
    }
  }
  return result;
};

export { isAnagram }