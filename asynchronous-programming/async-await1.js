const isEven = (n1) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (n1 % 2 === 0) {
				resolve(true);
			} else {
				resolve(false);
			}
		}, 2000);
	});
};

const main = async () => {
	let result = await isEven(10);
	console.log(result);
};

main();
