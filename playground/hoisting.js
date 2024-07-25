"use strict";
let obj = {
	a: 10,
	print: function print() {
		let a = 120;
		console.log(this.a); // This will log 10
	},
};

obj.print();

var a = 50; // Declare a global variable 'a'

function print() {
	let a = 120;
	console.log(this.a); // This will log 50
}

print();
