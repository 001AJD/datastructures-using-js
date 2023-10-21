const reverseString = (input) => {
  let result = '';
  if(typeof(input) !== 'string')
  {
    result = 'invalid input';
    return result;
  }
  let i = (input.length - 1);
  while(i >= 0)
  {
    result += input.charAt(i);
    i -= 1;
  }
  return result;
};

export { reverseString };