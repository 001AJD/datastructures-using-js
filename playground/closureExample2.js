const Student = () => {
	let fname, lname;
	let school;

	const setName = (first, last) => {
		fname = first;
		lname = last;
	};

	const getName = () => {
		return `${fname} ${lname}`;
	};

	const setSchoolName = (sname) => {
		school = sname;
	};

	const getSchoolName = () => {
		return school;
	};

	return {
		setName,
		getName,
		setSchoolName,
		getSchoolName,
	};
};

const s1 = Student();
s1.setName("John", "Doe");
s1.setSchoolName("MySchool");

console.log(s1.getName());
console.log(s1.getSchoolName());
