const reverse = (str) => {
	let result = "";
	let strLength = str.length - 1;
	while (strLength >= 0) {
		result += str.charAt(strLength);
		strLength -= 1;
	}
	return result;
};

export { reverse };

console.log(reverse("ABC"));
console.log(reverse("XYZZZ"));
console.log(reverse("XYZZ123456"));
