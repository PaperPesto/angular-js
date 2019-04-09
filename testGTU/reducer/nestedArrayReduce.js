let mockdata = [
    { nome: 'pippo', supereroe: 'superpippo', altezza: 185, gadget: [{ nome: 'mantello', costo: 1200 }, { nome: 'super razzo', costo: 650 }] },
    { nome: 'paperino', hero: 'paperinik', altezza: 170, gadget: [{ nome: 'mantello', costo: 6000 }, { nome: 'lanciagranate', costo: 250 }, { nome: 'rampino', costo: 800 }] },
    { nome: 'paperone', altezza: 155, gadget: [{ nome: 'deposito', costo: 650000 }] }
];

// Inner reduce - calcola il costo totale di tutti i gadget di tutti i personaggi
let resultreduce = mockdata.reduce((acc, curr, index) => {
    console.log(`${index}: acc=${JSON.stringify(acc)} curr=${JSON.stringify(curr)}`);
    return acc + curr.gadget.reduce((acc, curr) => acc + curr.costo, 0);
}, 0);

// outer reduce - calcola il costo totale dei gadget di pippo
let innerResult = mockdata[0].gadget.reduce((acc, curr) => {
    return acc + curr.costo;
}, 0);

console.log('inner result', innerResult);
console.log('result', resultreduce);