const data = {
	name: "John",
	age: 30,
	address: [
		{
			type: "home",
			street: "123 Main St",
			city: "New York",
			state: "NY",
			zip: "10001",
		},
		{
			type: "office",
			street: "MY STREET",
			city: "MY CITY",
			state: "MH",
			zip: "90009",
		},
	],
	phoneNumbers: [
		{
			type: "home",
			number: "555-555-1234",
		},
		{
			type: "work",
			number: "555-555-5678",
		},
	],
};

const recurseNestedObj = (obj) => {
	for (let key in obj) {
		if (typeof obj[key] === "object") {
			// check if the first key has an object
			if (Array.isArray(obj[key])) {
				// check if the first key has an array
				for (let i = 0; i < obj[key].length; i++) {
					recurseNestedObj(obj[key][i]);
				}
			} else {
				recurseNestedObj(obj[key]); // recursively call function for value of type object
			}
		} else {
			console.log(`${key} ==> ${obj[key]}`);
		}
	}
};

recurseNestedObj(data);
