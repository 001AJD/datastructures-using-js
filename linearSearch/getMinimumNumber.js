const getMinimumNumber = (arr) => {
  if(!Array.isArray(arr))
  {
    return "Not an array";
  }
  let min = arr[0];
  arr.forEach(element => {
    if(element < min)
    {
      min = element;
    }
  });
  return min;
};

export { getMinimumNumber }