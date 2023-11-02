let a = [1,2];
let b = [...a];
b.push(3);
console.log(b.length);
console.log(a.length);

// Example 2
let ar1 = [1,2,{'department' : 'CG'}];
let ar2 = [...ar1]; // creates shallow copy, 1 level deep

ar2[2].department = 'Cue Logic'; // will reflect in both original and copied array, since it is deep update level 2
console.log(ar1);
console.log(ar2);
