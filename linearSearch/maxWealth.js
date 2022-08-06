const getMaxWealth = (arr) => {
  let maxWealth = 0;
  if(!Array.isArray(arr))
  {
    return 'Not an array';
  }
  if(isInvalidInput(arr))
  {
    return 'Some input is not a number';
  }
  for(let index = 0; index <  arr.length; index++)
  {
    let sum = getSum(arr[index]);
    if(maxWealth < sum)
    {
      maxWealth = sum
    }
  }
  return maxWealth;
};

const isInvalidInput = (arr) => {
  //accepts 2D array
  for(let index1 = 0; index1 < arr.length; index1++)
  {
    for(let index2 = 0; index2 < arr[index1].length; index2++)
    {
      if(typeof(arr[index1][index2]) !== 'number')
      {
        return true;
      }
    }
  }
  return false;
};

const getSum = (arr) => {
  let sum = 0;
  arr.forEach(element => {
    sum += element
  });
  return sum
};

export { getMaxWealth }