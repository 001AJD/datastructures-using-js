let arr = [10,20,30,40,50];

// Map function -- creates a new array and performs the operation specified in the callback function
let result = arr.map((item)=>{
  return item * 20;
});
console.log('Map function');
console.log(arr);
console.log(result);

// filter function -- creates new array with values passing the specified condition
let filterResult = arr.filter((item) => {
  if(item > 20)
  {
    return item;
  }
});
console.log('Filter function');
console.log(arr);
console.log(filterResult);

// Reduce function
let initialValue = 0;
let reduceResult = arr.reduce((accumulator, currentValue)=>{
  accumulator += currentValue;
  return accumulator;
}, initialValue);
console.log('Reduce Function');
console.log(arr);
console.log(`Sum of array values ${reduceResult}`);

// Splice method
let temp = arr;
// remove the element from the specified index
temp.splice(0,1)
console.log(`Removed 0th index element ${temp}`);

// Slice method
console.log(`Slice method => ${temp.slice(0,2)}`);
console.log(temp);
