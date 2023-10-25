const ping = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Pong');
        }, 2000);
    });
};

const main = async () => {
    console.log('main() started...');
    let response = await ping();
    console.log('Print the response :: main');
    console.log(response);
    console.log('main() execution end!!!');
};

const main2 = () => {
    console.log('main2() started...');
    ping().then((result) => {
        console.log(result + ' :: main2');
        return result;
    }).then((result2) => {
        console.log(result2+' concatenated result :: main2');
    });
    console.log('main2() execution end!!!');
}
main();
main2();