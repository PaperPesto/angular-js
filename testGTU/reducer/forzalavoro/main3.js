let data = require('./data_dec_2018.json');

// ------- PRENDO I GESTORI ---------
let dictionary = data
    .map(x => x.addetto.contratto.gestore)
    .reduce((map, obj) => {
        map[obj.id.id] = obj;
        return map;
    }, {});

// console.log('dictionary', JSON.stringify(dictionary, null, 2));
// ----------------------------------

// ------------ CODE --------------
let codes = data[0].conteggio.lista.map(x => x.descrizione.code).filter(x => x);
console.log('codes', codes);
// --------------------------------

// --------------- DICTIONARY -------------------
let payloadDictionary = {};

codes.forEach(code => {

    data.forEach(record => {

        let match = record.conteggio.lista.find(x => x.descrizione.code == code);

        (payloadDictionary[code] = payloadDictionary[code] || []).push(match);

        // console.log(`match for code ${code}`, match);
    });
});
// -----------------------------------------------

// console.log('payload', JSON.stringify(payloadDictionary, null, 2));
// console.log('elemento 0', JSON.stringify(payloadDictionary['CZ'], null, 2));

// --------------- AGGREGATI --------------------
Object.keys(payloadDictionary).forEach(code => {

    let result = payloadDictionary[code].reduce((acc, curr) => acc + curr.quantita, 0);
    
    console.log(`${code} - ${result / 60}`);
});
// ----------------------------------------------
