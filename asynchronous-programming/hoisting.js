/*
Variable declarations are processed during compilation phase
*/

a = 2; 
var a; 
console.log(a);

/*
How compiler handles above code
var- a; <= compile time

a = 2; <=runtime
console.log(2)
*/

console.log(b);
var b = 2;
/*
how compiler hanldes above code snippet

var b; <= compile time

console.log(b); <= runtime
b = 2;

*/

func();

var func = () => {
	console.log('inside func!!');
};

/*


*