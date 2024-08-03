/*
 * Queue implementation
 * queue can be initialized with specific size
 * queue is reset after the last de-queue operation on queue
 */

class Queue {
	constructor(size) {
		this.items = []; // queue
		this.front = 0; // for dequeue
		this.rear = 0; // pointer for enqueue
		this.size = size; // queue will be initialized with the specified size
	}

	enqueue(element) {
		if (this.rear === this.size) {
			// if rear reaches to the last index + 1, i.e array index out of bound then queue is full
			return "queue is full, perform de-queue operation to manage space";
		} else {
			this.items[this.rear] = element; // en-queue the element from rear pointer
			this.rear += 1; // increase the rear pointer by 1
			return this.items; // returns the queue
		}
	}

	dequeue() {
		if (this.front === this.size - 1) {
			// if front reaches to last index, that means end of the queue, then return the last element from queue and reset the front and rear pointer to reset the queue
			let result = this.items.slice(this.front);
			this.front = 0;
			this.rear = 0;
			console.log("queue is reset");
			return result;
		} else if (this.isEmpty()) {
			return "empty queue";
		} else {
			this.front += 1;
			return this.items.slice(this.front);
		}
	}

	isEmpty() {
		return this.rear === 0 && this.front === 0 ? true : false;
	}
}

const q1 = new Queue(5);
console.log(q1.enqueue(100));
console.log(q1.enqueue(200));
console.log(q1.enqueue(300));
console.log(q1.enqueue(400));
console.log(q1.enqueue(500));
console.log(q1.enqueue(600));
console.log("dequeued 100 => " + q1.dequeue());
console.log("dequeued 200 => " + q1.dequeue());
console.log("dequeued 300 => " + q1.dequeue());
console.log("dequeued 400 => " + q1.dequeue());
console.log("dequeued 500 => " + q1.dequeue());
console.log(q1.isEmpty());
console.log("dequeue operation on empty queue " + q1.dequeue());
console.log(q1.enqueue(600));
console.log(q1.enqueue(700));
console.log(q1.enqueue(800));
console.log(q1.enqueue(900));
console.log(q1.enqueue(1000));
console.log(q1.enqueue(1100));
console.log(q1.isEmpty());
