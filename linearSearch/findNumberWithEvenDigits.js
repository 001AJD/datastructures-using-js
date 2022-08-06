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
  if(countDigits(num) % 2 == 0)
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