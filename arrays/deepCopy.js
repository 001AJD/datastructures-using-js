let ar1 = [1,2,3,4,5,{'department' : 'CG'}];
let ar1Str = JSON.stringify(ar1); // expensive operation
let ar2 = JSON.parse(ar1Str); // expensive operation

ar2[5].department = 'Cue Logic'
console.log(ar1);
console.log(ar2);