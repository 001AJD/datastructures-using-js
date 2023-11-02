let inputArray = ['a','b','c','d','e','f','g','h','i'];
// outputArray: ['i','f','c','h','e','b','g','d','a'];

const transform = (ar) => {
	let op = [];
	for ( let i = 1; i <= ar.length/3; i++ )
	{
		for ( let j = ar.length - i; j >= 0 ;j -= 3 )
		{
			op.push(ar[j]);
		}
	}
	return op;
}

console.log(transform(inputArray));
