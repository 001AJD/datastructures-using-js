/*
Approach
check if the length of two string are equal
  if not, then not an anagram
    return false
  if yes, 
    convert the string to lower case
    push all the characters into two separate map with correct occurrence count as value
    check if 2 maps are equals or not
    if yes, then return true
    if not, then return false

Time Complexity = O(n)
*/

const isAnagram = (str1, str2) => {
	let result = true;
	if (typeof str1 !== "string" || typeof str2 !== "string") {
		result = "invalid input";
		return result;
	}
	if (str1.length !== str2.length) {
		result = false;
		return result;
	}
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();

	const map1 = new Map();
	const map2 = new Map();

	for (let i = 0; i < str1.length; i++) {
		if (!map1.has(str1.charAt(i))) {
			map1.set(str1.charAt(i), 1);
		} else {
			let sum = map1.get(str1.charAt(i));
			map1.set(str1.charAt(i), sum + 1);
		}

		if (!map2.has(str2.charAt(i))) {
			map2.set(str2.charAt(i), 1);
		} else {
			let sum = map2.get(str2.charAt(i));
			map2.set(str2.charAt(i), sum + 1);
		}
	}

	for (const [key, value] of map1) {
		if (!map2.has(key)) {
			result = false;
			break;
		} else {
			if (map2.get(key) !== value) {
				result = false;
				break;
			}
		}
	}
	return result;
};

export { isAnagram };

console.log(isAnagram("ABBA", "ABBAA"));
console.log(isAnagram("ABBa", "ABBA"));
console.log(isAnagram("ABBA", 2));
