const isPalindrome = (input) => {
  let result = true;
  if(typeof(input) === 'string')
  {
    result = checkString(input);
  }
  if(typeof(input) === 'number')
  {
    result = checkNumber(input);
  }
  return result;
};

const checkString = (input) => {
  let i1 = 0, i2 = (input.length - 1);
  while(i1 < input.length || i2 >= 0)
  {
    if(input.charAt(i1) !== input.charAt(i2))
    {
      return false;
    }
    i1 += 1;
    i2 -= 1;
  }
  return true;
}

const checkNumber = (input) => {
    let sum = 0, num = input;
    while(num >= 1)
    {
      sum = (sum * 10) + (num % 10)
      num = Math.floor(num / 10);  
    }
    return input === sum;
}
export { isPalindrome };