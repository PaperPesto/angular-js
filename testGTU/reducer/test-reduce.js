let mockdata = [
    { nome: 'pippo', supereroe: 'superpippo', denaro: 50 },
    { nome: 'paperino', hero: 'paperinik', denaro: 13 },
    { nome: 'paperone', denaro: 2000000 }
];

let mocknumbers = [1, 2, 3, 4, 5];

let resultreduce = mockdata.reduce((acc, curr, index) => {
    console.log(`${index}: acc=${JSON.stringify(acc)} curr=${JSON.stringify(curr)}`);
    return acc + curr.denaro;
}, 0);

console.log('result', JSON.stringify(resultreduce));