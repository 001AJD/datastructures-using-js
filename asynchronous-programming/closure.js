// Example 1
function foo() {
	let a = 10;
	function bar() {
		console.log(a);
	}
	return bar;
}

let baz = foo();
baz();

// Example 2
function wait(message) {
	setTimeout(function timer() {
		console.log(message);
	}, 1000);
}
wait("My Message");
