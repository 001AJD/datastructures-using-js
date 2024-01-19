for (var i=1; i<=5; i++) 
{
	(function()
    {
        var j = i;
        setTimeout( function () 
        {
            console.log( j );
        },1000 );
    })();
    
};
	