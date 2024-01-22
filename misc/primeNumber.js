/*
// Time complexity = O(n)
// n is square root of the input number
*/

const primeNumber = (num) => {
	if (num === 1) {
		return false;
	}
	const sqrt = Math.floor(Math.sqrt(num));
	for (let d = 2; d <= sqrt; d++) {
		if (num % d === 0) {
			return false;
		}
	}
	return true;
};
export { primeNumber };
