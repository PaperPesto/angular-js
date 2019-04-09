let mockdata = [
    { nome: 'pippo', supereroe: 'superpippo', altezza: 185, gadget: [{ nome: 'mantello', costo: 1200 }, { nome: 'super razzo', costo: 650 }] },
    { nome: 'paperino', hero: 'paperinik', altezza: 170, gadget: [{ nome: 'mantello', costo: 6000 }, { nome: 'lanciagranate', costo: 250 }, { nome: 'rampino', costo: 800 }] },
    { nome: 'paperone', altezza: 155, gadget: [{ nome: 'deposito', costo: 650000 }] }
];

let mapresult = mockdata.map(x => x.nome);
let mapresult2 = mockdata.map(x => x.gadget);
let mapresult3 = mockdata.map(x => x.gadget.nome);  // not working

console.log('mapresult', mapresult);
console.log('mapresult2', JSON.stringify(mapresult2, null, 2));
console.log('mapresult3', JSON.stringify(mapresult3, null, 2));