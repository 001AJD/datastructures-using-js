const nextLargest = (ar) => {
	let max = ar[0], secondMax;
	for ( let i = 0; i < ar.length; i++ )
	{
		if ( max < ar[i] )
		{
			secondMax = max;
			max = ar[i]
		}
	}
	return secondMax;
}
const input = [2,1,3,4,8,9,7,5];
console.log(nextLargest(input));

export { nextLargest }