/*
Approach
create new empty Map
check if the key exists in the Map
  if yes, then increament the value by 1
  if not, then add the key and set the value to 1
  continue above steps till the end of string

  Time Complexity = O(n)
*/

const countCharacters = (input)=>{
  let result = new Map();
  for(let i = 0; i < input.length; i++)
  {
    if(!result.has(input[i])) // check if the key exists in the map, if not then set
    {
      result.set(input[i],1);
    }
    else
    {
      let count = result.get(input[i]);
      count += 1;
      result.set(input[i], count); 
    } 
  }
  return result;
};

export { countCharacters }