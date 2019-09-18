var myPromise = new Promise((resolve, reject) => {
    let rnd = Math.random()*2;

    if(rnd>1) resolve(rnd);
    else reject('Un gran bell\'errore: ' + rnd);
});

let resolve = function(data){
    console.log('resolve', data);
}

let reject = function(error){
    console.log('reject', error);
}

myPromise.then(resolve).catch(reject);