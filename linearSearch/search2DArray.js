const search2DArray = (arr, target) => {
  let result = [];
  if(!Array.isArray(arr))
  {
    return 'Not an array'
  }
  arr.forEach((element, index)=>{
    element.forEach((innerElement, innerIndex)=>{
      if(target === innerElement)
      {
        result = [index,innerIndex];
      }
    });
  });
  return result;
};

export { search2DArray }