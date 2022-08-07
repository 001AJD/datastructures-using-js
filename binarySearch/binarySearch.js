const binarySearch = (arr, target) => {
  if(!Array.isArray(arr))
  {
    return 'Not an array';
  }
  let start = 0;
  let end = arr.length - 1;
  while(start <= end)
  {
    let mid = calculateMidIndex(start, end);
    if(arr[mid] === target)
    {
      return mid;
    }
    else if(arr[mid] > target)
    {
      end = mid - 1;
    }
    else
    {
      start = mid + 1;
    }
  }
  return -1;
};

const calculateMidIndex = (start, end) => {
  return parseInt((start + end) / 2);
};

export { binarySearch }