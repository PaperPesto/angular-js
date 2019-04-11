async function helloAsync(nome) {

    await sleep(3000);
    console.log(nome);
}

async function program(){

    console.log('start');
    await helloAsync('outprogram');
    console.log('stop');
}

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}


async function program2(){
    
    helloAsync('Questa ve bene che sia async');

    console.log('pre-sleep');
    await sleep(3000);
    console.log('post-sleep');

    await program();
    
    await console.log('post-program');
    await helloAsync('out');
}


program2();