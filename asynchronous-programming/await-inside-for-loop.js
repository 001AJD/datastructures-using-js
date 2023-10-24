/*
Will the await inside the for loop block the main thread
  - No, await inside for loop does not block the main thread
  - Code in for loop and the code block after the await keyword will be executed only after await is resolved
*/

async function asyncOperation()
{
  // Simulating an asynchronous operation that takes time
  return new Promise((resolve) => setTimeout(() => resolve('Async result'), 1000));
}

async function main() 
{
  for (let i = 0; i < 5; i++) 
  {
    const result = await asyncOperation();
    console.log(`Iteration ${i}: ${result}`);
  }
  console.log('Done Inside the main function -- will be executed after the await is resolved');
}
console.log('outside the main function');
main();