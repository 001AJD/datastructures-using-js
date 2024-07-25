function makeAdder(x) {
	return function (y) {
		return x + y;
	};
}

const add10 = makeAdder(10);
console.log(add10(15));
