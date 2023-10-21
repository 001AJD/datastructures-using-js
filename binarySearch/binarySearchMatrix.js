const binarySearchMatrix = (matrix, target) => {
  if(!Array.isArray(matrix))
  {
    return 'Not an array';
  }
  let rows = matrix.length;
  let columns = matrix[0].length;
  let rStart = 0, rEnd = rows - 1, cMid = parseInt((columns/2));
  if(rows === 1)
  {
    performBinarySearch(matrix, 0, 0, (columns - 1), target);
  }
  while(rStart < (rEnd - 1))
  {
    let mid = parseInt(rStart + ((rEnd - rStart) / 2));
    if(matrix[mid][cMid] === target)
    {
      return [mid,cMid];
    }
    if(matrix[mid][cMid] < target)
    {
      rStart = mid;
    }
    else
    {
      rEnd = mid;
    }
  }

  // now we have 2 rows remaining
  if(matrix[rStart][cMid] === target)
  {
    return [rstart,cMid];
  }
  if(matrix[rStart + 1][cMid] === target)
  {
    return [rstart + 1, cMid];
  }

  //search in first half
  if(target <= matrix[rstart][cMid-1])
  {
    return performBinarySearch(matrix, rStart, 0, cMid - 1, target)
  }
  
  //search in second half
  if(target >= matrix[rstart][cMid+1] && target <= matrix[rstart][cols - 1])
  {
    return performBinarySearch(matrix, rStart, cMid + 1, columns -1, target)
  }
  //search in third half
  if(target <= matrix[rstart + 1][cMid-1])
  {
    performBinarySearch(matrix, rStart + 1,0,  cMid - 1, )
  }
  //search in fourth half
  else
  {
    performBinarySearch(matrix, rStart, cMid - 1, )
  }
  
  return [1,2];
};

const performBinarySearch = (matrix, row, cStart, cEnd) => {
  while(cStart < cEnd)
  {
    let mid = parseInt(cStart + ((cStart - cEnd) / 2));
    if(matrix[row][mid] === target)
    {
      return [row,mid];
    }
    if(matrix[row][mid] < target)
    {
      cStart = mid + 1;
    }
    else
    {
      cEnd = mid - 1;
    }
  }
  return [-1,-1];
};