const run = () => 
{
	var a1 = 'ABC';
	{
		var a2 = 'XYZ';
		let a3 = 'PQR';
	}
	console.log(a1);
	console.log(a2);
	console.log(a3);
}

run();