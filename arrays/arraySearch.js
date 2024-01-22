/* let arr1 = [10,20,10,10,30,40,50,3,100]
// let arr2 = [10,50,110,20]
// expected op = [true, true, false, true]
// Time Complexity = O(n)
*/
const arraySearch = (arr1, arr2) => {
	let result = [];
	let set1 = new Set();
	arr1.forEach((item) => {
		set1.add(item);
	});

	arr2.forEach((item) => {
		result.push(set1.has(item));
	});

	return result;
};

export { arraySearch };
