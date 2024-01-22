/*
// Returns true if the array has a subset array whose sum in zero
// else retruns false
// Time Complexity - O(n)
*/
const sumSubArray = (arr) => {
	let set1 = new Set();
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (set1.has(sum)) {
			return true;
		} else {
			set1.add(sum);
		}
	}
	return false;
};

export { sumSubArray };
