/* 
Covert the below input array as mentioned
input =  [
	{ user: "userA", city: "Bangalore" },

	{ user: "userB", city: "Delhi" },

	{ user: "userC", city: "Bangalore" },
];

expected output = [
  {
    city:"Bangalore",
    users:[userA, userB]
  },
  {
    city:delhi,
    users:[userB]
  }
]; 
Time Complexity = O(n)
*/
const obj = [
	{ user: "userA", city: "Bangalore" },

	{ user: "userB", city: "Delhi" },

	{ user: "userC", city: "Bangalore" },
];

const result1 = obj.reduce((accumulator, currentValue) => {
	if (accumulator.hasOwnProperty(currentValue.city)) {
		let users = accumulator[currentValue.city];
		users.push(currentValue.user);
		accumulator[currentValue.city] = users;
		return accumulator;
	} else {
		let users = [];
		users.push(currentValue.user);
		accumulator[currentValue.city] = users;
		return accumulator;
	}
}, {});

const keys = Object.keys(result1);

const result2 = keys.reduce((accum, currentValue) => {
	let obj = {
		city: currentValue,
		users: result1[currentValue],
	};
	accum.push(obj);
	return accum;
}, []);

console.log(result2);
