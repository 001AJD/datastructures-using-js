var myObject = {     
	foo: "bar",     
	func: function() {         
		var self = this;         
		console.log("outer func:  this.foo = " + this.foo);     // have access to foo    
		console.log("outer func:  self.foo = " + self.foo);     // have access to foo
		(function () {    // using function keyword, hence this will have function scope only         
			// console.log("inner func:  this.foo = " + this.foo); // will not have access to foo, since foo is searched inside the inner function scope only
			console.log("inner func:  self.foo = " + self.foo); // referencing the parent block self
		}());     
	}
}; 
myObject.func();

for(let i = 0; i < 5; i ++)
{
	console.log(i);
}

console.log(i + '<= outside the for loop');