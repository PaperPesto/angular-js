let data = require('./data.json');

// ------- PRENDO I GESTORI ---------
let dictionary = data
    .map(x => x.addetto.contratto.gestore)
    .reduce((map, obj) => {
        map[obj.id.id] = obj;
        return map;
    }, {} );

console.log('dictionary', JSON.stringify(dictionary, null, 2));
// ----------------------------------


// --------------------- TOTALE -------------------
Object.keys(dictionary).forEach(idGestore => {

    let resultTotalReduce = data
        .filter(element => element.addetto.contratto.gestore.id.id == idGestore)
        .reduce((acc, curr) => acc + curr.conteggio.lista.reduce((iacc, icurr) => iacc + icurr.quantita, 0), 0);
    
        console.log(`${idGestore} ${dictionary[idGestore].nome}: ${resultTotalReduce}`);
});

// ------------------------------------------------