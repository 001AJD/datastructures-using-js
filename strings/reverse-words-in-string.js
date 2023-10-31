/*
Approach
- split the string using space
- iterate the new array of words
- reverse each word and concatenate into a result string
- return the result string
Time Complexity = o(n)
*/
const reverseWords = (input) => {
	let result = '';
	let arr = input.split(' ');
	result = arr.reduce((accumulator,currentValue)=>{
		for(let i = (currentValue.length - 1); i >= 0 ; i--)
		{
			accumulator += currentValue.charAt(i);
		}
		accumulator += ' ';
		return accumulator;
	}, '');
	return result;
};
export { reverseWords };