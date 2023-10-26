const ping = () => {
    return new Promise((resolve, reject)=>{
        let n = Math.floor(Math.random() * 10);
        console.log(n);
        if( n >= 5)
        {
            setTimeout(()=>{
                resolve('Pong');
            }, 2000);
        }
        else
        { 
            reject('Ping failed');
        }
    });
};

const main = async () => {
    console.log('main() started...');
    try
    {
        let response = await ping();
        console.log('Print the response :: main');
        console.log(response);
        console.log('main() execution end!!!');
    }
    catch(e)
    {
        console.error(e);
    }
};

const main2 = () => {
    console.log('main2() started...');
    ping().then((result) => {
        console.log(result + ' :: main2');
        return result;
    }).then((result2) => {
        console.log(result2+' concatenated result :: main2');
    }).catch((e)=>{
        // handle error
        console.log(e);
    });
    console.log('main2() execution end!!!');
}
main();
main2();