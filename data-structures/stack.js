class Stack {
	constructor() {
		this.items = [];
	}
	push(element) {
		this.items.push(element);
		return this.items[this.items.length - 1];
	}

	pop() {
		if (this.items.length === 0) {
			return "underflow condition";
		} else {
			return this.items.pop();
		}
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		if (this.items.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	size() {
		return this.items.length;
	}
}

const s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(40);

console.log("isEmpty? = " + s1.isEmpty());
console.log("size = " + s1.size());
console.log("peek = " + s1.peek());
console.log("pop = " + s1.pop());
