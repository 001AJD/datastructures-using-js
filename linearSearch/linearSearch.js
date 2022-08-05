/* 
Linear Search 
Time Complexity = O(n), where n = size of input
Space Complexity = O(1)
Time increases linearly along with input
*/
const linearSearch = (input, item, start = 0, end = input.length -1) => {
  if(!Array.isArray(input) && typeof(input) !== 'string')
  {
    return 'Not an array';
  }
  if(input.length === 0)
  {
    return -1;
  }
  for(let i = start; i < end; i++)
  {
    if(item === input[i])
    {
      return i;
    }
  }
  return -1;
};

export { linearSearch }