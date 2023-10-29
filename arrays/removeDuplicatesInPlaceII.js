/*
Problem 
- https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

*/

const removeDuplicates = (arr) => {
    let u = 0, occurrence = 1;
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] === arr[i-1])
        {
            occurrence++;
        }
        else
        {
            occurrence = 1;
        }
        if(occurrence <= 2)
        {
            arr[++u] = arr[i];
        }
    }
    return (u+1);
};

export { removeDuplicates }