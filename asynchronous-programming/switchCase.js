function myPrint(a)
{
	switch(a)
	{
		case 1:
			console.log('from case 1 '+a);
		case 1: // will execute after above case 1
			console.log('from case 1.1' + a);
			break;
		case 2:
			console.log('from case 2 ' + a);
		default:
			console.log('default case ' +a);
	}
}
myPrint(1);
myPrint(3);
