/*
// merge the two sorted array, the resultant array should be sorted in ascending order
// expected op = [1,4,5,5,12,13,14,15]
// Time Complexity = O(n)
// n is the length of longest array
*/

let arr1 = [1, 5, 12];
let arr2 = [4, 5, 13, 14, 15];
let arr3 = [];

let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
	if (arr1[i] < arr2[j]) {
		arr3.push(arr1[i]);
		i++;
	} else if (arr1[i] > arr2[j]) {
		arr3.push(arr2[j]);
		j++;
	} else if (arr1[i] === arr2[j]) {
		arr3.push(arr1[i]);
		arr3.push(arr2[j]);
		i++;
		j++;
	}
}

if (arr1.length > arr2.length) {
	for (; i < arr1.length; i++) {
		arr3.push(arr1[i]);
	}
} else {
	for (; j < arr2.length; j++) {
		arr3.push(arr2[j]);
	}
}

console.log(arr3);
