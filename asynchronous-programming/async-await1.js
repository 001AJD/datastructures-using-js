const isEven = (num) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (num % 2 === 0) {
				resolve(true);
			} else {
				reject(false);
			}
		}, 2000);
	});
};

const main = async (num) => {
	try {
		const result = await isEven(num);
		console.log(result);
	} catch (err) {
		console.error(err);
	}
};
main(9);
main(10);
