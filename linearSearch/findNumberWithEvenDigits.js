const findNumberWithEvenDigits = (arr) =>{
  if(!Array.isArray(arr))
  {
    return 'Not an array';
  }
  let result = 0;
  arr.forEach(element => {
    if(isEvenDigits(element))
    {
      result += 1;
    }
  });
  return result;
};

const isEvenDigits = (num) => {
  if(typeof(num) !== 'number')
  {
    return false;
  }
  // if(countDigits(num) % 2 == 0)
  /* 
  binar places 
  
  3 & 1 odd number
  Binary Places        8421
  3 bin representation 0011
  1 bin representation 0001
  ANDing result        0001
  
  4 & 1 even number
  Binary Places        8421
  4 bin representation 0110
  1 bin representation 0001
  ANDing result        0000

  for odd number 1 place will always be 1
  for even number 1 place will always be 0
  */
  if(((countDigits(num)) & 1) ===  0) // bitwise operator is faster
  {
    return true;
  }
  else
  {
    return false;
  }
};

const countDigits2 = (num, sum = 0) => {
  if(num === 0)
  {
    return sum;
  }
  else
  {
    sum += 1;
    return countDigits(parseInt(num/10), sum);
  }
};

const countDigits = (num) => {
  return parseInt(Math.log10(num) + 1);
};

export{ findNumberWithEvenDigits }