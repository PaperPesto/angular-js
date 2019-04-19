let data = require('./data.json');

console.log(data.length);

// data.forEach(x => {
//     console.log('x', JSON.stringify(x, null, 2));
// });

// ------------------------------------------------
let element = data[0];
// console.log('element', element);

let elementList = element.conteggio.lista;
// console.log('element.conteggio.lista', elementList);

// elementList.forEach(e => console.log('e', e.quantita));;

let resultReduce = elementList.reduce((acc, curr) => {
    // console.log('quantita', acc + curr.quantita);
    return acc + curr.quantita;
}, 0);

console.log('resultReduce', resultReduce);
// ------------------------------------------------


// --------------------- TOTALE -------------------
let resultTotalReduce = data.reduce((acc, curr) => acc + curr.conteggio.lista.reduce((iacc, icurr) => iacc + icurr.quantita, 0), 0);
console.log('resultTotalReduce', resultTotalReduce / 60);
// ------------------------------------------------